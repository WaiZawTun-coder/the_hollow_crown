import type { Campaign } from "./types";

export async function getCampaigns(): Promise<Campaign[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/campaigns`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch campaigns");
  }

  return response.json();
}