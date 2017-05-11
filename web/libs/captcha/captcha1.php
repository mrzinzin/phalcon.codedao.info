<?php
//session_start();
$md5_hash = md5(rand(0,9999));
$security_code = substr($md5_hash, 15, 5);

$_SESSION["security_code"] = $security_code;
function create_image($security_code)
{
    $width = 100;
    $height = 25;
    $image = imagecreate($width, $height);
    $white = imagecolorallocate($image, 255, 255, 255);
    $black = imagecolorallocate($image, 147, 175, 196);
    imagefill($image, 0, 0, $black);
    imagestring($image, 5, 30, 6, $security_code, $white);
    header("Content-Type: image/jpeg");
    imagejpeg($image);
    imagedestroy($image);
}
create_image($security_code) ;
exit();
?>