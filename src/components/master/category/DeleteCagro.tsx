import { DeleteCagroRequest } from "@/Redux/Actions/masterAction";
import { useState } from "react";
import { useDispatch } from "react-redux";

type Props = {
  id: number;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DeleteCagro(props: Props) {
  const dispatch = useDispatch();
  const { id, setRefresh } = props;

  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(!modal);
  };

  const handleDelete = async (id: number) => {
    dispatch(DeleteCagroRequest(id));
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
          <h3 className="font-bold text-lg">Add you sure delete service?</h3>
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
