import { CreateServiceRequest } from "@/Redux/Actions/masterAction";
import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";

export default function AddTask(props: any) {
  const { setRefresh } = props;
  const dispatch = useDispatch();

  const [payload, setPayload] = useState({
    setaName: "",
    setSeq: "",
  });

  const [modal, setModal] = useState(false);
  const handleOpenModal = () => {
    setModal(!modal);
    setPayload({
      setaName: "",
      setSeq: "",
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

    if (payload.setaName !== "") {
      dispatch(CreateServiceRequest(payload));
    } else {
      alert("Isi Semua Form");
      return;
    }

    setRefresh(true);
    setPayload({
      setaName: "",
      setSeq: "",
    });
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
                  <label className="label font-bold">Service Name</label>
                  <input
                    type="text"
                    value={payload.setaName}
                    onChange={(e) =>
                      handleChangeState("setaName", e.target.value)
                    }
                    className="input w-full input-bordered font-normal"
                    placeholder="Service"
                  />
                </div>
                <div>
                  <label className="label font-bold">Sequence Order</label>
                  <input
                    type="number"
                    value={payload.setSeq}
                    onChange={(e) =>
                      handleChangeState("setSeq", e.target.value)
                    }
                    className="input w-full input-bordered font-normal"
                    placeholder="Sequence"
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
