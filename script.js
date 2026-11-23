
/* =====================================
   NEXTGEN - ABOUT SECTION JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", function () {

  // ABOUT SECTION REVEAL ANIMATION

  const aboutElements = document.querySelectorAll(
    ".about-heading, .about-content, .about-visual, .about-stats"
  );

  const aboutObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("about-visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.15
    }
  );

  aboutElements.forEach(element => {
    element.classList.add("about-reveal");
    aboutObserver.observe(element);
  });


  // STATISTICS HOVER INTERACTION

  const statCards = document.querySelectorAll(".about-stat-item");

  statCards.forEach(card => {

    card.addEventListener("mouseenter", function () {
      this.classList.add("stat-active");
    });

    card.addEventListener("mouseleave", function () {
      this.classList.remove("stat-active");
    });

  });


  // ABOUT CARD POINTER GLOW

  const aboutCard = document.querySelector(".about-main-card");

  if (aboutCard) {

    aboutCard.addEventListener("mousemove", function (event) {

      const rect = this.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      this.style.setProperty("--mouse-x", `${x}px`);
      this.style.setProperty("--mouse-y", `${y}px`);

    });

  }

});


/* =====================================
   NAVBAR ACTIVE LINK ON SCROLL
===================================== */

document.addEventListener("DOMContentLoaded", function () {

  const sections = document.querySelectorAll(
    "#home, #about, #services, #portfolio, #pricing, #contact"
  );

  const navLinks = document.querySelectorAll(
    ".navbar-nav .nav-link"
  );

  function updateActiveNav() {

    let currentSection = "home";

    sections.forEach(section => {

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop - 180 &&
        window.scrollY < sectionTop + sectionHeight - 180
      ) {
        currentSection = section.getAttribute("id");
      }

    });

    navLinks.forEach(link => {

      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }

    });

  }

  window.addEventListener("scroll", updateActiveNav);

  updateActiveNav();

});



/* =====================================
   NEXTGEN - SERVICES JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", function () {

  // 1. SERVICES SCROLL REVEAL

  const serviceCards = document.querySelectorAll(".service-card");

  const serviceObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          const index = [...serviceCards].indexOf(entry.target);

          setTimeout(() => {
            entry.target.classList.add("service-visible");
          }, (index % 3) * 120);

          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.15
    }
  );

  serviceCards.forEach(card => {
    card.classList.add("service-reveal");
    serviceObserver.observe(card);
  });


  // 2. INTERACTIVE CARD SPOTLIGHT

  serviceCards.forEach(card => {

    card.addEventListener("pointermove", function (event) {

      const rect = this.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      this.style.setProperty("--spot-x", `${x}px`);
      this.style.setProperty("--spot-y", `${y}px`);

    });

  });


  // 3. SERVICE ICON INTERACTION

  serviceCards.forEach(card => {

    const icon = card.querySelector(".service-icon");

    if (!icon) return;

    card.addEventListener("mouseenter", () => {
      icon.classList.add("service-icon-active");
    });

    card.addEventListener("mouseleave", () => {
      icon.classList.remove("service-icon-active");
    });

  });


  // 4. EXPLORE SERVICE CLICK

  const serviceLinks = document.querySelectorAll(".service-link");

  serviceLinks.forEach(link => {

    link.addEventListener("click", function () {

      const serviceName = this.closest(".service-card")
        ?.querySelector("h3")?.textContent;

      console.log("Selected Service:", serviceName);

    });

  });

});



/* =========================================
   NEXTGEN — PORTFOLIO ANIMATIONS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  // 1. REVEAL PROJECT CARDS ON SCROLL

  const projectCards = document.querySelectorAll(".project-card");

  const portfolioObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("project-visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.15
    }
  );

  projectCards.forEach((card, index) => {

    card.classList.add("project-reveal");

    card.style.transitionDelay = `${index * 120}ms`;

    portfolioObserver.observe(card);

  });


  // 2. PROJECT CARD MOUSE SPOTLIGHT

  projectCards.forEach((card) => {

    card.addEventListener("mousemove", function (event) {

      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);

    });

  });


  // 3. PROJECT LINK CLICK EFFECT

  const projectLinks = document.querySelectorAll(".project-link");

  projectLinks.forEach((link) => {

    link.addEventListener("click", function () {

      this.classList.add("project-link-clicked");

    });

  });


  // 4. PORTFOLIO HEADING REVEAL

  const portfolioHeader = document.querySelector(".portfolio-header");

  if (portfolioHeader) {

    const headerObserver = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            portfolioHeader.classList.add("portfolio-header-visible");

            headerObserver.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.2
      }
    );

    headerObserver.observe(portfolioHeader);

  }

});



/* =========================================
   NEXTGEN — PRICING JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  // 1. PRICING CARDS SCROLL REVEAL

  const pricingCards = document.querySelectorAll(".pricing-card");

  const pricingObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("pricing-visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.15
    }
  );

  pricingCards.forEach((card, index) => {

    card.classList.add("pricing-reveal");

    card.style.transitionDelay = `${index * 120}ms`;

    pricingObserver.observe(card);

  });


  // 2. PRICING CATEGORY ANIMATION

  const pricingHeadings = document.querySelectorAll(
    ".pricing-category-heading"
  );

  const headingObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("pricing-heading-visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.2
    }
  );

  pricingHeadings.forEach((heading) => {

    heading.classList.add("pricing-heading-reveal");

    headingObserver.observe(heading);

  });


  // 3. CARD SPOTLIGHT EFFECT

  pricingCards.forEach((card) => {

    card.addEventListener("mousemove", function (event) {

      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      card.style.setProperty("--pricing-x", `${x}px`);
      card.style.setProperty("--pricing-y", `${y}px`);

    });

  });


  // 4. WHATSAPP PRICING INQUIRY

  const pricingButtons = document.querySelectorAll(".pricing-btn");
  const customButton = document.querySelector(".pricing-custom-btn");

  // Replace this with your WhatsApp number.
  // Include country code, without + or spaces.
  const whatsappNumber = "8984240820";

  function openWhatsApp(message) {

    if (whatsappNumber === "91YOURNUMBER") {

      alert("Please add your WhatsApp number in script.js first.");

      return;

    }

    const url =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(message);

    window.open(url, "_blank", "noopener,noreferrer");

  }

  pricingButtons.forEach((button) => {

    button.addEventListener("click", function (event) {

      event.preventDefault();

      const card = this.closest(".pricing-card");

      const plan = card.querySelector("h4").textContent.trim();

      const category = card.closest(".marketing-pricing")
        ? "Digital Marketing"
        : "Website Development";

      const message =
        `Hello NextGen Digital Solutions! I am interested in your ${plan} package (${category}). Please share more details.`;

      openWhatsApp(message);

    });

  });


  if (customButton) {

    customButton.addEventListener("click", function (event) {

      event.preventDefault();

      openWhatsApp(
        "Hello NextGen Digital Solutions! I would like to discuss a custom package for my business."
      );

    });

  }

});


/* =========================================
   NEXTGEN — WHATSAPP CONTACT FORM
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const contactForm = document.getElementById("whatsappContactForm");

  if (!contactForm) return;

  const whatsappNumber = "918984240820";

  contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // GET FORM VALUES

    const name = document.getElementById("contactName").value.trim();
    const phone = document.getElementById("contactPhone").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const business = document.getElementById("businessName").value.trim();
    const service = document.getElementById("contactService").value;
    const budget = document.getElementById("contactBudget").value;
    const message = document.getElementById("contactMessage").value.trim();

    // BASIC VALIDATION

    if (!name || !phone || !email || !service || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // CREATE PROFESSIONAL WHATSAPP MESSAGE

    const whatsappMessage = `
🚀 *NEW PROJECT INQUIRY*

━━━━━━━━━━━━━━━━━━

👤 *CUSTOMER DETAILS*

Name: ${name}
Phone: ${phone}
Email: ${email}
Business: ${business || "Not Provided"}

━━━━━━━━━━━━━━━━━━

💼 *PROJECT REQUIREMENTS*

Service: ${service}
Estimated Budget: ${budget || "Not Specified"}

━━━━━━━━━━━━━━━━━━

📝 *PROJECT DETAILS*

${message}

━━━━━━━━━━━━━━━━━━

📩 Inquiry received through:
NextGen Digital Solutions Website

🌐 We Build. We Brand. We Grow.
    `.trim();

    // ENCODE MESSAGE

    const encodedMessage = encodeURIComponent(whatsappMessage);

    // OPEN WHATSAPP

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

  });

});


/* =========================================
   NEXTGEN — AUTOMATIC COPYRIGHT YEAR
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const footerYear = document.getElementById("footerYear");

  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

});



/* =========================================
   NEXTGEN — AUTO CLOSE MOBILE NAVBAR
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const navbarMenu = document.getElementById("navbarContent");

  const navLinks = document.querySelectorAll(
    "#navbarContent .nav-link, #navbarContent .btn"
  );

  if (!navbarMenu || typeof bootstrap === "undefined") return;

  const bsCollapse = bootstrap.Collapse.getOrCreateInstance(
    navbarMenu,
    { toggle: false }
  );

  navLinks.forEach((link) => {

    link.addEventListener("click", function () {

      // Only close on mobile when menu is expanded
      if (
        window.innerWidth < 992 &&
        navbarMenu.classList.contains("show")
      ) {
        bsCollapse.hide();
      }

    });

  });

});


/* =========================================
   NEXTGEN — LIVE CHAT SYSTEM
   WhatsApp + Email + Contact Details
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const chatToggle = document.getElementById("ng-chat-toggle");
  const chatBox = document.getElementById("ng-chat-box");
  const chatClose = document.getElementById("ng-chat-close");
  const chatBody = document.getElementById("ng-chat-body");

  if (!chatToggle || !chatBox || !chatClose || !chatBody) return;

  // ORIGINAL CHAT SCREEN
  const originalChatContent = chatBody.innerHTML;

  // COMPANY CONTACT DETAILS
  const whatsappNumber = "918984240820";
  const companyPhone = "8984240820";
  const companyEmail = "chandankumarpanda0820@gmail.com";

  let selectedService = "";

  // OPEN CHAT
  chatToggle.addEventListener("click", function () {
    chatBox.classList.toggle("ng-chat-active");
  });

  // RESET CHAT
  function resetChat() {
    chatBody.innerHTML = originalChatContent;
    chatBody.scrollTop = 0;
    selectedService = "";
  }

  // CLOSE CHAT
  chatClose.addEventListener("click", function () {
    chatBox.classList.remove("ng-chat-active");
    resetChat();
  });

  // ADD MESSAGE
  function addMessage(message, type) {

    const div = document.createElement("div");

    div.className = type === "user"
      ? "ng-user-message"
      : "ng-bot-message";

    div.textContent = message;

    chatBody.appendChild(div);

    chatBody.scrollTop = chatBody.scrollHeight;

    return div;
  }

  // CREATE BUTTON
  function createButton(text, className, callback) {

    const button = document.createElement("button");

    button.type = "button";
    button.textContent = text;
    button.className = className;

    button.addEventListener("click", callback);

    return button;
  }

  // ASK CUSTOMER YES / NO
  function askContactPreference() {

    addMessage(
      "Kya aap WhatsApp par hamari NextGen team se baat karna chahte hain?",
      "bot"
    );

    const options = document.createElement("div");
    options.className = "ng-chat-options";

    const yesButton = createButton(
      "✓ YES, Contact Team",
      "ng-chat-choice",
      function () {

        addMessage("YES, I want to contact the team.", "user");

        showContactOptions();
      }
    );

    const noButton = createButton(
      "✕ NO, Show Contact Details",
      "ng-chat-choice",
      function () {

        addMessage("NO, Show me your contact details.", "user");

        showContactDetails();
      }
    );

    options.appendChild(yesButton);
    options.appendChild(noButton);

    chatBody.appendChild(options);

    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // YES: WHATSAPP AND EMAIL OPTIONS
  function showContactOptions() {

    addMessage(
      "Great! Please choose how you would like to contact our team.",
      "bot"
    );

    const options = document.createElement("div");
    options.className = "ng-chat-options";

    // WHATSAPP
    const whatsapp = document.createElement("a");

    const whatsappMessage =
      "Hello NextGen Digital Solutions! I am interested in " +
      selectedService +
      ". Please share more details.";

    whatsapp.href =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(whatsappMessage);

    whatsapp.target = "_blank";
    whatsapp.rel = "noopener noreferrer";
    whatsapp.className = "ng-chat-whatsapp";

    whatsapp.innerHTML =
      '<i class="bi bi-whatsapp"></i> Contact via WhatsApp';

    // EMAIL
    const email = document.createElement("a");

    const subject = "Service Enquiry - " + selectedService;

    const emailMessage =
      "Hello NextGen Digital Solutions,\n\n" +
      "I am interested in " + selectedService +
      ". Please share more details.\n\n" +
      "Thank you.";

    email.href =
      "mailto:" + companyEmail +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(emailMessage);

    email.className = "ng-chat-whatsapp";
    email.style.background = "#164c88";

    email.innerHTML =
      '<i class="bi bi-envelope-fill"></i> Contact via Email';

    options.appendChild(whatsapp);
    options.appendChild(email);

    chatBody.appendChild(options);

    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // NO: SHOW COMPANY DETAILS
  function showContactDetails() {

    addMessage(
      "No problem! Here are our official contact details. You can contact us whenever you need assistance.",
      "bot"
    );

    const details = document.createElement("div");

    details.className = "ng-bot-message";

    const title = document.createElement("strong");
    title.textContent = "NextGen Digital Solutions";

    const phone = document.createElement("p");
    phone.style.margin = "10px 0 5px";
    phone.textContent = "📞 Phone: " + companyPhone;

    const email = document.createElement("p");
    email.style.margin = "5px 0";
    email.textContent = "✉ Email: " + companyEmail;

    details.appendChild(title);
    details.appendChild(phone);
    details.appendChild(email);

    chatBody.appendChild(details);

    // CALL BUTTON
    const callButton = document.createElement("a");

    callButton.href = "tel:" + companyPhone;
    callButton.className = "ng-chat-whatsapp";
    callButton.innerHTML =
      '<i class="bi bi-telephone-fill"></i> Call NextGen';

    // EMAIL BUTTON
    const emailButton = document.createElement("a");

    emailButton.href = "mailto:" + companyEmail;
    emailButton.className = "ng-chat-whatsapp";
    emailButton.style.background = "#164c88";

    emailButton.innerHTML =
      '<i class="bi bi-envelope-fill"></i> Send Email';

    chatBody.appendChild(callButton);
    chatBody.appendChild(emailButton);

    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // SERVICE SELECTION
  chatBody.addEventListener("click", function (event) {

    const button = event.target.closest(
      ".ng-chat-options button[data-service]"
    );

    if (!button) return;

    selectedService = button.dataset.service;

    addMessage(selectedService, "user");

    // Prevent repeated selection
    button.closest(".ng-chat-options").remove();

    addMessage(
      "Thank you for your interest in " +
      selectedService + "!",
      "bot"
    );

    askContactPreference();
  });

  // ESCAPE KEY
  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

      chatBox.classList.remove("ng-chat-active");

      resetChat();
    }

  });

});


/* ===== NEXTGEN PREMIUM PRELOADER ===== */

document.addEventListener("DOMContentLoaded", function () {

  const preloader = document.getElementById("ng-preloader");
  if (!preloader) return;

  const startTime = Date.now();
  let pageLoaded = document.readyState === "complete";

  function hidePreloader() {
    if (!pageLoaded) return;

    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, 2000 - elapsedTime);

    setTimeout(function () {
      preloader.classList.add("ng-loader-hide");

      setTimeout(function () {
        preloader.remove();
      }, 650);

    }, remainingTime);
  }

  if (!pageLoaded) {
    window.addEventListener("load", function () {
      pageLoaded = true;
      hidePreloader();
    }, { once: true });
  } else {
    hidePreloader();
  }

});

/* ===== NEXTGEN SCROLL PROGRESS ===== */

(function () {

  const progressBar = document.getElementById("ng-scroll-progress");

  if (!progressBar) return;

  function updateScrollProgress() {

    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollHeight > 0
      ? (scrollTop / scrollHeight) * 100
      : 0;

    progressBar.style.width = progress + "%";
  }

  window.addEventListener("scroll", updateScrollProgress, {
    passive: true
  });

  window.addEventListener("resize", updateScrollProgress);

  updateScrollProgress();

})();

/* ===== NEXTGEN ENERGY BUTTON ACTION ===== */

(function () {

  const energyButton = document.querySelector(".back-to-top");

  if (!energyButton) return;

  energyButton.addEventListener("click", function (event) {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

})();


/* =====================================
   NEXTGEN DEVELOPER TERMINAL
   INTERACTIVE COMMAND SYSTEM
   + PREMIUM BOOT ANIMATION
   + MATRIX DIGITAL RAIN
===================================== */

document.addEventListener("DOMContentLoaded", function () {

  const terminalForm = document.getElementById("ngTerminalForm");
  const terminalInput = document.getElementById("ngTerminalInput");
  const terminalOutput = document.getElementById("ngTerminalOutput");
  const terminalWindow = document.querySelector(".ng-terminal-window");

  if (!terminalForm || !terminalInput || !terminalOutput) return;

  const company = {
    name: "NextGen Digital Solutions",
    tagline: "We Build. We Brand. We Grow.",
    founder: "Chandan Kumar Panda",
    phone: "8984240820",
    email: "chandankumarpanda0820@gmail.com",
    website: "https://nextgendigitalsbp.services/",
    whatsapp: "https://wa.me/918984240820",
    telegram: "https://t.me/nextgendigitalsolutionssbp",
    founderInstagram: "https://www.instagram.com/pravatpanda0820/",
    companyInstagram: "https://www.instagram.com/nextgendigitalsolutions.sbp/"
  };

  /* =====================================
     TERMINAL OUTPUT
  ===================================== */

  function printLine(message, className = "") {
    const line = document.createElement("p");
    line.className = className;
    line.textContent = message;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  function printHTML(html) {
    const line = document.createElement("p");
    line.innerHTML = html;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  /* =====================================
     MATRIX DIGITAL RAIN
  ===================================== */

  function startMatrixRain() {

    if (!terminalWindow) return;

    if (terminalWindow.querySelector(".ng-matrix-canvas")) return;

    const canvas = document.createElement("canvas");
    canvas.className = "ng-matrix-canvas";

    terminalWindow.prepend(canvas);

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      canvas.remove();
      return;
    }

    const characters =
      "01アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const fontSize = 14;

    let drops = [];
    let columns = 0;
    let animationId;
    let resizeObserver;

    function resizeCanvas() {

      const rect = terminalWindow.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);

      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = Math.ceil(rect.width / fontSize);

      drops = Array.from(
        { length: columns },
        () => Math.random() * -30
      );
    }

    function drawMatrix() {

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.fillStyle = "rgba(5, 11, 11, 0.12)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {

        const character = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = "#00ffaa";
        ctx.fillText(character, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += 0.45;
      }

      animationId = requestAnimationFrame(drawMatrix);
    }

    resizeCanvas();
    drawMatrix();

    window.addEventListener("resize", resizeCanvas);

    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(resizeCanvas);
      resizeObserver.observe(terminalWindow);
    }

  }

  /* =====================================
     PREMIUM BOOT ANIMATION
  ===================================== */

  function startTerminalBoot() {

    const bootMessages = [
      { text: "NEXTGEN DIGITAL SYSTEM INITIALIZING...", type: "" },
      { text: "Loading terminal environment...", type: "" },
      { text: "Checking system modules... OK", type: "ng-boot-success" },
      { text: "Loading company profile... OK", type: "ng-boot-success" },
      { text: "Connecting digital services... OK", type: "ng-boot-success" },
      { text: "Security check... PASSED", type: "ng-boot-success" },
      { text: "Welcome to NextGen Developer Terminal!", type: "ng-boot-success" }
    ];

    terminalOutput.innerHTML = "";
    terminalOutput.classList.add("ng-terminal-boot");

    terminalInput.disabled = true;

    let index = 0;

    function showNextMessage() {

      if (index >= bootMessages.length) {

        setTimeout(function () {

          terminalOutput.classList.remove("ng-terminal-boot");
          terminalOutput.innerHTML = "";

          printLine("Welcome to NextGen Digital Solutions Terminal.");
          printLine("Type 'help' to explore available commands.");
          printLine(
            "System ready. Let's build something amazing!",
            "ng-terminal-welcome"
          );

          terminalInput.disabled = false;
          terminalInput.focus();

        }, 500);

        return;
      }

      const message = bootMessages[index];

      const line = document.createElement("p");
      line.className = "ng-boot-line " + message.type;
      line.textContent = message.text;

      terminalOutput.appendChild(line);
      terminalOutput.scrollTop = terminalOutput.scrollHeight;

      index++;

      setTimeout(showNextMessage, 450);
    }

    showNextMessage();
  }

  /* =====================================
     AVAILABLE COMMANDS
  ===================================== */

  const commands = {

    help: function () {
      printLine("AVAILABLE COMMANDS", "ng-terminal-welcome");
      printLine("about      - About NextGen");
      printLine("services   - Explore our services");
      printLine("projects   - Explore our projects");
      printLine("whoami     - Developer identity");
      printLine("contact    - Contact information");
      printLine("socials    - Social media links");
      printLine("website    - Open company website");
      printLine("date       - Current date");
      printLine("time       - Current local time");
      printLine("clear      - Clear terminal");
      printLine("exit       - Close current session");
      printLine("help       - Show all commands");
    },

    about: function () {
      printLine("COMPANY INFORMATION", "ng-terminal-welcome");
      printLine(company.name);
      printLine(company.tagline);
      printLine("Location: Sambalpur, Odisha, India");
      printLine("We create digital experiences for growing businesses.");
    },

    services: function () {
      printLine("OUR DIGITAL SERVICES", "ng-terminal-welcome");
      printLine("01. Website Development");
      printLine("02. E-commerce Development");
      printLine("03. SEO & Digital Marketing");
      printLine("04. Social Media Branding");
      printLine("05. Website Design & Maintenance");
    },

    projects: function () {
      printLine("PROJECT SHOWCASE", "ng-terminal-welcome");
      printLine("Explore our latest digital projects:");
      printLine("Visit our website to discover our work.");
    },

    whoami: function () {
      printLine("IDENTITY DETECTED", "ng-terminal-welcome");
      printLine("Founder: " + company.founder);
      printLine("Organization: " + company.name);
      printLine("Role: Digital Solutions & Development");
    },

    contact: function () {
      printLine("CONTACT INFORMATION", "ng-terminal-welcome");
      printLine("Phone: " + company.phone);
      printLine("Email: " + company.email);
      printLine("Website: " + company.website);
    },

    socials: function () {
      printLine("CONNECT WITH NEXTGEN", "ng-terminal-welcome");

      printHTML(
        '<a href="' + company.companyInstagram +
        '" target="_blank" rel="noopener noreferrer" style="color:#00ffaa;">Instagram - NextGen</a>'
      );

      printHTML(
        '<a href="' + company.telegram +
        '" target="_blank" rel="noopener noreferrer" style="color:#00ffaa;">Telegram Channel</a>'
      );

      printHTML(
        '<a href="' + company.whatsapp +
        '" target="_blank" rel="noopener noreferrer" style="color:#00ffaa;">WhatsApp</a>'
      );

      printHTML(
        '<a href="' + company.founderInstagram +
        '" target="_blank" rel="noopener noreferrer" style="color:#00ffaa;">Founder Instagram</a>'
      );
    },

    website: function () {
      printLine("Opening NextGen website...");
      window.open(company.website, "_blank", "noopener,noreferrer");
    },

    date: function () {
      printLine("Current Date: " + new Date().toLocaleDateString());
    },

    time: function () {
      printLine("SYSTEM CLOCK", "ng-terminal-welcome");
      printLine("Current Time: " + new Date().toLocaleTimeString());
      printLine(
        "Timezone: " + Intl.DateTimeFormat().resolvedOptions().timeZone
      );
    },

    clear: function () {
      terminalOutput.innerHTML = "";
    },

    exit: function () {
      terminalOutput.innerHTML = "";

      printLine("NEXTGEN DEVELOPER TERMINAL", "ng-terminal-welcome");
      printLine("Session closed successfully.");
      printLine("Welcome back!");
      printLine("Type 'help' to explore available commands.");
    }
  };

  /* =====================================
     COMMAND EXECUTION
  ===================================== */

  terminalForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (terminalInput.disabled) return;

    const command = terminalInput.value.trim().toLowerCase();

    if (!command) return;

    printHTML(
      '<span style="color:#00ffaa">visitor@nextgen:~$</span> ' +
      command.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
    );

    if (commands[command]) {
      commands[command]();
    } else {
      printLine(
        "Command not found: " + command +
        ". Type 'help' to see available commands."
      );
    }

    terminalInput.value = "";
    terminalInput.focus();

  });

  /* =====================================
     START TERMINAL
  ===================================== */

  startMatrixRain();
  startTerminalBoot();

});


/* =========================================
   NEXTGEN — DIGITAL SERVICE SCANNER
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("ngScannerForm");
  if (!form) return;

  const businessSelect = document.getElementById("ngBusinessType");
  const presenceSelect = document.getElementById("ngOnlinePresence");

  const steps = document.querySelectorAll(".ng-ai-step");

  const stepLabel = document.getElementById("ngStepLabel");
  const stepPercent = document.getElementById("ngStepPercent");
  const stepBar = document.getElementById("ngStepBar");

  const scanAnimation = document.getElementById("ngScannerAnimation");
  const scanStatus = document.getElementById("ngScannerStatus");
  const scanProgress = document.getElementById("ngScannerProgress");
  const scanPercent = document.getElementById("ngScanPercent");

  const results = document.getElementById("ngScannerResults");
  const resultDetails = document.getElementById("ngScannerResultDetails");

  const scanButton = document.getElementById("ngScannerButton");
  const whatsappButton = document.getElementById("ngScannerWhatsApp");
  const resetButton = document.getElementById("ngScannerReset");

  let scanTimer = null;
  let currentStep = 1;

  const businessRecommendations = {
    "Startup": [
      "Website Development",
      "Social Media Branding",
      "SEO & Digital Marketing"
    ],

    "Small Business": [
      "Website Development",
      "SEO & Digital Marketing",
      "Social Media Branding"
    ],

    "Retail Shop": [
      "E-commerce Website",
      "Social Media Branding",
      "SEO & Digital Marketing"
    ],

    "Educational Institute": [
      "Website Development",
      "Social Media Branding",
      "Website Maintenance"
    ],

    "Personal Brand": [
      "Website Development",
      "Social Media Branding",
      "SEO & Digital Marketing"
    ],

    "Corporate Business": [
      "Website Development",
      "SEO & Digital Marketing",
      "Website Maintenance"
    ],

    "Other": [
      "Website Development",
      "Social Media Branding"
    ]
  };

  const presenceRecommendations = {
    "No online presence": [
      "Website Development",
      "Social Media Branding",
      "SEO & Digital Marketing"
    ],

    "Website only": [
      "SEO & Digital Marketing",
      "Social Media Branding"
    ],

    "Social media only": [
      "Website Development",
      "SEO & Digital Marketing"
    ],

    "Website and social media": [
      "SEO & Digital Marketing",
      "Website Maintenance"
    ]
  };

  // STEP NAVIGATION

  function showStep(stepNumber) {
    currentStep = stepNumber;

    steps.forEach(step => {
      step.classList.toggle(
        "active",
        Number(step.dataset.step) === stepNumber
      );
    });

    const percentage = Math.round((stepNumber / 3) * 100);

    stepLabel.textContent = `STEP ${stepNumber} OF 3`;
    stepPercent.textContent = `${percentage}%`;
    stepBar.style.width = `${percentage}%`;
  }

  // BUSINESS SELECTION

  document.querySelectorAll(".ng-ai-choice").forEach(button => {

    button.addEventListener("click", () => {

      document.querySelectorAll(".ng-ai-choice").forEach(item => {
        item.classList.remove("selected");
      });

      button.classList.add("selected");
      businessSelect.value = button.dataset.business;

    });

  });

  // DIGITAL PRESENCE SELECTION

  document.querySelectorAll(".ng-ai-presence").forEach(button => {

    button.addEventListener("click", () => {

      document.querySelectorAll(".ng-ai-presence").forEach(item => {
        item.classList.remove("selected");
      });

      button.classList.add("selected");
      presenceSelect.value = button.dataset.presence;

    });

  });

  // STEP 1 -> STEP 2

  document.getElementById("ngStepOneNext").addEventListener("click", () => {

    if (!businessSelect.value) {
      alert("Please select your business category.");
      return;
    }

    showStep(2);

  });

  // STEP 2 -> STEP 1

  document.getElementById("ngStepTwoBack").addEventListener("click", () => {
    showStep(1);
  });

  // STEP 2 -> STEP 3

  document.getElementById("ngStepTwoNext").addEventListener("click", () => {

    if (!presenceSelect.value) {
      alert("Please select your digital presence.");
      return;
    }

    showStep(3);

  });

  // STEP 3 -> STEP 2

  document.getElementById("ngStepThreeBack").addEventListener("click", () => {
    showStep(2);
  });

  // RECOMMENDATION ENGINE

  function getRecommendations(business, presence, selectedServices) {

    const businessList = businessRecommendations[business] || [];
    const presenceList = presenceRecommendations[presence] || [];

    const combined = [...new Set([
      ...businessList,
      ...presenceList
    ])];

    let suggested = combined.filter(service => {
      return !selectedServices.includes(service);
    });

    if (selectedServices.includes("Complete Digital Solution")) {
      suggested = [];
    }

    return suggested;
  }

  // CREATE RESULT CARD

  function createResultCard(title, description, services) {

    const card = document.createElement("div");
    card.className = "ng-scanner-recommendation";

    const heading = document.createElement("h4");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = description;

    const list = document.createElement("ul");

    services.forEach(service => {
      const item = document.createElement("li");
      item.textContent = service;
      list.appendChild(item);
    });

    card.append(heading, paragraph, list);

    resultDetails.appendChild(card);
  }

  // DISPLAY RESULTS

  function displayResults(business, presence, selectedServices) {

    const suggestedServices = getRecommendations(
      business,
      presence,
      selectedServices
    );

    resultDetails.replaceChildren();

    createResultCard(
      "Your Business Profile",
      "Details submitted for your digital service scan.",
      [
        `Business Type: ${business}`,
        `Digital Presence: ${presence}`
      ]
    );

    createResultCard(
      "Your Selected Services",
      "These are the services you requested.",
      selectedServices
    );

    createResultCard(
      "Recommended Services",
      "Additional services that may help improve your digital presence.",
      suggestedServices.length
        ? suggestedServices
        : ["Your selected services already cover our recommendations."]
    );

    // WHATSAPP MESSAGE

    const message = [
      "Hello NextGen Digital Solutions!",
      "",
      "I completed the Digital Service Scanner.",
      "",
      `Business Type: ${business}`,
      `Digital Presence: ${presence}`,
      "",
      `Selected Services: ${selectedServices.join(", ")}`,
      "",
      `Recommended Services: ${suggestedServices.join(", ") || "None"}`,
      "",
      "I would like to discuss my business requirements."
    ].join("\n");

    whatsappButton.href =
      "https://wa.me/918984240820?text=" +
      encodeURIComponent(message);

  }

  // START SCANNER

  form.addEventListener("submit", event => {

    event.preventDefault();

    if (currentStep !== 3) return;

    const business = businessSelect.value;
    const presence = presenceSelect.value;

    const selectedServices = Array.from(
      form.querySelectorAll('input[name="ngServices"]:checked')
    ).map(input => input.value);

    if (!business) {
      alert("Please select your business category.");
      showStep(1);
      return;
    }

    if (!presence) {
      alert("Please select your digital presence.");
      showStep(2);
      return;
    }

    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    // Hide form and show scanner

    form.hidden = true;
    scanAnimation.hidden = false;
    results.hidden = true;

    scanButton.disabled = true;

    let progress = 0;

    const messages = [
      "Initializing business profile...",
      "Analyzing digital requirements...",
      "Checking online presence...",
      "Matching suitable services...",
      "Preparing your growth report..."
    ];

    let messageIndex = 0;

    scanStatus.textContent = messages[0];
    scanProgress.style.width = "0%";
    scanPercent.textContent = "0%";

    const messageTimer = setInterval(() => {

      messageIndex = Math.min(messageIndex + 1, messages.length - 1);
      scanStatus.textContent = messages[messageIndex];

    }, 650);

    scanTimer = setInterval(() => {

      progress = Math.min(progress + 2, 100);

      scanProgress.style.width = `${progress}%`;
      scanPercent.textContent = `${progress}%`;

      if (progress >= 100) {

        clearInterval(scanTimer);
        clearInterval(messageTimer);

        scanTimer = null;

        scanStatus.textContent = "Analysis completed!";

        setTimeout(() => {

          scanAnimation.hidden = true;
          results.hidden = false;

          displayResults(
            business,
            presence,
            selectedServices
          );

          scanButton.disabled = false;

          results.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }, 400);

      }

    }, 60);

  });

  // RESET SCANNER

  resetButton.addEventListener("click", () => {

    if (scanTimer) {
      clearInterval(scanTimer);
      scanTimer = null;
    }

    form.reset();

    businessSelect.value = "";
    presenceSelect.value = "";

    document.querySelectorAll(
      ".ng-ai-choice, .ng-ai-presence"
    ).forEach(item => {
      item.classList.remove("selected");
    });

    scanAnimation.hidden = true;
    results.hidden = true;
    form.hidden = false;

    resultDetails.replaceChildren();

    scanProgress.style.width = "0%";
    scanPercent.textContent = "0%";

    scanButton.disabled = false;

    showStep(1);

    document.getElementById("service-scanner").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

  // INITIAL STATE

  form.hidden = false;
  scanAnimation.hidden = true;
  results.hidden = true;

  showStep(1);

});

