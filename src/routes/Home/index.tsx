import { startAddGoal, startRemoveGoal } from "actions/goalActions";
import { Avatar, Input, List, Skeleton } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "store";
import { GoalActionTypes } from "types/actions";
import { IGoal } from "types/goal";
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
        <h1 className={styles.homeHeader}>Add a goal</h1>
        <div className={styles.goalsContainer}>
          <Search
            placeholder="Enter your goal"
            enterButton="Add"
            allowClear={true}
            size="large"
            onSearch={this.processGoal}
          />
          <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={goalsData}
            renderItem={(item: any, index: number) => (
              <List.Item
                actions={[
                  <a key={index} onClick={() => this.deleteGoal(item.id)}>
                    Delete
                  </a>
                ]}
              >
                <Skeleton avatar={true} title={false} active={true}>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={<a href="https://ant.design">{item.name.last}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                  <div>content</div>
                </Skeleton>
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
  private processGoal = (): void => {
    const { startAddGoal } = this.props;

    startAddGoal({
      name: "test",
      paid: false,
      price: 100,
      id: "1231"
    });
  };

  private deleteGoal = (id: string): void => {
    const { startRemoveGoal } = this.props;

    startRemoveGoal(id);
  };
}

// const mapStateToProps = (store: IAppState) => ;

interface LinkStateProps {
  goalsData: IGoal[];
}

interface LinkDispatchProps {
  startAddGoal: (goal: IGoal) => void;
  startRemoveGoal: (id: string) => void;
}

export default connect(
  (state: AppState): LinkStateProps => ({
    goalsData: state.goalData
  }),
  (dispatch: ThunkDispatch<any, any, GoalActionTypes>): LinkDispatchProps => ({
    startAddGoal: bindActionCreators(startAddGoal, dispatch),
    startRemoveGoal: bindActionCreators(startRemoveGoal, dispatch)
  })
)(Home);
