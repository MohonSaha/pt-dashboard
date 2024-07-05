import { Box, List, Stack, Typography } from "@mui/material";

import Image from "next/image";
// import assets from "../../../assets";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/services/auth.service";
import { drawerItems } from "@/utils/drawerItems";

const Sidebar = () => {
  //   const [userRole, setUserRole] = useState("");

  // solve hydration error
  //   useEffect(() => {
  //     const { role } = getUserInfo() as any;
  //     setUserRole(role);
  //   }, []);

  return (
    <Box sx={{ background: "lightgray", height: "100vh" }}>
      <Stack
        sx={{
          mt: 1,
          mb: 0.7,
        }}
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
        component={Link}
        href="/"
      >
        {/* <Image src={logo} width={60} height={60} alt="logo" /> */}
        <Typography
          variant="h5"
          color="primary.main"
          component="h1"
          height={60}
          fontWeight={700}
        ></Typography>
      </Stack>
      <List sx={{ mt: 2 }}>
        {drawerItems().map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
