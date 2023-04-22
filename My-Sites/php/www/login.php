<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password</title>
    <link rel="icon" href="https://www.pngmart.com/files/6/Security-Safe-Transparent-Background.png">
</head>

<body>

    <form class="hideAsNeeded" action="login.php" method="post">
        Password:<br> <input id="password" type="text" name="password">
        <input onclick="writeResult()" type="submit">
    </form>
    <hr class="hideAsNeeded">
    <p id="text"></p>
    <?php
    $pass = $_POST["password"];
    echo "last Entry: ";
    echo $pass;
    echo "<br>";
    include "test.php";
    ?>
    <?php 
    echo "<script src='script.js'></script>";
    ?>
</body>

</html>