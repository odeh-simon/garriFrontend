import facebookIcon from '../assets/social/facebook.svg';
import twitterIcon from '../assets/social/twitter.svg';
import discordIcon from '../assets/social/discord.svg';
import instagramIcon from '../assets/social/instagram.svg';
import telegramIcon from '../assets/social/telegram.svg';
export default function SocialLinks() {
  return (
    <div className="mb-6 flex flex-col gap-6 items-center justify-center">
      <div className="flex items-center gap-6">
        {/* facebook */}
        <a
          target="_blank"
          href="https://web.facebook.com/profile.php?id=61557335565680"
          className="flex flex-col items-center"
        >
          <div className="flex items-center justify-center bg-white shadow-md rounded-full w-[30.335px] h-[30.335px] md:w-[60.667px] md:h-[60.667px] lg:w-[91px] lg:h-[91px]">
            <img
              src={facebookIcon}
              alt="facebook icon"
              className="w-[8.869px] h-[18.425px] md:w-[17.739px] md:h-[36.833px] lg:w-[26.607px] lg:h-[55.248px]"
            />
          </div>
          <p className="text-xs lg:text-lg font-roboto text-[#00053C]">
            Facebook
          </p>
        </a>

        {/* twitter */}
        <a
          target="_blank"
          href="https://x.com/GarriProject?t=JxKyAayvkPs6tPjeNcmWoQ&s=09"
          className="flex flex-col items-center"
        >
          <div className="flex items-center justify-center bg-white shadow-md rounded-full w-[30.335px] h-[30.335px] md:w-[60.667px] md:h-[60.667px] lg:w-[91px] lg:h-[91px]">
            <img
              src={twitterIcon}
              alt="twitter icon"
              className="w-[21.998px] h-[21.665px] md:w-[44px] md:h-[43.333px] lg:w-[66px] lg:h-[65px]"
            />
          </div>
          <p className="text-xs lg:text-lg font-roboto text-[#00053C]">X</p>
        </a>

        {/* discord */}
        <a
          target="_blank"
          href="https://web.discord.com/profile.php?id=61557335565680"
          className="flex flex-col items-center"
        >
          <div className="flex items-center justify-center bg-white shadow-md rounded-full w-[30.335px] h-[30.335px] md:w-[60.667px] md:h-[60.667px] lg:w-[91px] lg:h-[91px]">
            <img
              src={discordIcon}
              alt="discord icon"
              className="w-[21.335px] h-[21.335px] md:w-[42.667px] md:h-[42.667px] lg:w-[64px] lg:h-[64px]"
            />
          </div>
          <p className="text-xs lg:text-lg font-roboto text-[#00053C]">
            Discord
          </p>
        </a>

        {/* telegram */}
        <a
          target="_blank"
          href="https://t.me/+hYgylQLg6eBlZWFk"
          className="flex flex-col items-center"
        >
          <div className="flex items-center justify-center bg-white shadow-md rounded-full w-[30.335px] h-[30.335px] md:w-[60.667px] md:h-[60.667px] lg:w-[91px] lg:h-[91px]">
            <img
              src={telegramIcon}
              alt="telegram icon"
              className="w-[17.309px] h-[15.145px] md:w-[34.612px] md:h-[30.285px] lg:w-[51.918px] lg:h-[45.428px]"
            />
          </div>
          <p className="text-xs lg:text-lg font-roboto text-[#00053C]">
            Telegram
          </p>
        </a>

        {/* instagram */}
        <a
          target="_blank"
          href="https://web.instagram.com/profile.php?id=61557335565680"
          className="flex flex-col items-center"
        >
          <div className="flex items-center justify-center bg-white shadow-md rounded-full w-[30.335px] h-[30.335px] md:w-[60.667px] md:h-[60.667px] lg:w-[91px] lg:h-[91px]">
            <img
              src={instagramIcon}
              alt="instagram icon"
              className="w-[22.665px] h-[22.665px] md:w-[45.333px] md:h-[45.333px] lg:w-[68px] lg:h-[68px]"
            />
          </div>
          <p className="text-xs lg:text-lg font-roboto text-[#00053C]">
            Instagram
          </p>
        </a>
      </div>
    </div>
  );
}
