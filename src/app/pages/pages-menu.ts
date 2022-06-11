import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Admin',
    icon: 'nb-keypad',
    children: [

      {
        title: 'Offre',
        icon: 'nb-e-commerce',
        link: '/pages/admin/offres',
        home: true,
      },
      {
        title: 'Candidature',
        icon: 'nb-e-commerce',
        link: '/pages/admin/candidature',
        home: true,
      },
      {
        title: 'Postuler',
        icon: 'nb-e-commerce',
        link: '/pages/admin/postuler',
        home: true,
      },

    ]
  }
];
