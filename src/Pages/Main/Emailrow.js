import React from "react";
import "./Emailrow.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { IconButton } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
function Emailrow({ id, message, title, subject, time, description }) {
  return (
    <div className="emailrow">
      <div className="emailrow_option">
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <h3 className="emailrow_tilte">{title}</h3>
        <div className="emailrow_message">
          <h4>{subject}</h4>
        </div>
        <div className="emailrow_description">
          <span>{description}</span>
          <span className="emailrow_message">{message}</span>
        </div>
        <div className="emailrow_time">{time}</div>
      </div>
    </div>
  );
}

export default Emailrow;
