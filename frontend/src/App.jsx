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
import DayBook from "./pages/DayBook";
import Layout from "./components/Layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes - no sidebar */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/reset-pwd" element={<ResetPassword />} />

        {/* Protected Routes - with sidebar */}
        <Route path="/" element={<Layout />}>
          <Route path="homepage" element={<Homepage />} />
          <Route path="vendors-entry" element={<VendorsForm />} />
          <Route
            path="day-book-entry-first-step"
            element={<DayBookFormFirstStep />}
          />
          <Route
            path="daybook"
            element={<DayBook/>}
          />
          <Route path="employees-entry" element={<EmployeesForm />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<PageNotFound />} />

        {/* <Route path="/" element={<Layout />}>
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
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
