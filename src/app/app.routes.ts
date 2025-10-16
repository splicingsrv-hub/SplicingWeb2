import { Routes } from '@angular/router';
import { PaginaHomeComponent } from './components/Pagina principal/pagina-home/pagina-home.component';
import { CredencialesComponent } from './components/Login/credenciales/credenciales.component';
import { TarjetasAppComponent } from './components/Aplicaciones/tarjetas-app/tarjetas-app.component';



 //1. Configurar la ruta al componentes
 // --> Esto le dice a Angular que cuando el usuario navegue a /login, cargue el componente CredencialesComponent.

export const routes: Routes = [

{path:'',component: PaginaHomeComponent},//Pagina principal del home 
{path:'login',component:CredencialesComponent}, // Página de login
{path:'tarjetas',component:TarjetasAppComponent}//// Página después de login

//{path:'',redirectTo:'',pathMatch:'full'}


];
