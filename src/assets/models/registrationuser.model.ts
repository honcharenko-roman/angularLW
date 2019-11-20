import { Gender, Pet } from '../enums/enums';

export class RegistrationUser {
    email: string;
    password: string;
    gender: Gender;
    pet: Pet;

    constructor(email: string, password: string, gender: Gender, pet: Pet) {
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.pet = pet;
    }
}
