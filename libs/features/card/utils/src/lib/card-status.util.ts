import { Card, CardStatus, CardStatusColor } from '@card-triage/interfaces';

export const isCardDone = ({ status }: Card): boolean => status === CardStatus.DONE;

export const isCardPendingOrRejected = ({ status }: Card): boolean => status !== CardStatus.DONE;

export const getCardStatusBadgeColor = (status: CardStatus): CardStatusColor => {
    switch (status) {
        case CardStatus.DONE:
            return CardStatusColor.GREEN;

        case CardStatus.PENDING:
            return CardStatusColor.ORANGE;

        case CardStatus.REJECTED:
            return CardStatusColor.RED;
    }
};
