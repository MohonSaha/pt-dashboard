import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { DrawerItems } from "@/types";
import { usePathname } from "next/navigation";

type IProps = {
  item: DrawerItems;
  index?: number;
};

const SidebarItem = ({ item }: IProps) => {
  const linkPath = `/dashboard/${item?.path}`;
  const pathName = usePathname();
  return (
    <Link href={linkPath}>
      <ListItem
        disablePadding
        sx={{
          ...(pathName === linkPath
            ? {
                borderRight: "3px solid #eb2c29",
                backgroundColor: "#BCBBBB",
                "& svg": {
                  color: "primary.main",
                },
              }
            : {}),
          mb: 1,
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item?.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
