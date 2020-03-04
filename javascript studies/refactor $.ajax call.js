//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
//  Javascript:                                                                                 //
//  A. The following code suffers from a known condition called “Pyramid of Doom”: If we were   //
//  to chain more server calls together, then the PlayerDetailsController.showTeammatesClick    //
//  method would go too deep and become very unstable. This doesn’t allow for a good way to     //
//  handle error, or application state, if we were to react to each call in particular.         //
//  Tip: Check what $.ajax returns and its supported methods/hooks                              //
//                                                                                              //
//  Refactor the code to use promises. Some Acceptance Criteria on the new code:                //
//                                                                                              //
//  ●  Keep the object definitions the same as in the example.                                  //
//  ●  Keep the function signatures and interfaces exactly as they are, except for              //
//     getPlayerTeamId and getPlayers, which should not expect the callback parameter.          //
//  ●  Do not use callback functions in any way                                                 //
//  ●  If showTeammatesClick is called, then the playerList must be rendered at some point,     //
//      assuming that we have a stable communication with the server                            //
//      A.2) Extra points for doing A) with async/await                                         //
//      (Please paste below links to your answers)                                              //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////


/*
    var PlayerService = {
    getPlayerTeamId: function (playerId, callback) {
        $.ajax({
            url: "/player/" + playerId + "/team",
            success: function (team) {
                callback(team.id)
            }
        });
    }, 
    getPlayers: function (teamId, callback) {
        $.ajax({
            url: "/team/" + teamId + "/player",
            success: callback
        });
    }
};
var PlayerDetailsController = {
    playerId: 8,
    showTeammatesClick: function () {
        PlayerService.getPlayerTeamId(
            this.playerId, function (teamId) {
                PlayerService.getPlayers(teamId, function (playerList) {
                    // Render playerList
            });
        });
    }
};
*/

var PlayerService = {
    getPlayerTeamId: function (playerId) {
        return $.ajax({
            url: "/player/" + playerId + "/team",
            success: team => {
                team.id
            }
        });
    }, 
    getPlayers: function (teamId) {
        return $.ajax({
            url: "/team/" + teamId + "/player",
            success: playerList => {
                playerList

            }
        });
    }
};
var PlayerDetailsController = {
    playerId: 8,
    showTeammatesClick: async function () {
        const teamId = await PlayerService.getPlayerTeamId( this.playerId )
        const playerList = await PlayerService.getPlayers(teamId) 
        return console.log(playerList) //or whatever.
    }
};
