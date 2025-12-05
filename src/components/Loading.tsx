"use client";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#347866]/10 rounded-full mb-4">
              <svg className="w-8 h-8 text-[#347866]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#347866] mb-4 tracking-tight">
            Solace Advocates
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find qualified mental health advocates in your area
          </p>
        </header>
        
        <div className="flex flex-col items-center justify-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#347866] mb-6"></div>
          <span className="text-gray-600 text-lg">Loading advocates...</span>
          <p className="text-gray-500 text-sm mt-2">Finding qualified professionals in your area</p>
        </div>
      </div>
    </div>
  );
}
