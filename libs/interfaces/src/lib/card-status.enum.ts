export const enum CardStatus {
    DONE = 'DONE',
    PENDING = 'PENDING',
    REJECTED = 'REJECTED'
}

export const CARD_STATUSES: ReadonlyArray<CardStatus> = [
    CardStatus.DONE,
    CardStatus.PENDING,
    CardStatus.REJECTED
];

export const CARD_STATUSES_FOR_DONE_CARD: ReadonlyArray<CardStatus> = [
    CardStatus.PENDING,
    CardStatus.REJECTED
];

export const CARD_STATUSES_FOR_PENDING_OR_REJECTED_CARD: ReadonlyArray<CardStatus> = [CardStatus.DONE];
