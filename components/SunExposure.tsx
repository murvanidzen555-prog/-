
import React from 'react';
import InfoSection from './InfoSection';
import { SunIcon } from './Icons';

const SunExposure: React.FC = () => {
  return (
    <InfoSection title="მზის სხივები - D ვიტამინის ბუნებრივი წყარო">
      <div className="space-y-4">
        <div className="flex items-start p-3 bg-orange-50 rounded-lg">
          <SunIcon className="w-8 h-8 text-orange-400 mr-3 flex-shrink-0" />
          <div>
            <h4 className="font-semibold">ოპტიმალური დრო</h4>
            <p className="text-sm">10:00 - 16:00, როდესაც UV ინდექსი მაღალია.</p>
          </div>
        </div>
        <div className="flex items-start p-3 bg-orange-50 rounded-lg">
          <div className="w-8 h-8 text-orange-400 mr-3 flex-shrink-0 font-bold text-center text-lg">2x</div>
          <div>
            <h4 className="font-semibold">რეკომენდებული სიხშირე</h4>
            <p className="text-sm">კვირაში 2-ჯერ, 5-30 წუთის განმავლობაში (კანის ტიპის მიხედვით).</p>
          </div>
        </div>
        <p className="text-xs text-gray-600 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
          <strong>ფაქტორები:</strong> მუქი კანის მქონე ადამიანებს უფრო ხანგრძლივი ექსპოზიცია სჭირდებათ. ზამთარში და ეკვატორიდან შორს სინთეზი ნაკლებად ეფექტურია.
        </p>
      </div>
    </InfoSection>
  );
};

export default SunExposure;
