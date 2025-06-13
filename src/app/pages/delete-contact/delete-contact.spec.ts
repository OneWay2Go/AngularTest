import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteContact } from './delete-contact';

describe('DeleteContact', () => {
  let component: DeleteContact;
  let fixture: ComponentFixture<DeleteContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
