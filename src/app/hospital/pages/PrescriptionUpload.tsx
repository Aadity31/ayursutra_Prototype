import React, { useState } from "react";
import PrescriptionForm from "../../components/hospital/PrescriptionForm";
import Card from "../../components/hospital/Card";
import { Prescription } from "../types/prescription";

const PrescriptionUpload: React.FC = () => {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);

  const handleSubmit = (data: Omit<Prescription, "id">) => {
    setPrescriptions(prev => [...prev, { id: Date.now(), ...data }]);
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800">Prescription Upload / Advice</h2>
      <PrescriptionForm onSubmit={handleSubmit} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {prescriptions.map(p => (
          <Card key={p.id} title={p.patient}>
            <p className="text-gray-700">{p.advice}</p>
            <p className="text-xs text-gray-500 mt-1">{p.date}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PrescriptionUpload;
