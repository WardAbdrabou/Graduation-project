import React, { useState } from 'react';
import { FORGETPASSVERIFI, SENDdEMAILVERIFI } from '../../Api/Api'
import Loading from '../../Components/Loading';
import OTPInput from 'react-otp-input';
import { Axios } from '../../Api/axios';
import NavBar from '../../Components/NavBar';


const ForgetPassVerify = () => {
  const [otp, setOtp] = useState('');

  const [err, setErr] = useState("");

  const [accept, setAccept] = useState(false);
  const [loading, setLoading] = useState(false);

  //  const email =  localStorage.getItem('email');
  //  console.log(email);

//   const handleResend = async (e) => {
//     setLoading(true);
//     // if (disable) return;
//     setLoading(false);
//     try {
//         const res = await Axios.get(`/${SENDdEMAILVERIFI}`, email);
//         console.log(res);
//         if (res.status === 200) {
//             // const token = res.data.token;
//             // cookie.set("e-commerce", token);   
//             // console.log(token);
//             //setDisable(true)
//             console.log(res);
//             setLoading(false);
//             alert("A new OTP has succesfully been sent to your email.");
//         } else {
//             console.error('Failed to send OTP');
//             setLoading(false);
//         }
//     } catch (error) {
//         setLoading(false);
//         console.error('Error during OTP generation:', error);
//     }
// };

  const handleVerifySubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await Axios.post(`/${FORGETPASSVERIFI}`, { otp });
      console.log(res);
      setLoading(false);
      if (res.status === 200) {
        const userID = res.data[0].user_id;
        localStorage.setItem('userID', userID);
       console.log(userID);
        console.log('verify otp successful');
        alert("A Email has succesfully verified.");
        window.location.pathname = "/resetpassword";

      } else {
        console.error('Failed to reset password');
      }
    } catch (err) {
      setLoading(false);
      if (err.response.status === 422) {
        setErr("wrong otp", err);
      } else {
        setAccept(true);
      }
    }
  };



  return (
    <div>
      <NavBar></NavBar>
      {loading && <Loading></Loading>}
      <div className="parent verfiy">
        <div className="register login">
          <form onSubmit={handleVerifySubmit} className='form'>
            <div>
              <div style={{ textAlign: "center" }}>
                <h4 style={{ marginBottom: "20px" }}>Verify OTP</h4>
                <p className='mb-5 pAcount'>We have just sent a 6 digit code to your
                                entered Email.Enter the code below.</p>
               
              </div>
              <OTPInput
                // inputStyle="w-25 mb-5 rounded"
                inputStyle={{ width: "50px", height: "50px", borderRadius: "15px", marginBottom: "30px" }}
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span className='mr-5'>&nbsp; &nbsp; &nbsp;</span>}
                renderInput={(props) => <input {...props} />}
                skipDefaultStyles={true}
              />
                 {/* <p style={{ textAlign: "center", fontSize: "13px" , marginBottom:"40px" }}>Don’t receive any code?
                                <a href='#' style={{ color: "#6F9A61", marginLeft: "5px" }} onClick={() => handleResend()}>Resend</a>
                            </p> */}
              {accept && err && (
                <p className="error">Wrong Otp</p>
              )}

              <div style={{ textAlign: "center" }}>
                <button type="submit">Verify</button>
              </div>
              {err !== "" && <span className="error mt-2">{err}</span>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassVerify;
