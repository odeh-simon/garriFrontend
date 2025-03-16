import PropTypes from 'prop-types';

export default function Button({ 
  bgColor = 'transparent', 
  hoverBgColor = '#151C71', 
  borderColor = '#FCFCFC', 
  textColor = '#FCFCFC', 
  hoverTextColor = '#FCFCFC',
  icon, 
  label, 
  border = true, 
  onClick 
}) {
  return (
    <button
      className={`flex items-center w-[100%] lg:w-[540px] h-[70px] px-[18px] rounded-[12px] 
        ${border ? 'border-2' : ''}`}
      style={{
        backgroundColor: bgColor,
        borderColor: border ? borderColor : 'transparent',
        color: textColor,
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = hoverBgColor;
        e.target.style.color = hoverTextColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = bgColor;
        e.target.style.color = textColor;
      }}
    >
      <img src={icon} alt={label} className="w-6 h-6 mr-2" />
      <span className="flex-grow text-center font-roboto text-[24px] font-bold">
        {label}
      </span>
    </button>
  );
};

Button.propTypes = {
  bgColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  border: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};