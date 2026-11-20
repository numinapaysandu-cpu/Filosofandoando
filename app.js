const video = document.getElementById("cam");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const btnStart = document.getElementById("btnStart");
const btnRec = document.getElementById("btnRec");
const btnStop = document.getElementById("btnStop");
const statusEl = document.getElementById("status");
const downloadLink = document.getElementById("downloadLink");

let stream = null;
let audioCtx = null;
let analyser = null;
let dataArray = null;
let mediaRecorder = null;
let recordedChunks = [];
let blinkTimer = 0;

btnStart.addEventListener("click", async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
      audio: true
    });
    video.srcObject = stream;

    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioCtx.createMediaStreamSource(stream);
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;
    source.connect(analyser);
    dataArray = new Uint8Array(analyser.frequencyBinCount);

    btnStart.disabled = true;
    btnRec.disabled = false;
    statusEl.textContent = "Cámara y micrófono activos. Probá hablar.";
    renderLoop();
  } catch (err) {
    statusEl.textContent = "Error al acceder a cámara/mic: " + err.message;
  }
});

function getVolume() {
  if (!analyser) return 0;
  analyser.getByteFrequencyData(dataArray);
  let sum = 0;
  for (let i = 0; i < dataArray.length; i++) sum += dataArray[i];
  return sum / dataArray.length;
}

function drawChibi(mouthOpen, isBlinking) {
  const w = canvas.width;
  const h = canvas.height;

  // Fondo dibujado encima de la cámara difuminada
  ctx.save();
  ctx.filter = "blur(10px) brightness(0.45)";
  ctx.drawImage(video, 0, 0, w, h);
  ctx.restore();

  const cx = w / 2;
  const cy = h * 0.52;

  // Cuerpo / buzo
  ctx.fillStyle = "#1f2937";
  ctx.beginPath();
  ctx.roundRect(cx - 75, cy + 85, 150, 120, 40);
  ctx.fill();

  // Cabeza grande estilo Chibi
  ctx.fillStyle = "#fcd5b5";
  ctx.beginPath();
  ctx.arc(cx, cy, 92, 0, Math.PI * 2);
  ctx.fill();

  // Pelo desordenado estilo pensador
  ctx.fillStyle = "#18181b";
  ctx.beginPath();
  ctx.arc(cx, cy - 18, 96, Math.PI, Math.PI * 2);
  ctx.fill();

  // Flequillo
  ctx.beginPath();
  ctx.moveTo(cx - 85, cy - 20);
  ctx.lineTo(cx - 35, cy - 55);
  ctx.lineTo(cx - 10, cy - 15);
  ctx.lineTo(cx + 25, cy - 55);
  ctx.lineTo(cx + 85, cy - 20);
  ctx.fill();

  // Ojos grandes
  if (isBlinking) {
    ctx.strokeStyle = "#111";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(cx - 48, cy + 5);
    ctx.lineTo(cx - 22, cy + 5);
    ctx.moveTo(cx + 22, cy + 5);
    ctx.lineTo(cx + 48, cy + 5);
    ctx.stroke();
  } else {
    ctx.fillStyle = "#111827";
    ctx.beginPath();
    ctx.arc(cx - 35, cy + 5, 14, 0, Math.PI * 2);
    ctx.arc(cx + 35, cy + 5, 14, 0, Math.PI * 2);
    ctx.fill();

    // Brillo en los ojos
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(cx - 39, cy, 4, 0, Math.PI * 2);
    ctx.arc(cx + 31, cy, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // Cejas expresivas
  ctx.strokeStyle = "#111";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cx - 52, cy - 18);
  ctx.lineTo(cx - 20, cy - 14);
  ctx.moveTo(cx + 20, cy - 14);
  ctx.lineTo(cx + 52, cy - 18);
  ctx.stroke();

  // Boca animada por voz
  ctx.fillStyle = "#991b1b";
  ctx.beginPath();
  const openH = Math.min(26, Math.max(4, mouthOpen * 0.7));
  ctx.ellipse(cx, cy + 46, 16, openH, 0, 0, Math.PI * 2);
  ctx.fill();
}

function renderLoop() {
  const vol = getVolume();
  blinkTimer++;
  const isBlinking = blinkTimer % 180 < 8;

  drawChibi(vol, isBlinking);
  requestAnimationFrame(renderLoop);
}

btnRec.addEventListener("click", () => {
  recordedChunks = [];
  const canvasStream = canvas.captureStream(30);
  const audioTracks = stream.getAudioTracks();
  if (audioTracks.length > 0) {
    canvasStream.addTrack(audioTracks[0]);
  }

  mediaRecorder = new MediaRecorder(canvasStream, { mimeType: "video/webm" });
  mediaRecorder.ondataavailable = (e) => {
    if (e.data.size > 0) recordedChunks.push(e.data);
  };

  mediaRecorder.onstop = () => {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = "filosofia-chibi.webm";
    downloadLink.style.display = "inline-block";
    statusEl.textContent = "Video listo para descargar.";
  };

  mediaRecorder.start();
  btnRec.disabled = true;
  btnStop.disabled = false;
  downloadLink.style.display = "none";
  statusEl.textContent = "Grabando...";
});

btnStop.addEventListener("click", () => {
  mediaRecorder.stop();
  btnRec.disabled = false;
  btnStop.disabled = true;
});
