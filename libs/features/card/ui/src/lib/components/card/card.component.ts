import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getCardStatusBadgeColor, isCardDone } from '@card-triage/features/card/utils';
import {
    Card,
    CARD_STATUSES_FOR_DONE_CARD,
    CARD_STATUSES_FOR_PENDING_OR_REJECTED_CARD,
    CardStatus,
    CardStatusColor
} from '@card-triage/interfaces';

@Component({
    selector: 'card-triage-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
    @Input() public readonly card: Card;

    @Output() public readonly statusChange: EventEmitter<CardStatus> = new EventEmitter<CardStatus>();

    public cardStatuses: ReadonlyArray<CardStatus> = [];

    public ngOnInit(): void {
        this.cardStatuses = isCardDone(this.card) ? CARD_STATUSES_FOR_DONE_CARD : CARD_STATUSES_FOR_PENDING_OR_REJECTED_CARD;
    }

    public getCardStatusBadgeColor(status: CardStatus): CardStatusColor {
        return getCardStatusBadgeColor(status);
    }

    public setStatus(status: CardStatus): void {
        this.statusChange.next(status);
    }
}
