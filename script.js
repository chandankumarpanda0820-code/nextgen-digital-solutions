
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
