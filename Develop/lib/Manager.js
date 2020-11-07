// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager{

    constructor(name,id,email,officenumber){
       super(name,id,email);
       this.officenumber = officenumber;
    }

    getRole(){
        return "Manager";
    };

    getOffice(){
        return this.officenumber;
    }
}

modules.export = Manager;
