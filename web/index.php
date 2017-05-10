<?php
define('APPLICATION_PATH', dirname(__DIR__)); 
define('WEB_PATH', (__DIR__));
use Phalcon\Mvc\Application;  
@ini_set('display_startup_errors',1);@ini_set('display_errors',1);
try {
    /**
     * Include services
     */
	require APPLICATION_PATH. "/common/config/bootstrap.php";
	require APPLICATION_PATH. "/common/functions/functions.php";
	require APPLICATION_PATH. "/vendor/izisoft/izi/Izi.php";	
	//
	require APPLICATION_PATH. "/common/config/services.php";
	 
    /**
     * Handle the request
     */
    $application = new Application();

    /**
     * Assign the DI
     */
    $application->setDI($di);
          
    /**
     * Include modules
     */
    require APPLICATION_PATH. "/common/config/modules.php"; 
    echo $application->handle()->getContent(); 
    
} catch (Exception $e) {
    echo $e->getMessage();
}
