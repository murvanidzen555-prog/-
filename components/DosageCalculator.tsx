
import React, { useState, useCallback } from 'react';
import InfoSection from './InfoSection';
import { CalculatorIcon } from './Icons';

interface Result {
    dose: string;
    message: string;
    color: string;
}

const DosageCalculator: React.FC = () => {
    const [age, setAge] = useState<string>('');
    const [bloodLevel, setBloodLevel] = useState<string>('');
    const [result, setResult] = useState<Result | null>(null);

    const calculateDose = useCallback(() => {
        const ageNum = parseInt(age, 10);
        const levelNum = parseInt(bloodLevel, 10);

        if (isNaN(ageNum) || ageNum < 0) {
            setResult({ dose: 'შეცდომა', message: 'გთხოვთ, შეიყვანოთ კორექტული ასაკი.', color: 'red' });
            return;
        }

        if (bloodLevel && (isNaN(levelNum) || levelNum < 0)) {
            setResult({ dose: 'შეცდომა', message: 'სისხლის დონე არასწორია.', color: 'red' });
            return;
        }

        let recommendation: Result;

        if (!bloodLevel) {
            if (ageNum < 1) recommendation = { dose: '400 IU', message: 'ოფიციალური რეკომენდაცია ჩვილებისთვის. დეტალებისთვის გაიარეთ კონსულტაცია პედიატრთან.', color: 'blue' };
            else if (ageNum <= 70) recommendation = { dose: '600 IU', message: 'ოფიციალური სადღეღამისო დოზა. ოპტიმალური დოზისთვის გაითვალისწინეთ სისხლის ანალიზი.', color: 'blue' };
            else recommendation = { dose: '800 IU', message: 'ოფიციალური რეკომენდაცია 70 წელს ზემოთ. დეფიციტის რისკი მაღალია.', color: 'blue' };
        } else {
            if (levelNum < 12) recommendation = { dose: '4000 IU-მდე', message: 'მწვავე დეფიციტი. დაუყოვნებლივ მიმართეთ ექიმს მკურნალობის კურსის დასანიშნად.', color: 'red' };
            else if (levelNum < 20) recommendation = { dose: '2000-4000 IU', message: 'არასაკმარისი დონე. დოზის კორექციისთვის რეკომენდებულია ექიმთან კონსულტაცია.', color: 'orange' };
            else if (levelNum < 30) recommendation = { dose: '2000 IU', message: 'სასურველია დონის გაზრდა ოპტიმალურ ზღვრამდე (30-40 ng/mL).', color: 'teal' };
            else if (levelNum <= 50) recommendation = { dose: '600-2000 IU', message: 'კარგი დონეა. ეს დოზა დაგეხმარებათ მის შენარჩუნებაში.', color: 'green' };
            else recommendation = { dose: '0 IU', message: 'დონე მაღალია. დროებით შეწყვიტეთ დანამატების მიღება და მიმართეთ ექიმს.', color: 'purple' };
        }
        setResult(recommendation);

    }, [age, bloodLevel]);

    const colorClasses: { [key: string]: string } = {
        red: 'bg-red-100 border-red-500 text-red-800',
        orange: 'bg-orange-100 border-orange-500 text-orange-800',
        teal: 'bg-teal-100 border-teal-500 text-teal-800',
        green: 'bg-green-100 border-green-500 text-green-800',
        blue: 'bg-blue-100 border-blue-500 text-blue-800',
        purple: 'bg-purple-100 border-purple-500 text-purple-800'
    };

    return (
        <InfoSection title="ინდივიდუალური კალკულატორი">
            <div className="space-y-4">
                <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">თქვენი ასაკი (სრული წელი)</label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        placeholder="მაგ: 35"
                    />
                </div>
                <div>
                    <label htmlFor="bloodLevel" className="block text-sm font-medium text-gray-700">სისხლში D ვიტამინის დონე (ng/mL) (არასავალდებულო)</label>
                    <input
                        type="number"
                        id="bloodLevel"
                        value={bloodLevel}
                        onChange={(e) => setBloodLevel(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        placeholder="მაგ: 18"
                    />
                </div>
                <button
                    onClick={calculateDose}
                    className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                >
                    <CalculatorIcon className="mr-2"/>
                    გამოთვლა
                </button>
            </div>
            {result && (
                <div className={`mt-4 p-4 border-l-4 rounded-r-lg ${colorClasses[result.color]}`}>
                    <p className="font-bold text-lg">{result.dose}</p>
                    <p className="text-sm">{result.message}</p>
                </div>
            )}
            <p className="text-xs text-gray-500 mt-4 italic">
                <strong>პასუხისმგებლობის უარყოფა:</strong> ეს კალკულატორი მხოლოდ საინფორმაციო მიზნებისთვისაა და არ ცვლის სამედიცინო კონსულტაციას. ნებისმიერი დანამატის მიღებამდე გაიარეთ კონსულტაცია ექიმთან.
            </p>
        </InfoSection>
    );
};

export default DosageCalculator;
