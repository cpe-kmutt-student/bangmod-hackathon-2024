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

  // if (
  //   !province &&
  //   !district &&
  //   !subdistrict &&
  //   !zipcode
  // ) return result

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

export const addressPrepare: AddressPrepare = ({ provinces, districts, subdistricts, zipcodes }) => {
  // const province: AutocompleteOption[] = []
  // const district: AutocompleteOption[] = []
  // const subdistrict: AutocompleteOption[] = []
  // const zipcode: AutocompleteOption[] = []

  const province = provinces.reduce((result, next) => {
    result.push({ label: next, value: next })
    return result
  }, [] as AutocompleteOption[])

  const district = districts.reduce((result, next) => {
    result.push({ label: next, value: next })
    return result
  }, [] as AutocompleteOption[])

  const subdistrict = subdistricts.reduce((result, next) => {
    result.push({ label: next, value: next })
    return result
  }, [] as AutocompleteOption[])

  const zipcode = zipcodes.reduce((result, next) => {
    result.push({ label: next, value: next })
    return result
  }, [] as AutocompleteOption[])

  return { province, district, subdistrict, zipcode }
}

export function blurHandler({ province, district, subdistrict, zipcode, updateFunc }: BlurHandlerProps) {

  const { provinces, districts, subdistricts, zipcodes } = getAddress({
    district,
    province,
    subdistrict,
    zipcode
  });

  updateFunc({ provinces, districts, subdistricts, zipcodes });
}