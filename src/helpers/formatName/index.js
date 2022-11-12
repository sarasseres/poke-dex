const formatName = (str) => {
  const string = str.split('-');
  const upperString = string.map(item => item.charAt(0).toUpperCase() + item.slice(1));
  return upperString.join(' ');
};

export default formatName;