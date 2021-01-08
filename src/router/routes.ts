import { RouteConfig } from 'vue-router';

import Bio from '../pages/Bio.vue';
import Index from '../pages/Index.vue';

const routes: RouteConfig[] = [
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: Index },
      {
        path: 'bio',
        component: Bio
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
