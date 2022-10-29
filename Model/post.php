<?php

include 'Database.php";

$method=$_SERVER['REQUEST_METHOD'];
$request=explode('/',trim($_SERVER['PATH_INFO'],'/'));

switch ($method) {
    case 'GET':
      
    case 'POST':
      $username = $_POST["username"];
      $email = $_POST["email"];
      $city = $_POST["city"];
      $password=$_POST["password"];

      $sql = "insert into users (username, email, city,password) values ('$username', '$email', '$city','$password')"; 
      break;
}
