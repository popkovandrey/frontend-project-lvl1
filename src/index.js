// функция возвращающая случайное целое число в дапазоне от мин до макс
const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export default getRandomInRange;
