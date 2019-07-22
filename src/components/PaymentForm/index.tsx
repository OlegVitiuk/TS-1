import axios from "axios";
import * as React from "react";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

interface NavigationProps {}

interface NavigationState {}

const data = {
  name: "goal ff",
  price: 100 * 100,
  description: "Cool car"
};

class PaymentForm extends React.Component<NavigationProps, NavigationState> {
  public handleToken = (token: any): void => {
    console.log(token, "token");
    axios
      .post("http://localhost:8080/checkout", {
        token,
        data
      })
      .then(res => {
        const { status } = res.data;
        console.log("Response:", res.data);

        if (status === "success") {
          toast("Payment has sent successfully", { type: "success" });
        } else {
          toast("Something went wrong", { type: "error" });
        }
      });
  };

  public render() {
    return (
      <StripeCheckout
        stripeKey="pk_test_hHVCjlpDhyjqd85J9wTRyslE00lIxUPRR0"
        token={this.handleToken}
        amount={100}
        name="GOAL"
        billingAddress={true}
        shippingAddress={true}
      />
    );
  }
}

export default PaymentForm;
