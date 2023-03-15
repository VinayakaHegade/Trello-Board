import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useState, useContext } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./ListCard.css";
import storeApi from "../../utils/storeApi";

function ListCard({ card, index, listId }) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(card.title);
  const { removeCard, updateCardTitle } = useContext(storeApi);

  const handleOnBlur = (cardId) => {
    updateCardTitle(newTitle, index, listId);
    setOpen((prev) => !prev);
  };

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div className="card-content">
            {open ? (
              <TextareaAutosize
                type="text"
                className="input-card-title"
                autoFocus
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onBlur={handleOnBlur}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleOnBlur(card.id);
                  }
                  return;
                }}
              />
            ) : (
              <div
                onClick={() => setOpen((prev) => !prev)}
                className="card-title-container"
              >
                <p>{card.title}</p>
                <button onClick={() => removeCard(index, listId, card.id)}>
                  <DeleteOutlineIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default ListCard;
