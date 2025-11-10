
import React from 'react';
import InfoSection from './InfoSection';
import { foodSources } from '../constants';

const FoodSources: React.FC = () => {
    return (
        <InfoSection title="D ვიტამინის საკვები წყაროები">
            <div className="space-y-4">
                {foodSources.map(source => (
                     <div key={source.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-semibold text-gray-800">{source.name}</p>
                            <p className="text-xs text-gray-500">{source.portion}</p>
                        </div>
                        <span className="font-bold text-teal-600 bg-teal-100 px-3 py-1 rounded-full text-sm">~{source.iu} IU</span>
                    </div>
                ))}
            </div>
        </InfoSection>
    );
};

export default FoodSources;
