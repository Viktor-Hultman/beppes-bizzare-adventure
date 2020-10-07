
//A class to create the scenes.
class sceneBuilder {
    constructor(title, description, options) {
        this.title = title;
        this.description = description;
        this.options = options;
    }
}

//Selection of common html elements
const sceneTitle = document.querySelector("#scene-title");
const sceneDesc = document.querySelector("#scene-description");
const sceneOpt = document.querySelectorAll(".option");


//Creation of each scene, follow the format "new sceneBuilder("Title of scene", "Description of the scene", ["Button 1", "Button2", "Button 3", "Button 4"]).
//If a scene should only have ex. 2 options: fill in the first two and set empty strings for the others like this ["Button 1", "Button 2", "", ""].
//All scenes are put in an array which is selectet in the actions() function below to choose scene by calling the changeScene() function.
const scenes =
    [   new sceneBuilder("Start of the school year", "You are seated in your new classroom for the first time with your new classmates, the teacher is going through some important information about your education. What do you do?", ["Listen to the information", "Try to make some friends", "Play with your cellphone", ""]),
        new sceneBuilder("play with your cellphone", "You pick up your cellphone and start playing angry birds", ["you turn off the volume", "you put the volume to the max", "you start texting your girlfriend", "browsing reddit"]),
        new sceneBuilder("Making Friends","You decide to make some friends. Which one do you want do be friend? Filip seems to ber very smart. Jepser seems to be very to be very strong. Viktor seems charismatic. Kevin probably has a rich dad.", ["Filip", "Jesper", "Viktor", "Kevin"])
    ];


//Stats that should be shown on screen
let stats = {
    money: 10,
    intelligence: 10,
    strength: 10,
    charm: 10
};

//All the choices, what they do and which scene they lead to.
function actions(choice) {
    //Switch statement that checks which choice was made
    switch (choice) {
        case "moneyBackground":
            //When the "money" choice is made the following is run
            stats.money += 10
            console.log(`You now have ${stats.money} monies!`);
            //The argument selects which scene to continue to. Ex. changeScene(0) selects the first scene in the "scenes" array.
            changeScene(0)
            break

        case "intelligenceBackground":
            stats.intelligence += 10
            console.log(`You are now ${stats.intelligence} smort!`);

            changeScene(0)
            break

        case "strengthBackground":
            stats.strength += 10
            console.log(`You are now ${stats.strength} stronk!`);

            changeScene(0)
            break

        case "charmingBackground":
            stats.charm += 10
            console.log(`You are now ${stats.charm} charming!`);

            changeScene(0)
            break
        case "increaseIntelligence":
            stats.intelligence += 1;
            console.log("you are now smarter");
            changeScene(1);

        case "makeFriends":
            stats.charm += 1;
            console.log("You decide to make some friends");
            changeScene(2)

        default:
            console.log(`${choice} is not an action!`);
    }

}

//Targets the button with the id="button1" and gives it an event listener
button1 = document.getElementById("button1")
button1.addEventListener("click", () => {
    //Checks the value of button with the id="button1" 
    switch (sceneOpt[0].value) {
        //Each case represents the value of the button and calls actions() above with the corresponding argument 
        case "Rich boi":
            actions("moneyBackground")
            break

        case "kill":
            actions("kill")
    }
})

button2 = document.getElementById("button2")
button2.addEventListener("click", () => {
    switch (sceneOpt[1].value) {

        case "Smart boi":
            actions("intelligenceBackground")

        case "Try to make some friends":
            actions("makeFriends")
    }

})

button3 = document.getElementById("button3")
button3.addEventListener("click", () => {
    switch (sceneOpt[2].value) {

        case "Strong boi":
            actions("strengthBackground");
            break;
        case "Play with your cellphone":
            actions("increaseIntelligence");
            break;
    }
})

button4 = document.getElementById("button4")
button4.addEventListener("click", () => {
    switch (sceneOpt[3].value) {

        case "Charming boi":
            actions("charmingBackground")
    }
})


//Function for changing to new scene.
const changeScene = (sceneName) => {

    //Checks which scene array is chosen.
    const scene = scenes[sceneName];
    //Selects which title and description should be displayed.
    sceneTitle.innerText = scene.title
    sceneDesc.innerText = scene.description
    //Loops through the button arrays and passes the strings of the corresponding scene as the innerText to each button.
    for (let i = 0; i < sceneOpt.length; i++) {
        sceneOpt[i].innerText = scene.options[i];
    }
    //Gives every button the same value as its innerText.
    sceneOpt.forEach((button) => {
        button.style.display = "initial";
        button.value = button.innerText;
        console.log(button)
        //Every button that does not have an innerText is hidden.
        if (button.innerText == "") {
            button.style.display = "none";
        }
    })
};
