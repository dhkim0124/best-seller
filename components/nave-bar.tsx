import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center p-4 text-xl font-bold px-20 bg-gray-900 mb-10">
      <div className="border-2 border-white-500 py-1 px-2 rounded-md hover:bg-white hover:text-black">
        <Link href="/">Home</Link>
      </div>
      <div className="border-2 border-white-500 py-1 px-2 rounded-md hover:bg-white hover:text-black">
        <Link href="/about">About Us</Link>
      </div>
    </div>
  );
}
