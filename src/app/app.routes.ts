import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Workbench } from './pages/workbench/workbench';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'workbench', component: Workbench },
  { path: '**', redirectTo: '' }
];
