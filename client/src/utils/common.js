import moment from 'moment';

export const getRandomElementOfArray = array => array[Math.floor(Math.random() * array.length)];

export const getRandomInteger = (min, max) => Math.floor(min + (Math.random() * ((max - min) + 1)));

// dateString should have a YYYY-MM-DD format (1992-05-20)
export const getAgeByBirthdate = (dateString) => {
  const birthday = new Date(dateString);
  const lifeTime = Date.now() - birthday.getTime();
  const ageDate = new Date(lifeTime);

  return Math.abs(ageDate.getFullYear() - 1970);
};

export const getDuration = (start, end) => {
  const duration = moment.duration(moment(end).diff(moment(start)));
  const years = duration.years();
  const months = duration.months();

  if (years) {
    if (months) {
      const yrs = years > 1 ? `${years} yrs` : `${years} yr`;
      const mos = months > 1 ? `${months} mos` : `${months} mo`;

      return `${yrs}, ${mos}`;
    }

    return years > 1 ? `${years} years` : `${years} year`;
  } else if (months) {
    return months > 1 ? `${months} months` : `${months} month`;
  }

  return 'Less than a month';
};
