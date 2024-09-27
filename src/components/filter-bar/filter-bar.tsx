import { Svg } from "../../types";

import FilterBlock from "../filter-block/filter-block";

import "./filter-bar.css";

export const FilterBar = (props: {
  labels: { stage: string[]; state: string[]; projectType: string[] };
}) => {
  const { labels } = props;

  return (
    <div className="filter-bar">
      <FilterBlock value={"All Filters"} svg={Svg.ALL_FILTERS} />
      <FilterBlock
        value={"Stage: Active"}
        svg={Svg.DROPDOWN}
        labels={labels.stage}
      />
      <FilterBlock
        value={"State: All"}
        svg={Svg.DROPDOWN}
        labels={labels.state}
      />
      <FilterBlock
        value={"Project Type: All"}
        svg={Svg.DROPDOWN}
        labels={labels.projectType}
      />
      <FilterBlock value={"Total kW DC: <5,000"} svg={Svg.DROPDOWN} />
    </div>
  );
};

export default FilterBar;
