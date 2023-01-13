import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDardComponent } from './product-dard.component';

describe('ProductDardComponent', () => {
  let component: ProductDardComponent;
  let fixture: ComponentFixture<ProductDardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
