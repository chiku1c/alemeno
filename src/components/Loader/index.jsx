const Loader = ({ size }) => {
  return (
    <div className="flex  items-center justify-center w-full h-screen border border-gray-300 p-2 overflow-y-auto">
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className="animate-spin"
      >
        <div
          className="h-full w-full border-4 border-t-purple-500
       border-b-purple-700 rounded-[50%]"
        ></div>
      </div>
    </div>
  );
};

export default Loader;
