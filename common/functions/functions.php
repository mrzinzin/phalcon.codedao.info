<?php
/*
 * Xem trước 1 mảng, biến
 */
function view($a = '',$exit = false){
	echo '<pre>';
	var_dump($a);
	echo '</pre>';
	if($exit) exit; 
}
/*
 * 
 */
function webModules(){
	return [
			'site',
			'admin',
			
	];
}

/*
 * Kiểm tra chuỗi URI được lấy từ trình duyệt -> phân tích module - controller - action
 */
function parseUri(){
	$uri = $_SERVER['REQUEST_URI'] ? $_SERVER['REQUEST_URI'] : $_SERVER['HTTP_X_ORIGINAL_URL'];
	if(substr($uri, 0,1) == '/' && strlen($uri)>0){
		$uri = substr($uri, 1);
	}
	$controller_r = $uri;
	$uri = $uri !== false ? explode('/', $uri) : false;
	$module = 'frontend'; $controller = $action = 'index'; $params = '';
	if(isset($uri[0])){
		switch (strtolower($uri[0])){
			case 'admin': case 'backend':
				$module = 'backend';
				unset($uri[0]); $uri = array_values($uri);
				break;
			default:
				//return $module;
				break;
		}
	}
	// Controller
	if(isset($uri[0])){
		$controller = $uri[0];
		unset($uri[0]); $uri = array_values($uri);
	}
	// Action
	if(isset($uri[0])){
		$action = $uri[0];
		unset($uri[0]); $uri = array_values($uri);
	}
	//
	///$controller_r = $controller;
	 
	//
	switch ($controller){
		case 'sitemap.xml':
			$controller= 'index';
			$action = 'sitemap';
			break;
		case 'robots.txt':
			$controller= 'index';
			$action = 'robots';
			break; 
	}
	
	// Param
	 
	return [
			'module'=>$module,
			'controller'=>$controller,
			'controller_text'=>$controller_r,
			'action'=>$action != "" ? $action : 'index',
			'params'=>$params,
			
	];
	
}

/*
 * Lấy tên module từ chuỗi URI
 */
function getModule(){
	$uri = parseUri();
	$module = 'frontend';
	if(isset($uri[0])){
		switch (strtolower($uri[0])){
			case 'admin': case 'backend':
				
				return 'backend';
				break;
			default:
				return $module;
				break;
		}
	}
	return $module;
}

/*
 * Hàm convert thời gian sang 1 định dạng khác
 */
function ctime($o = array()){
	$string = isset($o['string']) ? $o['string'] : '';
	$format = isset($o['format']) ? $o['format'] : 'Y-m-d H:i:s';
	$return_type = isset($o['return_type']) ? $o['return_type'] : 0;
	switch ($return_type){
		case 1:
			return strtotime(str_replace('/', '-', $string));
			break;
		default:
			return date($format,strtotime(str_replace('/', '-', $string)));
			break;
	}
}
/*
 * Hàm đếm ngược số ngày shop hết hạn
 */
function countDownDayExpired($time){
	if(!is_numeric($time)){
		$time = ctime(['string'=>$time,'return_type'=>1]);
	}
	return ceil(($time - time())/86400);
}
function djson($a = '', $t = 1){
	return json_decode(str_replace('&quot;','"',$a),$t);
}
function cjson($a = array(),$t = JSON_UNESCAPED_UNICODE){
	if(!empty($a)){
		foreach ($a as $k=>$v){
			if(!is_array($v) && strpos($v, '"')){
				$a[$k] = str_replace('"', '&quot;', $v);
			}
		}
	}
	return json_encode($a,$t);
}

/*
 * Trích xuất dữ liệu từ \Izi::$site
 * 
 */
function get_site_value($string = '',$d = 1){
	$r = '';
	
	if(strlen($string)>0){
		$x = explode('/', $string);
		switch (count($x)){
			case 2:
				$r = isset(\Izi::$site[$x[0]][$x[1]]) ? uh(\Izi::$site[$x[0]][$x[1]],$d) : '';
				break;
			case 3:
				$r = isset(\Izi::$site[$x[0]][$x[1]][$x[2]]) ? uh(\Izi::$site[$x[0]][$x[1]][$x[2]],$d) : '';
				break;
			case 4:
				$r = isset(\Izi::$site[$x[0]][$x[1]][$x[2]][$x[3]]) ? uh(\Izi::$site[$x[0]][$x[1]][$x[2]][$x[3]],$d) : '';
				break;
			default:
				$r = isset(\Izi::$site[$x[0]]) ? uh(\Izi::$site[$x[0]],$d) : '';
				break;
		}
	}
	return $r;
}

/*
 * Loại bỏ dấu gạch ở cuối chuỗi
 */
function removeLastSlashes($string){
	while(strlen($string)>0 && substr($string, -1) == '/'){
		$string = substr($string, 0,-1);
	}
	return $string;
}

/*
 * Kiểm tra giá trị boolean post
 */
function cbool($t = 0){
	return  ($t === 'on' || $t == 1 || $t == true) ? 1 : 0;
}

/*
 * Tương tự cbool
 */
function isConfirm($value){
	switch (strtolower($value)){
		case 1: case true: case 'on': case 'yes': case 'ok':
			return true;
			break;
		default: return false; break;
	}
}

/*
 * Lấy giá trị $_POST
 */
function post($element = "",$default = '',$o = []){	
	return isset($_POST[$element]) ? $_POST[$element] : $default;
}



function showNotfoundItem(){
	echo '<p style="font-size:20px;margin:50px">Không tìm thấy dữ liệu. Vui lòng liên hệ administrator.<br/><i class="pointer btn-link" onclick="goBack();">Quay láº¡i</i></p>';
	echo '<script>jQuery(\'.list-btn\').remove();</script>';
}
function eString($string = null){
	$salt = randString(4);
	return base64_encode($salt.base64_encode($salt . $string));

}
function dString($string = null){
	return substr(base64_decode(substr(base64_decode($string),4)),4);

}
function showJqueryAttr($a = [],$array = false){
	$r = $array ? [] : '';
	if(is_array($a) && !empty($a)){
		foreach ($a as $k=>$v){
			if($array) $r["data-$k"] = $v;
			else $r .= "data-$k=\"$v\" ";
		}
	}
	return $r;
}
function randString($length = 32, $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890', $o = [])
{
	// Length of character list
	$chars_length = (strlen($chars) - 1);

	// Start our string
	$string = $chars{rand(0, $chars_length)};

	// Generate random string
	for ($i = 1; $i < $length; $i = strlen($string))
	{
		// Grab a random character from our list
		$r = $chars{rand(0, $chars_length)};

		// Make sure the same two characters don't appear next to each other
		if ($r != $string{$i - 1}) $string .=  $r;
	}

	// Return the string
	return $string;
}

function uh($text,$i = 1){

	$h = htmlspecialchars_decode(stripslashes($text),ENT_QUOTES );
	switch ($i){
		case 'quot': $h = str_replace('"', '&quot;', $h);break;
		case 'nobr': $h = str_replace(array('<br/>','<br>','</br>'), array(' ',' ',' '), $h);break;

	}
	if(is_numeric($i) && $i > 1){    while ($i > 1){	$i--;   	return uh($h);    }    }
	return $h;
}
function unicode_escape_sequences($str){
	$working = json_encode($str);
	$working = preg_replace('/\\\u([0-9a-z]{4})/', '&#x$1;', $working);
	return json_decode($working);
}


















