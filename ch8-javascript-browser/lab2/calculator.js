var scopeStatus = { scope_U: 1.0, scope_C: 1.08 };
var attackVector = { AV_N: 0.85, AV_A: 0.62, AV_L: 0.55, AV_P: 0.2 };
var attackComplexity = { AC_L: 0.77, AC_H: 0.44 };
var privilegeRequired = { PR_N: 0.85, PR_L: 0.62, PR_H: 0.27 };
var userInteraction = { UI_N: 0.85, UI_R: 0.62 };
var baseConfidentiality = {
    sens_N: { conf_N: 0.0, conf_L: 0.22, conf_H: 0.56 },
    sens_L: { conf_N: 0.55, conf_L: 0.6, conf_H: 0.75 },
    sens_H: { conf_N: 0.0, conf_L: 0.85, conf_H: 0.95 },
};
var baseIntegrity = {
    health_N: { integ_N: 0.0, integ_L: 0.22, integ_H: 0.56 },
    health_Low: { integ_N: 0.55, integ_L: 0.6, integ_H: 0.75 },
    health_High: { integ_N: 0.85, integ_L: 0.9, integ_H: 0.95 },
};
var baseAvailability = {
    health_N: { avail_N: 0.0, avail_L: 0.22, avail_H: 0.56 },
    health_L: { avail_N: 0.55, avail_L: 0.6, avail_H: 0.65 },
    health_H: { avail_N: 0.85, avail_L: 0.9, avail_H: 0.95 },
};

var getButton = document.getElementsByTagName("input");
for (const button of getButton) {
    addEventListener("click", updateScore);
}
var avID = document.querySelector('input[name="AV"]:checked').id; alert(avID); //test
var acID = document.querySelector('input[name="AC"]:checked').id; alert(acID); //test
var prID = document.querySelector('input[name="PR"]:checked').id; alert(prID); //test
var uiID = document.querySelector('input[name="UI"]:checked').id; alert(uiID); //test
var scopeID = document.querySelector('input[name="scope"]:checked').id; alert(scopeID); //test
var confID = document.querySelector('input[name="conf"]:checked').id; alert(confID); //test
var integID = document.querySelector('input[name="integ"]:checked').id; alert(integID); //test
var availID = document.querySelector('input[name="avail"]:checked').id; alert(availID); //test
var healthID = document.querySelector('input[name="health"]:checked').id; alert(healthID); //test
var sensID = document.querySelector('input[name="sens"]:checked').id; alert(sensID); //test

function updateScore(event) {
    var scoreBase = function () {
        return baseConfidentiality[sensID][confID] +
            baseIntegrity[healthID][integID] +
            baseAvailability[healthID][availID];
    }
    var scoreExploitability = function () {
        return attackVector[avID] *
            attackComplexity[acID] *
            privilegeRequired[prID] *
            userInteraction[uiID];
    }
    var scoreFinal = function () {
        return scopeStatus[scopeID] *
            ((3.326258289 * scoreBase) +
                (1.1 * scoreExploitability));
    }
    var displayScore = Math.round(scoreFinal.toFixed(1));

    var warningID = document.getElementById("warning");
    var scoreID = document.getElementsById("score");
    if (scoreFinal > 0) {
        warningID.innerHTML = (
            <div class="warning" id="warning" display="none">
                Select values for all categories to generate a score
            </div>
        );
        scoreID.textContent = displayScore;
    }
}