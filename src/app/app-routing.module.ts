import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
