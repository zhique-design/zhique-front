export interface RouterConfig {
  path?: string;
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
        component: () => import('@/pages/Blog')
      },
      {
        component: () => import('@/pages/404')
      }
    ]
  }
];

export default config;
