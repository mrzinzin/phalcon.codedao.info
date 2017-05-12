<?php
namespace Common\Models;
use Phalcon\Mvc\Model;

class Db extends Model
{
	public $db;
	
	public function initialize()
	{		
		$this->db=$this->getDi()->getShared('db');
	}
	
	public static function getSlug($url = ''){
		return $this->db->fetchOne("SELECT * FROM slugs where url='".addslashes($url)."'");
	}
	public function createCommand(){
		return $this->db;
	}
	public function fetchColumn($sql){	 return;
		$row = $this->db->fetchColumn($sql );		
		$c = djson($row,1); 		 
		if(is_array($c) && !empty($c)){
			return $c;
		}
		return $row;  		
	} 
	
	public function fetchOne($sql){
			 
		$row = $this->db->fetchOne($sql );
		 
		if(isset($row['bizrule'])){
			$j = json_decode($row['bizrule'],1);
			if(!is_array($j)){
				$j = djson($row['bizrule']);
			}
			if(is_array($j) && !empty($j)){
				$row += $j;
				unset($row['bizrule']);
			}
		}
		if(isset($row['content'])){
			$j = json_decode($row['content'],1);
			if(!is_array($j)){
				$j = djson($row['content']);
			}
			if(is_array($j) && !empty($j)){
				$row += $j;
				unset($row['content']);
			}
		}
				 
			 
		return $row;
	}
	
	
	public function fetchAll($sql){
		
		//view($this->db->fetchOne($sql ),true);
		$rows = $this->db->fetchAll($sql ); 
		if(!empty($rows)){
			foreach ($rows as $k=>$row){
				if(isset($row['bizrule'])){
					$j = json_decode($row['bizrule'],1);
					if(!is_array($j)){
						$j = djson($row['bizrule']);
					}
					if(is_array($j) && !empty($j)){
						$row += $j;
						unset($row['bizrule']);
					}
				}
				if(isset($row['content'])){
					$j = json_decode($row['content'],1);
					if(!is_array($j)){
						$j = djson($row['content']);
					}
					if(is_array($j) && !empty($j)){
						$row += $j;
						unset($row['content']);
					}
				}
				$rows[$k] = $row;
			}
		}
		return $rows;
	}
}