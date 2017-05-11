function reloadapp(){
	jQuery('.datetimepicker').each(function(i,e){
	    $maxDate = jQuery(e).attr('data-maxDate') ? jQuery(e).attr('data-maxDate') : false;
	    jQuery(e).datetimepicker({ 
	     locale: 'vi',
	      
	     maxDate : $maxDate
	 });
	 });
	jQuery('.datepicker').each(function(i,e){
	    $maxDate = jQuery(e).attr('data-maxDate') ? jQuery(e).attr('data-maxDate') : false;
	    jQuery(e).datetimepicker({
	     locale: 'vi',
	     format:'DD/MM/YYYY',
	     maxDate : $maxDate
	 });
	 });
	
	var chosen_config = {
		      '.chosen-select'           : {},
		      '.chosen-select-deselect'  : {allow_single_deselect:true},
		      '.chosen-select-no-single' : {disable_search_threshold:10},
		      '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
		      '.chosen-select-width'     : {width:"95%"}
		    }
		    for (var selector in chosen_config) {
		      if(	jQuery(selector).length>0){
		    		jQuery(selector).chosen(chosen_config[selector]);
		      }
		    }
		    
		    if(	jQuery('select.ajax-chosen-select').length>0){
		    	jQuery('select.ajax-chosen-select').each(function(index,element){
		    		$role = jQuery(element).attr('role') ? jQuery(element).attr('role') : false;
		    		$dtype = jQuery(element).attr('data-type') ? $(element).attr('data-type') : false;
			       
		    		jQuery(element).ajaxChosen({
		        		   dataType: 'json',
		        		   type: 'POST',
		        		   data:{dtype:$dtype,action:'CHOSEN_AJAX',role:$role},
		        		   url: $cfg.baseUrl + '/ajax' 
		           },{
		        		   loadingImg: $cfg.baseUrl+'/loading.gif'
		           }); 
		           
			   })
		       
		       
		   }
		    $('.inputAmountVND').number( true, 0);
	
}
/*
function submitAjax(t){
    
    $this= jQuery(t);
    $href = $cfg.cBaseUrl ? $cfg.cBaseUrl : $cfg.baseUrl; 
    
     jQuery('.er').remove();
     $ckc = true;
     $this.find('.required').each(function(i,e){
        if(jQuery(e).val().trim() == ""){
        	jQuery(e).focus();
            $ckc = false;
            return false;
        } 
     });
     
    if(!$ckc)  return false;
    CKupdate();
     //alert('ss');
    jQuery.ajax({
      type: 'post',
      datatype: 'json',
		url: $href  + '/ajax/index',						 		 
      data: $this.serialize(),
      beforeSend:function(){    
    
              showFullLoading(); 
      },
      success: function (data) {
     alert(data);
          hideFullLoading(); 
          responData(data);
          
      },
      error : function(err, req) {
          hideFullLoading();
           
				 
				alert('Lỗi kết nối, vui lòng thử lại.');
			}
    });
    return false;  
  }
  */
function responData(data){
	if(data != ""){
        $d = JSON.parse(data);
      
        if($d.error == true  ){
            showModal('Thông báo',$d.error_content)
        }else{
            if($d.modal == true){
                showModal('Thông báo',$d.modal_content) 
            }
        }
        if($d.redirect == true  ){
            window.location = $d.target;
        }
        if($d.event!=undefined){
        	switch($d.event){
        		case 'redirect_link':
        		$timeout = $d.delay != undefined ? $d.delay : 0;
        		window.setTimeout(
        	              function() 
        	              {
        	                window.location = $d.target;
        	              }, $timeout);
        		break;
        		case 'clearInput':
            		jQuery($d.target).val(''); 
            		break;
        		case 'reload':
        			$timeout = $d.delay != undefined ? $d.delay : 0;
            		window.setTimeout(
            	              function() 
            	              {
            	            	  window.location = window.location;
            	              }, $timeout);
        			
        			break;
        		case 'add_loai_thu_chi':
        			//alert($d.ptc.target );
        			jQuery('.mymodal1').modal('hide');
        			jQuery($d.target).html($d.select).trigger("chosen:updated").change();
        			break;
        		case 'checkInError':
        			$e = jQuery('.cError');
        			switch($d.error_code){
        			case 'SUCCESS':
        				$e.html('<p>Điểm danh thành công.</p>');
        				break;
        			case 'CHECKED':
        				$e.html('<p>Bạn đã điểm danh rồi.</p>');
        				break;
        			case 'USER_NOT_EXIST':
        				$e.html('<p>Không tìm thấy tài khoản.</p>');
        				break;
        			case 'NOT_FOUND':
        				$e.html('<p>Không tìm thấy thông tin lớp học.</p>');
        				break;
        			}
        			break;
        	}
        	
        }
    }
     
}
 
 
function removeItem(t){
	jQuery(t).parent().remove();
} 
function ajaxUploadForm(t){
 

        var bar = $('.bar');
        var percent = $('.percent');
        var status = $('#status');

        jQuery('form').ajaxForm({
            beforeSend: function() {
            	alert('sss');
                status.empty();
                var percentVal = '0%';
                bar.width(percentVal)
                percent.html(percentVal);
                alert(t);return false;
            },
            uploadProgress: function(event, position, total, percentComplete) {
                var percentVal = percentComplete + '%';
                bar.width(percentVal)
                percent.html(percentVal);
            },
            success: function() {
                var percentVal = '100%';
                bar.width(percentVal)
                percent.html(percentVal);
            },
            complete: function(xhr) {
                status.html(xhr.responseText);
            }
        });
 
 
}

function checkFormSubmit(t){
	//return false;
	$ckc = true;
	jQuery(t).find('.required').each(function(i,e){
        if(jQuery(e).val().trim() == ""){
        	jQuery(e).focus();
            $ckc = false;
            return false;
        } 
     });
	return $ckc;
} 
 
 

function checkSubmitForm(e){
	$ckc = true;
	$this = jQuery(e);
	for ( instance in CKEDITOR.instances ) {
        CKEDITOR.instances[instance].updateElement();
    }  
	$this.find('.required').each(function(i,el){
  	 //alert(i);//return false;
  	 
        if(jQuery(el).val() == null || jQuery(el).val() == ""){
      	  
      	  jQuery(el).focus();
      	  if(jQuery(el).attr('data-select') == 'chosen'){
      		  jQuery(el).trigger("chosen:open");
      	  }
      	  if(jQuery(el).attr('data-editor') ){
      		  //CKEDITOR.instances.jQuery(el).attr('data-editor').focus();
      	  }
            $ckc = false;
            return false;
        } 
     });
	return $ckc;
}
function changeSaveAction(t){
	jQuery('#saveAction').val(t);
}
function hideOverlay(t,f){
	jQuery(t).hide();jQuery(f).focus();
}
function clearComment(t,f){
	jQuery(t).val('');jQuery(f).show();
}

function deleteAllItem(t,v){
	$item = jQuery("input.check_all_item:checked").map( 
	        function () {return this.value;}).get().join(",");
	if($item != "" && confirm('Xác nhận.')){
		jQuery.ajax({
	        type: 'post',
	        datatype: 'json',
		url: $cfg.baseUrl  + '/ajax',						 		 
	        data: {action:"deleteAllItem",item:$item,view:v},
	        beforeSend:function(){	        	 
	            showFullLoading();
	        },
	        success: function (data) {        	 
	        	///$d = JSON.parse(data);
	        	hideFullLoading(); 
	        	jQuery('.removeItem').remove();
	        },
	        error : function(err, req) {
	           hideFullLoading();
	        }
	      });
	}
}
function toggleChecked(t){
	//.///alert(t);
	$c = jQuery(t).is(':checked') ? true : false;
	 
	if($c) jQuery(t).parent().parent().addClass('removeItem');
	else jQuery(t).parent().parent().removeClass('removeItem');
}
