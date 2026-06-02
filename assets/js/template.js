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
    // {
    //   name: "facebook",
    //   href: "https://www.facebook.com/1000101010010110001011110101011000010100100101011C/"
    // },
    // {
    //   name: "instagram",
    //   href: "https://www.instagram.com/_0100001101001010/"
    // },
    // {
    //   name: "twitter",
    //   href: "https://x.com/10011010100101C"
    // },
    {
      name: "dev",
      href: "https://dev.to/beroller"
    },
  ]

  // const elSocs = document.querySelectorAll(`#socs [data-glitched="1"] a[href]`)
  // for (let index = 0; index < elSocs.length; index++) {
  //   elSocs[index].href = socs[index].href
  // }

  const elSocIcons = document.querySelector(`#socs`);
  for (const soc of socs) {
    const el_li = document.createElement("li");
    const el_a = document.createElement("a");
    const el_i = document.createElement("i");

    el_li.setAttribute("class", "list-inline-item me-3");

    el_a.setAttribute("class", "text-reset");
    el_a.setAttribute("href", soc.href);
    el_a.setAttribute("target", "_blank");

    el_i.setAttribute("class", `fa-brands fa-${soc.name} fa-2x`);

    el_a.appendChild(el_i);
    el_li.appendChild(el_a);

    elSocIcons.appendChild(el_li);
  }

  const _sections = ['home', 'blog', 'hobbies'];

  function showSection(name) {
    const target = _sections.includes(name) ? name : 'home';
    _sections.forEach(s => {
      document.getElementById(`section-${s}`).style.display = s === target ? '' : 'none';
    });
    document.querySelectorAll('[data-nav]').forEach(el => {
      el.style.display = el.dataset.nav === target ? 'none' : '';
    });
    if (target === 'blog' && !window._blogLoaded) {
      window._blogLoaded = true;
      if (typeof window.loadBlog === 'function') window.loadBlog();
    }
    if (target === 'hobbies' && !window._hobbiesLoaded) {
      window._hobbiesLoaded = true;
      if (typeof window.loadHobbies === 'function') window.loadHobbies();
    }
  }

  showSection(location.hash.replace('#', '') || 'home');
  window.addEventListener('hashchange', () => showSection(location.hash.replace('#', '')));

  PowerGlitch.glitch("#socs .list-inline-item", {
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
  });

})();
