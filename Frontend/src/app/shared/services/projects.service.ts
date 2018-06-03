import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Project } from '../models/article';

@Injectable()
export class ProjectsService {

    constructor(private db: AngularFirestore) { }

    getList(): Observable<Project[]> {
        return this.db.collection<Project>('Project').valueChanges();
    }
}