import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const DayBookEntryForm = ({ vendors = [], onSubmit }) => {
  const [formData, setFormData] = useState({
    entryNo: '',
    type: '',
    billNo: '',
    billDate: '',
    vendorId: '',
    totalAmount: '',
    remarks: '',
    status: 'Pending',
  });

  useEffect(() => {
    generateEntryNo(formData.type);
  }, [formData.type]);

  const generateEntryNo = (type) => {
    if (!type) return;
    const prefix = type === 'Fixed Assets' ? 'FA' : type === 'Consumable Items' ? 'CI' : 'VI';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <Card className="max-w-3xl mx-auto mt-6">
      <CardContent className="space-y-4 p-6">
        <h2 className="text-xl font-semibold">Day Book Entry</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Type</Label>
            <Select onValueChange={(value) => handleSelect('type', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Fixed Assets">Fixed Assets</SelectItem>
                <SelectItem value="Consumable Items">Consumable Items</SelectItem>
                <SelectItem value="Vehicle Items">Vehicle Items</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Entry No</Label>
            <Input name="entryNo" value={formData.entryNo} readOnly disabled />
          </div>

          <div>
            <Label>Bill No</Label>
            <Input name="billNo" value={formData.billNo} onChange={handleChange} />
          </div>

          <div>
            <Label>Bill Date</Label>
            <Input name="billDate" type="date" value={formData.billDate} onChange={handleChange} />
          </div>

          <div>
            <Label>Vendor</Label>
            <Select onValueChange={(value) => handleSelect('vendorId', value)}>
              <SelectTrigger>
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
          </div>

          <div>
            <Label>Total Amount</Label>
            <Input
              name="totalAmount"
              type="number"
              value={formData.totalAmount}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <Label>Remarks</Label>
          <Textarea name="remarks" value={formData.remarks} onChange={handleChange} />
        </div>

        <Button className="w-full" onClick={handleSubmit}>
          Submit Entry
        </Button>
      </CardContent>
    </Card>
  );
};

export default DayBookEntryForm;
