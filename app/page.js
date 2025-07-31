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
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className} `}>The best URL Shortner in the Market</p>
          <p className="px-29 text-center">We are the most straight forward URL shortner in the world. Most of the URL shorteners track you or asks you to give your details for login. We understand your needs and hence created this URL shortener. </p>
          <div className="flex gap-3 justify-center text-white">
            <Link href="/shorten"><button className='bg-purple-500 font-bold px-3 py-1 rounded-lg shadow-2xl'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 font-bold px-3 py-1 rounded-lg shadow-2xl'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative ">
          <Image className="mix-blend-darken" src={"/vector.jpg"} alt="vector image" fill={true}/>
        </div>
      </section>
    </main>
  );
}
