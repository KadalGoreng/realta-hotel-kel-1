import {
  GetAddressRequest,
  GetCountryRequest,
  GetProvinceRequest,
  GetRegionsRequest,
} from "@/Redux/Actions/masterAction";
import Add from "@/components/master/locations/Add";
import Delete from "@/components/master/locations/Delete";
import Update from "@/components/master/locations/Update";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function index() {
  const dispatch = useDispatch();
  const { regions } = useSelector((state: any) => state.masterState);
  const { countries } = useSelector((state: any) => state.masterState);
  const { provinces } = useSelector((state: any) => state.masterState);
  const { address } = useSelector((state: any) => state.masterState);

  const [refresh, setRefresh] = useState<boolean>(false);
  const [regId, setRegId] = useState<number>();
  const [region, setRegion] = useState<string>();
  const [cityId, setCityId] = useState<number>();
  const [regCode, setRegCode] = useState<number>();
  const [country, setCountry] = useState<string>();
  const [province, setProvince] = useState<any>([]);
  const [countryId, setCountryId] = useState<number>();
  const [provinceId, setProvinceId] = useState<number>();
  const [countryCode, setCountryCode] = useState<number>();
  const [provinceCode, setProvinceCode] = useState<number>();

  const handleOptionSelected = () => {
    if (regId) {
      dispatch(GetCountryRequest(regId));
      const region = regions.find((region: any) => region.regionCode === regId);
      setRegCode(regId);
      setRegion(region.regionName);
      if (countryId) {
        dispatch(GetProvinceRequest(countryId));
        const country = countries.find(
          (country: any) => country.countryId === countryId
        );
        setCountryCode(countryId);
        country && setCountry(country.countryName);
        if (provinceId) {
          dispatch(GetAddressRequest(provinceId));
          const province = provinces.find(
            (province: any) => province.provId === provinceId
          );
          setProvinceCode(provinceId);
          province && setProvince(province.provName);
        }
      }
    }
  };

  useEffect(() => {
    dispatch(GetRegionsRequest());
    setRefresh(false);
  }, [refresh]);

  useEffect(() => {
    handleOptionSelected();
    setRefresh(false);
  }, [regId, countryId, provinceId, refresh]);

  return (
    // <div className="flex gap-4 min-h-screen mr-4">
    //   <Sidebar />
    <div className="w-full my-5 flex flex-col gap-4">
      <div className="flex justify-between mr-3">
        <span className="text-[24px]">Regions</span>
      </div>
      <div className="overflow-x-auto">
        {!regions ? (
          <div>Loading...</div>
        ) : (
          <table className="table w-full">
            <thead>
              <tr>
                <th className="w-[30%]">Region Id</th>
                <th className="w-[35%]">Region Name</th>
                <th className="w-[35%]">
                  <Add type="Region" />
                </th>
              </tr>
            </thead>
            <tbody>
              {regions.map((region: any) => (
                <tr>
                  <td>
                    <input
                      type="radio"
                      name="region"
                      checked={regId === region.regionCode}
                      onChange={() => {
                        dispatch(GetCountryRequest(region.regionCode)),
                          setRegId(region.regionCode),
                          setCountryId(undefined),
                          setProvinceId(undefined);
                      }}
                    />
                    <label className="ml-4">{region.regionCode}</label>
                  </td>
                  <td>{region.regionName}</td>
                  <td className="flex gap-4">
                    <Update
                      id={region.regionCode}
                      type="Region"
                      name={region.regionName}
                      setRefresh={setRefresh}
                    />
                    <Delete
                      id={region.regionCode}
                      type="Region"
                      setRefresh={setRefresh}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {regId !== undefined && (
        <div>
          <div>
            <span className="text-[24px]">Country</span>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="w-[30%]">Country Id</th>
                  <th className="w-[35%]">Country Name</th>
                  <th className="w-[35%]">
                    <Add type="Country" code={region} id={regCode} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {countries.length >= 1 && regId === regCode ? (
                  countries.map((country: any) => (
                    <tr>
                      <td>
                        <input
                          type="radio"
                          name="country"
                          checked={countryId === country.countryId}
                          onChange={() => {
                            setCountryId(country.countryId),
                              setProvinceId(undefined);
                          }}
                        />
                        <label className="ml-4">{country.countryId}</label>
                      </td>
                      <td>{country.countryName}</td>
                      <td className="flex gap-4">
                        <Update
                          id={country.countryId}
                          type="Country"
                          code={region}
                          name={country.countryName}
                          setRefresh={setRefresh}
                        />
                        <Delete
                          id={country.countryId}
                          type="Country"
                          setRefresh={setRefresh}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="text-center w-[30%]">
                      Data Kosong
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {countryId !== undefined && (
        <div>
          <div>
            <span className="text-[24px]">Province</span>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="w-[30%]">Province Id</th>
                  <th className="w-[35%]">Province Name</th>
                  <th className="w-[35%]">
                    <Add type="Province" code={country} id={countryId} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {provinces.length >= 1 && countryId === countryCode ? (
                  provinces.map((province: any) => (
                    <tr>
                      <td>
                        <input
                          type="radio"
                          name="province"
                          checked={provinceId === province.provId}
                          onChange={() => setProvinceId(province.provId)}
                        />
                        <label className="ml-4">{province.provId}</label>
                      </td>
                      <td>{province.provName}</td>
                      <td className="flex gap-4">
                        <Update
                          id={province.provId}
                          type="Province"
                          code={country}
                          name={province.provName}
                          setRefresh={setRefresh}
                        />
                        <Delete
                          id={province.provId}
                          type="Province"
                          setRefresh={setRefresh}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="text-center w-[30%]">
                      Data Kosong
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {provinceId !== undefined && (
        <div>
          <div>
            <span className="text-[24px]">City</span>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="w-[30%]">City Id</th>
                  <th className="w-[35%]">City Name</th>
                  <th className="w-[35%]">
                    <Add type="City" code={province} id={provinceId} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {address.length >= 1 && provinceId === provinceCode ? (
                  address.map((city: any) => (
                    <tr>
                      <td>
                        <input
                          type="radio"
                          name="city"
                          checked={cityId === city.addrId}
                          onChange={() => setCityId(city.addrId)}
                        />
                        <label className="ml-4">{city.addrId}</label>
                      </td>
                      <td>{city.addrLine2}</td>
                      <td className="flex gap-4">
                        <Update
                          id={city.addrId}
                          type="City"
                          code={province}
                          name={city.addrLine2}
                          setRefresh={setRefresh}
                        />
                        <Delete
                          id={city.addrId}
                          type="City"
                          setRefresh={setRefresh}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="text-center w-[30%]">
                      Data Kosong
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
    // </div>
  );
}
