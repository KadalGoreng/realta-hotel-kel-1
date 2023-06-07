import { CreatePriceRequest } from "@/Redux/Actions/masterAction";
import { typePriceItems } from "@/utils/constant";
import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";

export default function AddPrice(props: any) {
  const { setRefresh } = props;
  const dispatch = useDispatch();

  const [payload, setPayload] = useState({
    pritName: "",
    pritPrice: "",
    pritDescription: "",
    pritType: "",
  });

  const [modal, setModal] = useState(false);
  const handleOpenModal = () => {
    setModal(!modal);
    setPayload({
      pritName: "",
      pritPrice: "",
      pritDescription: "",
      pritType: "",
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

    if (payload.pritName !== "") {
      dispatch(CreatePriceRequest(payload));
    } else {
      alert("Isi Semua Form");
      return;
    }

    setPayload({
      pritName: "",
      pritPrice: "",
      pritDescription: "",
      pritType: "",
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
          <h3 className=" text-lg">Add Item Price</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="flex flex-col gap-4">
                <div>
                  <label className="label font-bold">Item Name</label>
                  <input
                    type="text"
                    value={payload.pritName}
                    onChange={(e) =>
                      handleChangeState("pritName", e.target.value)
                    }
                    className="input w-full input-bordered font-normal"
                    placeholder="Item"
                  />
                </div>
                <div>
                  <label className="label font-bold">Type</label>
                  <select
                    className="select select-bordered w-full"
                    onChange={(e) =>
                      handleChangeState("pritType", e.target.value)
                    }
                  >
                    <option disabled selected>
                      Type
                    </option>
                    {typePriceItems.map((type: any) => (
                      <option value={type.toUpperCase()}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label font-bold">Item Price</label>
                  <input
                    type="number"
                    value={payload.pritPrice}
                    onChange={(e) =>
                      handleChangeState("pritPrice", e.target.value)
                    }
                    className="input w-full input-bordered font-normal"
                    placeholder="Price"
                  />
                </div>
                <div>
                  <label className="label font-bold">Description</label>
                  <input
                    type="text"
                    value={payload.pritDescription}
                    onChange={(e) =>
                      handleChangeState("pritDescription", e.target.value)
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
