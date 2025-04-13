export default function ListPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return <div>ListPage {id}</div>;
}
