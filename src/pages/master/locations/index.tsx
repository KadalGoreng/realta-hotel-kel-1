import { GetRegionsRequest } from "@/Redux/Actions/masterAction";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function index() {
  const dispatch = useDispatch();
  const { regions } = useSelector((state: any) => state.masterState);
  const [regId, setRegId] = useState<number>();
  const [countryId, setCountryId] = useState<number>();
  const [countries, setCountries] = useState<any>([]);
  const [provinces, setProvinces] = useState<any>([]);
  const [provinceId, setProvinceId] = useState<number>();
  const [cities, setCities] = useState<any>([]);
  const [cityId, setCityId] = useState<number>();

  const handleGetRegions = () => {
    if (regId) {
      const region = regions.find((region: any) => region.regionCode === regId);
      setCountries(region.countries);
      if (countryId) {
        const country = countries.find(
          (country: any) => country.countryId === countryId
        );
        country && setProvinces(country.proviences);
        if (provinceId) {
          const province = provinces.find(
            (province: any) => province.provId === provinceId
          );
          console.log(province);

          province && setCities(province.addresses);
        }
      }
    }
  };

  useEffect(() => {
    dispatch(GetRegionsRequest());
  }, []);

  useEffect(() => {
    handleGetRegions();
  }, [regId, countryId, provinceId]);

  return (
    <div>
      <div>
        <div>
          <span className="text-[24px]">Regions</span>
        </div>
        <div className="overflow-x-auto">
          {!regions ? (
            <div>Loading...</div>
          ) : (
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Region Id</th>
                  <th>Region Name</th>
                  <th>Actions</th>
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
                          setRegId(region.regionCode), setCountryId(undefined);
                        }}
                      />
                      <label className="ml-4">{region.regionCode}</label>
                    </td>
                    <td>{region.regionName}</td>
                    <td>Add</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {countries.length >= 1 ? (
        <div>
          <div>
            <span className="text-[24px]">Country</span>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Country Id</th>
                  <th>Country Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((item: any) => (
                  <tr>
                    <td>
                      <input
                        type="radio"
                        name="country"
                        checked={countryId === item.countryId}
                        onChange={() => {
                          setCountryId(item.countryId),
                            setProvinceId(undefined);
                        }}
                      />
                      <label className="ml-4">{item.countryId}</label>
                    </td>
                    <td>{item.countryName}</td>
                    <td>Add</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        regId && <div>No data</div>
      )}

      {provinces.length >= 1 && countryId ? (
        <div>
          <div>
            <span className="text-[24px]">Province</span>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Province Id</th>
                  <th>Country Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {provinces.map((item: any) => (
                  <tr>
                    <td>
                      <input
                        type="radio"
                        name="province"
                        checked={provinceId === item.provId}
                        onChange={() => setProvinceId(item.provId)}
                      />
                      <label className="ml-4">{item.provId}</label>
                    </td>
                    <td>{item.provName}</td>
                    <td>Add</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        countryId && <div>No data</div>
      )}

      {cities.length >= 1 && provinceId ? (
        <div>
          <div>
            <span className="text-[24px]">Province</span>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>City Id</th>
                  <th>City Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cities.map((item: any) => (
                  <tr>
                    <td>
                      <input
                        type="radio"
                        name="city"
                        checked={cityId === item.addrId}
                        onChange={() => setCityId(item.addrId)}
                      />
                      <label className="ml-4">{item.addrId}</label>
                    </td>
                    <td>{item.addrLine2}</td>
                    <td>Add</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        provinceId && <div>No data</div>
      )}
    </div>
  );
}
