export default function Hakkimizda() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#24221f]">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:px-8">
        <a href="/" className="text-lg font-medium tracking-[0.28em]">
          INUS
        </a>

        <article className="mt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#81786e]">
            INUS
          </p>

          <h1 className="mt-3 text-4xl font-light">
            Hakkımızda
          </h1>

          <div className="mt-8 space-y-6 leading-8 text-[#625c54]">
            <p>
              INUS, insanların rüyalarını kendi kelimeleriyle anlatmalarına
              ve rüyalarındaki sembol, duygu ve ilişkiler üzerine düşünmelerine
              yardımcı olmak amacıyla oluşturulmuş bir rüya yorumlama
              platformudur.
            </p>

            <p>
              INUS, Carl Jung'un analitik psikolojisinden ve modern psikolojik
              yaklaşımlardan yararlanarak rüyaları hazır sembol sözlükleriyle
              açıklamak yerine, rüyanın kendi bağlamına ve rüyayı gören kişinin
              deneyimine odaklanır.
            </p>

            <p>
              Sunulan yorumlar kesin gerçekler, psikolojik tanılar veya gelecek
              öngörüleri değildir. Amaç, kişinin kendi rüyasına farklı bir
              perspektiften bakmasına yardımcı olmaktır.
            </p>
          </div>
        </article>

        <footer className="mt-20 border-t border-[#d9d1c7] pt-6 text-sm text-[#81786e]">
          <a href="/" className="hover:text-[#454039]">Ana Sayfa</a>
          <span className="mx-3">·</span>
          <a href="/bize-ulasin" className="hover:text-[#454039]">
            Bize Ulaşın
          </a>
        </footer>
      </div>
    </main>
  );
}
