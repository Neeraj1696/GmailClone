import { Button } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import EditIcon from "@mui/icons-material/Edit";
import SidebarOption from "./SidebarOption/SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <Button startIcon={<EditIcon />} className="sidebar_compose">
        Compose
      </Button>
      <SidebarOption Icon={<InboxIcon />} title="Inbox" number={50000} />
      <SidebarOption Icon={<StarBorderIcon />} title="Starred" />
      <SidebarOption Icon={<AccessTimeIcon />} title="Snoozed" />
      <SidebarOption Icon={<SendIcon />} title="Sent" />
      <SidebarOption Icon={<DraftsIcon />} title="Drafts" number={50} />
      <SidebarOption Icon={<ExpandMoreIcon />} title="More" />
    </div>
  );
}

export default Sidebar;
