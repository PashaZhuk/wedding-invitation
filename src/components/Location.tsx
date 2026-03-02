export const Location = () => {
  // Координаты Москва-Сити для ссылки
  const lat = 55.748022;
  const lon = 37.537028;
  const zoom = 16;

  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-serif italic mb-8 text-stone-800">Место проведения</h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-stone-600 mb-2 font-light">Деловой центр «Москва-Сити»</p>
          <p className="text-stone-400 italic">г. Москва, Пресненская набережная, д. 12</p>
        </div>
        
        {/* Интерактивная карта Яндекс (Москва-Сити) */}
        <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl shadow-stone-200 border-8 border-white relative">
          <iframe 
            src={`https://yandex.ru/map-widget/v1/?ll=${lon}%2C${lat}&z=${zoom}&l=map&pt=${lon}%2C${lat},pm2rdm`}
            width="100%" 
            height="100%" 
            frameBorder="0"
            title="Yandex Map"
            className="filter grayscale-[10%]"
          ></iframe>
        </div>
        
        <div className="mt-10">
          <a 
            // Правильная ссылка, которая открывает карту/навигатор без 404
            href={`https://yandex.ru/maps/?pt=${lon},${lat}&z=${zoom}&l=map`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border-b-2 border-rose-300 text-rose-500 font-medium pb-1 hover:text-rose-600 transition-all"
          >
            Открыть в Яндекс Навигаторе →
          </a>
        </div>
      </div>
    </section>
  );
};