import { NgModule, ModuleWithProviders } from '@angular/core';
import { WelcomeScreenComponent } from './welcome-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeScreenService } from './welcome-screen.service';
@NgModule({
  declarations: [WelcomeScreenComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [WelcomeScreenComponent]
})
export class WelcomeScreenModule {
  public static forRoot(environment: any, routeName: string): ModuleWithProviders {
    return {
      ngModule: WelcomeScreenModule,
      providers: [
        WelcomeScreenService,
        {
          provide: 'env',
          useValue: environment
        },
        {
          provide: 'routeName',
          useValue: routeName
        }
      ]
    };
  }
}
