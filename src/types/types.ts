import { NavType } from './Enums';

export type NavItem = { 
	label: string; 
	href: string; 
}

export interface ProductCardProps {
  imageSrc: string;
  id: string | null | undefined;
  description: string | null | undefined;
  name: string | null | undefined;
}

export interface NavigationItemProps {
  label: string;
  href: string;
  type: NavType;
}

export type Rocket = {
	id: string;
	imageSrc: string;
	description: string;
	name: string;
}