import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
// import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [],
    children: [
      {
        path: 'youtube',
        loadChildren: () =>
          import('./modules/youtube/youtube.module').then(
            (m) => m.YoutubeModule
          ),
      },
    ],
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
