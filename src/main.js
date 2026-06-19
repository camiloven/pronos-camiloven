import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

// 1. Renderizamos la estructura exacta de tu app original
document.querySelector('#app').innerHTML = `
  <div class="app-container" style="font-family: sans-serif; background: #0b0b0b; color: #fff; min-height: 100vh; text-align: center;">
    
    <div style="background: linear-gradient(135deg, #ffcc00, #ff9900); padding: 30px 10px; color: #000; font-weight: bold;">
      <h1 style="margin: 0; font-size: 32px; letter-spacing: 1px; font-family: 'Arial Black', sans-serif;">PRONOS CAMILOUEN</h1>
      <p style="margin: 5px 0 0 0; font-size: 14px; letter-spacing: 2px;">HIGH PROBABILITY PICKS</p>
    </div>

    <div style="display: flex; justify-content: center; gap: 10px; margin: 25px 0; padding: 0 10px;">
      <button style="background: #1c1c1e; color: #aaa; border: none; padding: 12px 20px; border-radius: 20px; font-size: 14px; cursor: pointer;">Betmines</button>
      <button style="background: #1c1c1e; color: #aaa; border: none; padding: 12px 20px; border-radius: 20px; font-size: 14px; cursor: pointer;">Forebet</button>
      <button style="background: #1c1c1e; color: #aaa; border: none; padding: 12px 20px; border-radius: 20px; font-size: 14px; cursor: pointer;">AdamChoi</button>
    </div>

    <div style="padding: 0 20px; margin-bottom: 30px;">
      <button style="background: #ffcc00; color: #000; border: none; width: 100%; max-width: 400px; padding: 18px; border-radius: 20px; font-size: 18px; font-weight: bold; display: inline-flex; align-items: center; justify-content: center; gap: 10px; box-shadow: 0 4px 15px rgba(255,204,0,0.3); cursor: pointer;">
        📁 CARGAR EXCEL
      </button>
    </div>

    <div id="contenedor-ia" style="padding: 0 20px; text-align: left; max-width: 500px; margin: 0 auto 40px auto;">
      <div style="background: #1c1c1e; border: 1px solid #333; border-radius: 15px; padding: 20px;">
        <h3 style="color: #ffcc00; margin-top: 0; display: flex; align-items: center; gap: 8px; font-size: 16px;">
          🤖 Análisis de Capturas por IA
        </h3>
        <div id="ia-output" style="font-size: 14px; color: #ccc; line-height: 1.6;">
          <p style="color: #777; margin: 0; text-align: center;">Esperando datos de las imágenes... Ejecuta el bot en Termux.</p>
        </div>
      </div>
    </div>

  </div>
`

# 2. Lógica invisible para cargar el reporte si existe
const outputDiv = document.querySelector('#ia-output');

fetch('/predicciones.txt')
  .then(response => {
    if (!response.ok) throw new Error('Pendiente');
    return response.text();
  })
  .then(text => {
    // Si hay texto, lo formateamos bonito cambiando los saltos de línea por <br>
    const formateado = text
      .replace(/\n/g, '<br>')
      .replace(/(\*\*.*?\*\*)/g, '<strong style="color: #ffcc00;">$1</strong>')
      .replace(/(### .*?)(<br>|$)/g, '<h4 style="color: #fff; margin-bottom: 5px;">$1</h4>');
    outputDiv.innerHTML = formateado;
  })
  .catch(err => {
    // Si no ha corrido el bot, se queda el mensaje de espera por defecto sin romper la app
    console.log("Aún no se genera el archivo de predicciones de hoy.");
  });
