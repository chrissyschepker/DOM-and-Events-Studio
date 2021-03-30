// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const rocket = document.getElementById("rocket");
    let altitude = parseInt(document.getElementById("spaceShuttleHeight").innerHTML) 
    
    
    
        function clickTakeoffButton() {
            let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
            if (response) {
                document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
                document.getElementById("shuttleBackground").style = "background-color: blue";
                document.getElementById("spaceShuttleHeight").innerHTML =+ 10000;
            }
        }
    
        function clickLandingButton() {
            window.alert("The shuttle is landing. Landing gear engaged.");
            document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
            document.getElementById("shuttleBackground").style = "background-color: green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
            rocket.style.top = "250px";
            rocket.style.left = "0px";
    
        }
    
        function clickMissionAbortButton() {
            let response = window.confirm("Confirm that you want to abort the mission.");
            if (response) {
                document.getElementById("flightStatus").innerHTML ="Mission aborted.";
                document.getElementById("shuttleBackground").style = "background-color: green";
                document.getElementById("spaceShuttleHeight").innerHTML = 0;
                rocket.style.top = "250px";
                rocket.style.left = "0px";
            }
        }
    
        function clickLeftButton() {
            let left = parseInt(rocket.style.left);
            if (rocket.style.left !== "-230px") {
            rocket.style.left = (left-10)+"px";
            console.log(rocket.style.left)
            }
        }
    
        function clickRightButton() {
            let left = parseInt(rocket.style.left);
            if (rocket.style.left !== "230px") {
            rocket.style.left = (left+10)+"px";
            console.log(rocket.style.left)
            }
        }
    
        function clickUpButton() {
            let top = parseInt(rocket.style.top);
            if (rocket.style.top !== "0px") {
            rocket.style.top = (top-10)+"px";   
            altitude += 10000;
            document.getElementById("spaceShuttleHeight").innerHTML = altitude;
            console.log(rocket.style.top)
            }
        }
    
        function clickDownButton() {
            let top = parseInt(rocket.style.top);
            if (rocket.style.top !== "250px") {
            rocket.style.top = (top+10)+"px";   
            altitude -= 10000;
            document.getElementById("spaceShuttleHeight").innerHTML = altitude;
            console.log(rocket.style.top)
            }
        }
    
        takeoffButton.addEventListener("click", clickTakeoffButton);
        landingButton.addEventListener("click", clickLandingButton);
        missionAbortButton.addEventListener("click", clickMissionAbortButton);
        leftButton.addEventListener("click", clickLeftButton);
        rightButton.addEventListener("click", clickRightButton);
        upButton.addEventListener("click", clickUpButton);
        downButton.addEventListener("click", clickDownButton);
    }
    
    window.addEventListener("load", init);