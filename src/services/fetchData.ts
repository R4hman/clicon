export async function fetchData(url: string) {
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
