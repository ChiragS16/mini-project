<?php
  define('HOST','localhost');
  define('USER','root');
  define('PASS','');
  define('DB','shiv web');
 

 // $con = mysqli_connect(HOST,USER,PASS,DB);
/*  if(mysqli_connect_errno($con))
{
		echo 'Failed to connect';
}
*/
$con = new mysqli(HOST,USER,PASS,DB);
if ($con -> connect_errno) {
  echo "Failed to connect to MySQL: " . $con -> connect_error;
  exit();
}
?>