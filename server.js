import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta "public"
app.use('/public', express.static(path.join(__dirname, 'public')));




app.get('/widget.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'widget.js'));
});

// Ruta de prueba para tu HTML si lo querés testear
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname,  'index.html'));});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});