import { Icon } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import "./AddActionButton.css";
import InputTextCard from "../InputTextCard/InputTextCard";

function AddActionButton({ listId, type }) {
  const [open, setOpen] = useState(false);

  const buttonText = type === "card" ? "Add a card" : "Add another list";

  return (
    <div className="input-container">
      <Collapse in={open}>
        {<InputTextCard setOpen={setOpen} listId={listId} type={type} />}
      </Collapse>
      <Collapse in={!open}>
        <div className="input-content">
          <button onClick={() => setOpen((prev) => !prev)}>
            <Icon>add</Icon>
            {buttonText}
          </button>
        </div>
      </Collapse>
    </div>
  );
}

export default AddActionButton;
