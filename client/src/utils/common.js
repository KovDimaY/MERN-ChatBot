export const getRandomElementOfArray = array => array[Math.floor(Math.random() * array.length)];
export const getRandomInteger = (min, max) => Math.floor(min + (Math.random() * ((max - min) + 1)));
