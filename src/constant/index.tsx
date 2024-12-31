import { FaTools } from "react-icons/fa";
import { MdAddBox, MdOutlinePostAdd } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

export const dashboardRoutes = [
  {
    name: "Projects",
    path: "/",
    icon: <RxDashboard size={24} />,
  },
  {
    name: "Add Project",
    path: "/add-project",
    icon: <MdAddBox size={24} />,
  },
  {
    name: "BLogs",
    path: "/blogs",
    icon: <MdOutlinePostAdd size={24} />,
  },
  {
    name: "Add Blog",
    path: "/add-blog",
    icon: <MdAddBox size={24} />,
  },
  {
    name: "Skills",
    path: "/skills",
    icon: <FaTools size={24} />,
  },
  {
    name: "Add Skill",
    path: "/skills",
    icon: <MdAddBox size={24} />,
  },
];
