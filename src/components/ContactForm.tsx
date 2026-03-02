export const ContactForm = () => {
  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif italic mb-4 text-stone-800">Подтвердите участие</h2>
        <p className="text-stone-500 mb-10 font-light">Пожалуйста, ответьте нам до 20 июня, чтобы мы могли всё подготовить.</p>
        <form className="space-y-6">
          <input 
            type="text" 
            placeholder="Ваше имя и фамилия" 
            className="w-full px-6 py-4 rounded-xl bg-white border border-stone-200 focus:border-rose-300 outline-none transition-all placeholder:text-stone-300" 
          />
          <div className="flex gap-4">
            <button type="button" className="flex-1 py-4 rounded-xl border-2 border-rose-400 text-rose-500 font-bold hover:bg-rose-400 hover:text-white transition-all">Приду</button>
            <button type="button" className="flex-1 py-4 rounded-xl border-2 border-stone-200 text-stone-400 font-bold hover:bg-stone-200 hover:text-white transition-all">Не смогу</button>
          </div>
          <textarea 
            placeholder="Пожелания или особенности питания" 
            className="w-full px-6 py-4 rounded-xl bg-white border border-stone-200 focus:border-rose-300 outline-none transition-all h-32 placeholder:text-stone-300"
          ></textarea>
          <button className="w-full bg-stone-800 text-white py-5 rounded-xl font-bold hover:bg-rose-500 transition-all shadow-lg shadow-stone-200 uppercase tracking-widest text-xs">
            Отправить ответ
          </button>
        </form>
      </div>
    </section>
  );
};