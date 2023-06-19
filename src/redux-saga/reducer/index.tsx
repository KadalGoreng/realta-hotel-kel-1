import { combineReducers } from "redux";

import VendorReducer from "./purchasing/vendorReducer";
import VendorProductReducer from "./purchasing/vendorProductReducer";
import StocksReducer from "./purchasing/stocksReducer";
import StockDetailReducer from "./purchasing/stockDetailReducer";
import PurchaseOrderHeaderReducer from "./purchasing/purchaseOrderHeaderReducer";
import PurchaseOrderDetailReducer from "./purchasing/purchaseOrderDetailReducer";
import StockPhotoReducer from "./purchasing/stockPhotoReducer";
import FacilitiesReducer from "./hotel/facilitiesReducer";

const rootReducer = combineReducers({
  vendorState: VendorReducer,
  vendorProductState: VendorProductReducer,
  stocksState: StocksReducer,
  stockDetailState: StockDetailReducer,
  PurchaseOrderHeaderState: PurchaseOrderHeaderReducer,
  PurchaseOrderDetailState: PurchaseOrderDetailReducer,
  StockPhotoState: StockPhotoReducer,
  FacilitiesState: FacilitiesReducer,
});

export default rootReducer;
