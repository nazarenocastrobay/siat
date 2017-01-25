<?php

// Guardar los datos recibidos en variables: 
$nombre = $_REQUEST['name'];
$apellido = $_REQUEST['apellido'];
$email = $_REQUEST['email'];
$mensaje = $_REQUEST['content'];
// Definir el correo de destino: 
$dest = "info@e-siat.net";

// Estas son cabeceras que se usan para evitar que el correo llegue a SPAM: 
$headers = "From: " . $nombre . " " . $apellido . " <" . $email . ">" . "\r\n";
$headers .= "X-Mailer: PHP5\n";
$headers .= 'MIME-Version: 1.0' . "\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Aqui definimos el asunto y armamos el cuerpo del mensaje
$asunto = $_REQUEST['asunto'];
$cuerpo = "<strong>Nombre:</strong> ".$nombre. " $apellido". "<br>";
$cuerpo .= "<strong>Email:</strong> ".$email."<br>";
$cuerpo .= "<strong>Mensaje:</strong> ".$mensaje;

// Esta es una pequena validación, que solo envie el correo si todas las variables tiene algo de contenido: 
if($nombre != '' && $email != '' && $mensaje != ''){
mail($dest,$asunto,$cuerpo,$headers); //ENVIAR!
}
header('Location: ../app/layout/header.html');
?>