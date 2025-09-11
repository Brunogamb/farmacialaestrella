// carrusel

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.slide-track');
    if (!track) return;

    let isHovered = false;
    let isVisible = true;

    function updateAnimationState() {
        if (!isVisible || isHovered) {
            track.style.animationPlayState = 'paused';
        } else {
            track.style.animationPlayState = 'running';
        }
    }

    track.addEventListener('mouseenter', () => {
        isHovered = true;
        updateAnimationState();
    });
    track.addEventListener('mouseleave', () => {
        isHovered = false;
        updateAnimationState();
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                isVisible = entry.isIntersecting;
                updateAnimationState();
            });
        },
        { threshold: 0.1 }
    );
    observer.observe(track);

    updateAnimationState();
});

// menu hamburguesa

const btnHamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
        const body = document.body;

        btnHamburger.addEventListener('click', () => {
            const expanded = btnHamburger.getAttribute('aria-expanded') === 'true' || false;
            btnHamburger.setAttribute('aria-expanded', !expanded);
            btnHamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            mobileMenu.setAttribute('aria-hidden', expanded);
            body.classList.toggle('menu-open');
        });

        document.addEventListener('click', (e) => {
            if (mobileMenu.classList.contains('active')) {
                if (!mobileMenu.contains(e.target) && !btnHamburger.contains(e.target)) {
                    btnHamburger.setAttribute('aria-expanded', false);
                    btnHamburger.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    mobileMenu.setAttribute('aria-hidden', true);
                    body.classList.remove('menu-open');
                }
            }
        });