import SocialIcon from "../SocialIcon/SocialIcon";

export default function SocialShareButtons() {
  const socialShareProps = {
    facebook: {
      label: "Share on facebook",
      color: "blue",
      iconClass:
        "border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition p-3 rounded-lg text-white border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700",
      icon: (
        <path d="M379 22v75h-44c-36 0-42 17-42 41v54h84l-12 85h-72v217h-88V277h-72v-85h72v-62c0-72 45-112 109-112 31 0 58 3 65 4z"></path>
      ),
    },
    twitter: {
      label: "Share on twitter",
      color: "gray",
      iconClass:
        "border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition p-3 rounded-lg text-white border-gray-600 bg-gray-600 hover:bg-gray-700 hover:border-gray-700",
      icon: (
        <path d="m459 152 1 13c0 139-106 299-299 299-59 0-115-17-161-47a217 217 0 0 0 156-44c-47-1-85-31-98-72l19 1c10 0 19-1 28-3-48-10-84-52-84-103v-2c14 8 30 13 47 14A105 105 0 0 1 36 67c51 64 129 106 216 110-2-8-2-16-2-24a105 105 0 0 1 181-72c24-4 47-13 67-25-8 24-25 45-46 58 21-3 41-8 60-17-14 21-32 40-53 55z"></path>
      ),
    },
  };

  return (
    <div className="sharing-buttons flex flex-wrap mt-4">
      <SocialIcon
        label={socialShareProps.facebook.label}
        iconClass={socialShareProps.facebook.iconClass}
        icon={socialShareProps.facebook.icon}
      />
      <SocialIcon
        label={socialShareProps.twitter.label}
        iconClass={socialShareProps.twitter.iconClass}
        icon={socialShareProps.twitter.icon}
      />
    </div>
  );
}
