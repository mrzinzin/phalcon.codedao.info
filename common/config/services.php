<?php

/**
 * Services are globally registered in this file
 */
use Phalcon\Db\Adapter\Pdo\Mysql as DbAdapter;
use Phalcon\Mvc\Router;
use Phalcon\Mvc\Url as UrlResolver;
use Phalcon\DI\FactoryDefault;
use Phalcon\Session\Adapter\Files as SessionAdapter;


/**
 * 
 */
$loader = new \Phalcon\Loader();
/*
$loader->registerDirs(
		[
				'common\controllers' => APPLICATION_PATH .'/common/controllers',
				'common\models' => APPLICATION_PATH. '/common/models',
		]
		);
*/
$autoload_vendor = require_once  APPLICATION_PATH . "/vendor/izisoft/izi/classes.php";
$loader->registerNamespaces(
		[
				'common\models' => APPLICATION_PATH . "/common/models/",
				'common\controllers' => APPLICATION_PATH . "/common/controllers/",
				 
		]+$autoload_vendor
		); 
$loader->register();

/**
 * The FactoryDefault Dependency Injector automatically registers the right
 * services to provide a full stack framework.
 */
$di = new FactoryDefault();
/*
 * Connect database
 * 
*/ 
 
$db = function () {
	$config = include APPLICATION_PATH . "/common/config/main.php";
	return new \Phalcon\Db\Adapter\Pdo\Mysql(
			
			[
					"host"     => $config->database->host,
					"username" => $config->database->username,
					"password" => $config->database->password,
					"dbname"   => $config->database->name,
					"options" => array(
							PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
					)
			]
			
			);
	
}; 

$di["db"] = $db;
 
$di->setShared("db",$db);

/*/ Dang ky lang + Domain + SID
//$router = new Common\Models\Router();
//$router->bootstrap(); 
/**  
 * Registering a router 
 */
$di["router"] = function () { 
	$router = new Router();
	 
	//$slugs = (new Common\Models\Slug());  
	//
	$uri = parseUri(); 
	//view($uri);
	//
	$module = $uri['module'];
	 
	//
	$router->setDefaultModule($module);
	$nameSpace = '\\' . ($module) . '\\controllers'; 
	 
	$router->setDefaultNamespace($nameSpace);
	 	
	//$slug = $slugs->getSlug($uri['controller_text']);
		 	
	$realController = !empty($slug) ? $slug['route'] : $uri['controller'];
	
 
	$router->add( 
			"/" . $uri['controller_text'],
			[
					"module"     => $uri['module'],
					"controller" => $realController, 
					"action"     => $uri['action'],
					//"params"     => 4,
			] 
			);
	$router->add(
			"/" . $uri['controller_text'] .'/',
			[
					"module"     => $uri['module'],
					"controller" => $realController,
					"action"     => $uri['action'],
					//"params"     => 4,
			]
			);
	$router->add(
			"/" . $uri['controller_text'] ."/:action",
			[
					"module"     => $uri['module'],
					"controller" => $realController,
					"action"     => 1,
					//"params"     => 4,
			]
			);
	$router->add(
			"/" . $uri['controller_text'] ."/:action/:params",
			[
					"module"     => $uri['module'],
					"controller" => $realController,
					"action"     => 1,					 
					"params"     => 2,
			]
			);	 	
			 
	return $router;
};

/**
 * The URL component is used to generate all kind of urls in the application
 */
$di["url"] = function () {
	$url = new UrlResolver();
	
	$url->setBaseUri("/");
	
	return $url;  
};

/**
 * Start the session the first time some component request the session service
 */
$di["session"] = function () {
	$session = new SessionAdapter();
	
	$session->start();
	
	return $session;
};
