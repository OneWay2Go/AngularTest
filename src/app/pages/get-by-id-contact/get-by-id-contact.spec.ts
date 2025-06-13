import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdContact } from './get-by-id-contact';

describe('GetByIdContact', () => {
  let component: GetByIdContact;
  let fixture: ComponentFixture<GetByIdContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetByIdContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetByIdContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
