class ActionManager {
  constructor() {
    this.actions = JSON.parse(localStorage.getItem("actions_list"))||[];
    this.balance = Number(JSON.parse(localStorage.getItem("balance")))||0;
  }
    addAction(action) {
      this.actions.push(action);
      localStorage.setItem("actions_list",JSON.stringify(this.actions))
    this.calcBalance();
  }
  deleteAction(id) {
    this.actions = this.actions.filter((action) => {
      return action.id != id;
    });
      //
    localStorage.setItem("actions_list", JSON.stringify(this.actions));
    this.calcBalance();
  }
  updateAction(id, amount, description , type_act) {
    let index = this.actions.findIndex((action) => {
      return action.id == id;
    });
    
    
    this.actions[index].amount = amount;
    this.actions[index].description = description;
    this.actions[index].type_act = type_act;
      localStorage.setItem("actions_list", JSON.stringify(this.actions));
      
      this.calcBalance()
    }
    indexFindById(id) {
        let index = this.actions.findIndex((action) => {
          return action.id == id;
        });
        return index;
    }
  calcBalance() {
    this.balance = 0;
      for (let action of this.actions) {
          console.log(action.type_act);
          
          if (action.type_act == "income") {
              this.balance += action.amount;
          }
          else {
              this.balance -= action.amount;
          }
      }
  }
}
export default ActionManager;