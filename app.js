const MALE_AVATARS = [
  { id: "m1", name: "Mateo Nocturno", skin: "#e0ac8b", hair: "#1f2937", shirt: "#1e3a8a", style: "short", beard: false, glasses: false, accent: "#60a5fa" },
  { id: "m2", name: "Lucas Barbudo", skin: "#d19a78", hair: "#3f2314", shirt: "#374151", style: "messy", beard: true, glasses: false, accent: "#f59e0b" },
  { id: "m3", name: "Tomás Lentes", skin: "#f1c7a9", hair: "#4b3621", shirt: "#065f46", style: "side", beard: false, glasses: true, accent: "#34d399" },
  { id: "m4", name: "Ramiro Punk", skin: "#e6b89c", hair: "#991b1b", shirt: "#18181b", style: "spiky", beard: false, glasses: false, accent: "#f87171" },
  { id: "m5", name: "Bruno Calmo", skin: "#8d5b42", hair: "#111827", shirt: "#78350f", style: "short", beard: true, glasses: false, accent: "#fbbf24" },
  { id: "m6", name: "Dante Bohemio", skin: "#eac0a2", hair: "#27272a", shirt: "#4c1d95", style: "long", beard: true, glasses: true, accent: "#c084fc" },
  { id: "m7", name: "Franco urbano", skin: "#c68b67", hair: "#171717", shirt: "#9a3412", style: "cap", beard: false, glasses: false, accent: "#fb923c" },
  { id: "m8", name: "Simón Cínico", skin: "#f3cdb3", hair: "#52525b", shirt: "#1f2937", style: "side", beard: false, glasses: true, accent: "#94a3b8" },
  { id: "m9", name: "Nehuén Surfer", skin: "#d69e7c", hair: "#b45309", shirt: "#0369a1", style: "messy", beard: false, glasses: false, accent: "#38bdf8" },
  { id: "m10", name: "Vasco Sabio", skin: "#e4b496", hair: "#d1d5db", shirt: "#312e81", style: "short", beard: true, glasses: true, accent: "#a5b4fc" }
];

const FEMALE_AVATARS = [
  { id: "f1", name: "Valeria Fuego", skin: "#f2c6a7", hair: "#7c2d12", shirt: "#881337", style: "long", glasses: false, blush: true, accent: "#fb7185" },
  { id: "f2", name: "Camila Lentes", skin: "#e3b292", hair: "#1f2937", shirt: "#1e40af", style: "bob", glasses: true, blush: false, accent: "#60a5fa" },
  { id: "f3", name: "Sofía Luna", skin: "#f5d0b5", hair: "#d97706", shirt: "#4c1d95", style: "ponytail", glasses: false, blush: true, accent: "#c084fc" },
  { id: "f4", name: "Abril Rebelde", skin: "#d9a282", hair: "#111827", shirt: "#18181b", style: "short", glasses: false, blush: false, accent: "#f87171" },
  { id: "f5", name: "Micaela Tierra", skin: "#8d5b42", hair: "#18181b", shirt: "#065f46", style: "curly", glasses: false, blush: true, accent: "#34d399" },
  { id: "f6", name: "Elena Clásica", skin: "#ecc1a3", hair: "#451a03", shirt: "#78350f", style: "long", glasses: true, blush: false, accent: "#fbbf24" },
  { id: "f7", name: "Zoe Eléctrica", skin: "#f0c3a5", hair: "#0284c7", shirt: "#1e293b", style: "bob", glasses: false, blush: true, accent: "#38bdf8" },
  { id: "f8", name: "Renata Filósofa", skin: "#dfad8d", hair: "#27272a", shirt: "#581c87", style: "ponytail", glasses: true, blush: false, accent: "#e879f9" },
  { id: "f9", name: "Paz Brisa", skin: "#c88d6a", hair: "#3f2314", shirt: "#9a3412", style: "curly", glasses: false, blush: true, accent: "#fb923c" },
  { id: "f10", name: "Ágata Silver", skin: "#eed0b9", hair: "#cbd5e1", shirt: "#1f2937", style: "short", glasses: true, blush: false, accent: "#cbd5e1" }
];

const BACKGROUNDS = [
  { id: "playa", name: "Playa al atardecer", type: "beach" },
  { id: "living_estufa", name: "Living con estufa", type: "fireplace" },
  { id: "estudio_noche", name: "Estudio nocturno", type: "studio" },
  { id: "biblioteca", name: "Biblioteca oscura", type: "library" },
  { id: "terraza", name: "Terraza con brisa", type: "terrace" },
  { id: "lluvia", name: "Calle con lluvia", type: "rain" },
  { id: "cafe", name: "Café de madrugada", type: "cafe" },
  { id: "montana", name: "Cumbre andina", type: "mountain" },
  { id: "neon", name: "Bar neón underground", type: "neon" },
  { id: "desierto", name: "Horizonte árido", type: "desert" }
];

const stepProfile = document.getElementById("stepProfile");
const stepSetup = document.getElementById("stepSetup");
const stepStudio = document.getElementById("stepStudio");
const badgeUser = document.getElementById("badgeUser");

const inputName = document.getElementById("inputName");
const inputLink = document.getElementById("inputLink");
const btnGoSetup = document.getElementById("btnGoSetup");
const btnBackProfile = document.getElementById("btnBackProfile");
const btnEnterStudio = document.getElementById("btnEnterStudio");
const btnEditSetup = document.getElementById("btnEditSetup");

const tabMale = document.getElementById("tabMale");
const tabFemale = document.getElementById("tabFemale");
const avatarGrid = document.getElementById("avatarGrid");
const bgGrid = document.getElementById("bgGrid");
const studioMeta = document.getElementById("studioMeta");

const video = document.getElementById("cam");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const btnStart = document.getElementById("btnStart");
const btnRec = document.getElementById("btnRec");
const btnStop = document.getElementById("btnStop");
const statusEl = document.getElementById("status");
const feedList = document.getElementById("feedList");

let profile = JSON.parse(localStorage.getItem("fsf_profile") || '{"name":"","link":""}');
let currentGender = "male";
let selectedAvatar = MALE_AVATARS[0];
let selectedBg = BACKGROUNDS[0];

let stream = null;
let audioCtx = null;
let analyser = null;
let dataArray = null;
let mediaRecorder = null;
let recordedChunks = [];
let tick = 0;

function showStep(stepName) {
  stepProfile.classList.add("hidden");
  stepSetup.classList.add("hidden");
  stepStudio.classList.add("hidden");
  if (stepName === "profile") stepProfile.classList.remove("hidden");
  if (stepName === "setup") stepSetup.classList.remove("hidden");
  if (stepName === "studio") stepStudio.classList.remove("hidden");
}

function updateBadge() {
  if (profile.name) {
    badgeUser.textContent = `${profile.name} · ${profile.link || "sin link"}`;
  } else {
    badgeUser.textContent = "Sin perfil";
  }
}

function renderAvatarChoices() {
  const list = currentGender === "male" ? MALE_AVATARS : FEMALE_AVATARS;
  avatarGrid.innerHTML = "";
  list.forEach((av) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-btn" + (selectedAvatar.id === av.id ? " selected" : "");
    btn.textContent = av.name;
    btn.addEventListener("click", () => {
      selectedAvatar = av;
      renderAvatarChoices();
    });
    avatarGrid.appendChild(btn);
  });
}

function renderBgChoices() {
  bgGrid.innerHTML = "";
  BACKGROUNDS.forEach((bg) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-btn" + (selectedBg.id === bg.id ? " selected" : "");
    btn.textContent = bg.name;
    btn.addEventListener("click", () => {
      selectedBg = bg;
      renderBgChoices();
    });
    bgGrid.appendChild(btn);
  });
}

inputName.value = profile.name || "";
inputLink.value = profile.link || "";
updateBadge();
renderAvatarChoices();
renderBgChoices();

btnGoSetup.addEventListener("click", () => {
  const nameVal = inputName.value.trim();
  const linkVal = inputLink.value.trim();
  if (!nameVal) {
    alert("Poné un nombre o apodo para continuar.");
    return;
  }
  profile = { name: nameVal, link: linkVal };
  localStorage.setItem("fsf_profile", JSON.stringify(profile));
  updateBadge();
  showStep("setup");
});

tabMale.addEventListener("click", () => {
  currentGender = "male";
  tabMale.classList.add("active");
  tabFemale.classList.remove("active");
  renderAvatarChoices();
});

tabFemale.addEventListener("click", () => {
  currentGender = "female";
  tabFemale.classList.add("active");
  tabMale.classList.remove("active");
  renderAvatarChoices();
});

btnBackProfile.addEventListener("click", () => showStep("profile"));

btnEnterStudio.addEventListener("click", () => {
  studioMeta.textContent = `${selectedAvatar.name} | ${selectedBg.name}`;
  showStep("studio");
});

btnEditSetup.addEventListener("click", () => {
  renderAvatarChoices();
  renderBgChoices();
  showStep("setup");
});

// IndexedDB para guardar videos subidos en la app
function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("FilosofiaSinFiltroDB", 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains("videos")) {
        db.createObjectStore("videos", { keyPath: "id", autoIncrement: true });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveVideoToApp(blob) {
  const db = await openDB();
  const tx = db.transaction("videos", "readwrite");
  tx.objectStore("videos").add({
    author: profile.name,
    link: profile.link || "Sin link",
    avatarName: selectedAvatar.name,
    bgName: selectedBg.name,
    createdAt: new Date().toLocaleString("es-UY"),
    blob
  });
  await new Promise((res, rej) => {
    tx.oncomplete = res;
    tx.onerror = () => rej(tx.error);
  });
  await loadFeed();
}

async function loadFeed() {
  const db = await openDB();
  const tx = db.transaction("videos", "readonly");
  const req = tx.objectStore("videos").getAll();
  req.onsuccess = () => {
    const items = (req.result || []).reverse();
    feedList.innerHTML = "";
    if (!items.length) {
      feedList.innerHTML = '<p class="hint">Todavía no subiste videos a la app.</p>';
      return;
    }
    items.forEach((item) => {
      const url = URL.createObjectURL(item.blob);
      const card = document.createElement("article");
      card.className = "post";
      card.innerHTML = `
        <div class="post-head">
          <span class="post-author">${escapeHtml(item.author)}</span>
          <span class="post-link">${escapeHtml(item.link)}</span>
        </div>
        <div class="post-meta">${escapeHtml(item.avatarName)} · ${escapeHtml(item.bgName)} · ${escapeHtml(item.createdAt)}</div>
        <video src="${url}" controls playsinline></video>
      `;
      feedList.appendChild(card);
    });
  };
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[m]));
}

loadFeed();

btnStart.addEventListener("click", async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
      audio: true
    });
    video.srcObject = stream;
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const src = audioCtx.createMediaStreamSource(stream);
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;
    src.connect(analyser);
    dataArray = new Uint8Array(analyser.frequencyBinCount);

    btnStart.disabled = true;
    btnRec.disabled = false;
    statusEl.textContent = "Cámara y micrófono activos.";
    requestAnimationFrame(loop);
  } catch (err) {
    statusEl.textContent = "Error cámara/mic: " + err.message;
  }
});

function getVolume() {
  if (!analyser) return 0;
  analyser.getByteFrequencyData(dataArray);
  let total = 0;
  for (let i = 0; i < dataArray.length; i++) total += dataArray[i];
  return total / dataArray.length;
}

function drawBackground(bg) {
  const w = canvas.width;
  const h = canvas.height;
  const horizon = h * 0.64;

  if (bg.type === "beach") {
    const sky = ctx.createLinearGradient(0, 0, 0, horizon);
    sky.addColorStop(0, "#1e3a8a");
    sky.addColorStop(0.55, "#ea580c");
    sky.addColorStop(1, "#fde047");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, horizon);

    ctx.fillStyle = "#fef08a";
    ctx.beginPath();
    ctx.arc(w * 0.72, horizon * 0.72, 34, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#0284c7";
    ctx.fillRect(0, horizon, w, h * 0.14);
    ctx.fillStyle = "#e7c89b";
    ctx.fillRect(0, horizon + h * 0.14, w, h * 0.22);
  } else if (bg.type === "fireplace") {
    ctx.fillStyle = "#2b1d16";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#3f2a20";
    ctx.fillRect(0, horizon, w, h - horizon);

    // Estufa a leña lateral con llama animada
    const fx = w * 0.82;
    const fy = horizon + 15;
    ctx.fillStyle = "#18181b";
    ctx.fillRect(fx - 38, fy - 75, 76, 85);
    ctx.fillStyle = "#09090b";
    ctx.fillRect(fx - 24, fy - 42, 48, 36);

    const flicker = Math.sin(tick * 0.25) * 5;
    ctx.fillStyle = "#f97316";
    ctx.beginPath();
    ctx.ellipse(fx, fy - 20, 14, 14 + flicker * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#facc15";
    ctx.beginPath();
    ctx.ellipse(fx, fy - 16, 7, 9 + flicker * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();
  } else {
    const palettes = {
      studio: ["#0f172a", "#1e293b", "#111827"],
      library: ["#1c1917", "#292524", "#14110f"],
      terrace: ["#1d4ed8", "#93c5fd", "#334155"],
      rain: ["#1e293b", "#334155", "#0f172a"],
      cafe: ["#291d18", "#452c21", "#1c1410"],
      mountain: ["#0f172a", "#64748b", "#1e293b"],
      neon: ["#18092b", "#4c1d95", "#090510"],
      desert: ["#9a3412", "#fdba74", "#7c2d12"]
    };
    const p = palettes[bg.type] || palettes.studio;
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, p[0]);
    g.addColorStop(0.65, p[1]);
    g.addColorStop(1, p[2]);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  }
}

function drawDetailedAvatar(av, vol, isBlinking) {
  const w = canvas.width;
  const h = canvas.height;
  const headBob = Math.min(8, vol * 0.14) + Math.sin(tick * 0.06) * 2.5;
  const cx = w * 0.44;
  const cy = h * 0.54 + headBob;

  // Cabello largo trasero si aplica
  if (av.style === "long" || av.style === "curly" || av.style === "ponytail") {
    ctx.fillStyle = av.hair;
    ctx.beginPath();
    ctx.roundRect(cx - 84, cy - 30, 168, 175, 45);
    ctx.fill();
  }

  // Torso y hombros con sombra
  ctx.fillStyle = av.shirt;
  ctx.beginPath();
  ctx.roundRect(cx - 92, cy + 88, 184, 140, 48);
  ctx.fill();

  // Cuello
  ctx.fillStyle = av.skin;
  ctx.fillRect(cx - 22, cy + 68, 44, 30);

  // Cabeza estilizada (proporción chibi detallada)
  ctx.fillStyle = av.skin;
  ctx.beginPath();
  ctx.ellipse(cx, cy, 86, 94, 0, 0, Math.PI * 2);
  ctx.fill();

  // Sombra lateral sutil en el rostro
  ctx.fillStyle = "rgba(0,0,0,0.10)";
  ctx.beginPath();
  ctx.ellipse(cx + 38, cy + 4, 46, 86, 0, -Math.PI / 2, Math.PI / 2);
  ctx.fill();

  // Rubor opcional
  if (av.blush) {
    ctx.fillStyle = "rgba(244, 63, 94, 0.28)";
    ctx.beginPath();
    ctx.ellipse(cx - 46, cy + 20, 14, 7, 0, 0, Math.PI * 2);
    ctx.ellipse(cx + 46, cy + 20, 14, 7, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Ojos
  if (isBlinking) {
    ctx.strokeStyle = "#111827";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(cx - 50, cy + 4);
    ctx.lineTo(cx - 20, cy + 4);
    ctx.moveTo(cx + 20, cy + 4);
    ctx.lineTo(cx + 50, cy + 4);
    ctx.stroke();
  } else {
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.ellipse(cx - 35, cy + 4, 17, 19, 0, 0, Math.PI * 2);
    ctx.ellipse(cx + 35, cy + 4, 17, 19, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#111827";
    ctx.beginPath();
    ctx.arc(cx - 35, cy + 5, 11, 0, Math.PI * 2);
    ctx.arc(cx + 35, cy + 5, 11, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(cx - 39, cy, 4, 0, Math.PI * 2);
    ctx.arc(cx + 31, cy, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // Cejas
  ctx.strokeStyle = av.hair;
  ctx.lineWidth = 4.5;
  ctx.beginPath();
  ctx.moveTo(cx - 52, cy - 22);
  ctx.lineTo(cx - 18, cy - 18);
  ctx.moveTo(cx + 18, cy - 18);
  ctx.lineTo(cx + 52, cy - 22);
  ctx.stroke();

  // Nariz sutil
  ctx.strokeStyle = "rgba(0,0,0,0.35)";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy + 18, 5, 0.2, Math.PI - 0.2);
  ctx.stroke();

  // Barba opcional (masculinos)
  if (av.beard) {
    ctx.fillStyle = av.hair;
    ctx.globalAlpha = 0.72;
    ctx.beginPath();
    ctx.arc(cx, cy + 32, 68, 0.15, Math.PI - 0.15);
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  // Boca sincronizada con la voz
  const mouthOpen = Math.min(24, Math.max(3, vol * 0.65));
  ctx.fillStyle = "#7f1d1d";
  ctx.beginPath();
  ctx.ellipse(cx, cy + 48, 15 + mouthOpen * 0.25, mouthOpen, 0, 0, Math.PI * 2);
  ctx.fill();

  // Lentes opcionales
  if (av.glasses) {
    ctx.strokeStyle = av.accent;
    ctx.lineWidth = 3;
    ctx.strokeRect(cx - 56, cy - 11, 38, 28);
    ctx.strokeRect(cx + 18, cy - 11, 38, 28);
    ctx.beginPath();
    ctx.moveTo(cx - 18, cy + 3);
    ctx.lineTo(cx + 18, cy + 3);
    ctx.stroke();
  }

  // Cabello superior / gorra
  if (av.style === "cap") {
    ctx.fillStyle = av.accent;
    ctx.beginPath();
    ctx.arc(cx, cy - 32, 84, Math.PI, Math.PI * 2);
    ctx.fill();
    ctx.fillRect(cx - 88, cy - 34, 176, 14);
  } else {
    ctx.fillStyle = av.hair;
    ctx.beginPath();
    ctx.arc(cx, cy - 26, 90, Math.PI * 0.95, Math.PI * 2.05);
    ctx.fill();
  }
}

function loop() {
  tick++;
  const vol = getVolume();
  const isBlinking = tick % 170 < 7;
  drawBackground(selectedBg);
  drawDetailedAvatar(selectedAvatar, vol, isBlinking);
  requestAnimationFrame(loop);
}

btnRec.addEventListener("click", () => {
  recordedChunks = [];
  const canvasStream = canvas.captureStream(30);
  const audioTracks = stream ? stream.getAudioTracks() : [];
  if (audioTracks.length > 0) canvasStream.addTrack(audioTracks[0]);

  mediaRecorder = new MediaRecorder(canvasStream, { mimeType: "video/webm" });
  mediaRecorder.ondataavailable = (e) => {
    if (e.data.size > 0) recordedChunks.push(e.data);
  };
  mediaRecorder.onstop = async () => {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    statusEl.textContent = "Subiendo video a la app...";
    await saveVideoToApp(blob);
    statusEl.textContent = "Video subido y guardado en tu muro.";
  };

  mediaRecorder.start();
  btnRec.disabled = true;
  btnStop.disabled = false;
  statusEl.textContent = "Grabando...";
});

btnStop.addEventListener("click", () => {
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
  }
  btnRec.disabled = false;
  btnStop.disabled = true;
});
