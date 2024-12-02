let input = document.getElementById("input");
let nums = [];
let operators = [];
let input_num = "";
let counter_interctions = 0;
let result = 0;
function fullTheInput(key) {
  if (key < 10 || key == ".") {
    input.value += key;
    input_num += key;
  } else if (key == "=") {
    nums.push(Number(input_num));
    result = calc();
    input.value = result;
    operators = [];

    input_num = "";
    //eval
  } else {
    input.value = key;
    console.log(input_num + " test");
    nums.push(Number(input_num));
    operators.push(key);
    input_num = "";
  }
}
function calc() {
  if (result != 0) nums.splice(1, 1); //fix some problem when im already have an result it add a zero to index 1 this two lines cut it
  result = nums[0];
  for (let j = 0; j < operators.length; j++) {
    switch (operators[j]) {
      case "/":
        result /= nums[j + 1];
        break;
      case "*":
        result *= nums[j + 1];
        break;
      case "-":
        result -= nums[j + 1];
        break;
      case "+":
        result += nums[j + 1];
        break;

      default:
        break;
    }
  }
  console.log(nums);
  if (result != 0) {
    nums = [result];
  }
  return result;
}
function clearInput() {
  input.value = "";
  nums = [];
  input_num = "";
  counter_interctions = 0;
  result = 0;
}
