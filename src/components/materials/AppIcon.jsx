const AppIcon = ({ label, iconUrl = "/assets/icons/store.svg" }) => {
  return (
    <div className="flex flex-col justify-center gap-1">
      <img className="w-6 h-6 cursor-pointer" src={iconUrl} alt="" />
      {label && <div>{label}</div>}
    </div>
  );
};

export default AppIcon;
