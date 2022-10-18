// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");
// TODO: Compete the function

function parseScores(scoresString) {
    scoresArray = scoresString.split(" ");
    return scoresArray;
}
// TODO: Compete the function
function buildDistributionArray(scoresArray) {
    let countA = 0;
    let countB = 0;
    let countC = 0;
    let countD = 0;
    let countF = 0;

    for (const score of scoresArray) {
        if (score < 60) {
            countF++;
        } else if (score < 70) {
            countD++;
        } else if (score < 80) {
            countC++;
        } else if (score < 90) {
            countB++;
        } else {
            countA++;
        }
    }
    let distributionArray = [countA, countB, countC, countD, countF];
    return distributionArray;
}
// TODO: Compete the function
function setTableContent(userInput) {
    let scoresArray = parseScores(userInput);
    let distributionArray = buildDistributionArray(scoresArray);
    /*for (const element of distributionArray) {
        console.log(element);
    }*/ // test
    let accessFirstRow = document.getElementById("firstRow");
    accessFirstRow.innerHTML = `
        <tr id="firstRow">
        <td><div style="height:${distributionArray[0] * 10}px" class="bar0"></div></td>
        <td><div style="height:${distributionArray[1] * 10}px" class="bar1"></div></td>
        <td><div style="height:${distributionArray[2] * 10}px" class="bar2"></div></td>
        <td><div style="height:${distributionArray[3] * 10}px" class="bar3"></div></td>
        <td><div style="height:${distributionArray[4] * 10}px" class="bar4"></div></td>
        </tr>
    `;
    let accessThirdRow = document.getElementById("thirdRow");
    accessThirdRow.innerHTML = `
        <tr id="thirdRow">
        <td>${distributionArray[0]}</td>
        <td>${distributionArray[1]}</td>
        <td>${distributionArray[2]}</td>
        <td>${distributionArray[3]}</td>
        <td>${distributionArray[4]}</td>
        </tr>
    `;
}
