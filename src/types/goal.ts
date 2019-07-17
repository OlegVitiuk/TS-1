export interface IGoal {
  name: string;
  paid: boolean;
  price: number;
  id: string;
}

export interface IGoalState {
  goalsData: IGoal[];
}
