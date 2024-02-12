let base_url: string;

if (import.meta.env.NODE_ENV === "production") {
  base_url = import.meta.env.VITE_REACT_APP_API_URI as string;
} else {
  base_url = "https://analog-backend.onrender.com";
}
console.log("base_url", import.meta.env.VITE_NODE_ENV);

export { base_url };
