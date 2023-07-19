import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent, RegisterComponent } from './account';
import { AuthGuard } from './_helpers';
import { StarshipComponent } from './starship/starships/starships.component';
import { FichaComponent } from './ficha/ficha.component';

const routes: Routes = [
    { path: '', component: HomeComponent , canActivate: [AuthGuard] },
    { path: 'account/login', component: LoginComponent },
    { path: 'account/register', component: RegisterComponent ,  },
    { path: 'starships', component: StarshipComponent, canActivate: [AuthGuard] },

    { path: 'starships/:id', component: FichaComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }





