<?php
require __DIR__ . "/inc/bootstrap.php";
 
require PROJECT_ROOT_PATH . "/Controller/Api/UserController.php";
 
$objFeedController = new UserController();
$strMethodName = $uri[3] . 'Action'
$objFeedController->{$strMethodName}();
?>