import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteHomeComponent } from './componente-home.component';

describe('ComponenteHomeComponent', () => {
  let component: ComponenteHomeComponent;
  let fixture: ComponentFixture<ComponenteHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
