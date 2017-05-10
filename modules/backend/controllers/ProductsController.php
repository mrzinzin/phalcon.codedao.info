<?php

namespace Backend\Controllers;

use Phalcon\Mvc\Controller;
use Backend\Models\Products as Products;

class ProductsController extends Controller
{

    public function indexAction()
    {
        $this->view->product = Products::findFirst();
    }
}
