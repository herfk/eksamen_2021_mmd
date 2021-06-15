let myRand;
let life = 3;
let points = 0;

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#game").classList.add("hide");
    document.querySelector("#game_over").classList.add("hide");
    document.querySelector("#game_complete").classList.add("hide");
    document.querySelector(".start_knap").addEventListener("mousedown", startGame);
}

function startGame() {
    console.log("startGame");
    console.log("points")

    document.querySelector("#game").classList.remove("hide");
    document.querySelector(".start_knap").classList.add("hide");
    life;
    points;
    document.querySelector("#liv1").classList.remove("miste_liv");
    document.querySelector("#liv2").classList.remove("miste_liv");
    document.querySelector("#liv3").classList.remove("miste_liv");

    document.querySelector("#monster_container1").classList.add("pos1", "delay1", "speed3");
    document.querySelector("#monster_container2").classList.add("pos2", "delay2", "speed1");
    document.querySelector("#monster_container3").classList.add("pos3", "delay3", "speed4");
    document.querySelector("#monster_container4").classList.add("pos4", "delay3", "speed2");

    //Start flyv-animationer på alle elementer
    document.querySelector("#monster_container1").classList.add("flyv");
    document.querySelector("#monster_container2").classList.add("flyv");
    document.querySelector("#monster_container3").classList.add("flyv");
    document.querySelector("#monster_container4").classList.add("flyv");

    //Lyt efter flyv-animationer er færdig
    document.querySelector("#monster_container1").addEventListener("animationiteration", genstartMonster1);
    document.querySelector("#monster_container2").addEventListener("animationiteration", genstartMonster2);
    document.querySelector("#monster_container3").addEventListener("animationiteration", genstartMonster3);
    document.querySelector("#monster_container4").addEventListener("animationiteration", genstartMonster4);

    //Lyt efter klik på alle elementer
    document.querySelector("#monster_container1").addEventListener("mousedown", clickMonster1);
    document.querySelector("#monster_container2").addEventListener("mousedown", clickMonster2);
    document.querySelector("#monster_container3").addEventListener("mousedown", clickMonster3);
    document.querySelector("#monster_container4").addEventListener("mousedown", clickMonster4);
}

function clickMonster1() {
    console.log("clickMonster1");
    //ryd op, så man ikke kan kilkke på den samme flere gange
    document.querySelector("#monster_container1").removeEventListener("mousedown", clickMonster1);

    //frys (pause), flyv-animationen 
    document.querySelector("#monster_container1").classList.add("frys");

    //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
    document.querySelector("#monster_sprite1").classList.add("forsvind");

    //Lyt efter flyv-animationer er færdig
    document.querySelector("#monster_container1").addEventListener("animationend", genstartMonster1);
}

function genstartMonster1() {
    console.log("genstartMonster1");
    //ryd op, fjern alt er på container og sprite
    document.querySelector("#monster_container1").classList = "";
    document.querySelector("#monster_sprite1").classList = "";

    //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
    document.querySelector("#monster_container1").offsetLeft;

    //sæt variablen lig med et tilfældigt tal mellem 1 og 4
    myRand = Math.floor(Math.random() * 5) + 1;

    //Giv en position til container
    document.querySelector("#monster_container1").classList.add("pos" + myRand);

    document.querySelector("#monster_container1").classList.add("speed1");

    //Start flyv-animationer på element
    document.querySelector("#monster_container1").classList.add("flyv");

    //Lyt efter klik på element
    document.querySelector("#monster_container1").addEventListener("mousedown", clickMonster1);
    points++;

}


function clickMonster2() {
    console.log("clickMonster2");
    //ryd op, så man ikke kan kilkke på den samme flere gange
    document.querySelector("#monster_container2").removeEventListener("mousedown", clickMonster2);

    //frys (pause), flyv-animationen 
    document.querySelector("#monster_container2").classList.add("frys");

    //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
    document.querySelector("#monster_sprite2").classList.add("forsvind");

    //Lyt efter flyv-animationer er færdig
    document.querySelector("#monster_container2").addEventListener("animationend", genstartMonster2);
}

function genstartMonster2() {
    console.log("genstartMonster2");
    //ryd op, fjern alt er på container og sprite
    document.querySelector("#monster_container2").classList = "";
    document.querySelector("#monster_sprite2").classList = "";

    //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
    document.querySelector("#monster_container2").offsetLeft;

    //sæt variablen lig med et tilfældigt tal mellem 1 og 4
    myRand = Math.floor(Math.random() * 5) + 1;

    //Giv en position til container
    document.querySelector("#monster_container2").classList.add("pos" + myRand);

    document.querySelector("#monster_container2").classList.add("speed3");

    //Start flyv-animationer på element
    document.querySelector("#monster_container2").classList.add("flyv");

    //Lyt efter klik på element
    document.querySelector("#monster_container2").addEventListener("mousedown", clickMonster2);
}

function clickMonster3() {
    console.log("clickMonster3");
    //ryd op, så man ikke kan kilkke på den samme flere gange
    document.querySelector("#monster_container3").removeEventListener("mousedown", clickMonster3);

    //frys (pause), flyv-animationen 
    document.querySelector("#monster_container3").classList.add("frys");

    //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
    document.querySelector("#monster_sprite3").classList.add("forsvind");

    //Lyt efter flyv-animationer er færdig
    document.querySelector("#monster_container3").addEventListener("animationend", genstartMonster3);

    document.querySelector("#liv" + life).classList.add("miste_liv");
    life--;

    if (life <= 0) {
        stopSpil();
    }
}

function genstartMonster3() {
    console.log("genstartMonster3");
    //ryd op, fjern alt er på container og sprite
    document.querySelector("#monster_container3").classList = "";
    document.querySelector("#monster_sprite3").classList = "";

    //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
    document.querySelector("#monster_container3").offsetLeft;

    //sæt variablen lig med et tilfældigt tal mellem 1 og 4
    myRand = Math.floor(Math.random() * 5) + 1;

    //Giv en position til container
    document.querySelector("#monster_container3").classList.add("pos" + myRand);

    document.querySelector("#monster_container3").classList.add("speed2");

    //Start flyv-animationer på element
    document.querySelector("#monster_container3").classList.add("flyv");

    //Lyt efter klik på element
    document.querySelector("#monster_container3").addEventListener("mousedown", clickMonster3);
    points++;
}

function clickMonster4() {
    console.log("clickMonster4");
    //ryd op, så man ikke kan kilkke på den samme flere gange
    document.querySelector("#monster_container4").removeEventListener("mousedown", clickMonster4);

    //frys (pause), flyv-animationen 
    document.querySelector("#monster_container4").classList.add("frys");

    //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
    document.querySelector("#monster_sprite4").classList.add("forsvind");

    //Lyt efter flyv-animationer er færdig
    document.querySelector("#monster_container4").addEventListener("animationend", genstartMonster4);


}

function genstartMonster4() {
    console.log("genstartMonster4");
    //ryd op, fjern alt er på container og sprite
    document.querySelector("#monster_container4").classList = "";
    document.querySelector("#monster_sprite4").classList = "";

    //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
    document.querySelector("#monster_container4").offsetLeft;

    //sæt variablen lig med et tilfældigt tal mellem 1 og 4
    myRand = Math.floor(Math.random() * 5) + 1;

    //Giv en position til container
    document.querySelector("#monster_container4").classList.add("pos" + myRand);
    
    document.querySelector("#monster_container4").classList.add("speed4");

    //Start flyv-animationer på element
    document.querySelector("#monster_container4").classList.add("flyv");

    //Lyt efter klik på element
    document.querySelector("#monster_container4").addEventListener("mousedown", clickMonster4);
    points++;
}

function stopSpil() {
    if (points >= 3) {
        gameComplete();
    } else if ((points <= 2) || (life < 1)) {
        gameOver();
    }
}

function gameOver() {
    document.querySelector("#game_over").classList.remove("hide");
    document.querySelector("#game").classList.add("hide");
}

function gameComplete() {
    document.querySelector("#game_complete").classList.remove("hide");
    document.querySelector("#game").classList.add("hide");
}