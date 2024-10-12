import { useRouter } from 'next/navigation';

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <main>
      <h1>Product Details for ID: {id}</h1>
      {/* Fetch and display product details dynamically */}
    </main>
  );
}
