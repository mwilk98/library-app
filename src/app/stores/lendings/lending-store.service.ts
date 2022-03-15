import { Injectable } from '@angular/core';
import { Lending, LendingStore } from '../../lending/domain-model/lending.model';
@Injectable({ providedIn: 'root' })
export class LendingStoreService {
  private lendings: LendingStore = {
    '0': { id: '0', idBook: '0', idStudent: '0', lendingDate: new Date(), status: true },
    '1': { id: '1', idBook: '1', idStudent: '1', lendingDate: new Date(), status: true },
    '2': { id: '2', idBook: '2', idStudent: '2', lendingDate: new Date(), status: false },
    '3': { id: '3', idBook: '3', idStudent: '3', lendingDate: new Date(), status: false },
    '4': { id: '4', idBook: '4', idStudent: '4', lendingDate: new Date(), status: true }
    }
    
    getLending(lendingId: string): Lending {
        const lendingObj = Object.values(this.lendings).find((lending) => lending.id === lendingId);
        if(lendingObj === undefined){
            throw new Error(`Nie znaleziono wypożyczenia o podanym id: ${lendingId}`);
        }
        return lendingObj;
    }

    getLendings(): Array<Lending> {
        return Object.values(this.lendings);
    }

    addLending(newLending: Lending): Lending {
        newLending.status = true;
        this.lendings[this.generateKey(newLending)] = newLending;
        return newLending;
    }

    updateLending(idLending: string, newLending: Lending): Lending {
        this.lendings[idLending] = newLending;
        return newLending;
    }

    deleteLending(idLending: string): void {
        const newLendings: LendingStore = {};
        Object.values(this.lendings)
        .filter((lending) => lending.id !== idLending)
        .forEach((lending) => {
            newLendings[this.generateKey(lending)] = lending;
        });
        this.lendings = newLendings;
    }

    private generateKey(book: Lending): string {
        return Object.values(book).join('-');
    }
}
