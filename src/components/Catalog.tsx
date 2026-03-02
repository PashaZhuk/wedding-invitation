const TIMELINE = [
  {
    id: 1,
    name: 'Сбор гостей',
    time: '15:00',
    difficulty: 'Welcome',
    description: 'Легкий фуршет, живая музыка и приветственные напитки в саду особняка.',
    img: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    name: 'Церемония',
    time: '16:30',
    difficulty: 'Main',
    description: 'Торжественная регистрация под открытым небом, обмен клятвами и кольцами.',
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 3,
    name: 'Ужин и танцы',
    time: '18:00',
    difficulty: 'Party',
    description: 'Праздничный банкет, поздравления и танцевальная программа до полуночи.',
    img: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=1200'
  }
];

export const Catalog = () => {
  return (
    <section id="catalog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-serif italic mb-20 text-stone-800 text-center">Программа дня</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {TIMELINE.map((step) => (
            <div key={step.id} className="text-center group">
              <div className="relative h-72 w-72 mx-auto rounded-full overflow-hidden mb-8 border-4 border-stone-50 shadow-inner">
                <img src={step.img} alt={step.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <span className="text-rose-400 font-bold text-xl tracking-tighter">{step.time}</span>
              <h3 className="text-2xl font-serif text-stone-800 my-3">{step.name}</h3>
              <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};