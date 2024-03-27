import React, { useMemo } from "react";
import DataPagination from "./DataPagination";
import { customersData } from "../constants";

const Table = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Source",
        accessor: "source",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "User ID ",
        accessor: "userId",
      },
      {
        Header: "Joined",
        accessor: "joined",
      },
      {
        Header: "Group",
        accessor: "group",
      },
    ],
    []
  );
  const data = customersData;
  const numberofpage = () => {
    if (data % 5) return data.length / 5 + 1;
    else return data.length / 5;
  };

  console.log(data);

  return (
    <div className="m-9   shadow-lg">
      <p className=" font-bold text-lg p-10">Installed App</p>
      <table className="table-auto ">
        <thead>
          <tr className="bg-gray-400 ">
            {columns.map((c, i) => {
              return (
                <th className="font-bold pr-36 py-7" key={c.Header + i}>
                  {c.Header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <DataPagination
            pageSize={5}
            pageCount={numberofpage()}
            currentPage={0}
            data={data}
          />
        </tbody>
      </table>
    </div>
  );
};
export default Table;
