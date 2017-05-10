<?php
namespace Common\Models;
use Phalcon\Mvc\Model;
use Common\Models\Db;

class Slug extends Model
{
	 
	public $db;
	public function initialize()
	{
		$this->db=$this->getDi()->getShared('db');
	}
	
	public function getSlug($url = ''){
		return $this->db->fetchOne("SELECT * FROM slugs where url='".addslashes($url)."' and sid=".__SID__);
	}
}