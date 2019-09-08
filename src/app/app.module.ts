import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import {UserServiceClient} from './services/user.service.client';
import {CourseServiceClient} from './services/course.service.client';
import { FakazzaPageComponent } from './fakazza-page/fakazza-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseMaterialComponent } from './course-material/course-material.component';
import { HttpClientModule } from '@angular/common/http';
import {CourseMaterialServiceClient} from './services/course-material.service.client';
import { CreateQuestionComponent } from './create-question/create-question.component';
import {QuestionServiceClient} from './services/question.service.client';
import { ViewQuestionComponent } from './view-question/view-question.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    FakazzaPageComponent,
    CourseInfoComponent,
    CourseMaterialComponent,
    CreateQuestionComponent,
    ViewQuestionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [
    UserServiceClient,
    CourseServiceClient,
    CourseMaterialServiceClient,
    QuestionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
