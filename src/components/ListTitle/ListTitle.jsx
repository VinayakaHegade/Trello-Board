import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import { useState, useContext } from "react";
import "./ListTitle.css";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import storeApi from "../../utils/storeApi";

function ListTitle({ title, listId }) {
  const [open, setOpen] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { updateListTitle, deleteList } = useContext(storeApi);

  const handleOnBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen((prev) => !prev);
  };

  return (
    <>
      {open ? (
        <div>
          <input
            type="text"
            className="input-title"
            value={newTitle}
            autoFocus
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={handleOnBlur}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleOnBlur();
              }
              return;
            }}
          />
        </div>
      ) : (
        <div className="editable-title-container">
          <h2
            className="editable-title"
            onClick={() => setOpen((prev) => !prev)}
          >
            {title}
          </h2>
          <button
            className="list-button"
            onClick={() => setOpenOptions((prev) => !prev)}
          >
            <MoreVertIcon />
          </button>
          {openOptions && (
            <ClickAwayListener
              onClickAway={(e) => {
                setOpenOptions((prev) => !prev);
              }}
            >
              <ul className="menu-card">
                <li
                  onClick={() => {
                    setOpenOptions((curr) => !curr);
                    deleteList(listId);
                  }}
                >
                  Delete List
                </li>
                <li
                  onClick={() => {
                    setOpenOptions((curr) => !curr);
                    setOpen((prev) => !prev);
                  }}
                >
                  Edit Card title
                </li>
              </ul>
            </ClickAwayListener>
          )}
        </div>
      )}
    </>
  );
}

export default ListTitle;
