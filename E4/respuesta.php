<?php
// Obtiene el usuario seleccionado del formulario
$usuario = isset($_GET['usuario']) ? intval($_GET['usuario']) : 0;

// Array de series favoritas por usuario
$series_favoritas = [
    1 => "Juego de Tronos",
    2 => "Peaky Blinders",
    8 => "Las bolas del dragon",
];

// Determina la serie favorita del usuario
$serie_favorita = isset($series_favoritas[$usuario]) ? $series_favoritas[$usuario] : "No especificada";

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Serie Favorita</title>
</head>
<body>
    <h1>Información del Usuario</h1>
    <p>Al usuario <?php echo $usuario; ?> le gusta la serie: <?php echo $serie_favorita; ?>.</p>
    <button onclick="window.location.href='index.html'">Volver</button>
</body>
</html>
