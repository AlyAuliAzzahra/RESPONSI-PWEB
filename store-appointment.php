<?php
  $appointmentData = $_POST['appointmentData'];
  $file = 'appointments.txt';
  file_put_contents($file, $appointmentData, FILE_APPEND);
?>

