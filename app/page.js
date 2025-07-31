import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";


const poppins = localFont({
  src:"./fonts/Poppins-ExtraBold.ttf",
  variable:"--font-poppins",
  weight:"100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      {/* Hero Section */}
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className} `}>The best URL Shortner in the Market</p>
          <p className="px-29 text-center">We are the most straight forward URL shortner in the world. Most of the URL shorteners track you or asks you to give your details for login. We understand your needs and hence created this URL shortener. </p>
          <div className="flex gap-3 justify-center text-white">
            <Link href="/shorten"><button className='bg-purple-500 font-bold px-3 py-1 rounded-lg shadow-2xl active:scale-95 cursor-pointer'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 font-bold px-3 py-1 rounded-lg shadow-2xl active:scale-95 cursor-pointer'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative ">
          <Image className="mix-blend-darken" src={"/vector.jpg"} alt="vector image" fill={true}/>
        </div>
      </section>

      {/* Why BitLinks Section */}
      <section className="bg-purple-200 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-8">
            Why Choose BitLinks?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                🔒 No Tracking
              </h3>
              <p className="text-sm text-gray-700">
                We don’t collect your personal data. No signup. Just clean links.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                ⚡ Fast & Reliable
              </h3>
              <p className="text-sm text-gray-700">
                Experience lightning fast redirection and minimal downtime.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                💻 Open Source
              </h3>
              <p className="text-sm text-gray-700">
                Fully open and hosted on GitHub. Fork it, use it, improve it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
