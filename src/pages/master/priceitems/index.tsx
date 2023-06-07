import { GetPriceRequest } from "@/Redux/Actions/masterAction";
import ModalDescription from "@/components/master/ModalDescription";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { convertPrice, formatPrice } from "@/utils/helpers";
import AddPrice from "@/components/master/priceItem/AddPrice";
import UpdatePrice from "@/components/master/priceItem/UpdatePrice";
import DeletePrice from "@/components/master/priceItem/DeletePrice";
import { Pagination, Stack } from "@mui/material";
import ReactPaginate from "react-paginate";

export default function index() {
  const dispatch = useDispatch();

  const { priceItem } = useSelector((state: any) => state.masterState);

  const [refresh, setRefresh] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [selectedPage, setSelectedPage] = useState(1);

  const handlePageClick = (e: any, p: any) => {
    setSelectedPage(p);
  };
  const handlePageClick2 = (e: any) => {
    setSelectedPage(e.selected + 1);
  };

  useEffect(() => {
    dispatch(GetPriceRequest(search, selectedPage));
    setRefresh(false);
  }, [refresh, search, selectedPage]);

  useEffect(() => {
    setSelectedPage(1);
  }, [search]);

  return (
    <div className="w-full my-5 flex flex-col gap-4">
      <div className="flex justify-between mr-3">
        <span className="text-[24px]">Price Items</span>
      </div>
      <div className="overflow-x-auto">
        {!priceItem.data ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 p-2">
              <label className="label font-bold">Search Item</label>
              <input
                type="text"
                className="input input-bordered font-normal"
                placeholder="Item"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-4 justify-between h-[750px]">
              <table className="table w-full">
                <thead>
                  <tr>
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
                  {priceItem.data.map((item: any) => (
                    <tr>
                      <td>
                        <span className="ml-4">{item.pritId}</span>
                      </td>
                      <td>
                        <div className="flex gap-2">
                          {item.pritName}
                          <ModalDescription
                            description={item.pritDescription}
                          />
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
                          <DeletePrice
                            id={item.pritId}
                            setRefresh={setRefresh}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Stack spacing={2}>
                <Pagination
                  count={priceItem.totalPages}
                  shape="rounded"
                  page={selectedPage}
                  onChange={handlePageClick}
                />
              </Stack>
            </div>
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick2}
              pageRangeDisplayed={1}
              pageCount={priceItem.totalPages}
              previousLabel="< prev"
              forcePage={selectedPage - 1}
              containerClassName="flex gap-1"
              renderOnZeroPageCount={null}
              nextClassName="btn btn-sm rounded btn-outline"
              previousClassName="btn btn-sm rounded btn-outline"
              activeLinkClassName="bg-[#1C1C1C] text-white"
              pageLinkClassName="btn btn-sm rounded btn-outline"
            />
          </div>
        )}
      </div>
    </div>
  );
}
