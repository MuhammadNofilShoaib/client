import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row justify-between items-center p-6">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center gap-20">
        {/* Logo */}
        <Image src="/logo.jpg" alt="logo" width={410} height={236} className="w-[200px] md:w-full"/>

        {/* Content */}
        <div className="flex flex-col justify-center items-center gap-3 text-center">
          <h1 className="text-[#908526] text-4xl font-bold mb-5">Are you:</h1>
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-white font-semibold flex items-center gap-4 text-xl text-left md:text-center md:text-2xl">
              <span className="text-[#908526] text-3xl">✓</span> Looking to upscale your business?
            </h2>
            <h2 className="text-white font-semibold flex items-center gap-4 text-xl text-left md:text-center md:text-2xl">
              <span className="text-[#908526] text-3xl">✓</span> Drive more traffic to your digital pages?
            </h2>
            <h2 className="text-white font-semibold flex items-center gap-4 text-xl text-left md:text-center md:text-2xl">
              <span className="text-[#908526] text-3xl">✓</span> Convert existing traffic into sales?
            </h2>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-[#908526] text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-yellow-600 transition">
          Yes, that sounds like me!
        </button>
      </div>

      {/* Right Section - Image */}
      <div className=" hidden md:flex justify-center items-center">
        <Image src="/jacob.png" alt="me" width={600} height={600} className="mt-20 " />
      </div>
    </div>
  );
}
