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

function getInputs() {
  $.ajax({
    method: "GET",
    url: "/inputs"
  })
    .then(response => {
      render(response);
    })
    .catch(err => {
      console.log("err");
      alert("There was an error finding inputs.");
    });
}

function saveInputs(newInputs) {
  $.ajax({
    method: "POST",
    url: "/inputs",
    data: newInputs
  })
    .then(response => {
      console.log(response);
      getInputs();
    })
    .catch(err => {
      console.log("err");
      alert("There was an error saving inputs.");
    });
}

function render(inputList) {
  console.log("RENDER INPUTS");
  $(".history").empty();

  for (let i = 0; i < inputList.length; i++) {
    const inputItem = inputList[i];

    $(".history").append(`
      <p>${inputItem.valueFirst}: ${inputItem.valueSecond}</p>
    `);
  }
}
