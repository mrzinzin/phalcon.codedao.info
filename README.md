# What's Phalcon?

Phalcon PHP is a web framework delivered as a C extension providing high performance and lower resource consumption.

# What are Devtools?

This tools provide you useful scripts to generate code helping to develop faster and easy applications that use with Phalcon framework.

# Requirements

PHP >= 5.5
Phalcon >= 3.1.0
# Installing via Composer

Install composer in a common location or in your project:

curl -s http://getcomposer.org/installer | php
Create the composer.json file as follows:

{
    "require-dev": {
        "phalcon/devtools": "~3.1"
    }
}
If you are still using Phalcon 2.0.x, create a composer.json with the following instead:

{
    "require-dev": {
        "phalcon/devtools": "^3.0"
    }
}
# Run the composer installer:

php composer.phar install
Build .phar

Install composer and box in a common location or in your project:

curl -s http://getcomposer.org/installer | php
bin/composer install
# Build phar file phalcon-devtools

bin/box build -v
chmod +xr ./phalcon.phar
# Test it!
php ./phalcon.phar
Installation via Git

Phalcon Devtools can be installed by using Git.

Just clone the repo and checkout the current branch:

cd ~
git clone https://github.com/phalcon/phalcon-devtools.git
cd phalcon-devtools
This method requires a little bit more of setup. Probably the best way would be to symlink the phalcon.php to a directory in your PATH, so you can issue phalcon commands in each directory where a phalcon project resides.

ln -s ~/phalcon-devtools/phalcon.php /usr/bin/phalcon
chmod ugo+x /usr/bin/phalcon
If you get a "phalcon: command not found" message while creating the symlink, make an alias.

alias phalcon=/home/[USERNAME]/phalcon-devtools/phalcon.php
# Usage

To get a list of available commands just execute following:

phalcon commands help
This command should display something similar to:

$ phalcon --help

Phalcon DevTools (3.1.1)

Help:
Lists the commands available in Phalcon devtools

Available commands:
  info             (alias of: i)
  commands         (alias of: list, enumerate)
  controller       (alias of: create-controller)
  module           (alias of: create-module)
  model            (alias of: create-model)
  all-models       (alias of: create-all-models)
  project          (alias of: create-project)
  scaffold         (alias of: create-scaffold)
  migration        (alias of: create-migration)
  webtools         (alias of: create-webtools)
# Database adapter

Should add adapter parameter in your db config file (if you use not MySQL database).

For PostgreSQL it will be something like:

$config = [
  'host'     => 'localhost',
  'dbname'   => 'my_db_name',
  'username' => 'my_db_user',
  'password' => 'my_db_user_password',
  'adapter'  => 'Postgresql'
];
# Configuration file

By creating phalcon.json or any other configuration file called phalcon in root project you can set options for all possible commands, for example:

{
  "migration" : {
    "migrations": "App/Migrations",
    "config": "App/Config/db.ini"
  },
  "controller" : {
    "namespace": "Phalcon\\Test",
    "directory": "App/Controllers",
    "base-class": "App\\MyAbstractController"
  }
}
And then you can use use phalcon migration run or phalcon controller SomeClass and those commands will be executed with options from file. Arguments provided by developer from command line will overwrite existing one in file.

# License

Phalcon Developer Tools is open source software licensed under the New BSD License.

© Phalcon Framework Team and contributors
