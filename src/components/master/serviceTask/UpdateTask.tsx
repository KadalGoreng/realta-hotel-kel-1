import { UpdateServiceRequest } from "@/Redux/Actions/masterAction";
import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";

type Product = {
  setaId: number;
  setaName: string;
  setSeq: string;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UpdateTask(props: Product) {
  const dispatch = useDispatch();
  const { setaId, setaName, setSeq, setRefresh } = props;

  const [payload, setPayload] = useState({
    id: setaId,
    setaName: setaName,
    setSeq: setSeq,
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
    if (payload.setaName !== "") {
      dispatch(UpdateServiceRequest(payload));
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
          <h3 className="font-bold text-lg">Edit Service</h3>
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
                    placeholder="Policy"
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
