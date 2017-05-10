<?php
require(__DIR__ . '/BaseIzi.php');
class Izi extends izi\BaseIzi{
	
	
	//public function initialize()
	//{
	//	$this->db = $this->getDi()->getShared('db');
	//}
	 
	
	public static function getAlias1($param){
		$params = explode('/', $param);
		$alias = $params[0]; unset($params[0]);
		$path = $alias;
		switch ($alias){
			case '@app':
				$path = dirname(APPLICATION_PATH);
				break;
			case '@web':
				$path = WEB_PATH;
				break;
			case '@libs':
				$path = SITE_ADDRESS . DIRECTORY_SEPARATOR . 'libs';
				break;
			case '@libs_path':
				$path = WEB_PATH . DIRECTORY_SEPARATOR . 'libs';
				break;	
			case '@module':
				$path = (APPLICATION_PATH) . DIRECTORY_SEPARATOR . __DEFAULT_MODULE__;
				break;
				
				
				
				
		}
		return $path . (!empty($params) ? '/'. implode('/', $params) : '');
	}
}