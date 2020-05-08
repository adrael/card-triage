import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CardsService } from '@card-triage/features/card/data';
import { Cards, CardStatusChange } from '@card-triage/interfaces';
import { Observable } from 'rxjs';

@Component({
    selector: 'card-triage-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
    public readonly doneCards: Observable<Cards> = this._cardsService.getCardsDone();
    public readonly pendingOrRejectedCards: Observable<Cards> = this._cardsService.getCardsPendingOrRejected();

    constructor(private readonly _cardsService: CardsService) {
    }

    public ngOnInit(): void {
        this._cardsService.fetchCards();
    }

    public onCardStatusChange(cardStatusChange: CardStatusChange): void {
        this._cardsService.changeCardStatus(cardStatusChange);
    }

    public onQueryChange(query: string): void {
        if (!query.length) {
            this._cardsService.fetchCards();
            return;
        }

        this._cardsService.fetchFilteredCards(query);
    }
}
