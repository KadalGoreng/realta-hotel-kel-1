import {
  UpdateAddressRequest,
  UpdateCountryRequest,
  UpdateProvinceRequest,
  UpdateRegionsRequest,
} from "@/Redux/Actions/masterAction";
import { SyntheticEvent, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

type Product = {
  id: number;
  name: string;
  type: string;
  code?: string;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Update(props: Product) {
  const dispatch = useDispatch();
  const { id, name, type, code, setRefresh } = props;

  const [payload, setPayload] = useState({
    id: id,
    regionName: name,
    provName: name,
    countryName: name,
    addrLine2: name,
  });
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(!modal);
  };

  const handleChangeState = (key: string | number, value: string | number) => {
    setPayload((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const { id, regionName, countryName, provName, addrLine2 } = payload;
    if (type === "Region" && regionName !== "") {
      dispatch(UpdateRegionsRequest({ id, regionName }));
    } else if (type === "Country" && countryName !== "") {
      dispatch(UpdateCountryRequest({ id, countryName }));
    } else if (type === "Province" && provName !== "") {
      dispatch(UpdateProvinceRequest({ id, provName }));
    } else if (type === "City" && addrLine2 !== "") {
      dispatch(
        UpdateAddressRequest({
          id,
          addrLine2,
        })
      );
    } else {
      alert("Isi Semua Form");
      return;
    }
    setRefresh(true);
    setModal(!modal);
  };

  useEffect(() => {
    if (type === "Country") {
      handleChangeState("countryName", name);
    } else if (type === "Province") {
      handleChangeState("provName", name);
    } else if (type === "City") {
      handleChangeState("addrLine2", name);
    }
    handleChangeState("id", id);
  }, [name, id]);

  return (
    <div>
      <button className="btn btn-primary btn-sm" onClick={handleOpenModal}>
        Edit
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleOpenModal}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit {type}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              {type === "Region" ? (
                <>
                  <label className="label font-bold">Region Name</label>
                  <input
                    type="text"
                    value={payload.regionName}
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
                      onChange={(e) =>
                        handleChangeState("countryName", e.target.value)
                      }
                      className="input w-full input-bordered font-normal"
                      placeholder="Country Name"
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
                      onChange={(e) =>
                        handleChangeState("provName", e.target.value)
                      }
                      className="input w-full input-bordered font-normal"
                      placeholder="Province"
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
                    <label className="label font-bold">Country Name</label>
                    <input
                      type="text"
                      value={payload.addrLine2}
                      onChange={(e) =>
                        handleChangeState("addrLine2", e.target.value)
                      }
                      className="input w-full input-bordered font-normal"
                      placeholder="Region"
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
