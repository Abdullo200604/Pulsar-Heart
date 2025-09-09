# Pulsar-Heart ❤️✨

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A stunning, glowing heart animation built with pure JavaScript and HTML Canvas. This project uses a particle system to create a dynamic and mesmerizing "pulsar" effect in the shape of a heart.

![Pulsar Heart Animation](https://user-images.githubusercontent.com/your-username/your-repo/your-gif.gif) 
*(Suggestion: Record a short GIF of the animation and upload it here)*

**[View Live Demo](https://abdullo200604.github.io/Pulsar-Heart/)** *(After deploying to GitHub Pages, replace this link with your own)*

---

## 🚀 Features

* **Dynamic Particle System:** Thousands of particles moving in a fluid, organic motion.
* **Glowing Pulsar Effect:** Achieved with HTML Canvas's shadow and blending capabilities.
* **Pure JavaScript:** No external libraries or frameworks needed, making it lightweight and fast.
* **Fully Responsive:** The animation adapts perfectly to any screen size.
* **Highly Customizable:** Easily change parameters like particle count, colors, and speed.

## 🏁 Getting Started

To run this project on your local machine, follow these simple steps.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/Pulsar-Heart.git](https://github.com/your-username/Pulsar-Heart.git)
    ```

2.  **Navigate to the directory:**
    ```bash
    cd Pulsar-Heart
    ```
    
3.  **Open the file:**
    Simply open the `index.html` file in your favorite web browser.

## 🎨 Customization

You can easily tweak the animation by changing the values in the `script.js` file:

* **Particle Count:** Change the `particleCount` variable to increase or decrease the density of the heart.
    ```javascript
    const particleCount = 4000; // Try 2000 or 8000
    ```

* **Colors & Glow:** Modify the `rgba` color values to change the hue and opacity of the particles and their glow.
    ```javascript
    ctx.fillStyle = 'rgba(255, 60, 60, 0.7)'; // Particle color
    ctx.shadowColor = 'rgba(255, 0, 0, 1)';   // Glow color
    ```

* **Animation Speed:** Adjust the multiplier for the `time` variable inside the `animate` function to make the animation faster or slower.
    ```javascript
    const time = performance.now() * 0.0005; // Change 0.0005 to 0.001 for faster speed
    ```

## 📜 License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.
