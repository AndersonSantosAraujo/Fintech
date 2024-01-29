import { useEffect, useRef, useState } from "react";

const useFetch = <T,>(url: RequestInfo | URL, options?: RequestInit) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const handleFetch = async () => {
      setLoading(true);
      setData(null);

      try {
        const res = await fetch(url, { signal, ...optionsRef.current });
        if (!res.ok) throw new Error(`Error: ${res.status}`);

        const json = (await res.json()) as T;
        if (!signal.aborted) setData(json);
      } catch (error) {
        if (!signal.aborted && error instanceof Error) setError(error.message);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };

    handleFetch();

    () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
