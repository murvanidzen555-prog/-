
import React from 'react';
import { dosageRecommendations } from '../constants';
import InfoSection from './InfoSection';

const DosageTable: React.FC = () => {
  return (
    <InfoSection title="რეკომენდებული დღიური დოზა (2024-2025 წლების მიხედვით)">
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-orange-100">
                        <th className="p-3 font-semibold text-sm text-gray-700 border-b border-gray-200">ასაკობრივი ჯგუფი</th>
                        <th className="p-3 font-semibold text-sm text-gray-700 border-b border-gray-200">ოფიციალური რეკომენდაცია</th>
                        <th className="p-3 font-semibold text-sm text-gray-700 border-b border-gray-200">ექსპერტების რეკომენდაცია</th>
                    </tr>
                </thead>
                <tbody>
                    {dosageRecommendations.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="p-3 border-b border-gray-200 font-medium">{item.ageGroup}</td>
                            <td className="p-3 border-b border-gray-200">{item.official}</td>
                            <td className="p-3 border-b border-gray-200 font-semibold text-teal-700">{item.expert}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <p className="text-xs text-gray-500 mt-4 p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
          <strong>შენიშვნა:</strong> ექსპერტები აღნიშნავენ, რომ უფრო მაღალი დოზები შეიძლება სასარგებლო იყოს დაავადებების პრევენციისთვის. ყოველთვის გაიარეთ კონსულტაცია ექიმთან. 1 მკგ = 40 IU.
        </p>
    </InfoSection>
  );
};

export default DosageTable;
