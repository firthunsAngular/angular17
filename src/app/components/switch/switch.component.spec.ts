import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchComponent } from './switch.component';
import { interval } from 'rxjs';


describe('SwitchComponent', () => {
  let component: SwitchComponent;
  let fixture: ComponentFixture<SwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize products and fruit$', () => {
    expect(component.products).toEqual(['apple', 'orange', 'banana']);
    expect(component.fruit$).toBeDefined();
  });

  it('should generate a random fruit every 3 seconds', (done) => {
    const subscription = component.fruit$.subscribe((fruit) => {
      expect(component.products).toContain(fruit);
      subscription.unsubscribe();
      done();
    });
  });


});
