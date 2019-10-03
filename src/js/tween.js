

TweenMax.from(".logo, .bottom-left, .bottom-right", 2.5, {
    y: 30,
    opacity: 0,
    ease: Expo.easeInOut,
});

TweenMax.staggerFrom(".link", 0.5, {
    y: 30,
    opacity: 0,
    delay: 1.5,
}, 0.2);