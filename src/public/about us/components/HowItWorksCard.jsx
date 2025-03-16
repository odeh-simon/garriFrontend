import PropTypes from 'prop-types';

const HowItWorksCard = ({ number, headerText, paragraphText }) => {
  return (
    <div className="flex gap-5 items-center p-3 rounded-lg border border-[#F1F1F3] bg-white">
      <p className="text-[#E4E4E7] font-roboto text-4xl md:text-[64px] font-bold">{number}</p>
      <div className="flex flex-col">
        <h2 className="text-lg md:text-2xl font-bold font-roboto text-[#080E52]">{headerText}</h2>
        <p className="text-[#656567] font-roboto font-light text-[9px] md:font-normal text-lg">{paragraphText}</p>
      </div>
    </div>
  );
};

HowItWorksCard.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  headerText: PropTypes.string.isRequired,
  paragraphText: PropTypes.string.isRequired,
};

export default HowItWorksCard;
