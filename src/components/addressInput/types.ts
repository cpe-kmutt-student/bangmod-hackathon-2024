import type { AutocompleteOption } from "../autocomplete/types";

export interface UpdateAddreessProps {
  provinces: string[];
  districts: string[];
  subdistricts: string[];
  zipcodes: string[];
}

export interface GetAddressProps {
  province: string;
  district: string;
  subdistrict: string;
  zipcode: string;
}

export interface Address {
  provinces: string[],
  districts: string[],
  subdistricts: string[],
  zipcodes: string[],
}

export type getAddressFunc = (query: GetAddressProps) => Address

export interface AddressPrepareReturn {
  province: AutocompleteOption[];
  district: AutocompleteOption[];
  subdistrict: AutocompleteOption[];
  zipcode: AutocompleteOption[];
}

export type AddressPrepare = (props: Address) => AddressPrepareReturn