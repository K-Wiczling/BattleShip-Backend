// const bcrypt = require("bcrypt");

export default class Register {
    constructor (email, name, password) {
        //Singletone
        if (Register.exists)
            return Register.instance;

        this.email = email;
        this.name = name;
        this.password = password;

        //Singletone
        Register.exists = true;
        Register.instance = this;
        return this;
    }

    registerMessage = () => {
        return 'Register succesfuly';
    }
}