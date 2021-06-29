import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LoginComponent } from './login/login.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSortModule} from '@angular/material/sort';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
// import {RegisterComponent} from './register/register.component';
import {TechnologiesComponent} from './technologies/components/technology-table/technologies.component';
import {LocationsComponent} from './locations/locations.component';
import {ProfilesComponent} from './profiles/profiles.component';
import {EditTechnologyComponent} from './technologies/components/technology-dialogs/edit-technology/edit-technology.component';
import {AddTechnologyComponent} from './technologies/components/technology-dialogs/add-technology/add-technology.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {DeleteTechnologyComponent} from './technologies/components/technology-dialogs/delete-technology/delete-technology.component';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';

const matModules = [
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatTableModule,
  MatSortModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatChipsModule,
  MatPaginatorModule
];

@NgModule({
  declarations: [
    MainComponent,
    // LoginComponent,
    // RegisterComponent,
    TechnologiesComponent,
    EditTechnologyComponent,
    DeleteTechnologyComponent,
    AddTechnologyComponent,
    LocationsComponent,
    ProfilesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MainRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    ...matModules
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    ...matModules,
  ],
  providers: []
})
export class MainModule { }
