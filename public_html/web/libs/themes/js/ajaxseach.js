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


function showloai(mid){
	http.open("get","http://localhost/shopping/modules/product/seachajax.php?lid="+mid,true);
	http.onreadystatechange=process2;
	http.send(null);
}
function process2(){
	if(http.readyState == 4 && http.status == 200){
		kq=http.responseXML;
		document.getElementById("unhiddenselect").innerHTML=kq.getElementsByTagName("person_loai").item(0).firstChild.nodeValue;
		document.getElementById("hiddenselect").style.display='none';
	}
}