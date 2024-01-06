const capitalize = (str) => {
  const [firstChar, ...restChar] = str;
  return `${firstChar.toUpperCase()}${restChar.join("")}`;
};

export default capitalize;
