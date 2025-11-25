export interface NavItem {
  label: string;
  path: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
