function invertString() {
    const input = document.getElementById('inputString').value;
    const output = input.split('').reverse().join('');
    document.getElementById('outputString').innerText = `Cadena invertida: ${output}`;
}

function isPrime() {
    const num = parseInt(document.getElementById('inputPrime').value);
    let isPrime = num > 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    document.getElementById('outputPrime').innerText = isPrime ? `${num} es primo` : `${num} no es primo`;
}

function removeDuplicates() {
    const input = document.getElementById('inputArrayDuplicates').value;
    const arr = input.split(',').map(Number);
    const uniqueArr = [...new Set(arr)];
    document.getElementById('outputArrayDuplicates').innerText = `Arreglo sin duplicados: ${uniqueArr}`;
}

function calculateFactorial() {
    const num = parseInt(document.getElementById('inputFactorial').value);
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    document.getElementById('outputFactorial').innerText = `Factorial de ${num} es ${factorial}`;
}

function countVowels() {
    const input = document.getElementById('inputVowels').value;
    const vowels = input.match(/[aeiou]/gi);
    const count = vowels ? vowels.length : 0;
    document.getElementById('outputVowels').innerText = `Número de vocales: ${count}`;
}

function sumArray() {
    const input = document.getElementById('inputArraySum').value;
    const arr = input.split(',').map(Number);
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    document.getElementById('outputArraySum').innerText = `Suma del arreglo: ${sum}`;
}

function findMax() {
    const input = document.getElementById('inputArrayMax').value;
    const arr = input.split(',').map(Number);
    const max = Math.max(...arr);
    document.getElementById('outputArrayMax').innerText = `Máximo del arreglo: ${max}`;
}
