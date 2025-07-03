// JavaScript with spread operator and interactive features
document.addEventListener('DOMContentLoaded', function () {
    // Spread operator example: merging arrays
    const skills = ['Python', 'JavaScript', 'C++'];
    const webSkills = ['HTML', 'CSS', 'React'];
    const allSkills = [...skills, ...webSkills]; // Using spread operator

    console.log('All skills:', allSkills);

    // Interactive typing effect for the title
    const title = document.querySelector('header h1');
    if (title) {
        const originalText = title.textContent;
        title.textContent = '';

        function typeWriter(text, index = 0) {
            if (index < text.length) {
                title.textContent += text.charAt(index);
                setTimeout(() => typeWriter(text, index + 1), 100);
            }
        }

        typeWriter(originalText);
    }

    // Dynamic theme switcher
    const themeButton = document.createElement('button');
    themeButton.textContent = '🌙 Dark Mode';
    themeButton.className = 'theme-toggle';
    themeButton.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 10px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        z-index: 1000;
    `;

    document.body.appendChild(themeButton);

    const themes = [
        { name: '🌙 Dark', bg: '#1a1a1a', color: '#f4f4f4' },
        { name: '☀️ Light', bg: '#ffffff', color: '#333333' },
        { name: '🌈 Rainbow', bg: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)', color: '#ffffff' }
    ];

    let currentTheme = 0;

    themeButton.addEventListener('click', function () {
        currentTheme = (currentTheme + 1) % themes.length;
        const theme = themes[currentTheme];

        document.body.style.background = theme.bg;
        document.body.style.color = theme.color;
        themeButton.textContent = theme.name;
    });

    // Interactive skill bars with spread operator
    const skillsSection = document.querySelector('.skills ul');
    if (skillsSection) {
        const skillLevels = {
            'Python': 85,
            'JavaScript': 75,
            'C++': 70,
            'HTML': 90,
            'CSS': 80
        };

        // Using spread to convert object entries to array
        const skillEntries = [...Object.entries(skillLevels)];

        skillsSection.innerHTML = '';
        skillEntries.forEach(([skill, level]) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="skill-item">
                    <span>${skill}</span>
                    <div class="skill-bar">
                        <div class="skill-progress" data-level="${level}"></div>
                    </div>
                    <span class="skill-percent">${level}%</span>
                </div>
            `;
            skillsSection.appendChild(li);
        });

        // Animate skill bars
        setTimeout(() => {
            document.querySelectorAll('.skill-progress').forEach(bar => {
                const level = bar.getAttribute('data-level');
                bar.style.width = level + '%';
            });
        }, 1000);
    }

    // Interactive project cards with hover effects
    const projectsSection = document.querySelector('.projects ul');
    if (projectsSection) {
        const projects = [
            { name: 'My Website', url: 'https://github.com/licnex/licnex', desc: 'Portfolio website with modern design' },
            { name: 'Sprong', url: 'https://github.com/licnex/sprong', desc: 'Pong-like game for Sprig console' },
            { name: 'Line Follower', url: 'https://github.com/licnex/Line-Follower', desc: 'Arduino-based line following robot' }
        ];

        // Using spread operator to clone and modify projects array
        const enhancedProjects = [...projects].map(project => ({
            ...project, // Spread the original project properties
            id: Math.random().toString(36).substr(2, 9)
        }));

        projectsSection.innerHTML = '';
        enhancedProjects.forEach(project => {
            const li = document.createElement('li');
            li.className = 'project-card';
            li.innerHTML = `
                <h4>${project.name}</h4>
                <p>${project.desc}</p>
                <a href="${project.url}" target="_blank">View Project →</a>
            `;
            projectsSection.appendChild(li);
        });
    }

    // Floating particles animation
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(0, 255, 0, 0.7);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
        `;

        const startX = Math.random() * window.innerWidth;
        const startY = window.innerHeight + 10;
        const endY = -10;
        const duration = Math.random() * 3000 + 2000;

        particle.style.left = startX + 'px';
        particle.style.top = startY + 'px';

        document.body.appendChild(particle);

        particle.animate([
            { transform: 'translateY(0px)', opacity: 0 },
            { transform: 'translateY(-50px)', opacity: 1 },
            { transform: `translateY(${endY - startY}px)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'linear'
        }).onfinish = () => particle.remove();
    }

    // Create particles periodically
    setInterval(createParticle, 300);

    // Contact form interactivity
    const contactSection = document.querySelector('.contact');
    if (contactSection) {
        const form = document.createElement('form');
        form.className = 'contact-form';
        form.innerHTML = `
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
        `;

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(form);
            const data = [...formData.entries()]; // Using spread on FormData entries

            alert('Thank you for your message! (This is a demo)');
            form.reset();
        });

        contactSection.appendChild(form);
    }
});
