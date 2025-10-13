import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaHomeComponent } from './pagina-home.component';

describe('PaginaHomeComponent', () => {
  let component: PaginaHomeComponent;
  let fixture: ComponentFixture<PaginaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
