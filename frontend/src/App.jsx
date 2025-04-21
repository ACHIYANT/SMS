import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPawword";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import VendorsForm from "./components/Forms/VendorsForm";
import DayBookForm from "./components/Forms/DayBookFormFirstStep";
import EmployeesForm from "./components/Forms/EmployeesForm";
import DayBookFormFirstStep from "./components/Forms/DayBookFormFirstStep";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />}></Route>
        <Route path="sign-up" element={<Signup />}></Route>
        <Route path="reset-pwd" element={<ResetPassword />}></Route>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="vendors-entry" element={<VendorsForm />}></Route>
        <Route
          path="day-book-entry-first-step"
          element={<DayBookFormFirstStep />}
        ></Route>
        <Route path="employees-entry" element={<EmployeesForm />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
