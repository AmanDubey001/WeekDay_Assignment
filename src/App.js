import { Paper, Typography } from "@mui/material";
import "./App.css";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Paper sx={{ height: "10vh" }}>
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {String.fromCodePoint(0x0001f44b)} Weekday Assignment
        </Typography>
      </Paper>
      <SearchPage />
    </div>
  );
}

export default App;
