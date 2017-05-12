<?php

namespace backend\controllers;

use Phalcon\Mvc\Controller;

class IndexController extends Controller
{
    public function indexAction()
    {
    	echo __FUNCTION__;
        ///return $this->response->forward('login');
    }
}
