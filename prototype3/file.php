<?php

//connecting to database
$con=mysqli_connect('localhost','root','rohan','weatherdb');

//selecting from database
$result=mysqli_query($con,'select * from weather ORDER BY created_at DESC LIMIT 1');

$row=mysqli_fetch_assoc($result);
// while($row){
// echo $row['id']." ";
// echo $row['title']." ";
// echo $row['userId']." ";}
// var dump($row);
    echo json_encode($row, true);
?>

