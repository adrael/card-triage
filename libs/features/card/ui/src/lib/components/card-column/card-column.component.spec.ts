import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardColumnComponent } from './card-column.component';

describe('CardColumnComponent', () => {
    let component: CardColumnComponent;
    let fixture: ComponentFixture<CardColumnComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [CardColumnComponent]
        });

        fixture = TestBed.createComponent(CardColumnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
