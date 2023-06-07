import { GetPolicyRequest } from "@/Redux/Actions/masterAction";
import AddPolicy from "@/components/master/policy/AddPolicy";
import DeletePolicy from "@/components/master/policy/DeletePolicy";
import ModalDescription from "@/components/master/ModalDescription";
import UpdatePolicy from "@/components/master/policy/UpdatePolicy";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function index() {
  const dispatch = useDispatch();

  const { policy } = useSelector((state: any) => state.masterState);

  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    dispatch(GetPolicyRequest());
    setRefresh(false);
  }, [refresh]);

  return (
    <div className="w-full my-5 flex flex-col gap-4">
      <div className="flex justify-between mr-3">
        <span className="text-[24px]">Policy</span>
      </div>
      <div className="overflow-x-auto">
        {!policy ? (
          <div>Loading...</div>
        ) : (
          <table className="table w-full">
            <thead>
              <tr>
                <th className="w-[30%]">Policy Id</th>
                <th className="w-[35%]">Policy Name</th>
                <th className="w-[35%]">
                  <AddPolicy />
                </th>
              </tr>
            </thead>
            <tbody>
              {policy.map((polis: any) => (
                <tr>
                  <td>
                    <span className="ml-4">{polis.poliId}</span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      {polis.poliName}
                      <ModalDescription description={polis.poliDescription} />
                    </div>
                  </td>
                  <td>
                    <div className="flex gap-4">
                      <UpdatePolicy {...polis} setRefresh={setRefresh} />
                      <DeletePolicy id={polis.poliId} setRefresh={setRefresh} />
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
