import { takeEvery, all } from "redux-saga/effects";

import * as ActionTypeVendor from "../constant/vendorConstant";
import * as ActionTypeVendorProduct from "../constant/vendorProductConstant";
import * as ActionTypeStock from "../constant/stocksConstant";
import * as ActionTypeStockDetail from "../constant/stockDetailConstant";
import * as ActionTypePurchaseOrderHeader from "../constant/purchaseOrderHeaderConstant";
import * as ActionTypePurchaseOrderDetail from "../constant/purchaseOrderDetailConstant";
import * as ActionTypeStockPhoto from "../constant/stockPhotoConstant";

import { createVendor, deleteVendor, editVendor, findVendor, handleVendor } from "./VendorSaga";
import { createVendorProduct, deleteVendorProduct, editVendorProduct, findVendorProduct, handleVendorProduct } from "./VendorProductSaga";
import { createStock, deleteStock, editStock, findStock, handleStock } from "./StocksSaga";
import { StockDetailByStockId, createStockDetail, deleteStockDetail, editStockDetail, findStockDetail, handleStockDetail } from "./StockDetailSaga";
import { createPurchaseOrderHeader, deletePurchaseOrderHeader, editPurchaseOrderHeader, findPurchaseOrderHeader, handlePurchaseOrderHeader } from "./PurchaseOrderHeader";
import { createPurchaseOrderDetail, deletePurchaseOrderDetail, editPurchaseOrderDetail } from "./PurchaseOrderDetailSaga";
import { createStockPhoto, deleteStockPhoto, editStockPhoto, findStockPhoto, handleStockPhoto } from "./StockPhotoSaga";

function* watchAll() {
  yield all([
    // mproject
    takeEvery(ActionTypeVendor.GET_VENDOR_REQUEST, handleVendor),
    takeEvery(ActionTypeVendor.ADD_VENDOR_REQUEST, createVendor),
    takeEvery(ActionTypeVendor.FIND_VENDOR_REQUEST, findVendor),
    takeEvery(ActionTypeVendor.EDIT_VENDOR_REQUEST, editVendor),
    takeEvery(ActionTypeVendor.DEL_VENDOR_REQUEST, deleteVendor),

    takeEvery(ActionTypeVendorProduct.GET_VENDORPRODUCT_REQUEST, handleVendorProduct),
    takeEvery(ActionTypeVendorProduct.ADD_VENDORPRODUCT_REQUEST, createVendorProduct),
    takeEvery(ActionTypeVendorProduct.FIND_VENDORPRODUCT_REQUEST, findVendorProduct),
    takeEvery(ActionTypeVendorProduct.EDIT_VENDORPRODUCT_REQUEST, editVendorProduct),
    takeEvery(ActionTypeVendorProduct.DEL_VENDORPRODUCT_REQUEST, deleteVendorProduct),

    takeEvery(ActionTypeStock.GET_STOCK_REQUEST, handleStock),
    takeEvery(ActionTypeStock.ADD_STOCK_REQUEST, createStock),
    takeEvery(ActionTypeStock.FIND_STOCK_REQUEST, findStock),
    takeEvery(ActionTypeStock.EDIT_STOCK_REQUEST, editStock),
    takeEvery(ActionTypeStock.DEL_STOCK_REQUEST, deleteStock),

    takeEvery(ActionTypeStockDetail.GET_STOCKDETAIL_REQUEST, handleStockDetail),
    takeEvery(ActionTypeStockDetail.GET_STOCKDETAILBYSTOCKID_REQUEST, StockDetailByStockId),
    takeEvery(ActionTypeStockDetail.ADD_STOCKDETAIL_REQUEST, createStockDetail),
    takeEvery(ActionTypeStockDetail.FIND_STOCKDETAIL_REQUEST, findStockDetail),
    takeEvery(ActionTypeStockDetail.EDIT_STOCKDETAIL_REQUEST, editStockDetail),
    takeEvery(ActionTypeStockDetail.DEL_STOCKDETAIL_REQUEST, deleteStockDetail),

    takeEvery(ActionTypePurchaseOrderHeader.GET_PURCHASEORDERHEADER_REQUEST, handlePurchaseOrderHeader),
    takeEvery(ActionTypePurchaseOrderHeader.ADD_PURCHASEORDERHEADER_REQUEST, createPurchaseOrderHeader),
    takeEvery(ActionTypePurchaseOrderHeader.FIND_PURCHASEORDERHEADER_REQUEST, findPurchaseOrderHeader),
    takeEvery(ActionTypePurchaseOrderHeader.EDIT_PURCHASEORDERHEADER_REQUEST, editPurchaseOrderHeader),
    takeEvery(ActionTypePurchaseOrderHeader.DEL_PURCHASEORDERHEADER_REQUEST, deletePurchaseOrderHeader),

    takeEvery(ActionTypePurchaseOrderDetail.ADD_PURCHASEORDERDETAIL_REQUEST, createPurchaseOrderDetail),
    takeEvery(ActionTypePurchaseOrderDetail.EDIT_PURCHASEORDERDETAIL_REQUEST, editPurchaseOrderDetail),
    takeEvery(ActionTypePurchaseOrderDetail.DEL_PURCHASEORDERDETAIL_REQUEST, deletePurchaseOrderDetail),

    takeEvery(ActionTypeStockPhoto.GET_STOCKPHOTO_REQUEST, handleStockPhoto),
    takeEvery(ActionTypeStockPhoto.ADD_STOCKPHOTO_REQUEST, createStockPhoto),
    takeEvery(ActionTypeStockPhoto.EDIT_STOCKPHOTO_REQUEST, editStockPhoto),
    takeEvery(ActionTypeStockPhoto.DEL_STOCKPHOTO_REQUEST, deleteStockPhoto),
    takeEvery(ActionTypeStockPhoto.FIND_STOCKPHOTO_REQUEST, findStockPhoto),
  ]);
}

export default watchAll;
