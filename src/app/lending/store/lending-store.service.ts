import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Lending } from "../domain-model/lending.model";

interface LendingStore {
    [key: string]: Lending;
}

@Injectable({ providedIn: 'root' })
export class LendingStoreService {
    private lendings: LendingStore={
        '0': { id: '0', idBook: '0', idStudent: '0', lendingDate: new Date(), status: true },
        '1': { id: '1', idBook: '1', idStudent: '1', lendingDate: new Date(), status: true },
        '2': { id: '2', idBook: '2', idStudent: '2', lendingDate: new Date(), status: false },
        '3': { id: '3', idBook: '3', idStudent: '3', lendingDate: new Date(), status: false },
        '4': { id: '4', idBook: '4', idStudent: '4', lendingDate: new Date(), status: true }
    }

    getLending(): Array<Lending>{
        return Object.values(this.lendings);
    }

    addLending(newLending: Lending): Lending{
        newLending.status=true;
        this.lendings[this.generateKey(newLending)] = newLending;
        alert('Dodano wypożyczenie');
        return newLending;
    }

    updateLending(idLending: string, newLending: Lending): Lending{
        this.lendings[idLending] = newLending;
        alert('Zaktualizowano wypożyczenie');
        return newLending;
    }

    deleteLending(idLending: string): void{
        const newLendings: LendingStore = {};
        Object.values(this.lendings)
            .filter(lending => lending.id !== idLending)
            .forEach(lending => {
                newLendings[this.generateKey(lending)] = lending;
            })
        this.lendings = newLendings;
    }

    changeLendingStatus(lending: Lending): Lending{
        lending.status = !lending.status;
        return lending;
    }

    checkBookIfLent(bookId: string): boolean {
        return  Object.values(this.lendings)
                .filter(lending => lending.idBook === bookId)
                .find(lend => lend.status) ? true : false;
    }
    
    private generateKey(book: Lending): string {
        return Object.values(book).join('-');
    }
}