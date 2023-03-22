import bcrypt from 'bcrypt'

export default class Register {
    constructor (email, name, password) {
        //Singletone
        if (Register.exists)
            return Register.instance;

        this.email = email;
        this.name = name;
        this.saltRounds = 10
        this.hash;

        bcrypt.hash(password, this.saltRounds).then(function(hash) {
            // Store hash in your password DB.
            // this.hash = hash;
            console.log(hash);
        });


        //Singletone
        Register.exists = true;
        Register.instance = this;
        return this;
    }

    registerMessage = () => {
        return 'Register succesfuly';
    }
}