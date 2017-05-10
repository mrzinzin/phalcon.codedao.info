<?php
namespace izi\web;
use Phalcon\Mvc\Model;
use Common\Models\Db;
class Language extends Model
{
	private $db;
	public $key = 'LANGUAGE';
	public function initialize()
	{
		//$this->db = new Db();
		$this->db=$this->getDi()->getShared('db');
	}
	
	public function tableName()
	{
		return 'site_configs';
	}
	
	public function getDefaultLang(){
		return array(
				array('id'=>1,'code'=>'vi_VN','title'=>'Tiếng Việt','cname'=>'Vietnamese','default'=>1,'is_active'=>1,'root_active'=>1),
				array('id'=>2,'code'=>'en_US','title'=>'Tiếng Anh','cname'=>'English','default'=>0,'is_active'=>1,'root_active'=>1),
				array('id'=>3,'code'=>'th_TH','title'=>'Tiếng Thái','cname'=>'Thai','default'=>0,'is_active'=>0,'root_active'=>0),
				array('id'=>4,'code'=>'la_LA','title'=>'Tiếng Lào','cname'=>'Lao','default'=>0,'is_active'=>0,'root_active'=>0),
				array('id'=>5,'code'=>'id_ID','title'=>'Tiếng Indonesia','cname'=>'Vietnamese','default'=>0,'is_active'=>0,'root_active'=>0),
		);
	}
	
	public function getUserDefaultLanguage(){
		$l = $this->getList();
		if(!empty($l)){
			foreach ($l as $k=>$v){
				if(isset($v['default']) && $v['default'] == 1){
					return $v;
				}
			}
		}
		return [];
	}
	
	public function getLanguage($code = DEFAULT_LANG){
		
		$l = $this->getList();
		if(!empty($l)){
			foreach ($l as $k=>$v){
				if(isset($v['code']) && $v['code'] == $code){
					return $v;
				}
			}
		}
		return [];
	}
	
	public function getList($o = []){
		$sql = "select a.bizrule from ".$this->tableName()." as a where a.code='".$this->key."'";
		$sql .= " and a.sid=".__SID__;
		$r = json_decode($this->db->fetchColumn($sql),1);
		 
		if(empty($r)) $r = $this->getDefaultLang();
		if(isset($o['is_active']) && !empty($r)){
			foreach ($r as $k=>$v){
				if(isset($v['is_active']) && $v['is_active'] == $o['is_active']){}else{unset($r[$k]);}
			}
		}
		
		return $r;
	}
}