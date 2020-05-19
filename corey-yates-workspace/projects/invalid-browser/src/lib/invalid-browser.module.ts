import { NgModule, ModuleWithProviders } from '@angular/core';
import { InvalidBrowserComponent } from './invalid-browser.component';
@NgModule({
  declarations: [InvalidBrowserComponent],
  imports: [
  ],
  exports: [InvalidBrowserComponent]
})
export class InvalidBrowserModule {
  public static forRoot(environment: any): ModuleWithProviders {
    return {
      ngModule: InvalidBrowserModule,
      providers: [
        {
          provide: 'env',
          useValue: environment
        }
      ]
    };
  }
}