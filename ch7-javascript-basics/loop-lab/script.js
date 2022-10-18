function drawTriangle(triangleSize) {
    for (let rows = 0; rows < triangleSize; rows++) {
        var symbol = "";
        for (let cols = 0; cols <= rows; cols++) {
            symbol = symbol + "*";
        }
        console.log(symbol);
    }
    // Your solution goes here
}
