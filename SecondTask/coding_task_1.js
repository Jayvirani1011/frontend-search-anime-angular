

function printPattern(rows) {
    if (rows < 1) {
        return console.log("Please choose your lucky number from 1")
    }
    const n = rows * 2 - 1;
    const midpoint = Math.floor(n / 2) + 1;
    const alphabet = Array.from({ length: rows - 1 }, (_, i) => String.fromCharCode(65 + i % 26));
    let pattern = ""
    // Upper part of the full diamond
    for (let i = 1; i <= midpoint; i++) {
        // Print spaces
        for (let j = 1; j <= midpoint - i; j++) {
            pattern += "  ";
        }
        // Print odd integers
        for (let j = 1; j <= 2 * i - 1; j += 2) {
            pattern += j + " ";
        }
        // Print alphabet
        if (i > 1) {
            for (let j = 1; j < i; j++) {
                pattern += alphabet[j - 1] + " "
            }
        }
        pattern += "\n"
    }
    // Lower part of the full diamond
    for (let i = 1; i <= midpoint - 1; i++) {
        // Print spaces
        for (let j = 1; j <= i; j++) {
            pattern += "  ";
        }
        // Print odd integers
        for (let j = 1; j <= n - 2 * i; j += 2) {
            pattern += j + " ";
        }
        // print alphabet
        for (let j = 0; j < alphabet.length - i; j++) {
            pattern += alphabet[j] + " ";
        }
        pattern += "\n"
    }
    console.log(pattern)
}
printPattern(-3);
printPattern(3);
printPattern(5);
