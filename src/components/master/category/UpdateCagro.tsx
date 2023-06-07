import { UpdateCagroRequest } from "@/Redux/Actions/masterAction";
import { SyntheticEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Product = {
  cagroId: string;
  cagroName: string;
  cagroDescription: string;
  cagroType: string;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UpdateCagro(props: Product) {
  const dispatch = useDispatch();

  const { policy } = useSelector((state: any) => state.masterState);

  const { cagroId, cagroName, cagroDescription, cagroType, setRefresh } = props;

  const [payload, setPayload] = useState({
    id: cagroId,
    cagroName: cagroName,
    cagroDescription: cagroDescription,
    cagroType: cagroType,
    poliId: "",
    file: "",
  });
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(!modal);
  };

  const handleChangeState = (key: string, value: string) => {
    setPayload((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const data = new FormData();
    if (payload.file !== "") {
      data.append("file", payload.file);
    }
    if (payload.poliId !== "") {
      data.append("poliId", payload.poliId);
    }
    data.append("cagroName", payload.cagroName);
    data.append("cagroDescription", payload.cagroDescription);
    data.append("cagroType", payload.cagroType);

    if (payload.cagroName !== "") {
      dispatch(UpdateCagroRequest(data, payload.id));
    } else {
      alert("Isi Semua Form");
      return;
    }
    setRefresh(true);
    handleChangeState("poliId", "");
    setModal(!modal);
  };

  const onFileUpload = (e: any) => {
    const file = e.target.files[0];
    handleChangeState("file", file);
  };

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
          <h3 className="font-bold text-lg">Edit Cagro</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="flex flex-col gap-4">
                <div>
                  <label className="label font-bold">Cagro Name</label>
                  <input
                    type="text"
                    value={payload.cagroName}
                    onChange={(e) =>
                      handleChangeState("cagroName", e.target.value)
                    }
                    className="input w-full input-bordered font-normal"
                    placeholder="Policy"
                  />
                </div>
                <div>
                  <label className="label font-bold">Type</label>
                  <select
                    className="select select-bordered w-full"
                    value={payload.cagroType}
                    onChange={(e) =>
                      handleChangeState("cagroType", e.target.value)
                    }
                  >
                    <option disabled selected>
                      Type
                    </option>
                    <option value="Facility">Facility</option>
                    <option value="Service">Service</option>
                  </select>
                </div>
                <div>
                  <label className="label font-bold">Policy Rules</label>
                  <select
                    className="select select-bordered w-full"
                    onChange={(e) =>
                      handleChangeState("poliId", e.target.value)
                    }
                  >
                    <option disabled selected>
                      Type
                    </option>
                    {policy.data &&
                      policy.data.map((polis: any) => (
                        <option value={polis.poliId}>{polis.poliName}</option>
                      ))}
                  </select>
                </div>
                {/* <div>
                  <label className="label font-bold">Policy Rules</label>
                  <select
                    className="select select-bordered w-full"
                    onChange={(e) =>
                      handleChangeState("poliId", e.target.value)
                    }
                  >
                    <option disabled selected>
                      Type
                    </option>
                    {policy.map((polis: any) => (
                      <option value={polis.poliId}>{polis.poliName}</option>
                    ))}
                  </select>
                </div> */}
                <div>
                  <label className="label font-bold">Description</label>
                  <input
                    type="text"
                    value={payload.cagroDescription}
                    onChange={(e) =>
                      handleChangeState("cagroDescription", e.target.value)
                    }
                    className="input w-full input-bordered font-normal"
                    placeholder="Description"
                  />
                </div>
                <div>
                  <input type="file" onChange={(e) => onFileUpload(e)} />
                </div>
              </div>
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
