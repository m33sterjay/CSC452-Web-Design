// given values used to calculate score
var scopeStatus = { scope_U: 1.0, scope_C: 1.08 };
var attackVector = { AV_N: 0.85, AV_A: 0.62, AV_L: 0.55, AV_P: 0.2 };
var attackComplexity = { AC_L: 0.77, AC_H: 0.44 };
var privilegeRequired = { PR_N: 0.85, PR_L: 0.62, PR_H: 0.27 };
var userInteraction = { UI_N: 0.85, UI_R: 0.62 };
var baseConfidentiality = {
    sens_N: { conf_N: 0.0, conf_L: 0.22, conf_H: 0.56 },
    sens_L: { conf_N: 0.0, conf_L: 0.65, conf_H: 0.75 },
    sens_H: { conf_N: 0.0, conf_L: 0.85, conf_H: 0.95 },
};
var baseIntegrity = {
    health_N: { integ_N: 0.0, integ_L: 0.22, integ_H: 0.56 },
    health_L: { integ_N: 0.55, integ_L: 0.6, integ_H: 0.75 },
    health_H: { integ_N: 0.85, integ_L: 0.9, integ_H: 0.95 },
};
var baseAvailability = {
    health_N: { avail_N: 0.0, avail_L: 0.22, avail_H: 0.56 },
    health_L: { avail_N: 0.55, avail_L: 0.6, avail_H: 0.65 },
    health_H: { avail_N: 0.85, avail_L: 0.9, avail_H: 0.95 },
};
// add event listener to each input DOM element
var getButton = document.getElementsByTagName("input");
for (const button of getButton) {
    addEventListener("click", updateScore);
}
// initialize event handler
function updateScore() {
    // check if a button has been checked, if so, assign the ID of that DOM node to a variable
    if (document.querySelector('input[name="AV"]:checked') != null) {
        var avID = document.querySelector('input[name="AV"]:checked').id;
        //alert(avID); //test
    }
    if (document.querySelector('input[name="AC"]:checked') != null) {
        var acID = document.querySelector('input[name="AC"]:checked').id;
        //alert(acID); //test
    }
    if (document.querySelector('input[name="PR"]:checked') != null) {
        var prID = document.querySelector('input[name="PR"]:checked').id;
        //alert(prID); //test
    }
    if (document.querySelector('input[name="UI"]:checked') != null) {
        var uiID = document.querySelector('input[name="UI"]:checked').id;
        //alert(uiID);
    }
    if (document.querySelector('input[name="scope"]:checked') != null) {
        var scopeID = document.querySelector('input[name="scope"]:checked').id;
        //alert(scopeID); //test
    }
    if (document.querySelector('input[name="conf"]:checked') != null) {
        var confID = document.querySelector('input[name="conf"]:checked').id;
        //alert(confID); //test
    }
    if (document.querySelector('input[name="integ"]:checked') != null) {
        var integID = document.querySelector('input[name="integ"]:checked').id;
        //alert(integID); //test
    }
    if (document.querySelector('input[name="avail"]:checked') != null) {
        var availID = document.querySelector('input[name="avail"]:checked').id;
        //alert(availID); //test
    }
    if (document.querySelector('input[name="health"]:checked') != null) {
        var healthID = document.querySelector('input[name="health"]:checked').id;
        //alert(healthID); //test
    }
    if (document.querySelector('input[name="sens"]:checked') != null) {
        var sensID = document.querySelector('input[name="sens"]:checked').id;
        //alert(sensID); //test
    } else;
    // calculate score, passing node ID's to matching object properties to get corresponding values
    if (avID && acID && prID && uiID && scopeID && confID && integID && availID && healthID && sensID) {
        var scoreBase = baseConfidentiality[sensID][confID] + baseIntegrity[healthID][integID] + baseAvailability[healthID][availID];
        scoreBase = Math.round(scoreBase * 100) / 100; //test
        var scoreExploitability = attackVector[avID] * attackComplexity[acID] * privilegeRequired[prID] * userInteraction[uiID];
        /*alert(scoreExploitability),
            alert(attackVector[avID]),
            alert(attackComplexity[acID]),
            alert(privilegeRequired[prID]),
            alert(userInteraction[uiID]);*/
        var scoreFinal = scopeStatus[scopeID] * (3.326258289 * scoreBase + 1.1 * scoreExploitability);
        //alert(scoreFinal), alert(scopeStatus[scopeID]), alert(3.326258289 * scoreBase + 1.1 * scoreExploitability);
        scoreFinal = Math.ceil(scoreFinal * 10) / 10;
        //alert(scoreFinal);
        // round score to nearest integer and to 1 decimal value
        if (scoreFinal > 10) {
            scoreFinal = 10;
            var displayScore = scoreFinal.toFixed(1);
        } else if (scoreFinal < 1) {
            scoreFinal = 0;
            var displayScore = scoreFinal.toFixed(1);
        } else;
        var displayScore = scoreFinal.toFixed(1);
        //alert(displayScore);
        // access DOM nodes for display elements
        var warningID = document.getElementById("warning");
        var scoreID = document.getElementById("score");
        // remove warning box
        warningID.style = "display: none";
        // display score
        scoreID.textContent = displayScore;
    } else;
}
