document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    
    ctaButton.addEventListener('click', () => {
        ctaButton.textContent = 'Sparked!';
        ctaButton.style.background = 'linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%)';
        ctaButton.style.border = 'none';
        
        setTimeout(() => {
            ctaButton.textContent = 'Get Started';
            ctaButton.style.background = 'transparent';
            ctaButton.style.border = '1px solid rgba(255, 255, 255, 0.2)';
        }, 2000);
    });
});
