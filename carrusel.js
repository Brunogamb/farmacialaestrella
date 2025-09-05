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