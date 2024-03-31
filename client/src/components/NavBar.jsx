import { Container, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        p: 2,
        backgroundColor: "#1f1f1f",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-around"
        alignItems="center"
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography variant="h4" sx={{ color: "white" }}>
            Chat App
          </Typography>
        </Link>
        <Typography variant="body" sx={{ color: "warning.main" }}>
          Login as Wenny
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Typography variant="button" sx={{ color: "white" }}>
              Login
            </Typography>
          </Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Typography variant="button" sx={{ color: "white" }}>
              Register
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default NavBar;
