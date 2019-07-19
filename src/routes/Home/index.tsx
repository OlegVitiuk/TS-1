import { addGoal, removeGoal } from "actions/goalActions";
import { Icon, Input, List, Spin, Tag } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { bindActionCreators, compose } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "store";
import { GoalActionTypes } from "types/actions";
import { IGoal } from "types/goal";
import uuidv4 from "uuid/v4";
import styles from "./home.module.scss";

const { Search } = Input;

interface HomePageProps {
  goalsData: IGoal[];
}

interface HomePageState {}

type Props = HomePageProps & LinkDispatchProps;
type State = HomePageState & LinkStateProps;

class Home extends React.Component<Props, State> {
  public render() {
    const { goalsData } = this.props;

    return (
      <div className={styles.homeWrapper}>
        <div className={styles.goalsHeader}>
          <h1 className={styles.homeHeader}>Add a goal</h1>
          <Search
            placeholder="Enter your goal"
            enterButton="Add"
            allowClear={true}
            size="large"
            onSearch={this.processGoal}
          />
        </div>
        <div className={styles.goalsContainer}>
          {goalsData ? (
            goalsData.map(goal => (
              <div className={styles.goalCard} key={goal.id}>
                <div className={styles.goalHeader}>
                  <span className={styles.goalName}>{goal.name}</span>
                  <Tag key={goal.id + 1} color={goal.paid ? "green" : "red"}>
                    {goal.paid ? "paid" : "not paid"}
                  </Tag>
                  <Icon
                    type="delete"
                    onClick={() => this.deleteGoal(goal.id)}
                    className={styles.deleteIcon}
                  />
                </div>
                <Icon type="down-circle" className={styles.more} />
              </div>
            ))
          ) : (
            <Spin size="large" />
          )}
        </div>
      </div>
    );
  }

  private processGoal = (value: string): void => {
    const { addGoal } = this.props;

    addGoal({
      name: value,
      paid: false,
      price: 100,
      id: uuidv4()
    });
  };

  private deleteGoal = (id: string): void => {
    const { removeGoal } = this.props;

    removeGoal(id);
  };
}

interface LinkStateProps {
  goalsData: IGoal[];
}

interface LinkDispatchProps {
  addGoal: (goal: IGoal) => void;
  removeGoal: (id: string) => void;
}

export default compose<any>(
  connect(
    (state: AppState): LinkStateProps => ({
      goalsData: state.firestore.ordered.Goals
    }),
    (
      dispatch: ThunkDispatch<any, any, GoalActionTypes>
    ): LinkDispatchProps => ({
      addGoal: bindActionCreators(addGoal, dispatch),
      removeGoal: bindActionCreators(removeGoal, dispatch)
    })
  ),
  firestoreConnect([{ collection: "Goals" }])
)(Home);
