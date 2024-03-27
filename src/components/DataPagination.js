import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const DataPagination = (props) => {
  const [currentPage, setCurrentPage] = useState(props.currentPage);
  const { pageSize, pageCount, data } = props;
  const handleClick = (e, index) => {
    e.preventDefault();
    setCurrentPage(index);
  };

  let pageNumbers = [];
  for (let i = 0; i < pageCount; i++) {
    pageNumbers.push(
      <PaginationItem key={i} active={currentPage === i ? true : false}>
        <PaginationLink onClick={(e) => handleClick(e, i)} href="#">
          {i + 1}
        </PaginationLink>
      </PaginationItem>
    );
  }
  const paginatedData = data.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  return (
    <React.Fragment>
      {paginatedData.map((sdata, index) => (
        <tr key={index}>
          <td className="flex flex-row pr-36 py-7  m-2 text-lg">
            <img src={sdata?.imgUrl} width={40} alt="image" /> {sdata?.source}
          </td>
          <td className="pr-36 py-7 m-2 text-lg ">{sdata?.amount}</td>
          <td className="pr-36 py-7 m-2 text-lg">{sdata?.status}</td>
          <td className="pr-36 py-7 m-2 text-lg">{sdata?.userId}</td>
          <td className="pr-36  py-7 m-2 text-lg">{sdata?.joined}</td>
          <td className="pr-36 py-7 m-2 text-lg">{sdata?.group}</td>
        </tr>
      ))}
      <React.Fragment>
        <Pagination aria-label="Page navigation example">
          <div className="flex flex-auto justify-center">
            <PaginationItem>
              <PaginationLink
                style={{ font_size: "40" }}
                onClick={(e) => handleClick(e, currentPage - 1)}
                previous
                href="#"
              />
              {"<"}
            </PaginationItem>
            <h1 className="font-bold">{pageNumbers}</h1>

            <PaginationItem disabled={currentPage >= pageCount - 1}>
              <PaginationLink
                onClick={(e) => handleClick(e, currentPage + 1)}
                next
                href="#"
              />
            </PaginationItem>
          </div>
        </Pagination>
      </React.Fragment>
    </React.Fragment>
  );
};

export default DataPagination;
