export const Feature = () => {
  return (
    <>

    <div className="feature-text flex flex-col items-center justify-center text-center gap-2 py-8  "id="features">
      <h1 className="text-4xl font-bold font-arial text-gray-900 sm:text-3xl lg:text-4xl">Everything you need to stay connected</h1>
      <p className="text-sm text-gray-600 font-arial uppercase tracking-[0.3em]">Built for people who take their relationships seriously.</p>
    </div>
    <div className="feature-boxes flex justify-space-evenly items-center gap-6 p-6 mx-auto" >
      <div className="box rounded-[2rem] bg-white shadow-[0_10px_40px_rgba(17,24,39,0.15)] p-6">
        <div className="box-content flex flex-col items-left text-left gap-4 max-w-md">
            <img src="public/mail.png" alt="Mail Icon" className="w-12 h-12" ></img>
           <h1 className="text-2xl font-bold text-gray-800">Access from Anywhere</h1>
              <p className="text-xs leading-relaxed text-gray-600 tracking-[0.1em] uppercase">never miss a beat with instant access to your contacts on any device.</p>
      </div>
      </div>
      <div className="box rounded-[2rem] bg-white shadow-[0_10px_40px_rgba(17,24,39,0.15)] p-6">
        <div className="box-content flex flex-col items-left text-left gap-4 max-w-md">
            <img src="public/lightning.png" alt="Lightning Icon" className="w-12 h-12" ></img>
           <h1 className="text-2xl font-bold text-gray-800">Instant Search</h1>
              <p className="text-xs leading-relaxed text-gray-600 tracking-[0.1em] uppercase">find what you need in an instant, no more scrolling through lists.</p>
      </div>
      </div>
      <div className="box rounded-[2rem] bg-white shadow-[0_10px_40px_rgba(17,24,39,0.15)] p-6">
        <div className="box-content flex flex-col items-left text-left gap-4 max-w-md">
            <img src="public/price-tag.png" alt="Tag Icon" className="w-12 h-12" ></img>
           <h1 className="text-2xl font-bold text-gray-800">Smart Tagging</h1>
              <p className="text-xs leading-relaxed text-gray-600 tracking-[0.1em] uppercase">organize your contacts with our intelligent tagging feature.</p>
      </div>
      </div>
    </div>

    </>
    
  );
};

export default Feature;