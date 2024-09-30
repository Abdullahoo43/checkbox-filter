import "./App.css";

import {
  Project,
  // Stage,
  // State,
  // ProjectType,
  // SolutionType,
  // OfftakeType,
} from "./types";

import FilterBar from "./components/filter-bar/filter-bar";
import Table from "./components/table/table";
import { useState } from "react";

const projects: Project[] = [
  {
    projectName: "NOLA 1",
    stage: "In Construction",
    state: "Delaware",
    totalKwDC: 562,
    projectType: "BESS",
    solutionType: "BESS",
    offtakeType: "VPPA",
  },
  {
    projectName: "LL Cranberry (Mid Atlantic)",
    stage: "In Construction",
    state: "Illinois",
    totalKwDC: 345,
    projectType: "Carport",
    solutionType: "BESS",
    offtakeType: "VPPA",
  },
  {
    projectName: "LL Valleyview OH",
    stage: "In Development",
    state: "Louisiana",
    totalKwDC: 789,
    projectType: "Roof",
    solutionType: "BESS",
    offtakeType: "PPA",
  },
  {
    projectName: "Preferred Freezer (NJ)",
    stage: "Operating",
    state: "Maryland",
    totalKwDC: 423,
    projectType: "Floating",
    solutionType: "BESS",
    offtakeType: "VPPA",
  },
  {
    projectName: "ON Sites",
    stage: "In Development",
    state: "Ohio",
    totalKwDC: 678,
    projectType: "Ground",
    solutionType: "Solar",
    offtakeType: "Operating Lease",
  },
  {
    projectName: "PF-Chicago 1",
    stage: "Operating",
    state: "Michigan",
    totalKwDC: 234,
    projectType: "Roof",
    solutionType: "Solar",
    offtakeType: "Operating Lease",
  },
  {
    projectName: "Fairview Farms",
    stage: "Pre-Contract",
    state: "Pennsylvania",
    totalKwDC: 890,
    projectType: "BESS",
    solutionType: "Solar",
    offtakeType: "Operating Lease",
  },
  {
    projectName: "LL Scranton PA",
    stage: "In Construction",
    state: "Ontario",
    totalKwDC: 567,
    projectType: "Ground",
    solutionType: "BESS",
    offtakeType: "PPA",
  },
  {
    projectName: "Geneva Lineage (IL)",
    stage: "Operating",
    state: "New Jersey",
    totalKwDC: 345,
    projectType: "BESS",
    solutionType: "Solar",
    offtakeType: "PPA",
  },
  {
    projectName: "LL New Castle (Mid Atlantic)",
    stage: "In Development",
    state: "Ontario",
    totalKwDC: 890,
    projectType: "Carport",
    solutionType: "BESS",
    offtakeType: "PPA",
  },
  {
    projectName: "PF-Chicago 2",
    stage: "Pre-Contract",
    state: "Michigan",
    totalKwDC: 456,
    projectType: "Roof",
    solutionType: "Solar",
    offtakeType: "VPPA",
  },
  {
    projectName: "LL Orefield PA",
    stage: "In Development",
    state: "Louisiana",
    totalKwDC: 123,
    projectType: "Carport",
    solutionType: "BESS",
    offtakeType: "VPPA",
  },
  {
    projectName: "LL Allentown 1 PA (Ruppsville)",
    stage: "In Construction",
    state: "Delaware",
    totalKwDC: 678,
    projectType: "Ground",
    solutionType: "BESS",
    offtakeType: "PPA",
  },
  {
    projectName: "LL Novi HQ MI",
    stage: "Pre-Contract",
    state: "Michigan",
    totalKwDC: 234,
    projectType: "Floating",
    solutionType: "BESS",
    offtakeType: "Operating Lease",
  },
  {
    projectName: "LL Chicago Portfolio",
    stage: "In Development",
    state: "Ohio",
    totalKwDC: 789,
    projectType: "BESS",
    solutionType: "BESS",
    offtakeType: "VPPA",
  },
];

function App() {
  const labels = {
    active: [
      // "Active",
      "Pre-Contract",
      "In Development",
      "In Construction",
      "Operating",
    ],
    inActive: ["Cancelled"],
    state: [
      "Delawere",
      "Illinois",
      "Louisiana",
      "Maryland",
      "Michigan",
      "New Jersey",
      "Ohio",
      "Ontario",
      "Pennsylvania",
    ],
    projectType: ["BESS", "Carport", "Floating", "Ground", "Roof"],
  };

  const [selectedStates, setSelectedStates] = useState<string[]>(labels.state);
  const [selectedProjectTypes, setSelectedProjectTypes] = useState<string[]>(
    labels.projectType
  );
  const [selectedActiveStages, setSelectedActiveStages] = useState<string[]>(
    labels.active
  );
  const [selectedInActiveStages, setSelectedInActiveStages] = useState<
    string[]
  >(labels.inActive);
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(5000);

  const handleSelectedStates = (isCheck: boolean, label: string) => {
    if (label === "All" && isCheck) setSelectedStates([...labels.state]);
    else if (label === "All" && !isCheck) setSelectedStates([]);
    else if (isCheck && label !== "All")
      setSelectedStates((prev) => [...prev, label]);
    else setSelectedStates((prev) => prev.filter((state) => state !== label));
  };

  const handleSelectedProjectTypes = (isCheck: boolean, label: string) => {
    if (label === "All" && isCheck)
      setSelectedProjectTypes([...labels.projectType]);
    else if (label === "All" && !isCheck) setSelectedProjectTypes([]);
    else if (isCheck && label !== "All")
      setSelectedProjectTypes((prev) => [...prev, label]);
    else
      setSelectedProjectTypes((prev) =>
        prev.filter((ProjectType) => ProjectType !== label)
      );
  };

  const handleSelectedActiveStages = (isCheck: boolean, label: string) => {
    if (label === "Active" && isCheck)
      setSelectedActiveStages([...labels.active]);
    else if (label === "Active" && !isCheck) setSelectedActiveStages([]);
    else if (isCheck && label !== "Active")
      setSelectedActiveStages((prev) => [...prev, label]);
    else
      setSelectedActiveStages((prev) =>
        prev.filter((stage) => stage !== label)
      );
  };

  const handleSelectedInActiveStages = (isCheck: boolean, label: string) => {
    if (label === "Inactive" && isCheck)
      setSelectedInActiveStages([...labels.inActive]);
    else if (label === "Inactive" && !isCheck) setSelectedInActiveStages([]);
    else if (isCheck && label !== "Inactive")
      setSelectedInActiveStages((prev) => [...prev, label]);
    else
      setSelectedInActiveStages((prev) =>
        prev.filter((stage) => stage !== label)
      );
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue);
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue);
    setMaxValue(value);
  };

  return (
    <div className="App">
      <FilterBar
        labels={labels}
        selectedStates={selectedStates}
        handleSelectedStates={handleSelectedStates}
        selectedProjectTypes={selectedProjectTypes}
        handleSelectedProjectTypes={handleSelectedProjectTypes}
        selectedActiveStages={selectedActiveStages}
        handleSelectedActiveStages={handleSelectedActiveStages}
        selectedInActiveStages={selectedInActiveStages}
        handleSelectedInActiveStages={handleSelectedInActiveStages}
        handleMinChange={handleMinChange}
        minValue={minValue}
        handleMaxChange={handleMaxChange}
        maxValue={maxValue}
      />
      <Table
        projects={projects.filter(
          (project) =>
            selectedStates.includes(project.state) &&
            selectedProjectTypes.includes(project.projectType) &&
            [...selectedInActiveStages, ...selectedActiveStages].includes(
              project.stage
            ) &&
            project.totalKwDC >= minValue &&
            project.totalKwDC <= maxValue
        )}
      />
    </div>
  );
}

export default App;
