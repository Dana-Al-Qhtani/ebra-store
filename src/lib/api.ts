
//  fetch JSON with timeout + clear error messages.

export async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const controller = new AbortController();
  const timeoutMs = 10_000;

  // Abort the request if it takes too long (prevents hanging)
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, { ...init, signal: controller.signal });

    // Convert non-2xx responses into a readable error
    if (!res.ok) {
      throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }

    return (await res.json()) as T;
  } catch (err) {
    // Normalize errors (network / timeout / unknown)
    const message =
      err instanceof Error ? err.message : "Unknown error while fetching data";
    throw new Error(message);
  } finally {
    clearTimeout(timeoutId);
  }
}