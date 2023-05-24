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
    return props.selectCart.reduce((prev: any, cur: any) => prev + convertPrice(cur.veproPrice), 0);
  }

  // console.log(cart);
  // console.log(filterCart);

  console.log(props.selectCart);

  const remove = (id: any) => {
    const index = props.selectCart.findIndex((item: any) => item.veproId == id);
    props.setSelectCart([...props.selectCart.slice(0, index), ...props.selectCart.slice(index + 1)]);
  };

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.setOpen}>
        <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Items Ordered</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500" onClick={() => props.setOpen(false)}>
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
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
                                      <p className="mt-4">Rp {product.veproVendor.vendorName}</p>
                                      <p className="mt-4">Rp {convertPrice(product.veproPrice)}</p>
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
                        <p className="mb-3">{calculate()}</p>
                        <p>Tax</p>
                        <p>10 %</p>
                      </div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3 className="mt-3">TOTAL</h3>
                        <h3>{calculate() * 0.1}</h3>
                      </div>
                      <div className="mt-6">
                        <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                          Request Order
                        </a>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
