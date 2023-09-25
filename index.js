let homeScore = document.getElementById("home_score")
let awayScore = document.getElementById("away_score")

let homeCount = 0
let awayCount = 0

function homeUpOne() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function homeUpTwo() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function homeUpThree() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function awayUpOne() {
    awayCount += 1
    awayScore.textContent = awayCount
}

function awayUpTwo() {
    awayCount += 2
    awayScore.textContent = awayCount
}

function awayUpThree() {
    awayCount += 3
    awayScore.textContent = awayCount
}

function reset() {
    homeCount = 0
    awayCount = 0
    homeScore.textContent = homeCount
    awayScore.textContent = awayCount
}
