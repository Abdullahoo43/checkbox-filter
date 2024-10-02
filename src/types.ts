// export const enum Stage {
//   PRE_CONTRACT = "Pre-Contract",
//   IN_DEVELOPMENT = "In Development",
//   IN_CONSTRUCTION = "In Construction",
//   OPERATING = "Operating",
//   CANCELLED = "Cancelled",
// }

// export enum State {
//   DELAWERE = "Delawere",
//   ILLINOIS = "Illinois",
//   LOUSIANA = "Lousiana",
//   MARYLAND = "Maryland",
//   MICHIGAN = "Michigan",
//   NEW_JERSEY = "New Jersey",
//   OHIO = "Ohio",
//   ONTARIO = "Ontario",
//   PENNSYLVANIA = "Pennsylvania",
//   HELLO = "hello",
// }

// export enum ProjectType {
//   BESS = "BESS",
//   CARPORT = "Carport",
//   FLOATING = "Floating",
//   GROUND = "Ground",
//   ROOF = "Roof",
// }

// export const enum SolutionType {
//   BESS = "BESS",
//   SOLAR = "Solar",
// }

// export const enum OfftakeType {
//   OP_LEASE = "Op Lease",
//   PPA = "PPA",
//   VPPA = "VPPA",
// }

// export const enum Svg {
//   DROPDOWN = "dropdown",
//   ALL_FILTERS = "all filters",
// }

export type Project = {
  projectName: string;
  state: string;
  stage: string;
  totalKwDC: number;
  projectType: string;
  solutionType: string;
  offtakeType: string;
};
