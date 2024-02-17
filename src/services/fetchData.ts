export async function fetchData(url: string) {
  // const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  // const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
  console.log("url", url);
  try {
    if (url.includes("undefined")) {
      return null;
    }
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Could not fetch categories with status ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}
