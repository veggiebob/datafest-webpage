import { useState } from "react";
import App from "./App";

const strHash = function (s) {
  var hash = 0,
    i,
    chr;
  if (s.length === 0) return hash;
  for (i = 0; i < s.length; i++) {
    chr = s.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

const Login = () => {
  const [isVerified, setIsVerified] = useState(false);

  const checkPw = () => {
    // gets the current input value
    const answer = document.getElementById("password").value;
    // console.log(strHash("!!!password!!!"));
    if (strHash(answer) === 2123707606) {
      setIsVerified(true);
    } else {
      alert("Sorry, that's not it");
    }
  };

  return (
    <>
      {isVerified ? (
        <App />
      ) : (
        <form onSubmit={checkPw}>
          <input id="password" name="password" />
          <button>go there</button>
        </form>
      )}
    </>
  );
};
export default Login;
