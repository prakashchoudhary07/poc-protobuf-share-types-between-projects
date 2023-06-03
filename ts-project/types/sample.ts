/* eslint-disable */

export const protobufPackage = "";

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
  profile: Profile | undefined;
  roles: Roles | undefined;
}
