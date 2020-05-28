import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NewComponent } from './new/new.component';
import { AskComponent } from './ask/ask.component';
import { UserComponent } from './user/user.component';
import { SubmitComponent } from './submit/submit.component';
import { LoginComponent } from './login/login.component';
import { NewsubmitComponent } from './newsubmit/newsubmit.component';
import { CommentsComponent } from './comments/comments.component';
import { ThreadsComponent } from './threads/threads.component';
import { UserSubmitsComponent } from './user-submits/user-submits.component';
import { UserCommentsComponent } from './user-comments/user-comments.component';
import { ReplyComponent } from './reply/reply.component';
import { UserFavoritesComponent } from './user-favorites/user-favorites.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'new', component: NewComponent},
  {path: 'ask', component: AskComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'user/:id/submits', component: UserSubmitsComponent},
  {path: 'user/:id/comments', component: UserCommentsComponent},
  {path: 'user/:id/favorites', component: UserFavoritesComponent},
  {path: 'item', component: SubmitComponent},
  {path: 'login', component: LoginComponent},
  {path: 'submit', component: NewsubmitComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'threats', component: ThreadsComponent},
  {path: 'reply', component: ReplyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
