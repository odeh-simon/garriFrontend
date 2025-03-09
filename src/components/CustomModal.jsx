import PropTypes from 'prop-types';

const CustomModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#FFFFE6] p-4 rounded shadow-lg w-[90vw] md:w-[50vw] z-50">
        <p className="text-center text-[#080E52] font-roboto text-sm md:text-xl font-bold mb-4">An email will be sent to <span className='text-[#CECE04]'>example@email.com</span> to change password</p>
        <div className="flex items-center gap-8 justify-center">
          <button
            onClick={onClose}
            className="bg-transparent border-[2px] border-[#040E42] text-[#080E52] px-[18px] py-1 rounded-[6px]"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-[#151C71] text-white px-[18px] py-2 rounded-[6px]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default CustomModal;