import './style.css'

const appDiv = document.querySelector('#app');

// Buscamos el archivo usando una ruta relativa limpia para que Vercel no se confunda
fetch('./predicciones.txt')
  .then(response => {
    if (!response.ok) throw new Error('Aún no hay datos');
    return response.text();
  })
  .then(text => {
    const contenidoFormateado = text
      .replace(/\n/g, '<br>')
      .replace(/\*\*(.*?)\*\*/g, '<strong style="color: #ffcc00;">$1</strong>');

    appDiv.innerHTML = `
      <section id="center">
        <div class="hero" style="background: linear-gradient(135deg, #ffcc00, #ff9900); padding: 30px 10px; color: #000; font-weight: bold; text-align: center; border-radius: 0 0 20px 20px;">
          <h1 style="margin: 0; font-size: 32px; font-family: 'Arial Black', sans-serif;">PRONOS CAMILOUEN</h1>
          <p style="margin: 5px 0 0 0; font-size: 14px; letter-spacing: 2px;">HIGH PROBABILITY PICKS</p>
        </div>
        
        <div style="display: flex; justify-content: center; gap: 10px; margin: 25px 0; padding: 0 10px;">
          <button class="counter">Betmines</button>
          <button class="counter">Forebet</button>
          <button class="counter">AdamChoi</button>
        </div>

        <div style="padding: 0 20px; margin-bottom: 30px; text-align: center;">
          <button class="counter" style="background: #ffcc00; color: #000; width: 100%; max-width: 400px; padding: 18px; font-size: 18px; font-weight: bold;">
            📁 CARGAR EXCEL
          </button>
        </div>

        <div style="padding: 0 20px; text-align: left; max-width: 600px; margin: 0 auto 50px auto;">
          <div style="background: #1c1c1e; border: 1px solid #ffcc00; border-radius: 15px; padding: 20px; box-shadow: 0 4px 15px rgba(255,204,0,0.1);">
            <h3 style="color: #ffcc00; margin-top: 0; font-size: 18px; border-bottom: 1px solid #333; padding-bottom: 10px;">
              🤖 Análisis Multi-Captura Realizado con Éxito
            </h3>
            <div style="font-size: 14px; color: #e0e0e0; line-height: 1.6; max-height: 400px; overflow-y: auto; padding-right: 5px;">
              ${contenidoFormateado}
            </div>
          </div>
        </div>
      </section>
    `;
  })
  .catch(err => {
    appDiv.innerHTML = `
      <section id="center">
        <div class="hero" style="background: linear-gradient(135deg, #ffcc00, #ff9900); padding: 30px 10px; color: #000; font-weight: bold; text-align: center;">
          <h1 style="margin: 0; font-size: 32px;">PRONOS CAMILOUEN</h1>
          <p style="margin: 5px 0 0 0; font-size: 14px;">HIGH PROBABILITY PICKS</p>
        </div>
        <div style="display: flex; justify-content: center; gap: 10px; margin: 25px 0;">
          <button class="counter">Betmines</button>
          <button class="counter">Forebet</button>
          <button class="counter">AdamChoi</button>
        </div>
        <div style="padding: 0 20px; text-align: center;">
          <button class="counter" style="background: #ffcc00; color: #000; width: 100%; max-width: 400px; padding: 18px;">📁 CARGAR EXCEL</button>
        </div>
        <p style="color: #777; text-align: center; margin-top: 20px;">[!] Esperando actualización de predicciones...</p>
      </section>
    `;
  });
