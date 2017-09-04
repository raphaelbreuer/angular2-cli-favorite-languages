import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteLanguagesComponent } from './favorite-languages.component';

describe('FavoriteLanguagesComponent', () => {
  let component: FavoriteLanguagesComponent;
  let fixture: ComponentFixture<FavoriteLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
