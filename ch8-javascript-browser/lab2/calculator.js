var scopeStatus = { Unchanged: 1.0, Changed: 1.08 };
var attackVector = { Network: 0.85, "Adjacent Network": 0.62, Local: 0.55, Physical: 0.2 };
var attackComplexity = { Low: 0.77, High: 0.44 };
var privilegeRequired = { None: 0.85, Low: 0.62, High: 0.27 };
var userInteraction = { None: 0.85, Required: 0.62 };
var baseConfidentiality = {
    None: { None: 0.0, Low: 0.22, High: 0.56 },
    Low: { None: 0.55, Low: 0.6, High: 0.75 },
    High: { None: 0.0, Low: 0.85, High: 0.95 },
};
var baseIntegrity = {
    None: { None: 0.0, Low: 0.22, High: 0.56 },
    Low: { None: 0.55, Low: 0.6, High: 0.75 },
    High: { None: 0.85, Low: 0.9, High: 0.95 },
};
var baseAvailability = {
    None: { None: 0.0, Low: 0.22, High: 0.56 },
    Low: { None: 0.55, Low: 0.6, High: 0.65 },
    High: { None: 0.85, Low: 0.9, High: 0.95 },
};

var getButton = document.getElementsByTagName("input");
for (const button of getButton) {
    addEventListener("click", updateScore);
}
var avID = document.querySelector('input[name="AV"]:checked').id;
var acID = document.querySelector('input[name="AC"]:checked').id;
var prID = document.querySelector('input[name="PR"]:checked').id;
var uiID = document.querySelector('input[name="UI"]:checked').id;
var scopeID = document.querySelector('input[name="scope"]:checked').id;
var confID = document.querySelector('input[name="conf"]:checked').id;
var integID = document.querySelector('input[name="integ"]:checked').id;
var availID = document.querySelector('input[name="avail"]:checked').id;
var healthID = document.querySelector('input[name="health"]:checked').id;
var sensID = document.querySelector('input[name="sens"]:checked').id;

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