// Resume Script - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    console.log('Resume loaded successfully');
    
    // Animate skill tags on hover
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // Smooth scroll for any anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Print resume functionality
    const printButton = createPrintButton();
    document.body.appendChild(printButton);
});

// Create a print button
function createPrintButton() {
    const button = document.createElement('button');
    button.textContent = '🖨️ Print Resume';
    button.className = 'print-button';
    button.onclick = function() {
        window.print();
    };
    return button;
}

// Add to style.js
const style = document.createElement('style');
style.textContent = `
    .print-button {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: #667eea;
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 50px;
        cursor: pointer;
        font-size: 1em;
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        transition: all 0.3s ease;
        z-index: 1000;
    }

    .print-button:hover {
        background-color: #764ba2;
        transform: scale(1.05);
        box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);
    }

    .print-button:active {
        transform: scale(0.95);
    }

    @media print {
        .print-button {
            display: none;
        }
    }

    .skill-tag.active {
        background-color: #764ba2 !important;
        transform: scale(1.1);
    }
`;
document.head.appendChild(style);

// Fade in animation on page load
window.addEventListener('load', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.animation = `fadeIn 0.6s ease forwards`;
        section.style.animationDelay = `${index * 0.1}s`;
    });
});

// Add fade-in animation to stylesheet
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(animationStyle);
