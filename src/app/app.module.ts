import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RepositoriesComponent } from './views/repositories/repositories.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { RepositoryComponent } from './views/repositories/repository/repository.component';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routing';
import { TabsComponent } from './components/tabs/tabs.component';
import { CommitComponent } from './views/repositories/commit/commit.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    HeaderComponent,
    RepositoryComponent,
    TabsComponent,
    CommitComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
