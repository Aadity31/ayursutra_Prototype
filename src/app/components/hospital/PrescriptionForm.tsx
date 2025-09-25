import React, { useState } from "react";
import Card from "./Card";
import { Prescription } from "../../types/prescription";

interface Props {
  onSubmit: (data: Omit<Prescription, "id">) => void;
}

const PrescriptionForm: React.FC<Props> = ({ onSubmit }) => {
  const [patient, setPatient] = useState("");
  const [advice, setAdvice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patient || !advice) return;
    onSubmit({ patient, advice, date: new Date().toISOString().split("T")[0] });
    setPatient("");
    setAdvice("");
  };

  return (
    <Card title="Upload Prescription / Give Advice">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Patient Name"
          value={patient}
          onChange={e => setPatient(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          required
        />
        <textarea
          placeholder="Advice / Prescription"
          value={advice}
          onChange={e => setAdvice(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
        >
          Submit
        </button>
      </form>
    </Card>
  );
};

export default PrescriptionForm;
