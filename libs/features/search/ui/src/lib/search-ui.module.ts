import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [SearchInputComponent],
    declarations: [SearchInputComponent]
})
export class SearchUiModule {}
