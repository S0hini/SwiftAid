import React, { useState } from 'react';
import { Guitar as Hospital } from 'lucide-react';

interface PatientInfo {
  age: string;
  gender: string;
  condition: string;
}

export default function Hospitals() {
  const [patientInfo, setPatientInfo] = useState<PatientInfo>({
    age: '',
    gender: '',
    condition: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to find the nearest hospital
    console.log('Finding nearest hospital for:', patientInfo);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Find Nearest Hospital</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Patient Age
            </label>
            <input
              type="number"
              value={patientInfo.age}
              onChange={(e) => setPatientInfo({ ...patientInfo, age: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter age"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Patient Gender
            </label>
            <select
              value={patientInfo.gender}
              onChange={(e) => setPatientInfo({ ...patientInfo, gender: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Medical Condition
            </label>
            <textarea
              value={patientInfo.condition}
              onChange={(e) => setPatientInfo({ ...patientInfo, condition: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe the medical condition"
              rows={4}
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2"
          >
            <Hospital className="w-5 h-5" />
            Find Nearest Hospital
          </button>
        </form>
      </div>
    </div>
  );
}