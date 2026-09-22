import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda ve içerik hazırlama yöntemi",
  description: "INUS hakkında bilgi edinin; rüya sembolü içeriklerinin hazırlanma yöntemini ve kaynakların nasıl kullanıldığını inceleyin.",
  alternates: {
    canonical: "/hakkimizda",
  },
};

export default function Hakkimizda() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#24221f]">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:px-8">
        <Link href="/" className="text-lg font-medium tracking-[0.28em]">
          INUS
        </Link>

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
              INUS, Carl Jung&apos;un analitik psikolojisinden ve modern psikolojik
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
          <section id="icerik-yontemi" className="mt-12 scroll-mt-6 border-t border-[#d9d1c7] pt-8">
            <h2 className="text-2xl font-light">İçerikler nasıl hazırlanıyor?</h2>
            <div className="mt-5 space-y-5 leading-8 text-[#625c54]">
              <p>
                Rüya sembolü içeriklerinin araştırma ve taslak hazırlama sürecinde
                yapay zekâ desteğinden yararlanılır. Taslaklar, yayın öncesinde
                içerik yapısı ve kalite kontrollerinden geçirilir. Otomatik
                kontroller, bir insanın her ifadeyi doğruladığı anlamına gelmez.
              </p>
              <p>
                Sembol sayfaları farklı yorum yaklaşımlarını ve rüyanın bağlamını
                birlikte ele alır. Kullanılan kaynaklar, her sembolün ayrı kaynak
                sayfasında incelenebilir. Bir kaynağın listelenmesi, sayfadaki her
                yorumun o kaynaktan doğrudan alıntı olduğu anlamına gelmez.
              </p>
              <p>
                İçerikler kişisel düşünmeye yardımcı olmak içindir; bilimsel
                olarak doğrulanmış, herkes için geçerli rüya anlamları sunmaz.
                Bir hata veya kaynak sorunu fark ederseniz bize iletebilirsiniz.
              </p>
              <Link href="/bize-ulasin" className="inline-flex min-h-11 items-center underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">
                İçerikle ilgili geri bildirim gönder
              </Link>
            </div>
          </section>
        </article>

        <footer className="mt-20 border-t border-[#d9d1c7] pt-6 text-sm text-[#81786e]">
          <Link href="/" className="hover:text-[#454039]">Ana Sayfa</Link>
          <span className="mx-3">·</span>
          <Link href="/bize-ulasin" className="hover:text-[#454039]">
            Bize Ulaşın
          </Link>
        </footer>
      </div>
    </main>
  );
}
