export interface RouterConfig {
  path?: string;
  redirect?: string;
  component?: any;
  models?: string[];
  children?: Array<RouterConfig>;
}

const config: Array<RouterConfig> = [
  {
    path: "/",
    component: () => import("@/layouts/GlobalLayout"),
    children: [
      {
        path: "/",
        component: () => import("@/layouts/BlogLayout"),
        models: ["blog/article"],
        children: [
          {
            path: "/",
            component: () => import("@/pages/Blog/List"),
          },
          {
            path: "/blog/category/:categoryId",
            component: () => import("@/pages/Blog/List"),
          },
          {
            path: "/blog/article/detail/:articleId",
            component: () => import("@/pages/Blog/Detail"),
          },
        ],
      },
      {
        component: () => import("@/pages/404"),
      },
    ],
  },
];

export default config;
