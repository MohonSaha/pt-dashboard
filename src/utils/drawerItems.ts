//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReviewsIcon from "@mui/icons-material/Reviews";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import TryIcon from "@mui/icons-material/Try";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import { DrawerItems } from "@/types";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BookIcon from "@mui/icons-material/Book";

export const drawerItems = (): DrawerItems[] => {
  const roleMenus: DrawerItems[] = [];

  const defaultMenus = [
    {
      title: "Add New Projects",
      path: `add-new-projects`,
      icon: AssignmentIcon,
    },
    {
      title: "Add New Blogs",
      path: `add-new-blogs`,
      icon: BookIcon,
    },
  ];

  return [...roleMenus, ...defaultMenus];
};
