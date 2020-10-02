let stats = {
    money: 10,
    intelligence: 10,
    strength: 10,
    charm: 10
}

function backgroundSelect(stat) {
    switch (stat) {
        case "money":
            stats.money = stats.money + 10
            console.log(`You now have ${stats.money} monies!`);
            break

        case "intelligence":
            stats.intelligence = stats.intelligence + 10
            console.log(`You are now ${stats.intelligence} smort!`);
            break

        case "strength":
            stats.strength = stats.strength + 10
            console.log(`You are now ${stats.strength} stronk!`);
            break

        case "charm":
            stats.charm = stats.charm + 10
            console.log(`You are now ${stats.charm} charming!`);
            break

        default:
            console.log(`${stat} is not a stat!`);
    }

}


richButton = document.getElementById("rich")
richButton.addEventListener("click", () => {
    backgroundSelect("money")
})

smartButton = document.getElementById("smart")
smartButton.addEventListener("click", () => {
    backgroundSelect("intelligence")
})

strongButton = document.getElementById("strong")
strongButton.addEventListener("click", () => {
    backgroundSelect("strength")
})

charmingButton = document.getElementById("charming")
charmingButton.addEventListener("click", () => {
    backgroundSelect("charm")
})