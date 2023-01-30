import { useFetch } from "./hook/useFetch/useFetch";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Zboruri } from "./pages/Zboruri/Zboruri";
import { Booking } from "./pages/Booking/Booking";

const url: string = "http://localhost:3000/itineraries";

function App() {
  const { data_db, pending, error } = useFetch(url);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/flights"
          element={<Zboruri data={data_db} pending={pending} error={error} />}
        />

        <Route path="/booking/:id" element={<Booking />} />
      </Routes>

      <div className="App"></div>
    </BrowserRouter>
  );
}

export default App;
