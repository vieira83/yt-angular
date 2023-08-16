import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AppContentLayoutComponent } from './app-content.component'

describe('AppContentLayoutComponent', () => {
  let component: AppContentLayoutComponent
  let fixture: ComponentFixture<AppContentLayoutComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppContentLayoutComponent],
    })
    fixture = TestBed.createComponent(AppContentLayoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
