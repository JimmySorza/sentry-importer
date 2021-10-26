const months = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

export const convertStrToDate = (str: string | number) => {
  if (!str) {
    return "";
  }
  const date = new Date(str);
  const now = new Date();

  return `${months[date.getMonth()]} ${date.getDate()}${
    date.getFullYear() === now.getFullYear() ? "" : ` ${date.getFullYear()}`
  }`;
};
