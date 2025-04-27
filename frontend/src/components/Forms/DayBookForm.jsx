import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

const DayBookForm = ({ vendors = [], onSubmit, defaultType }) => {
  const [formData, setFormData] = useState({
    entryNo: "",
    type: defaultType,
    billNo: "",
    billDate: "",
    vendorId: "",
    totalAmount: "",
    remarks: "",
    status: "Pending",
  });

  useEffect(() => {
    if (defaultType) {
      setFormData((prev) => ({ ...prev, type: defaultType }));
    }
  }, [defaultType]);
  // setFormData((prev) => ({ ...prev, type: defaultType }));

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateEntryNo(formData.type);
  }, [formData.type]);

  const generateEntryNo = (type) => {
    if (!type) return;
    const prefix =
      type === "Fixed Assets"
        ? "FA"
        : type === "Consumable Items"
        ? "CI"
        : "VI";
    const randomNum = Math.floor(100 + Math.random() * 900);
    setFormData((prev) => ({ ...prev, entryNo: `${prefix}-${randomNum}` }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.type) newErrors.type = "Type is required";
    if (!formData.billNo) newErrors.billNo = "Bill number is required";
    if (!formData.billDate) newErrors.billDate = "Bill date is required";
    if (!formData.vendorId) newErrors.vendorId = "Vendor is required";
    if (!formData.totalAmount || Number(formData.totalAmount) <= 0)
      newErrors.totalAmount = "Total amount must be greater than 0";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await onSubmit?.(formData);
    } catch (error) {
      console.error("Submit Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-3xl mx-auto mt-6">
      <CardContent className="space-y-4 p-6">
        <h2 className="text-xl font-semibold">Day Book Entry</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Type</Label>
            <Input name="default_type" value={defaultType} read-only disabled />
            {/* <SelectTrigger className={errors.type ? "border-red-500" : ""}>
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Fixed Assets">Fixed Assets</SelectItem>
              <SelectItem value="Consumable Items">Consumable Items</SelectItem>
              <SelectItem value="Vehicle Items">Vehicle Items</SelectItem>
            </SelectContent> */}
            {errors.type && (
              <p className="text-red-500 text-sm mt-1">{errors.type}</p>
            )}
          </div>

          <div>
            <Label>Entry No</Label>
            <Input name="entryNo" value={formData.entryNo} readOnly disabled />
          </div>

          <div>
            <Label>Bill No</Label>
            <Input
              name="billNo"
              value={formData.billNo}
              onChange={handleChange}
              className={errors.billNo ? "border-red-500" : ""}
            />
            {errors.billNo && (
              <p className="text-red-500 text-sm mt-1">{errors.billNo}</p>
            )}
          </div>

          <div>
            <Label>Bill Date</Label>
            <Input
              name="billDate"
              type="date"
              value={formData.billDate}
              onChange={handleChange}
              className={errors.billDate ? "border-red-500" : ""}
            />
            {errors.billDate && (
              <p className="text-red-500 text-sm mt-1">{errors.billDate}</p>
            )}
          </div>

          <div>
            <Label>Vendor</Label>
            <Select onValueChange={(value) => handleSelect("vendorId", value)}>
              <SelectTrigger
                className={errors.vendorId ? "border-red-500" : ""}
              >
                <SelectValue placeholder="Select Vendor" />
              </SelectTrigger>
              <SelectContent>
                {vendors.map((vendor) => (
                  <SelectItem key={vendor._id} value={vendor._id}>
                    {vendor.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.vendorId && (
              <p className="text-red-500 text-sm mt-1">{errors.vendorId}</p>
            )}
          </div>

          <div>
            <Label>Total Amount</Label>
            <Input
              name="totalAmount"
              type="number"
              value={formData.totalAmount}
              onChange={handleChange}
              className={errors.totalAmount ? "border-red-500" : ""}
            />
            {errors.totalAmount && (
              <p className="text-red-500 text-sm mt-1">{errors.totalAmount}</p>
            )}
          </div>
        </div>

        <div>
          <Label>Remarks</Label>
          <Textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
          />
        </div>

        <Button className="w-full" onClick={handleSubmit} disabled={loading}>
          {loading ? (
            <Loader2 className="animate-spin h-5 w-5 mr-2" />
          ) : (
            "Submit Entry"
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default DayBookForm;
