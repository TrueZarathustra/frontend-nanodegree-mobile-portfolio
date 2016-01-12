## Website Performance Optimization portfolio project

### How to open a page
To open an online portfolio open this [Link](http://truezarathustra.github.io/frontend-nanodegree-mobile-portfolio/)

### Part 1: Optimize PageSpeed Insights score for index.html
To Optimize PageSpeed:
* add async mode to most .js files
* load CSS using media queries (where possible)
* inline CSS for small CSS
* optimize pictures

### Part 2: Optimize Frames per Second in pizza.html
To achieve 60 fps:
* refactored updatePositions() in /views/js/main.js to avoid unneccesary calculations
* refactored changePizzaSizes() in /views/js/main.js to optimize resizing process

