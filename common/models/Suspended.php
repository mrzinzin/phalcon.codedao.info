<?php
namespace Common\Models;
use Phalcon\Mvc\Model;

class Suspended extends Model
{
	private $db;
	
	public function initialize()
	{
		$this->db=$this->getDi()->getShared('db');
	}
	
	public function tableName()
	{
		return 'suspended';
	}
	
	public function checkSuspended($id = __SID__, $type_id = 1){
		$sql = "select count(1) from {$this->tableName()} where id=$id and type_id=$type_id";
		if($this->db->fetchColumn($sql) == 0){
			return false;
		}
		return true;
	}
	public static function removeSuspended($id = __SID__, $type_id = 1){
		return Yii::$app->db->createCommand()->delete(self::tableName(),['id'=>$id,'type_id'=>$type_id])->execute();
	}
	public static function unSuspended($id = __SID__, $type_id = 1){
		return self::removeSuspended($id,$type_id);
	}
	public static function addSuspended($id = __SID__, $type_id = 1){
		if((new Query())->from(self::tableName())->where(['id'=>$id,'type_id'=>$type_id])->count(1) == 0){
			Yii::$app->db->createCommand()->insert(self::tableName(),['id'=>$id,'type_id'=>$type_id])->execute();
		}
	}
}