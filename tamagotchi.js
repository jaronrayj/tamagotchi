var inquirer = require("inquirer");

function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function () {
        if (this.hungry) {
            console.log("That was yummy!");
            this.hungry = false;
        } else {
            console.log("No thanks, I'm full");
        }
    };
    this.sleep = function () {
        if (this.sleepy) {
            console.log("Zzzzzzzzzzzz");
            this.increaseAge();
            this.sleepy = false;
        } else {
            console.log("No Way! I'm not tired");
        }
    };
    this.play = function () {
        if (this.bored) {
            console.log("Yay! Let's play!");
            this.bored = false;
        } else {
            console.log("Not right now. Later?");
        }
    };
    this.increaseAge = function () {
        this.age += 1;
        console.log("Happy birthday to me! I am " + this.age + " old!");
    };
}

var teletubby = new DigitalPal();

teletubby.outside = false;
teletubby.uhOh = function () {
    console.log("Uh Oh!");
};

teletubby.goOutside = function () {
    if (!outside) {
        console.log("Yay! I love the outdoors!");
        outside = true;
    } else {
        console.log("We're already outside though....");
    }
};

teletubby.goInside = function () {
    if (outside) {
        console.log("Do we have to? Fine...");
        outside = false;
    } else {
        console.log("I'm already inside...");
    }
};


var cat = new DigitalPal();

cat.houseCondition = 100;

cat.meow = function () {
    console.log("Meow! Meow!");
};

cat.destroyFurniture = function () {
    if (cat.houseCondition > 0) {
        cat.houseCondition -= 25;
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
        cat.bored = false;
        cat.sleepy = true;
    } else{
        console.log("You should buy some more furniture.... inside isn't as fun.");
    }
};

cat.buyNewFurniture = function () {
    cat.houseCondition += 50;
    console.log("Are you sure about that?");
};


function catAction() {

    inquirer.prompt([{
        type: "list",
        choices: ["feed", "sleep", "play", "let inside", "replace furniture"],
        name: "activity"
    }]).then(function (res) {

        switch (res.activity) {
            case "feed":
                cat.feed();
                catAction();
                break;

            case "sleep":
                cat.sleep();
                catAction();
                break;

            case "play":
                cat.play();
                catAction();
                break;

            case "let inside":
                cat.destroyFurniture();
                catAction();
                break;

            case "replace furniture":
                cat.buyNewFurniture();
                catAction();
                break;

            default:
                catAction();
                break;
        }

    });
}

catAction();