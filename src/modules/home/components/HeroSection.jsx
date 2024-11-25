import leftBg from '../../../assets/home/leftBg.png';
import rightBg from '../../../assets/home/rightBg.png';
import logo from '../../../assets/home/bigLogo.svg';
import logoMobile from '../../../assets/home/bigLogoMobile.svg';
import mobileBg from '../../../assets/home/mobileBg.png';
import elipse from '../../../assets/home/elipse-icon.svg';
import curveMobile from '../../../assets/home/blue-curve-mobile.svg';

const HeroSection = () => {
    const backgroundImage = {
        backgroundImage: `url(${mobileBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100%',
      };

      const mobileBackground = {
        backgroundImage: `url(${curveMobile})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        minHeight: '181px',
        height: 'auto', 
      };
      
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-0 h-[652px] bg-transparent p-6 w-full">
      {/* Left Image for Desktop */}
      <div className="hidden lg:block w-1/3">
        <img
          src={leftBg}
          alt="Market Scene Left"
          className="rounded-l-lg object-cover w-full h-full"
        />
      </div>

      {/* Center Content Desktop */}
      <div className="bg-transparent p-6 relative lg:w-2/3 hidden lg:block">
        <div className='flex flex-col items-center justify-center gap-8'>
            <div className='absolute top-0 left-0 hidden lg:block'>
                <img src={elipse} alt="elipse" className='w-[240px] h-[195\px]'/>
            </div>

            <div className='absolute bottom-4 flex flex-col gap-2 '>
                <div className="flex flex-col items-center justify-center gap-4 w-[80%] mx-auto">
                    <img
                        src={logo}
                        alt="Garri Market Logo"
                        className="w-[200px]"
                    />                                              
                    <p className="text-center text-[#080E52] text-[20px] font-roboto font-bold">
                    At your convenience, Shop and sell your Food Item, Agricultural products, and
                    services from anywhere in the world.
                    </p>
                </div>
               
                <div className="flex items-center justify-center w-[90%] mx-auto bg-[#151C71] rounded-b-full h-[210px]">
                    <button className="bg-blue-900 w-[60%] text-[#FCFCFC] font-roboto text-[25px] px-[18px] py-2 rounded-[6px] flex items-center justify-center">
                        Visit Market Now
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* Right Image for Desktop */}
      <div className="hidden lg:block w-1/3">
        <img
          src={rightBg}
          alt="Market Scene Right"
          className="rounded-r-lg object-cover w-full h-full"
        />
      </div>

      {/* Mobile and Tablet */}
      <div className='w-full lg:hidden flex flex-col gap-8'>
        <div className="flex items-center justify-center w-full" style={backgroundImage}>
            <div className="flex flex-col items-center justify-center w-[80%] mx-auto">
                <img
                    src={logoMobile}
                    alt="Garri Market Logo"
                    className="w-[200px]"
                /> 
            </div>
        </div>

        <div className='w-full'>
            <p className="text-center text-[#080E52] text-[18px] font-roboto">
            At your convenience, Shop and sell your Food Item, Agricultural products, and
            services from anywhere in the world.
            </p>

            <div className="relative w-full flex items-center justify-center" style={mobileBackground}>
                <button className="absolute top-10 bg-[#151C71] shadow-custom text-[#FCFCFC] font-roboto font-bold text-[24px] px-[8px] py-[6px] rounded-[6px] flex items-center justify-center">
                    Visit Market Now
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
