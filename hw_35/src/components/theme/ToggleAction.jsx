import React, { useContext } from "react";
import Switch from "@mui/material/Switch";
import ColorModeContext from "./ColorModeContext";

export default function ToggleAction() {
  const { toggleColorMode } = useContext(ColorModeContext);
  const [state, setState] = React.useState({
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
}
