# Project plan
## Components
  - Scoreboard
    - Current Score
    - Best Score
  - 

## General Ideas

  - ### Algorithm that employs the Fisher-Yates shuffle to randomly move dom elements about

    ```js
      let element = document.querySelector('example');
      for (let i = element.children.length; i >= 0; i--) {
        element.appendChild(element.children[Math.random() * i | 0]);
      }
    ```
