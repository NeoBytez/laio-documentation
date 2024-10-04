import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/-index',
    component: ComponentCreator('/-index', '4b7'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '323'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'b8a'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '4e9'),
            routes: [
              {
                path: '/Laio/common/Attributes/ConditionalHideAttribute',
                component: ComponentCreator('/Laio/common/Attributes/ConditionalHideAttribute', 'c2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Laio/common/Attributes/ReadOnlyAttribute',
                component: ComponentCreator('/Laio/common/Attributes/ReadOnlyAttribute', 'd44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Laio/common/Library/EArray',
                component: ComponentCreator('/Laio/common/Library/EArray', '870'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Laio/common/Library/Notify',
                component: ComponentCreator('/Laio/common/Library/Notify', '356'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Laio/common/Library/ObjectPool',
                component: ComponentCreator('/Laio/common/Library/ObjectPool', '9a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Laio/common/Library/SceneLoading',
                component: ComponentCreator('/Laio/common/Library/SceneLoading', '3bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Laio/common/Library/Selector',
                component: ComponentCreator('/Laio/common/Library/Selector', '617'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Laio/common/Library/Stamina',
                component: ComponentCreator('/Laio/common/Library/Stamina', '702'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Laio/common/Library/Stat',
                component: ComponentCreator('/Laio/common/Library/Stat', '65d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Laio/common/Library/Weight',
                component: ComponentCreator('/Laio/common/Library/Weight', '6a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Laio/common/Saving',
                component: ComponentCreator('/Laio/common/Saving', 'c5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Laio/common/Saving/SaveMe',
                component: ComponentCreator('/Laio/common/Saving/SaveMe', '02a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Laio/common/Saving/SceneSaving',
                component: ComponentCreator('/Laio/common/Saving/SceneSaving', '293'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Laio/common/Static/Extensions',
                component: ComponentCreator('/Laio/common/Static/Extensions', '948'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Laio/common/Static/GizmoDrawer',
                component: ComponentCreator('/Laio/common/Static/GizmoDrawer', 'af7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Laio/common/Static/Helper',
                component: ComponentCreator('/Laio/common/Static/Helper', 'b04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Laio/common/Static/LaioMath',
                component: ComponentCreator('/Laio/common/Static/LaioMath', '780'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Laio/common/UI/ImageScroller',
                component: ComponentCreator('/Laio/common/UI/ImageScroller', '07a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Laio/Tools/Benchmarking',
                component: ComponentCreator('/Laio/Tools/Benchmarking', '25a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Laio/Tools/CSVParser',
                component: ComponentCreator('/Laio/Tools/CSVParser', 'ba0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Laio/Tools/ImageEditing',
                component: ComponentCreator('/Laio/Tools/ImageEditing', '071'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/LaioEditor/Common/LaioStyle',
                component: ComponentCreator('/LaioEditor/Common/LaioStyle', 'a94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/LaioEditor/Common/Toast',
                component: ComponentCreator('/LaioEditor/Common/Toast', '1ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/LaioEditor/Common/ToastContent',
                component: ComponentCreator('/LaioEditor/Common/ToastContent', '1f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/LaioEditor/TemplateEditor',
                component: ComponentCreator('/LaioEditor/TemplateEditor', 'ab1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/QuickStart',
                component: ComponentCreator('/QuickStart', 'a7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Samples/BulletSolver',
                component: ComponentCreator('/Samples/BulletSolver', '0b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Samples/GPUInstancing',
                component: ComponentCreator('/Samples/GPUInstancing', '668'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '1bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
