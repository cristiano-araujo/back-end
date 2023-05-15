import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatadosListComponent } from './employees-list.component';

describe('ContatadosListComponent', () => {
  let component: ContatadosListComponent;
  let fixture: ComponentFixture<ContatadosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatadosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatadosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
