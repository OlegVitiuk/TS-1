// pay
export const PAYMENT_SUCCESSFUL = "PAYMENT_SUCCESSFUL";
export const PAYMENT_FAILED = "PAYMENT_FAILED";

interface PaymentSuccessAction {
  type: typeof PAYMENT_SUCCESSFUL;
}

interface PaymentFailedAction {
  type: typeof PAYMENT_FAILED;
}

export type PaymentActionTypes = PaymentSuccessAction | PaymentFailedAction;
