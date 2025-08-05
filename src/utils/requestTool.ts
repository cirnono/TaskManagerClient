export async function request<T = any>(
    url: string,
    options: RequestInit = {}
): Promise<T> {
    const res = await fetch(url, {
        ...options,
        headers: { "Content-Type": "application/json", ...options.headers },
        credentials: "include", // 如果你用了 cookie 存 token
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Request failed");
    return data;
}
