const roundingNumber = (n) => {
  if(n.toString().length === 1) {
    return `00${n}`;
  } else if(n.toString().length === 2) {
    return `0${n}`;
  } else {
    return n;
  };
};

export default roundingNumber;