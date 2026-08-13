export default function KullanimKosullari() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#24221f]">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:px-8">
        <a href="/" className="text-lg font-medium tracking-[0.28em]">
          INUS
        </a>

        <article className="mt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#81786e]">
            KULLANIM
          </p>

          <h1 className="mt-3 text-4xl font-light">
            Kullanım Koşulları
          </h1>

          <div className="mt-8 space-y-8 leading-8 text-[#625c54]">

            <section>
              <h2 className="mb-3 text-xl font-medium text-[#24221f]">
                Hizmetin amacı
              </h2>

              <p>
                INUS, kullanıcıların rüyalarını psikolojik ve sembolik bir
                perspektiften değerlendirmelerine yardımcı olan bir rüya
                yorumlama hizmetidir.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-medium text-[#24221f]">
                Yorumların niteliği
              </h2>

              <p>
                INUS tarafından oluşturulan yorumlar bilgilendirme ve kişisel
                düşünme amacı taşır. Yorumlar psikolojik, psikiyatrik veya
                tıbbi teşhis niteliğinde değildir ve profesyonel sağlık
                hizmetlerinin yerine geçmez.
              </p>

              <p className="mt-4">
                Rüya yorumları geleceğe ilişkin kesin tahminler veya
                kehanetler olarak değerlendirilmemelidir.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-medium text-[#24221f]">
                Kullanıcı sorumluluğu
              </h2>

              <p>
                Kullanıcı, hizmeti yürürlükteki yasalara ve bu kullanım
                koşullarına uygun şekilde kullanmayı kabul eder. Hizmetin
                kötüye kullanılması, otomatik isteklerle aşırı yüklenmesi veya
                güvenlik önlemlerinin aşılmaya çalışılması yasaktır.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-medium text-[#24221f]">
                Hizmetin sürekliliği
              </h2>

              <p>
                INUS, hizmetin her zaman kesintisiz veya hatasız çalışacağını
                garanti etmez. Teknik bakım, güvenlik, üçüncü taraf hizmet
                kesintileri veya diğer teknik nedenlerle hizmet geçici olarak
                kullanılamayabilir.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-medium text-[#24221f]">
                İletişim
              </h2>

              <p>
                Kullanım koşulları hakkında sorularınız için bizimle
                iletişime geçebilirsiniz.
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

          <span className="mx-3">·</span>

          <a href="/gizlilik" className="hover:text-[#686158]">
            Gizlilik
          </a>
        </footer>
      </div>
    </main>
  );
}
