class Action{
    constructor(type_act,description,amount) {
        this.id = Math.floor(Math.random() * 5000 + 1);
        this.type_act = type_act;
        this.description = description;
        this.amount = amount;
        this.date = new Date().toLocaleDateString();
        this.time = new Date().toLocaleTimeString();
    }
}
export default Action;