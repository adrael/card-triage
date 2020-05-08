import { Cards, CardStatusChange } from '@card-triage/interfaces';
import { Observable } from 'rxjs';

export interface ICardService {
    fetchCards(): void;

    fetchFilteredCards(query: string): void;

    getCardsDone(): Observable<Cards>;

    getCardsPendingOrRejected(): Observable<Cards>;

    changeCardStatus(cardStatusChange: CardStatusChange): void;
}
