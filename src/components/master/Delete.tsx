import {
  DeleteAddressRequest,
  DeleteCountryRequest,
  DeleteProvinceRequest,
  DeleteRegionsRequest,
} from "@/Redux/Actions/masterAction";
import { useState } from "react";
import { useDispatch } from "react-redux";

type Props = {
  id: number;
  type: string;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Delete(props: Props) {
  const dispatch = useDispatch();
  const { id, type, setRefresh } = props;

  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(!modal);
  };

  const handleDelete = async (id: number) => {
    if (type === "Region") {
      dispatch(DeleteRegionsRequest(id));
    } else if (type === "Country") {
      dispatch(DeleteCountryRequest(id));
    } else if (type === "Province") {
      dispatch(DeleteProvinceRequest(id));
    } else {
      dispatch(DeleteAddressRequest(id));
    }
    setRefresh(true);
    setModal(!modal);
  };

  return (
    <div>
      <button
        className="btn btn-error btn-sm text-white"
        onClick={handleOpenModal}
      >
        Delete
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleOpenModal}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Add you sure delete {type.toLowerCase()}?
          </h3>
          <div className="modal-action">
            <button
              type="button"
              className="btn btn-sm"
              onClick={handleOpenModal}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-error text-white btn-sm"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
