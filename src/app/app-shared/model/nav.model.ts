export interface INav{
    id: string | number | undefined;
    isDropdown:boolean | undefined;
    label: string | undefined;
    description:string | undefined;
    icon: string | undefined;
    slug: string | null | undefined;
    menuItems?:INav[],
    dropDownTarget: string | undefined,
    isAdmin?: boolean;
}
    
export class Nav implements INav{
    id: string | number  | undefined;
    isDropdown:boolean | undefined;
    label: string  | undefined;
    description:string | undefined;
    icon: string | undefined;
    slug: string | null | undefined;
    menuItems?: INav[] | undefined;
    dropDownTarget: string | undefined;
    isAdmin?: boolean | undefined;
    
}

