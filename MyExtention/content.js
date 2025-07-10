(function () {
  // Check if the button already exists
  if (document.getElementById("speedToggleButton")) return;

  // Create the button
  const button = document.createElement("button");
  button.id = "speedToggleButton";
  button.textContent = "2x";

  // Append the button to the video container
  const videoContainer = document.querySelector(".html5-video-player") || document.body;
  videoContainer.appendChild(button);

  // Toggle playback speed on button click
  let isNormalSpeed = true;
  button.addEventListener("click", () => {
    const video = document.querySelector("video");
    if (video) {
      isNormalSpeed = !isNormalSpeed;
      video.playbackRate = isNormalSpeed ? 1.0 : 2.0;
      button.textContent = isNormalSpeed ? "2x" : "1x";
    } else {
      alert("No video found!");
    }
  });

  // Draggable functionality
  let isDragging = false;
  let offsetX, offsetY;

  button.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - button.getBoundingClientRect().left;
    offsetY = e.clientY - button.getBoundingClientRect().top;
    button.style.transition = null; // Disable smooth transition during dragging
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      button.style.left = `${x}px`;
      button.style.top = `${y}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      button.style.transition = "opacity 0.3s ease, transform 0.2s ease"; // Re-enable smooth transition
    }
  });

  // Initial styling for the button
  button.style.position = "absolute";
  button.style.top = "20px";
  button.style.right = "20px";
  button.style.zIndex = "10000";
  button.style.backgroundColor = "#3939395b";
  button.style.color = "black";
  button.style.border = "none";
  button.style.borderRadius = "23%";
  button.style.width = "30px"; 
  button.style.height = "30px";
  button.style.fontSize = "16px";
  button.style.fontWeight = "bold";
  button.style.cursor = "pointer";
  button.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  button.style.opacity = "0.1";
  button.style.transition = "opacity 0.3s ease, transform 0.2s ease";

  button.addEventListener("mouseover", () => {
    button.style.opacity = "1";
  });

  button.addEventListener("mouseout", () => {
    button.style.opacity = "0.8";
  });

  button.addEventListener("mousedown", () => {
    button.style.transform = "scale(0.95)";
  });

  button.addEventListener("mouseup", () => {
    button.style.transform = "scale(1)";
  });
})();
