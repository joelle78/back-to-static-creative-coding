document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("switch");
    const hamburgerImg = document.getElementById("hamburgerImg");
    const pizzaImg = document.getElementById("pizzaImg");
    const iceCreamImg = document.getElementById("iceCreamImg");
    const friesImg = document.getElementById("friesImg");
    const hotdogImg = document.getElementById("hotdogImg");

    let hamburgerAnimation;
    let pizzaAnimation;
    let iceCreamAnimation;
    let friesAnimation;

    checkbox.addEventListener("change", function () {
        if (this.checked) {
            // Start the GSAP dance animation for hamburger
            hamburgerAnimation = gsap.to(hamburgerImg, {
                yoyo: true,
                repeat: -1,
                duration: 1.5,
                ease: "power2.inOut",
                keyframes: [
                    { translateY: 0 },
                    { translateY: -20, rotate: 10 },
                    { translateY: 0, rotate: -10 },
                    { translateY: -20, rotate: 10 },
                    { translateY: 0 }
                ]
            });

            // Start the GSAP dance animation for pizza
            pizzaAnimation = gsap.to(pizzaImg, {
                yoyo: true,
                repeat: -1,
                duration: 1.5,
                ease: "power2.inOut",
                keyframes: [
                    { translateY: 0, rotate: 0 },
                    { translateY: -30, rotate: 20 },
                    { translateY: 0, rotate: -20 },
                    { translateY: -30, rotate: 20 },
                    { translateY: 0, rotate: 0 }
                ]
            });

            // Start the GSAP up-and-down animation for ice cream
            iceCreamAnimation = gsap.to(iceCreamImg, {
                y: -100,
                ease: "power2.out",
                repeat: -1,
                yoyo: true,
                duration: 1
            });

            // Start the GSAP dance animation for fries
            friesAnimation = gsap.to(friesImg, {
                yoyo: true,
                repeat: -1,
                duration: 3,
                ease: "bounce.out",
                keyframes: [
                    { translateY: 0, rotate: 0, scaleX: 1, scaleY: 1 },
                    { translateY: -30, rotate: 20, scaleX: 1.2, scaleY: 0.8 },
                    { translateY: 0, rotate: -20, scaleX: 0.8, scaleY: 1.2 },
                    { translateY: -30, rotate: 20, scaleX: 1.2, scaleY: 0.8 },
                    { translateY: 0, rotate: 0, scaleX: 1, scaleY: 1 }
                ]
            });

            // Move the hotdog image to the right
            gsap.to(hotdogImg, {
                duration: 3,
                x: "100%",
                ease: "power2.inOut",
            });
        } else {
            // Stop the GSAP animation for hamburger
            if (hamburgerAnimation) {
                hamburgerAnimation.kill();
            }

            // Stop the GSAP animation for pizza
            if (pizzaAnimation) {
                pizzaAnimation.kill();
            }

            // Stop the GSAP up-and-down animation for ice cream
            if (iceCreamAnimation) {
                iceCreamAnimation.kill();
            }

            // Stop the GSAP animation for fries
            if (friesAnimation) {
                friesAnimation.kill();
            }

            // Stop the GSAP animation for hotdog
            gsap.killTweensOf(hotdogImg);
        }
    });
});
