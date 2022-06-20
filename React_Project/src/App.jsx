import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Navbar>
    </Box>
  );
}

export default App;
