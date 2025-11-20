  import Swal from "sweetalert2";
  import { useContext, useEffect, useRef, useState } from "react";
  import { userName_context } from "./App";
  import "./OnlineMode.css";
  import QR236 from "./IMG/qr236.jpg";
  import QR472 from "./IMG/qr472.jpg";
  import QR708 from "./IMG/qr708.jpg";
  import QR1180 from "./IMG/qr1180.jpg";

  function OnlineMode({amount})
  {
    const [validity_print, set_validity_print] = useState("");
    const [current_date , set_current_date] = useState("");
    const [current_time , set_current_time] = useState("");
    const [expiry_date , set_expiry_date] =  useState("");
    const [reacharge_btn_disabled , set_reacharge_btn_disabled] = useState(true);
    const [span_text , set_span_text] = useState("");
    const [span_text_disabled , set_span_text_disabled] = useState(true);
    const payment_type_ref = useRef();
    const [span_text_enter , set_span_text_enter] = useState("Please Select Payment Mode");
    const user_input_ref = useRef();

    
    const {user_name} = useContext(userName_context)
    useEffect(()=>{
      let vaditity_days =0
            if (amount == "₹236.00") {
              set_validity_print("28 Days");
              vaditity_days = 28;
            } 
            else if (amount == "₹472.00") {
              set_validity_print("84 Days");
              vaditity_days = 84;

            } 
            else if (amount == "₹708.00") {
              set_validity_print("168 Days");
              vaditity_days = 168;

            } 
            else if (amount == "₹1180.00") {
              set_validity_print("365 Days");
              vaditity_days = 365;

            }
            const current_date_time = new Date();

            const date  = current_date_time.toLocaleDateString("en-IN")
            const time = current_date_time.toLocaleTimeString("en-IN")

            set_current_date(date)
            set_current_time(time)

              const expiry_date_time = new Date();
              expiry_date_time.setDate(
                expiry_date_time.getDate() + vaditity_days
              );
              set_expiry_date(expiry_date_time.toLocaleDateString("en-IN")); 

    },[amount])
    function payment_type_fn(event)
    {
        if (event.target.value == "")
        {
          set_span_text("");
          set_span_text_disabled(true);
          set_span_text_enter("Please Select Payment Mode");
          user_input_ref.current.value = "";
          set_reacharge_btn_disabled(true);

        }
        else if (event.target.value == "account" )
        {
          set_span_text("Enter Account Number");
          set_span_text_disabled(false);
          set_span_text_enter("");
          user_input_ref.current.value = "";
          set_reacharge_btn_disabled(true);


        }
        else if (event.target.value == "upi")
        {
          set_span_text("Enter UPI ID");
          set_span_text_disabled(false);
          set_span_text_enter("");
          user_input_ref.current.value = "";
          set_reacharge_btn_disabled(true);



        }
         else if (event.target.value == "qr")
        {
          set_span_text("Scan QR");
          set_span_text_disabled(true);
          set_span_text_enter("");
          user_input_ref.current.value = "";
          set_reacharge_btn_disabled(false);



        }
    }
    function account_no_input_fn(event)
    {
       if(event.target.value.length == "" || event.target.value.length == 0)
       {
         set_reacharge_btn_disabled(true);
       }
       else if (event.target.value.length > 0)
       {
         set_reacharge_btn_disabled(false);
       }
    }
    function recharge_done()
    {
      if (payment_type_ref.current.value == "") {
        set_span_text_disabled(true);
        set_span_text("");
      } else if (payment_type_ref.current.value == "account") {
        Swal.fire({
          title: "Payment Successful!",
          text: "Your payment has been completed.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        set_reacharge_btn_disabled(true);
        payment_type_ref.current.value = "";
        user_input_ref.current.value = "";
        set_span_text_enter("Please Select Payment Mode");
        set_span_text_disabled(true);
        set_span_text("");
      } else if (payment_type_ref.current.value == "upi") {
        Swal.fire({
          title: "Payment Successful!",
          text: "Your payment has been completed.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        set_reacharge_btn_disabled(true);
        payment_type_ref.current.value = "";
        user_input_ref.current.value = "";
        set_span_text_enter("Please Select Payment Mode");
        set_span_text_disabled(true);
        set_span_text("");
      } else if (payment_type_ref.current.value == "qr" && amount == "₹236.00") {
        Swal.fire({
          title: "Scan to Pay",
          text: "Use PhonePe, GPay or Paytm",
          imageUrl: QR236,
          imageWidth: 300,
          imageHeight: 300,
          showConfirmButton: false,
          timer: 5000,

          showClass: {
            popup: "animate__animated animate__slideInDown",
          },
          hideClass: {
            popup: "animate__animated animate__slideOutUp",
          },
        }).then(() => {
         Swal.fire({
           title: "Recharge Successful!",
           html: "Your recharge of <b>₹236.00</b> has been successfully completed.",
           icon: "success",
           timer: 2500,
           showConfirmButton: false,
         });
          set_reacharge_btn_disabled(true);
          payment_type_ref.current.value = "";
          user_input_ref.current.value = "";
          set_span_text_enter("Please Select Payment Mode");
          set_span_text_disabled(true);
          set_span_text("");
        });
      }
      else if (payment_type_ref.current.value == "qr" && amount == "₹472.00") {
        Swal.fire({
          title: "Scan to Pay",
          text: "Use PhonePe, GPay or Paytm",
            imageUrl: QR472,
            imageWidth: 300,
            imageHeight: 300,
            showConfirmButton: false,
            timer: 5000,
            
            showClass: {
              popup: 'animate__animated animate__slideInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__slideOutUp',
            }
          }).then(() => {
           Swal.fire({
             title: "Recharge Successful!",
             html: "Your recharge of <b>₹472.00</b> has been successfully completed.",
             icon: "success",
             timer: 2500,
             showConfirmButton: false,
           });
            set_reacharge_btn_disabled(true);
          payment_type_ref.current.value = "";
          user_input_ref.current.value = "";
          set_span_text_enter("Please Select Payment Mode");
          set_span_text_disabled(true);
          set_span_text("");
        });
     }
        else if (payment_type_ref.current.value == "qr" && amount == "₹708.00") {
          Swal.fire({
            title: "Scan to Pay",
            text: "Use PhonePe, GPay or Paytm",
                  imageUrl: QR708,
                  imageWidth: 300,
                  imageHeight: 300,
                  showConfirmButton: false,
                  timer: 5000,                  
                   showClass: {
              popup: 'animate__animated animate__slideInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__slideOutUp',
            }
          }).then(() => {
           Swal.fire({
             title: "Recharge Successful!",
             html: "Your recharge of <b>₹708.00</b> has been successfully completed.",
             icon: "success",
             timer: 2500,
             showConfirmButton: false,
             });
               set_reacharge_btn_disabled(true);
          payment_type_ref.current.value = "";
          user_input_ref.current.value = "";
          set_span_text_enter("Please Select Payment Mode");
          set_span_text_disabled(true);
          set_span_text("");
        });
      }
      else if (payment_type_ref.current.value == "qr" && amount == "₹1180.00")  
      {
        Swal.fire({
          title: "Scan to Pay",
          text: "Use Phone  , GPay or Paytm",
                  imageUrl: QR1180,
                  imageWidth: 300,
                  imageHeight: 300,
                  showConfirmButton: false,
                  timer: 5000,                  
                  showClass: {
              popup: 'animate__animated animate__slideInDown',
            },
              hideClass: {
              popup: 'animate__animated animate__slideOutUp',
            }
            }).then(() => {
                Swal.fire({
             title: "Recharge Successful!",
             html: "Your recharge of <b>₹1180.00</b> has been successfully completed.",
             icon: "success",
             timer: 2500,
             showConfirmButton: false,
             });
               set_reacharge_btn_disabled(true);
                 payment_type_ref.current.value = "";
          user_input_ref.current.value = "";
          set_span_text_enter("Please Select Payment Mode");
          set_span_text_disabled(true);
          set_span_text("");
        });       
      }          
    }
      
 return(
        <>
          <div id="topwala_div_id">
            <h1 id="heading_new">Online Mode </h1>
            <select onChange={payment_type_fn} ref={payment_type_ref}>
              <option value={""}>Select Type</option>
              <option value={"account"}>Account Number</option>
              <option value={"upi"}>UPI Id</option>
              <option value={"qr"}>QR</option>
            </select>
            <br></br>
            <span>
              {span_text_enter}
              {span_text}
            </span>
            <input
              type="text"
              disabled={span_text_disabled}
              onChange={account_no_input_fn}
              ref={user_input_ref}
            ></input>
            <br></br>
            <span id="name_id_">Customer Name :- {user_name}</span>
            <br></br>
            <span id="recharge_date_id_">Recharge Date :-{current_date} </span>
            <span id="reacharge_date_id_">
              Recharge Time :- {current_time}{" "}
            </span>
            <span id="Expiry_Date_id_">Expiry Date :- {expiry_date}</span>
            <span id="expiry_time_id_">Expiry Time :- {current_time}</span>
            <span id="validity_id_">Validity :- {validity_print} </span>
            <div id="bottom_div_">
              Total Amount :- {amount}
              <br></br>
              <button
                id="recharge_id_"
                disabled={reacharge_btn_disabled}
                onClick={recharge_done}
              >
                Recharge
              </button>
            </div>
          </div>
        </>
      );
  }
  export default OnlineMode;

