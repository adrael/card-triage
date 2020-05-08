import { Card, CardStatus } from '@card-triage/interfaces';

export interface CardStatusChange {
    card: Card;
    status: CardStatus;
}
