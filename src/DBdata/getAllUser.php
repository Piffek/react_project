<?php

   try{
      $pdo = new PDO('mysql:host=127.0.0.1;dbname=users', 'root', '');
      echo 'Połączenie nawiązane!';
   }
   catch(PDOException $e){
      echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
   }

$stmt = $pdo->query('SELECT id FROM users');
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
$json=json_encode($result);

echo $json;