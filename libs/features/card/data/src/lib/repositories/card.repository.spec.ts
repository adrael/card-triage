import { TestBed } from '@angular/core/testing';

import { CardRepository } from './card.repository';

describe('CardRepository', () => {
    let service: CardRepository;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CardRepository);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
