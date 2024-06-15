import { type BaseLayoutProps } from 'fumadocs-ui/layout';

// basic configuration here
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'Box Lang Docs',
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};
