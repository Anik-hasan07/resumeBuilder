/* eslint-disable react/no-unescaped-entities */
import resumeSvg from "../../assets/resume.svg";

function Header() {
  return (
    <div className="py-20 px-6 text-center flex items-center justify-between bg-blue-50 min-h-screen">
      <div className="max-w-md mx-auto">
        <p className="text-4xl font-bold leading-8">
          Anik Hasan <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">Resume</span> Resume Build Site
        </p>
        <p className="text-4xl font-bold leading-8">
          Make your own resume. <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text"> got your dream job before your next interview.</span>
        </p>
      </div>
      <div className="flex-shrink-0">
        <img src={resumeSvg} alt="Resume" className="w-96" />
      </div>
    </div>
  );
}

export default Header;
