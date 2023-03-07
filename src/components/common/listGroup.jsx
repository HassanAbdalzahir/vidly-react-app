import React from "react";

const ListGroup = (props) => {
  const { genres, selectedGenre, onSelectGenre } = props;
  return (
    <div className="list-group">
      {genres.map((g) => (
        <span
          key={g._id}
          onClick={() => onSelectGenre(g)}
          className={
            selectedGenre === g
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          aria-current="true"
        >
          {g.name}
        </span>
      ))}
    </div>
  );
};

export default ListGroup;
