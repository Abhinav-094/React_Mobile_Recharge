import { useContext } from "react";
import { userName_context } from "./App";
import { useRef, useState } from "react";
import "./UserDetailCss.css";
import PaymentDetail from "./PaymentDetail";
function UserDetail() {
  const [submit_disabled , set_submit_disabled] = useState(true);
  const [show_payement_detail , set_show_payement_detail] = useState(false);
  const [name_error_msg , set_name_error_msg] = useState("Pls Enter Your Name ");
  const [mob_error_msg, set_mob_error_msg] = useState("Pls Enter Valid Mobile Number ");
  const [mob_error_msg_color , set_mob_error_msg_color] = useState("red")
  const [recharge_error_msg , set_recharge_error_msg] = useState("Pls Select Recharge Plan");
  const [recharge_plan_with_gst , set_recharge_plan_with_gst] = useState("");
  const [mobile_disabled , set_mobile_disabled] = useState(true);
  const [recharge_plan_disabled , set_recharge_plan_disabled] = useState(true);
  const mobile_ref = useRef();
  const recharge_plan_ref = useRef();
  const user_name_ref = useRef();
  const total_amount_ref = useRef();

  const [user_mobile, set_user_mobile] = useState("");
  const [total_amount , set_total_amount] = useState("");
  const {set_user_name} = useContext(userName_context);


  function user_name_input(event)
  {
   set_user_name(event.target.value)     
    event.target.value = event.target.value.replace(/[^A-Za-z ]/g, "");
    if(event.target.value.length > 0)
    {
      set_name_error_msg("");
      set_mobile_disabled(false);
      mobile_ref.current.value = "";
      recharge_plan_ref.current.value = "";
      set_mob_error_msg("Pls Enter Valid Mobile Number");
      set_mob_error_msg_color("red");
      set_recharge_plan_disabled(true);
      set_recharge_error_msg("Pls Select Recharge Plan");
      set_recharge_plan_with_gst("");
      set_submit_disabled(true);
    }
    else if (event.target.value.length == 0 || event.target.value == "")
    {
      set_name_error_msg("Pls Enter Your Name")
      set_mobile_disabled(true);
      mobile_ref.current.value = "";
      set_mob_error_msg("Pls Enter Valid Mobile Number");
      set_mob_error_msg_color("red");
      set_mobile_disabled(true);
      recharge_plan_ref.current.value= "";
      set_recharge_error_msg("Pls Select Recharge Plan");
      set_recharge_plan_with_gst("");
      set_recharge_plan_disabled(true);
      set_submit_disabled(true);
    }
  }
  function submit_fn()
  {
    set_show_payement_detail(true);
  }
  function mob_input(event)
  {
    event.target.value = event.target.value.replace(/[^0-9]/g, "");
set_user_mobile(event.target.value);

    if(event.target.value.length == 10)
    {
      set_mob_error_msg("Valid Number ✅");
      set_mob_error_msg_color("green");
      set_recharge_plan_disabled(false);
      set_submit_disabled(true);

    }
    else if (event.target.value.length == 0 || event.target.value == "" || event.target.value.length < 10)
    {
      set_mob_error_msg("Pls Enter Valid Mobile Number ");
      set_mob_error_msg_color("red");
      set_recharge_plan_disabled(true);
      recharge_plan_ref.current.value = "";
      set_recharge_error_msg("Pls Select Recharge Plan");
      set_recharge_plan_with_gst("");
      set_submit_disabled(true);
    }
  }
  function recharge_plan_(event)
  {    
    if (event.target.value == "") {
      set_recharge_error_msg("Pls Select Recharge Plan");
      set_total_amount("");
      set_recharge_plan_with_gst("");
      set_submit_disabled(true);
    } else if (event.target.value == "200") {
      set_recharge_error_msg("");
      set_total_amount("₹236.00");
      set_recharge_plan_with_gst("₹236.00");
      set_submit_disabled(false);
    } else if (event.target.value == "400") {
      set_recharge_error_msg("");
      set_total_amount("₹472.00");
      set_recharge_plan_with_gst("₹472.00");
      set_submit_disabled(false);
    } else if (event.target.value == "600") {
      set_recharge_error_msg("");
      set_total_amount("₹708.00");
      set_recharge_plan_with_gst("₹708.00");
      set_submit_disabled(false);
    } else if (event.target.value == "1000") {
      set_recharge_error_msg("");
      set_total_amount("₹1180.00");
      set_recharge_plan_with_gst("₹1180.00");
      set_submit_disabled(false);
    } 
  }
  return (
    <>
      {show_payement_detail == true ? (
        <PaymentDetail mobile={user_mobile} amount = {total_amount}></PaymentDetail>
      ) : (
        <div id="main_div">
          <h1>MOBILE RECHARGE</h1>
          <form>
            <span id="span_id_1">User Name :- </span>
            <br></br>
            <input
              type="text"
              onChange={user_name_input}
              id="input_id_1"
              ref={user_name_ref}
            ></input>
            <span className="error-msg">{name_error_msg}</span>
            <span id="span_id_2">Mobile Number :- </span>
            <br></br>
            <input
              type="text"
              maxLength={"10"}
              id="input_id_2"
              disabled={mobile_disabled}
              ref={mobile_ref}
              onChange={mob_input}
            ></input>
            <span className="error-msg" style={{ color: mob_error_msg_color }}>
              {mob_error_msg}
            </span>
            <span id="span_id_3">Recharge Plan :-</span>
            <br></br>
            <select
              id="span_id_4"
              onChange={recharge_plan_}
              disabled={recharge_plan_disabled}
              ref={recharge_plan_ref}
            >
              <option value={""}>Select Plan</option>
              <option value={"200"}>₹200 - 28 Days</option>
              <option value={"400"}>₹400 - 84 Days</option>
              <option value={"600"}>₹600 - 168 Days</option>
              <option value={"1000"}>₹1000 - 365 Days</option>
            </select>
            <span className="error-msg">{recharge_error_msg}</span>
            <span id="span_id_5">Total Amount With GST :-</span>
            <br></br>
            <input
              type="text"
              readOnly
              id="input_id_3"
              value={recharge_plan_with_gst}
            ></input>
            <br></br>
            <br></br>
            <button
              id="span_id_6"
              disabled={submit_disabled}
              onClick={submit_fn}
              ref={total_amount_ref}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}
export default UserDetail;

   