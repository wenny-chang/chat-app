import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  Alert,
} from "@mui/material";

const Login = () => {
  return (
    <form>
      <Box height="100vh" display="flex" pt="10%" justifyContent="center">
        <Stack container spacing={3} sx={{ maxWidth: "60%", width: "100%" }}>
          <Typography variant="h6"> Register</Typography>
          <TextField id="email" label="Email" variant="filled" />
          <TextField id="password" label="Password" variant="filled" />
          <Button variant="contained" type="submit">
            Login
          </Button>
          <Alert severity="error">This is an error Alert.</Alert>
        </Stack>
      </Box>
    </form>
  );
};

export default Login;
