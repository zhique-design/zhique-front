export interface RouterConfig {
  path?: string;
  name?: string;
  redirect?: string;
  component?: any;
  models?: string[];
  children?: Array<RouterConfig>;
}

const config: Array<RouterConfig> = [
  {
    path: '/',
    component: () => import('@/layouts/GlobalLayout'),
    children: [
      {
        path: '/',
        component: () => import('@/pages/Blog'),
        models: ['blog/article'],
        children: [
          {
            path: '/blog/article/detail/:articleId',
            component: () => import('@/pages/Blog/ArticleDetail'),
          }
        ]
      },
      {
        name: '404',
        component: () => import('@/pages/404')
      }
    ]
  }
];

export default config;
