import { combineReducers } from "redux";

import VendorReducer from "./vendorReducer";
import VendorProductReducer from "./vendorProductReducer";
import StocksReducer from "./stocksReducer";
import StockDetailReducer from "./stockDetailReducer";
import PurchaseOrderHeaderReducer from "./purchaseOrderHeaderReducer";
import PurchaseOrderDetailReducer from "./purchaseOrderDetailReducer";
import StockPhotoReducer from "./stockPhotoReducer";

const rootReducer = combineReducers({
  vendorState: VendorReducer,
  vendorProductState: VendorProductReducer,
  stocksState: StocksReducer,
  stockDetailState: StockDetailReducer,
  PurchaseOrderHeaderState: PurchaseOrderHeaderReducer,
  PurchaseOrderDetailState: PurchaseOrderDetailReducer,
  StockPhotoState: StockPhotoReducer,
});

export default rootReducer;
