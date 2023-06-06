import { GetServiceRequest } from "@/Redux/Actions/masterAction";
import AddTask from "@/components/master/serviceTask/AddTask";
import DeleteTask from "@/components/master/serviceTask/DeleteTask";
import UpdateTask from "@/components/master/serviceTask/UpdateTask";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function index() {
  const dispatch = useDispatch();

  const { service } = useSelector((state: any) => state.masterState);

  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    dispatch(GetServiceRequest());
    setRefresh(false);
  }, [refresh]);

  return (
    <div className="w-full my-5 flex flex-col gap-4">
      <div className="flex justify-between mr-3">
        <span className="text-[24px]">Policy</span>
      </div>
      <div className="overflow-x-auto">
        {!service ? (
          <div>Loading...</div>
        ) : (
          <table className="table w-full">
            <thead>
              <tr>
                <th className="w-[22%]">Policy Id</th>
                <th className="w-[22%]">Policy Name</th>
                <th className="w-[21%]">Sequence Order</th>
                <th className="w-[35%]">
                  <AddTask />
                </th>
              </tr>
            </thead>
            <tbody>
              {service.map((service: any) => (
                <tr>
                  <td>
                    <span className="ml-4">{service.setaId}</span>
                  </td>
                  <td>
                    <div>{service.setaName}</div>
                  </td>
                  <td>
                    <div>{service.setSeq}</div>
                  </td>
                  <td>
                    <div className="flex gap-4">
                      <UpdateTask {...service} setRefresh={setRefresh} />
                      <DeleteTask id={service.setaId} setRefresh={setRefresh} />
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
