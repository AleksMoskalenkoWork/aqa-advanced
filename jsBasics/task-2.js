// Завдання 2: Конкатенація радків та шаблонний рядок

// Створіть дві змінні, які містять імена двох осіб. Використовуючи конкатенацію рядків, створіть новий рядок, який містить вітання для обох осіб. Виведіть результат в консоль. Потім використайте шаблонний рядок для створення того ж вітання. Виведіть результат в консоль.

const person1 = 'Олександр';
const person2 = 'Лілія';

// конкатенації
const greetingConcat = 'Привіт, ' + person1 + ' і ' + person2 + '!';
console.log('Вітання з конкатенацією:', greetingConcat);

// шаблон
const greetingTemplate = `Привіт, ${person1} і ${person2}!`;
console.log('Вітання з шаблонним рядком:', greetingTemplate);