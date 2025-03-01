import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container max-w-7xl mx-auto p-4">
        {/* Your main content will go here */}
        <h1 className="text-3xl font-bold">Welcome to My Website</h1>
      </div>
    </main>
  );
}
