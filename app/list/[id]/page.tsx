interface PageProps {
  params?: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function ListPage({ params }: PageProps) {
  const id = params?.id;
  return <div>ListPage {id}</div>;
}
