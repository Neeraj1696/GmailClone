import React from "react";
import "./EmailList.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Section from "../Section/Section";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import Emailrow from "./Emailrow";
<Section
  Icon={<InboxIcon />}
  title="primary"
  color="red"
  selected="selected"
/>;
function EmailList() {
  return (
    <div className="emailList">
      <div className="emailLeft_right">
        <div className="emailList_Left">
          <CheckBoxOutlineBlankIcon />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="emailList_right">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
      <div className="EmailList_middle">
        <Section
          Icon={<InboxIcon />}
          title="Primary"
          color="red"
          selected="selected"
        />
        <Section Icon={<AutoFixHighIcon />} title="Promotions" color="Blue" />
        <Section Icon={<PeopleIcon />} title="Social" color="green" />
      </div>
      <div className="emailrow_list">
        <Emailrow
          title="Job Offer"
          subtitle="subject"
          description="description"
          message="Hello massage"
          time="11:00 Am"
        />
        <Emailrow
          title="Job Offer"
          subtitle="subject"
          description="description"
          message="Hiiiii lorem "
          time="11:00 Am"
        />
        <Emailrow
          title="Job Offer"
          subtitle="subject"
          description="description"
          message="Hiiiiiiiiii"
          time="11:00 Am"
        />
        <Emailrow
          title="Job Offer"
          subtitle="subject"
          description="description"
          message="Hiiiii lorem "
          time="11:00 Am"
        />
        <Emailrow
          title="Job Offer"
          subtitle="subject"
          description="description"
          message="Hiiiiiiiiii"
          time="11:00 Am"
        />{" "}
        <Emailrow
          title="Job Offer"
          subtitle="subject"
          description="description"
          message="Hiiiii lorem "
          time="11:00 Am"
        />
        <Emailrow
          title="Job Offer"
          subtitle="subject"
          description="description"
          message="Hiiiiiiiiii"
          time="11:00 Am"
        />{" "}
        <Emailrow
          title="Job Offer"
          subtitle="subject"
          description="description"
          message="Hiiiii lorem "
          time="11:00 Am"
        />
        <Emailrow
          title="Job Offer"
          subtitle="subject"
          description="description"
          message="Hiiiiiiiiii"
          time="11:00 Am"
        />{" "}
        <Emailrow
          title="Job Offer"
          subtitle="subject"
          description="description"
          message="Hiiiii lorem "
          time="11:00 Am"
        />
        <Emailrow
          title="Job Offer"
          subtitle="subject"
          description="description"
          message="Hiiiiiiiiii"
          time="11:00 Am"
        />{" "}
        <Emailrow
          title="Job Offer"
          subtitle="subject"
          description="description"
          message="Hiiiii lorem "
          time="11:00 Am"
        />
        <Emailrow
          title="Job Offer"
          subtitle="subject"
          description="description"
          message="Hiiiiiiiiii"
          time="11:00 Am"
        />{" "}
        <Emailrow
          title="Job Offer"
          subtitle="subject"
          description="description"
          message="Hiiiii  "
          time="11:00 Am"
        />
        <Emailrow
          title="Job Offer"
          subtitle="subject"
          description="description"
          message="Hiiiiiiiiii"
          time="11:00 Am"
        />
      </div>
    </div>
  );
}

export default EmailList;
