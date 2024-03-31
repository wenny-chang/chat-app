import { useContext } from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { registerInfo, updateRegisterInfo } = useContext(AuthContext);
  const inputChange = (e, field) => {
    const val = e.target.value;
    const updateVal = { registerInfo };
    updateVal[field] = val;
    updateRegisterInfo(updateVal);
  };
  return (
    <form>
      <Box height="100vh" display="flex" pt="10%" justifyContent="center">
        <Stack spacing={3} sx={{ maxWidth: "60%", width: "100%" }}>
          <Typography variant="h6"> Register</Typography>
          <TextField
            id="name"
            label="Name"
            variant="filled"
            onChange={(e) => inputChange(e, "name")}
          />
          <TextField
            id="email"
            label="Email"
            variant="filled"
            onChange={(e) => inputChange(e, "email")}
          />
          <TextField
            id="password"
            label="Password"
            variant="filled"
            onChange={(e) => inputChange(e, "password")}
          />
          <Button variant="contained" type="submit">
            Register
          </Button>
          <Alert severity="error">This is an error Alert.</Alert>
        </Stack>
      </Box>
    </form>
  );
};

export default Register;
