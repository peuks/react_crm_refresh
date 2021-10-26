export const roundedNumber = (numb) => {
  return Math.round((numb + Number.EPSILON) * 100) / 100;
};

export const numberWithSpaces = (x) => {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
};
