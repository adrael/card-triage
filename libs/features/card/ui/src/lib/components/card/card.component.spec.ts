import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardStatus } from '@card-triage/interfaces';

import { CardComponent } from './card.component';

const CARD_MOCK = {
    arrhythmias: ['AFib', 'AV Block', 'Pause', 'PSVC', 'PVC'],
    created_date: '2020-03-10T13:14:59+0000',
    id: 0,
    patient_name: 'Bob',
    status: CardStatus.PENDING
};

describe('CardComponent', () => {
    let component: CardComponent;
    let fixture: ComponentFixture<CardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CardComponent]
        });

        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
        component.card = CARD_MOCK;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
