import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import logo from "/logo.svg";
import govt from "/govt.svg";

import { SelectScrollable } from "@/components/SelectScrollable";

export default function Signup() {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const [employeeCode, setEmployeeCode] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [designation, setDesignation] = useState("");
  const [division, setDivision] = useState("");

  // const handleSignup = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch("http://localhost:3001/api/v1/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         employeeCode,
  //         fullName,
  //         mobileNumber,
  //         password,
  //         designation,
  //         division,
  //       }),
  //     });
  //     console.log(
  //       employeeCode,
  //       fullName,
  //       mobileNumber,
  //       password,
  //       designation,
  //       division
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     console.log("Signup Success:", data);
  //     // You can redirect or show a success message here
  //   } catch (error) {
  //     console.error("Signup Error:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const navigate = useNavigate();

  const handleSignup = async () => {
    setLoading(true);
    const formData = new URLSearchParams();
    formData.append("empcode", employeeCode);
    formData.append("fullname", fullName);
    formData.append("mobileno", mobileNumber);
    formData.append("password", password);
    formData.append("designation", designation);
    formData.append("division", division);

    try {
      const response = await fetch("http://localhost:3001/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });
      if (!response.ok) {
        const errText = await response.text();
        console.error("Signup failed:", errText);
        return;
      }
      const data = await response.json();
      console.log("Signup Success:", data);
      navigate("/login");
    } catch (error) {
      console.error("Signup Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-96 shadow-lg rounded-2xl">
          <CardContent className="p-6 space-y-6">
            <div className="flex center">
              <img src={logo} alt="HARTRON Logo" width={100} height={50} />
              <img src={govt} alt="HARTRON Logo" width={250} height={150} />
            </div>
            <h2 className="text-center text-2xl font-semibold text-gray-700">
              Welcome to HARTRON Store
            </h2>
            <Input
              type="number"
              placeholder="Employee Code"
              className="p-3"
              value={employeeCode}
              onChange={(e) => setEmployeeCode(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Full Name"
              className="p-3"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Mobile Number"
              className="p-3"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              className="p-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Designation"
              className="p-3"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
            <SelectScrollable division={division} setDivision={setDivision} />
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
              onClick={handleSignup}
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin" /> : "Sign Up"}
            </Button>
            <div className="space-y-0">
              <p className="text-center text-sm text-gray-500">
                Forgot your password?{" "}
                <a href="/reset-pwd" className="text-blue-600">
                  Reset here
                </a>
              </p>
              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <a href="/login" className="text-blue-600">
                  Login Here
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
