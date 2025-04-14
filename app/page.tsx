import Link from "next/link";

type ItemType = {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
};

export default async function page() {
  const res = await fetch("https://books-api.nomadcoders.workers.dev/lists");
  const data = await res.json();

  return (
    <div className="flex flex-wrap gap-10 mx-20 text-2xl ">
      {data.results.map((item: ItemType, index: number) => (
        <div key={index}>
          <Link href={`/list/${item.list_name_encoded}`}>
            <div className="hover:text-rose-300 hover:scale-105 transition-all duration-300">
              <h2>{item.list_name}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
