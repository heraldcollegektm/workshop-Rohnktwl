<?php
$data=file_get_contents('https://api.openweathermap.org/data/2.5/weather?q=Guildford&units=metric&appid=4fe7108de6175b1e7ec829d751e2eb8c');
$data=json_decode($data, true);

//connecting to database
$con=mysqli_connect('localhost','root','rohan');
if(mysqli_connect_errno()){
    echo "Error connecting to database"
    .mysqli_connect_error();
}else{
    echo "Database connected successfully<br>";
}

// creating a database
if (mysqli_query($con, 'create database weatherdb')){
    echo "Database created successfully";
}else{
    echo "Database not created<br>";
}

//selecting database
if (!mysqli_select_db($con,'weatherdb')){
    mysqli_query($con, 'create database weatherdb');
    mysqli_select_db($con, 'weatherdb');
}

//creating a table
mysqli_query($con,'create table if not exists weather(created_at DATETIME,name varchar(250),
description varchar(255),
icon varchar (50),
temp float,
pressure varchar(255),
humidity varchar(255),
deg varchar(100),
temp_max float,
temp_min float,
speed float,
sunrise int,
sunset int)');


$name=$data["name"];
$description=$data['weather'][0]['description'];
$icon=$data['weather'][0]["icon"];
$temp=$data['main']["temp"];
$pressure=$data['main']["pressure"];
$humidity=$data['main']["humidity"];
$deg=$data['wind']["deg"];
$temp_max=$data['main']["temp_max"];
$temp_min=$data['main']["temp_min"];
$speed=$data['wind']["speed"];
$sunrise=$data['sys']["sunrise"];
$sunset=$data['sys']["sunset"];
$created_at = date("Y-m-d H:i:s");
echo $created_at;

mysqli_query($con, "insert into weather values ('$created_at','$name','$description','$icon','$temp','$pressure','$humidity','$deg','$temp_max','$temp_min','$speed','$sunrise','$sunset')");


?>

