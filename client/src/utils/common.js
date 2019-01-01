export const getRandomElementOfArray = array => array[Math.floor(Math.random() * array.length)];

export const getRandomInteger = (min, max) => Math.floor(min + (Math.random() * ((max - min) + 1)));

// dateString should have a YYYY-MM-DD format (1992-05-20)
export const getAgeByBirthdate = (dateString) => {
  const birthday = new Date(dateString);
  const lifeTime = Date.now() - birthday.getTime();
  const ageDate = new Date(lifeTime);

  return Math.abs(ageDate.getFullYear() - 1970);
};
