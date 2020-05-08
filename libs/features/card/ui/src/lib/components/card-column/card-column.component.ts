import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Card, Cards, CardStatus, CardStatusChange } from '@card-triage/interfaces';

@Component({
    selector: 'card-triage-card-column',
    templateUrl: './card-column.component.html',
    styleUrls: ['./card-column.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardColumnComponent {
    @Input() public readonly cards: Cards = [];
    @Input() public readonly columnTitle: string = '';

    @Output() public readonly cardStatusChange: EventEmitter<CardStatusChange> = new EventEmitter<CardStatusChange>();

    public onStatusChange(card: Card, status: CardStatus): void {
        this.cardStatusChange.next({ card, status });
    }
}
