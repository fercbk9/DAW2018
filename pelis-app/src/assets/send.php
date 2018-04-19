<?php
	$nombre = filter_input(INPUT_GET, "nombre");
	$asunto = filter_input(INPUT_GET, "asunto");
	$email = filter_input(INPUT_GET, "email");
	$mensaje = filter_input(INPUT_GET, "textarea");
	$contenido = "De:  $nombre " . " E-mail: $email " . $mensaje;


	mail("fercbk9@gmail.com", $asunto, $contenido,$email);
	echo "Su mensaje se ha enviado correctamente"+ $nombre;
?>
