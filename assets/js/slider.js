// Sliders -->>

// give function parameters
const initializeSlider = (slider, leftBtn, rightBtn) => {
  let sliderIndex = 0;

  // all card next to each other
  slider.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });

  const updateSlider = () => {
    slider.forEach((slide) => {
      slide.style.transform = `translateX(-${sliderIndex * 100}%)`;
    });
  };

  rightBtn.addEventListener("click", () => {
    sliderIndex++;
    if (sliderIndex > slider.length - 1) {
      sliderIndex = 0;
    }
    updateSlider();
  });

  leftBtn.addEventListener("click", () => {
    sliderIndex--;
    if (sliderIndex < 0) {
      sliderIndex = slider.length - 1;
    }
    updateSlider();
  });
};

// Get Home Section Slider
const sliders = document.querySelectorAll(".slide");
const leftHandle = document.querySelector(".left-handle");
const rightHandle = document.querySelector(".right-handle");

// Call Home Section Slider
initializeSlider(sliders, leftHandle, rightHandle);

// Get Happening Section Larger and Smaller IMG Slider
const largeImageSlider = document.querySelectorAll(".larger_images");
const smallImageSlider = document.querySelectorAll(".smaller_images");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");

// Call Happening Section Sliders
initializeSlider(largeImageSlider, leftButton, rightButton);
initializeSlider(smallImageSlider, leftButton, rightButton);
