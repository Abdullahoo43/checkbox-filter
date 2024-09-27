import "./App.css";

import {
  Project,
  Stage,
  State,
  ProjectType,
  SolutionType,
  OfftakeType,
} from "./types";

import FilterBar from "./components/filter-bar/filter-bar";
import Table from "./components/table/table";

const projects: Project[] = [
  {
    projectName: "NOLA 1",
    stage: Stage.IN_CONSTRUCTION,
    state: State.DELAWERE,
    totalKwDC: 562,
    projectType: ProjectType.BESS,
    solutionType: SolutionType.BESS,
    offtakeType: OfftakeType.VPPA,
  },
  {
    projectName: "LL Cranberry (Mid Atlantic)",
    stage: Stage.IN_CONSTRUCTION,
    state: State.ILLINOIS,
    totalKwDC: 345,
    projectType: ProjectType.CARPORT,
    solutionType: SolutionType.BESS,
    offtakeType: OfftakeType.VPPA,
  },
  {
    projectName: "LL Valleyview OH",
    stage: Stage.IN_DEVELOPMENT,
    state: State.LOUSIANA,
    totalKwDC: 789,
    projectType: ProjectType.ROOF,
    solutionType: SolutionType.BESS,
    offtakeType: OfftakeType.PPA,
  },
  {
    projectName: "Preferred Freezer (NJ)",
    stage: Stage.OPERATING,
    state: State.MARYLAND,
    totalKwDC: 423,
    projectType: ProjectType.FLOATING,
    solutionType: SolutionType.BESS,
    offtakeType: OfftakeType.VPPA,
  },
  {
    projectName: "ON Sites",
    stage: Stage.IN_DEVELOPMENT,
    state: State.OHIO,
    totalKwDC: 678,
    projectType: ProjectType.GROUND,
    solutionType: SolutionType.SOLAR,
    offtakeType: OfftakeType.OP_LEASE,
  },
  {
    projectName: "PF-Chicago 1",
    stage: Stage.OPERATING,
    state: State.MICHIGAN,
    totalKwDC: 234,
    projectType: ProjectType.ROOF,
    solutionType: SolutionType.SOLAR,
    offtakeType: OfftakeType.OP_LEASE,
  },
  {
    projectName: "Fairview Farms",
    stage: Stage.PRE_CONTRACT,
    state: State.PENNSYLVANIA,
    totalKwDC: 890,
    projectType: ProjectType.BESS,
    solutionType: SolutionType.SOLAR,
    offtakeType: OfftakeType.OP_LEASE,
  },
  {
    projectName: "LL Scranton PA",
    stage: Stage.IN_CONSTRUCTION,
    state: State.ONTARIO,
    totalKwDC: 567,
    projectType: ProjectType.GROUND,
    solutionType: SolutionType.BESS,
    offtakeType: OfftakeType.PPA,
  },
  {
    projectName: "Geneva Lineage (IL)",
    stage: Stage.OPERATING,
    state: State.NEW_JERSEY,
    totalKwDC: 345,
    projectType: ProjectType.BESS,
    solutionType: SolutionType.SOLAR,
    offtakeType: OfftakeType.PPA,
  },
  {
    projectName: "LL New Castle (Mid Atlantic)",
    stage: Stage.IN_DEVELOPMENT,
    state: State.ONTARIO,
    totalKwDC: 890,
    projectType: ProjectType.CARPORT,
    solutionType: SolutionType.BESS,
    offtakeType: OfftakeType.PPA,
  },
  {
    projectName: "PF-Chicago 2",
    stage: Stage.PRE_CONTRACT,
    state: State.MICHIGAN,
    totalKwDC: 456,
    projectType: ProjectType.ROOF,
    solutionType: SolutionType.SOLAR,
    offtakeType: OfftakeType.VPPA,
  },
  {
    projectName: "LL Orefield PA",
    stage: Stage.IN_DEVELOPMENT,
    state: State.LOUSIANA,
    totalKwDC: 123,
    projectType: ProjectType.CARPORT,
    solutionType: SolutionType.BESS,
    offtakeType: OfftakeType.VPPA,
  },
  {
    projectName: "LL Allentown 1 PA (Ruppsville)",
    stage: Stage.IN_CONSTRUCTION,
    state: State.DELAWERE,
    totalKwDC: 678,
    projectType: ProjectType.GROUND,
    solutionType: SolutionType.BESS,
    offtakeType: OfftakeType.PPA,
  },
  {
    projectName: "LL Novi HQ MI",
    stage: Stage.PRE_CONTRACT,
    state: State.MICHIGAN,
    totalKwDC: 234,
    projectType: ProjectType.FLOATING,
    solutionType: SolutionType.BESS,
    offtakeType: OfftakeType.OP_LEASE,
  },
  {
    projectName: "LL Chicago Portfolio",
    stage: Stage.IN_DEVELOPMENT,
    state: State.OHIO,
    totalKwDC: 789,
    projectType: ProjectType.BESS,
    solutionType: SolutionType.BESS,
    offtakeType: OfftakeType.VPPA,
  },
];

function App() {
  const labels = {
    stage: ["Active", "Inactive"],
    state: [
      "All",
      State.DELAWERE,
      State.ILLINOIS,
      State.LOUSIANA,
      State.MARYLAND,
      State.MICHIGAN,
      State.NEW_JERSEY,
      State.OHIO,
      State.ONTARIO,
      State.PENNSYLVANIA,
    ],
    projectType: [
      "All",
      ProjectType.BESS,
      ProjectType.CARPORT,
      ProjectType.FLOATING,
      ProjectType.GROUND,
      ProjectType.ROOF,
    ],
  };

  return (
    <div className="App">
      <FilterBar labels={labels} />
      <Table projects={projects} />
    </div>
  );
}

export default App;
