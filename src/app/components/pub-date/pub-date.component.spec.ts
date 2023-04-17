import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubDateComponent } from './pub-date.component';

describe('PubDateComponent', () => {
  let component: PubDateComponent;
  let fixture: ComponentFixture<PubDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
