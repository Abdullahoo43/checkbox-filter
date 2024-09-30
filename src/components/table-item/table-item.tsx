import { Project } from "../../types";
import Button from "../button/button";

import "./table-item.css";

const TableItem = (props: { item: Project }) => {
  const { item } = props;
  return (
    <tr className="table-body-row">
      <td className="body-block">{item.projectName}</td>
      <td className="body-block">
        <Button value={item.stage} />
      </td>
      <td className="body-block">{item.state}</td>
      <td className="body-block">{Number(item.totalKwDC).toFixed(2)}</td>
      <td className="body-block">{item.projectType}</td>
      <td className="body-block">{item.solutionType}</td>
      <td className="body-block">{item.offtakeType}</td>
    </tr>
  );
};

export default TableItem;
