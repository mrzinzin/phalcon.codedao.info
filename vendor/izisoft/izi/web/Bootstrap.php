<?php 
namespace izi\web;
use InvalidArgumentException;
use Phalcon\Mvc\Model;
use Phalcon\Mvc\Model\Query\Builder;
use Izi;
class Bootstrap extends Model 
{
	public function initialize()
	{
		$this->db=$this->getDi()->getShared('db');
	}
	public function bootstrap(){
		require_once APPLICATION_PATH . '/common/config/alias.php';
		/*
		 * 1. Đăng ký domain
		 * 2. Get site configs
		 * 3. Parse rewrite url
		 * 4. Parse url from slug
		 *
		 */ 
		$this->registerDomain();
		// get Izi config
		Izi::$site = (new SiteConfigs())->getConfigs();
		$suffix = isset(Izi::$site['seo']['url_config']['suffix']) ? Izi::$site['seo']['url_config']['suffix'] : '';
		if($suffix != ""){
			// Rewite here
		}
		$this->setHttpsMethod();
		
		$uri = parseUri();
		$module = $uri['module'];
		define('__DEFAULT_MODULE__', $module);
		\Izi::setAlias('@module', $module);
		switch ($module){
			case 'backend': case 'admin':
				defined('__IS_ADMIN__') or define('__IS_ADMIN__', true);
				break;
			default: defined('__IS_ADMIN__') or define('__IS_ADMIN__', false); break;
		}
		$this->getTemplete();
		
		$url = str_replace($suffix,	'',$uri['controller_text']) ;
		$check_database = false;
		
		
		if(strlen($url)>0 && !__IS_SUSPENDED__){
			if(__IS_ADMIN__){
				//$r = (new \yii\db\Query())->select(['id','route','child_code','lft','rgt','bizrule','title','url','is_permission'])
				//->from('{{%admin_menu}}')->where(['url'=>$url,'lang'=>ADMIN_LANG])->one();
				//$r = (new Dbf)->fetchOne("select id,route,child_code,lft,rgt,bizrule,title,url,is_permission from admin_menu
				//where url='$url' and `lang` = '".ADMIN_LANG."'");
			}else{
				
				//$r = (new \yii\db\Query())->select(['a.item_id','a.item_type','a.route','a.url'])
				//->from(['a'=>'{{%slugs}}'])->where(['a.url'=>$url,'a.sid'=>__SID__])->one();
				$r = $this->db->fetchOne("select a.item_id,a.item_type,a.route,a.url from slugs as a
						where a.url='$url' and a.sid = ".__SID__);
				$uri['realController'] = !empty($r) ? $r['route'] : $uri['controller'];
			}
		}
		return $uri;
	}
	
	protected function registerDomain(){
		/*
		 * Pair URI
		 */		 
		$ssl = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') ? true:false;
		$sp = strtolower($_SERVER['SERVER_PROTOCOL']);
		$protocol = substr($sp, 0, strpos($sp, '/')) . (($ssl) ? 's' : '');
		$port = $_SERVER['SERVER_PORT'];
		$port = ((!$ssl && $port=='80') || ($ssl && $port=='443')) ? '' : ':'.$port;
		$host = isset($_SERVER['HTTP_X_FORWARDED_HOST']) ? $_SERVER['HTTP_X_FORWARDED_HOST'] : isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : $_SERVER['SERVER_NAME'];
		$url = $protocol . '://' . $host . $port . ($_SERVER['REQUEST_URI'] ? $_SERVER['REQUEST_URI'] : $_SERVER['HTTP_X_ORIGINAL_URL']);
		$pattern = ['/index\.php\//','/index\.php/'];
		$replacement = ['',''];
		$url = preg_replace($pattern, $replacement, $url);
		$a = parse_url($url);
		$d = [
				'FULL_URL'=>$url,
				'URL_WITH_PATH'=>$a['scheme'].'://'.$a['host'].$port.$a['path'],
				'SITE_ADDRESS'=>'/',
				'SCHEME'=>$a['scheme'],
				'DOMAIN'=>$a['host'],
				"__DOMAIN__"=>$a['host'],
				'DOMAIN_NOT_WWW'=>str_replace('www.','',$a['host']),
		];
		foreach($d as $k=>$v){			 
			defined($k) or define($k,$v);
		}
		
		/*
		 * Get Shop ID
		 */
		 
		$query = new Builder();
		$query->from(['a'=>'izi\web\DomainPointer'])->getQuery()->execute()
		;
		$r = $this->modelsManager->createBuilder()
		
		->from(['a'=> "izi\web\DomainPointer"])
		->innerJoin('\izi\web\Shops','a.sid=b.id','b')
		->where('a.domain=:domain:',
				['domain'=>__DOMAIN__]
		)
		->columns(['a.sid,b.code,a.is_admin,a.module,b.to_date'])
		->getQuery()->getSingleResult()->toArray();
		 
		// 
		$isDomainAdmin = false;
		if(!empty($r)){
			define ('SHOP_TIME_LEFT',countDownDayExpired($r['to_date']));
			define ('SHOP_TIME_LIFE',($r['to_date']));
			define ('__SID__',(float)$r['sid']);
			define ('__SITE_NAME__',$r['code']);
			
			if($r['is_admin'] == 1){
				define('__IS_ADMIN__',true);
				$isDomainAdmin= true;
			}else{
				
			}
		}else{
			define ('__SID__',0);
		}
		 
		define('__DOMAIN_ADMIN__',$isDomainAdmin);
		define('__IS_SUSPENDED__',(new Suspended)->checkSuspended());
		define('ADMIN_ADDRESS',__DOMAIN_ADMIN__ ? '/' : '/admin');
		// Set language
		//$config = Yii::$app->session['config'] ;
		defined('ROOT_LANG') or define("ROOT_LANG",'vi_VN');
		defined('SYSTEM_LANG') or define("SYSTEM_LANG",'vi_VN');
		
		if(isset($config['language'])){
			
		}else{
			$default_lang = (new Language)->getUserDefaultLanguage();
			if(empty($default_lang)){
				$default_lang = ['code'=>'vi_VN','name'=>'Tiếng Việt','country_code'=>'vn'];
			}
			$language = ['language'=>$default_lang,'default_language'=>$default_lang];
			$config = $language;
		}
		defined('__LANG__') or define("__LANG__",$config['language']['code']);
		defined('DEFAULT_LANG') or define("DEFAULT_LANG",$config['default_language']['code']);
		defined('ADMIN_LANG') or define("ADMIN_LANG",SYSTEM_LANG);
	}
	
	private function setHttpsMethod(){
		if((isset(Izi::$site['other_setting'][DOMAIN.'_ssl']) && cbool(Izi::$site['other_setting'][DOMAIN.'_ssl']) == 1) ||
				
				(isset(Izi::$site['other_setting']['ssl']) && cbool(Izi::$site['other_setting']['ssl']) == 1)){
					if(empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] == "off"){
						if(strpos(DOMAIN, 'beta') !== false){
							return true;
						}
						$redirect = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
						header('HTTP/1.1 301 Moved Permanently');
						header('Location: ' . $redirect);
						exit();
					}
					return true;
		}else{
			if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == "on"){
				$redirect = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
				header('HTTP/1.1 301 Moved Permanently');
				header('Location: ' . $redirect);
				exit();
			}
			return false;
			//self::$currency = self::$system_lang['currency'];
		}
		
	}
	
	protected function getTemplete(){
		
		
		// Get templete
		$TEMP = $this->getTempleteName();
		
		///view($config['language'],true);
		define('__TEMP_NAME__', __IS_ADMIN__ ? 'admin' : $TEMP['name']);
		$config['TCID'][__SID__] = !empty($TEMP) ? $TEMP['parent_id'] : 0;
		$config['TID'][__SID__] = !empty($TEMP) ? $TEMP['id'] : 0;
		define('__TID__', $config['TID'][__SID__]);
		define('__TCID__', $config['TCID'][__SID__]);
		
		// Get device
		if(1>0 || !isset($config['device'])){
			$useragent=$_SERVER['HTTP_USER_AGENT'];
			if(preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i',$useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i',substr($useragent,0,4))){
				Izi::$device = 'mobile';
				Izi::$is_mobile = true;
			}
			$config['device'] = Izi::$device;
		}else{
			Izi::$device = $config['device'];
		}
		//Izi::$app->session['config'] = $config;
		if(Izi::$device != 'desktop' && $TEMP['is_mobile'] == 1){
			define('__IS_MOBILE_TEMPLETE__' , true );
			define('__MOBILE_TEMPLETE__' , Izi::$device . DIRECTORY_SEPARATOR );
		}else {
			define('__IS_MOBILE_TEMPLETE__', false);
			define('__MOBILE_TEMPLETE__' , '' );
		}
		//view(Izi::getAlias('@web'),true);
		$app_path = Izi::getAlias('@app');
		$view_path = __TEMP_NAME__; //Izi::getAlias('@module/views/'.__TEMP_NAME__);
		switch (Izi::$device){
			case 'mobile':
				$dir = WEB_PATH . '/themes/'. __TEMP_NAME__ . '/mobile';
				$s = '/themes/'.__TEMP_NAME__ .'/mobile';
				if(!file_exists($dir)){
					$dir = WEB_PATH. '/themes/' . __TEMP_NAME__;
					$s = '/themes/'.__TEMP_NAME__.'';
					Izi::$is_mobile = false;
				}
				if(Izi::$is_mobile){
					$view_path .= '/mobile';
				}
				define('__RSPATH__',$dir);
				define('__RSDIR__',__IS_ADMIN__ ? '/' : $s);
				break;
			default:
				$dir = Izi::getAlias('@web') . '/themes' . DS  . __TEMP_NAME__;
				define('__RSPATH__',WEB_PATH. '/themes' . DS  . __TEMP_NAME__);
				define('__RSDIR__', '/themes/'. __TEMP_NAME__);
				///$view_path .= DS . __TEMP_NAME__ ;
				break;
		}
		
		define ('__VIEW_PATH__',$view_path);
		define ('__IS_MOBILE__',Izi::$is_mobile);
		define('__LIBS_DIR__',Izi::getAlias('@libs'));
		define('__LIBS_PATH__',Izi::getAlias('@libs_path'));
		defined('DS') or define('DS',DIRECTORY_SEPARATOR);
		
	}
	
	protected function getTempleteName(){
		//$config = Yii::$app->session['config'];
		
		if(isset($config['templete'][__LANG__]['name']) && $config['templete'][__LANG__]['name'] != ""){
			
			return $config['templete'][__LANG__];
		}else{  
			$sql = "select a.* from `templetes` as a inner join temp_to_shop as b on a.id=b.temp_id and b.state=1 and b.sid=".__SID__ ." and b.lang='".__LANG__."'";
			//$command = Yii::$app->db->createCommand($sql);
			//echo $sql;
			$r = $this->db->fetchOne($sql);
			if(empty($r)){
				$sql = "select a.* from `templetes` as a inner join temp_to_shop as b on a.id=b.temp_id and b.state=1 and b.sid=".__SID__ ;
				$r = $this->db->fetchOne($sql);
			}
			$config['templete'][__LANG__] = $r;
			//view($r);
			//Yii::$app->session['config'] = $config;
			return $r;
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}