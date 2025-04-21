import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectScrollable({ division, setDivision }) {
  return (
    <div className="w-full flex flex-col">
      <Select value={division} onValueChange={setDivision} className="w-full">
        <SelectTrigger className=" px-6">
          <SelectValue className="" placeholder="Select your division" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectGroup className="">
            <SelectLabel>Divisions</SelectLabel>
            <SelectItem value="pd">Procurement Division</SelectItem>
            <SelectItem value="ad">Administrative Division</SelectItem>
            <SelectItem value="asd">Assessment Division</SelectItem>
            <SelectItem value="awd">Awarding Division</SelectItem>
            <SelectItem value="csd">CS Division</SelectItem>
            <SelectItem value="rd">RTI Division</SelectItem>
            <SelectItem value="mds">MD Staff</SelectItem>
            <SelectItem value="ictd">ICT Division</SelectItem>
            <SelectItem value="bd">BPG Division</SelectItem>
            <SelectItem value="tdsd">TDS Division</SelectItem>
            <SelectItem value="acd">Accounts Division</SelectItem>
            <SelectItem value="dd">Deployment Division</SelectItem>
            <SelectItem value="rd">RTI Division</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
