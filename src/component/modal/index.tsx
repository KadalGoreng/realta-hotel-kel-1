import React from "react";

const Modal = ({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) => {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
      <div className="w-[600px] flex flex-col">
        <button className="text-black p-2 rounded place-self-end" id="wrapper" onClick={() => onClose()}>
          X
        </button>
        <div className="border-solid border-2 border-black flex flex-col">
          <button className="bg-white p-">Edit</button>
          <button className="bg-white p-2">Add Facilities</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
