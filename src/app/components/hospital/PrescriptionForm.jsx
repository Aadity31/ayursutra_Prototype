import React, { useState } from "react";
import Card from "./Card";

export default function PrescriptionForm({ onSubmit }) {
  const [patient, setPatient] = useState("");
  const [advice, setAdvice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!patient || !advice) return;
    onSubmit({ patient, advice, date: new Date().toISOString().split("T")[0] });
    setPatient("");
    setAdvice("");
  }

  return (
    <Card title="Upload Prescription / Give Advice">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Patient Name"
          value={patient}
          onChange={e => setPatient(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
        <textarea
          placeholder="Advice / Prescription"
          value={advice}
          onChange={e => setAdvice(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
        >
          Submit
        </button>
      </form>
    </Card>
  );
}
