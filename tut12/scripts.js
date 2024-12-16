document.addEventListener("DOMContentLoaded", () => {
    console.log("KOCO Hair Oil Website Loaded Successfully!");
});
// JavaScript for KOCO Hair Oil Website

document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjust for fixed header height
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight Active Menu Item on Scroll
    const sections = document.querySelectorAll("section");
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;
            const navItem = document.querySelector(`.nav-links a[href="#${id}"]`);

            if (entry.isIntersecting && navItem) {
                navLinks.forEach(link => link.classList.remove("active"));
                navItem.classList.add("active");
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Contact Form Validation and Message Handling
    const form = document.querySelector("form");
    const messageContainer = document.createElement("div");
    messageContainer.className = "message-container";
    document.body.appendChild(messageContainer);

    form.addEventListener("submit", event => {
        event.preventDefault();

        const name = form.querySelector("input[placeholder='Your Name']");
        const email = form.querySelector("input[placeholder='Your Email']");
        const message = form.querySelector("textarea");

        let isValid = true;

        if (!name.value.trim()) {
            alert("Please enter your name.");
            isValid = false;
        }

        if (!email.value.trim() || !validateEmail(email.value)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        if (!message.value.trim()) {
            alert("Please enter your message.");
            isValid = false;
        }

        if (isValid) {
            displayMessage(name.value, email.value, message.value);
            alert("Thank you for reaching out! Your message has been received.");
            form.reset();
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayMessage(name, email, message) {
        const messageCard = document.createElement("div");
        messageCard.className = "message-card";

        messageCard.innerHTML = `
            <h4>${name} (${email})</h4>
            <p>${message}</p>
            <hr>
        `;

        messageContainer.prepend(messageCard);
    }

    // Scroll to Top Button
    const scrollTopButton = document.createElement("button");
    scrollTopButton.textContent = "↑";
    scrollTopButton.className = "scroll-top";
    scrollTopButton.style.display = "none";

    document.body.appendChild(scrollTopButton);

    scrollTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    });
});
