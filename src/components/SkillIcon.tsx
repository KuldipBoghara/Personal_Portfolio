import React from 'react';

type SkillIconProps = {
  logo: string;
  name: string;
  level: number;
};

const SkillIcon: React.FC<SkillIconProps> = ({ logo, name, level }) => {
  return (
    <div className="flex flex-col items-center transition-transform duration-300 w-24 hover:scale-105 group">
      <img
        src={logo}
        alt={name}
        title={name}
        className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
      />

      <div className="w-full h-1.5 bg-black/10 rounded mt-2 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="h-full bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillIcon;
