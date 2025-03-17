// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Button click animations
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        // Position the ripple
        const rect = this.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        
        // Add ripple to button
        this.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => ripple.remove(), 600);
    });
});

// Feature cards animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .category-card, .resource-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// Form handling
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');

if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirmPassword').value,
            educationLevel: document.getElementById('educationLevel').value,
            fieldOfStudy: document.getElementById('fieldOfStudy').value,
            gpa: document.getElementById('gpa').value,
            graduationYear: document.getElementById('graduationYear').value,
            terms: document.getElementById('terms').checked
        };
        
        // Validate password match
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // Validate GPA if provided
        if (formData.gpa && (formData.gpa < 0 || formData.gpa > 4.0)) {
            alert('Please enter a valid GPA between 0 and 4.0');
            return;
        }
        
        // Validate graduation year
        const currentYear = new Date().getFullYear();
        if (formData.graduationYear < currentYear || formData.graduationYear > currentYear + 6) {
            alert('Please enter a valid graduation year');
            return;
        }
        
        // Here you would typically send the data to your backend
        console.log('Sign up data:', formData);
        alert('Account created successfully! Welcome to ScholarshipNet!');
        window.location.href = 'login.html';
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            remember: document.getElementById('remember').checked
        };
        
        // Here you would typically send the data to your backend
        console.log('Login data:', formData);
        alert('Logged in successfully! Redirecting to dashboard...');
        window.location.href = 'index.html';
    });
}

// Add ripple effect styles dynamically
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.7);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add styles for auth features list
const authFeaturesStyle = document.createElement('style');
authFeaturesStyle.textContent = `
    .auth-features {
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid #e2e8f0;
    }

    .auth-features h3 {
        font-size: 1.1rem;
        color: #1e293b;
        margin-bottom: 1rem;
    }

    .auth-features ul {
        list-style: none;
        padding: 0;
    }

    .auth-features li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #666;
        margin-bottom: 0.5rem;
    }

    .auth-features i {
        color: #2563eb;
    }
`;
document.head.appendChild(authFeaturesStyle); 