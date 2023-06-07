import {
  UpdateCountryRequest,
  UpdatePolicyRequest,
  UpdateRegionsRequest,
} from "@/Redux/Actions/masterAction";
import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";

type Product = {
  poliId: number;
  poliName: string;
  poliDescription?: string;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UpdatePolicy(props: Product) {
  const dispatch = useDispatch();
  const { poliId, poliName, poliDescription, setRefresh } = props;

  const [payload, setPayload] = useState({
    id: poliId,
    poliName: poliName,
    poliDescription: poliDescription,
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
    if (payload.poliName !== "") {
      dispatch(UpdatePolicyRequest(payload));
    } else {
      alert("Isi Semua Form");
      return;
    }
    setRefresh(true);
    setModal(!modal);
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
          <h3 className="font-bold text-lg">Edit Policy</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="flex flex-col gap-4">
                <div>
                  <label className="label font-bold">Policy Name</label>
                  <input
                    type="text"
                    value={payload.poliName}
                    onChange={(e) =>
                      handleChangeState("poliName", e.target.value)
                    }
                    className="input w-full input-bordered font-normal"
                    placeholder="Policy"
                  />
                </div>
                <div>
                  <label className="label font-bold">Policy Description</label>
                  <input
                    type="text"
                    value={payload.poliDescription}
                    onChange={(e) =>
                      handleChangeState("poliDescription", e.target.value)
                    }
                    className="input w-full input-bordered font-normal"
                    placeholder="Description"
                  />
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
