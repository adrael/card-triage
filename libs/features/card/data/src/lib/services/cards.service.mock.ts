import { Injectable } from '@angular/core';
import { Card, Cards, CardStatus } from '@card-triage/interfaces';
import { Observable, of } from 'rxjs';

import { ICardService } from './card.service.interface';

@Injectable()
export class CardsServiceMock implements ICardService {
    public fetchCards(): Observable<Cards> {
        const card: Card = {
            arrhythmias: ['AFib', 'AV Block', 'Pause', 'PSVC', 'PVC'],
            created_date: '2020-03-10T13:14:59+0000',
            id: 0,
            patient_name: 'Bob',
            status: CardStatus.PENDING
        };

        return of([card]);
    }
}
