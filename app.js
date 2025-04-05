function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add smooth scrolling to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        scrollToSection(sectionId);
    });
});

// Handle resume button click
document.getElementById('resume-btn').addEventListener('click', function(e) {
    e.preventDefault();
    window.open('Resume_.pdf', '_blank');
});

// Project Navigation for Mobile
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const prevBtn = document.getElementById('prevProject');
    const nextBtn = document.getElementById('nextProject');
    let currentIndex = 0;

    function updateProjects() {
        projectCards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === currentIndex) {
                card.classList.add('active');
            }
        });
    }

    // Show first project by default on mobile
    if (window.innerWidth <= 768) {
        updateProjects();
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateProjects();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < projectCards.length - 1) {
            currentIndex++;
            updateProjects();
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            updateProjects();
        } else {
            projectCards.forEach(card => {
                card.classList.remove('active');
                card.style.display = '';
            });
        }
    });
});
