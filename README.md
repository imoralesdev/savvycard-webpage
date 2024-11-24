# SavvyCard Webpage

SavvyCard® is a powerful Progressive Web App (PWA) designed to maximize the benefits of your real estate account and enhance prospect conversion. More than just a digital business card, it reimagines traditional card exchanges, offering an effortless way to capture contact information and convert prospects into valuable business opportunities.

[Live website here](https://www.savvycard.com/)

## Table of Contents
* [Images](#images)
* [Getting Started](#getting-started)
* [Technology Stack](#technology-stack)

## Images

![example 1](https://raw.githubusercontent.com/imoralescs/images/refs/heads/main/savvycard/Screenshot%20from%202024-11-23%2019-55-07.png)
![example 2](https://raw.githubusercontent.com/imoralescs/images/refs/heads/main/savvycard/Screenshot%20from%202024-11-23%2019-55-49.png)
![example 3](https://raw.githubusercontent.com/imoralescs/images/refs/heads/main/savvycard/Screenshot%20from%202024-11-23%2019-57-02.png)
![example 4](https://raw.githubusercontent.com/imoralescs/images/refs/heads/main/savvycard/Screenshot%20from%202024-11-23%2019-57-24.png)

## Getting Started

### Run the project with Nodemon
```npm run dev```

### Build any change on CSS and JavaScript
```npm run build```

## Technology Stack

### Core Dependencies:
- Webpack (5.58.1): A modern JavaScript bundler used to optimize and bundle application assets for efficient delivery.
- CSS Loader (6.4.0) & PostCSS Loader (6.1.1): Enable modular and optimized CSS integration for styling components.
- Mini-CSS-Extract-Plugin (2.4.2): Extracts CSS into separate files for better performance and maintainability.
- Sass (1.42.1) & Sass Loader (12.1.0): Provide advanced styling capabilities using the Sass preprocessor.
- Pug (3.0.2): A high-performance template engine for rendering dynamic HTML views efficiently.

### Asset Optimization:
- Image Minimizer Webpack Plugin (2.2.0): Compresses images to improve loading speed without sacrificing quality.
- Terser Webpack Plugin (5.2.4): Optimizes and minifies JavaScript for faster execution.

### Utilities:
- Copy Webpack Plugin (9.0.1): Simplifies the process of copying static assets into the build directory.
- Raw Loader (4.0.2) & GLSLify Loader (2.0.0): Enable integration and optimization of raw text and GLSL shaders within the project.

### Development Tools:
- Nodemon (2.0.13): Monitors and automatically restarts the application during development for improved productivity.
- Morgan (1.10.0): A middleware for logging HTTP requests, aiding in debugging and analytics.
