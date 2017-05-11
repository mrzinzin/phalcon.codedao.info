<?php
namespace frontend\controllers	; 
use Izi;
use Phalcon\Mvc\View;
use Phalcon\Db\Adapter\Pdo;

class GallerysController extends ControllerBase
{
    
	public function indexAction()
    {    	
		//$this->view->setTemplateAfter('after');
		//$this->view->setTemplateBefore('before');
		//$this->view->disableLevel(View::LEVEL_AFTER_TEMPLATE);
		//$this->view->disableLevel(View::LEVEL_MAIN_LAYOUT); 
    	 
    	 $this->view->pick(__VIEW_PATH__ . '/' . $this->dispatcher->getControllerName());    	
    	 
    }
    
     
    
     
}
