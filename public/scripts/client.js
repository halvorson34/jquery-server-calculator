$(document).ready(init);

function init() {
  console.log("JS");
  $(".js-btn-add").on("click", calcAdd);
  //$(".js-btn-subtract").on("click", calcSubtract);
  //$(".js-btn-multiply").on("click", calcMuliply);
  //$(".js-btn-divide").on("click", calcDivide);
  $(".js-btn-equal").on("click", calcEqual);
  //$(".js-btn-equal").on("click", clearInputs);

  getInputs();
}

function calcEqual(event) {
  event.preventDefault();

  const enteredInputs = {
    valueFirst: $(".inputA").val(),
    valueSecond: $(".inputB").val()
  };

  saveInputs(enteredInputs);

  $(".inputA").val("");
  $(".inputB").val("");
}
