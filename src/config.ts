let base_url: string;

if (import.meta.env.MODE === "production") {
  base_url = import.meta.env.VITE_REACT_APP_API_URI as string;
} else {
  base_url = "http://localhost:8000";
}

export { base_url };
