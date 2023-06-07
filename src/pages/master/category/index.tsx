import {
  GetCagroRequest,
  GetPolicyRequest,
} from "@/Redux/Actions/masterAction";
import AddCagro from "@/components/master/category/AddCagro";
import DeleteCagro from "@/components/master/category/DeleteCagro";
import UpdateCagro from "@/components/master/category/UpdateCagro";
import ModalDescription from "@/components/master/ModalDescription";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function index() {
  const dispatch = useDispatch();

  const { cagro } = useSelector((state: any) => state.masterState);

  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    dispatch(GetCagroRequest());
    dispatch(GetPolicyRequest());
    setRefresh(false);
  }, [refresh]);

  return (
    <div className="w-full my-5 flex flex-col gap-4">
      <div className="flex justify-between mr-3">
        <span className="text-[24px]">Category Group</span>
      </div>
      <div className="overflow-x-auto">
        {!cagro ? (
          <div>Loading...</div>
        ) : (
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Category Id</th>
                <th>Category Name</th>
                <th>Type</th>
                <th>
                  <AddCagro setRefresh={setRefresh} />
                </th>
              </tr>
            </thead>
            <tbody>
              {cagro.map((item: any) => (
                <tr>
                  <td>
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_URL_API}/uploads/${item.cagroIcon}`}
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="ml-4">{item.cagroId}</span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      {item.cagroName}
                      <ModalDescription description={item.cagroDescription} />
                    </div>
                  </td>
                  <td>
                    <div>{item.cagroType}</div>
                  </td>
                  <td>
                    <div className="flex gap-4">
                      <UpdateCagro {...item} setRefresh={setRefresh} />
                      <DeleteCagro id={item.cagroId} setRefresh={setRefresh} />
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
