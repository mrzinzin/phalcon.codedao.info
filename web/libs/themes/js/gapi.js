var additionalParams={'callback':signinCallback};function gplus_login(){window.location=$cfg.baseUrl+'/glogin?site_url_redirect='+window.location.href;};function signinCallback(authResult){if(authResult['status']['signed_in']){$.ajax({url:'/Member/LoginGoogle',type:"POST",data:{token:authResult.access_token},success:function(res){if(res.success==1){loginSocialEnglish4u(res.token,function(){window.location="/Dang-ky-thanh-cong";});}else if(res.success==2){loginSocialEnglish4u(res.token,function(){window.location='';});}}});}else{console.log('Sign-in state: '+authResult['error']);}}