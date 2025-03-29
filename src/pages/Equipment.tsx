
import { Briefcase, CheckCircle } from 'lucide-react';

const defaultEquipment = [
  { name: 'Defibrillator', status: 'Available' },
  { name: 'Oxygen Cylinder', status: 'Available' },
  { name: 'First Aid Kit', status: 'Available' },
  { name: 'Stretcher', status: 'Available' },
  { name: 'Blood Pressure Monitor', status: 'Available' },
  { name: 'ECG Machine', status: 'Available' }
];

export default function Equipment() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Equipment List</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-blue-500" />
            <h2 className="text-lg font-semibold">Available Equipment</h2>
          </div>
        </div>
        
        <ul className="divide-y divide-gray-200">
          {defaultEquipment.map((item, index) => (
            <li key={index} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <span className="text-gray-800">{item.name}</span>
              <span className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                {item.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}