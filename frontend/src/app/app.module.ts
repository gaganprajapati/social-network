import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from '../../libs/ui-components/card/card.module';
import { ListModule } from '../../libs/ui-components/list/list.module';

import { UserListComponent } from './user-list/user-list.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [AppComponent, UserListComponent, ProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    ListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
