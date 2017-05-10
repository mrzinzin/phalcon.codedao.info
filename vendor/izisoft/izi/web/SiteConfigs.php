<?php
namespace izi\web; 
use Phalcon\Mvc\Model;

class SiteConfigs extends Model 
{
	private $defaultKey = 'SITE_CONFIGS';
	
	public function initialize()
	{
		$this->db=$this->getDi()->getShared('db');
	}
	public function getConfigs($code = false, $lang = __LANG__,$sid=__SID__,$cached=true){
		$langx = $lang == false ? 'all' : $lang;
		$code = $code !== false ? $code : $this->defaultKey;
		//$config = Yii::$app->session['config'];
		//if($cached && !isset($config['adLogin']) && isset($config['preload'][$code][$langx])
		//		&& !empty($config['preload'][$code][$langx])){
		//			return $config['preload'][$code][$langx];
		//}
		$sql = "select a.bizrule from `site_configs` as a where a.code='$code'";
		$sql .= " and a.sid=".$sid ;
		$sql .= $lang !== false ? " and a.lang='$lang'" : '';
		
		if(!($l=json_decode($this->db->fetchColumn($sql),1))){
			//exit;
			$l = djson($this->db->fetchColumn($sql));
		}
		$config['preload'][$code][$langx] = $l;
		//Yii::$app->session['config'] = $config;
		
		return $l;
	}
}