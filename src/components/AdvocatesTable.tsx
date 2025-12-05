"use client";

import { Advocate } from "@/types/advocate";
import { formatPhoneNumber } from "@/utils/format";
import { ChangeEvent, useState } from "react";
import AdvocateModal from "./AdvocateModal";

interface AdvocatesTableProps {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
  onResetClick: () => void;
  advocates: Advocate[];
}

export default function AdvocatesTable({
  onSearch,
  searchTerm,
  onResetClick,
  advocates,
}: AdvocatesTableProps) {
  const [selectedAdvocate, setSelectedAdvocate] = useState<Advocate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (advocate: Advocate) => {
    setSelectedAdvocate(advocate);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAdvocate(null);
  };
  return (
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
        <div className="mt-6 flex items-center justify-center space-x-8 text-sm text-gray-500">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-[#347866]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Verified Professionals</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-[#347866]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Trusted Care</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-[#347866]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Local Support</span>
          </div>
        </div>
      </header>

      <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="mb-4">
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Search Advocates
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input
                id="search"
                type="text"
                onChange={onSearch}
                value={searchTerm}
                placeholder="Search by name, city, degree, specialties..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#347866] focus:border-[#347866] transition-colors"
              />
            </div>
            <button
              onClick={onResetClick}
              className="px-6 py-2 bg-[#347866] text-white rounded-md hover:bg-[#2a5f52] transition-colors focus:outline-none focus:ring-2 focus:ring-[#347866] focus:ring-offset-2"
            >
              Reset Search
            </button>
          </div>
          {searchTerm && (
            <p className="mt-2 text-sm text-gray-600">
              Searching for: <span className="font-medium">{searchTerm}</span>
            </p>
          )}
        </div>
      </section>
      <section>
        {advocates.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <svg
              className="mx-auto h-12 w-12 text-[#347866] mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No advocates found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms to find more results.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      City
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Degree
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Specialties
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Experience
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {advocates.map((advocate, index) => (
                    <tr 
                      key={advocate.id || index} 
                      className="hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => handleRowClick(advocate)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-[#347866]">
                          {advocate.firstName} {advocate.lastName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {advocate.city}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-[#347866]/10 text-[#347866]">
                          {advocate.degree}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {advocate.specialties
                            .slice(0, 2)
                            .map((specialty, specialtyIndex) => (
                              <span
                                key={specialtyIndex}
                                className="inline-flex px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800"
                              >
                                {specialty}
                              </span>
                            ))}
                          {advocate.specialties.length > 2 && (
                            <span className="inline-flex px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800">
                              +{advocate.specialties.length - 2} more
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {advocate.yearsOfExperience} years
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {formatPhoneNumber(advocate.phoneNumber)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
      
      <AdvocateModal
        advocate={selectedAdvocate}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
