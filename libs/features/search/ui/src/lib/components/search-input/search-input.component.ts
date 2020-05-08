import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'card-triage-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {
    private readonly _destroyed$: Subject<void> = new Subject<void>();
    private readonly _queryChangeHandler$: Subject<string> = new Subject<string>();

    @Output() public readonly queryChange: EventEmitter<string> = new EventEmitter<string>();

    public query: string = '';

    public ngOnInit(): void {
        this._queryChangeHandler$
            .pipe(
                takeUntil(this._destroyed$),
                distinctUntilChanged(),
                debounceTime(500)
            )
            .subscribe((query: string) => this.queryChange.next(query));
    }

    public ngOnDestroy(): void {
        this._destroyed$.next();
        this._destroyed$.complete();
    }

    public onQueryChange(query: string): void {
        this.query = query;
        this._queryChangeHandler$.next(query.trim());
    }
}
