export default function HamburgerMenu({ onClick }) {
  return (
    <div
      className="absolute self-center left-0 ml-2 cursor-pointer lg:hidden"
      onClick={onClick}
    >
      <div className="w-6 h-1 mb-1 bg-white"></div>
      <div className="w-6 h-1 mb-1 bg-white"></div>
      <div className="w-6 h-1 mb-1 bg-white"></div>
    </div>
  );
}
