const Desktop = ({ children }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-wallpaper-image bg-no-repeat bg-cover p-6">
      {/* pages/ apps / windows */}
      <section className="absolute top-0 left-0 w-full h-full flex justify-center items-center pb-14">
        {children}
      </section>
    </div>
  );
};

export default Desktop;
