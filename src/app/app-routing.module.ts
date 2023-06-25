import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { About_usComponent } from './about_us/about_us.component';
import { ContactComponent } from './contact/contact.component';
import { HiremeComponent } from './hireme/hireme.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { EducationComponent } from './about_us/education/education.component';
import { ExperienceComponent } from './about_us/experience/experience.component';


const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'about_us',component:About_usComponent},
{path:'contact',component:ContactComponent},
{path:'hireme',component:HiremeComponent},
{path:'projects',component:ProjectsComponent},
{path:'services',component:ServicesComponent},
{path:'education',component:EducationComponent},
{path:'experience',component:ExperienceComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
