const Footer = () => {
  return (
    <div className="bg-[#0379B833] lg:h-[400px] w-full rounded-t-3xl md:px-16 sm:px-8 px-5 mt-6">
      <div className="pt-[60px]">
        <div className="flex items-center ">
          <div className="flex items-center gap-3 w-7/12">
            <img className="lg:w-[46px] w-9 " src="/image/logo.png" alt="" />
            <h2 className="text-primary lg:text-3xl text-xl font-semibold">
              Medi<span className="text-secondary">care</span>
            </h2>
          </div>
          <h2 className="md:text-xl text-lg font-medium pl-5 lg:block hidden">
            Top insurances
          </h2>
        </div>

        <div className="pt-[33px] grid lg:grid-cols-5 md:grid-cols-3 3 grid-cols-2 lg:gap-0 gap-6">
          <ul className="text-base text-[#1F1F1F] flex flex-col gap-3">
            <li>About Us</li>
            <li>Annual Checkup</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
          <ul className="text-base text-[#1F1F1F] flex flex-col gap-3">
            <li>Get A Digenesis</li>
            <li>How it works</li>
            <li>Privacy Policy</li>
          </ul>
          <ul className="text-base text-[#1F1F1F] flex flex-col gap-3">
            <li>Contact Us</li>
            <li>FAQ’s</li>
          </ul>
          <div>
            {" "}
            <h2 className="md:text-xl text-lg font-medium pb-3 lg:hidden block ">
              Top insurances
            </h2>
            <ul className="text-base text-[#1F1F1F] flex flex-col gap-3">
              <li>Antenna</li>
              <li>Health Plan</li>
              <li>Blue Shield</li>
              <li>Careers</li>
            </ul>
          </div>
          <ul className="text-base text-[#1F1F1F] flex flex-col gap-3">
            <li>Health Net</li>
            <li>Health Smarts</li>
            <li>View More</li>
          </ul>
        </div>
        <div className="border-b border-[#1F1F1F33] pt-10"></div>
        <div className="flex sm:flex-row flex-col sm:gap-0 gap-2 items-center justify-between pt-5 lg:pb-0 pb-5">
          <h3>All rights reserved by Medicare - 2024</h3>
          <ul className="flex gap-4">
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
