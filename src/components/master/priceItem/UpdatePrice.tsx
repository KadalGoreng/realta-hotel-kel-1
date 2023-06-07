import { UpdatePriceRequest } from "@/Redux/Actions/masterAction";
import { typePriceItems } from "@/utils/constant";
import { convertPrice } from "@/utils/helpers";
import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";

type Product = {
  pritId: number;
  pritName: string;
  pritPrice: string;
  pritDescription: string;
  pritType: string;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UpdatePrice(props: Product) {
  const dispatch = useDispatch();
  const { pritId, pritName, pritPrice, pritDescription, pritType, setRefresh } =
    props;

  const [payload, setPayload] = useState({
    id: pritId,
    pritName: pritName,
    pritPrice: convertPrice(pritPrice),
    pritDescription: pritDescription,
    pritType: pritType,
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
    if (payload.pritName !== "") {
      dispatch(UpdatePriceRequest(payload));
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
          <h3 className="font-bold text-lg">Edit Item</h3>
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
                      <option
                        selected={payload.pritType === type.toUpperCase()}
                        value={type.toUpperCase()}
                      >
                        {type}
                      </option>
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
