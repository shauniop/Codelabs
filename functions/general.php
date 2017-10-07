<?php 
	$name=$_POST["input-name"];
	$email=$_POST["input-email"];
	$sub=$_POST["input-subject"];
	$msg=$_POST["input-message"];

	mail("rathilvasani@gmail.com",$sub,$msg);

	header("../HTML/about.html");
				 

 ?>
