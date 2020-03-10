import { TestBed, async } from '@angular/core/testing';
// import { EventsAppComponent } from './app/events-app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        // EventsAppComponent,
      ],
    }).compileComponents();
  }));

  // it('should be true', () => {
  //   expect(true).toBe(true);
  // });
  // it('should be false', () => {
  //   expect(false).toBe(false);
  // });


  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(EventsAppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
  // it(`should have as title 'angular-unit-test'`, async(() => {
  //   const fixture = TestBed.createComponent(EventsAppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('angular-unit-test');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(EventsAppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-unit-test!');
  // }));
});
