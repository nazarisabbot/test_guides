const capitalize = (str) => {
  if (str === "") {
    return "";
  }

  const [firstChar, ...restChar] = str;
  return `${firstChar.toUpperCase()}${restChar.join("")}`;
};

export default capitalize;
