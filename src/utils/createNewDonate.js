import changeDateFormat from "./changeDateFormat";
const createNewDonate = (event, donatesContainer) => {
  const donateItem = document.createElement("div");
  donateItem.className = "donate-item";
  donateItem.textContent = changeDateFormat(new Date());

  const donateSum = document.createElement("b");
  donateSum.textContent = ` - ${event.target.amount.value}$`;
  donateItem.append(donateSum);
  donatesContainer.prepend(donateItem);
};

export default createNewDonate;
