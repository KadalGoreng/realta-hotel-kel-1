import { CreatePolicyRequest } from "@/Redux/Actions/masterAction";
import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";

export default function AddPolicy(props: any) {
  const { setRefresh } = props;
  const dispatch = useDispatch();

  const [payload, setPayload] = useState({
    poliName: "",
    poliDescription: "",
  });

  const [modal, setModal] = useState(false);
  const handleOpenModal = () => {
    setModal(!modal);
    setPayload({
      poliName: "",
      poliDescription: "",
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

    if (payload.poliName !== "") {
      dispatch(CreatePolicyRequest(payload));
    } else {
      alert("Isi Semua Form");
      return;
    }

    setPayload({
      poliName: "",
      poliDescription: "",
    });
    setRefresh(true);
    setModal(!modal);
  };

  return (
    <div>
      <button className="" onClick={handleOpenModal}>
        + ADD
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleOpenModal}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className=" text-lg">Add Policy</h3>
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
