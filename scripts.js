// Write your JavaScript code here.
function init(){
    const missionAbortButton = document.getElementById("missionAbort");
    const takeOffButton = document.getElementById("takeoffButton");
    const landingButton = document.getElementById("landing");
    const paragraph = document.getElementById("flightStatus");
    const upButton = document.getElementById("Up")
    const downButton = document.getElementById("Down");
    const leftButton = document.getElementById("Left");
    const rightButton = document.getElementById("Right");
    const rocket = document.getElementById("rocket");
    let altitude = parseInt(document.getElementById("spaceShuttleHeight").innerHTML);
}

function clickTakeOffButton(){
let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
if (response) {
    document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
    document.getElementById("shuttleBackground").style = "background-color: blue";
    //add code to increase shuttle height by 10,000 miles
    document.getElementById("spaceShuttleHeight").innerHTML =+ 10000;
}
}
takeOffButton.addEventListener("click", clickTakeOffButton);

function clickLandingButton(){
    let response = window.alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById("statusReport").innerHTML = "The shuttle has landed."
    document.getElementById("shuttleBackground").style = "background-color: green";
    document.getElementById("spaceShuttleHeight").innerHTML = "0";
}

// Remember to pay attention to page loading!
window.addEventListener("load", init);