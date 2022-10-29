<?php
require_once PROJECT_ROOT_PATH . "/Model/Database.php";
 
class GetRegistartionstatus extends Database
{
    public function getUsers($email)
    {
        return $this->select("SELECT profile_id FROM air_passenger_profile where email_id=$email",[] );
    }
}
