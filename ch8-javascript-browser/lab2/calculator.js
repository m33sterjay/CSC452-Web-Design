let scopeStatus = { Unchanged: 1.0, Changed: 1.08 };
let scope;

let attackVector = { Network: 0.85, "Adjacent Network": 0.62, Local: 0.55, Physical: 0.2 };
let vector;

let attackComplexity = { Low: 0.77, High: 0.44 };
let complexity;

let privilegeRequired = { None: 0.85, Low: 0.62, High: 0.27 };
let privilege;

let userInteraction = { None: 0.85, Required: 0.62 };
let user;

let sens_conf = {
    None: {
        None: 0.0,
        Low: 0.22,
        High: 0.56,
    },
    Low: {
        None: 0.55,
        Low: 0.6,
        High: 0.75,
    },
    High: {
        None: 0.0,
        Low: 0.85,
        High: 0.95,
    },
};
let conf;
let baseConfidentiality;

let health_integrity = {
    None: {
        None: 0.0,
        Low: 0.22,
        High: 0.56,
    },
    Low: {
        None: 0.55,
        Low: 0.6,
        High: 0.75,
    },
    High: {
        None: 0.85,
        Low: 0.9,
        High: 0.95,
    },
};

let baseIntegrity;

let health_availability = {
    None: {
        None: 0.0,
        Low: 0.22,
        High: 0.56,
    },
    Low: {
        None: 0.55,
        Low: 0.6,
        High: 0.65,
    },
    High: {
        None: 0.85,
        Low: 0.9,
        High: 0.95,
    },
};

let baseAvailability;

let getButton = document.getElementsByTagName("input");
for (const button of getButton) {
    addEventListener("click", updateScore);
    if (button.id === "AV_N" || button.id === "AV_A" || button.id === "AV_L" || button.id === "AV_P") {
        let buttonID = button.id;
        let getLabel = document.getElementsByTagName("label").for;
        if (buttonID == getLabel) {
            vector = attackVector[getLabel.textContent];
        }
    } else if (button.id === "AC_L" || button.id === "AC_H") {
        let buttonID = button.id;
        let getLabel = document.getElementsByTagName("label").for;
        if (buttonID == getLabel) {
            complexity = attackComplexity[getLabel.textContent];
        }
    } else if (button.id === "PR_N" || button.id === "PR_L" || button.id === "PR_H") {
        let buttonID = button.id;
        let getLabel = document.getElementsByTagName("label").for;
        if (buttonID == getLabel) {
            privilege = privilegeRequired[getLabel.textContent];
        }
    } else if (button.id === "UI_N" || button.id === "UI_R") {
        let buttonID = button.id;
        let getLabel = document.getElementsByTagName("label").for;
        if (buttonID == getLabel) {
            user = userInteraction[getLabel.textContent];
        }
    } else if (button.id === "scope_U" || button.id === "scope_C") {
        let buttonID = button.id;
        let getLabel = document.getElementsByTagName("label").for;
        if (buttonID == getLabel) {
            scope = scopeStatus[getLabel.textContent];
        }
    } else if (button.id === "conf_N" || button.id === "conf_L" || button.id === "conf_H") {
        let buttonID = button.id;
        let getLabel = document.getElementsByTagName("label").for;
        if (buttonID == getLabel) {
            conf = getLabel.textContent;
        } if
    }
}

function updateScore(event) {}
