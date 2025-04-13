type PageParams = Promise<{ id: string }>;

export default async function ListPage({ params }: { params: PageParams }) {
  const { id } = await params;
  return <div>ListPage {id}</div>;
}
