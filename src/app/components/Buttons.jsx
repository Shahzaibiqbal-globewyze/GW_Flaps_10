import Link from "next/link";
import React from "react";
import Image from "next/image";

const Buttons = () => {
  return (
    <div>
      <div className="flex gap-4 mt-4 md:mt-6 flex-wrap">
        {/* Google Play Button */}
        <Link href="https://play.google.com/store/apps/details?id=com.millao.re&pcampaignid=web_share&pli=1" className="flex items-center mb-4 md:mb-0">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play Badge"
            width={140}
            height={40}
            className="rounded-lg"
          />
        </Link>

        {/* Apple App Store Button */}
        <Link
          href="https://apps.apple.com/pk/app/millao-re/id6472173071"
          className="flex items-center w-[140px] h-[40px] bg-black text-white rounded-lg hover:bg-gray-800 justify-center gap-1"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple Logo"
            width={14}
            height={14}
            className="mr-1"
            style={{ filter: "invert(1)" }}
          />
          <div className="flex flex-col items-start leading-tight">
            <span className="text-[10px] font-medium">Download on the</span>
            <span className="text-sm font-bold">App Store</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Buttons;