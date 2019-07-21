export interface IGoal {
  name: string;
  paid: boolean;
  price: number;
  id: string;
}

export interface IGoalState {
  [index: string]: IGoal;
}
