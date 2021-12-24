// .toLowerCase()
// .toUpercase()
// .reverse()
/* const reverse = (text) => {
    return text.split("").reverse().join("");
}

let reversedText = reverse("adam")
console.log(revertsedText) // mada*/

export const textConverter = () => {
  const lowercase = (text) => {
    return text.toLowerCase();
  };

  const uppercase = (text) => {
    return text.toUpperCase();
  };

  const reverse = (text) => {
    return text.split('').reverse().join('');
  };
};
