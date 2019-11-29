// функция возвращающая случайное целое число в дапазоне от мин до макс
export const rndInRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
