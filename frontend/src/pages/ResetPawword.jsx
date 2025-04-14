import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

import logo from "/logo.svg";
import govt from "/govt.svg";

import { SelectScrollable } from "@/components/SelectScrollable";

export default function ResetPassword() {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen items-center justify-center p-4">
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

            {/* <Input type="text" placeholder="Full Name" className="p-3" />

            <Input type="number" placeholder="Mobile Number" className="p-3" />
            <Input type="password" placeholder="Password" className="p-3" />
            <SelectScrollable/>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin" /> : "Login"}
            </Button> */}
            <p className="p-3">
              Contact database admin for the request of reset passowrd.
            </p>
            <div className="space-y-0">
              {/* <p className="text-center text-sm text-gray-500">
                Forgot your password?{" "}
                <a href="#" className="text-blue-600">
                  Reset here
                </a>
              </p> */}

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
