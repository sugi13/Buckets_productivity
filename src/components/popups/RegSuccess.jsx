import SuccessCheck from "../../assets/Reg_success.png";
import "../../App.css";

export default function RegsSuccess() {
  return (
    <div className="Popup_window_success">
      <div className="check_illustration">
        <img src={SuccessCheck} alt="check-illustration" />
      </div>
      <div className="content">
        <h3>Registered successfully🎉.</h3>
        <p>Login to continue</p>
      </div>
    </div>
  )
}
