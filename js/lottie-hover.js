// Hover-to-play/reverse for your Lottie buttons
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".json-btn").forEach(player => {
    player.addEventListener("mouseenter", () => {
      player.setSpeed(5);
      player.setDirection(1);
      player.play();
    });
    player.addEventListener("mouseleave", () => {
      player.setSpeed(4);
      player.setDirection(-1);
      player.play();
    });
  });
});
