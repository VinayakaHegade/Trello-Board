import React from "react";
import AddActionButton from "../AddActionButton/AddActionButton";
import ListCard from "../ListCard/ListCard";
import "./List.css";
import { Draggable, Droppable } from "react-beautiful-dnd";
import ListTitle from "../ListTitle/ListTitle";

function List({ list, index }) {
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <div className="list-container" {...provided.dragHandleProps}>
            <div className="list-title">
              <ListTitle title={list.title} listId={list.id} />
            </div>
            <div className="cards-container">
              <Droppable droppableId={list.id} type="task">
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="card-container"
                  >
                    {list.cards.map((card, index) => (
                      <ListCard
                        key={card.id}
                        card={card}
                        index={index}
                        listId={list.id}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
            <AddActionButton listId={list.id} type="card" />
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default List;
