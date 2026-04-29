import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Platform overview section */}
      <section className="py-24 bg-light-000">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-dark-300 mb-4">Platform overview</h2>
          <p className="text-dark-100 max-w-xl mx-auto">
            Hover Platform in the navbar to explore the redesigned mega menu.
          </p>
        </div>
      </section>
    </main>
  );
}
