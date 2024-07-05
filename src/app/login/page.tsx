"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ControlledForm from "@/components/Forms/ControlledForm";
import ControlledInput from "@/components/Forms/ControlledInput";

import { userLogin } from "@/services/actions/userLogin";
import { toast } from "sonner";
// import { storeUserInfo } from "@/services/auth.service";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingButton from "@mui/lab/LoadingButton";

const ValidationSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 charecters!"),
});

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // error message state that comes from server
  const [error, setError] = useState("");

  const handleLogin = async (values: FieldValues) => {
    setLoading(true);
    const loginUserData = {
      email: values?.email,
      password: values?.password,
    };

    try {
      const res = await userLogin(values);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        // storeUserInfo({ accessToken: res?.data?.accessToken });
        setLoading(false);
      } else {
        setError(res?.message);
        toast.error(res?.message);
        setLoading(false);
      }
    } catch (err: any) {
      console.error(err.message);
      toast.error("An unexpected error occurred.");
      setLoading(false);
    }
  };

  return (
    <Container sx={{}}>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 3,
            borderRadius: 1,
            // textAlign: "center",
            p: 4,
          }}
        >
          <Stack
            sx={
              {
                //   justifyContent: "center",
                //   alignItems: "center",
              }
            }
          >
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Hey, Welcome back Login Now
              </Typography>
            </Box>
          </Stack>

          {error && (
            <Box>
              <Typography color="red" fontWeight={700}>
                {error}
              </Typography>
            </Box>
          )}

          <Box>
            <ControlledForm
              onSubmit={handleLogin}
              resolver={zodResolver(ValidationSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item xs={12} sm={12} md={12}>
                  <ControlledInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <ControlledInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>

              {/* <Typography mb={1} textAlign="end" component="p" fontWeight={300}>
                Forgot Password?
              </Typography> */}

              <LoadingButton
                size="small"
                type="submit"
                loading={loading}
                variant="contained"
                fullWidth={false}
                // endIcon={<SendIcon />}
                // loadingPosition="end"
                sx={{
                  margin: "5px 0px",
                  padding: "4px 14px",
                  width: "150px",
                  height: "40px",
                  textAlign: "start",
                }}
              >
                <span>Login</span>
              </LoadingButton>
            </ControlledForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
