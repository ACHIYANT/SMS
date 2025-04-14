import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NavBar from "../NavBar";

const VendorForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Vendor Data:", data);
    // Submit data to backend API
  };

  return (
    <div className="bg-gray-100 h-screen">
      <NavBar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-lg shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl font-bold">
              Vendor Entry Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Vendor Name</label>
                <Input
                  {...register("vendorName", {
                    required: "Vendor name is required",
                  })}
                  placeholder="Enter vendor name"
                />
                {errors.vendorName && (
                  <p className="text-red-500 text-sm">
                    {errors.vendorName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Vendor Address
                </label>
                <Input
                  {...register("vendorAddress", {
                    required: "Address is required",
                  })}
                  placeholder="Enter vendor address"
                />
                {errors.vendorAddress && (
                  <p className="text-red-500 text-sm">
                    {errors.vendorAddress.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Contact Number
                </label>
                <Input
                  {...register("contactNumber", {
                    required: "Contact number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  placeholder="Enter contact number"
                />
                {errors.contactNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.contactNumber.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium">Email</label>
                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  placeholder="Enter email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium">GST Number</label>
                <Input
                  {...register("gstNumber", {
                    required: "GST number is required",
                  })}
                  placeholder="Enter GST number"
                />
                {errors.gstNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.gstNumber.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VendorForm;
