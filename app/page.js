import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to Finance Tracker</h1>
      </div>
    </>
  );
}
