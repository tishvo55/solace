"use client";

import { Advocate } from "@/types/advocate";
import { formatPhoneNumber } from "@/utils/format";

interface AdvocateModalProps {
  advocate: Advocate | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function AdvocateModal({
  advocate,
  isOpen,
  onClose,
}: AdvocateModalProps) {
  if (!isOpen || !advocate) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative w-full max-w-2xl transform rounded-xl bg-white shadow-xl transition-all">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="p-8">
            {/* Header */}
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-[#347866]/10 flex items-center justify-center">
                <svg className="h-10 w-10 text-[#347866]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {advocate.firstName} {advocate.lastName}
              </h2>
              <p className="text-gray-600">{advocate.degree}</p>
            </div>

            {/* Details Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Location */}
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="flex items-center mb-2">
                  <svg className="h-5 w-5 text-[#347866] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                </div>
                <p className="text-gray-700">{advocate.city}</p>
              </div>

              {/* Experience */}
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="flex items-center mb-2">
                  <svg className="h-5 w-5 text-[#347866] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-semibold text-gray-900">Experience</h3>
                </div>
                <p className="text-gray-700">{advocate.yearsOfExperience} years</p>
              </div>

              {/* Contact */}
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="flex items-center mb-2">
                  <svg className="h-5 w-5 text-[#347866] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <h3 className="font-semibold text-gray-900">Contact</h3>
                </div>
                <p className="text-gray-700">{formatPhoneNumber(advocate.phoneNumber)}</p>
              </div>

              {/* Degree Badge */}
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="flex items-center mb-2">
                  <svg className="h-5 w-5 text-[#347866] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-semibold text-gray-900">Degree</h3>
                </div>
                <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-[#347866]/10 text-[#347866]">
                  {advocate.degree}
                </span>
              </div>
            </div>

            {/* Specialties */}
            <div className="mt-6">
              <div className="flex items-center mb-4">
                <svg className="h-5 w-5 text-[#347866] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <h3 className="font-semibold text-gray-900">Specialties</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {advocate.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="inline-flex px-3 py-2 text-sm font-medium rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#347866] focus:ring-offset-2"
              >
                Close
              </button>
              <button
                className="flex-1 rounded-lg bg-[#347866] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#2a5f52] transition-colors focus:outline-none focus:ring-2 focus:ring-[#347866] focus:ring-offset-2"
              >
                Contact Advocate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
