import { useState } from "react";
import "./paymentDetails.css";
import CashMode from "./CashMode";
import OnlineMode from "./OnlineMode";
function PaymentDetail({ mobile, amount }) {
  const [show_cash_mode, set_show_cash_mode] = useState(false);
  const [show_online_mode, set_show_online_mode] = useState(false);
  const [payement_mode_disabled, set_payement_mode_disabled] = useState(true);
  const [sim_error_msg , set_sim_error_msg]= useState("PLs Select SIM");
  const [sim_error_msg_color , set_sim_error_msg_color]  = useState("red");

  function payment_mode_check(event) {
    if (event.target.value == "cash") {
      set_show_cash_mode(true);
    } else if (event.target.value == "online") {
      set_show_online_mode(true);
    }
  }
  function sim_input_fn(event) {
    if (event.target.value == "") {
      set_payement_mode_disabled(true);
      set_sim_error_msg("PLs Select SIM");
      set_sim_error_msg_color("red");
    } else if (
      event.target.value == "jio" ||
      event.target.value == "airtel" ||
      event.target.value == "vi"
    ) {
      set_payement_mode_disabled(false);
      set_sim_error_msg("Sim Selected " + event.target.value);
      set_sim_error_msg_color("green");

    }
  }
  return (
    <>
      {show_cash_mode == true ? (
        <CashMode amount={amount}></CashMode>
      ) : show_online_mode == true ? (
        <OnlineMode amount={amount}></OnlineMode>
      ) : (
        <div id="main_div_">
          <h1 id="main_">Payment Details Component</h1>
          <br></br>
          <span id="span_id_1_">Mobile Number :- {mobile} </span>
          <br></br>
          <select id="span_id_2_" onChange={sim_input_fn}>
            <option value={""}>select SIM</option>
            <option value={"jio"}>jio</option>
            <option value={"airtel"}>airtel</option>
            <option value={"vi"}>Vi</option>
          </select>
          <span
            className="error-msg"
            style={{ color: sim_error_msg_color }}
          >
            {sim_error_msg}
          </span>
          <span id="span_id_3_">Total Amount :-{amount} </span>
          <br></br>
          <select
            id="span_id_4_"
            onChange={payment_mode_check}
            disabled={payement_mode_disabled}
          >
            <option value={""}>Select Mode</option>
            <option value={"online"}>Online</option>
            <option value={"cash"}>Cash</option>
          </select>
        </div>
      )}
    </>
  );
}
export default PaymentDetail;