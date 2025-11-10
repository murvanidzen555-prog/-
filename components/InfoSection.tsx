
import React from 'react';

interface InfoSectionProps {
  title: string;
  children: React.ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, children }) => {
  return (
    <section className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 border-b-2 border-orange-400 pb-2 mb-4">{title}</h2>
      <div className="text-gray-700">{children}</div>
    </section>
  );
};

export default InfoSection;
