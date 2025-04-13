interface ListPageProps {
  params: {
    id: string;
  };
}

export default function ListPage({ params }: ListPageProps) {
  return <div>ListPage {params.id}</div>;
}
