import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import logo from "/logo.svg";
import govt from "/govt.svg";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [mobileno, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  // const handleLogin = () => {
  //   setLoading(true);
  //   setTimeout(() => setLoading(false), 2000);
  // };

  const handleLogin = async () => {
    setLoading(true);

    
    const formData = new URLSearchParams();
    formData.append("mobileno", mobileno);
    formData.append("password", password);

    try {
      const response = await fetch("http://localhost:3001/api/v1/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Login failed:", errorText);
        alert("Login failed. Please check your credentials.");
        return;
      }

      const data = await response.json();
      console.log("Login Success:", data);

      if (data.success && data.data) {
        console.log(data);
        localStorage.setItem("token", data.data.newJWT); // Store token
        localStorage.setItem("fullname", data.data.fullName);
        navigate("/homepage"); // Redirect to homepage
      } else {
        alert("Invalid login. Please try again.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong. Please try again.");
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
          <CardContent className="p-6 space-y-6 ">
            <div className="flex justify-center">
              <img src={logo} alt="HARTRON Logo" width={100} height={50} />
              <img src={govt} alt="HARTRON Logo" width={250} height={150} />
            </div>
            <h2 className="text-center text-2xl font-semibold text-gray-700">
              Welcome to HARTRON Store
            </h2>
            <Input
              type="text"
              placeholder="Mobile No"
              className="p-3"
              value={mobileno}
              onChange={(e) => setMobileNo(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              className="p-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin" /> : "Login"}
            </Button>
            <div className="space-y-0">
              <p className="text-center text-sm text-gray-500">
                Forgot your password?{" "}
                <a href="/reset-pwd" className="text-blue-600">
                  Reset here
                </a>
              </p>
              <p className="text-center text-sm text-gray-500">
                New to Hartron Store?{" "}
                <a href="/sign-up" className="text-blue-600">
                  Join Here
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
