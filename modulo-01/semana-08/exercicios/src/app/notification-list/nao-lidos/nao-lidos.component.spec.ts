import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoLidosComponent } from './nao-lidos.component';

describe('NaoLidosComponent', () => {
  let component: NaoLidosComponent;
  let fixture: ComponentFixture<NaoLidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaoLidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaoLidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
