import { pay } from "actions/paymentActions";
import axios from "axios";
import * as React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { bindActionCreators } from "redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

interface LinkDispatchProps {
  pay: (goalId: string) => void;
}

interface PaymentFormProps {
  goalId: string;
  goalName: string;
}

type Props = LinkDispatchProps & PaymentFormProps;

interface PaymentState {}

class PaymentForm extends React.Component<Props, PaymentState> {
  private publicStrapiKey = "pk_test_hHVCjlpDhyjqd85J9wTRyslE00lIxUPRR0";

  public handleToken = (token: any): void => {
    const { pay, goalId, goalName } = this.props;

    const defaultGoalPrice = 100 * 100;
    const paymentData = {
      name: goalName,
      price: defaultGoalPrice
    };

    console.log(token, "token");
    axios
      .post("http://localhost:8080/checkout", {
        token,
        data: paymentData
      })
      .then(res => {
        const { status } = res.data;
        console.log("Response:", res.data);

        if (status === "success") {
          pay(goalId);
        } else {
          console.error("something happened");
        }
      });
  };

  public render() {
    return (
      <StripeCheckout
        stripeKey={this.publicStrapiKey}
        token={this.handleToken}
        amount={100 * 100}
        name="GOAL"
        billingAddress={true}
        shippingAddress={true}
      />
    );
  }
}

export default connect(
  null,
  (dispatch: ThunkDispatch<any, any, Action>): LinkDispatchProps => ({
    pay: bindActionCreators(pay, dispatch)
  })
)(PaymentForm);
