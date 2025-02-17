const serviceDetails = {
    consulting: {
        title: "Cybersecurity Consulting & Compliance",
        content: `
                <p>Titan Shield provides expert consulting to help businesses navigate cybersecurity risks and regulatory challenges. Our team ensures your organization meets compliance standards while strengthening your security posture.</p>
                <h4 class="font-bold mt-3 ">Risk & Vulnerability Management:</h4>
                <ul class="list-disc pl-5 text-sm">
                    <li>Comprehensive risk assessments to identify weaknesses.</li>
                    <li>Vulnerability scanning, prioritization, and remediation.</li>
                    <li>Security gap analysis to align with industry best practices.</li>
                </ul>
                <h4 class="font-bold mt-3">Regulatory Compliance & Security Frameworks:</h4>
                <ul class="list-disc pl-5 text-sm">
                    <li>ISO 27001, SOC 1 & 2, HIPAA, NIST, GDPR.</li>
                    <li>Security policy development and implementation.</li>
                    <li>Third-party vendor risk assessments and audits.</li>
                </ul>
                <h4 class="font-bold mt-3">Security Architecture & Strategy Consulting:</h4>
                <ul class="list-disc pl-5 text-sm">
                    <li>Zero Trust framework and Identity Access Management (IAM).</li>
                    <li>Secure Software Development Lifecycle (SSDLC).</li>
                    <li>Business Continuity & Disaster Recovery (BCDR) planning.</li>
                </ul>`
    },
    mssp: {
        title: "Managed Security Services (MSSP)",
        content: `
                <p>Our Managed Security Services provide continuous monitoring, proactive threat detection, and rapid incident response to keep your business secure 24/7.</p>
                <h4 class="font-bold mt-3">Managed SOC & Threat Detection:</h4>
                <ul class="list-disc pl-5 text-sm">
                    <li>24/7 Security Operations Center (SOC) monitoring.</li>
                    <li>SIEM (Security Information & Event Management) solutions.</li>
                    <li>Endpoint Detection & Response (EDR) management.</li>
                </ul>
                <h4 class="font-bold mt-3">Threat Intelligence & Incident Response:</h4>
                <ul class="list-disc pl-5 text-sm">
                    <li>Advanced threat hunting and digital forensics.</li>
                    <li>Phishing detection and remediation.</li>
                    <li>Incident handling and rapid response strategies.</li>
                </ul>
                <h4 class="font-bold mt-3">Continuous Vulnerability Management:</h4>
                <ul class="list-disc pl-5 text-sm">
                    <li>Ongoing security posture monitoring.</li>
                    <li>Real-time threat exposure assessments.</li>
                    <li>Automated patch management and remediation.</li>
                </ul>`
    },
    "offensive-security": {
        title: "Offensive Security & Penetration Testing",
        content: `
                <p>Simulating real-world cyberattacks, our ethical hacking services expose vulnerabilities before hackers can exploit them.</p>
                <h4 class="font-bold mt-3">Penetration Testing & Red Teaming:</h4>
                <ul class="list-disc pl-5 text-sm">
                    <li>Web, mobile, and API penetration testing.</li>
                    <li>Network and infrastructure security testing (internal & external).</li>
                    <li>Cloud security assessments (AWS, Azure, GCP).</li>
                    <li>Wireless & IoT security testing.</li>
                </ul>
                <h4 class="font-bold mt-3">Adversary Simulation & Social Engineering:</h4>
                <ul class="list-disc pl-5 text-sm">
                    <li>Red Team exercises to test incident response readiness.</li>
                    <li>Phishing, vishing, and onsite social engineering assessments.</li>
                    <li>Physical security penetration testing.</li>
                </ul>`
    },
    infrastructure: {
        title: "Technical Security & Infrastructure Protection   ",
        content: `
                <p>Titan Shield strengthens your technology ecosystem with advanced security solutions.</p>
                <h4 class="font-bold mt-3">Network & Infrastructure Security:</h4>
                <ul class="list-disc pl-5 text-sm">
                    <li>Firewall configuration, intrusion detection & prevention.</li>
                    <li>Secure cloud and on-premises infrastructure hardening.</li>
                    <li>Zero-day threat mitigation and anomaly detection.</li>
                </ul>
                <h4 class="font-bold mt-3">Application & Database Security:</h4>
                <ul class="list-disc pl-5 text-sm">
                    <li>Secure development lifecycle (SDLC) consulting.</li>
                    <li>Web & mobile application security assessments.</li>
                    <li>Database security best practices & encryption strategies.</li>
                </ul>
                <h4 class="font-bold mt-3">Data Protection & Privacy:</h4>
                <ul class="list-disc pl-5 text-sm">
                    <li>Data Loss Prevention (DLP) and encryption solutions.</li>
                    <li>Privacy Impact Assessments (PIA).</li>
                    <li>Secure backup and recovery planning.</li>
                </ul>`
    },
    training: {
        title: "Cybersecurity Training & Awareness",
        content: `
                <p>Empower your team with the skills and knowledge to protect your organization from cyber threats.</p>
                <h4 class="font-bold mt-3">Employee Awareness & Phishing Simulations:</h4>
                <ul class="list-disc pl-5 text-sm">
                    <li>Customized security awareness training.</li>
                    <li>Simulated phishing attacks & social engineering training.</li>
                    <li>Insider threat mitigation strategies.</li>
                </ul>
                <h4 class="font-bold mt-3">Advanced Technical Security Training:</h4>
                <ul class="list-disc pl-5 text-sm">
                    <li>Ethical hacking & penetration testing courses.</li>
                    <li>Incident handling and intrusion analysis.</li>
                    <li>Risk assessment methodologies and forensic investigations.</li>
                </ul>
                <h4 class="font-bold mt-3">Executive & Compliance Training:</h4>
                <ul class="list-disc pl-5 text-sm">
                    <li>Cyber risk management for leadership teams.</li>
                    <li>Tabletop exercises for security incident response teams.</li>
                    <li>Compliance training for ISO 27001, GDPR, PCI DSS, and HIPAA.</li>
                </ul>`
    }
};

document.addEventListener("DOMContentLoaded", function () {
    // Dynamic Year in Footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Typing Effect with Blinking Cursor
    const typingText = document.getElementById("typing-text");
    const text = "Security In Every Byte!";
    let index = 0;

    function typeEffect() {
        typingText.innerHTML = ""; // Clear text before restart
        index = 0;

        function type() {
            if (index < text.length) {
                typingText.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
                index++;
                requestAnimationFrame(() => setTimeout(type, 100)); // Smoother animation
            } else {
                typingText.innerHTML = text; // Remove cursor when done
            }
        }

        type();
    }

    setTimeout(typeEffect, 500);
    setInterval(typeEffect, 12000); // Restart effect every 12s

    // Navbar Scroll Effect with Debouncing
    let lastScrollY = window.scrollY;

    function handleScroll() {
        if (Math.abs(lastScrollY - window.scrollY) > 5) {
            document.querySelector("nav").classList.toggle("scrolled", window.scrollY > 50);
            lastScrollY = window.scrollY;
        }
    }

    window.addEventListener("scroll", () => requestAnimationFrame(handleScroll), {passive: true});

    // Background Image Rotation
    const heroSection = document.getElementById("hero");
    const heroImages = [
        "url('images/security1.jpeg')",
        "url('images/security2.jpeg')",
        "url('images/security3.jpeg')",
        "url('images/security4.jpeg')"
    ];
    let imageIndex = 0;

    function changeHeroBackground() {
        if (!heroSection) return;
        heroSection.style.backgroundImage = heroImages[imageIndex];
        imageIndex = (imageIndex + 1) % heroImages.length;
    }

    setInterval(changeHeroBackground, 5000);
    changeHeroBackground();

    // Mobile Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            menuToggle.setAttribute("aria-expanded", mobileMenu.classList.contains("hidden") ? "false" : "true");
        });
    }

    // Service Modal Handling (Event Delegation)
    const modal = document.getElementById("service-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalContent = document.getElementById("modal-content");
    const closeModal = document.getElementById("close-modal");

    document.body.addEventListener("click", function (event) {
        const target = event.target.closest(".service-card");
        window.location.href = window.location.href.split("#")[0] + "#services";
        if (target && modal) {
            const serviceType = target.getAttribute("data-service");
            const service = serviceDetails[serviceType];

            if (service) {
                modalTitle.textContent = service.title;
                modalContent.innerHTML = service.content;
                modal.classList.remove("hidden");
                modal.setAttribute("aria-hidden", "false");
            }
        }

        if (event.target === closeModal || event.target.closest(".modal-overlay")) {
            modal.classList.add("hidden");
            modal.setAttribute("aria-hidden", "true");
        }
    });

    // Close Modal on Escape Key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !modal.classList.contains("hidden")) {
            modal.classList.add("hidden");
        }
    });

    // Function to fetch visitor's IP securely
    async function fetchVisitorIP() {
        const ipElement = document.getElementById("visitor-ip");

        try {
            const response = await fetch("https://api64.ipify.org?format=json"); // Supports IPv6 & IPv4
            const data = await response.json();
            if (response.status === 200) {
                ipElement.textContent = data.ip
            } else {
                ipElement.textContent = "IP Unavailable"

            }

        } catch (error) {
            ipElement.textContent = "Unavailable";
            console.error("Error fetching IP:", error);
        }
    }


    fetchVisitorIP();
});
