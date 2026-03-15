import { Suspense } from "react";

export default async function AirPage() {
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const test = async () => {
    await sleep(1000);
    return <h1>HI</h1>;
  };

  return (
    <main className="bg-[url('/backgrounds/sky.jpg')] bg-no-repeat bg-cover min-h-screen"></main>
  );
}
