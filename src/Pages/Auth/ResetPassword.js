import React, { useState } from 'react';
import { RESETPASSWORD } from '../../Api/Api'
import Loading from '../../Components/Loading';

import { Axios } from '../../Api/axios';
import NavBar from '../../Components/NavBar';

const ResetPassword = () => {
  const [err, setErr] = useState("");
  const [password, setPassword] = useState('');
  const userID =  localStorage.getItem('userID');
  console.log(userID);

  const [user_id] = useState(userID);

  const [accept, setAccept] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await Axios.post(`/${RESETPASSWORD}`, {user_id , password });
      console.log(res);
      setLoading(false);
      if (res.status === 200) {
        console.log('Password reset successful');
        alert("Password reset successful");
        window.location.pathname = "/resetsuccess";
      } else {
        console.error('Failed to reset password');
      }
    } catch (err) {
      setLoading(false);
      if (err.response.status === 422) {
        setErr( err);
      } else {
        setAccept(true);
      }
    }
  };

  return (
    <div>
      <NavBar></NavBar>
      {loading && <Loading></Loading>}
      <div className="parent">
        <div className="register login">
          <form onSubmit={handleResetSubmit} className='form'>
            <div>
              <div style={{ textAlign: "center" }}>
                <h4 style={{ marginBottom: "20px" }}>Reset Password</h4>
                <p className="pAcount" style={{ marginBottom: "30px" }}>Use at least 6 characters strong password.
                </p>
              </div>
              
              <div className="mb-2">
                <label htmlFor="password" style={{ fontSize: "14px" }}>
                  Enter new password:
                </label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password....."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength="6"
                  required
                />
              </div>
              {password.length < 8 && accept && (
                <p className="error">Use 8 or more characters with a mix of letters, numbers & symbols</p>
              )}
              <div style={{ textAlign: "center" }}>
                <button type="submit">Reset</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
