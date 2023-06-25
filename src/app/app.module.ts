import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { About_usComponent } from './about_us/about_us.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HiremeComponent } from './hireme/hireme.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceComponent } from './about_us/experience/experience.component';
import { EducationComponent } from './about_us/education/education.component';

@NgModule({
  declarations: [						
    AppComponent,
      HomeComponent,
      ServicesComponent,
      About_usComponent,
      ProjectsComponent,
      ContactComponent,
      HiremeComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
