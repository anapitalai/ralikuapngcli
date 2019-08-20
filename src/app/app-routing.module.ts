import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';
import { PropertiesCreateComponent } from './properties/properties-create/properties-create.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'',
    pathMatch: 'full'
},


{
    path:'properties',
   // canActivate:[AuthGuard],
    component:PropertiesComponent,
    // canActivateChild:[AuthGuard],
    children:[{
        path:'',
        component:PropertiesListComponent
    }
    ,
    {
        path:'create',
        component:PropertiesCreateComponent,
        //canActivate:[AuthGuard],
    }
    /**,
    {
        path:':id',
        component:TeachersSingleComponent
    },
    {
        path:':id/edit',
        component:TeachersEditComponent
    }**/

    ]

    
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
