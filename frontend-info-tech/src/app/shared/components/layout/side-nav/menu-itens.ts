import { AppRoutes } from '../../../constants';

export interface IMenuItem {
  label?: string;
  icon?: string;
  link?: string;
  action?: () => void;
  section?: string;
  children?: IMenuItem[];
}

export const MENU_ITEMS: IMenuItem[] = [
  {
    section: 'Sistema',
  },
  {
    label: 'Veículos',
    icon: 'home',
    link: `/${AppRoutes.VEHICLES}/${AppRoutes.LIST}`,
  },
];
