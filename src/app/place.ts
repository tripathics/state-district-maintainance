export interface State {
    id: number;
    name: string;
    districts: District[];
}

export interface District {
    id: number;
    name: string;
}