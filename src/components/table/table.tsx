import { Project } from "../../types";

import { ReactComponent as DropdownSvg } from "../../assets/angle-down.svg";

import TableItem from "../table-item/table-item";

import "./table.css";
import Pagination from "../pagination/pagination";
import { useState } from "react";

const Table = (props: { projects: Project[] }) => {
  const { projects } = props;

  const [entriesCount, setEntriesCount] = useState(5);
  const [firstEntry, setFirstEntry] = useState(0);

  const handlePageCount = (e: any) => {
    setEntriesCount(Number(e.target.value));
  };

  const moveToNextPage = () => {
    if (firstEntry < Math.ceil(projects.length / entriesCount) - 1)
      setFirstEntry((prev) => prev + 1);
  };

  const moveToPrevPage = () => {
    if (firstEntry > 0) setFirstEntry((prev) => prev - 1);
  };

  const moveToFirstPage = () => {
    if (firstEntry !== 0) setFirstEntry(0);
  };

  const moveToLastPage = () => {
    if (firstEntry !== Math.ceil(projects.length / entriesCount) - 1)
      setFirstEntry(Math.ceil(projects.length / entriesCount) - 1);
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-header">
          <tr className="table-header-row">
            <th>
              <div className="header-block">
                <p>Project Name</p>
                <DropdownSvg />
              </div>
            </th>
            <th>
              <div className="header-block">
                <p>Stage</p>
                <DropdownSvg />
              </div>
            </th>
            <th>
              <div className="header-block">
                <p>State</p>
                <DropdownSvg />
              </div>
            </th>
            <th>
              <div className="header-block">
                <p>Total kW DC</p>
                <DropdownSvg />
              </div>
            </th>
            <th>
              <div className="header-block">
                <p>Project Type</p>
                <DropdownSvg />
              </div>
            </th>
            <th>
              <div className="header-block">
                <p>Solution Type</p>
                <DropdownSvg />
              </div>
            </th>
            <th>
              <div className="header-block">
                <p>Offtake Type</p>
                <DropdownSvg />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="table-body">
          {projects
            .slice(
              firstEntry * entriesCount,
              firstEntry * entriesCount + entriesCount
            )
            .map((project: Project) => (
              <TableItem item={project} />
            ))}
        </tbody>
      </table>
      <Pagination
        total={projects.length}
        firstEntry={firstEntry}
        entriesCount={entriesCount}
        handlePageCount={handlePageCount}
        moveToNextPage={moveToNextPage}
        moveToPrevPage={moveToPrevPage}
        moveToFirstPage={moveToFirstPage}
        moveToLastPage={moveToLastPage}
      />
    </div>
  );
};

export default Table;
