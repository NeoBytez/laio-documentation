import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/laio-documentation/-index',
    component: ComponentCreator('/laio-documentation/-index', '7b0'),
    exact: true
  },
  {
    path: '/laio-documentation/markdown-page',
    component: ComponentCreator('/laio-documentation/markdown-page', '880'),
    exact: true
  },
  {
    path: '/laio-documentation/',
    component: ComponentCreator('/laio-documentation/', '7e9'),
    routes: [
      {
        path: '/laio-documentation/',
        component: ComponentCreator('/laio-documentation/', '3b1'),
        routes: [
          {
            path: '/laio-documentation/',
            component: ComponentCreator('/laio-documentation/', 'bfc'),
            routes: [
              {
                path: '/laio-documentation/Laio/common/Attributes/ConditionalHideAttribute',
                component: ComponentCreator('/laio-documentation/Laio/common/Attributes/ConditionalHideAttribute', '77e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Laio/common/Attributes/ReadOnlyAttribute',
                component: ComponentCreator('/laio-documentation/Laio/common/Attributes/ReadOnlyAttribute', 'a1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Laio/common/Library/EArray',
                component: ComponentCreator('/laio-documentation/Laio/common/Library/EArray', '7d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Laio/common/Library/Notify',
                component: ComponentCreator('/laio-documentation/Laio/common/Library/Notify', 'e43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Laio/common/Library/ObjectPool',
                component: ComponentCreator('/laio-documentation/Laio/common/Library/ObjectPool', '575'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Laio/common/Library/SceneLoading',
                component: ComponentCreator('/laio-documentation/Laio/common/Library/SceneLoading', '44e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Laio/common/Library/Selector',
                component: ComponentCreator('/laio-documentation/Laio/common/Library/Selector', '482'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Laio/common/Library/Stamina',
                component: ComponentCreator('/laio-documentation/Laio/common/Library/Stamina', '7be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Laio/common/Library/Stat',
                component: ComponentCreator('/laio-documentation/Laio/common/Library/Stat', '9c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Laio/common/Library/Weight',
                component: ComponentCreator('/laio-documentation/Laio/common/Library/Weight', 'ebe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Laio/common/Saving',
                component: ComponentCreator('/laio-documentation/Laio/common/Saving', '906'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Laio/common/Saving/SaveMe',
                component: ComponentCreator('/laio-documentation/Laio/common/Saving/SaveMe', '52a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Laio/common/Saving/SceneSaving',
                component: ComponentCreator('/laio-documentation/Laio/common/Saving/SceneSaving', '2c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Laio/common/Static/Extensions',
                component: ComponentCreator('/laio-documentation/Laio/common/Static/Extensions', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Laio/common/Static/GizmoDrawer',
                component: ComponentCreator('/laio-documentation/Laio/common/Static/GizmoDrawer', '2e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Laio/common/Static/Helper',
                component: ComponentCreator('/laio-documentation/Laio/common/Static/Helper', '373'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Laio/common/Static/LaioMath',
                component: ComponentCreator('/laio-documentation/Laio/common/Static/LaioMath', 'be0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Laio/common/UI/ImageScroller',
                component: ComponentCreator('/laio-documentation/Laio/common/UI/ImageScroller', 'bdf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Laio/Tools/Benchmarking',
                component: ComponentCreator('/laio-documentation/Laio/Tools/Benchmarking', '87c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Laio/Tools/CSVParser',
                component: ComponentCreator('/laio-documentation/Laio/Tools/CSVParser', '3da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Laio/Tools/ImageEditing',
                component: ComponentCreator('/laio-documentation/Laio/Tools/ImageEditing', 'f6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/LaioEditor/Common/LaioStyle',
                component: ComponentCreator('/laio-documentation/LaioEditor/Common/LaioStyle', '6b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/LaioEditor/Common/Toast',
                component: ComponentCreator('/laio-documentation/LaioEditor/Common/Toast', '99d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/LaioEditor/Common/ToastContent',
                component: ComponentCreator('/laio-documentation/LaioEditor/Common/ToastContent', 'a7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/LaioEditor/TemplateEditor',
                component: ComponentCreator('/laio-documentation/LaioEditor/TemplateEditor', 'eda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/QuickStart',
                component: ComponentCreator('/laio-documentation/QuickStart', 'c1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Samples/BulletSolver',
                component: ComponentCreator('/laio-documentation/Samples/BulletSolver', 'a74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/Samples/GPUInstancing',
                component: ComponentCreator('/laio-documentation/Samples/GPUInstancing', '8e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laio-documentation/',
                component: ComponentCreator('/laio-documentation/', '407'),
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
