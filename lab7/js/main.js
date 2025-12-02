// Завдання 1: Ромб із цифр
let n = parseInt(prompt("Введіть розмір ромба (n):"), 10);
let romb = "";

for (let i = 1; i <= n; i++) {
    romb += " ".repeat(n - i) + i.toString().repeat(2 * i - 1) + "\n";
}
for (let i = n - 1; i >= 1; i--) {
    romb += " ".repeat(n - i) + i.toString().repeat(2 * i - 1) + "\n";
}

console.log(romb);

// Завдання 2: числовий ряд і сума
let n2 = parseInt(prompt("Введіть n для ряду S=1+1/2+...+1/n:"), 10);
let sum = 0;
let series = "";

for (let i = 1; i <= n2; i++) {
    series += "1/" + i + (i < n2 ? " + " : "");
    sum += 1 / i;
}

console.log(series);
console.log("Сума ряду:", sum);

// Завдання 3: гра "вгадай число"
let secret = Math.floor(Math.random() * 100) + 1;
let guess;
do {
    guess = parseInt(prompt("Вгадайте число від 1 до 100:"), 10);
    if (guess < secret) alert("Більше!");
    else if (guess > secret) alert("Менше!");
} while (guess !== secret);

alert("Вітаю! Ви вгадали число: " + secret);
