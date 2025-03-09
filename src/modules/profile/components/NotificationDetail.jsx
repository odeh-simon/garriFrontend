import PropTypes from "prop-types";

const NotificationDetail = ({ notification }) => {
  return (
    <div className="">
      {/* header text */}
      <div className="bg-[#151C71] lg:bg-gray-400  py-1">
        <p className="text-center text-[#FCFCFC] lg:text-[#080E52] font-roboto font-bold text-lg">
          {notification.category}
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-4 bg-white p-6 mx-4 shadow-md rounded-lg">
        <h2 className="text-sm md:text-xl font-roboto font-semibold">
          {notification.title}
        </h2>
        <div className="flex tems-center mb-4">
          <p className="text-[#2D3339] text-sm font-roboto">
            {notification.message}
          </p>
        </div>
        <div className="text-[#2D3339] text-sm font-roboto">
          {notification.time}
        </div>
      </div>
    </div>
  );
};
NotificationDetail.propTypes = {
  notification: PropTypes.shape({
    category: PropTypes.string.isRequired,
    icon: PropTypes.node,
    message: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};

export default NotificationDetail;
