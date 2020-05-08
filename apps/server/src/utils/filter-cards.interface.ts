import { Card, Cards } from '@card-triage/interfaces';

export const filterCards = (cards: Cards, query: string): Cards => {
    const _query = query.toLowerCase();

    return cards.filter((card: Card) => {
        if (card.patient_name.toLowerCase().includes(_query)) {
            return true;
        }

        if (
            card.id
                .toString(10)
                .toLowerCase()
                .includes(_query)
        ) {
            return true;
        }

        if (card.status.toLowerCase().includes(_query)) {
            return true;
        }

        return !!card.arrhythmias.find((arrhythmia: string) => arrhythmia.toLowerCase().includes(_query));
    });
};
