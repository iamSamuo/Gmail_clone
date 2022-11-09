import React from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import { Button, IconButton } from "@mui/material";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import { useDispatch} from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch()

  return (
    <div className="sidebar">
      <Button onClick ={() => dispatch(openSendMessage())}
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar_compose"
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={88}
        slected={true}
      />
      <SidebarOption Icon={StarIcon} title="Stared" number={7} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={0} />
      <SidebarOption Icon={LabelImportantIcon} title="Import" number={2} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={33} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={7} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={8} />
      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
