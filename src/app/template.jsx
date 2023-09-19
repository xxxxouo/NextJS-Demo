export default function Template({ children }) {
  return (
    <div className="w-full">
      <p className=" text-gray-400 border-b border-red-400 border-solid text-center">
        洁神出品 必出精品
      </p>
      {children}
    </div>
  );
}
