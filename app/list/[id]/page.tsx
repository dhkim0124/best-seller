import Link from "next/link";
import Image from "next/image";

type PageParams = Promise<{ id: string }>;

async function getCategory(id: string) {
  const API_URL = "https://books-api.nomadcoders.workers.dev";
  const response = await fetch(`${API_URL}/list?name=${id}`);
  const json = await response.json();
  return json;
}

export async function getCategories(id: string) {
  const API_URL = "https://books-api.nomadcoders.workers.dev";
  const response = await fetch(`${API_URL}/list?name=${id}`);
  return response.json();
}

type ItemType = {
  book_image: string;
  primary_isbn13: string;
  title: string;
  author: string;
  amazon_product_url: string;
};

async function BookInfo({ id }: { id: string }) {
  const category = await getCategories(id);
  console.log(category);
  return (
    <div className="flex flex-wrap gap-10 mx-20 text-2xl ">
      {category.results.books.map((book: ItemType) =>
        book.book_image ? (
          <div
            key={book.primary_isbn13}
            className="flex flex-col items-center w-64"
          >
            <div className="w-48 h-72 relative mb-4">
              <Image
                src={book.book_image}
                alt={book.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <h3 className="text-md text-gray-600 mb-2">{book.author}</h3>

              <Link href={book.amazon_product_url} target="_blank">
                <div className="bg-rose-300 px-4 py-2 rounded-md">Buy Now</div>
              </Link>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default async function ListPage({ params }: { params: PageParams }) {
  const { id } = await params;
  const categoryTitle = await getCategory(id);
  return (
    <div>
      <h1 className="text-3xl font-bold mx-20 my-8">
        {categoryTitle.results.list_name}
      </h1>
      <div>
        <BookInfo id={id} />
      </div>
    </div>
  );
}
