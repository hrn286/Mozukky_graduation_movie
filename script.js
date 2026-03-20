function goStep2() {
  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
}

function goStep3() {
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");
}

function goStep4() {
  document.getElementById("step3").classList.add("hidden");
  document.getElementById("step4").classList.remove("hidden");
}

function goStep5() {
  document.getElementById("step4").classList.add("hidden");
  document.getElementById("step5").classList.remove("hidden");
}

function goStep5-1() {
  document.getElementById("step3").classList.add("hidden");
  document.getElementById("step5").classList.remove("hidden");
}

function playVideo() {
  const videoArea = document.getElementById("videoArea");
  const frame = document.getElementById("youtubeFrame");

  frame.src = "https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID?autoplay=1";
  videoArea.classList.remove("hidden");
}

function notReady() {
  const hint = document.getElementById("hint");
  hint.classList.remove("hidden");
}
