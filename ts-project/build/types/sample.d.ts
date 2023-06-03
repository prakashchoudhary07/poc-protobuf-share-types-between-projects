export declare const protobufPackage = "";
export interface Address {
    city: string;
    state: string;
    country: string;
}
export interface Profile {
    image: string;
    someArray: string[];
}
export interface Roles {
    active: boolean;
    member: boolean;
}
export interface User {
    id: string;
    name: string;
    userId: string;
    address: Address | undefined;
    progile: Profile | undefined;
    roles: Roles | undefined;
}
