<?php

include 'Database.php";
require_once "/inc/config.php";

$link = mysqli_connect($DB_HOST, $DB_USERNAME, $DB_PASSWORD, $DB_DATABASE_NAME);

if (mysqli_connect_errno()) {
   die("Connect failed: %s\n" + mysqli_connect_error());
   exit();
}

$method=$_SERVER['REQUEST_METHOD'];
$request=explode('/',trim($_SERVER['PATH_INFO'],'/'));

switch ($method) {
    case 'GET':
      
    case 'POST':
      $username = $_POST["username"];
      $email = $_POST["email"];
      $city = $_POST["city"];
      $password=$_POST["password"];

      $sql = "insert into air_passenger_profile(username, email, city,password) values ('$username', '$email', '$city','$password')"; 
      break;
}

if ($link->query($sql) === TRUE) {
  echo "User has been created successfully";
} else {
  echo "Error creating user profile: " . $conn->error;
}

$link->close();
