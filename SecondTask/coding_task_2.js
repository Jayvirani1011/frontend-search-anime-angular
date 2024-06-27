function generateFibonacci(limit) {
    if (limit <= 0) {
        console.log("Please provide a positive integer.");
        return;
    }

    let fibonacciSequence = [0, 1];
    let currentFibonacci = 1;

    while (currentFibonacci <= limit) {
        fibonacciSequence.push(currentFibonacci);
        currentFibonacci = fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2];
    }

    console.log(fibonacciSequence);
}


generateFibonacci(1);
generateFibonacci(2);
generateFibonacci(5);
generateFibonacci(10);