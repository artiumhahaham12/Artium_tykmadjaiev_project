import Action from "./Action.js";
import ActionManager from "./ActionManager.js";
let Action_tracker = new ActionManager();
window.addAction = function addAction() {
  //type_act,description,amount
  let type_act = document.getElementById("type").value;
  let description = document.getElementById("description").value;
  let amount = +document.getElementById("amount").value;
  if (
    amount > 0 &&
    description.length > 0 &&
    (type_act == "income" || "expense")
  ) {
    Action_tracker.addAction(new Action(type_act, description, amount));
    showActions();
  }
};
window.deleteAction = function deleteAction(id) {
  if (confirm("are you sure")) {
    Action_tracker.deleteAction(id);
    showActions();
  }
};
/* window.updateAction = function updateAction(id) {
  console.log(type_act);
  console.log(description);
  console.log(amount);
}; */

function showActions() {
  document.querySelector("#table-body").innerHTML = "";
  for (let action of Action_tracker.actions) {
    if (action.type_act == "income") {
      console.log(1);

      document.querySelector("#table-body").innerHTML += `
                <tr>
                    
                    <td class="text-success">${action.description}</td>
                    <td  class="text-success">+${action.amount}</td>
                    <button class="text-success bg-light border-0">
                        <td class="text-success">${action.date}</td>
                        <td class="text-success">${action.time}</td>
                    <td class="text-end">
                        <button class="text-success bg-light border-0" type="button" data-bs-toggle="modal" data-bs-target="#edit-form" onclick="formSet(${action.id})">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </button>
                    </td>
                    <td class="text-end">
                        <button class="text-success bg-light border-0">
                            <i class="fa-solid fa-trash-can" onclick="deleteAction(${action.id})"></i>
                        </button></td>
                </tr>
            `;
    } else if (action.type_act == "expense") {
      document.querySelector("#table-body").innerHTML += `
            <tr>
            
                    <td class="text-danger">${action.description}</td>
                    <td class="text-danger">-${action.amount}</td>
                    <td class="text-danger">${action.date}</td>
                    <td class="text-danger">${action.time}</td>
                    <button class="text-danger bg-light border-0">
                    <td class="text-end">
                    <button class="text-danger bg-light border-0"  type="button" data-bs-toggle="modal" data-bs-target="#edit-form" onclick="formSet(${action.id})">
                    <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    </td>
                    <td class="text-end">
                    <button class="text-danger bg-light border-0">
                            <i class="fa-solid fa-trash-can" onclick="deleteAction(${action.id})"></i>
                            </button></td>
                </tr>
                `;
    }
    Action_tracker;
    document.getElementById("sum").innerText = Action_tracker.balance;
  }
  document.getElementById("description").value = "";
  document.getElementById("amount").value = "";
}
window.formSet = function formSet(id) {
  /* document.getElementById("type-edit").value =
      Action_tracker.actions[id].type_act; */
    //set the form edit numbers
  document.getElementById("type-edit").value =
    Action_tracker.actions[Action_tracker.indexFindById(id)].type_act;
  document.getElementById("description-edit").value =
    Action_tracker.actions[Action_tracker.indexFindById(id)].description;
  document.getElementById("amount-edit").value =
        Action_tracker.actions[Action_tracker.indexFindById(id)].amount;
    //onclick set modal button
    document.getElementById("confirm-edit").onclick = function () {
        let type_act = document.getElementById("type-edit").value;
        let description = document.getElementById("description-edit").value;
        let amount = +document.getElementById("amount-edit").value;
        console.log(type_act,description,amount);
        
      Action_tracker.updateAction(id, amount, description, type_act);
      showActions();
    };
    
    
};
showActions()