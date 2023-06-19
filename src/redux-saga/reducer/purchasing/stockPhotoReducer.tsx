import * as ActionType from "../../constant/purchasing/stockPhotoConstant";

const INIT_STATE = {
  stockPhotos: [],
  stockPhoto: [],
};

const StockPhotoReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_STOCKPHOTO_REQUEST:
      return { ...state };
    case ActionType.GET_STOCKPHOTO_SUCCESS:
      return GetStockPhotoSuccessfully(state, action);

    case ActionType.ADD_STOCKPHOTO_REQUEST:
      return { ...state };
    case ActionType.ADD_STOCKPHOTO_SUCCESS:
      return AddStockPhotoSuccessfully(state, action);

    case ActionType.FIND_STOCKPHOTO_REQUEST:
      return { ...state };
    case ActionType.FIND_STOCKPHOTO_SUCCESS:
      return FindStockPhotoSuccessfully(state, action);

    case ActionType.EDIT_STOCKPHOTO_REQUEST:
      return { ...state };
    case ActionType.EDIT_STOCKPHOTO_SUCCESS:
      return EditStockPhotoSuccessfully(state, action);

    case ActionType.DEL_STOCKPHOTO_REQUEST:
      return { ...state };
    case ActionType.DEL_STOCKPHOTO_SUCCESS:
      return DeleteStockPhotoSuccessfully(state, action);

    default:
      return { ...state };
  }
};

const GetStockPhotoSuccessfully = (state: any, action: any) => {
  console.log(state);
  return {
    ...state,
    stockPhotos: action.payload,
  };
};

const AddStockPhotoSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    stockPhoto: [...state.stockPhoto, payload],
  };
};

const FindStockPhotoSuccessfully = (state: any, action: any) => {
  // const { payload } = action;
  return {
    ...state,
    stockPhoto: action.payload,
  };
};

const EditStockPhotoSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeleteStockPhotoSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default StockPhotoReducer;
