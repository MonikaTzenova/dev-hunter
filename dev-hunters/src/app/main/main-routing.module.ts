import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {LocationsComponent} from './locations/locations.component';
import {TechnologiesComponent} from './technologies/components/technology-table/technologies.component';
import {ProfilesComponent} from './profiles/profiles.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,

    children: [
      {
        path: '',
        redirectTo: 'technologies',
        pathMatch: 'full'
      },
      {
        path: 'locations',
        component: LocationsComponent
      },
      {
        path: 'profiles',
        component: ProfilesComponent
      },
      {
        path: 'technologies',
        component: TechnologiesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
