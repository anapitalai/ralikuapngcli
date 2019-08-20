import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';
import { PropertyCreateComponent } from './properties/property-create/property-create.component';
import { PropertySingleComponent } from './properties/property-single/property-single.component';
import { PropertyUpdateComponent } from './properties/property-update/property-update.component';


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
        component:PropertyCreateComponent,
        //canActivate:[AuthGuard],
    },
    {
        path:':id',
        component:PropertySingleComponent
    }
    ,
    {
        path:':id/edit',
        component:PropertyUpdateComponent
    }

    ]

    
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
