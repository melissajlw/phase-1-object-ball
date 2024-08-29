
const homePlayers = ["Alan Anderson", "Reggie Evans", "Brook Lopez", "Mason Plumlee", "Jason Terry"]
const awayPlayers = ["Jeff Adrien", "Bismak Biyombo", "DeSagna Diop", "Ben Gordon", "Brendan Haywood"]

const homeStats = [[0, 16, 22, 12, 12, 3, 1, 1], 
    [30, 14, 12, 12, 12, 12, 12, 7], 
    [11, 17, 17, 19, 10, 3, 1, 15],
    [1, 19, 26, 12, 6, 3, 8, 5],
    [31, 15, 19, 2, 2, 4, 11, 1]
 ]
const awayStats = [[4, 18, 10, 1, 1, 2, 7, 2],
    [0, 16, 12, 4, 7, 7, 15, 10],
    [2, 14, 24, 12, 12, 4, 5, 5],
    [8, 15, 33, 3, 2, 1, 1, 0],
    [33, 15, 6, 12, 12, 22, 5, 12]
]

// Function gameObject() contains and returns an object nested 
function gameObject()
 {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: createPlayers(homePlayers, homeStats)
        },
        away : { 
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: createPlayers(awayPlayers, awayStats)
        }
    }
 }

function createPlayer(stats) {
    const playerObj = {}
    playerObj["number"] = stats[0]
    playerObj["shoe"] = stats[1]
    playerObj["points"] = stats[2]
    playerObj["rebounds"] = stats[3]
    playerObj["assists"] = stats[4]
    playerObj["steals"] = stats[5]
    playerObj["blocks"] = stats[6]
    playerObj["slamDunks"] = stats[7]
    return playerObj
}

function createPlayers(players, stats) {
    const playersObj = {}
    for (let i = 0; i < players.length; i++) {
        const player = players[i]
        const playerStats = stats[i]
        playersObj[player] = createPlayer(playerStats)
    }
    return playersObj
}

function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
}

function getPlayer(playerName) {
    const players = {...gameObject().home.players, ...gameObject().away.players}
    return players[playerName]
}

// takes in an argument of a player's name and returns the number of points scored for that player.
function numPointsScored(playerName) {
    return getPlayer(playerName)["points"]
}

// takes in an argument of a player's name and returns the shoe size for that player
function shoeSize(playerName) {
    return getPlayer(playerName)["shoe"]
}

// operates on the game object to return an array of the team names
function getTeam(teamName) {
    const team = gameObject().home.teamName == teamName ?
    gameObject().home : gameObject().away
    return team
}

// takes in an argument of the team name and returns an array of that teams colors
function teamColors(teamName) {
    return getTeam(teamName)["colors"]
}

// operates on the game object to return an array of the team names
function teamNames() {
    return [gameObject.home["teamName"], gameObject.away["teamName"]]
}

// takes in an argument of a team name and returns an array of the jersey numbers for that team
function playerNumbers(teamName) {
    const team = getTeam(teamName)
    const jerseyNumbers = []
    for (playerName in team.players) {
        jerseyNumbers.push(team.players[playerName]["number"])
    }
    return jerseyNumbers
}

// takes in an argument of a player's name and returns an object of that player's stats
function playerStats(playerName) {
    return getPlayer(playerName)
}