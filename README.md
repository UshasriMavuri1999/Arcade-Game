# Classic Arcade Game Clone Project
Arcade game set the goal of player to reach other grass Side without Hitting into any of the bug enemies. This project has basic game functionality but covers advanced Object-Oriented JavaScript concepts and HTML5 Canvas.

## Table of Contents

-   [Instructions](#instructions)
-   [How to Run](#howtorun)
-   [Tools used in this game](#toolsusedinthisgame)
-   [How I built the Game](#howibuiltthegame)
-   [ How it Works](#howitworks)
-   [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

 The repository contains `css`, `images`, and `js` folders, as well as an `index.html`and a `README.md` file.
* The `css` folder contains a `style.css` file which need not to edit
* The `images` folder contains the png image files, which are used when displaying the game. The images for the player and enemy character are going to be loaded from this folder.
* The `js` folder also contains the app engine needed to run the game and a `resources.js` file.  Need not to edit these files.
* Opening `index.html` should load the game
* The `README.md` file should contain instructions on how to load and play the game.
Once you have downloaded the files, you will have to edit `app.js`to build the game.


## How to Run!
You can download the starter code through either:
-   Arcade Game project repository on GitHUB: <https://github.com/udacity/frontend-nanodegree-arcade-game>
-   The Zipped File : <https://github.com/udacity/frontend-nanodegree-arcade-game/archive/master.zip>

## Tools used in this game!
Object-Oriented JavaScript Scopes, closures and prototype chains. The 'this' keyword Superclasses and subclasses HTML5 Canvas

## How I built the Game!
Inside the app.js file, I implemented the Player and the Enemy classes, using Object-Oriented JavaScript. Part of the code for the Enemy is provided in scratch code, and I completed the following:
The Enemy function, which initiates the Enemy by:
* Loading the image by setting this.sprite to the appropriate image in the image folder
* Setting the Enemy initial location
* Setting the Enemy speed
* The update method for the Enemy
* Updates the Enemy location
* Handles collision with the Player

Also implemented the Player class, and use the Enemy class as an example on how to get started. At minimum I implement the following:
The Player function, which initiates the Player by:
* Loading the image by setting this.sprite to the appropriate image in the image folder
* Setting the Player initial location
* The update method for the Player
* The render method for the Player
* The handleInput method, which should receive user input, allowedKeys  and move the player according to that input.
###### In particular:
* Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down.
* Recall that the player cannot move off screen
* If the player reaches the water the game should be reset by moving the player back to the initial location by adding reset Player method to that handle

Also implemented the Player and Enemy, it instantiated them by:
* Creating a new Player object
* Creating several new Enemies objects and placing them in an array called allEnemies

## How it Works!
* In this game you have a Player and Enemies (Bugs).
* The goal of the player is to reach the water, without colliding into any one of the enemies.
* The player can move left, right, up and down.
* The enemies move in varying speeds on the paved block portion of the scene.
* Once a the player collides with an enemy, the game is reset and the player moves back to the start square.
* Once the player reaches the water the game is won.

![Image](https://github.com/UshasriMavuri1999/Arcade-Game/blob/master/images/screenshot.png)


## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
