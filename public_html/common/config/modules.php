<?php
 
/**
 * Register application modules
 */
$application->registerModules(
    [
        "frontend" => [
            	"className" => frontend\Module::class,
        		"path"      => APPLICATION_PATH. "/modules/frontend/Module.php",
        ],
    	 
    	"backend" => [
    			"className" => backend\Module::class,
        		"path"      => APPLICATION_PATH. "/modules/backend/Module.php",
        ],	
    	"admin" => [
    			"className" => backend\Module::class,
    			"path"      => APPLICATION_PATH. "/modules/backend/Module.php",
    	],
    	 
    ]
);
