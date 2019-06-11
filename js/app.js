// Enemies our player must avoid
var Enemy = function(x, y) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.x = x;
  this.y = y;
  this.x1 = x;
  this.y1 = y;
  this.sprite = 'images/enemy-bug.png';

};

// Updating the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

  for (var i = 0; i < allEnemies.length; i++) {
    allEnemies[i].speed = 200;
  }
  //  multiplying any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += this.speed * dt;
  //reset enemy position
  if (this.x >= 500) {
    this.reset();
  }
  //collision functionality
  if (player.x >= this.x - 35 && player.x <= this.x + 35 &&
    player.y >= this.y - 35 && player.y <= this.y + 35) {
    player.x = 200;
    player.y = 400;
    //popup for losing the game
    swal("Sorry!?🙁", "You lose the game.....");
  }
};
// enemy reset function
Enemy.prototype.reset = function() {
  this.x = this.x1;
  this.y = this.y1;
};
// Drawing the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiating  objects.

const allEnemies = [new Enemy(-0, 150), new Enemy(-300, 230), new Enemy(-100, 60), new Enemy(-100, 230), new Enemy(-200, 60)]; // Place all enemy objects in an array called allEnemies
// Placing the player object in a variable called player
//  own player class
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-boy.png';
};
var player = new Player(200, 400);
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function(dt) {

};
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
Player.prototype.handleInput = function(key) {


  if (key == 'left' && this.x > 0) {
    this.x -= 100;
  }

  if (key == 'right' && this.x < 400) {
    this.x += 100;
  }

  if (key == 'up' && this.y > 0) {
    this.y -= 80;
  }

  if (key == 'down' && this.y < 400) {
    this.y += 80;
  }
  if (this.y <= 30) {
    //popup for winning the game

    swal({
      title: "Congratulations!",
      text: "You won the game....😊🎆🎉🎁",
      //icon: "success",
      type: "success",
      confirmButtonColor: "#02ccba",
      confirmButtonText: "Play again!"

    }, function() {
      location.reload();
    })
    this.removeEventListener(event.type, handleInput);
    document.getElementById("attempt").innerHTML = attempt;

  }

};

document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
