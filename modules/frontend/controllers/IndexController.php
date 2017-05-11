<?php
namespace frontend\controllers	; 
use Izi;
use Phalcon\Mvc\View;
use Phalcon\Db\Adapter\Pdo;

class IndexController extends ControllerBase
{
    
	public function indexAction()
    {    	
		//$this->view->setTemplateAfter('after');
		//$this->view->setTemplateBefore('before');
		//$this->view->disableLevel(View::LEVEL_AFTER_TEMPLATE);
		//$this->view->disableLevel(View::LEVEL_MAIN_LAYOUT); 
    	$query = (new \Phalcon\Mvc\Model\Query\Builder)
    	->from('izi\web\Slugs')->where('sid=:sid:',['sid'=>__SID__]) ->getQuery()->execute() ;
    	//view($query->getPhql(),true);
    	$h = '';
    	foreach ($query as $q){
    		$h .= '<a href="/'.$q->url.'">'.$q->url.'</a><br/>';
    	}
    	$this->view->setVar('info', 'bien ');
    	$this->view->setVar('href', $h);
    	$this->view->pick(__VIEW_PATH__ . '/' . $this->dispatcher->getActionName());    	
    	 
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
