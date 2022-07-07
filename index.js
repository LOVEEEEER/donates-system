import "./index.css";
import createNewDonate from "./utils/createNewDonate";
import totalAmountUpdate from "./utils/totalAmountUpdate";

class Donate {
  constructor(form, donatesContainer, totalAmount) {
    this.form = form;
    this.donatesContainer = donatesContainer;
    this.totalAmount = totalAmount;
  }

  render() {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      createNewDonate(event, this.donatesContainer);
      totalAmountUpdate(event, totalAmount);
      event.target.amount.value = "";
    });
  }
}

const donateForm = document.querySelector(".donate-form");
const donatesContainer = document.querySelector(".donates-container__donates");
const totalAmount = document.querySelector("#total-amount");

const donate = new Donate(donateForm, donatesContainer, totalAmount);
donate.render();
