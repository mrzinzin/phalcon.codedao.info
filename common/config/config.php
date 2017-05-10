<?php

use Phalcon\Config;

return new Config(
		[
				'id'=>'phalcon-frontend',
				"database" => [
						"adapter"  => "Mysql",
						"host"     => "localhost",
						"username" => "database_phalcon",
						"password" => "4i5zBbaz",
						"name"     => "database_phalcon",
				],
				"application" => [
						/*/"controllersDir" => __DIR__ . "/../controllers/",
						 // "modelsDir"      => __DIR__ . "/../models/",
// "viewsDir"       => __DIR__ . "/../views/",
'controllersDir' => __DIR__ . '/../controllers/',
'modelsDir'      => __DIR__ . '/../models/',
'migrationsDir'  => __DIR__ . '/../migrations/',
'viewsDir'       => __DIR__ . '/../views/',
'pluginsDir'     => __DIR__ . '/../plugins/',
'libraryDir'     => __DIR__ . '/../library/',
'cacheDir'       => __DIR__ . '/../cache/',
'baseUri'        => '/',
/*/
				],
		]
		);
