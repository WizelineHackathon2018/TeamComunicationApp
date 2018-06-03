import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/article';

@Injectable()
export class UsersService {
    constructor(private db: AngularFirestore) { }

    getList(): Observable<User[]> {
        return this.db.collection<User>('User').valueChanges();
    }

    add(user: User): Promise<DocumentReference> {
        return this.db.collection<User>('User').add(user);
    }

    currentUser(): User {
        return {
            id: 1,
            name: 'Juan Perez',
            username: 'jperez',
            image: ''
        };
    }
}