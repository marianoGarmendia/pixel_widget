
(function() {
   const scriptTag = document.currentScript; // ✅ Esto es necesario
  const agentUrl = scriptTag.getAttribute('data-agent-url');
  if (!agentUrl) {
    console.error('widget.js: falta el atributo data-agent-url');
    return;
  }
// Crea el botón flotante como contenedor
const btn = document.createElement('div');
Object.assign(btn.style, {
  position: 'fixed',
  bottom: '24px',
  left: '24px',
  width: '80px',
  backgroundColor: 'transparent',
  borderRadius: '10px',
  cursor: 'pointer',
  zIndex: 100000,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '4px',
});

// Imagen redonda
const img = document.createElement('img');
img.src = scriptTag.getAttribute('data-button-image') || 'https://via.placeholder.com/64';
Object.assign(img.style, {
  width: '64px',
  height: '64px',
  objectFit: 'cover',
  borderRadius: '50%',
  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
});

// Etiqueta debajo de la imagen
const label = document.createElement('div');
label.textContent = '¿Pixel W.S?';
Object.assign(label.style, {
  backgroundColor: '#2E2B86',
  color: '#eee',
  fontSize: '12px',
  padding: '6px 8px',
  borderRadius: '8px',
  fontFamily: 'sans-serif',
  width: '100%',
  boxSizing: 'border-box',
});

btn.appendChild(img);
btn.appendChild(label);
document.body.appendChild(btn);

 })();
