import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Lending } from "./domain-model/lending.model";

@Injectable({ providedIn: 'root' })
export class LendingStoreService {

    private lendingSource = new BehaviorSubject<Array<Lending>>([
        { id: '1', idBook: '1', idStudent: '1', lendingDate: new Date(), status: true },
        { id: '2', idBook: '2', idStudent: '2', lendingDate: new Date(), status: true },
        { id: '3', idBook: '3', idStudent: '3', lendingDate: new Date(), status: false },
        { id: '4', idBook: '3', idStudent: '4', lendingDate: new Date(), status: false },
        { id: '5', idBook: '5', idStudent: '5', lendingDate: new Date(), status: true }
    ]);

    currentLending = this.lendingSource.asObservable();

    constructor(){}

    changeLending(lending: Array<Lending>){
        
        this.lendingSource.next(lending);
    }
}