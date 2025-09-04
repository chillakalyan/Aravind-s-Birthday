"use strict";

// Intro animation
window.onload = () => {
  const text = document.getElementById("intro-text");
  const logo1 = document.getElementById("logo1");
  const logo2 = document.getElementById("logo2");

  setTimeout(() => text.textContent = "EE SALA CUP NAMDU", 1500);

  setTimeout(() => {
    text.style.display = "none";
    logo1.classList.remove("hidden");
  }, 3000);

  setTimeout(() => {
    logo1.classList.add("hidden");
    logo2.classList.remove("hidden");
  }, 4500);

  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("hero").classList.remove("hidden");
  }, 6500);
};

// Party Video Handler



document.getElementById("enterBtn")?.addEventListener("click", () => {
  const hero = document.getElementById("hero");
  const video = document.getElementById("partyVideo");
  const finalPage = document.getElementById("finalPage");

  // Hide hero section
  hero.style.opacity = "0";
  setTimeout(() => hero.style.display = "none", 500);

  // Show video fullscreen
  video.classList.remove("hidden");
  video.muted = false;     // Ensure sound plays
  video.controls = false;  // Remove any controls bar

  // Play video
  video.play().catch(err => {
    console.log("Play blocked:", err);
    alert("Click play to start the video 🎶");
  });

  // After video ends → show final page
  video.onended = () => {
    video.classList.add("hidden");
    finalPage.classList.remove("hidden");
    finalPage.style.opacity = "0";

    setTimeout(() => {
      finalPage.style.transition = "opacity 1.5s ease";
      finalPage.style.opacity = "1";
    }, 100);
  };
});



