const MALE_AVATARS = [
  {
    id: "m1",
    name: "Mateo Nocturno",
    imgSrc: "./avatares-masculinos/mateo.png",
    mouthX: 0, mouthY: 54, mouthWidth: 14, mouthMaxOpen: 6.5, lipColor: "rgba(186, 118, 102, 0.58)",
    skin: "#e0ac8b", hair: "#1f2937", shirt: "#1e3a8a", style: "short", beard: false, glasses: false, accent: "#60a5fa"
  },
  {
    id: "m2",
    name: "Lucas Barbudo",
    imgSrc: "./avatares-masculinos/lucas.png",
    mouthX: 0, mouthY: 56, mouthWidth: 15, mouthMaxOpen: 6.5, lipColor: "rgba(165, 96, 82, 0.62)",
    skin: "#d19a78", hair: "#3f2314", shirt: "#374151", style: "messy", beard: true, glasses: false, accent: "#f59e0b"
  },
  {
    id: "m3",
    name: "Tomás Lentes",
    imgSrc: "./avatares-masculinos/tomas.jpg.png",
    mouthX: 0, mouthY: 55, mouthWidth: 14, mouthMaxOpen: 6.5, lipColor: "rgba(186, 118, 102, 0.58)",
    skin: "#f1c7a9", hair: "#4b3621", shirt: "#065f46", style: "side", beard: false, glasses: true, accent: "#34d399"
  },
  {
    id: "m4",
    name: "Ramiro Punk",
    imgSrc: "./avatares-masculinos/ramiro.jpg.png",
    mouthX: 0, mouthY: 55, mouthWidth: 14, mouthMaxOpen: 6.5, lipColor: "rgba(186, 118, 102, 0.58)",
    skin: "#e6b89c", hair: "#991b1b", shirt: "#18181b", style: "spiky", beard: false, glasses: false, accent: "#f87171"
  },
  {
    id: "m5",
    name: "Bruno Calmo",
    imgSrc: "./avatares-masculinos/bruno.jpg.png",
    mouthX: 0, mouthY: 55, mouthWidth: 14, mouthMaxOpen: 6.5, lipColor: "rgba(175, 106, 90, 0.60)",
    skin: "#8d5b42", hair: "#111827", shirt: "#78350f", style: "short", beard: true, glasses: false, accent: "#fbbf24"
  },
  {
    id: "m6",
    name: "Dante Bohemio",
    imgSrc: "./avatares-masculinos/dante.jpg.png",
    mouthX: 0, mouthY: 55, mouthWidth: 14, mouthMaxOpen: 6.5, lipColor: "rgba(175, 106, 90, 0.60)",
    skin: "#eac0a2", hair: "#27272a", shirt: "#4c1d95", style: "long", beard: true, glasses: true, accent: "#c084fc"
  },
  {
    id: "m7",
    name: "Franco Urbano",
    imgSrc: "./avatares-masculinos/franco.jpg.png",
    mouthX: 0, mouthY: 55, mouthWidth: 14, mouthMaxOpen: 6.5, lipColor: "rgba(175, 106, 90, 0.60)",
    skin: "#c68b67", hair: "#171717", shirt: "#9a3412", style: "cap", beard: false, glasses: false, accent: "#fb923c"
  },
  {
    id: "m8",
    name: "Simón Cínico",
    imgSrc: "./avatares-masculinos/simon.jpg.png",
    mouthX: 0, mouthY: 55, mouthWidth: 14, mouthMaxOpen: 6.5, lipColor: "rgba(186, 118, 102, 0.58)",
    skin: "#f3cdb3", hair: "#52525b", shirt: "#1f2937", style: "side", beard: false, glasses: true, accent: "#94a3b8"
  },
  {
    id: "m9",
    name: "Nehuén Surfer",
    imgSrc: "./avatares-masculinos/nehuen.j.png",
    mouthX: 0, mouthY: 55, mouthWidth: 14, mouthMaxOpen: 6.5, lipColor: "rgba(186, 118, 102, 0.58)",
    skin: "#d69e7c", hair: "#b45309", shirt: "#0369a1", style: "messy", beard: false, glasses: false, accent: "#38bdf8"
  },
  {
    id: "m10",
    name: "Vasco Sabio",
    imgSrc: "./avatares-masculinos/vasco.jpg.png",
    mouthX: 0, mouthY: 55, mouthWidth: 14, mouthMaxOpen: 6.5, lipColor: "rgba(175, 106, 90, 0.60)",
    skin: "#e4b496", hair: "#d1d5db", shirt: "#312e81", style: "short", beard: true, glasses: true, accent: "#a5b4fc" }
];

const FEMALE_AVATARS = [
  { id: "f1", name: "Valeria Fuego", imgSrc: null, skin: "#f2c6a7", hair: "#7c2d12", shirt: "#881337", style: "long", glasses: false, blush: true, accent: "#fb7185" },
  { id: "f2", name: "Camila Lentes", imgSrc: null, skin: "#e3b292", hair: "#1f2937", shirt: "#1e40af", style: "bob", glasses: true, blush: false, accent: "#60a5fa" },
  { id: "f3", name: "Sofía Luna", imgSrc: null, skin: "#f5d0b5", hair: "#d97706", shirt: "#4c1d95", style: "ponytail", glasses: false, blush: true, accent: "#c084fc" },
  { id: "f4", name: "Abril Rebelde", imgSrc: null, skin: "#d9a282", hair: "#111827", shirt: "#18181b", style: "short", glasses: false, blush: false, accent: "#f87171" },
  { id: "f5", name: "Micaela Tierra", imgSrc: null, skin: "#8d5b42", hair: "#18181b", shirt: "#065f46", style: "curly", glasses: false, blush: true, accent: "#34d399" },
  { id: "f6", name: "Elena Clásica", imgSrc: null, skin: "#ecc1a3", hair: "#451a03", shirt: "#78350f", style: "long", glasses: true, blush: false, accent: "#fbbf24" },
  { id: "f7", name: "Zoe Eléctrica", imgSrc: null, skin: "#f0c3a5", hair: "#0284c7", shirt: "#1e293b", style: "bob", glasses: false, blush: true, accent: "#38bdf8" },
  { id: "f8", name: "Renata Filósofa", imgSrc: null, skin: "#dfad8d", hair: "#27272a", shirt: "#581c87", style: "ponytail", glasses: true, blush: false, accent: "#e879f9" },
  { id: "f9", name: "Paz Brisa", imgSrc: null, skin: "#c88d6a", hair: "#3f2314", shirt: "#9a3412", style: "curly", glasses: false, blush: true, accent: "#fb923c" },
  { id: "f10", name: "Ágata Silver", imgSrc: null, skin: "#eed0b9", hair: "#cbd5e1", shirt: "#1f2937", style: "short", glasses: true, blush: false, accent: "#cbd5e1" }
];

const BACKGROUNDS = [
  { id: "playa", name: "Playa al atardecer", type: "beach", imgSrc: null },
  { id: "living_estufa", name: "Living con estufa", type: "fireplace", imgSrc: null },
  { id: "estudio_noche", name: "Estudio nocturno", type: "studio", imgSrc: null },
  { id: "biblioteca", name: "Biblioteca oscura", type: "library", imgSrc: null },
  { id: "terraza", name: "Terraza con brisa", type: "terrace", imgSrc: null },
  { id: "lluvia", name: "Calle con lluvia", type: "rain", imgSrc: null },
  { id: "cafe", name: "Café de madrugada", type: "cafe", imgSrc: null },
  { id: "montana", name: "Cumbre andina", type: "mountain", imgSrc: null },
  { id: "neon", name: "Bar neón underground", type: "neon", imgSrc: null },
  { id: "desierto", name: "Horizonte árido", type: "desert", imgSrc: null }
];

const loadedImages = {};
[...MALE_AVATARS, ...FEMALE_AVATARS].forEach((av) => {
  if (av.imgSrc) {
    const img = new Image();
    img.src = av.imgSrc;
    loadedImages[av.id] = { img, ready: false };
    img.onload = () => { loadedImages[av.id].ready = true; };
  }
});

const loadedBgImages = {};
BACKGROUNDS.forEach((bg) => {
  if (bg.imgSrc) {
    const img = new Image();
    img.src = bg.imgSrc;
    loadedBgImages[bg.id] = { img, ready: false };
    img.onload = () => { loadedBgImages[bg.id].ready = true; };
  }
});

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
  badgeUser.textContent = profile.name ? `${profile.name} · ${profile.link || "sin link"}` : "Sin perfil";
}

function renderAvatarChoices() {
  const list = currentGender === "male" ? MALE_AVATARS : FEMALE_AVATARS;
  avatarGrid.innerHTML = "";
  list.forEach((av) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-btn" + (selectedAvatar.id === av.id ? " selected" : "");
    btn.textContent = av.name;
    btn.addEventListener("click", () => { selectedAvatar = av; renderAvatarChoices(); });
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
    btn.addEventListener("click", () => { selectedBg = bg; renderBgChoices(); });
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
  if (!nameVal) { alert("Poné un nombre o apodo para continuar."); return; }
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
  await new Promise((res, rej) => { tx.oncomplete = res; tx.onerror = () => rej(tx.error); });
  await loadFeed();
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[m]));
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

loadFeed();

btnStart.addEventListener("click", async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: true });
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
  function drawRealisticMouth(av, vol) {
  const mx = av.mouthX ?? 0;
  const my = av.mouthY ?? 54;
  const mw = av.mouthWidth ?? 14;
  const maxOpen = av.mouthMaxOpen ?? 6.5;
  const lipColor = av.lipColor ?? "rgba(186, 118, 102, 0.58)";
  const normVol = Math.max(0, (vol - 11) / 42);
  const openH = Math.min(maxOpen, normVol * maxOpen);
  const h = Math.max(1.2, openH);
  const wSpread = mw + openH * 0.45;

  ctx.save();
  ctx.translate(mx, my);
  if (openH > 0.7) {
    ctx.fillStyle = "rgba(48, 14, 16, 0.76)";
    ctx.beginPath();
    ctx.moveTo(-wSpread, 0);
    ctx.quadraticCurveTo(0, -h * 0.85, wSpread, 0);
    ctx.quadraticCurveTo(0, h * 1.15, -wSpread, 0);
    ctx.fill();
  }
  ctx.strokeStyle = lipColor;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(-wSpread * 0.9, h * 0.25);
  ctx.quadraticCurveTo(0, h * 1.35, wSpread * 0.9, h * 0.25);
  ctx.stroke();
  ctx.restore();
}

function drawBackground(bg) {
  const w = canvas.width;
  const h = canvas.height;
  const bgEntry = loadedBgImages[bg.id];
  if (bgEntry && bgEntry.ready) { ctx.drawImage(bgEntry.img, 0, 0, w, h); return; }

  const horizon = h * 0.64;
  if (bg.type === "beach") {
    const sky = ctx.createLinearGradient(0, 0, 0, horizon);
    sky.addColorStop(0, "#1e3a8a"); sky.addColorStop(0.55, "#ea580c"); sky.addColorStop(1, "#fde047");
    ctx.fillStyle = sky; ctx.fillRect(0, 0, w, horizon);
    ctx.fillStyle = "#fef08a"; ctx.beginPath(); ctx.arc(w * 0.72, horizon * 0.72, 34, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#0284c7"; ctx.fillRect(0, horizon, w, h * 0.14);
    ctx.fillStyle = "#e7c89b"; ctx.fillRect(0, horizon + h * 0.14, w, h * 0.22);
  } else if (bg.type === "fireplace") {
    ctx.fillStyle = "#2b1d16"; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#3f2a20"; ctx.fillRect(0, horizon, w, h - horizon);
  } else {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, "#291d18"); g.addColorStop(1, "#14110f");
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  }
}

function drawAvatar(av, vol, isBlinking) {
  const w = canvas.width;
  const h = canvas.height;
  const headBob = Math.min(8, vol * 0.14) + Math.sin(tick * 0.06) * 2.5;
  const tilt = Math.sin(tick * 0.04) * 0.03;

  const imgEntry = loadedImages[av.id];
  if (imgEntry && imgEntry.ready) {
    const drawW = 240, drawH = 320;
    const x = w * 0.46 - drawW / 2;
    const y = h - drawH + 14 + headBob;
    ctx.save();
    ctx.translate(x + drawW / 2, y + drawH / 2);
    ctx.rotate(tilt);
    ctx.drawImage(imgEntry.img, -drawW / 2, -drawH / 2, drawW, drawH);
    drawRealisticMouth(av, vol);
    ctx.restore();
    return;
  }

  const cx = w * 0.44, cy = h * 0.54 + headBob;
  ctx.fillStyle = av.shirt; ctx.beginPath(); ctx.roundRect(cx - 92, cy + 88, 184, 140, 48); ctx.fill();
  ctx.fillStyle = av.skin; ctx.beginPath(); ctx.ellipse(cx, cy, 86, 94, 0, 0, Math.PI * 2); ctx.fill();
  if (!isBlinking) {
    ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(cx - 35, cy + 4, 15, 0, Math.PI * 2); ctx.arc(cx + 35, cy + 4, 15, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#111"; ctx.beginPath(); ctx.arc(cx - 35, cy + 5, 9, 0, Math.PI * 2); ctx.arc(cx + 35, cy + 5, 9, 0, Math.PI * 2); ctx.fill();
  }
  ctx.fillStyle = av.hair; ctx.beginPath(); ctx.arc(cx, cy - 26, 90, Math.PI * 0.95, Math.PI * 2.05); ctx.fill();
}

function loop() {
  tick++;
  const vol = getVolume();
  const isBlinking = tick % 170 < 7;
  drawBackground(selectedBg);
  drawAvatar(selectedAvatar, vol, isBlinking);
  requestAnimationFrame(loop);
}

btnRec.addEventListener("click", () => {
  recordedChunks = [];
  const canvasStream = canvas.captureStream(30);
  const audioTracks = stream ? stream.getAudioTracks() : [];
  if (audioTracks.length > 0) canvasStream.addTrack(audioTracks[0]);
  mediaRecorder = new MediaRecorder(canvasStream, { mimeType: "video/webm" });
  mediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) recordedChunks.push(e.data); };
  mediaRecorder.onstop = async () => {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    statusEl.textContent = "Subiendo video a la app...";
    await saveVideoToApp(blob);
    statusEl.textContent = "Video subido y guardado en tu muro.";
  };
  mediaRecorder.start();
  btnRec.disabled = true; btnStop.disabled = false;
  statusEl.textContent = "Grabando...";
});

btnStop.addEventListener("click", () => {
  if (mediaRecorder && mediaRecorder.state !== "inactive") mediaRecorder.stop();
  btnRec.disabled = false; btnStop.disabled = true;
});
