// widget.js
(function() {
    // Lee la URL del agente desde el atributo data-agent-url
    const scriptTag = document.currentScript;
    const agentUrl = scriptTag.getAttribute('data-agent-url');
    if (!agentUrl) {
      console.error('widget.js: falta el atributo data-agent-url');
      return;
    }
  
    // Crea el botón flotante
    const btn = document.createElement('button');
    btn.innerText = 'Asistente';
    Object.assign(btn.style, {
      position: 'fixed',
      bottom: '24px',
      left: '24px',
      padding: '12px 16px',
      'background-color': '#6CB64E',
      color: 'white',
      'border-radius': '10px',
      'box-shadow': '0 2px 8px rgba(0,0,0,0.2)',
      cursor: 'pointer',
      'z-index': 100000,
    });
    document.body.appendChild(btn);
  
    // Crea el contenedor del iframe (oculto por defecto)
    const container = document.createElement('div');
    Object.assign(container.style, {
      position: 'fixed',
      bottom: '80px',
      left: '24px',
      width: '350px',
      height: '500px',
      'box-shadow': '0 2px 12px rgba(0,0,0,0.3)',
      'border-radius': '8px',
      overflow: 'hidden',
      display: 'none',
      'z-index': 100000,
    });
    document.body.appendChild(container);
  
    // El iframe que carga tu agente
    const iframe = document.createElement('iframe');
    iframe.src = agentUrl;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';
    container.appendChild(iframe);
  
    // Alterna visibilidad al hacer clic
    let open = false;
    btn.addEventListener('click', () => {
      open = !open;
      container.style.display = open ? 'block' : 'none';
      btn.innerText = open ? 'Cerrar asistente' : 'Asistente';
    });
  })();
  