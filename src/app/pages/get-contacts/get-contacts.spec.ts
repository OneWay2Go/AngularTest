import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetContacts } from './get-contacts';

describe('GetContacts', () => {
  let component: GetContacts;
  let fixture: ComponentFixture<GetContacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetContacts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetContacts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
