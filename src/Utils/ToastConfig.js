import React from "react";
import CustomToast from "../Components/CustomToast";

const ToastConfig = {
  custom: (props) => <CustomToast {...props} />,
};

export default ToastConfig;