import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import DayBookForm from "./DayBookForm";
import NavBar from "../NavBar";

const DayBookFormFirstStep = ({ vendors = [], onSubmit }) => {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState("");

  const handleNext = () => {
    if (!selectedType) return;
    setStep(2);
  };

  return (
    <div className="flex flex-col justify-center">
      {/* <div>
        <NavBar />
      </div> */}

      <div className="min-h-screenbg-gray-100 p-20 justify-items-center">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="w-96 shadow-lg rounded-2xl">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">Select Entry Type</h2>
                <Select onValueChange={(value) => setSelectedType(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Fixed Assets">Fixed Assets</SelectItem>
                    <SelectItem value="Consumable Items">
                      Consumable Items
                    </SelectItem>
                    <SelectItem value="Vehicle Items">Vehicle Items</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  className="w-full"
                  onClick={handleNext}
                  disabled={!selectedType}
                >
                  Next
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {step === 2 && (
          <DayBookForm
            vendors={vendors}
            onSubmit={onSubmit}
            defaultType={selectedType}
          />
        )}
      </div>
    </div>
  );
};

export default DayBookFormFirstStep;
