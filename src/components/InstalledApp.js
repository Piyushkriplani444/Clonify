import React, { useMemo } from "react";
import Table from "./Table";
import { customersData } from "../constants";
const InstalledApp = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Image",
        accessor: "img",
      },
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
  const data = useMemo(() => customersData(), []);

  return (
    <div className="container shadow-lg p-10 m-2">
      <div>
        <p className="p-2 font-bold text-lg">Installed App</p>
        <div>
          <Table columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default InstalledApp;
