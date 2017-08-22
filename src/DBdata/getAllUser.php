<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
   try{
      $pdo = new PDO('mysql:host=127.0.0.1;dbname=users', 'root', '');
   }
   catch(PDOException $e){
      echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
   }

$stmt = $pdo->query('SELECT id FROM users');
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
$json=json_encode($result);

echo $json;