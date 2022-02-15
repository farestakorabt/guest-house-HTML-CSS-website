import React, { useEffect } from "react";

const DynamicText = () => {
  useEffect(() => {
    let array = ["simple", "clear", "genius", "strong"];
    let wordIndex = 0;
    let letterIndex = 0;

    const target = document.getElementById("text-target");

    const createLetter = () => {
      const letter = document.createElement("span");
      target.appendChild(letter);

      letter.classList.add("letter");
      letter.style.opacity = "0";
      letter.style.animation = "anim 6s ease forwards";
      letter.textContent = array[wordIndex][letterIndex];

      setTimeout(() => {
        letter.remove();
      }, 2800);
    };

    const loop = () => {
      setTimeout(() => {
        if (wordIndex >= array.length) {
          wordIndex = 0;
          letterIndex = 0;
          loop();
        } else if (letterIndex < array[wordIndex].length) {
          createLetter();
          letterIndex++;
          loop();
        } else {
          wordIndex++;
          letterIndex = 0;
          setTimeout(() => {
            loop();
          }, 2800);
        }
      }, 80);
    };

    loop();
  }, []);

  return (
    <span className="dynamic-text">
      <span className="simply">Simply</span>
      <span id="text-target"></span>
    </span>
  );
};

export default DynamicText;
