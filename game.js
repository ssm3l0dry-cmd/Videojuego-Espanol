/* ── Rain generator (shared by index + story) ── */
function generateRain() {
  const container = document.getElementById('rainContainer');
  if (!container) return;
  for (let i = 0; i < 90; i++) {
    const drop = document.createElement('div');
    drop.className = 'raindrop';
    const left     = Math.random() * 100;
    const height   = 12 + Math.random() * 28;
    const duration = 0.6 + Math.random() * 1.2;
    const delay    = Math.random() * 3;
    drop.style.cssText = `
      left: ${left}%;
      height: ${height}px;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;
    container.appendChild(drop);
  }
}

// Only run on index page; story.js handles rain generation there
if (document.getElementById('rainContainer') && !document.getElementById('storyText')) generateRain();

/* ── Audio ── */
function playMusic() {
  const music = document.getElementById('bgMusic');
  music.play().catch(() => {
    showModal('Música', '<p>No se encontró un archivo de música. Coloca un archivo <strong>music.mp3</strong> en la carpeta del juego.</p>');
  });
}

function stopMusic() {
  const music = document.getElementById('bgMusic');
  music.pause();
  music.currentTime = 0;
}

/* ── Game state ── */
const state = {
  chapter: 1,
  inventory: [
    { icon: '⛵', name: 'Bote' },
    { icon: '🌧️', name: 'Lluvia' },
    { icon: '🗺️', name: 'Mapa' },
    null, null, null, null, null,
  ],
  saves: [
    { slot: 1, label: 'Capítulo 1 — El mar en calma',  used: true  },
    { slot: 2, label: 'Capítulo 1 — La tormenta llega', used: true  },
    { slot: 3, label: 'Ranura vacía',                   used: false },
    { slot: 4, label: 'Ranura vacía',                   used: false },
  ]
};

/* ── Inventory ── */
function openInventory() {
  let items = '';
  state.inventory.forEach(item => {
    if (item) {
      items += `<div class="inv-slot">${item.icon}<span>${item.name}</span></div>`;
    } else {
      items += `<div class="inv-slot inv-empty">＋<span>Vacío</span></div>`;
    }
  });
  showModal('Inventario', `<div class="inventory-grid">${items}</div>`);
}

/* ── Saves ── */
function openSaves() {
  let slots = '<div class="save-slots">';
  state.saves.forEach(s => {
    slots += `
      <div class="save-slot">
        <span><strong>Ranura ${s.slot}</strong><br/><small>${s.label}</small></span>
        <div class="slot-actions">
          ${s.used
            ? `<button class="btn-save-load" onclick="loadSave(${s.slot})">Cargar</button>
               <button class="btn-save-del"  onclick="deleteSave(${s.slot})">Borrar</button>`
            : `<button class="btn-save-load" onclick="saveGame(${s.slot})">Guardar</button>`
          }
        </div>
      </div>`;
  });
  slots += '</div>';
  showModal('Partidas Guardadas', slots);
}

function loadSave(slot) {
  closeModal();
  showModal('Cargando…', `<p>Cargando Ranura ${slot}…</p><p style="margin-top:8px;color:#7bb8f5;">¡Bienvenida de vuelta!</p>`);
}
function deleteSave(slot) {
  const s = state.saves.find(x => x.slot === slot);
  if (s) { s.used = false; s.label = 'Ranura vacía'; }
  closeModal(); openSaves();
}
function saveGame(slot) {
  const s = state.saves.find(x => x.slot === slot);
  if (s) { s.used = true; s.label = `Capítulo ${state.chapter} — Guardado`; }
  closeModal(); openSaves();
}

/* ── Restart ── */
function restartGame() {
  showModal('Reiniciar', `
    <p>¿Segura que quieres reiniciar el juego desde el principio?</p>
    <div style="display:flex;gap:12px;margin-top:20px;">
      <button class="btn btn-stop"    style="flex:1" onclick="confirmRestart()">Sí, reiniciar</button>
      <button class="btn btn-restart" style="flex:1" onclick="closeModal()">Cancelar</button>
    </div>`
  );
}
function confirmRestart() {
  state.chapter = 1;
  closeModal();
  showModal('Reiniciado', '<p>El juego ha comenzado de nuevo desde el Capítulo 1.</p>');
}

/* ── Main page sidebar toggle ── */
let mainSidebarOpen = true;
function toggleMainSidebar() {
  const sidebar = document.getElementById('mainSidebar');
  const toggle  = document.getElementById('mainSidebarToggle');
  const icon    = document.getElementById('mainToggleIcon');
  if (!sidebar) return;
  mainSidebarOpen = !mainSidebarOpen;
  if (mainSidebarOpen) {
    sidebar.classList.remove('collapsed');
    toggle.classList.remove('sidebar-closed');
    icon.classList.remove('rotated');
  } else {
    sidebar.classList.add('collapsed');
    toggle.classList.add('sidebar-closed');
    icon.classList.add('rotated');
  }
  gsap.to(toggle, { left: mainSidebarOpen ? 220 : 0, duration: 0.4, ease: 'power2.inOut' });
}

/* ── Bottom nav — Play navigates to story with fade transition ── */
function startPlay() {
  const overlay = document.getElementById('pageTransition');
  if (!overlay) { window.location.href = 'story.html'; return; }
  gsap.to('#pageTransition', {
    opacity: 1,
    duration: 0.7,
    ease: 'power2.in',
    onComplete: () => { window.location.href = 'story.html'; }
  });
}

function showCredits() {
  showModal('Créditos', `
    <ul>
      <li><strong>Historia:</strong> Joel Reyes Valdez - A01288534<br>Carlitos Alfonso Benítez - A01288561<br>Joe Rokart Siliceo Garza - A01288654<br>José Angel González Contreras - a01288753@tec.mx</li>
      <li><strong>Arte e Ilustración:</strong> Gemini (Nano Banana 2)</li>
      <li><strong>Música:</strong> Por añadir (music.mp3)</li>
      <li><strong>Desarrollo:</strong> Claude Code</li>
    </ul>
    <p style="margin-top:16px;color:#7bb8f5;font-size:0.85rem;">Proyecto de clase — Español</p>`
  );
}

function showAbout() {
  showModal('Acerca del juego', `
    <h2>Ella Trae la Lluvia</h2>
    <p>Una novela visual interactiva sobre una joven que navega sola en un mar eterno, con el poder de invocar la lluvia.</p>
    <p>Explora su historia, descubre sus secretos y decide su destino.</p>
    <p style="margin-top:14px;color:#7bb8f5;font-size:0.85rem;">Versión 1.0</p>`
  );
}

/* ── Modal helper ── */
function showModal(title, bodyHTML) {
  document.getElementById('modalContent').innerHTML = `<h2>${title}</h2>${bodyHTML}`;
  document.getElementById('modalOverlay').classList.add('open');
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}
