export const TextTypes = {
  lowercase: (text) => text.toLowerCase(),
  uppercase: (text) => text.toUpperCase(),
  reverse: (text) => text.split('').reverse().join(''),
  inverseType: (text) => {
    const response = [...text].map((letter) => {
      if (letter === letter.toUpperCase()) return letter.toLowerCase();
      if (letter === letter.toLowerCase()) return letter.toUpperCase();

      return letter;
    });
    return response.join('');
  },
};
