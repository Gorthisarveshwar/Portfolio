import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-[#121212]">
      {/* The Scrollytelling Sequence */}
      <section className="relative">
        <Overlay />
        <ScrollyCanvas />
      </section>

      {/* The After-Scroll Content */}
      <Projects />
      
      {/* Footer */}
      <footer className="w-full py-12 text-center text-white/40 border-t border-white/10 mt-20">
        <p>© {new Date().getFullYear()} Sarveshwara Rao. All rights reserved.</p>
      </footer>
    </main>
  );
}
