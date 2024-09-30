import { Project } from "../../types";

import { ReactComponent as DropdownSvg } from "../../assets/angle-down.svg";

import TableItem from "../table-item/table-item";

import "./table.css";

const Table = (props: { projects: Project[] }) => {
  const { projects } = props;
  return (
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
        {projects.map((project: Project) => (
          <TableItem item={project} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
