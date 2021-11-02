import moment from "moment";

export const roundedNumber = (numb) => {
  return Math.round((numb + Number.EPSILON) * 100) / 100;
};

export const numberWithSpaces = (x) => {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
};

export const converDate = (date) => moment(date).format("DD/MM/YYYY");

export const setClrBtn = (params) => {
  switch (params) {
    case "SENT":
      return "bg-purple-500";
    case "CANCELLED":
      return "bg-red-500";
    case "PAID":
      return "bg-green-500";
    default:
      return "bg-green-500";
  }
};
