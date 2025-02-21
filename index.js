let homeScore = 0;
let guestScore =0;

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

function add1PointHome(){
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function add2PointHome(){
    add1PointHome();
    add1PointHome();
}

function add3PointHome(){
    add2PointHome();
    add1PointHome();
}

function add1PointGuest(){
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function add2PointGuest(){
    add1PointGuest();
    add1PointGuest();
}

function add3PointGuest(){
    add2PointGuest();
    add1PointGuest();
}