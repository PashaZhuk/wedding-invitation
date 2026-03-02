export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-100">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000" 
          alt="Свадебная атмосфера" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-100/20 via-transparent to-stone-100/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <span className="text-rose-500 font-medium tracking-[0.4em] uppercase mb-6 block animate-fade-in text-sm">Приглашение на свадьбу</span>
        <h1 className="text-5xl md:text-8xl font-serif text-stone-800 mb-8 italic leading-tight">
          Александр <br className="md:hidden" /> <span className="text-rose-400">&</span> Мария
        </h1>
        <p className="text-stone-600 text-xl md:text-2xl mb-12 font-light tracking-wide">
          07 июля 2026 • Начало в 15:00
        </p>
        <div className="flex justify-center">
          <a href="#contact" className="bg-rose-400 hover:bg-rose-500 text-white px-12 py-4 rounded-full font-medium transition-all transform hover:scale-105 shadow-xl shadow-rose-100">
            Подтвердить участие
          </a>
        </div>
      </div>
    </section>
  );
};