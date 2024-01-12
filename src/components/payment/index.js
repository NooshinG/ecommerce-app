import data from "../../../json/payment.json";
import PaymentForm from "./components/PaymentForm";

export default function Payment() {
  return <PaymentForm data={data} />;
}
