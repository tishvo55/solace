import { Advocate, ApiResponse } from "@/types/advocate";
import { useEffect, useState } from "react";

export const useAdvocates = () => {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (term?: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = term
        ? await fetch(`/api/advocates?term=${encodeURIComponent(term)}`)
        : await fetch("/api/advocates");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonResponse: ApiResponse<Advocate[]> = await response.json();

      if (!jsonResponse.data) {
        throw new Error("No data received from API");
      }

      setAdvocates(jsonResponse.data);
    } catch (e) {
      const errorMessage =
        e instanceof Error ? e.message : "An unknown error occurred";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { advocates, loading, error, refetch: fetchData };
};
