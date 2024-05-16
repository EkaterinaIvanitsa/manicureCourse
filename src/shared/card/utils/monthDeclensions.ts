export const monthDeclensions = (month: number) => {
  if (month === 1) {
    return "1 месяц";
  }
  if (month >= 2 && month <= 4) {
    return `${month} месяца`;
  }

  return `${month} месяцев`;
};
