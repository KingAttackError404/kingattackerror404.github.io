<?php
// Lakukan apa yang diperlukan untuk menghitung jumlah permintaan, misalnya dengan memeriksa log akses atau database.
// Misalnya, Anda bisa menghitung jumlah baris dalam file log.

$logFile = 'log.txt'; // Gantilah dengan lokasi file log yang sesuai dengan konfigurasi Anda
$requestCount = count(file($logFile));

// Keluarkan jumlah permintaan sebagai respons JSON
header('Content-Type: application/json');
echo json_encode(['requestCount' => $requestCount]);
?>
