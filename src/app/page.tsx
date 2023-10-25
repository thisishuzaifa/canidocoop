import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center max-w-6xl mx-auto px-4">
      <div className="bg-gradient-to-r from-red-700 to-gray-900 text-white py-8 px-4 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 text-center font-serif">
          Can you do <br /> co-op?
        </h1>
        <p className="text-base md:text-lg text-center">
          Use this web app to determine your co-op eligibility. Please choose the college that best represents you. Each college
          has a different set of requirements depending on the program offerings. A short questionnaire will show your eligibility.
          The website will also show course offerings and give you a roadmap so that you can go on co-op ASAP.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-2 space-x-4">
        <Link href="/khoury-college">
          <button className="bg-red-700 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full md:w-auto">
            Khoury College of Computer Sciences
          </button>
        </Link>
        <Link href="/coe">
          <button className="bg-red-700 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full md:w-auto">
            College of Engineering
          </button>
        </Link>
        <Link href="/camd">
          <button className="bg-red-700 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full md:w-auto">
            College of Art Media and Design
          </button>
        </Link>
        <Link href="/cps">
          <button className="bg-red-700 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full md:w-auto">
            College of Professional Studies
          </button>
        </Link>
      </div>
    </main>
  );
}