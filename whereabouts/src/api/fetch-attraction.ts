export async function fetchAttraction(id?: string): Promise<void> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/attraction/${id}`,
  );
  return await response.json();
}
