import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface DrawerItems {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItems[];
}

// Define the type for Cloudinary upload result
export interface CloudinaryUploadResult {
  info: {
    secure_url: string;
  };
}
