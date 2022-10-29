<?php

//establish database connection 
$method=$_SERVER['REQUEST_METHOD'];
$request=explode('/',trim($_SERVER['PATH_INFO'],'/'));

switch ($method) {
    case 'GET':
      
    case 'POST':
      $name = $_POST["name"];
      $email = $_POST["email"];
      $city = $_POST["city"];

      $sql = "insert into users (name, email, city) values ('$name', '$email', '$city')"; 
      break;
}
