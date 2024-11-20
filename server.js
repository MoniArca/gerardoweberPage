const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir el archivo logueo.html
app.get('/inicio', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'presentacion.html'));  // Servir 'logueo.html' desde la carpeta 'public'
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});