import './App.css';
import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { Location } from './components/Location'; // Импортируем карту
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white font-serif antialiased selection:bg-rose-200 selection:text-rose-900">
      <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center gap-6 md:gap-12 text-stone-800 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
          <a href="#catalog" className="hover:text-rose-500 transition-colors">Тайминг</a>
          <a href="#location" className="hover:text-rose-500 transition-colors">Карта</a> {/* Ссылка на карту */}
          <div className="text-xl font-serif italic tracking-tighter lowercase text-stone-900 px-4 border-x border-stone-200">
            A<span className="text-rose-400">&</span>M
          </div>
          <a href="#contact" className="hover:text-rose-500 transition-colors">RSVP</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Catalog />
        <Location /> {/* Секция с картой */}
        <ContactForm />
      </main>

      <footer className="bg-stone-50 py-12 text-center text-stone-400 text-sm italic">
        <p>Ждем вас на нашем празднике!</p>
        <p className="mt-2 not-italic tracking-widest uppercase text-[10px]">07.07.2026</p>
      </footer>
    </div>
  );
}

export default App;