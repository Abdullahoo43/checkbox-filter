import { ReactComponent as FirstPageSvg } from "../../assets/first_page.svg";
import { ReactComponent as LastPageSvg } from "../../assets/last_page.svg";
import { ReactComponent as ShiftLeftSvg } from "../../assets/chevron_left.svg";
import { ReactComponent as ShiftRightSvg } from "../../assets/chevron_right.svg";

import "./pagination.css";

const Pagination = (props: {
  total: number;
  firstEntry: number;
  entriesCount: number;
  handlePageCount: (e: any) => void;
  moveToNextPage: () => void;
  moveToPrevPage: () => void;
  moveToFirstPage: () => void;
  moveToLastPage: () => void;
}) => {
  const {
    total,
    entriesCount,
    firstEntry,
    handlePageCount,
    moveToNextPage,
    moveToPrevPage,
    moveToFirstPage,
    moveToLastPage,
  } = props;

  const options = [5, 10, 15];
  const totalPages = [];

  for (let i = firstEntry; i < 3 + firstEntry && i < total / entriesCount; i++)
    totalPages.push(i + 1);

  return (
    <div className="page-info-container">
      <div className="page-info">
        <p>Show</p>
        <select id="range-select" onChange={handlePageCount}>
          {options.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <p>of {total}</p>
      </div>
      <div className="current-page">
        <span>
          <FirstPageSvg onClick={moveToFirstPage} />
        </span>
        <span>
          {" "}
          <ShiftLeftSvg onClick={moveToPrevPage} />
        </span>
        {totalPages.map((pageNumber) => {
          if (pageNumber === firstEntry + 1)
            return <span className="highlighted">{pageNumber}</span>;
          else return <span>{pageNumber}</span>;
        })}

        <span>
          <ShiftRightSvg onClick={moveToNextPage} />
        </span>
        <span>
          <LastPageSvg onClick={moveToLastPage} />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
