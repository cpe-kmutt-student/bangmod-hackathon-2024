import { thaiAddress } from "../../data/thai_address";
import type { AutocompleteOption } from "../autocomplete/types";
import type { BlurHandlerProps, getAddressFunc, Address, GetAddressProps, AddressPrepare } from "./types"



export const getAddress: getAddressFunc = ({ province = "", district = "", subdistrict = "", zipcode = "" }) => {
  const result: Address = {
    provinces: [],
    districts: [],
    subdistricts: [],
    zipcodes: [],
  }

  for (const data of thaiAddress) {
    for (const amphure of data.amphure) {
      const { name_th: districtName, tambon } = amphure;

      for (const subdistrictData of tambon) {
        const { name_th: subdistrictName, zip_code } = subdistrictData;

        if (
          (province === '' || data.name_th.includes(province.toLowerCase())) &&
          (district === '' || districtName.includes(district.toLowerCase())) &&
          (subdistrict === '' || subdistrictName.includes(subdistrict.toLowerCase())) &&
          (zipcode === '' || subdistrictData.zip_code.toString().includes(zipcode))
        ) {
          result.provinces.push(data.name_th);
          result.districts.push(districtName);
          result.subdistricts.push(subdistrictName);
          result.zipcodes.push(zip_code.toString());
        }
      }
    }
  }

  result.provinces = [...new Set(result.provinces)]
  result.districts = [...new Set(result.districts)]
  result.subdistricts = [...new Set(result.subdistricts)]
  result.zipcodes = [...new Set(result.zipcodes)]

  return result;
}

const transformToAutocompleteOptions = (array: string[]): AutocompleteOption[] => {
  return array.map((value) => ({ label: value, value }));
};

export const addressPrepare: AddressPrepare = ({ provinces, districts, subdistricts, zipcodes }) => {
  return {
    province: transformToAutocompleteOptions(provinces),
    district: transformToAutocompleteOptions(districts),
    subdistrict: transformToAutocompleteOptions(subdistricts),
    zipcode: transformToAutocompleteOptions(zipcodes),
  };
}