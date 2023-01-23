import { Avatar, Card } from "@mui/material";
import React from "react";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import "./commentCard.css";

export const CommentCard = ({ Name, Relation, Reviews }) => {
  return (
    <Card
      sx={{ minWidth: 450, minHeight: 200, maxHeight: 250 }}
      className="commentCard"
    >
      <p className="commentContent">{Reviews}</p>
      <div className="commentDetails">
        <Avatar
          sx={{ bgcolor: red[500] }}
          aria-label="recipe"
          className="commentAvatar"
        >
          {Name}
        </Avatar>
        <div className="commentName">
          <h3> {Name}</h3>
          <p>{Relation}</p>
        </div>
      </div>
    </Card>
  );
};
