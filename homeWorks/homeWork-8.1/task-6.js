// Завдання 6: Сортування масивів

// Створіть новий масив на основі вихідного масиву (копіюйте його)
// Відсортуйте створений масив (від меншого до більшого)
// Виведіть обидва масиви в консоль

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const newFilterArray = numbersList.slice().sort((a, b) => a - b);

console.log(`Оригінальний масив: ${numbersList}`);
console.log(`Відсортований масив: ${newFilterArray}`);