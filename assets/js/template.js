// Initializing the lightbox gallery.
// Available options: https://github.com/feimosi/baguetteBox.js?tab=readme-ov-file#customization
(function() {
  if (
    "baguetteBox" in window &&
    document.querySelectorAll("[data-bss-baguettebox]").length > 0
  ) {
    baguetteBox.run("[data-bss-baguettebox]", { animation: "slideIn" });
  }

  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkThemeMq.matches) {
    document.querySelector(`html[data-bs-theme]`).setAttribute("data-bs-theme", "dark");
  } else {
    document.querySelector(`html[data-bs-theme]`).setAttribute("data-bs-theme", "light");
  }

  PowerGlitch.glitch(".profile-pic",
    {
      playMode: "hover",
      optimizeSeo: true,
      createContainers: true,
      hideOverflow: false,
      timing: {
        duration: 1000,
        iterations: 1,
      },
      glitchTimeSpan: {
        start: 0,
        end: 1,
      },
      shake: false,
      slice: {
        count: 6,
        velocity: 15,
        minHeight: 0.02,
        maxHeight: 0.15,
        hueRotate: true,
      },
      pulse: false,
    }
  );

  PowerGlitch.glitch(".glitch",
    {
      playMode: "hover",
      optimizeSeo: true,
      createContainers: true,
      hideOverflow: false,
      timing: {
        duration: 1000,
        iterations: 1,
      },
      glitchTimeSpan: {
        start: 0,
        end: 1,
      },
      shake: {
        velocity: 15,
        amplitudeX: 0.2,
        amplitudeY: 0.2,
      },
      slice: {
        count: 6,
        velocity: 15,
        minHeight: 0.02,
        maxHeight: 0.15,
        hueRotate: true,
      },
      pulse: false,
    }
  );

    const socs = [
    {
      name: "github",
      href: "https://github.com/53R4PH1N3"
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/ccabahug"
    },
    {
      name: "facebook",
      href: "https://www.facebook.com/1000101010010110001011110101011000010100100101011C/"
    },
    {
      name: "instragram",
      href: "https://www.instagram.com/_0100001101001010/"
    },
    {
      name: "twitter",
      href: "https://x.com/10011010100101C"
    },
    {
      name: "dev.to",
      href: "https://dev.to/beroller"
    },
  ]

  const elSocs = document.querySelectorAll(`#socs [data-glitched="1"] a[href]`)
  for (let index = 0; index < elSocs.length; index++) {
    elSocs[index].href = socs[index].href
  }
})();