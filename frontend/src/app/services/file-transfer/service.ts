import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
    private subjects: any = {};

    public register(subject: string){
        this.subjects[subject] = new Subject<any>();
    }

    public getSubject(subject: string) {
        return this.subjects[subject];
    }

}