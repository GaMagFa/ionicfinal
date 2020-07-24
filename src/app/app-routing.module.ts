import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  
  { path: 'toc', loadChildren: './toc/toc.module#TocPageModule' },
  { path: 'chapter1', loadChildren: './chapters/chapter1/chapter1.module#Chapter1PageModule' },
  { path: 'chapter2', loadChildren: './chapters/chapter2/chapter2.module#Chapter2PageModule' },
  { path: 'chapter3', loadChildren: './chapters/chapter3/chapter3.module#Chapter3PageModule' },
  { path: 'chapter4', loadChildren: './chapters/chapter4/chapter4.module#Chapter4PageModule' },
  { path: 'theend', loadChildren: './chapters/theend/theend.module#TheendPageModule' },
  { path: 'chapter1p2', loadChildren: './chapters/chapter1/chapter1p2/chapter1p2.module#Chapter1p2PageModule' }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
