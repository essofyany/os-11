import AppIcon from "../materials/AppIcon";

const Toolbar = () => {
  const centerIcons = [
    "/assets/icons/search.svg",
    "/assets/icons/steam.svg",
    "/assets/icons/store.svg",
    "/assets/icons/powerPoint.svg",
  ];
  const rightIcons = [
    "/assets/icons/chevron-up.svg",
    "/assets/icons/onedrive.svg",
    "/assets/icons/wifi.svg",
    "/assets/icons/speaker.svg",
  ];
  return (
    <div className="absolute bottom-0 w-full h-16 glass">
      <div className="w-full h-full flex justify-between px-6">
        <div className="w-1/3"></div>
        <div className="w-1/3 h-full flex justify-center items-center gap-x-7">
          <img
            className="w-12 h-12 cursor-pointer"
            src="/assets/icons/windows.svg"
            alt=""
          />
          {centerIcons.map((url, idx) => (
            <AppIcon key={idx} iconUrl={url} />
          ))}
        </div>
        <div className="w-1/3 h-full flex justify-end items-center gap-x-7">
          {rightIcons.map((url, idx) => (
            <AppIcon key={idx} iconUrl={url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
