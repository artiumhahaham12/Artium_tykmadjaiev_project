let the_num_is = Math.floor(Math.random() * 10 + 1);
let tourn = 1;
let lose_flag = true;
console.log(the_num_is);
function checkNumber() {
  console.log(1);
  if (tourn <= 5 && lose_flag) {
    let number = +document.getElementById("guess-number").value;
    if (number > 10 || number < 1) {
      document.querySelector(
        "#answer"
      ).innerHTML += `<p>this ia wrong input</p>`;
      tourn--;
    } else if (the_num_is > number) {
      document.querySelector(
        "#answer"
      ).innerHTML += `<p>the ${number} too small <i class="fa-solid fa-xmark d-inline text-danger mx-1"></i></p>`;
    } else if (the_num_is < number) {
      document.querySelector(
        "#answer"
      ).innerHTML += `<p class=''>the ${number} too bigger <i class="fa-solid fa-xmark d-inline text-danger mx-1"></i></p>`;
    } else if (the_num_is === number) {
      document.querySelector(
        "#answer"
      ).innerHTML += `<p class='text-success'>the ${number} is right you succes<i class="fa-solid fa-check text-success mx-1 d-inline"></i></p>`;
      document.getElementById("guess-number").disabled = true;
      document.getElementById("number-input").disabled = true;
      document
        .getElementById("guess-number")
        .classList.add("bg-body-secondary");
      document.getElementById("number-input").classList.add("bg-body-seccess");
      tourn = 6;
    }
    console.log(tourn);
  }
  console.log(lose_flag);
  if (tourn == 5 && lose_flag) {
    document.querySelector(
      "#header"
    ).innerHTML = `<h3 class='text-danger display-6'>you lose! number is ${the_num_is}</h3>`;
    document.getElementById("guess-number").disabled = true;
    document.getElementById("number-input").disabled = true;
    document.getElementById("guess-number").classList.add("bg-body-secondary");
    document.getElementById("number-input").classList.add("bg-body-seccess");
  }
  document.getElementById("guess-number").value = "";

  tourn++;
}
function restart() {
  the_num_is = Math.floor(Math.random() * 10 + 1);
  document.getElementById("answer").innerHTML =
    '<h3 class="display-6 text-info-emphasis" id="header">Check it</h3>';
  tourn = 1;
  lose_flag = true;
  document.getElementById("guess-number").disabled = false;
  document.getElementById("number-input").disabled = false;
  document.getElementById("guess-number").classList.remove("bg-body-secondary");
  document.getElementById("number-input").classList.remove("bg-body-seccess");
  

}