"use client";

import { useEffect, useState, ChangeEvent } from "react";
import Loading from "@/components/Loading";
import ErrorUI from "@/components/Error";
import { useAdvocates } from "@/data-fetchers/fetch-advocates";
import AdvocatesTable from "@/components/AdvocatesTable";

export default function Home() {
  const [term, setTerm] = useState<string>("");
  const [debouncedTerm, setDebouncedTerm] = useState<string>("");

  const { advocates, loading, error, refetch } = useAdvocates();

  // Debounce the search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    return () => clearTimeout(timer);
  }, [term]);

  // Perform search when debounced term changes
  useEffect(() => {
    if (debouncedTerm) {
      refetch(debouncedTerm);
    }
  }, [debouncedTerm]);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;

    setTerm(searchTerm);
  };

  const onResetClick = () => {
    setTerm("");
    refetch();
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorUI errorMessage={error} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <AdvocatesTable
        onSearch={onSearch}
        searchTerm={term}
        onResetClick={onResetClick}
        advocates={advocates}
      />
    </div>
  );
}
