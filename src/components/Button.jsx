import React from 'react';

export default function Button({ bgColor = 'transparent', icon, label, border = true, onClick }) {
  return (
    <button
      className={`flex items-center w-[100%] lg:w-[540px] h-[70px] px-[18px] rounded-[12px] 
        ${bgColor === 'transparent' ? (border ? 'border-2 border-[#FCFCFC]' : '') : ''}
        ${bgColor !== 'transparent' ? `bg-[${bgColor}]` : ''}
        hover:bg-[#151C71] hover:border-none`}
      onClick={onClick}
    >
      <img src={icon} alt={label} className="w-6 h-6 mr-2" />
      <span className="flex-grow text-center text-[#FCFCFC] font-roboto text-[24px] font-bold">{label}</span>
    </button>
  );
}
