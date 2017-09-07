import {RouterModule,Routes} from '@angular/router';

import{
	AboutComponent,
	PortafolioComponent,
	DetailComponent
} from "./components/index.paginas";

const app_routes: Routes = [
	{ path:'home',component: PortafolioComponent},
	{ path:'about',component: AboutComponent},
	{ path:'detalle',component: DetailComponent},
	{path:'**',pathMatch:'full',redirectTo:'home'}
];

export const app_routing = RouterModule.forRoot(app_routes , {useHash:true});