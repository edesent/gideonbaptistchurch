const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID || "";
const SHEET_NAME = "Sheet1";

interface SheetEvent {
  title: string;
  time: string;
  description: string;
  month: string;
  day: string;
  label: string;
  accent: boolean;
}

export async function getEvents(): Promise<SheetEvent[]> {
  if (!SHEET_ID) return [];

  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    const text = await res.text();

    // Google wraps the JSON in a callback — strip it
    const jsonString = text.replace(/^.*google\.visualization\.Query\.setResponse\(/, "").replace(/\);?\s*$/, "");
    const data = JSON.parse(jsonString);

    const rows = data.table.rows;

    return rows.map((row: { c: ({ v: string | null } | null)[] }) => ({
      title: row.c[0]?.v || "",
      time: row.c[1]?.v || "",
      description: row.c[2]?.v || "",
      month: row.c[3]?.v || "",
      day: row.c[4]?.v || "",
      label: row.c[5]?.v || "",
      accent: (row.c[6]?.v || "").toString().toLowerCase() === "true",
    }));
  } catch {
    return [];
  }
}
