<?php
function writeFileData($pathname, $data)
{
    $pathname = "data/" . $pathname;
    $myfile = fopen($pathname, "a");
    fwrite($myfile, $data);
    fclose($myfile);
    echo $data." ammended to ".$pathname . "<br>";
}

function readFileData($file)
{
    $file="data/".$file;
    $myfile = fopen($file, "r") or writeFileData($file,"");
    $data = fread($myfile, filesize($file));
    $start = 0;
    $words = array();
    for ($x = 0; $x < strlen($data); $x++) {

        $char1 = substr($data, $x - 1, 1);
        $char2 = substr($data, $x, 1);

        if ($char1 == "|" && $char2 == "|") {
            $end = $x - 1;
            $object = substr($data, $start,$end-$start);
            $start = $end + 2;
            array_push($words, $object);
        }
    }
    


    fclose($myfile);
    return($words);
}

function clear($pathname){
    $pathname = "data/" . $pathname;
    $myfile = fopen($pathname, "w");
    fwrite($myfile, "");
    fclose($myfile);
    echo $pathname." cleared" . "<br>";
}
function readAllObjects($listname){

        for($test=0;$test<count($listname);$test++){
            echo $listname[$test]."<br>";
        }
    }