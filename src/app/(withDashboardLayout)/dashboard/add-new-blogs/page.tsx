/* eslint-disable @next/next/no-img-element */
"use client";
import ControlledForm from "@/components/Forms/ControlledForm";
import ControlledInput from "@/components/Forms/ControlledInput";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Box,
  Button,
  Container,
  Grid,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import JoditEditor from "jodit-react";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { CloudinaryUploadResult } from "@/types";

// validation schema for create post
const ValidationSchema = z.object({
  name: z.string().min(1, "Please enter you name!"),
  hospitalName: z.string().min(1, "Please enter the hospital name!"),
});

const CreateBlogPostPage = () => {
  const [resource, setResource] = useState<
    CloudinaryUploadWidgetInfo | undefined | any
  >(undefined);

  const editor = useRef(null);
  const [content, setContent] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isLoading, setIsLoading] = useState(false);

  // const { data, isLoading } = useGetSingleUserQuery({});
  // const [createPostForBlood] = useCreatePostForBloodMutation();

  // const config = {
  //   // readonly: false, // all options from https://xdsoft.net/jodit/doc/
  //   placeholder: "Write blog here...",
  //   // toolbarSticky: false,
  // };

  console.log(resource);

  const newImage = resource?.secure_url;

  const handleRequestForBlood = async (values: FieldValues) => {
    setLoading(true);

    const postData = {
      title: values?.title,
      imageUrl: resource?.secure_url,
      content: content,
    };

    console.log(postData);

    try {
      // const res = await createPostForBlood(postData).unwrap();
      // // console.log(res);
      // if (res?.id) {
      //   toast.success("Blood post created successfully!");
      //   router.push("/posts-for-blood");
      //   setLoading(false);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const defaultValues = {
    title: "",
    content: "",
  };

  return (
    <Container>
      <Box sx={{ my: 8 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            component="h4"
            fontWeight={600}
            sx={{ mb: 1 }}
          >
            Add new blog
          </Typography>
          <Box
            sx={{
              backgroundColor: "#878787",
              borderRadius: "8px",
              height: "6px",
              width: "70%",
              mx: "auto",
            }}
          ></Box>
          <Box
            sx={{
              backgroundColor: "#878787",
              borderRadius: "8px",
              height: "6px",
              width: "60%",
              mx: "auto",
              mt: 2,
            }}
          ></Box>
        </Box>
        {!isLoading ? (
          <Box sx={{ width: "85%", mx: "auto", mt: 4 }}>
            <ControlledForm
              onSubmit={handleRequestForBlood}
              // resolver={zodResolver(ValidationSchema)}
              // defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item xs={12} sm={12} md={12}>
                  <ControlledInput
                    label="Blog Title"
                    fullWidth={true}
                    name="title"
                  />
                </Grid>
                {resource && (
                  <Grid item xs={12} sm={12} md={12}>
                    <img
                      src={newImage}
                      alt="images"
                      // height={100}
                      // height={10}
                      className="h-44 w-[100%] rounded-2xl"
                    />
                  </Grid>
                )}
                <Grid item xs={12} sm={12} md={12}>
                  {/* <CldUploadWidget signatureEndpoint="\api\sign-image">
                    {({ open }) => {
                      return (
                        <button onClick={() => open()}>Upload an Image</button>
                      );
                    }}
                  </CldUploadWidget> */}

                  <CldUploadWidget
                    signatureEndpoint="\api\sign-image"
                    onSuccess={(result, { widget }) => {
                      setResource(result?.info); // { public_id, secure_url, etc }
                      widget.close();
                    }}
                  >
                    {({ open }) => {
                      function handleOnClick() {
                        setResource(undefined);
                        open();
                      }
                      return (
                        <button
                          className="bg-indigo-500 rounded py-2 px-4 text-white"
                          onClick={handleOnClick}
                        >
                          Upload an Image
                        </button>
                      );
                    }}
                  </CldUploadWidget>
                </Grid>

                {/* <Grid item xs={12} sm={12} md={12}>
                  <ControlledInput
                    label="Hospital Name"
                    fullWidth={true}
                    name="hospitalName"
                  />
                </Grid> */}

                <Grid item xs={12} sm={12} md={12}>
                  {/* <ControlledInput label="Name" fullWidth={true} name="name" /> */}

                  <JoditEditor
                    ref={editor}
                    value={content}
                    onChange={(newContent) => setContent(newContent)}
                    // config={config}
                  />
                </Grid>
              </Grid>

              <LoadingButton
                size="small"
                type="submit"
                // loading={loading}
                variant="contained"
                fullWidth={true}
                // endIcon={<SendIcon />}
                // loadingPosition="end"
                sx={{
                  margin: "10px 0px",
                }}
              >
                <span>Create Post</span>
              </LoadingButton>
            </ControlledForm>

            {content}
          </Box>
        ) : (
          <Container>
            <Box sx={{ width: "70%", mx: "auto", mt: 4 }}>
              {Array.from(new Array(7)).map((_, index) => (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  height={52}
                  sx={{ mb: 2 }}
                />
              ))}
            </Box>
          </Container>
        )}
      </Box>
    </Container>
  );
};

export default CreateBlogPostPage;
