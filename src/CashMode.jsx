import "sweetalert2/dist/sweetalert2.css";
import { useContext, useEffect , useState } from "react";
import { userName_context } from "./App";
import "./CashMode.css";
function CashMode({amount})
{
const { user_name } = useContext(userName_context);
const [validity_print_, set_validity_print_] = useState("");
const [current_date, set_current_date] = useState("");
const [current_time, set_current_time] = useState("");
const [expiry_date , set_expiry_date] =  useState("");
const [btn_disabled , set_btn_disabled] = useState(false);

useEffect(()=>{
  let validation_days = 0
  if (amount == "₹236.00") {
    set_validity_print_("28 Days");
    validation_days=28;
  } 
  else if (amount == "₹472.00") {
    set_validity_print_("84 Days");
    validation_days = 84;

  } 
  else if (amount == "₹708.00") {
    set_validity_print_("168 Days");
    validation_days = 168;

  } 
  else if (amount == "₹1180.00") {
    set_validity_print_("365 Days");
    validation_days = 365;

  }
    const current_date_time = new Date();

    const date = current_date_time.toLocaleDateString("en-IN");
    const time = current_date_time.toLocaleTimeString("en-IN");

    set_current_date(date);
    set_current_time(time);
    
    const expiry_date_time = new Date();
     expiry_date_time.setDate(expiry_date_time.getDate() + validation_days)
    set_expiry_date(expiry_date_time.toLocaleDateString("en-IN")) 

},[amount])
function recharge_successfully()
{
     Swal.fire({
       title: "Recharge Successful!",
       text: "Your recharge is done.",
       icon: "success",
       timer: 2000,
       showConfirmButton: false,
     });
     set_btn_disabled(true);

}

    return (
      <>
        <div id="top_div_">
          <h1 id="heading__">Cash Mode </h1>
          <br></br>
          <span id="name_id">Customer Name :- {user_name}</span>
          <br></br>
          <span id="recharge_date_id">Recharge Date :- {current_date}</span>
          <span id="reacharge_date_id">Recharge Time :- {current_time}</span>
          <span id="Expiry_Date_id">Expiry Date :- {expiry_date}</span>
          <span id="expiry_time_id">Expiry Time :- {current_time}</span>
          <span id="validity_id">Validity :- {validity_print_}</span>
          <div id="bottom_div">
            Total Amount :- {amount}
            <br></br>
            <button
              id="recharge_id"
              onClick={recharge_successfully}
              disabled={btn_disabled}
            >
              {" "}
              Recharge
            </button>
          </div>
        </div>
      </>
    );
}
export default CashMode