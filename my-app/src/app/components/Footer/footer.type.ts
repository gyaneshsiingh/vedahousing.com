export interface NavItem {
    label: string;
    href: string;
    isExternal?: boolean;
}

export interface NavSection {
    title: string;
    items: NavItem[];
}
