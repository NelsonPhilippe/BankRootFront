import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersNavComponent } from './users-nav.component';

describe('UsersNavComponent', () => {
  let component: UsersNavComponent;
  let fixture: ComponentFixture<UsersNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
