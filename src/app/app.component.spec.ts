import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render math-test', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('math-test');
  });
});

describe('AppComponent - input', () => {
  it('text input should ber rendered', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('input')).toBeTruthy();
  });
  it('label should be rendered', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('label')).toBeTruthy();
    expect(compiled.querySelector('label')?.textContent).toContain('Number:');
  });
});

describe(' AppComponent - button testing', () => {
  it("button 'Double' should be rendered", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('button')[2]?.textContent).toContain(
      'Double'
    );
  });
  it("button 'Even / Odd' should be rendered", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('button')[1]?.textContent).toContain(
      'Even / Odd'
    );
  });
  it("button 'Root' should be rendered", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const de = fixture.debugElement.query(By.css('.btnStyled'));
    expect(de.classes['btnStyled']).toBeTruthy();
    expect(compiled.querySelectorAll('button')[0]?.textContent).toContain(
      'Root'
    );
  });
  it("button 'Reset' should be rendered", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('button')[3]?.textContent).toContain(
      'Reset'
    );
  });
});

// ---------------------------
describe('AppComponent - TESTING methods', () => {
  let component: AppComponent;
  beforeEach(async () => {
    component = new AppComponent()
    await TestBed.configureTestingModule({
      declarations: [AppComponent],

    }).compileComponents();
  });
  it('Reset Button - should set input to 0 and header to math-test', () => {
    component.reset();
    expect(component.title).toContain('math-test');
    expect(component.userInput).toBe(0)
  });
  it("Double Button - should be double 2 => 4", ()=>{
    let num = 2
    component.userInput = num
    component.double()
    expect(component.title).toContain("4")
  })
  it("Root Button - should ROOT the values", ()=>{
    let num = 256
    component.userInput = num
    component.double()
    expect(component.title).toContain("16")
  })
});
