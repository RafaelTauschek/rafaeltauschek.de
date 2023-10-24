import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroductionSectionComponent } from './introduction-section/introduction-section.component';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { ImprintComponent } from './imprint/imprint.component';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactPopupComponent } from './contact-popup/contact-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroductionSectionComponent,
    SkillSectionComponent,
    PortfolioSectionComponent,
    ContactSectionComponent,
    AboutMeSectionComponent,
    ContactFormComponent,
    ImprintComponent,
    MainPageComponent,
    PrivacyComponent,
    ContactPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
