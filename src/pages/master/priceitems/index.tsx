import { GetPriceRequest } from "@/Redux/Actions/masterAction";
import ModalDescription from "@/components/master/ModalDescription";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { convertPrice, formatPrice } from "@/utils/helpers";
import AddPrice from "@/components/master/priceItem/AddPrice";
import UpdatePrice from "@/components/master/priceItem/UpdatePrice";
import DeletePrice from "@/components/master/priceItem/DeletePrice";

export default function index() {
  const dispatch = useDispatch();

  const { priceItem } = useSelector((state: any) => state.masterState);

  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    dispatch(GetPriceRequest());
    setRefresh(false);
  }, [refresh]);

  return (
    <div className="w-full my-5 flex flex-col gap-4">
      <div className="flex justify-between mr-3">
        <span className="text-[24px]">Price Items</span>
      </div>
      <div className="overflow-x-auto">
        {!priceItem ? (
          <div>Loading...</div>
        ) : (
          <table className="table w-full">
            <thead>
              <tr>
                {/* <th></th> */}
                <th>Id</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Type</th>
                <th>
                  <AddPrice setRefresh={setRefresh} />
                </th>
              </tr>
            </thead>
            <tbody>
              {priceItem.map((item: any) => (
                <tr>
                  {/* <td>
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_URL_API}/uploads/${item.cagroIcon}`}
                        />
                      </div>
                    </div>
                  </td> */}
                  <td>
                    <span className="ml-4">{item.pritId}</span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      {item.pritName}
                      <ModalDescription description={item.pritDescription} />
                    </div>
                  </td>
                  <td>
                    <span className="ml-4">{`Rp. ${formatPrice(
                      convertPrice(item.pritPrice)
                    )}`}</span>
                  </td>
                  <td>
                    <div>{item.pritType}</div>
                  </td>
                  <td>
                    <div className="flex gap-4">
                      <UpdatePrice {...item} setRefresh={setRefresh} />
                      <DeletePrice id={item.pritId} setRefresh={setRefresh} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
