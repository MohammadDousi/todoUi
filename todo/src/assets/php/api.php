<?php

include $_SERVER['DOCUMENT_ROOT'] . "/assets/php/config.php";
include $_SERVER['DOCUMENT_ROOT'] . "/assets/php/jdf.php";


if (isset($_POST['fun'])) {

    $fun = $_POST['fun'];
    switch ($fun) {
        case 'verifyMobile':
            verifyMobile();
            break;
        case 'verifyOtpCode':
            verifyOtpCode();
            break;
        case 'getAllTask':
            getAllTask();
            break;
        case 'createNewTask':
            createNewTask();
            break;
        case 'getSingleUser':
            getSingleUser();
            break;
        case 'getSingleTask':
            getSingleTask();
            break;
        case 'getAllTaskForSingleUser':
            getAllTaskForSingleUser();
            break;
        case 'getAllUser':
            getAllUser();
            break;

        case 'getAllFilesTask':
            getAllFilesTask();
            break;
        case 'getAllEditHistoryTask':
            getAllEditHistoryTask();
            break;
        case 'updateUser':
            updateUser();
            break;
        case 'getcode':
            getcode();
            break;
        default:
            break;
    }
}


function verifyMobile()
{

    global $con;

    if (isset($_POST['mobileNumber'])) {

        $mobile = $_POST['mobileNumber'];

        if (preg_match("/^09[0-9]{9}$/", $mobile)) {

            $query = 'DELETE FROM `TBOtpCode` where mobile = :mobile';
            $query  = str_replace(";", "", $query);
            $stmt = $con->prepare($query);
            $stmt->bindparam(':mobile', $mobile, PDO::PARAM_INT);
            $stmt->execute();

            $generateCode = rand(1111, 9999);

            $query = 'INSERT INTO `TBOtpCode` VALUES (?,?,?)';
            $query  = str_replace(";", "", $query);
            $stmt = $con->prepare($query);
            $stmt->execute([0, $mobile, $generateCode]);

            if ($stmt) {
                echo "insertOk";
            } else {
                echo "noInsert";
            }
        } else {
            echo "dataInvalied";
        }
    } else {
        echo "noData";
    }

    $con = null;
}
function verifyOtpCode()
{
    global $con;


    if (isset($_POST['otp']) && isset($_POST['mobileNumber'])) {


        $mobile = $_POST['mobileNumber'];
        $getOtp = $_POST['otp'];

        $query = "SELECT otpCode FROM `TBOtpCode` WHERE mobile = :mobile";
        $query = str_replace(";", "", $query);
        $stmt = $con->prepare($query);
        $stmt->bindparam(':mobile', $mobile, PDO::PARAM_STR);
        $stmt->execute();

        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if ($result) {

            foreach ($result as $item) {
                $otpCode = $item['otpCode'];
            }

            if ($otpCode == $getOtp) {

                $query = "SELECT mobile,token FROM `TBUser` WHERE mobile = :mobile";
                $query = str_replace(";", "", $query);
                $stmt = $con->prepare($query);
                $stmt->bindparam(':mobile', $mobile, PDO::PARAM_STR);
                $stmt->execute();

                $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

                if (!$result) {

                    $gentoken = md5(sha1($mobile)) . $otpCode;

                    $query = 'INSERT INTO `TBUser` VALUES (?,?,?,?,?,?,?,?,?,?)';
                    $query  = str_replace(";", "", $query);
                    $stmt = $con->prepare($query);
                    $stmt->execute([0, $gentoken, "", "", $mobile, "", "", "", jdate('Y/n/j H:m'), "active"]);

                    if ($stmt) {
                        $arr[] = ['token' => $gentoken, 'msg' => 'insertOk'];
                        echo json_encode($arr);
                    } else {
                        $arr[] = ['msg' => 'noInsert'];
                        echo json_encode($arr);
                    }
                } else {

                    foreach ($result as $item) {
                        $token = $item['token'];
                    }

                    $arr[] = ['token' => $token, 'msg' => 'insertOk'];
                    echo json_encode($arr);
                }
            } else {
                $arr[] = ['msg' => 'otpNok'];
                echo json_encode($arr);
            }
        } else {

            $arr[] = ['msg' => 'noFoundNum'];
            echo json_encode($arr);
        }
    } else {
        $arr[] = ['msg' => 'noData'];
        echo json_encode($arr);
    }

    $con = null;
}





function getcode()
{
    global $con;


    if (isset($_POST['mobileNumber'])) {

        $mobileNumber = $_POST['mobileNumber'];

        $query = 'SELECT otpCode FROM `TBOtpCode` WHERE `mobile` = :mobile ';
        $query = str_replace(";", "", $query);
        $stmt = $con->prepare($query);
        $stmt->bindparam(':mobile', $mobileNumber, PDO::PARAM_INT);
        $stmt->execute();

        $row = $stmt->fetchAll(PDO::FETCH_OBJ);
        if ($row) {
            echo json_encode($row);
        } else {
            echo json_encode("idNotFound");
        }
    } else {
        echo "noData";
    }

    $con = null;
}




function getSingleTask()
{

    global $con;

    if (isset($_POST['id'])) {

        $id = $_POST['id'];

        $query = 'SELECT * FROM `TBTask` WHERE id = :id LIMIT 1';
        $query = str_replace(";", "", $query);
        $stmt = $con->prepare($query);
        $stmt->bindparam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();

        if ($stmt) {
            echo json_encode($stmt->fetch(PDO::FETCH_OBJ));
        } else {
            echo json_encode("idNotFound");
        }
    } else {
        echo "noData";
    }

    $con = null;
}

function getAllTaskForSingleUser()
{

    global $con;

    if (isset($_POST['id'])) {

        $id = $_POST['id'];

        $query = 'SELECT * FROM `TBTask` WHERE author = :id ORDER BY `id` DESC';
        $query = str_replace(";", "", $query);
        $stmt = $con->prepare($query);
        $stmt->bindparam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();

        if ($stmt) {
            echo json_encode($stmt->fetchAll(PDO::FETCH_OBJ));
        } else {
            echo json_encode("idNotFound");
        }
    } else {
        echo "noData";
    }

    $con = null;
}

function getAllTask()
{

    global $con;

    $query = 'SELECT TBTask.* , TBUser.name FROM TBTask, TBUser WHERE TBTask.author = TBUser.id ORDER BY `id` DESC';
    $query = str_replace(";", "", $query);
    $stmt = $con->prepare($query);
    $stmt->execute();

    if ($stmt) {
        echo json_encode($stmt->fetchAll(PDO::FETCH_OBJ));
    } else {
        echo json_encode("idNotFound");
    }


    $con = null;
}


function getAllFilesTask()
{

    global $con;

    if (isset($_POST['id'])) {

        $query = 'SELECT * FROM `TBFile` WHERE idTask = :id ORDER BY `id` DESC';
        $query = str_replace(";", "", $query);
        $stmt = $con->prepare($query);
        $stmt->bindparam(':id', $_POST['id'], PDO::PARAM_INT);
        $stmt->execute();

        if ($stmt) {
            echo json_encode($stmt->fetchAll(PDO::FETCH_OBJ));
        } else {
            echo json_encode("idNotFound");
        }
    } else {
        echo "noData";
    }

    $con = null;
}
function getAllEditHistoryTask()
{
    global $con;

    if (isset($_POST['id'])) {


        $query = 'SELECT TBHistoryTask.* , TBUser.name FROM TBHistoryTask, TBUser WHERE TBHistoryTask.idTask = :id AND TBHistoryTask.editor = TBUser.id ORDER BY `id` DESC';

        // $query = 'SELECT * FROM `TBHistoryTask` WHERE idTask = :id ORDER BY `id` DESC';
        $query = str_replace(";", "", $query);
        $stmt = $con->prepare($query);
        $stmt->bindparam(':id', $_POST['id'], PDO::PARAM_INT);
        $stmt->execute();

        if ($stmt) {
            echo json_encode($stmt->fetchAll(PDO::FETCH_OBJ));
        } else {
            echo json_encode("idNotFound");
        }
    } else {
        echo "noData";
    }

    $con = null;
}


function createNewTask()
{

    global $con;

    if (
        isset($_POST['subject']) && isset($_POST['description']) &&
        isset($_POST['priority']) && isset($_POST['deadline']) && isset($_POST['author'])
    ) {

        $subject = $_POST['subject'];
        $description = $_POST['description'];
        $priority = $_POST['priority'];
        $tagPartners = $_POST['tagPartners'];
        $deadline = $_POST['deadline'];
        $author = $_POST['author'];

        $query = 'INSERT INTO `TBTask` VALUES (?,?,?,?,?,?,?,?)';
        $query  = str_replace(";", "", $query);
        $stmt = $con->prepare($query);
        $stmt->execute([0, $subject, $description, $priority, "todo", $author, $tagPartners, $deadline]);

        if ($stmt) {
            $lastId = $con->lastInsertId();
            echo "insertOk";

            $errors = array();
            $success = array();

            if (isset($_FILES['files'])) {

                $uploadDir = $_SERVER['DOCUMENT_ROOT'] . "/assets/file/" .  jdate('Ymj') . "/";

                if (!empty(array_filter($_FILES['files']['name']))) {

                    foreach ($_FILES['files']['name'] as $key => $val) {
                        $type = $_FILES['files']['type'][$key];
                        if ($type == 'jpg' || 'png' || 'jpeg' || 'gif') {

                            $filename = basename($_FILES['files']['name'][$key]);
                            $filename = str_replace(' ', '_', $filename);

                            $targetFile = $uploadDir . jdate('YmjHms') . $filename;

                            if (file_exists($uploadDir)) {

                                if (move_uploaded_file($_FILES["files"]["tmp_name"][$key], $targetFile)) {

                                    $query = 'INSERT INTO `TBFile` VALUES (?,?,?)';
                                    $query  = str_replace(";", "", $query);
                                    $stmt = $con->prepare($query);
                                    $stmt->execute([0, $lastId, jdate('Ymj') . "/" . jdate('YmjHms') . $filename]);
                                } else {
                                    echo json_encode($errors[] = "Something went wrong- File - $filename");
                                }
                            } else {

                                mkdir($uploadDir, 0777, true);
                                if (move_uploaded_file($_FILES["files"]["tmp_name"][$key], $targetFile)) {
                                    $query = 'INSERT INTO `TBFile` VALUES (?,?,?)';
                                    $query  = str_replace(";", "", $query);
                                    $stmt = $con->prepare($query);
                                    $stmt->execute([0, $lastId, jdate('Ymj') . "/" . jdate('YmjHms') . $filename]);
                                } else {
                                    echo json_encode($errors[] = "Something went wrong- File - $filename");
                                }
                            }
                        } else {
                            echo json_encode($errors[] = "type file is not support.");
                        }
                    }
                } else {
                    echo json_encode($errors[] = "No File Selected");
                }
            }
        } else {
            echo json_encode("insertError");
        }

        $query = 'INSERT INTO `TBHistoryTask` VALUES (?,?,?,?,?)';
        $query  = str_replace(";", "", $query);
        $stmt = $con->prepare($query);
        $stmt->execute([0, $lastId, $author, "Create Task.", jdate('Y/m/j H:m')]);
    } else {
        echo json_encode("No get data");
    }

    $con = null;
}

function getAllUser()
{
    global $con;

    $query = 'SELECT * FROM `TBUser` ORDER BY `name` ASC';
    $query = str_replace(";", "", $query);
    $stmt = $con->prepare($query);
    $stmt->execute();

    if ($stmt) {
        echo json_encode($stmt->fetchAll(PDO::FETCH_OBJ));
    }

    $con = null;
}

function getSingleUser()
{

    global $con;

    if (isset($_POST['token'])) {

        $token = $_POST['token'];

        $query = 'SELECT * FROM `TBUser` WHERE token = :token LIMIT 1';
        $query = str_replace(";", "", $query);
        $stmt = $con->prepare($query);
        $stmt->bindparam(':token', $token, PDO::PARAM_STR);
        $stmt->execute();

        if ($stmt) {
            echo json_encode($stmt->fetch(PDO::FETCH_OBJ));
        } else {
            echo json_encode("idNotFound");
        }
    } else {
        echo "noData";
    }

    $con = null;
}

function updateUser()
{

    global $con;

    if (isset($_POST['name']) && isset($_POST['mail']) && isset($_POST['jobPostion']) && isset($_POST['token'])) {

        $query = 'UPDATE TBUser SET `name` = :username , `mail` = :mail , `jobPostion` = :jobPostion WHERE `token` = :token';

        $query = str_replace(";", "", $query);
        $stmt = $con->prepare($query);
        $stmt->bindparam(':username', $_POST['name'], PDO::PARAM_STR);
        $stmt->bindparam(':mail', $_POST['mail'], PDO::PARAM_STR);
        $stmt->bindparam(':jobPostion', $_POST['jobPostion'], PDO::PARAM_STR);
        $stmt->bindparam(':token', $_POST['token'], PDO::PARAM_STR);
        $stmt->execute();

        if ($stmt) {

            $query = 'SELECT * FROM `TBUser` WHERE token = :token LIMIT 1';
            $query = str_replace(";", "", $query);
            $stmt = $con->prepare($query);
            $stmt->bindparam(':token', $_POST['token'], PDO::PARAM_STR);
            $stmt->execute();

            echo json_encode($stmt->fetch(PDO::FETCH_OBJ));
        } else {
            // echo json_encode("noUpdate");
        }
    } else {
        echo json_encode("noData");
    }

    $con = null;
}
