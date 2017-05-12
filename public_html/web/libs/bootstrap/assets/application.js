// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {

  jQuery(function(){
    $popout =  jQuery('[data-toggle="confirmation-popout"]');
    jQuery('[data-toggle="confirmation"]').confirmation();
    jQuery('[data-toggle="confirmation-singleton"]').confirmation({singleton:true});
    $popout.confirmation({
      //btnOkLabel:'Có',
      popout: true,
      onConfirm:function(){
        $this = jQuery(this);
        $role = $this.attr('target'); // alert($role);
        $table =  $this.attr('data-table') ? $this.attr('data-table') : false;
        $href = $this.attr('href');
        if($role == 'deleteAll'){
          $t = 'deleteall';
         // $v = '';
          //jQuery('.checked_item:checked').each(function() {
         //    $v += this.value + ',';
         // });
          
          $v = jQuery("input.checked_item:checked").map(function () {return this.value;}).get().join(",");
          
          $role = '{"table":"'+$table+'","action":"deleteAll","id":"'+$v+'"}';
        }else{
          $t = 'normal';
        }
        $i = 0;
        jQuery.ajax({
  			type: 'post',
  		 	datatype: 'json',
  			url: $href,
  			data:{data:$role},
            beforeSend: function() {
                // setting a timeout
               jQuery(".alert-success").removeClass('hide').addClass('in loading');
               $i++;

            },
  			success: function(data) {

                  $popout.confirmation('hide');
                  //console.log(data);
                  var $d = JSON.parse(data);
                  if($d.status == true){
                	//  alert($d.hide_class);
                	  $d.hide_class += '';
                    $a = $d.hide_class.split(',');
                    $.each($a,function(index,value) {
                        jQuery('.tr_item_'+value).remove();
                    });
                    jQuery(".alert-success").removeClass('loading') ;
                    window.setTimeout(function() {
                    jQuery(".alert-success").addClass('hide'); }, 1000);
                  }

  			},
  			error : function(err, req) {
  				jQuery(".alert-success").removeClass('loading').addClass('error alert-danger alert-dismissible') ;
                      window.setTimeout(function() {
                      jQuery(".alert-success").addClass('hide'); }, 1000);
  			},
            complete: function() {
                $i--;
                if ($i <= 0) {
                    jQuery(".alert-success").removeClass('loading') ;
                      window.setTimeout(function() {
                      jQuery(".alert-success").addClass('hide'); }, 1000);
                }
            }
  		});
        return false
       // jQuery('[data-toggle="confirmation-popout"]').confirmation('hide')
      },

    });

  })

}(window.jQuery)
