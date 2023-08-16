import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const youtubeRoutes: Routes = [
  { path: 'youtube', component: '' as any },
  { path: 'youtube/:id', component: '' },
]

@NgModule({
  imports: [RouterModule.forChild(youtubeRoutes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
