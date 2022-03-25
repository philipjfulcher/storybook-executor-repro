import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {DesignSystemModule} from "@storybook-executor-repro/design-system";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, DesignSystemModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
