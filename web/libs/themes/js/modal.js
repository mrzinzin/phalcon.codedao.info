/*function showModal($title,$content){
    //$html = '<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">';
    $html = '<div class="modal-dialog modal-sm">';
    $html += '<div class="modal-content">';
    $html += '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title f12e" id="mySmallModalLabel" style="font-size: 1.5em;">'+$title+'</h4></div>';
    $html += '<div class="modal-body f12e">'+$content+'</div>'
    $html += '<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div>';
    $html += '</div></div>';
    jQuery('.mymodal').html($html).modal('show');
}
function showMModal($title,$content){
    //$html = '<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">';
    $html = '<div class="modal-dialog ">';
    $html += '<div class="modal-content">';
    $html += '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title f12e" id="mySmallModalLabel" style="font-size: 1.5em;">'+$title+'</h4></div>';
    $html += '<div class="modal-body f12e">'+$content+'</div>'
    $html += '<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div>';
    $html += '</div></div>';
    jQuery('.mymodal').html($html).modal('show');
}
*/
function showCModal($content,t){ 
	$html = '';$this = jQuery(t);
	$today = $cfg.time;//jQuery.format.date(new Date(), "dd/MM/yyyy H:m") ;
	//alert(jQuery.format.date("2009-12-18 10:54:50.546", "Test: dd/MM/yyyy"));
	$load_type = $this.attr('data-type') ? $this.attr('data-type') : 'normal';
	$utype = $this.attr('data-utype') ? $this.attr('data-utype') : 'CUS';
	$cusID = $this.attr('data-cusID') ? $this.attr('data-cusID') : 0;
	$book = $this.attr('data-book') ? $this.attr('data-book') : 1;
    switch ($content) {
    case 'quick_edit_field':
    	//$cusID = $this.attr('data-cusID') ? parseInt($this.attr('data-cusID')) : 0;
    	//$classID = $this.attr('data-classID') ? parseInt($this.attr('data-classID')) : 0;
    	//$sendType = $this.attr('data-send') ?  ($this.attr('data-send')) : 'normal';
    	$id = $this.attr('data-id');
    	//$email = $this.attr('data-email') ?  ($this.attr('data-email')) : false; 
    	$titlex = $this.attr('data-title') ?  ($this.attr('data-title')) : ''; 
    	$table = $this.attr('data-table') ?  ($this.attr('data-table')) : ''; 
    	$sid = $this.attr('data-sid') ?  ($this.attr('data-sid')) : 0; 
    	$target = $this.attr('data-target') ?  ($this.attr('data-target')) : '';  
    	$title =  'Chỉnh sửa nhanh' ;
		
		$html += '<form name="ajaxForm" action="./ajax" class="ajaxForm form-horizontal f12e" method="post" onsubmit="return submitAjax(this);">';
		$html += '<div class="modal-dialog" role="document">';
		$html += '<div class="modal-content">';
		$html += '<div class="modal-header">';
		$html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		$html += '<h4 class="modal-title f12e upper bold" id="myModalLabel" style="font-size:1.5em">'+$title+'</h4>';
		$html += '</div>';
		$html += '<div class="modal-body">';
        $html += '<section class="addCustomer addCashflow showAnimate uln control-poup">';
        $html += '<section class="boxInfo lbl-cl">';
        $html += '<article class="boxForm uln fll w100 mb10">';
        
        $html += '<div class="form-group">';
        //$html += '<label class="control-label col-sm-2" >Tiêu đề thư</label>';
        $html += '<div class="col-sm-12 " >';
       
        $html += '<input name="f[title]" type="text" value="'+$titlex+'" class="form-control first-target " placeholder="Tiêu đề" />';
        //$html += '<input name="field[email]" id="sEmailList" type="hidden" value="'+$email+'"  />'; 
        //$html += '<input name="field[reply]" type="hidden" value="'+$reply+'"  />';         
        $html += '</div>';            
        $html += '</div>'; 
       
      
        
       // $html += '<div class="form-group">';
       // $html += '<label class="control-label col-sm-2" >Lý do</label>';
       // $html += '<div class="col-sm-12">';
        //$html += '<textarea id="'+$this.attr('data-editor')+'" class="form-control ckeditorSENDxxx required" name="field[text]"></textarea>';
         
       // $html += '</div>';            
       // $html += '</div>';
                
        $html += '</article>';
        $html += '</section>';
     
        $html += '</section>';
		$html += '</div>';
		$html += '<div class="modal-footer">';		
		$html += '<button type="submit" class="btn btn-success"><i class="glyphicon glyphicon-floppy-save"></i> Lưu lại</button>';
		$html += '<button type="button" class="btn btn-danger" data-dismiss="modal"><i class="glyphicon glyphicon-remove"></i> Hủy</button>';
		$html += '</div>';
		$html += '</div>';
		$html += '</div>';
		//$html += '<input type="hidden" name="field[cusID]" value="'+$cusID+'"><input type="hidden" name="field[classID]" value="'+$classID+'">';
		$html += '<input type="hidden" name="action" value="quick_edit_field">';
		$html += '<input type="hidden" name="f[id]" value="'+$id+'">';
		$html += '<input type="hidden" name="f[table]" value="'+$table+'">';
		$html += '<input type="hidden" name="f[sid]" value="'+$sid+'">';
		$html += '<input type="hidden" name="f[_target]" value="'+$target+'">';
		$html += '</form>';
		 
    	break;
    case 'send_email_to':
    	$cusID = $this.attr('data-cusID') ? parseInt($this.attr('data-cusID')) : 0;
    	$classID = $this.attr('data-classID') ? parseInt($this.attr('data-classID')) : 0;
    	$sendType = $this.attr('data-send') ?  ($this.attr('data-send')) : 'normal';
    	$id = $this.attr('data-id');
    	$email = $this.attr('data-email') ?  ($this.attr('data-email')) : false; 
    	$reply = $this.attr('data-reply') ?  ($this.attr('data-reply')) : false; 
    	$eT = $email;
    	if($sendType == 'all'){
    		$email = jQuery('#avEmailList').val();
    		$eT = 'Tất cả học viên trong lớp';
    	}
    	$title =  'Gửi email tới: <span style="text-transform:none;font-weight:300">' + $eT + '</span>' ;
		
		$html += '<form name="ajaxForm" action="./ajax" class="ajaxForm form-horizontal f12e" method="post" onsubmit="return submitAjax(this);">';
		$html += '<div class="modal-dialog" role="document">';
		$html += '<div class="modal-content">';
		$html += '<div class="modal-header">';
		$html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		$html += '<h4 class="modal-title f12e upper bold" id="myModalLabel" style="font-size:1.5em">'+$title+'</h4>';
		$html += '</div>';
		$html += '<div class="modal-body">';
        $html += '<section class="addCustomer addCashflow showAnimate uln control-poup">';
        $html += '<section class="boxInfo lbl-cl">';
        $html += '<article class="boxForm uln fll w100 mb10">';
        
        $html += '<div class="form-group">';
        //$html += '<label class="control-label col-sm-2" >Tiêu đề thư</label>';
        $html += '<div class="col-sm-12 " >';
       
        $html += '<input name="field[title]" type="text" value="" class="form-control" placeholder="Tiêu đề thư" />';
        $html += '<input name="field[email]" id="sEmailList" type="hidden" value="'+$email+'"  />'; 
        $html += '<input name="field[reply]" type="hidden" value="'+$reply+'"  />';         
        $html += '</div>';            
        $html += '</div>'; 
       
      
        
        $html += '<div class="form-group">';
       // $html += '<label class="control-label col-sm-2" >Lý do</label>';
        $html += '<div class="col-sm-12">';
        $html += '<textarea id="'+$this.attr('data-editor')+'" class="form-control ckeditorSENDxxx required" name="field[text]"></textarea>';
         
        $html += '</div>';            
        $html += '</div>';
                
        $html += '</article>';
        $html += '</section>';
     
        $html += '</section>';
		$html += '</div>';
		$html += '<div class="modal-footer">';		
		$html += '<button type="submit" class="btn btn-primary"><i class="glyphicon glyphicon-floppy-save"></i> Gửi yêu cầu</button>';
		$html += '<button type="button" class="btn btn-danger" data-dismiss="modal"><i class="glyphicon glyphicon-remove"></i> Hủy</button>';
		$html += '</div>';
		$html += '</div>';
		$html += '</div>';
		$html += '<input type="hidden" name="field[cusID]" value="'+$cusID+'"><input type="hidden" name="field[classID]" value="'+$classID+'">';
		$html += '<input type="hidden" name="action" value="sendEmailTo"><input type="hidden" name="field[sendType]" value="'+$sendType+'">';
		$html += '</form>';
		 
    	break;	
    case 'select_hotel':
    	$quot = jQuery('#inputQuotation').val() == 'true' ? true : false;
    	$index = $this.attr('data-index') ?  $this.attr('data-index') : false; 
    	$pindex = $this.attr('data-pindex') ?  $this.attr('data-pindex') : false; 
    	$action = $this.attr('data-action') ?  $this.attr('data-action') : false; 
    	$target = $this.attr('data-target') ?  $this.attr('data-target') : false;
    	$iOption = $this.attr('data-option') ?  $this.attr('data-option') : false;
    	//alert($iOption)
    	//$target = $this.attr('data-target') ?  $this.attr('data-target') : false;
    	$tourType = jQuery('.radio_ctype input:checked').val();
    	$totalGuest = jQuery('#input-tour-sokhach').val(); 
    	$night = jQuery('#input-night-amount').val();
    	if($action == 'add'){
    		//$index = jQuery('#numberOfHotel').val();
    	}
    	$title =  'Chọn khách sạn' ;
		
		$html += '<form name="ajaxForm" action="./ajax" class="ajaxForm form-horizontal f12e" method="post" onsubmit="return submitAjax(this);">';
		$html += '<div class="modal-dialog" role="document">';
		$html += '<div class="modal-content">';
		$html += '<div class="modal-header">';
		$html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		$html += '<h4 class="modal-title f12e upper bold" id="myModalLabel" style="font-size:1.5em">'+$title+'</h4>';
		$html += '</div>';
		$html += '<div class="modal-body">';
        $html += '<section class="addCustomer addCashflow showAnimate uln control-poup">';
        $html += '<section class="boxInfo lbl-cl">';
        $html += '<article class="boxForm uln fll w100 mb10">';
  
       

        $html += '<div class="form-group">';
        //$html += '<label class="control-label col-sm-2" for="inputLoaithu">Kỳ nộp</label>';
        $html += '<div class="col-sm-12">';        
        $html += '<select id="select-chon-khach-san" onchange="get_list_chon_phong(this);" name="f[hotelID]" role="select_hotel" class="form-control ajax-chosen-select-ajax"><option></option></select>';
        $html += '</div>';            
        $html += '</div>';
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-6 aleft bold" >Danh sách phòng</label>';
        $html += '<div class="col-sm-12">';        
        $html += '<div id="bang_list_chon_xe"></div><div class="show_error_out"></div>';
        $html += '</div> ';            
        $html += '</div>';
                
        $html += '</article>';
        $html += '</section>';
     
        $html += '</section>';
		$html += '</div>';
		$html += '<div class="modal-footer">';		
		$html += '<button onclick="return check_form_chon_xe();" type="submit" class="btn btn-primary"><i class="glyphicon glyphicon-floppy-save"></i> Chọn</button>';
		$html += '<button type="button" class="btn btn-danger" data-dismiss="modal"><i class="glyphicon glyphicon-remove"></i> Hủy</button>';
		$html += '</div>';
		$html += '</div>';
		$html += '</div>';
		$html += '<input type="hidden" name="f[index]" value="'+$index+'">';
		$html += '<input type="hidden" name="f[pindex]" value="'+$pindex+'">';
		$html += '<input type="hidden" name="f[target]" value="'+$target+'">';
		$html += '<input type="hidden" name="f[action]" value="'+$action+'">';
		$html += '<input type="hidden" name="f[night]" value="'+$night+'">';
		$html += '<input type="hidden" name="f[type]" value="'+$tourType+'">';
		$html += '<input type="hidden" name="f[guest]" value="'+$totalGuest+'">';
		$html += '<input type="hidden" name="f[quot]" value="'+$quot+'">'; 
		$html += '<input type="hidden" name="f[iOption]" value="'+$iOption+'">'; 
		$html += '<input type="hidden" name="action" value="chon_khach_san">';
		$html += '</form>';
		 
    	break;	
    case 'select_car':
    	 
    	$index = $this.attr('data-index'); 
    	$action = $this.attr('data-action') ?  $this.attr('data-action') : false; 
    	$radio_quotation_type = get_quotation_type();
    	$night = jQuery('#input-night-amount').val();
        $quot = jQuery('#inputQuotation').val() == 'true' ? true : false;
    	if($action == 'add'){
    		//$index = jQuery('#numberOfHotel').val();
    	}
    	$title =  'Chọn xe' ;
		 
		$html += '<form name="ajaxForm" action="./ajax" class="ajaxForm form-horizontal f12e" method="post" onsubmit="return submitAjax(this);">';
		$html += '<div class="modal-dialog" role="document">';
		$html += '<div class="modal-content">';
		$html += '<div class="modal-header">';
		$html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		$html += '<h4 class="modal-title f12e upper bold" id="myModalLabel" style="font-size:1.5em">'+$title+'</h4>';
		$html += '</div>';
		$html += '<div class="modal-body">';
        $html += '<section class="addCustomer addCashflow showAnimate uln control-poup">';
        $html += '<section class="boxInfo lbl-cl">';
        $html += '<article class="boxForm uln fll w100 mb10">';
  
       

        $html += '<div class="form-group">';
        //$html += '<label class="control-label col-sm-2" for="inputLoaithu">Kỳ nộp</label>';
        $html += '<div class="col-sm-12">';        
        $html += '<select id="select-chon-xe" onchange="get_list_chon_xe(this);" name="f[carID]" role="select_car" class="form-control ajax-chosen-select-ajax"><option></option></select>';
        $html += '</div></div>';
  
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-6 aleft bold" >Danh sách xe</label>';
        $html += '<div class="col-sm-12">';        
        $html += '<div id="bang_list_chon_xe"></div><div class="show_error_out"></div>';
        $html += '</div> ';            
        $html += '</div>';
                
        $html += '</article>';
        $html += '</section>';
     
        $html += '</section>';
		$html += '</div>';
		$html += '<div class="modal-footer">';		
		$html += '<button onclick="return check_form_chon_xe();" type="submit" class="btn btn-primary"><i class="glyphicon glyphicon-floppy-save"></i> Chọn</button>';
		$html += '<button type="button" class="btn btn-danger" data-dismiss="modal"><i class="glyphicon glyphicon-remove"></i> Hủy</button>';
		$html += '</div>';
		$html += '</div>';
		$html += '</div>';
		$html += '<input type="hidden" name="f[index]" value="'+$index+'">';
		$html += '<input type="hidden" name="f[action]" value="'+$action+'">';
		$html += '<input type="hidden" name="f[night]" value="'+$night+'">';
        $html += '<input type="hidden" name="f[quot]" value="'+$quot+'">'; 
        $html += '<input type="hidden" name="f[qtype]" value="'+$radio_quotation_type+'">';
		$html += '<input type="hidden" name="action" value="chon_xe">';
		$html += '</form>';
		 
    	break;	
    case 'them_phan_hoi':
    	$cusID = $this.attr('data-cusID') ? parseInt($this.attr('data-cusID')) : 0;
    	$classID = $this.attr('data-classID') ? parseInt($this.attr('data-classID')) : 0;
    	$title =   'Đóng góp ý kiến';
    	$id = $this.attr('data-id');
    	 
		
		$html += '<form name="ajaxForm" action="./ajax" class="ajaxForm form-horizontal f12e" method="post" onsubmit="return submitAjax(this);">';
		$html += '<div class="modal-dialog" role="document">';
		$html += '<div class="modal-content">';
		$html += '<div class="modal-header">';
		$html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		$html += '<h4 class="modal-title f12e upper bold" id="myModalLabel" style="font-size:1.5em">'+$title+'</h4>';
		$html += '</div>';
		$html += '<div class="modal-body">';
        $html += '<section class="addCustomer addCashflow showAnimate uln control-poup">';
        $html += '<section class="boxInfo lbl-cl">';
        $html += '<article class="boxForm uln fll w100 mb10">';
  
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Lớp</label>';
        $html += '<div class="col-sm-10" id="BAOLUU_CLASSID">';
        if($cusID > 0 && $classID > 0){
        	$html += '<b style="line-height:30px">'+$this.attr('data-cname')+'</b><input id="M_CUSID" name="field[cusID]" type="hidden" value="'+$cusID+'" /><input id="M_CLASSID" type="hidden" name="field[classID]"  value="'+$classID+'" />';
        }else{
        	//$html += '<select name="field[classID]"  class="form-control chosen-select-no-single required baoluu_class" role="load_class" data-type="CUS"><option></option></select>';
        }
                            
        $html += '</div>';            
        $html += '</div>'; 
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Trình học</label>';
        $html += '<div class="col-sm-10" >';
         
        $html += '<select name="field[blockID]" id="M_BLOCKID" class="form-control chosen-select-no-single required respon_class" ><option></option></select>';
        
                            
        $html += '</div>';            
        $html += '</div>'; 
    
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Nội dung</label>';
        $html += '<div class="col-sm-10">';
        $html += '<textarea class="form-control required" name="field[text]" style="height:150px"></textarea>';
         
        $html += '</div>';            
        $html += '</div>';
                
        $html += '</article>';
        $html += '</section>';
     
        $html += '</section>';
		$html += '</div>';
		$html += '<div class="modal-footer">';		
		$html += '<button type="submit" class="btn btn-primary"><i class="glyphicon glyphicon-floppy-save"></i> Gửi yêu cầu</button>';
		$html += '<button type="button" class="btn btn-danger" data-dismiss="modal"><i class="glyphicon glyphicon-remove"></i> Hủy</button>';
		$html += '</div>';
		$html += '</div>';
		$html += '</div>';
	 
		$html += '<input type="hidden" name="action" value="hocvien_phanhoi"><input type="hidden" name="_time_field" value="from_date,to_date">';
		$html += '</form>';
		 
    	break;	
    case 'quickAddCustomer':
    	$cusID = $this.attr('data-cusID') ? parseInt($this.attr('data-cusID')) : 0;
    	$classID = $this.attr('data-classID') ? parseInt($this.attr('data-classID')) : 0;
    	$title = 'Thêm mới khách hàng';
    	$id = $this.attr('data-id');    	 
		
		$html += '<form name="ajaxForm" action="./ajax" class="ajaxForm form-horizontal f12e" method="post" onsubmit="return submitAjax(this);">';
		$html += '<div class="modal-dialog" role="document">';
		$html += '<div class="modal-content">';
		$html += '<div class="modal-header">';
		$html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		$html += '<h4 class="modal-title f12e upper bold" id="myModalLabel" style="font-size:1.5em">'+$title+'</h4>';
		$html += '</div>';
		$html += '<div class="modal-body">';
        $html += '<section class="addCustomer addCashflow showAnimate uln control-poup">';
        $html += '<section class="boxInfo lbl-cl">';
        $html += '<article class="boxForm uln fll w100 mb10">';
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Mã KH (<i class="red">*</i>)</label>';
        $html += '<div class="col-sm-10 " >';
        
        $html += '<input name="f[code]" data-alert="Mã khách hàng <b class=red>{VAL}</b> đã được sử dụng." onchange="checkCustomerCode(this);" type="text" class="form-control check_error required" value="" title="Chiều dài tối đa 32 ký tự." placeholder="Mã KH gồm 3 ký tự." />';
                         
        $html += '</div>';            
        $html += '</div>'; 
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Tên Cty (<i class="red">*</i>)</label>';
        $html += '<div class="col-sm-10 " >';
        
        $html += '<input name="f[name]" type="text" class="form-control required" value="" placeholder="Nhập tên khách hàng / Công ty" />';
                         
        $html += '</div>';            
        $html += '</div>'; 
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Tên viết tắt</label>';
        $html += '<div class="col-sm-10 " >';
        
        $html += '<input name="f[short_name]" type="text" class="form-control" value="" placeholder="Tên viết tắt" />';
                         
        $html += '</div>';            
        $html += '</div>'; 
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Tỉnh thành</label>';
        $html += '<div class="col-sm-10 " >';
        
        $html += '<select class="chosen-select" name="f[localID]" id="selectLoadLocation" style="width:100%"></select>';
                         
        $html += '</div>';            
        $html += '</div>'; 
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Địa chỉ (<i class="red">*</i>)</label>';
        $html += '<div class="col-sm-10 " >';
        
        $html += '<input name="f[address]" type="text" class="form-control required" value="" placeholder="Nhập địa chỉ" />';         
                
        $html += '</div>';            
        $html += '</div>'; 
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Điện thoại (<i class="red">*</i>)</label>';
        $html += '<div class="col-sm-10 " >';
        
        $html += '<input name="f[phone]" type="text" class="form-control required" value="" placeholder="Nhập số điện thoại" />';
                         
        $html += '</div>';            
        $html += '</div>'; 
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Email</label>';
        $html += '<div class="col-sm-10 " >';
        
        $html += '<input name="f[email]" type="email" class="form-control" value="" placeholder="Nhập email" />';
                         
        $html += '</div>';            
        $html += '</div>'; 
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Mã số thuế</label>';
        $html += '<div class="col-sm-10 " >';
        
        $html += '<input name="f[tax]" type="text" class="form-control" value="" placeholder="Nhập mã số thuế" />';
         
                
        $html += '</div>';            
        $html += '</div>'; 
        

        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Địa chỉ thuế</label>';
        $html += '<div class="col-sm-10 " >';
        
        $html += '<input name="f[taxAddress]" type="text" class="form-control" value="" placeholder="Nhập địa chỉ thuế" />';
                       
        $html += '</div>';            
        $html += '</div>'; 
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Số tài khoản</label>';
        $html += '<div class="col-sm-10 " >';
        
        $html += '<input name="biz[accountNumber]" type="text" class="form-control" value="" placeholder="Số tài khoản ngân hàng giao dịch" />';
                       
        $html += '</div>';            
        $html += '</div>'; 
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Tên ngân hàng</label>';
        $html += '<div class="col-sm-10 " >';
        
        $html += '<input name="biz[accountName]" type="text" class="form-control" value="" placeholder="Tên ngân hàng giao dịch" />';
                       
        $html += '</div>';            
        $html += '</div>'; 
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Người liên hệ</label>';
        $html += '<div class="col-sm-10 " >';
        
        $html += '<input name="biz[contactPerson]" type="text" class="form-control" value="" placeholder="Tên người liên hệ" />';
                       
        $html += '</div>';            
        $html += '</div>'; 
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Số điện thoại</label>';
        $html += '<div class="col-sm-10 " >';
        
        $html += '<input name="biz[contactPhone]" type="text" class="form-control" value="" placeholder="Số điện thoại người liên hệ." />';
                       
        $html += '</div>';            
        $html += '</div>';         
        $html += '</article>';
        $html += '</section>';
     
        $html += '</section>';
		$html += '</div>';
		$html += '<div class="modal-footer">';		
		$html += '<button type="submit" class="btn btn-primary"><i class="glyphicon glyphicon-floppy-save"></i> Cập nhật</button>';
		$html += '<button type="button" class="btn btn-danger" data-dismiss="modal"><i class="glyphicon glyphicon-remove"></i> Hủy</button>';
		$html += '</div>';
		$html += '</div>';
		$html += '</div>';
	 
		$html += '<input type="hidden" name="action" value="quickAddCustomer"><input type="hidden" name="_time_field" value="from_date,to_date">';
		$html += '</form>';
		 
    	break;
    case 'quickAddTourType':
    	 
    	$cusID = $this.attr('data-cusID') ? parseInt($this.attr('data-cusID')) : 0;
    	$classID = $this.attr('data-classID') ? parseInt($this.attr('data-classID')) : 0;
    	$title = 'Thêm nhóm tour / Chủ đề tour';
    	$id = $this.attr('data-id');    	 
		
		$html += '<form name="ajaxForm" action="./ajax" class="ajaxForm form-horizontal f12e" method="post" onsubmit="return submitAjax(this);">';
		$html += '<div class="modal-dialog" role="document">';
		$html += '<div class="modal-content">';
		$html += '<div class="modal-header">';
		$html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		$html += '<h4 class="modal-title f12e upper bold" id="myModalLabel" style="font-size:1.5em">'+$title+'</h4>';
		$html += '</div>';
		$html += '<div class="modal-body">';
        $html += '<section class="addCustomer addCashflow showAnimate uln control-poup">';
        $html += '<section class="boxInfo lbl-cl">';
        $html += '<article class="boxForm uln fll w100 mb10">';
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Tiêu đề</label>';
        $html += '<div class="col-sm-10 " >';
        
        $html += '<input name="f[name]" type="text" class="form-control required" value="" title="" placeholder="Nhập tiêu đề cho nhóm." />';
                         
        $html += '</div>';            
        $html += '</div>'; 
        
        $html += '</article>';
        $html += '</section>';
     
        $html += '</section>';
		$html += '</div>';
		$html += '<div class="modal-footer">';		
		$html += '<button type="submit" class="btn btn-primary"><i class="glyphicon glyphicon-floppy-save"></i> Cập nhật</button>';
		$html += '<button type="button" class="btn btn-danger" data-dismiss="modal"><i class="glyphicon glyphicon-remove"></i> Hủy</button>';
		$html += '</div>';
		$html += '</div>';
		$html += '</div>';
 
	 
		$html += '<input type="hidden" name="action" value="quickAddTourType"><input type="hidden" name="_time_field" value="from_date,to_date">';
		$html += '</form>';
		 
    	break;	
    case 'quickAddCost':
    	$cusID = $this.attr('data-cusID') ? parseInt($this.attr('data-cusID')) : 0;
    	$classID = $this.attr('data-classID') ? parseInt($this.attr('data-classID')) : 0;
    	$type = $this.attr('data-type') ? parseInt($this.attr('data-type')) : 1;
    	$title = 'Thêm mới chi phí';
    	$id = $this.attr('data-id');    	 
		
		$html += '<form name="ajaxForm" action="./ajax" class="ajaxForm form-horizontal f12e" method="post" onsubmit="return submitAjax(this);">';
		$html += '<div class="modal-dialog" role="document">';
		$html += '<div class="modal-content">';
		$html += '<div class="modal-header">';
		$html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		$html += '<h4 class="modal-title f12e upper bold" id="myModalLabel" style="font-size:1.5em">'+$title+'</h4>';
		$html += '</div>';
		$html += '<div class="modal-body">';
        $html += '<section class="addCustomer addCashflow showAnimate uln control-poup">';
        $html += '<section class="boxInfo lbl-cl">';
        $html += '<article class="boxForm uln fll w100 mb10">';       
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Tiêu đề</label>';
        $html += '<div class="col-sm-10 " >';
        
        $html += '<input name="f[name]" type="text" class="form-control required" value="" placeholder="Nhập tên chi phí" />';
                         
        $html += '</div>';            
        $html += '</div>';         
        
        $html += '<div class="form-group">';
        
        $html += '<label class="control-label col-sm-2" >Danh mục</label><div class="col-sm-10">';
                   
        $html += '<div class="input-group group-sm34 cs-select-no-border-radius-right">';
		$html += '<select id="addCostCateID" data-type="0" data-num="true" data-select="chosen" class="ajax-chosen-select select_costs_from_data" role="load_cost_category" data-placeholder="Chọn danh mục" style="width: 100%"><option></option></select>';
		$html += '<span class="input-group-btn"><button class="btn btn-success h34" title="Tạo mới loại chi phí" onclick="themdanhmucchiphi(this);" type="button"><i class="glyphicon glyphicon-plus"></i></button></span>';
		    
          
        $html += '</div> </div></div>';
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Loại chi phí</label>';
        $html += '<div class="col-sm-10 " >';
        
        $html += '<select class="form-control" name="f[type]">';
        $html += '<option '+($type == 1 ? 'selected' : '')+' value="1">Chi phí chung </option>';
        $html += '<option '+($type == 2 ? 'selected' : '')+' value="2">Chi phí riêng </option>';
        $html += '</select>';                 
        $html += '</div>';            
        $html += '</div>'; 
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Đơn giá</label>';
        $html += '<div class="col-sm-10 " >';
        
        $html += '<input name="f[price]" type="text" class="form-control numberFormat" value="" placeholder="Đơn giá" />';
                         
        $html += '</div>';            
        $html += '</div>'; 
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Đơn vị tính</label>';
        $html += '<div class="col-sm-10 " >';
        
        $html += '<input name="f[unit]" type="text" class="form-control" value="" placeholder="VD:[8000,000đ] / xe, [3 khách] / phòng, [2 chiếc] / người, ..." />';
         
                
        $html += '</div>';            
        $html += '</div>'; 
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" ></label>';
        $html += '<div class="col-sm-10 " >';
        $html += '<div class="checkbox"><label><input name="f[default]" type="checkbox">Đặt làm mặc định</label></div>';

       // $html += '<input name="f[taxAddress]" type="text" class="form-control" value="" placeholder="Nhập địa chỉ thuế" />';
                       
        $html += '</div>';            
        $html += '</div>'; 
                
        $html += '</article>';
        $html += '</section>';
     
        $html += '</section>';
		$html += '</div>';
		$html += '<div class="modal-footer">';		
		$html += '<button type="submit" class="btn btn-primary"><i class="glyphicon glyphicon-floppy-save"></i> Cập nhật</button>';
		$html += '<button type="button" class="btn btn-danger" data-dismiss="modal"><i class="glyphicon glyphicon-remove"></i> Hủy</button>';
		$html += '</div>';
		$html += '</div>';
		$html += '</div>';
	 
		$html += '<input type="hidden" name="action" value="quickAddCost"><input type="hidden" name="_time_field" value="from_date,to_date">';
		$html += '</form>';
		 
    	break;	
    	
    case 'quickAddTourType':
    	$cusID = $this.attr('data-cusID') ? parseInt($this.attr('data-cusID')) : 0;
    	$classID = $this.attr('data-classID') ? parseInt($this.attr('data-classID')) : 0;
    	$title = 'Thêm mới loại tour';
    	$id = $this.attr('data-id');    	 
		
		$html += '<form name="ajaxForm" action="./ajax" class="ajaxForm form-horizontal f12e" method="post" onsubmit="return submitAjax(this);">';
		$html += '<div class="modal-dialog" role="document">';
		$html += '<div class="modal-content">';
		$html += '<div class="modal-header">';
		$html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		$html += '<h4 class="modal-title f12e upper bold" id="myModalLabel" style="font-size:1.5em">'+$title+'</h4>';
		$html += '</div>';
		$html += '<div class="modal-body">';
        $html += '<section class="addCustomer addCashflow showAnimate uln control-poup">';
        $html += '<section class="boxInfo lbl-cl">';
        $html += '<article class="boxForm uln fll w100 mb10">';               
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" >Tiêu đề (<i class="red">*</i>)</label>';
        $html += '<div class="col-sm-10 " >';
        
        $html += '<input name="f[name]" type="text" class="form-control required" value="" placeholder="Nhập tiêu đề" />';
                         
        $html += '</div>';            
        $html += '</div>';           
                
        $html += '</article>';
        $html += '</section>';
     
        $html += '</section>';
		$html += '</div>';
		$html += '<div class="modal-footer">';		
		$html += '<button type="submit" class="btn btn-primary"><i class="glyphicon glyphicon-floppy-save"></i> Cập nhật</button>';
		$html += '<button type="button" class="btn btn-danger" data-dismiss="modal"><i class="glyphicon glyphicon-remove"></i> Hủy</button>';
		$html += '</div>';
		$html += '</div>';
		$html += '</div>';
	 
		$html += '<input type="hidden" name="action" value="quickAddTourType"><input type="hidden" name="_time_field" value="from_date,to_date">';
		$html += '</form>';
		 
    	break;	
    	
    case 'showAttach':
    	$title = 'Tài liệu đính kèm';
    	$id = $this.attr('data-id');
		//$lydo = $content == 'phieuthu' ? 'Lý do thu' : 'Lý do chi';
		//$nn = $content == 'phieuthu' ? 'Người nộp' : 'Người nhận';
		//$loaithu = $content == 'phieuthu' ? 'Loại thu' : 'Loại chi';
		
		$html += '<form name="ajaxForm" action="./ajax" class="ajaxFormd form-horizontal f12e" method="post" onsubmit="return ajaxUploadForm(this);" enctype="multipart/form-data">';
		//$html += '';
		$html += '<div class="modal-dialog" role="document">';
		$html += '<div class="modal-content">';
		$html += '<div class="modal-header">';
		$html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		$html += '<h4 class="modal-title f12e upper bold" id="myModalLabel" style="font-size:1.5em">'+$title+'</h4>';
		$html += '</div>';
		$html += '<div class="modal-body">';
        $html += '<section class="addCustomer addCashflow showAnimate uln control-poup">';
        $html += '<section class="boxInfo lbl-cl">';
        $html += '<article class="boxForm uln fll w100 mb10">';
        
        $html += '<div class="form-group" style="border-bottom:1px solid #e5e5e5">';
        //$html += '<label for="inputMaphieu" class="col-sm-2 control-label">Tên TL</label>';
        $html += '<div class="col-sm-12">';
        $html += '<table class="table table-bordered table-striped table-hover">';
        $html += '<thead><tr><th style="width:50px">STT</th><th>Tên tài liệu</th><th class="center" style="width:100px">Tải về</th></tr></thead>';
        $html += '<tbody class="list_file_attach">';
        $html += '<tr><th scope="row">1</th><td>Otto</td><td class="center"><a href=""><i class="glyphicon glyphicon-cloud-download"></i></a></td></tr>';
        
      	$html +='</tbody></table>';
        $html += '</div>';
        $html += '</div>';
        
        $html += '<div class="form-group">';
        $html += '<label for="inputMaphieu" class="col-sm-2 control-label">Tên tài liệu</label>';
        $html += '<div class="col-sm-10">';
        $html += '<input type="text" class="form-control required" name="field[name]" id="inputMaphieu" placeholder="Nhập tên tài liệu">';
        $html += '</div>';
        $html += '</div>';
        
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" for="inputLoaithu">Chọn file</label>';
        $html += '<div class="col-sm-10">';
        //$html += '<input type="text" class="form-control" id="inputLoaithu" aria-describedby="inputLoaithu">';
        $html += '<input type="file" name="file_attach" id="file_attach"  class="form-control required" />';
 
        $html += '</div>';            
        $html += '</div>';

       
         
        $html += '</article>';
        $html += '</section>';
     
        $html += '</section>';
		$html += '</div>';
		$html += '<div class="modal-footer">';		
		$html += '<button type="submit" class="btn btn-primary"><i class="glyphicon glyphicon-cloud-upload"></i> Upload tài liệu</button>';
		$html += '<button type="button" class="btn btn-danger" data-dismiss="modal"><i class="glyphicon glyphicon-remove"></i> Hủy</button>';
		$html += '</div>';
		$html += '</div>';
		$html += '</div>';
		$html += '<input type="hidden" name="submitAction" value="save">';
		 
		$html += '<input type="hidden" name="action" value="fileAttach">';
		$html += '<input type="hidden" value="'+$id+'" name="field[blockID]" class="input_hidden_ptc_ghino" />';
		//$html += '<input type="hidden" value="" name="ptc[ghico]" class="input_hidden_ptc_ghico" />';
		$html += '';
		
		$html += '</form>';
		$html += '';
    	break;
    	
	case 'phieuthu':
	case 'phieuchi':
		$title = $content == 'phieuthu' ? 'Phiếu thu' : 'Phiếu chi';
		$lydo = $content == 'phieuthu' ? 'Lý do thu' : 'Lý do chi';
		$nn = $content == 'phieuthu' ? 'Người nộp' : 'Người nhận';
		$loaithu = $content == 'phieuthu' ? 'Loại thu' : 'Loại chi';
		$ht = $content == 'phieuthu' ? 'Hình thức' : 'Hình thức';
		
		$type = $this.attr('data-type') ? $this.attr('data-type') : 'normal';
		$cusID = $this.attr('data-cusID') ? $this.attr('data-cusID') : 0;
		
		
		$html += '<form name="ajaxFormx" class="ajaxForm form-horizontal f12e" method="post" onsubmit="return submitAjax(this);">';
		$html += '';
		$html += '<div class="modal-dialog" role="document">';
		$html += '<div class="modal-content">';
		$html += '<div class="modal-header">';
		$html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		$html += '<h4 class="modal-title f12e upper bold" id="myModalLabel" style="font-size:1.5em">'+$title+'</h4>';
		$html += '</div>';
		$html += '<div class="modal-body">';
        $html += '<section class="addCustomer addCashflow showAnimate uln control-poup">';
        $html += '<section class="boxInfo lbl-cl">';
        $html += '<article class="boxForm uln fll w100 mb10">';
        
        $html += '<div class="form-group">';
        $html += '<label for="inputMaphieu" class="col-sm-2 control-label">Mã phiếu</label>';
        $html += '<div class="col-sm-10">';
        $html += '<input type="text" class="form-control" name="ptc[maso]" id="inputMaphieu" placeholder="Mã phiếu tự động" readonly>';
        $html += '</div>';
        $html += '</div>';
        
        $html += '<div class="form-group">';
        $html += '<label for="inputMaphieu" class="col-sm-2 control-label">Thời gian</label>';
        $html += '<div class="col-sm-10">'; 
        $html += '<div class="input-group datetimepicker"><input type="text" id="PTC_Time" name="ptc[time]" class="form-control required" value="'+$today+'" /><span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span></div>';
        $html += '</div>';
        $html += '</div>';
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" for="inputLoaithu">'+$loaithu+'</label>';
        $html += '<div class="col-sm-10">';
        //$html += '<input type="text" class="form-control" id="inputLoaithu" aria-describedby="inputLoaithu">';
        $html += '<div class="input-group"><div class="cs-select-no-border-radius-right"><select name="ptc[maloai]" data-type="'+$load_type+'" onchange="changeNguoiNop(this);loadCustomerClass(this);" id="PTC_LoaiThuChi"  class="form-control chosen-select-no-single select_chon_loai_thu_chi"><option></option></select></div><span class="input-group-addon pointer" data-target=".select_chon_loai_thu_chi" data-type="'+$content+'" onclick="them_loai_thu(this);"><span class="glyphicon glyphicon-plus"></span></span></div>';
 
        $html += '</div>';            
        $html += '</div>';
        if($content == 'phieuthu'){
        $html += '<div class="form-group">';
        $html += '<label for="inputMaphieu" class="col-sm-2 control-label"></label>';
        $html += '<div class="col-sm-10">';
        $html += '<label style="margin-right:15px">';
        $html += '<input onchange="loadNguoiNop(\'.select_chon_nguoi_nop\','+$cusID+') ;loadCustomerClass(this); " type="radio" name="ptc[nguoinop]" class="optionsRadios1 doi_tuong_thu doi_tuong_thu_HP" value="CUS"  >';
        $html += ' Học viên ';
        $html += '</label>';    
        
        $html += '<label style="margin-right:15px">';
        $html += '<input onchange="loadNguoiNop(\'.select_chon_nguoi_nop\','+$cusID+') ;loadCustomerClass(this); " type="radio" name="ptc[nguoinop]" class="optionsRadios1 doi_tuong_thu  doi_tuong_thu_NV" value="EMP"  >';
        $html += ' Nhân viên ';
        $html += '</label>';  
        
        $html += '<label style="margin-right:15px">';
        $html += '<input type="radio" onchange="loadNguoiNop(\'.select_chon_nguoi_nop\','+$cusID+');loadCustomerClass(this); " name="ptc[nguoinop]" class="optionsRadios1 doi_tuong_thu" value="OTHER" checked >';
        $html += 'Khác';
        $html += '</label>';      
        $html += '</div>';
        $html += '</div>';
        
        $html += '<div class="form-group">';
        $html += '<label for="inputMaphieu" class="col-sm-2 control-label"></label>';
        $html += '<div class="col-sm-10">';
        $html += '<label style="margin-right:15px">';
        $html += '<input type="radio" name="ptc[type]" class="optionsRadios2 doi_tuong_thu" value="TM"  checked>';
        $html += 'TM';
        $html += '</label>';      
        
        $html += '<label style="margin-right:15px">';
        $html += '<input type="radio" name="ptc[type]" class="optionsRadios2 doi_tuong_thu" value="CK"  >';
        $html += 'CK';
        $html += '</label>';
      
        $html += '</div>';
        $html += '</div>';
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" for="inputLoaithu">'+$nn+'</label>';
        $html += '<div class="col-sm-10">';
        $html += '<div class="input-group"><div class="cs-select-no-border-radius-right"><select name="ptc[cusID]" id="PTC_NguoiNop" onchange="loadCustomerClass(this);" class="form-control ajax-chosen-select select_chon_nguoi_nop" role="load_nguoi_nop" data-type="OTHER"><option></option></select></div><span class="input-group-addon pointer" data-target=".select_chon_nguoi_nop" data-type="'+$content+'" onclick="them_nguoi_nop(this);"><span class="glyphicon glyphicon-plus"></span></span></div>';
        $html += '<input type="hidden" value="" name="ptc[hoten]" class="input_hidden_ptc_hoten" />';
        $html += '<input type="hidden" value="" name="ptc[diachi]" class="input_hidden_ptc_diachi" />';
        $html += '</div>';            
        $html += '</div>';
        }else{
        	$html += '<div class="form-group" >';
            $html += '<label class="control-label col-sm-2" for="inputLoaithu">Chọn lớp</label>';
            $html += '<div class="col-sm-10">';        
            $html += '<select name="ptc[classID]" id="PTC_Class" class="form-control chosen-select-no-single select_chon_lop"><option></option></select>';
            $html += '</div>';            
            $html += '</div>';
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" for="inputLoaithu">'+$nn+'</label>';
        $html += '<div class="col-sm-10">';       
        $html += '<input type="text" class="form-control required" value="" name="ptc[hoten]" />';
  
        $html += '<input type="hidden" value="0" name="ptc[cusID]" class="" />';
        $html += '</div>';            
        $html += '</div>';
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" for="inputLoaithu">Địa chỉ</label>';
        $html += '<div class="col-sm-10">';       
        $html += '<input type="text" value="" name="ptc[diachi]" class="form-control" />';
        //$html += '<input type="hidden" value="0" name="ptc[cusID]" class="" />';
        $html += '</div>';            
        $html += '</div>';
        }
        if($content == 'phieuthu'){
        $html += '<div class="form-group hidden_class hclass" style="display:none">';
        $html += '<label class="control-label col-sm-2" for="inputLoaithu">Chọn lớp</label>';
        $html += '<div class="col-sm-10">';        
        $html += '<select name="ptc[classID]" data-type="'+$utype+'" id="PTC_Class" onchange="loadClassBlock(this);" class="form-control chosen-select-no-single select_chon_lop"><option></option></select>';
        $html += '</div>';            
        $html += '</div>';
        
        $html += '<div class="form-group hidden_class hblock" style="display:none">';
        $html += '<label class="control-label col-sm-2" for="inputLoaithu">Kỳ nộp</label>';
        $html += '<div class="col-sm-10">';        
        $html += '<select name="ptc[blockID][]" multiple onchange="loadClassBlockPrice(this);"  class="form-control chosen-select-no-single select_chon_ky_nop"><option></option></select>';
        $html += '</div>';            
        $html += '</div>';
        }

        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" for="inputLoaithu">Giá trị</label>';
        $html += '<div class="col-sm-10">';
        //$html += '<input type="text" class="form-control" id="inputLoaithu" aria-describedby="inputLoaithu">';
        $html += '<input name="ptc[sotien]" id="PTC_Sotien" onblur="changeDiscount(this);"  class="form-control inputAmountVND required " />';
 
        $html += '</div>';            
        $html += '</div>';

        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" for="inputLoaithu">'+$lydo+'</label>';
        $html += '<div class="col-sm-10">';
        //$html += '<input type="text" class="form-control" id="inputLoaithu" aria-describedby="inputLoaithu">';
        $html += '<textarea id="PTC_Lydo" class="form-control required" name="ptc[lydo]" rows=3></textarea>';
 
        $html += '</div>';            
        $html += '</div>';
        if($content == 'phieuthu'){
        	$html += '<div class="form-group huudai">';
            $html += '<label class="control-label col-sm-2" for="inputLoaithu">Ưu đãi</label>';
            $html += '<div class="col-sm-10">';             
            $html += '<input name="ptc[discount]" id="PTC_Discount" onblur="changeDiscount(this);" class="form-control inputAmountVND" placeholder="Nhập số tiền < 100 sẽ tính theo %" />';
     
            $html += '</div>';            
            $html += '</div>';
            
            $html += '<div class="form-group huudai">';
            $html += '<label class="control-label col-sm-2" for="inputLoaithu">Nội dung</label>';
            $html += '<div class="col-sm-10">';             
            $html += '<input name="ptc[discountInfo]" id="PTC_Discount_Info"  class="form-control" placeholder="" />';
     
            $html += '</div>';            
            $html += '</div>';
            
            $html += '<div class="form-group huudai">';
            $html += '<label class="control-label col-sm-2" for="inputLoaithu">Còn lại</label>';
            $html += '<div class="col-sm-10">';             
            $html += '<input name="ptc[thucthu]" id="PTC_Thucthu"  class="form-control bold red inputAmountVND" placeholder="Số tiền thực thu sau ưu đãi." readonly/>';
     
            $html += '</div>';            
            $html += '</div>';
        }
         
        $html += '</article>';
        $html += '</section>';
     
        $html += '</section>';
		$html += '</div>';
		$html += '<div class="modal-footer">';		
		$html += '<button type="submit" class="btn btn-primary"><i class="glyphicon glyphicon-floppy-save"></i> Lưu</button>';
		$html += '<button type="button" class="btn btn-danger" data-dismiss="modal"><i class="glyphicon glyphicon-remove"></i> Hủy</button>';
		$html += '</div>';
		$html += '</div>';
		$html += '</div>';
		$html += '<input type="hidden" name="submitAction" value="save">';
		//$html += '<input name="ptc[cusID]" type="hidden" class="pt_input pt_x01  fr" style="width:509pt; margin-left:5px" value="">';
		$html += '<input type="hidden" name="congno" value="">';
		$html += '<input type="hidden" name="ptc[quyenso]" value="">';
		$html += '<input type="hidden" name="ptc[book]" value="'+$book+'" >';
		$html += '<input type="hidden" name="loaiphieu" value="'+$content+'">';
		$html += '<input type="hidden" id="PTC_Load_type" name="ptype" value="'+$load_type+'">';
		$html += '<input type="hidden" name="action" value="lapphieu">';
		$html += '<input type="hidden" value="" name="ptc[ghino]" class="input_hidden_ptc_ghino" />';
		$html += '<input type="hidden" value="" name="ptc[ghico]" class="input_hidden_ptc_ghico" />';
		$html += '<input type="hidden" id="PTC_ID" name="ptc[id]" value="0">';
		
		$html += '</form>';
		break;
	case 'add_cus_to_class':
		
		$type  = $this.attr('data-type');
		switch($type){
		case 'TEA':
			$title = 'Thêm Giáo viên';
			break;
		default :
			$title = 'Thêm học viên';
			break;
		}
		$classID  = $this.attr('data-classID');
		$html += '<form name="ajaxFormx" class="ajaxForm form-horizontal f12e" method="post" onsubmit="return submitAjax(this);">';
		$html += '';
		$html += '<div class="modal-dialog" role="document">';
		$html += '<div class="modal-content">';
		$html += '<div class="modal-header">';
		$html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		$html += '<h4 class="modal-title f12e upper bold" id="myModalLabel" style="font-size:1.5em">'+$title+'</h4>';
		$html += '</div>';
		$html += '<div class="modal-body">';
        $html += '<section class="addCustomer addCashflow showAnimate uln control-poup">';
        $html += '<section class="boxInfo lbl-cl">';
        $html += '<article class="boxForm uln fll w100 mb10">';
 
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" for="inputLoaithu">Chọn học viên</label>';
        $html += '<div class="col-sm-10">';        
        $html += '<div class="input-group"><div class="cs-select-no-border-radius-right"><select multiple name="field[cusID][]"  class="form-control ajax-chosen-select  select_chon_hoc_vien" data-type="'+$type+'" role="load_customer"><option></option></select></div><span class="input-group-addon pointer" data-target=".select_chon_hoc_vien" onclick="them_hoc_vien(this);"><span class="glyphicon glyphicon-plus"></span></span></div>'; 
        $html += '</div>';            
        $html += '</div>';
        
        $html += '</article>';
        $html += '</section>';
     
        $html += '</section>';
		$html += '</div>';
		$html += '<div class="modal-footer">';		
		$html += '<button type="submit" class="btn btn-primary"><i class="glyphicon glyphicon-floppy-save"></i> Lưu</button>';
		$html += '<button type="button" class="btn btn-danger" data-dismiss="modal"><i class="glyphicon glyphicon-remove"></i> Hủy</button>';
		$html += '</div>';
		$html += '</div>';
		$html += '</div>';
		$html += '<input type="hidden" name="field[state]" value="'+($type == 'TEA' ? 1 : -1)+'">';
		 
		$html += '<input type="hidden" name="action" value="add_customer_to_class">';
		$html += '<input type="hidden" name="field[classID]" value="'+$classID+'">'; 
		$html += '';
		
		$html += '</form>';
		break;
	case 'change_customer_to_class':
		$title = 'Chuyển lớp';
		$type  = $this.attr('data-type');
		$classID  = $this.attr('data-classID');
		$cusID  = $this.attr('data-cusID');
		
		$html += '<form name="ajaxFormx" class="ajaxForm form-horizontal f12e" method="post" onsubmit="return submitAjax(this);">';
		$html += '';
		$html += '<div class="modal-dialog" role="document">';
		$html += '<div class="modal-content">';
		$html += '<div class="modal-header">';
		$html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		$html += '<h4 class="modal-title f12e upper bold" id="myModalLabel" style="font-size:1.5em">'+$title+'</h4>';
		$html += '</div>';
		$html += '<div class="modal-body">';
        $html += '<section class="addCustomer addCashflow showAnimate uln control-poup">';
        $html += '<section class="boxInfo lbl-cl">';
        $html += '<article class="boxForm uln fll w100 mb10">';
 
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" for="inputLoaithu">Chọn lớp</label>';
        $html += '<div class="col-sm-10">';        
        $html += '<div class="input-group"><div class="cs-select-no-border-radius-right"><select name="field[classID]"  class="form-control ajax-chosen-select  select_chon_lop" data-type="'+$type+'" role="load_class"><option></option></select></div><span class="input-group-addon pointer" data-target=".select_chon_hoc_vien" onclick="them_lop(this);"><span class="glyphicon glyphicon-plus"></span></span></div>'; 
        $html += '</div>';            
        $html += '</div>';
        
        $html += '</article>';
        $html += '</section>';
     
        $html += '</section>';
		$html += '</div>';
		$html += '<div class="modal-footer">';		
		$html += '<button type="submit" class="btn btn-primary"><i class="glyphicon glyphicon-floppy-save"></i> Lưu</button>';
		$html += '<button type="button" class="btn btn-danger" data-dismiss="modal"><i class="glyphicon glyphicon-remove"></i> Hủy</button>';
		$html += '</div>';
		$html += '</div>';
		$html += '</div>';
		//$html += '<input type="hidden" name="submitAction" value="save">';
		 
		$html += '<input type="hidden" name="action" value="change_customer_to_class">';
		$html += '<input type="hidden" name="field[oldClassID]" value="'+$classID+'">';
		$html += '<input type="hidden" name="field[cusID]" value="'+$cusID+'">'; 
		
		$html += '';
		
		$html += '</form>';
		break;
	case 'addNewUser':
		$title = 'Thêm người dùng';
		$type  = $this.attr('data-type');
		$classID  = $this.attr('data-classID');
		$cusID  = $this.attr('data-cusID');
		
		$html += '<form name="ajaxFormx" class="ajaxForm form-horizontal f12e" method="post" onsubmit="return submitAjax(this);">';
		$html += '';
		$html += '<div class="modal-dialog" role="document">';
		$html += '<div class="modal-content">';
		$html += '<div class="modal-header">';
		$html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		$html += '<h4 class="modal-title f12e upper bold" id="myModalLabel" style="font-size:1.5em">'+$title+'</h4>';
		$html += '</div>';
		$html += '<div class="modal-body">';
        $html += '<section class="addCustomer addCashflow showAnimate uln control-poup">';
        $html += '<section class="boxInfo lbl-cl">';
        $html += '<article class="boxForm uln fll w100 mb10">';
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" for="inputLoaithu">Email</label>';
        $html += '<div class="col-sm-10">';        
        $html += '<input class="form-control required" name="f[email]"/> '; 
        $html += '</div>';            
        $html += '</div>';
        $html += '<p class="help-block italic col-sm-offset-2">(*) Email sẽ được sử dụng làm tài khoản đăng nhập.</p>';
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" for="inputLoaithu">Tên đăng nhập</label>';
        $html += '<div class="col-sm-10">';        
        $html += '<input class="form-control " name="f[user_name]"/> '; 
        $html += '</div>';            
        $html += '</div>';
        
        $html += '<div class="form-group">';
        $html += '<label class="control-label col-sm-2" for="inputLoaithu">Số ĐT</label>';
        $html += '<div class="col-sm-10">';        
        $html += '<input class="form-control" name="f[phone]"/> '; 
        $html += '</div>';            
        $html += '</div>';
        $html += '</article>';
        $html += '</section>';
     
        $html += '</section>';
		$html += '</div>';
		$html += '<div class="modal-footer">';		
		$html += '<button type="submit" class="btn btn-primary"><i class="glyphicon glyphicon-floppy-save"></i> Lưu</button>';
		$html += '<button type="button" class="btn btn-danger" data-dismiss="modal"><i class="glyphicon glyphicon-remove"></i> Hủy</button>';
		$html += '</div>';
		$html += '</div>';
		$html += '</div>';
		//$html += '<input type="hidden" name="submitAction" value="save">';
		 
		$html += '<input type="hidden" name="action" value="change_customer_to_class">';
		$html += '<input type="hidden" name="field[oldClassID]" value="'+$classID+'">';
		$html += '<input type="hidden" name="field[cusID]" value="'+$cusID+'">'; 
		
		$html += '';
		
		$html += '</form>';
		break;	
		
		
	default:
		break;
	} 
    jQuery('.mymodal').html($html).modal('show');
    //reloadapp(); 
    reload_app('chosen');
    switch($content){
    case 'quickAddCost':
    	loadCostCategory('#addCostCateID');
    	break;
    case 'select_hotel':
    	loadHotel('#select-chon-khach-san');
    	break;
    case 'select_car':
    	loadCar('#select-chon-xe');
    	break;	
    case 'quickAddCustomer':
    	loadLocaltion('#selectLoadLocation');
    	break;
    }
    //loadLoaiThuChi('.select_chon_loai_thu_chi',$content);
   //alert($cusID);
    //loadNguoiNop('.select_chon_nguoi_nop',$cusID);
    if($this.attr('data-editor')){
    	$t = randomStr(10)
    	$this.attr('data-editor',$t);
    	jQuery('.ckeditorSENDxxx').attr('id',$t);
    	//$('.ckeditor_full').each(function(i,e){
            //$id = $(e).attr('id');
            //$width = parseInt($(e).attr('data-width'));
            //$height = parseInt($(e).attr('data-height'));
            //$expand = $(e).attr('data-expand') ? $(e).attr('data-expand') : true;
            //$expand = $expand == 'false' ? false : true;
            CKEDITOR.replace( $t, {
                 //width:$width, 
                 height:300,
                 toolbar:  'Full',
                 toolbarStartupExpanded : false,
                 filebrowserBrowseUrl : $_config.libsDir + "/editor/ckfinder/ckfinder.html",
                 filebrowserImageBrowseUrl : $_config.libsDir + "/editor/ckfinder/ckfinder.html?type=Images",
 		filebrowserFlashBrowseUrl : $_config.libsDir + "/editor/ckfinder/ckfinder.html?type=Flash",
 		filebrowserUploadUrl : $_config.libsDir + "/editor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files",
 		filebrowserImageUploadUrl : $_config.libsDir + "/editor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images",
 		filebrowserFlashUploadUrl : $_config.libsDir + "/editor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash"
                });
        // });
    }
    jQuery('.first-target').focus();
   
}
