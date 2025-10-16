import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasAppComponent } from './tarjetas-app.component';

describe('TarjetasAppComponent', () => {
  let component: TarjetasAppComponent;
  let fixture: ComponentFixture<TarjetasAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetasAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetasAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
