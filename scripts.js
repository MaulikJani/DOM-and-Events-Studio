// Write your JavaScript code here.
// Remember to pay attention to page loading!


function init () {
    takeOff = document.getElementById("takeoff");
    flightStatus = document.getElementById("flightStatus");
    shuttleBackground = document.getElementById("shuttleBackground");
    spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    landing = document.getElementById("landing");
    missionAbort = document.getElementById("missionAbort");
    rocket = document.getElementById("rocket")
    upButton = document.getElementById("up");
    downButton = document.getElementById("down");
    rightButton = document.getElementById("right");
    leftButton = document.getElementById("left");
    

    takeOff.addEventListener("click", (event)=>{
       let confirmValue = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(confirmValue){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = 10000;
        }
    });
  
    
    
    landing.addEventListener("click", (event)=>{
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = 0;
         
     });

     

     missionAbort.addEventListener("click", (event)=>{
        let confirmValue = window.confirm("Confirm that you want to abort the mission.");
         if(confirmValue){
             flightStatus.innerHTML = "Mission aborted.";
             shuttleBackground.style.backgroundColor = 'green';
             spaceShuttleHeight.innerHTML = 0;
         }
     });

     upButton.addEventListener("click", (event)=>{
        rocket.style.bottom = `${rocket.offsetTop - 10}px`;
        event.preventDefault();
        spaceShuttleHeight.innerHTML = "";
        spaceShuttleHeight.innerHTML += 10000;

     });

     downButton.addEventListener("click", (event)=>{
        rocket.style.bottom = `${img.offsetTop + 10}px`;
        event.preventDefault();
        spaceShuttleHeight.innerHTML -= 10000;
    });

    rightButton.addEventListener("click", (event)=>{
        rocket.style.right = `${img.offsetLeft + 10}px`;
        event.preventDefault();
    });

    leftButton.addEventListener("click", (event)=>{
        leftNum -= 10;
        rocket.style.marginLeft = leftNum + 'px';
        event.preventDefault();
    });

}

window.onload = init;
