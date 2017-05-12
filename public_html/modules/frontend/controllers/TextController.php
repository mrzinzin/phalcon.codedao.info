<?php
namespace frontend\controllers	; 
use Izi;
use Phalcon\Mvc\View;
use Phalcon\Db\Adapter\Pdo;

class TextController extends ControllerBase
{
    
	public function indexAction()
    {    	
		//$this->view->setTemplateAfter('after');
		//$this->view->setTemplateBefore('before');
		//$this->view->disableLevel(View::LEVEL_AFTER_TEMPLATE);
		//$this->view->disableLevel(View::LEVEL_MAIN_LAYOUT); 
    	 
    	 $this->view->pick(__VIEW_PATH__ . '/' . $this->dispatcher->getControllerName());    	
    	 
    }
    
    
    public function robotsAction()
    {
    	header('Content-type: text/plain');
    	echo (get_site_value('seo/robots'));
    	exit;
    	 
    }
    public function sitemapAction(){
    	header('Content-type: text/xml');
    	echo get_site_value('seo/sitemap');
    	exit;
    }
    
     
}
