import {
  CreateAddressRequest,
  CreateCountryRequest,
  CreateProvinceRequest,
  CreateRegionsRequest,
} from "@/Redux/Actions/masterAction";
import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";

type Props = {
  type: string;
  code?: string;
  id?: number | undefined;
};

export default function Add(props: Props) {
  const dispatch = useDispatch();
  const { type, code, id } = props;

  const [payload, setPayload] = useState({
    regionName: "",
    countryName: "",
    provName: "",
    addrPostalCode: "",
    addrLine1: "",
    addrLine2: "",
    addrProv: {
      provId: undefined,
    },
    countryRegion: {
      regionCode: undefined,
    },
    provCountry: {
      countryId: undefined,
    },
  });
  const [modal, setModal] = useState(false);
  const handleOpenModal = () => {
    setModal(!modal);
    setPayload({
      regionName: "",
      countryName: "",
      provName: "",
      addrPostalCode: "",
      addrLine1: "",
      addrLine2: "",
      addrProv: {
        provId: undefined,
      },
      countryRegion: {
        regionCode: undefined,
      },
      provCountry: {
        countryId: undefined,
      },
    });
  };

  const handleChangeState = (key: string, value: string | {}) => {
    setPayload((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const {
      regionName,
      countryName,
      countryRegion,
      provName,
      provCountry,
      addrLine1,
      addrLine2,
      addrPostalCode,
      addrProv,
    } = payload;
    if (type === "Region" && regionName !== "") {
      dispatch(CreateRegionsRequest({ regionName }));
    } else if (type === "Country" && countryName !== "") {
      dispatch(CreateCountryRequest({ countryName, countryRegion }));
    } else if (type === "Province" && provName !== "") {
      dispatch(CreateProvinceRequest({ provName, provCountry }));
    } else if (type === "City" && addrLine2 !== "") {
      dispatch(
        CreateAddressRequest({
          addrLine1,
          addrLine2,
          addrPostalCode,
          addrProv,
        })
      );
    } else {
      alert("Isi Semua Form");
      return;
    }

    setPayload({
      regionName: "",
      countryName: "",
      provName: "",
      addrPostalCode: "",
      addrLine1: "",
      addrLine2: "",
      addrProv: {
        provId: undefined,
      },
      countryRegion: {
        regionCode: undefined,
      },
      provCountry: {
        countryId: undefined,
      },
    });
    setModal(!modal);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>+ ADD</button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleOpenModal}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className=" text-lg">Add {type}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              {type === "Region" ? (
                <>
                  <label className="label font-bold">Region Name</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      handleChangeState("regionName", e.target.value)
                    }
                    className="input w-full input-bordered font-normal"
                    placeholder={type}
                  />
                </>
              ) : type === "Country" ? (
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="label font-bold">Region Name</label>
                    <input
                      disabled
                      type="text"
                      defaultValue={code}
                      className="input w-full input-bordered font-normal"
                      placeholder={type}
                    />
                  </div>
                  <div>
                    <label className="label font-bold">Country Name</label>
                    <input
                      type="text"
                      value={payload.countryName}
                      onChange={(e) => {
                        handleChangeState("countryName", e.target.value),
                          handleChangeState("countryRegion", {
                            regionCode: id,
                          });
                      }}
                      className="input w-full input-bordered font-normal"
                      placeholder={type}
                    />
                  </div>
                </div>
              ) : type === "Province" ? (
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="label font-bold">Country Name</label>
                    <input
                      disabled
                      type="text"
                      defaultValue={code}
                      className="input w-full input-bordered font-normal"
                      placeholder={type}
                    />
                  </div>
                  <div>
                    <label className="label font-bold">Province Name</label>
                    <input
                      type="text"
                      value={payload.provName}
                      onChange={(e) => {
                        handleChangeState("provName", e.target.value),
                          handleChangeState("provCountry", {
                            countryId: id,
                          });
                      }}
                      className="input w-full input-bordered font-normal"
                      placeholder={type}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="label font-bold">Province Name</label>
                    <input
                      disabled
                      type="text"
                      defaultValue={code}
                      className="input w-full input-bordered font-normal"
                      placeholder={type}
                    />
                  </div>
                  <div>
                    <label className="label font-bold">City Name</label>
                    <input
                      type="text"
                      value={payload.addrLine2}
                      onChange={(e) => {
                        handleChangeState("addrLine2", e.target.value),
                          handleChangeState("addrProv", {
                            provId: id,
                          });
                      }}
                      className="input w-full input-bordered font-normal"
                      placeholder={type}
                    />
                  </div>
                  <div>
                    <label className="label font-bold">Address</label>
                    <input
                      type="text"
                      value={payload.addrLine1}
                      onChange={(e) => {
                        handleChangeState("addrLine1", e.target.value);
                      }}
                      className="input w-full input-bordered font-normal"
                      placeholder="Address"
                    />
                  </div>
                  <div>
                    <label className="label font-bold">Postal Code</label>
                    <input
                      type="number"
                      pattern="\d{0,5}"
                      value={payload.addrPostalCode}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        if (inputValue.length <= 5) {
                          handleChangeState("addrPostalCode", inputValue);
                        }
                      }}
                      className="input w-full input-bordered font-normal"
                      placeholder="Postal Code"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="modal-action">
              <button
                type="button"
                className="btn btn-sm"
                onClick={handleOpenModal}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary btn-sm">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
