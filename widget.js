(function () {
  const scriptTag = document.currentScript;
  const agentUrl = scriptTag.getAttribute('data-agent-url');
  const imageUrl = scriptTag.getAttribute('data-button-image') || 
    'https://cdn.jsdelivr.net/gh/marianoGarmendia/pixel_widget@master/public/assets/pixel-avatar.jpeg';

  if (!agentUrl) {
    console.error('widget.js: falta el atributo data-agent-url');
    return;
  }

  // 👉 Contenedor botón
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

  // 👉 Imagen circular
  const img = document.createElement('img');
  img.src = imageUrl;
  Object.assign(img.style, {
    width: '74px',
    height: '74px',
    objectFit: 'cover',
    borderRadius: '50%',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  });

  // 👉 Etiqueta debajo
  const label = document.createElement('div');
  label.textContent = 'Pixel W.S';
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

  // 👉 Contenedor del iframe (oculto por defecto)
  const container = document.createElement('div');
  Object.assign(container.style, {
    position: 'fixed',
    bottom: '100px',
    left: '24px',
    width: '350px',
    height: '500px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'none',
    zIndex: 100000,
  });

  const iframe = document.createElement('iframe');
  iframe.src = agentUrl;
  Object.assign(iframe.style, {
    width: '100%',
    height: '100%',
    border: '0',
  });

  container.appendChild(iframe);
  document.body.appendChild(container);

  // 👉 Mostrar/ocultar chat
  let open = false;
  btn.addEventListener('click', () => {
    open = !open;
    container.style.display = open ? 'block' : 'none';
  });
})();
