
import React from 'react';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import DosageTable from './components/DosageTable';
import BloodLevelChart from './components/BloodLevelChart';
import DosageCalculator from './components/DosageCalculator';
import FoodSources from './components/FoodSources';
import SunExposure from './components/SunExposure';
import Footer from './components/Footer';
import Quiz from './components/Quiz';
import { BoneIcon, SunIcon, HeartIcon, ShieldIcon, DnaIcon } from './components/Icons';

const App: React.FC = () => {
  return (
    <div className="bg-orange-50 min-h-screen text-gray-800">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <InfoSection title="რა არის D ვიტამინი და რატომ არის ის მნიშვნელოვანი?">
              <p className="mb-4">
                D ვიტამინი არის ცხიმში ხსნადი ვიტამინი, რომელიც აუცილებელია ორგანიზმის ოპტიმალური ფუნქციონირებისთვის. ის არეგულირებს მრავალ ფიზიოლოგიურ პროცესს და გავლენას ახდენს ჯანმრთელობის ყველა ასპექტზე.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="text-orange-500 mt-1"><BoneIcon /></div>
                  <div>
                    <h4 className="font-semibold">ძვლების ჯანმრთელობა</h4>
                    <p className="text-sm">აუცილებელია კალციუმის შეწოვისთვის და ძვლების სიმტკიცის შენარჩუნებისთვის.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-teal-500 mt-1"><ShieldIcon /></div>
                  <div>
                    <h4 className="font-semibold">იმუნური სისტემა</h4>
                    <p className="text-sm">აძლიერებს თანდაყოლილ იმუნურ სისტემას და აუმჯობესებს ანტიინფექციურ პასუხს.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-orange-500 mt-1"><DnaIcon /></div>
                  <div>
                    <h4 className="font-semibold">გენეტიკური რეგულაცია</h4>
                    <p className="text-sm">არეგულირებს 1000-ზე მეტი გენის ექსპრესიას, რაც გავლენას ახდენს უჯრედების განვითარებაზე.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-teal-500 mt-1"><HeartIcon /></div>
                  <div>
                    <h4 className="font-semibold">გულ-სისხლძარღვთა ფუნქცია</h4>
                    <p className="text-sm">მნიშვნელოვან როლს ასრულებს კარდიოვასკულარული და ნევროლოგიური ფუნქციების შენარჩუნებაში.</p>
                  </div>
                </div>
              </div>
            </InfoSection>

            <InfoSection title="დეფიციტის სიმპტომები და რისკები">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">სკელეტური სიმპტომები</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>ძვლების ტკივილი</li>
                    <li>კუნთების სისუსტე</li>
                    <li>კუნთების კრუნჩხვები</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-600 mb-2">სისტემური სიმპტომები</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>ქრონიკული დაღლილობა</li>
                    <li>ხშირი ინფექციები</li>
                    <li>დეპრესია და განწყობის ცვლილება</li>
                  </ul>
                </div>
              </div>
               <p className="text-sm mt-4 p-3 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
                <strong>კლინიკური გართულებები:</strong> ბავშვებში შეიძლება გამოიწვიოს რაქიტი, ხოლო მოზრდილებში — ოსტეომალაცია (რბილი ძვლები) და ოსტეოპოროზი.
              </p>
            </InfoSection>
            
            <BloodLevelChart />
            <Quiz />
            <DosageTable />

          </div>

          <div className="lg:col-span-1 space-y-8">
            <DosageCalculator />
            <FoodSources />
            <SunExposure />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
