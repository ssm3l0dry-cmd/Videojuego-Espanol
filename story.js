/* ── Branching scene graph ── */
const scenes = {

  /* ════════════════════════════════════════
     LLEGADA — Punto de partida
  ════════════════════════════════════════ */
  arrival: {
    chapter: 'Capítulo I — La Llegada',
    image: 'Images/A lo lejos ves un humo y un mercado a lado.jpeg',
    lines: [
      { text: 'Eres un criollo navegante que decide embarcarse junto a sus 3 amigos en una aventura en búsqueda de mejores oportunidades.', highlight: false },
      { text: 'Tienen todo el equipo y los recursos necesarios para sobrevivir en una comunidad completamente nueva.', highlight: false },
      { text: 'Es de noche. A lo lejos alcanzan a avistar una isla. Deciden aparcar ahí y comenzar una vida nueva como criollos en una isla remota.', highlight: false },
      { text: 'A lo lejos se ve un fuego — un pueblo grande. Pero no muy lejos de ti, hay una tienda local con una luz prendida.', highlight: false },
      { text: '¿Qué haces?', highlight: true },
    ],
    choices: [
      { label: 'Explorar la tienda',        next: 'path_A' },
      { label: 'Caminar hacia el pueblo',   next: 'path_B' },
      { label: 'Dormir en el bote',         next: 'path_C' },
    ]
  },

  /* ════════════════════════════════════════
     CAMINO A — LA TIENDA LOCAL
  ════════════════════════════════════════ */
  path_A: {
    chapter: 'Capítulo I — La Tienda Local',
    image: 'Images/Tienda de Padu.jpeg',
    lines: [
      { text: 'Caminas hacia la tienda junto con tus amigos. Abres la puerta y observas la tienda casi vacía.', highlight: false },
      { text: 'En el mostrador, ves a un hombre de edad media alta. Dice llamarse Padú.', highlight: false },
      { text: 'Te mira con curiosidad, como si no fuera común ver caras nuevas, pero no parece hostil.', highlight: false },
      { text: 'Afuera, la isla se siente tranquila… demasiado tranquila.', highlight: false },
      { text: 'Tú y tus amigos se miran entre sí. Todo parece normal… por ahora.', highlight: true },
    ],
    choices: [
      { label: 'Presentarte con confianza y contarle que buscan empezar de nuevo', next: 'A1' },
      { label: 'Preguntar por comida y provisiones primero',                       next: 'A2' },
      { label: 'Preguntar sobre la isla y cómo es la gente del pueblo',            next: 'A3' },
    ]
  },

  /* ── A1 ── */
  A1: {
    chapter: 'Capítulo I — Una Nueva Vida',
    lines: [
      { text: 'Le explicas a Padú que vienes a empezar una nueva vida. Él te escucha, serio.', highlight: false },
      { text: '"Entonces tendrán que hablar con el pueblo", responde.', highlight: false },
      { text: 'Al llegar, todos te observan en silencio. Un hombre da un paso al frente:', highlight: false },
      { text: '"Aquí no aceptamos a cualquiera."', highlight: false },
      { text: 'Sin entender por qué, pasas de esperanza a rechazo inmediato.', highlight: true },
    ],
    choices: [
      { label: 'Volver al bote y dormir',     next: 'path_C'   },
      { label: 'Continuar al pueblo',         next: 'path_B'   },
      { label: 'Expresar tu incomodidad',     next: 'A1c'      },
    ]
  },

  A1c: {
    chapter: 'Capítulo I — Sin Bienvenida',
    lines: [
      { text: 'Padú, sorprendido y angustiado, decide salir de la tienda.', highlight: false },
      { text: 'El hombre del pueblo se frustra más y más. Decide atacarte a ti y a tus amigos.', highlight: false },
      { text: 'Logran escapar. Al volver al barco, las cosas ya no están. Han sido saqueadas.', highlight: false },
      { text: 'Entre lo que queda del bote, alcanzas a observar una tabla de madera:', highlight: false },
      { text: '"No volverán a traer la sequía."', highlight: true },
    ],
    outcome: true,
    outcomeType: 'neutral',
    outcomeTitle: 'Final — No Bienvenidos',
    outcomeText: 'Entiendes que no son bienvenidos en esta isla, y deciden irse. Hay otras islas en el horizonte.',
    next: 'arrival'
  },

  /* ── A2 ── */
  A2: {
    chapter: 'Capítulo I — Suministros',
    lines: [
      { text: 'Padú te da lo necesario. Antes de irte, pregunta: "¿Se van a quedar?"', highlight: false },
      { text: 'Cuando respondes que sí, su expresión cambia. "Entonces tendrán que registrarse."', highlight: false },
      { text: 'Notas que algunas personas te siguen con la mirada… y murmuran.', highlight: false },
      { text: 'No te atacan, pero te hacen sentir que no perteneces.', highlight: true },
    ],
    choices: [
      { label: 'Volver al bote y dormir',     next: 'path_C'   },
      { label: 'Continuar al pueblo',         next: 'path_B'   },
      { label: 'Expresar tu incomodidad',     next: 'A2c'      },
    ]
  },

  A2c: {
    chapter: 'Capítulo I — Forasteros',
    lines: [
      { text: 'Padú, sorprendido y angustiado, decide salir de la tienda.', highlight: false },
      { text: 'Un hombre ajeno a tu tripulación decide atacarte a ti y a tus amigos.', highlight: false },
      { text: 'Logran escapar. Al volver al barco, las cosas ya no están. Han sido saqueadas.', highlight: false },
      { text: 'Entre lo que queda del bote, alcanzas a observar una tabla de madera:', highlight: false },
      { text: '"No volverán a traer la sequía."', highlight: true },
    ],
    outcome: true,
    outcomeType: 'neutral',
    outcomeTitle: 'Final Medio — Forasteros Registrados',
    outcomeText: 'Consigues suministros, pero el pueblo deja claro que nunca serán uno de ellos. Deciden irse de la isla.',
    next: 'arrival'
  },

  /* ── A3 ── */
  A3: {
    chapter: 'Capítulo I — La Gente del Pueblo',
    lines: [
      { text: 'Padú mira hacia el pueblo. "La gente aquí cuida lo suyo", dice.', highlight: false },
      { text: 'Decides ir de todos modos. Al entrar, nadie te habla. Una puerta se cierra con fuerza.', highlight: false },
      { text: 'Empiezas a entender que "cuidar lo suyo" significa excluirte.', highlight: true },
    ],
    next: 'path_B'
  },

  /* ════════════════════════════════════════
     CAMINO B — EL MERCADO DEL PUEBLO
  ════════════════════════════════════════ */
  path_B: {
    chapter: 'Capítulo I — El Mercado',
    image: 'Images/Mercado (1).jpeg',
    lines: [
      { text: 'Te adentras en el pueblo. El fuego que viste a lo lejos era el mercado local.', highlight: false },
      { text: 'Ves que hay comida por donde sea. Te entra mucha hambre y te acercas a comprar en un puesto.', highlight: false },
      { text: 'No te quieren vender. Te acercas a otro y te dan la misma respuesta.', highlight: false },
      { text: '¿Qué vas a hacer?', highlight: true },
    ],
    choices: [
      { label: 'Robarte una brocheta de pescado y regresar al bote solo', next: 'B1'  },
      { label: 'Resignarte y seguir investigando el pueblo',               next: 'B2'  },
    ]
  },

  /* ── B1 — El Robo ── */
  B1: {
    chapter: 'Capítulo I — El Robo',
    image: 'Images/Prision.jpeg',
    lines: [
      { text: 'Te robas una brocheta de pescado y corres en dirección al barco.', highlight: false },
      { text: 'Los pueblerinos entran en pánico. Un hombre te intercepta y pronto pierdes la conciencia.', highlight: false },
      { text: 'Al día siguiente despiertas en una celda junto a tus amigos.', highlight: false },
      { text: 'Un guardia semi dormido cuida la puerta de tu celda.', highlight: true },
    ],
    choices: [
      { label: 'Intentar robarle las llaves y huir',  next: 'jail_steal_keys' },
      { label: 'Rogarle que los libere',              next: 'jail_beg'        },
      { label: 'Insultar al guardia',                 next: 'jail_insult'     },
    ]
  },

  /* ── B2 — La Cantina / Casa de Teo ── */
  B2: {
    chapter: 'Capítulo I — El Desmayo',
    image: 'Images/Te ofrecen trabajo.jpeg',
    lines: [
      { text: 'Con el paso de las horas, tú y tus amigos se desmayan del hambre.', highlight: false },
      { text: 'Despiertas en el sillón de una casa ajena. Percibes un olor a pescado cocinado muy bueno.', highlight: false },
      { text: 'Tus amigos ya no están junto a ti.', highlight: true },
    ],
    choices: [
      { label: 'Salir de la casa y volver a tu barco',        next: 'B2a' },
      { label: 'Inspeccionar la cocina en busca de comida',   next: 'B2b' },
    ]
  },

  B2a: {
    chapter: 'Capítulo I — De Vuelta al Barco',
    image: 'Images/Bote dormir.jpeg',
    lines: [
      { text: 'Al llegar al barco, tus amigos están sentados esperándote.', highlight: false },
      { text: 'Te cuentan que fuiste atacado y quedaste inconsciente.', highlight: false },
      { text: 'Trataron de ayudarte, pero un hombre joven te defendió y te llevó a un paradero que ellos desconocieron.', highlight: false },
      { text: 'Las cosas del barco ya no están. Han sido saqueadas.', highlight: false },
      { text: '"No volverán a traer la sequía."', highlight: true },
    ],
    outcome: true,
    outcomeType: 'neutral',
    outcomeTitle: 'Final Medio — Sin Raíces',
    outcomeText: 'Escaparon con vida, pero sin nada. Entienden que no son bienvenidos y deciden irse de la isla.',
    next: 'arrival'
  },

  B2b: {
    chapter: 'Capítulo I — Las Mojarras',
    lines: [
      { text: 'Encuentras una estufa con dos mojarras siendo cocidas. Se ven tan apetecibles.', highlight: false },
      { text: 'De la puerta de la cocina aparece un hombre joven, quien te invita amablemente a comer con él.', highlight: true },
    ],
    choices: [
      { label: 'Aceptar la invitación',                   next: 'teo_good'   },
      { label: 'Rechazar y volver a tu barco',            next: 'teo_reject' },
    ]
  },

  teo_good: {
    chapter: 'Capítulo I — Teo',
    image: 'Images/Trabajas de pescador.jpeg',
    lines: [
      { text: 'Comes con Teo. Decide contarte que en este pueblo, hace mucho tiempo, hubo una terrible sequía que afectó a la población.', highlight: false },
      { text: 'Los pueblerinos creían que la llegada de los criollos ahuyentaba a los peces.', highlight: false },
      { text: 'Descubres que en esta isla no son muy bienvenidos.', highlight: false },
      { text: 'Sin embargo, Teo está dispuesto a darte un trabajo a ti y a tus amigos, y poco a poco integrarse en la sociedad de la isla.', highlight: true },
    ],
    outcome: true,
    outcomeType: 'good',
    outcomeTitle: 'Final Bueno — Una Nueva Oportunidad',
    outcomeText: 'Tú y tus amigos deciden comenzar una nueva vida como pescadores en un pueblo que poco a poco los mira con menos desprecio. Logran su objetivo, aunque con algo de discriminación.',
    next: 'arrival'
  },

  teo_reject: {
    chapter: 'Capítulo I — La Huida',
    lines: [
      { text: 'Al llegar a tu barco, tus amigos están sentados esperándote.', highlight: false },
      { text: 'Te cuentan que fuiste atacado y quedaste inconsciente.', highlight: false },
      { text: 'Trataron de ayudarte, pero un hombre joven te defendió y te llevó a un paradero que ellos desconocieron.', highlight: false },
      { text: 'Las cosas del barco ya no están. Han sido saqueadas.', highlight: false },
      { text: '"No volverán a traer la sequía."', highlight: true },
    ],
    outcome: true,
    outcomeType: 'neutral',
    outcomeTitle: 'Final Medio — Sin Raíces',
    outcomeText: 'Escaparon con vida, pero sin nada. Entienden que no son bienvenidos y deciden irse de la isla.',
    next: 'arrival'
  },

  /* ════════════════════════════════════════
     CELDA — Compartida por B1 y C2b
  ════════════════════════════════════════ */
  jail_steal_keys: {
    chapter: 'Capítulo I — La Fuga',
    lines: [
      { text: 'Logras tomar las llaves con cautela.', highlight: false },
      { text: 'Tú y tus amigos logran escapar hacia el pueblo.', highlight: true },
    ],
    next: 'path_B'
  },

  jail_beg: {
    chapter: 'Capítulo I — Sin Salida',
    lines: [
      { text: 'El policía, ahora despierto, se niega.', highlight: false },
      { text: 'Al no encontrar otra alternativa, tú y tus amigos quedan presos de por vida.', highlight: true },
    ],
    outcome: true,
    outcomeType: 'bad',
    outcomeTitle: 'Final Malo — Presos de Por Vida',
    outcomeText: 'No hay escapatoria. La isla los reclama como prisioneros para siempre.',
    next: 'arrival'
  },

  jail_insult: {
    chapter: 'Capítulo I — La Paliza',
    lines: [
      { text: 'El guardia se ve ofendido… y muy enojado.', highlight: false },
      { text: 'Decide entrar a la celda a darles una paliza.', highlight: false },
      { text: 'Sin embargo, logran evadirlo y huyen en dirección al barco.', highlight: false },
      { text: 'Al llegar, las cosas ya no están. Han sido saqueadas.', highlight: false },
      { text: '"No volverán a traer la sequía."', highlight: true },
    ],
    outcome: true,
    outcomeType: 'neutral',
    outcomeTitle: 'Final Medio — Golpeados Pero Libres',
    outcomeText: 'Escaparon con lo puesto. Entienden que no son bienvenidos y deciden irse de la isla.',
    next: 'arrival'
  },

  /* ════════════════════════════════════════
     CAMINO C — EL BOTE
  ════════════════════════════════════════ */
  path_C: {
    chapter: 'Capítulo I — El Bote',
    image: 'Images/Bote dormir.jpeg',
    lines: [
      { text: 'Deciden quedarse a dormir en el bote. Ya es demasiado tarde y tienen demasiado sueño.', highlight: false },
      { text: 'El problema es que no saben qué les aguarda esperando y vigilando de noche.', highlight: false },
      { text: '¿Qué harán?', highlight: true },
    ],
    choices: [
      { label: 'Dormir y recuperar energías',    next: 'C1'     },
      { label: 'Quedarse despiertos y cuidarse', next: 'C2'     },
      { label: 'Explorar la tienda',             next: 'path_A' },
    ]
  },

  /* ── C1 — Dormir ── */
  C1: {
    chapter: 'Capítulo I — A la Deriva',
    lines: [
      { text: 'Se duermen. Al despertar ya no están pisando sólido.', highlight: false },
      { text: 'En torno a ti, mares y mares de agua sin algún horizonte plano a la vista.', highlight: false },
      { text: 'Ves a lo lejos a un amigo todavía cercano que con pocas palabras te dice que invadieron su bote y los echaron al mar.', highlight: false },
      { text: '¡¿Cómo fue que no se despertaron a tiempo?!', highlight: false },
      { text: 'Vaya, tal vez descansar no fue su mejor opción.', highlight: true },
    ],
    outcome: true,
    outcomeType: 'bad',
    outcomeTitle: 'Final Malo — A la Deriva',
    outcomeText: 'Invadieron el bote mientras dormían y los echaron al mar. No hay tierra a la vista.',
    next: 'arrival'
  },

  /* ── C2 — Quedarse despiertos ── */
  C2: {
    chapter: 'Capítulo I — La Emboscada',
    lines: [
      { text: 'Deciden quedarse despiertos. Sin duda es la más segura.', highlight: false },
      { text: 'Rápidamente caen en cuenta que esta fue la mejor opción.', highlight: false },
      { text: 'Un grupo de habitantes se revela de entre las sombras con armas punzantes y lanza-dardos tranquilizantes.', highlight: false },
      { text: 'Al notar sus intenciones, rápidamente se cubren con su equipo.', highlight: false },
      { text: 'A lo lejos escuchan sus gritos: "¡Devuélvanse por donde vinieron! ¡Mugres criollos!!!"', highlight: true },
    ],
    choices: [
      { label: 'Rendirse',                                      next: 'C2a' },
      { label: 'Atacar de vuelta',                              next: 'C2b' },
      { label: 'Defenderse, hacer tiempo y esperar que algo suceda', next: 'C2c' },
    ]
  },

  C2a: {
    chapter: 'Capítulo I — Rendición',
    lines: [
      { text: 'Tú y tus amigos se rinden.', highlight: false },
      { text: 'Rápidamente son atravesados por lanza-dardos tranquilizantes.', highlight: false },
      { text: 'Al despertar ya no estás pisando sólido. Mares y mares de agua sin horizonte a la vista.', highlight: false },
      { text: 'Has sido exiliado de la isla, sin recursos, ni una dirección exacta a la cual navegar.', highlight: true },
    ],
    outcome: true,
    outcomeType: 'bad',
    outcomeTitle: 'Final Malo — Exiliados al Mar',
    outcomeText: 'Los dardos tranquilizantes los vencieron. Amanecen a la deriva, sin rumbo y sin recursos.',
    next: 'arrival'
  },

  C2b: {
    chapter: 'Capítulo I — La Batalla',
    lines: [
      { text: 'Atacan de vuelta. La batalla parece estresante.', highlight: false },
      { text: 'Después de un tiempo llega la policía de la isla.', highlight: false },
      { text: 'Con el escándalo te llevan a ti y a tus amigos presos.', highlight: false },
      { text: 'Al día siguiente despiertas en una celda junto a tus amigos.', highlight: false },
      { text: 'Un guardia semi dormido cuida la puerta de tu celda.', highlight: true },
    ],
    choices: [
      { label: 'Intentar robarle las llaves y huir',  next: 'jail_steal_keys' },
      { label: 'Rogarle que los libere',              next: 'jail_beg'        },
      { label: 'Insultar al guardia',                 next: 'jail_insult'     },
    ]
  },

  C2c: {
    chapter: 'Capítulo I — Teo Aparece',
    lines: [
      { text: 'Al lograr hacer tiempo, llega un hombre joven a defenderlos.', highlight: false },
      { text: 'Los pueblerinos, indignados y con caras de asco, se marchan.', highlight: false },
      { text: 'El hombre se presenta y dice llamarse Teo.', highlight: false },
      { text: 'Teo les explica que hace mucho tiempo hubo una gran sequía, y la gente señalaba a los criollos como la principal causa de esta.', highlight: false },
      { text: 'Decide ofrecerte a ti y a tus amigos un refugio y un trabajo dentro de la isla.', highlight: true },
    ],
    choices: [
      { label: 'Aceptar el trabajo',                      next: 'C2c_accept'  },
      { label: 'Desconfiar y huir de la isla',            next: 'C2c_flee'    },
      { label: 'No tomar la oferta y explorar el pueblo', next: 'path_B'      },
    ]
  },

  C2c_accept: {
    chapter: 'Capítulo I — Pescadores',
    lines: [
      { text: 'Tú y tus amigos deciden comenzar una nueva vida como pescadores.', highlight: false },
      { text: 'El pueblo poco a poco los mira con menos desprecio, sin embargo este nunca desaparece del todo.', highlight: false },
      { text: 'Logran su objetivo principal, aunque con algo de discriminación.', highlight: true },
    ],
    outcome: true,
    outcomeType: 'good',
    outcomeTitle: 'Final Bueno — Raíces en la Isla',
    outcomeText: 'Se quedan. Trabajan. Con el tiempo, algunos vecinos empiezan a aceptarlos. El camino es largo, pero han encontrado un hogar.',
    next: 'arrival'
  },

  C2c_flee: {
    chapter: 'Capítulo I — La Despedida',
    lines: [
      { text: 'Teo parece decepcionarse mientras tú y tus amigos corren rumbo a su bote.', highlight: false },
      { text: 'Deciden marcharse, pues entienden que nunca serán bienvenidos en aquella isla.', highlight: true },
    ],
    outcome: true,
    outcomeType: 'neutral',
    outcomeTitle: 'Final Medio — Otra Isla',
    outcomeText: 'Escaparon con vida y con dignidad. Hay otras islas en el horizonte, y con ellas, otra oportunidad.',
    next: 'arrival'
  },
};

/* ════════════════════════════════════════
   STATE & ENGINE
════════════════════════════════════════ */
let currentSceneId = 'arrival';
let sidebarOpen    = true;
let animating      = false;

/* ── Boot ── */
(function init() {
  const overlay = document.createElement('div');
  overlay.id = 'pageTransition';
  overlay.style.opacity = '1';
  document.body.appendChild(overlay);

  const rc = document.getElementById('rainContainer');
  if (rc && rc.children.length === 0) generateRain();

  gsap.to('#pageTransition', {
    opacity: 0,
    duration: 0.9,
    ease: 'power2.out',
    onComplete: () => {
      overlay.style.display = 'none';
      loadScene(currentSceneId);
    }
  });
})();

/* ── Load scene ── */
function loadScene(id, firstLoad = false) {
  if (animating) return;
  animating      = true;
  currentSceneId = id;

  const scene    = scenes[id];
  const textBox  = document.getElementById('storyText');
  const label    = document.getElementById('chapterLabel');
  const controls = document.getElementById('storyControls');

  /* Build text lines */
  textBox.innerHTML = '';
  scene.lines.forEach(l => {
    const p = document.createElement('p');
    p.className = 'story-line' + (l.highlight ? ' highlight' : '');
    p.textContent = l.text;
    textBox.appendChild(p);
  });

  /* Scene image frame */
  const existingFrame = document.getElementById('sceneImageFrame');
  if (existingFrame) existingFrame.remove();
  if (scene.image) {
    const frame = document.createElement('div');
    frame.id = 'sceneImageFrame';
    frame.className = 'scene-image-frame';
    const img = document.createElement('img');
    img.src = scene.image;
    img.alt = '';
    img.className = 'scene-image';
    frame.appendChild(img);
    textBox.parentNode.insertBefore(frame, textBox);
  }

  /* Build controls */
  controls.innerHTML = '';

  if (scene.choices) {
    /* Decision scene */
    const back = document.createElement('button');
    back.className   = 'story-btn story-btn-back';
    back.textContent = '← Volver';
    back.onclick     = goBack;
    controls.appendChild(back);

    scene.choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.className   = 'story-btn story-btn-choice';
      btn.textContent = choice.label;
      btn.onclick     = () => gotoScene(choice.next);
      controls.appendChild(btn);
    });

  } else if (scene.outcome) {
    /* Outcome scene */
    const badge = document.createElement('div');
    badge.className = 'outcome-badge outcome-' + scene.outcomeType;
    badge.innerHTML = `<strong>${scene.outcomeTitle}</strong><span>${scene.outcomeText}</span>`;
    controls.appendChild(badge);

    const restart = document.createElement('button');
    restart.className   = 'story-btn story-btn-next';
    restart.textContent = '↩ Explorar otra decisión';
    restart.onclick     = () => gotoScene('arrival');
    controls.appendChild(restart);

  } else {
    /* Linear continue scene */
    const back = document.createElement('button');
    back.className   = 'story-btn story-btn-back';
    back.textContent = '← Volver';
    back.onclick     = goBack;
    controls.appendChild(back);

    const next = document.createElement('button');
    next.className   = 'story-btn story-btn-next';
    next.textContent = 'Continuar →';
    next.onclick     = () => gotoScene(scene.next);
    controls.appendChild(next);
  }

  const lines = textBox.querySelectorAll('.story-line');

  label.textContent = scene.chapter;

  animating = false;

  if (typeof gsap === 'undefined') return;

  /* Reset the storyText container itself (gotoScene fades it to 0) */
  gsap.set(textBox, { opacity: 1, y: 0 });

  /* Animate label, lines, controls */
  gsap.set(label,    { autoAlpha: 0, y: -8 });
  gsap.set(lines,    { autoAlpha: 0, y:  12 });
  gsap.set(controls, { autoAlpha: 0, y:   6 });

  const tl = gsap.timeline();
  tl.to(label, { autoAlpha: 1, y: 0, duration: 0.75, ease: 'power2.out' });
  lines.forEach((line, i) => {
    tl.to(line, { autoAlpha: 1, y: 0, duration: 0.75, ease: 'power2.out' }, `+=${i === 0 ? 0.15 : 0.45}`);
  });
  tl.to(controls, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '+=0.3');
}

/* ── Navigate to another scene with fade ── */
function gotoScene(id) {
  if (animating) return;
  animating = true;

  gsap.to(['#chapterLabel', '#storyText', '#storyControls'], {
    opacity: 0,
    y: -10,
    duration: 0.5,
    ease: 'power2.in',
    stagger: 0.06,
    onComplete: () => {
      animating = false;
      loadScene(id);
    }
  });
}

/* ── Back to index ── */
function goBack() {
  if (animating) return;
  const overlay = document.getElementById('pageTransition');
  overlay.style.display = 'block';
  gsap.fromTo('#pageTransition',
    { opacity: 0 },
    { opacity: 1, duration: 0.6, ease: 'power2.in',
      onComplete: () => { window.location.href = 'index.html'; }
    }
  );
}

/* ── Sidebar toggle ── */
function toggleSidebar() {
  const sidebar = document.getElementById('storySidebar');
  const toggle  = document.getElementById('sidebarToggle');
  const icon    = document.getElementById('toggleIcon');

  sidebarOpen = !sidebarOpen;

  if (sidebarOpen) {
    sidebar.classList.remove('collapsed');
    toggle.classList.remove('sidebar-closed');
    icon.classList.remove('rotated');
  } else {
    sidebar.classList.add('collapsed');
    toggle.classList.add('sidebar-closed');
    icon.classList.add('rotated');
  }

  gsap.to(toggle, {
    left: sidebarOpen ? 240 : 0,
    duration: 0.4,
    ease: 'power2.inOut'
  });
}

/* ── Audio helpers ── */
function playMusic() {
  document.getElementById('bgMusic').play().catch(() => {
    showModal('Música', '<p>Coloca un archivo <strong>music.mp3</strong> en la carpeta del juego.</p>');
  });
}
function stopMusic() {
  const m = document.getElementById('bgMusic');
  m.pause();
  m.currentTime = 0;
}

function confirmRestart() {
  showModal('Reiniciar', `
    <p>¿Volver al inicio del juego?</p>
    <div style="display:flex;gap:12px;margin-top:20px;">
      <button class="btn btn-stop"    style="flex:1" onclick="goBack()">Sí</button>
      <button class="btn btn-restart" style="flex:1" onclick="closeModal()">Cancelar</button>
    </div>`
  );
}
