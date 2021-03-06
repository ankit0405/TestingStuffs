import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ BannerComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(BannerComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  beforeEach(()=>
  {
    TestBed.configureTestingModule({
      declarations:[ BannerComponent ]    //declare the test component
    })

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('h1'));
      el = de.nativeElement;
  });

  it('no title in the DOM until manually call `detectChanges`', () => {
    // fixture.detectChanges();
    expect(el.textContent).toEqual('');
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(component.title);
  });

  it('should display a different test title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });
});