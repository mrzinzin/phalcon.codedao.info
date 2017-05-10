<?php 
use Phalcon\Mvc\Application;
$application = new Application($di);
$application->registerModules(
		[
				"frontend" => [
						"className" => "Multiple\\Frontend\\Module",
						"path"      => APPLICATION_PATH ."/apps/frontend/Module.php",
				],
				"backend"  => [
						"className" => "Multiple\\Backend\\Module",
						"path"      => APPLICATION_PATH ."/apps/backend/Module.php",
				]
		]
		);
echo $application->handle()->getContent();
