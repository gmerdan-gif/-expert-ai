import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/gizlilik",
  },
};

export default function Gizlilik() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#24221f]">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:px-8">
        <a href="/" className="text-lg font-medium tracking-[0.28em]">
          INUS
        </a>

        <article className="mt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#81786e]">
            GİZLİLİK
          </p>

          <h1 className="mt-3 text-4xl font-light">
            Gizlilik Politikası
          </h1>

          <div className="mt-8 space-y-8 leading-8 text-[#625c54]">

            <section>
              <h2 className="mb-3 text-xl font-medium text-[#24221f]">
                Genel
              </h2>

              <p>
                INUS, kullanıcıların gizliliğine saygı gösterir. Bu politika,
                INUS web sitesini kullandığınızda hangi bilgilerin işlendiğini
                ve bu bilgilerin hangi amaçlarla kullanıldığını açıklar.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-medium text-[#24221f]">
                Rüya metinleri
              </h2>

              <p>
                Kullanıcının gönderdiği rüya metni, rüya yorumunun
                oluşturulabilmesi amacıyla yapay zekâ hizmetine gönderilir.
                Oluşturulan yorum ve rüya metni, hizmetin çalışması, güvenliği,
                hata takibi ve hizmetin geliştirilmesi amacıyla sistemimizde
                saklanabilir.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-medium text-[#24221f]">
                Teknik bilgiler
              </h2>

              <p>
                Hizmetin güvenliğini sağlamak ve kötüye kullanımı önlemek
                amacıyla IP adresi, istek zamanı, istek durumu ve benzeri
                teknik bilgiler kaydedilebilir. Bu bilgiler özellikle hız
                sınırlama, güvenlik, hata tespiti ve sistem performansının
                izlenmesi amacıyla kullanılabilir.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-medium text-[#24221f]">
                Yapay zekâ hizmetleri
              </h2>

              <p>
                Rüya yorumlarının oluşturulması için üçüncü taraf yapay zekâ
                hizmetlerinden yararlanılabilir. Kullanıcı tarafından gönderilen
                içerik, yalnızca INUS hizmetinin çalışması için gerekli olduğu
                ölçüde bu hizmetlere aktarılır.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-medium text-[#24221f]">
                Reklamlar
              </h2>

              <p>
                INUS, hizmetin sürdürülebilmesi amacıyla üçüncü taraf reklam
                hizmetleri kullanabilir. Bu hizmetler, reklamların
                gösterilmesi ve ölçümlenmesi için çerezler veya benzeri
                teknolojiler kullanabilir.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-medium text-[#24221f]">
                İletişim
              </h2>

              <p>
                Gizlilik veya kişisel verilerle ilgili sorularınız için
                bizimle iletişime geçebilirsiniz.
              </p>

              <a
                href="mailto:support@in-us.app"
                className="inline-block mt-3 text-[#24221f] underline underline-offset-4"
              >
                support@in-us.app
              </a>
            </section>

          </div>
        </article>

        <footer className="mt-20 border-t border-[#d9d1c7] pt-6 text-sm text-[#81786e]">
          <a href="/" className="hover:text-[#686158]">
            Ana Sayfa
          </a>

          <span className="mx-3">·</span>

          <a href="/hakkimizda" className="hover:text-[#686158]">
            Hakkımızda
          </a>

          <span className="mx-3">·</span>

          <a href="/bize-ulasin" className="hover:text-[#686158]">
            Bize Ulaşın
          </a>
        </footer>
      </div>
    </main>
  );
}
