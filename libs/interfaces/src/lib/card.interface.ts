import { CardStatus } from './card-status.enum';

export interface Card {
    id: number;
    status: CardStatus;
    arrhythmias: string[];
    created_date: string;
    patient_name: string;
}
