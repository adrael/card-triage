import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { CardColumnComponent } from './components/card-column/card-column.component';

@NgModule({
    imports: [CommonModule],
    exports: [CardComponent, CardColumnComponent],
    declarations: [CardComponent, CardColumnComponent]
})
export class CardUiModule {
}
