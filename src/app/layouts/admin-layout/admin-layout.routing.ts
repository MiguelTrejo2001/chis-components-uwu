import { Routes } from '@angular/router';

import { InicioComponent } from '../../pages/inicio/inicio.component';
import { MiOrganizacionSocialComponent } from '../../pages/mi-organizacion-social/mi-organizacion-social.component';
import { GenerarSolicitudComponent } from '../../pages/generar-solicitud/generar-solicitud.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { NexpedienteComponent } from '../../pages/nexpediente/nexpediente.component.spec';
import { ValisoliComponent } from '../../pages/valisoli/valisoli.component.spec';
import { RequisitosComponent } from '../../pages/requisitos/requisitos.component';
import { OrganizacionesSocialesComponent } from '../../pages/organizaciones-sociales/organizaciones-sociales.component';
import { GenresolucionComponent } from 'src/app/pages/genresolucion/genresolucion.component.spec';



export const AdminLayoutRoutes: Routes = [
    { path: 'inicio',      component: InicioComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'nexpediente',         component:  NexpedienteComponent },
    { path: 'valisoli',         component:  ValisoliComponent },
    { path: 'genresolucion',         component:  GenresolucionComponent },
    { path: 'mi-organizacion-social',          component: MiOrganizacionSocialComponent },
    { path: 'generar-solicitud',           component: GenerarSolicitudComponent },
    { path: 'requisitos',           component: RequisitosComponent },
    { path: 'organizaciones-sociales',           component: OrganizacionesSocialesComponent }
];
