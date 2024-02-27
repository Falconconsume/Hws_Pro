// ToggleAction.jsx
import React, { useContext, useState } from "react";
import Switch from "@mui/material/Switch";
import ColorModeContext from "./ColorModeContext";

const ToggleAction = () => {
  const { toggleColorMode } = useContext(ColorModeContext);
  const [state, setState] = useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    toggleColorMode();
  };

  return (
    <Switch
      checked={state.checkedA}
      onChange={handleChange}
      name="checkedA"
      inputProps={{ "aria-label": "secondary checkbox" }}
    />
  );
};

export default ToggleAction;
