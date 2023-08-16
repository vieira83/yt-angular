import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
// import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
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
