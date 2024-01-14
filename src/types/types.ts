import { NavType } from './Enums';

export type NavItem = { 
	label: string; 
	href: string; 
}

export interface ProductCardProps {
  imageSrc: string;
  id: string | null | undefined;
  details: string | null | undefined;
  mission_name: string | null | undefined;
}

export interface NavigationItemProps {
  label: string;
  href: string;
  type: NavType;
}

export type Tour = {
	id: string;
	imageSrc: string;
	details: string;
	mission_name: string;
}