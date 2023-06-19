// import { EditStockPhotoRequest } from "@/redux-saga/action/stockPhotoAction";
import { EditStockPhotoRequest } from "@/redux-saga/action/purchasing/stockPhotoAction";
import React from "react";
import { useDispatch } from "react-redux";
export default function PhotoPrimary(props: any) {
  const dispatch = useDispatch();
  const onEdit = () => {
    // const primary = props.primary === 0 ? 1 : 0;
    const payload = {
      sphoId: props.id,
      sphoPrimary: props.primary === 1 ? 0 : 1,
    };
    dispatch(EditStockPhotoRequest(payload));
    props.setRefresh(true);
  };

  return (
    <div>
      <input type="checkbox" checked={props.primary === 1 ? true : false} onChange={onEdit}></input>
      <label> Set as Primary{props.primary}</label>
    </div>
  );
}
