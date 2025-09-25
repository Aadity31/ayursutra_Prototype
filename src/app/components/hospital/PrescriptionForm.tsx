import React, { useState } from "react";
import { Prescription } from "../../pages/PrescriptionUpload";

interface PrescriptionFormProps {
  onSubmit: (data: Omit<Prescription, "id">) => void;
}

const PrescriptionForm: React.FC<PrescriptionFormProps> = ({ onSubmit }) => {
  const [patient, setPatient] = useState("");
  const [advice, setAdvice] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit({ patient, advice, date });
    setPatient("");
    setAdvice("");
    setDate("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 border p-4 rounded shadow">
      <input
        type="text"
        placeholder="Patient Name"
        value={patient}
        onChange={e => setPatient(e.target.value)}
        className="border p-2 rounded w-full"
        required
      />
      <input
        type="text"
        placeholder="Advice"
        value={advice}
        onChange={e => setAdvice(e.target.value)}
        className="border p-2 rounded w-full"
        required
      />
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        className="border p-2 rounded w-full"
        required
      />
      <button type="submit" className="px-3 py-1 bg-green-500 text-white rounded">Submit</button>
    </form>
  );
};

export default PrescriptionForm;
