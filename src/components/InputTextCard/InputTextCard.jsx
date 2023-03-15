import React from "react";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import "./InputTextCard.css";
import { useContext } from "react";
import storeApi from "../../utils/storeApi";

function InputTextCard({ listId, setOpen, type }) {
  const [title, setTitle] = useState("");
  const { addMoreCard, addMoreList } = useContext(storeApi);

  const placeHolder =
    type === "card" ? "Enter a title for this card" : "Enter list title";
  const buttonText = type === "card" ? "Add card" : "Add another list";

  const handleSubmit = () => {
    if (type === "card") {
      addMoreCard(title, listId);
    } else {
      addMoreList(title);
    }
    setOpen(false);
    setTitle("");
  };

  return (
    <div className="input-card">
      <div className="input-card-container">
        <textarea
          value={title}
          className="input-text"
          placeholder={placeHolder}
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="confirm">
        <button className="confirm-button" onClick={handleSubmit}>
          {buttonText}
        </button>
        <button
          className="cancel-button"
          onClick={() => {
            setTitle("");
            setOpen(false);
          }}
        >
          <ClearIcon />
        </button>
      </div>
    </div>
  );
}

export default InputTextCard;
