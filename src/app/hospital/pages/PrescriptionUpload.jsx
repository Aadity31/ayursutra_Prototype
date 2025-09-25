import React, { useState } from "react";
import PrescriptionForm from "../components/hospital/PrescriptionForm";
import Card from "../components/hospital/Card";

export default function PrescriptionUpload() {
  const [prescriptions, setPrescriptions] = useState([]);

  function handleSubmit(data) {
    setPrescriptions(prev => [...prev, { id: Date.now(), ...data }]);
  }

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-2xl font-semibold">Prescription Upload / Advice</h2>
      <PrescriptionForm onSubmit={handleSubmit} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {prescriptions.map(p => (
          <Card key={p.id} title={p.patient}>
            <p className="text-gray-700">{p.advice}</p>
            <p className="text-xs text-gray-500 mt-1">{p.date}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
