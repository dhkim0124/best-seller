export default async function ListPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <div>ListPage {id}</div>;
}
