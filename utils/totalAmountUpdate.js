const totalAmountUpdate = (event, totalAmount) => {
  const { target } = event;
  const inputValue = Number(target.amount.value);
  const totalAmountInNumber = Number(totalAmount.textContent.split("$")[0]);
  const totalAmountUpdate = totalAmountInNumber + inputValue;
  totalAmount.textContent = `${totalAmountUpdate}$`;
};

export default totalAmountUpdate;
