export const rupiahFormat = (value, noRp) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
  });
  return noRp
    ? formatter.format(value).replace("Rp", "")
    : formatter.format(value);
};
