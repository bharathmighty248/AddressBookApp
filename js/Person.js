class Person {
    _id;
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }

    _name;
    get name() {
        return this._name;
    }
    set name(value) {
        const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(value)){
            this._name = value;
        }else {
            throw "Name is incorrect";
        }
    }

    _phoneNumber;
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(value) {
        this._phoneNumber = value;
    }

    _address;
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }

    _city;
    get city() {
        return this._city;
    }
    set city(value) {
        this._city = value;
    }

    _state;
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }

    _zipCode;
    get zipCode() {
        return this._zipCode;
    }
    set zipCode(value) {
        this._zipCode = value;
    }

    toString() {
        return 'name=' + this._name + ', phone number=' + this._phoneNumber + ', address=' + this._address + ', city=' + this._city + ', state=' + this._state + ', zip code=' + this._zipCode;
    }
}