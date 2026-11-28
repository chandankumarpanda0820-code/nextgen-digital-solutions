
/* =====================================================
   NEXTGEN DIGITAL SOLUTIONS
   NEW GENERATION NAVBAR SYSTEM
===================================================== */


/* ==================== NAVBAR JS START ==================== */

document.addEventListener("DOMContentLoaded", function () {

  const header = document.getElementById("siteHeader");
  const navbar = document.getElementById("mainNavbar");
  const toggler = document.querySelector(".ng-menu-toggle");

  const navLinks = document.querySelectorAll(
    ".ng-nav .nav-link"
  );

  if (!header || !navbar || !toggler) return;


  /* BOOTSTRAP COLLAPSE */

  if (typeof bootstrap === "undefined") {
    console.error("Bootstrap JavaScript is missing.");
    return;
  }

  const mobileMenu =
    bootstrap.Collapse.getOrCreateInstance(navbar, {
      toggle: false
    });


  /* BREAKPOINT */

  const mobileQuery = window.matchMedia(
    "(max-width: 1199px)"
  );

  const isMobile = () => mobileQuery.matches;


  /* COLLECT SECTIONS */

  const sections = Array.from(navLinks)
    .map(link => {

      const target = link.getAttribute("href");

      if (!target || !target.startsWith("#")) {
        return null;
      }

      return document.querySelector(target);

    })
    .filter(Boolean);


  /* ACTIVE NAVIGATION */

  function setActiveLink(id) {

    navLinks.forEach(link => {

      const active =
        link.getAttribute("href") === "#" + id;

      link.classList.toggle("active", active);

      if (active) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }

    });

  }


  /* HEADER SHADOW */

  function updateHeader() {

    header.classList.toggle(
      "scrolled",
      window.scrollY > 25
    );

  }


  /* UPDATE CURRENT SECTION */

  function updateActiveSection() {

    if (!sections.length) return;

    const offset =
      window.scrollY + header.offsetHeight + 110;

    let currentSection = sections[0];

    sections.forEach(section => {

      if (section.offsetTop <= offset) {
        currentSection = section;
      }

    });

    if (currentSection) {
      setActiveLink(currentSection.id);
    }

  }


  /* OPTIMIZED SCROLL */

  let scrollFrame = false;

  window.addEventListener("scroll", function () {

    if (scrollFrame) return;

    scrollFrame = true;

    window.requestAnimationFrame(() => {

      updateHeader();
      updateActiveSection();

      scrollFrame = false;

    });

  }, { passive: true });


  /* CLOSE MOBILE MENU */

  function closeMenu() {

    if (
      isMobile() &&
      navbar.classList.contains("show")
    ) {
      mobileMenu.hide();
    }

  }


  /* NAVIGATION CLICK */

  navLinks.forEach(link => {

    link.addEventListener("click", function (event) {

      const target = this.getAttribute("href");

      if (!target || !target.startsWith("#")) return;

      const section = document.querySelector(target);

      if (!section) {
        event.preventDefault();
        return;
      }

      setActiveLink(section.id);

      closeMenu();

    });

  });


  /* OUTSIDE CLICK */

  document.addEventListener("click", function (event) {

    if (!isMobile()) return;

    if (!navbar.classList.contains("show")) return;

    const clickedInsideHeader =
      header.contains(event.target);

    if (!clickedInsideHeader) {
      closeMenu();
    }

  });


  /* ESCAPE KEY */

  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
      closeMenu();
    }

  });


  /* OPEN EVENT */

  navbar.addEventListener(
    "shown.bs.collapse",
    function () {

      toggler.setAttribute("aria-expanded", "true");

      toggler.setAttribute(
        "aria-label",
        "Close navigation menu"
      );

    }
  );


  /* CLOSE EVENT */

  navbar.addEventListener(
    "hidden.bs.collapse",
    function () {

      toggler.setAttribute("aria-expanded", "false");

      toggler.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

    }
  );


  /* RESPONSIVE RESIZE */

  function handleResize() {

    if (!isMobile() && navbar.classList.contains("show")) {
      mobileMenu.hide();
    }

  }

  window.addEventListener("resize", handleResize, {
    passive: true
  });


  /* INITIAL STATE */

  updateHeader();
  updateActiveSection();


  /* PAGE LOAD */

  window.addEventListener("load", function () {

    updateHeader();
    updateActiveSection();

  });

});


/* ==================== NAVBAR JS END ==================== */



/* =====================================================
   NEXTGEN DIGITAL SOLUTIONS
   PRELOADER - MINIMUM 2 SECONDS
===================================================== */

/* ==================== PRELOADER JS START ==================== */

document.addEventListener("DOMContentLoaded", function () {

  const preloader = document.getElementById("ngPreloader");
  const progressFill = document.getElementById("ngProgressFill");
  const progressText = document.getElementById("ngLoadingPercent");
  const loadingText = document.getElementById("ngLoadingText");

  if (!preloader) return;

  const startTime = Date.now();
  const MIN_DISPLAY_TIME = 2000;

  let progress = 0;
  let pageLoaded = document.readyState === "complete";
  let finished = false;

  const messages = [
    { limit: 25, text: "INITIALIZING..." },
    { limit: 50, text: "LOADING RESOURCES..." },
    { limit: 75, text: "PREPARING EXPERIENCE..." },
    { limit: 99, text: "ALMOST READY..." }
  ];


  // PROGRESS ANIMATION

  const progressTimer = setInterval(function () {

    if (finished) {
      clearInterval(progressTimer);
      return;
    }

    if (progress < 90) {
      progress += Math.max(
        1,
        Math.ceil((90 - progress) * 0.06)
      );

      progress = Math.min(progress, 90);
    }

    updateProgress(progress);

  }, 45);


  // UPDATE PROGRESS

  function updateProgress(value) {

    if (progressFill) {
      progressFill.style.width = value + "%";
    }

    if (progressText) {
      progressText.textContent = value + "%";
    }

    if (loadingText) {

      const current = messages.find(
        item => value <= item.limit
      );

      loadingText.textContent =
        current ? current.text : "ALMOST READY...";

    }

  }


  // FINISH WHEN BOTH CONDITIONS ARE MET

  function checkCompletion() {

    if (finished || !pageLoaded) return;

    const elapsed = Date.now() - startTime;
    const remaining = Math.max(
      0,
      MIN_DISPLAY_TIME - elapsed
    );

    setTimeout(function () {

      if (finished || !pageLoaded) return;

      finished = true;

      clearInterval(progressTimer);

      updateProgress(100);

      if (loadingText) {
        loadingText.textContent = "WELCOME TO NEXTGEN";
      }

      setTimeout(function () {

        preloader.classList.add("loaded");

        setTimeout(function () {
          preloader.remove();
        }, 700);

      }, 250);

    }, remaining);

  }


  // PAGE LOAD COMPLETE

  if (!pageLoaded) {

    window.addEventListener("load", function () {

      pageLoaded = true;
      checkCompletion();

    }, { once: true });

  } else {

    checkCompletion();

  }


  // SAFETY FALLBACK: 10 SECONDS

  setTimeout(function () {

    if (!pageLoaded) {
      pageLoaded = true;
      checkCompletion();
    }

  }, 10000);

});

/* ==================== PRELOADER JS END ==================== */


/* =====================================================
   START: NEXTGEN HOME SECTION ANIMATIONS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const homeSection = document.querySelector("#home");

  if (!homeSection) return;

  const revealElements = [
    homeSection.querySelector(".ng-home-image"),
    homeSection.querySelector(".ng-home-tag"),
    homeSection.querySelector("h1"),
    homeSection.querySelector("p"),
    homeSection.querySelector(".ng-home-actions"),
    homeSection.querySelector(".ng-home-note")
  ].filter(Boolean);

  // Initial animation state
  revealElements.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(22px)";
    element.style.transition =
      "opacity 0.75s ease, transform 0.75s ease";
    element.style.transitionDelay = `${index * 120}ms`;
  });

  // Reveal after page load
  const revealHome = () => {
    requestAnimationFrame(() => {
      revealElements.forEach((element) => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      });
    });
  };

  if (document.readyState === "complete") {
    revealHome();
  } else {
    window.addEventListener("load", revealHome, { once: true });
  }
});

/* =====================================================
   END: NEXTGEN HOME SECTION ANIMATIONS
===================================================== */


/* =====================================================
   START: NEXTGEN EDITORIAL ABOUT ANIMATIONS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

  const aboutSection = document.querySelector(
    ".ng-editorial-about"
  );

  if (!aboutSection) return;

  const revealElements = aboutSection.querySelectorAll(
    ".ng-editorial-top, " +
    ".ng-editorial-heading, " +
    ".ng-editorial-copy, " +
    ".ng-editorial-art, " +
    ".ng-editorial-value-heading, " +
    ".ng-editorial-card, " +
    ".ng-editorial-footer"
  );

  revealElements.forEach((element, index) => {
    element.classList.add("ng-editorial-reveal");

    // Staggered entrance timing
    element.style.transitionDelay =
      `${(index % 4) * 100}ms`;
  });

  // Respect reduced-motion preferences
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach(element => {
      element.classList.add("ng-ed-visible");
    });
    return;
  }

  const editorialObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "ng-ed-visible"
          );

          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -30px 0px"
    }
  );

  revealElements.forEach(element => {
    editorialObserver.observe(element);
  });

});

/* =====================================================
   END: NEXTGEN EDITORIAL ABOUT ANIMATIONS
===================================================== */


/* =====================================================
   START: NEXTGEN SIGNATURE FOUNDER ANIMATION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

  const founder = document.querySelector("#founder");

  if (!founder) return;

  const elements = [
    founder.querySelector(".ng-sf-topbar"),
    founder.querySelector(".ng-sf-heading"),
    founder.querySelector(".ng-sf-portrait"),
    founder.querySelector(".ng-sf-information"),
    founder.querySelector(".ng-sf-footer")
  ].filter(Boolean);

  const showAll = () => {
    elements.forEach(element => {
      element.classList.add("ng-sf-visible");
    });
  };

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    showAll();
    return;
  }

  elements.forEach((element, index) => {
    element.classList.add("ng-sf-reveal");
    element.style.transitionDelay = `${Math.min(index * 80, 240)}ms`;
  });

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("ng-sf-visible");

        observerInstance.unobserve(entry.target);

      });

    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -25px 0px"
    }
  );

  elements.forEach(element => {
    observer.observe(element);
  });

});

/* =====================================================
   END: NEXTGEN SIGNATURE FOUNDER ANIMATION
===================================================== */


/* =====================================================
   START: NEXTGEN SERVICES REVEAL
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

  const section = document.querySelector("#services");

  if (!section) return;

  const elements = section.querySelectorAll(
    ".ng-services-header, " +
    ".ng-service-card, " +
    ".ng-services-bottom"
  );

  const revealAll = () => {
    elements.forEach(element => {
      element.classList.add("ng-service-visible");
    });
  };

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    revealAll();
    return;
  }

  elements.forEach(element => {
    element.classList.add("ng-service-reveal");
  });

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("ng-service-visible");

        observerInstance.unobserve(entry.target);

      });

    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -20px 0px"
    }
  );

  elements.forEach(element => {
    observer.observe(element);
  });

});

/* =====================================================
   END: NEXTGEN SERVICES REVEAL
===================================================== */


/* =====================================================
   START: NEXTGEN PROJECTS REVEAL
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

  const section = document.querySelector("#projects");

  if (!section) return;

  const elements = section.querySelectorAll(
    ".ng-projects-top, " +
    ".ng-projects-heading, " +
    ".ng-project-card, " +
    ".ng-projects-footer"
  );

  const revealAll = () => {
    elements.forEach(element => {
      element.classList.add("ng-project-visible");
    });
  };

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    revealAll();
    return;
  }

  elements.forEach(element => {
    element.classList.add("ng-project-reveal");
  });

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("ng-project-visible");

        observerInstance.unobserve(entry.target);

      });

    },
    {
      threshold: 0.10,
      rootMargin: "0px 0px -20px 0px"
    }
  );

  elements.forEach(element => {
    observer.observe(element);
  });

});

/* =====================================================
   END: NEXTGEN PROJECTS REVEAL
===================================================== */


/* =====================================================
   START: NEXTGEN CATALOGUE JAVASCRIPT
===================================================== */

(() => {
  const catalogue = document.querySelector(".ng-catalogue");

  if (!catalogue) return;

  const revealElements = catalogue.querySelectorAll(
    ".ng-cat-header, .ng-cat-info, .ng-cat-preview"
  );

  revealElements.forEach((element) => {
    element.classList.add("ng-cat-reveal");
  });

  // Accessibility: show content immediately if reduced motion is preferred.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealElements.forEach((element) => {
      element.classList.add("ng-cat-visible");
    });
    return;
  }

  // Lightweight scroll reveal using IntersectionObserver.
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ng-cat-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px 40px 0px"
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("ng-cat-visible");
    });
  }
})();

/* =====================================================
   END: NEXTGEN CATALOGUE JAVASCRIPT
===================================================== */


/* =====================================================
   START: NEXTGEN GET IN TOUCH JAVASCRIPT
===================================================== */

(() => {
  const section = document.querySelector(".ng-contact");

  if (!section) return;

  const elements = section.querySelectorAll(
    ".ng-contact-header, .ng-contact-info, .ng-contact-card, .ng-contact-bottom"
  );

  elements.forEach((element) => {
    element.classList.add("ng-contact-reveal");
  });

  const showAll = () => {
    elements.forEach((element) => {
      element.classList.add("ng-contact-visible");
    });
  };

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    showAll();
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ng-contact-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px 40px 0px"
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
})();

/* =====================================================
   END: NEXTGEN GET IN TOUCH JAVASCRIPT
===================================================== */


/* =====================================================
   START: NEXTGEN FOOTER JAVASCRIPT
===================================================== */

(() => {

  // Automatically update copyright year
  const yearElement = document.getElementById("ngFooterYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth back-to-top interaction
  const backTop = document.querySelector(
    ".ng-footer-back-top"
  );

  if (backTop) {
    backTop.addEventListener("click", (event) => {
      event.preventDefault();

      const home = document.getElementById("home");

      if (home) {
        home.scrollIntoView({
          behavior: window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches ? "auto" : "smooth",
          block: "start"
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches ? "auto" : "smooth"
        });
      }
    });
  }

})();

/* =====================================================
   END: NEXTGEN FOOTER JAVASCRIPT
===================================================== */


/* =====================================================
   START: NEXTGEN SCROLL PROGRESS JAVASCRIPT
===================================================== */

(() => {
  const progress = document.getElementById("ngScrollProgress");
  const fill = document.getElementById("ngScrollProgressFill");

  if (!progress || !fill) return;

  let ticking = false;

  const updateProgress = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const percentage = scrollHeight > 0
      ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100))
      : 0;

    fill.style.transform = `scaleX(${percentage / 100})`;

    progress.setAttribute(
      "aria-valuenow",
      Math.round(percentage)
    );

    ticking = false;
  };

  const requestUpdate = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });

  updateProgress();
})();

/* =====================================================
   END: NEXTGEN SCROLL PROGRESS JAVASCRIPT
===================================================== */


/* =========================================
   NEXTGEN — FULL WEBSITE SEARCH ENGINE
========================================= */

(() => {
  "use strict";

  const wrapper = document.getElementById("ngSearchWrapper");
  const trigger = document.getElementById("ngSearchTrigger");
  const panel = document.getElementById("ngSearchPanel");
  const input = document.getElementById("ngSearchInput");
  const closeBtn = document.getElementById("ngSearchClose");
  const resultsBox = document.getElementById("ngSearchResults");

  if (!wrapper || !trigger || !panel || !input || !closeBtn || !resultsBox) {
    return;
  }

  const projectData = [
    {
      title: "Nexora Institute",
      description: "Educational institute website project.",
      url: "https://chandankumarpanda0820-code.github.io/nexora-institute/",
      type: "Project"
    },
    {
      title: "Portfolio Chandan",
      description: "Personal portfolio website.",
      url: "https://chandankumarpanda0820-code.github.io/Portfolio-chandan/",
      type: "Project"
    },
    {
      title: "Chandan's Digital World",
      description: "Personal digital portfolio and creative website.",
      url: "https://chandankumarpanda0820-code.github.io/chandans-digital-world/",
      type: "Project"
    },
    {
      title: "Luxora Estates",
      description: "Luxury real estate website.",
      url: "https://chandankumarpanda0820-code.github.io/luxora-estates/",
      type: "Project"
    },
    {
      title: "LifeDrop",
      description: "Blood support network website.",
      url: "https://chandankumarpanda0820-code.github.io/LifeDrop/",
      type: "Project"
    }
  ];

  const serviceData = [
    {
      title: "Website Development",
      description: "Professional and responsive website development.",
      url: "#services",
      type: "Service"
    },
    {
      title: "E-Commerce Development",
      description: "Online stores and e-commerce solutions.",
      url: "#services",
      type: "Service"
    },
    {
      title: "Digital Marketing",
      description: "Digital marketing solutions for businesses.",
      url: "#services",
      type: "Service"
    },
    {
      title: "Social Media Management",
      description: "Social media growth and management.",
      url: "#services",
      type: "Service"
    },
    {
      title: "SEO Services",
      description: "Search engine optimization and online visibility.",
      url: "#services",
      type: "Service"
    },
    {
      title: "Branding & Graphic Design",
      description: "Logo design, graphics and creative branding.",
      url: "#services",
      type: "Service"
    }
  ];

  const sectionData = [
    {
      title: "Home",
      description: "Welcome to NextGen Digital Solutions.",
      url: "#home",
      type: "Section"
    },
    {
      title: "About Us",
      description: "Learn about NextGen Digital Solutions.",
      url: "#about",
      type: "Section"
    },
    {
      title: "Founder",
      description: "Meet Chandan Kumar Panda.",
      url: "#founder",
      type: "Section"
    },
    {
      title: "Services",
      description: "Explore our digital services.",
      url: "#services",
      type: "Section"
    },
    {
      title: "Projects",
      description: "Explore our website projects.",
      url: "#projects",
      type: "Section"
    },
    {
      title: "Catalogue",
      description: "View our digital service catalogue.",
      url: "#catalogue",
      type: "Section"
    },
    {
      title: "Contact",
      description: "Contact NextGen Digital Solutions.",
      url: "#contact",
      type: "Section"
    },
    {
      title: "Footer",
      description: "Quick links and company information.",
      url: "#footer",
      type: "Section"
    }
  ];

  const icons = {
    Project: "bi-globe",
    Service: "bi-briefcase",
    Section: "bi-layout-text-window"
  };

  let searchIndex = [];
  let selectedIndex = -1;

  function buildSearchIndex() {
    const existingIds = new Set();

    const pageElements = document.querySelectorAll(
      "main section, body > section, footer, " +
      "[id='home'], [id='about'], [id='founder'], " +
      "[id='services'], [id='projects'], [id='catalogue'], " +
      "[id='contact'], [id='footer']"
    );

    pageElements.forEach(section => {
      const id = section.id;

      if (!id || existingIds.has(id)) return;

      existingIds.add(id);

      const heading = section.querySelector(
        "h1, h2, h3, h4"
      );

      const title = heading
        ? heading.innerText.trim()
        : id.replace(/[-_]/g, " ");

      const description = section.innerText
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 180);

      if (title || description) {
        searchIndex.push({
          title,
          description,
          url: "#" + id,
          type: "Section"
        });
      }
    });

    // Search all visible text inside website sections.
    const contentElements = document.querySelectorAll(
      "main section p, main section h1, main section h2, " +
      "main section h3, main section h4, " +
      "section p, section h1, section h2, section h3, " +
      "footer p, footer h2, footer h3"
    );

    contentElements.forEach(element => {
      const text = element.innerText.trim();
      const section = element.closest("section, footer");

      if (!text || !section) return;

      const sectionId = section.id;

      if (!sectionId || text.length < 3) return;

      searchIndex.push({
        title: text.slice(0, 85),
        description: "Website content",
        url: "#" + sectionId,
        type: "Content"
      });
    });

    searchIndex.push(
      ...sectionData,
      ...serviceData,
      ...projectData
    );
  }

  function openSearch() {
    panel.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    input.focus();
  }

  function closeSearch() {
    panel.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
    trigger.focus();
  }

  function normalize(value) {
    return value.toLowerCase().trim();
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[char]);
  }

  function searchWebsite(query) {
    const term = normalize(query);

    if (!term) {
      resultsBox.innerHTML =
        '<p class="ng-search-hint">' +
        'Start typing to search the entire website.' +
        '</p>';
      selectedIndex = -1;
      return;
    }

    const words = term.split(/\s+/);

    const matches = searchIndex
      .map(item => {
        const title = normalize(item.title);
        const description = normalize(item.description);
        const combined = title + " " + description;

        const matchedWords = words.filter(word =>
          combined.includes(word)
        );

        if (!matchedWords.length) return null;

        const score = matchedWords.reduce((total, word) => {
          if (title === word) return total + 12;
          if (title.startsWith(word)) return total + 8;
          if (title.includes(word)) return total + 5;
          return total + 2;
        }, 0);

        return { ...item, score };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .filter((item, index, array) =>
        array.findIndex(other =>
          other.url === item.url &&
          other.title === item.title
        ) === index
      )
      .slice(0, 12);

    selectedIndex = -1;

    if (!matches.length) {
      resultsBox.innerHTML =
        '<p class="ng-search-empty">' +
        '<i class="bi bi-search"></i><br>' +
        'No results found. Try another keyword.' +
        '</p>';
      return;
    }

    resultsBox.innerHTML = matches.map((item, index) => {
      const safeTitle = escapeHTML(item.title);
      const safeDescription = escapeHTML(item.description);
      const safeUrl = escapeHTML(item.url);
      const icon = icons[item.type] || "bi-file-text";

      return `
        <a
          href="${safeUrl}"
          class="ng-search-result"
          data-search-index="${index}"
        >
          <span class="ng-search-result-icon">
            <i class="bi ${icon}"></i>
          </span>

          <span class="ng-search-result-content">
            <span class="ng-search-result-title">${safeTitle}</span>
            <span class="ng-search-result-description">
              ${safeDescription}
            </span>
          </span>

          <span class="ng-search-result-type">
            ${escapeHTML(item.type)}
          </span>
        </a>
      `;
    }).join("");
  }

  trigger.addEventListener("click", openSearch);
  closeBtn.addEventListener("click", closeSearch);

  input.addEventListener("input", () => {
    searchWebsite(input.value);
  });

  document.addEventListener("keydown", event => {
    if (
      (event.ctrlKey || event.metaKey) &&
      event.key.toLowerCase() === "k"
    ) {
      event.preventDefault();

      if (panel.hidden) openSearch();
      else input.focus();
    }

    if (event.key === "Escape" && !panel.hidden) {
      closeSearch();
    }

    if (!panel.hidden && event.key === "ArrowDown") {
      event.preventDefault();
      const items = resultsBox.querySelectorAll(".ng-search-result");

      if (!items.length) return;

      selectedIndex = Math.min(selectedIndex + 1, items.length - 1);

      items[selectedIndex].focus();
    }

    if (!panel.hidden && event.key === "ArrowUp") {
      event.preventDefault();
      const items = resultsBox.querySelectorAll(".ng-search-result");

      if (!items.length) return;

      selectedIndex = Math.max(selectedIndex - 1, 0);

      items[selectedIndex].focus();
    }
  });

  document.addEventListener("click", event => {
    if (!wrapper.contains(event.target) && !panel.hidden) {
      panel.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
    }
  });

  // Build index after page content has loaded.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildSearchIndex, {
      once: true
    });
  } else {
    buildSearchIndex();
  }

  // Close panel after selecting a result.
  resultsBox.addEventListener("click", event => {
    const result = event.target.closest(".ng-search-result");

    if (!result) return;

    panel.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
    input.value = "";

    const target = document.querySelector(
      result.getAttribute("href")
    );

    if (target) {
      setTimeout(() => {
        target.scrollIntoView({
          behavior: window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches ? "auto" : "smooth",
          block: "start"
        });
      }, 50);
    }
  });

})();
