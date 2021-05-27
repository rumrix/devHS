const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'test', component: () => import('pages/test.vue') },
      { path: 'test2', component: () => import('pages/test2.vue') },
      { path: 'test3', component: () => import('pages/test3.vue') },
      { path: 'test4', component: () => import('pages/test4.vue') },
      { path: 'test5', component: () => import('pages/test5.vue') },
      { path: 'test6', component: () => import('pages/test6.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
