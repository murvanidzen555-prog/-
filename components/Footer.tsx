
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-8 border-t">
      <div className="container mx-auto px-4 py-6 text-center text-gray-500">
        <p className="text-sm font-semibold">მონაცემთა წყაროები:</p>
        <p className="text-xs mt-1">
          Endocrine Society 2024 | Mayo Clinic | NIH Office of Dietary Supplements | Cleveland Clinic | MDPI Nutrients 2025
        </p>
        <p className="text-xs mt-4">
          © {new Date().getFullYear()} D ვიტამინის გზამკვლევი. ყველა უფლება დაცულია.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
