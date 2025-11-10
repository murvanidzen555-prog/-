
import React from 'react';
import { bloodLevels } from '../constants';
import InfoSection from './InfoSection';
import { StarIcon } from './Icons';

const BloodLevelChart: React.FC = () => {
  return (
    <InfoSection title="D ვიტამინის დონე სისხლში">
      <div className="w-full mb-4">
        <div className="flex w-full h-8 rounded-full overflow-hidden text-white text-xs items-center font-bold">
          <div className="flex-1 bg-red-500 h-full flex items-center justify-center" style={{ flexBasis: '20%' }}>{'<12'}</div>
          <div className="flex-1 bg-yellow-500 h-full flex items-center justify-center" style={{ flexBasis: '15%' }}>12-20</div>
          <div className="flex-1 bg-green-500 h-full flex items-center justify-center" style={{ flexBasis: '45%' }}>20-50</div>
          <div className="flex-1 bg-purple-500 h-full flex items-center justify-center" style={{ flexBasis: '20%' }}>{'>50'}</div>
        </div>
        <div className="flex w-full text-xs mt-1 px-1">
          <div className="text-center" style={{ flexBasis: '20%' }}>დეფიციტი</div>
          <div className="text-center" style={{ flexBasis: '15%' }}>არასაკმ.</div>
          <div className="text-center" style={{ flexBasis: '45%' }}>ნორმა</div>
          <div className="text-center" style={{ flexBasis: '20%' }}>მაღალი</div>
        </div>
      </div>
      
      <div className="space-y-3 mt-4">
        {bloodLevels.map((level, index) => (
          <div key={index} className={`p-3 border-l-4 rounded-r-md ${level.borderColor}`}>
            <h4 className={`font-semibold ${level.textColor}`}>{level.title} ({level.range})</h4>
            <p className="text-sm text-gray-600">{level.description}</p>
          </div>
        ))}
      </div>

       <div className="mt-4 p-4 bg-teal-50 border-l-4 border-teal-500 rounded-r-lg">
          <div className="flex items-center space-x-2">
            <StarIcon className="text-teal-600"/>
            <h4 className="font-bold text-teal-800">ოპტიმალური დონე: 30-40 ng/mL (75-100 nmol/L)</h4>
          </div>
        <p className="text-sm text-teal-700 mt-1">უახლესი კვლევები აჩვენებს, რომ ეს დონე დაკავშირებულია უკეთეს ჯანმრთელობასთან, მაღალ იმუნურ ფუნქციასთან და კიბოსა და გულ-სისხლძარღვთა დაავადებების დაბალ რისკთან.</p>
      </div>
    </InfoSection>
  );
};

export default BloodLevelChart;
