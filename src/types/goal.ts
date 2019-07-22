export interface IGoal {
  name: string;
  paid: boolean;
  price: number;
  authorId: string;
}

export interface IGoalState {
  [index: string]: IGoal;
}
