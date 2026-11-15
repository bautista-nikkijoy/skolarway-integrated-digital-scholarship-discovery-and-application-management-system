import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'ched',
    loadChildren: () => import('./ched/ched.module').then( m => m.ChedPageModule)
  },
  {
    path: 'chedaf',
    loadChildren: () => import('./chedaf/chedaf.module').then( m => m.ChedafPageModule)
  },
  {
    path: 'submitted',
    loadChildren: () => import('./submitted/submitted.module').then( m => m.SubmittedPageModule)
  },
  {
    path: 'dost',
    loadChildren: () => import('./dost/dost.module').then( m => m.DostPageModule)
  },
  {
    path: 'tesda',
    loadChildren: () => import('./tesda/tesda.module').then( m => m.TesdaPageModule)
  },
  {
    path: 'sm',
    loadChildren: () => import('./sm/sm.module').then( m => m.SmPageModule)
  },
  {
    path: 'megaworld',
    loadChildren: () => import('./megaworld/megaworld.module').then( m => m.MegaworldPageModule)
  },
  {
    path: 'sanfernando',
    loadChildren: () => import('./sanfernando/sanfernando.module').then( m => m.SanfernandoPageModule)
  },
  {
    path: 'hau',
    loadChildren: () => import('./hau/hau.module').then( m => m.HauPageModule)
  },
  {
    path: 'ua',
    loadChildren: () => import('./ua/ua.module').then( m => m.UaPageModule)
  },
  {
    path: 'systemplus',
    loadChildren: () => import('./systemplus/systemplus.module').then( m => m.SystemplusPageModule)
  },
  {
    path: 'auf',
    loadChildren: () => import('./auf/auf.module').then( m => m.AufPageModule)
  },
  {
    path: 'laverdad',
    loadChildren: () => import('./laverdad/laverdad.module').then( m => m.LaverdadPageModule)
  },
  {
    path: 'efap',
    loadChildren: () => import('./efap/efap.module').then( m => m.EfapPageModule)
  },
  {
    path: 'aics',
    loadChildren: () => import('./aics/aics.module').then( m => m.AicsPageModule)
  },
  {
    path: 'chamber',
    loadChildren: () => import('./chamber/chamber.module').then( m => m.ChamberPageModule)
  },
  {
    path: 'owwa',
    loadChildren: () => import('./owwa/owwa.module').then( m => m.OwwaPageModule)
  },
  {
    path: 'charity',
    loadChildren: () => import('./charity/charity.module').then( m => m.CharityPageModule)
  },
  {
    path: 'pshs',
    loadChildren: () => import('./pshs/pshs.module').then( m => m.PshsPageModule)
  },
  {
    path: 'gbf',
    loadChildren: () => import('./gbf/gbf.module').then( m => m.GbfPageModule)
  },
  {
    path: 'aboitiz',
    loadChildren: () => import('./aboitiz/aboitiz.module').then( m => m.AboitizPageModule)
  },
  {
    path: 'toyota',
    loadChildren: () => import('./toyota/toyota.module').then( m => m.ToyotaPageModule)
  },
  {
    path: 'dostaf',
    loadChildren: () => import('./dostaf/dostaf.module').then( m => m.DostafPageModule)
  },
  {
    path: 'tesdaaf',
    loadChildren: () => import('./tesdaaf/tesdaaf.module').then( m => m.TesdaafPageModule)
  },
  {
    path: 'smaf',
    loadChildren: () => import('./smaf/smaf.module').then( m => m.SmafPageModule)
  },
  {
    path: 'megaworldaf',
    loadChildren: () => import('./megaworldaf/megaworldaf.module').then( m => m.MegaworldafPageModule)
  },
  {
    path: 'sanfernandoaf',
    loadChildren: () => import('./sanfernandoaf/sanfernandoaf.module').then( m => m.SanfernandoafPageModule)
  },
  {
    path: 'hauaf',
    loadChildren: () => import('./hauaf/hauaf.module').then( m => m.HauafPageModule)
  },
  {
    path: 'uaaf',
    loadChildren: () => import('./uaaf/uaaf.module').then( m => m.UaafPageModule)
  },
  {
    path: 'systemplusaf',
    loadChildren: () => import('./systemplusaf/systemplusaf.module').then( m => m.SystemplusafPageModule)
  },
  {
    path: 'aufaf',
    loadChildren: () => import('./aufaf/aufaf.module').then( m => m.AufafPageModule)
  },
  {
    path: 'laverdadaf',
    loadChildren: () => import('./laverdadaf/laverdadaf.module').then( m => m.LaverdadafPageModule)
  },
  {
    path: 'efapaf',
    loadChildren: () => import('./efapaf/efapaf.module').then( m => m.EfapafPageModule)
  },
  {
    path: 'aicsaf',
    loadChildren: () => import('./aicsaf/aicsaf.module').then( m => m.AicsafPageModule)
  },
  {
    path: 'chamberaf',
    loadChildren: () => import('./chamberaf/chamberaf.module').then( m => m.ChamberafPageModule)
  },
  {
    path: 'owwaaf',
    loadChildren: () => import('./owwaaf/owwaaf.module').then( m => m.OwwaafPageModule)
  },
  {
    path: 'charityaf',
    loadChildren: () => import('./charityaf/charityaf.module').then( m => m.CharityafPageModule)
  },
  {
    path: 'pshsaf',
    loadChildren: () => import('./pshsaf/pshsaf.module').then( m => m.PshsafPageModule)
  },
  {
    path: 'gbfaf',
    loadChildren: () => import('./gbfaf/gbfaf.module').then( m => m.GbfafPageModule)
  },
  {
    path: 'aboitizaf',
    loadChildren: () => import('./aboitizaf/aboitizaf.module').then( m => m.AboitizafPageModule)
  },
  {
    path: 'toyotaaf',
    loadChildren: () => import('./toyotaaf/toyotaaf.module').then( m => m.ToyotaafPageModule)
  },
  {
    path: 'newchat',
    loadChildren: () => import('./newchat/newchat.module').then( m => m.NewchatPageModule)
  },
  {
    path: 'dostchat',
    loadChildren: () => import('./dostchat/dostchat.module').then( m => m.DostchatPageModule)
  },
  {
    path: 'smchat',
    loadChildren: () => import('./smchat/smchat.module').then( m => m.SmchatPageModule)
  },
  {
    path: 'chedchat',
    loadChildren: () => import('./chedchat/chedchat.module').then( m => m.ChedchatPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'info-modal',
    loadChildren: () => import('./info-modal/info-modal.module').then( m => m.InfoModalPageModule)
  },
  {
    path: 'helpquestions',
    loadChildren: () => import('./helpquestions/helpquestions.module').then( m => m.HelpquestionsPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
