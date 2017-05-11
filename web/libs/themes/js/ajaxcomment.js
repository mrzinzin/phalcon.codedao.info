function obj(){
	td=navigator.appName;
	if(td == "Microsoft Internet Explorer"){
		dd = new ActiveXObject("Microsoft.XMLHTTP");
	}else{
		dd = new XMLHttpRequest();	
	}
	return dd;
}

http=obj();


function comment(){
	document.getElementById("return").innerHTML='<img src=image/admin/loading4.gif />';
	name=encodeURI(document.getElementById("txtname").value);	
	email=encodeURI(document.getElementById("txtemail").value);
	mess=encodeURI(document.getElementById("txtmess").value);	
	proid=encodeURI(document.getElementById("txtcid").value);
	capcha=encodeURI(document.getElementById("txtcapcha").value);
	hidecapcha=encodeURI(document.getElementById("txthidecap").value);
	http.open("post","http://www.magento.com:8080/du-an/xehoi/modules/commentsp/process_comment.php?",true);
	//http.open("post","http://localhost/shopping/modules/commentsp/process_comment.php?",true);
	http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; Charset=utf-8"); 
	http.onreadystatechange=processcm;
	http.send("cname="+name+"&cemail="+email+"&cmess="+mess+"&cproid="+proid+"&ccapcha="+capcha+"&chidecapcha="+hidecapcha);
}

function processcm(){
	var kq1=new Array();
	if(http.readyState == 4 && http.status == 200){
		kq1=http.responseText;

		if(kq1 == 1){
			document.getElementById("return").innerHTML="Please enter your information";	
		}else{
			if(kq1 == 2){
			document.getElementById("return").innerHTML="Please enter your mail";		
			}else{
			if(kq1 == 3){
			document.getElementById("return").innerHTML="Please enter security code";		
			}else{
			if(kq1 == 32){
			document.getElementById("return").innerHTML="Please enter security code and address mail";		
			}else{
				document.getElementById("return").innerHTML=kq1;
				document.getElementById("commentform").style.display='none';
			}
		}
		}
	}
		
}
}