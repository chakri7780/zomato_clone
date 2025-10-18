document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature');

    features.forEach((feature, index) => {
        feature.style.opacity = 0;
        feature.style.transform = 'translateY(20px)';
        setTimeout(() => {
            feature.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            feature.style.opacity = 1;
            feature.style.transform = 'translateY(0)';
        }, index * 200);
    });

    const input = document.querySelector('input');
    input.addEventListener('focus', () => {
        input.style.boxShadow = '0 0 10px #e0b3ff';
    });
    input.addEventListener('blur', () => {
        input.style.boxShadow = 'none';
    });
});
