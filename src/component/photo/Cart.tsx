import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

export default function Cart(props: any) {
  const convertPrice = (price: string) => {
    return parseFloat(price.replace(/[$,RP]/gi, ""));
  };

  const { vendorProducts } = useSelector((state: any) => state.vendorProductState);

  const filterCart = vendorProducts.filter((data: any) => props.selectCart.includes(data.veproId));

  const [cart, setCart] = useState<any>(filterCart);
  // const formatPrice = (price: number) => {
  //   return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  // };

  function calculate() {
    return props.selectCart.reduce((prev: any, cur: any) => prev + cur.stockSubtotal, 0);
  }

  // console.log(cart);
  // console.log(filterCart);

  const remove = (id: any) => {
    const index = props.selectCart.findIndex((item: any) => item.veproId == id);
    props.setSelectCart([...props.selectCart.slice(0, index), ...props.selectCart.slice(index + 1)]);
  };

  // const StockexistingItem = props.selectCart.find((cartItem: any) => cartItem.veproId === veproId);
  return (
    <>
      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <div className="ml-3 flex h-7 items-center"></div>
          </div>

          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {props.selectCart &&
                  props.selectCart.map((product: any) => (
                    <li key={product.veproId} className="flex py-6">
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <p>{product.veproStock.stockName}</p>
                            </h3>
                          </div>
                          <p className="mt-4"> {product.veproVendor.vendorName}</p>
                          <p className="mt-4">
                            Rp {convertPrice(product.veproPrice)} X {product.stockQty} = {product.stockSubtotal}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="flex">
                            <button onClick={() => remove(product.veproId)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className=" text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p className="mb-3">Rp {calculate()}</p>
            <p>Tax</p>
            <p>10 %</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3 className="mt-3">TOTAL</h3>
            <h3>Rp {calculate() + calculate() * 0.1}</h3>
          </div>
          <div className="mt-6">
            <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
              Request Order
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
