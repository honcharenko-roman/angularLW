import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RegistrationUser } from 'src/assets/models/registrationuser.model';
import { Gender, Pet } from 'src/assets/enums/enums';

@Injectable()
export class RegistrationService {

    users: RegistrationUser[] = [
        new RegistrationUser('email', 'pass', Gender.Male, Pet.Cat),
        new RegistrationUser('email', 'pass', Gender.Male, Pet.Cat),
        new RegistrationUser('email', 'pass', Gender.Male, Pet.Cat),
        new RegistrationUser('email', 'pass', Gender.Male, Pet.Cat)
    ];

    constructor() {
    }

    getUsers(): Observable<RegistrationUser[]> {
        return of(this.users);
    }

    addUser(user: RegistrationUser): void {
        this.users.push(user);
    }
}
