import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable()
export class ArticleService {

    constructor(private db: AngularFirestore) { }

    getList(): Observable<Article[]> {
        return this.db.collection<Article>('Article').valueChanges();
    }

    add(article: Article): Promise<DocumentReference> {
        return this.db.collection<Article>('Article').add(article);
    }
}