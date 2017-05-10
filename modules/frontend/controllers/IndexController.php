<?php
namespace frontend\controllers	; 
use Izi;
use Phalcon\Mvc\View;

class IndexController extends ControllerBase
{
    
	public function indexAction()
    {    	
		$this->view->setTemplateAfter('after');
		$this->view->setTemplateBefore('before');
		//$this->view->disableLevel(View::LEVEL_AFTER_TEMPLATE);
		//$this->view->disableLevel(View::LEVEL_MAIN_LAYOUT);
		//$this->view->setRenderLevel(View::LEVEL_ACTION_VIEW);
		$class_methods = get_class_methods(new \izi\web\Slugs);
		
		foreach ($class_methods as $method_name) {
			// echo "$method_name\n<br>";
		} 
		//Izi::setAlias('@web',APPLICATION_PATH);
		view(Izi::getAlias('@web'),true);
		//view((new \izi\web\Slugs)->getId(),true); 
		
    	//$this->view->pick(__VIEW_PATH__ . '/' . $this->dispatcher->getActionName());    	
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
