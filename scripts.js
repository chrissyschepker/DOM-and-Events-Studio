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


function clickTakeOffButton(){
let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
if (response) {
    document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
    document.getElementById("shuttleBackground").style = "background-color: blue";
    document.getElementById("spaceShuttleHeight").innerHTML =+ 10000;
}
}


function clickLandingButton(){
    let response = window.alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById("statusReport").innerHTML = "The shuttle has landed."
    document.getElementById("shuttleBackground").style = "background-color: green";
    document.getElementById("spaceShuttleHeight").innerHTML = "0";
}


function clickMissionAbortButton(){
let response = window.confirm("Confirm that you want to abort the mission.");
if (response){
    document.getElementById("flightStatus").innerHTML = "Mission aborted.";
    document.getElementById("shuttleBackground").style = "background-color: green";
    document.getElementById("spaceShuttleHeight").innerHTML = 0;
    rocket.style.top = "250 px";
    rocket.style.left = "0px";
}
}

function clickLeftButton(){
    let left = parseInt(rocket.style.left);
    if (rocket.style.left !== "-230px") {
        rocket.style.left = (left-10)+ "px";
        console.log(rocket.style.left);
    }
}

function clickRightButton(){
    let right = parseInt(rocket.style.right);
    if (rocket.style.right !== "230px") {
        rocket.style.left = (left +10) + "px";
        console.log(rocket.style.left);
    }
}

function clickUpButton(){
    let top = parseInt(rocket.style.top);
    if (rocket.style.top !== "0px") {
        rocket.style.top = (top-10) + "px";
        altitude += 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = altitude;
        console.log(rocket.style.top);
    }
}

function clickDownButton(){
    let top = parseInt(rocket.style.top);
    if (rocket.style.top !== "250px"){
        rocket.style.top = (top+10) + "px";
        altitide -= 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = altitude;
        console.log(rocket.style.top);
    }
}
    


takeOffButton.addEventListener("click", clickTakeOffButton);
landingButton.addEventListener("click", clickLandingButton);
missionAbortButton.addEventListener("click", clickMissionAbortButton);
leftButton.addEventListener("click",clickLeftButton);
rightButton.addEventListener("click", clickRightButton);
upButton.addEventListener("click", clickUpButton);
downButton.addEventListener("click", clickDownButton);

}

// Remember to pay attention to page loading!
window.addEventListener("load", init);