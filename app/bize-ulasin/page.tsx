export default function BizeUlasin() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#24221f]">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:px-8">
        <a href="/" className="text-lg font-medium tracking-[0.28em]">
          INUS
        </a>

        <article className="mt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#81786e]">
            İLETİŞİM
          </p>

          <h1 className="mt-3 text-4xl font-light">
            Bize Ulaşın
          </h1>

          <div className="mt-8 space-y-6 leading-8 text-[#625c54]">
            <p>
              INUS hakkında sorularınız, geri bildirimleriniz veya teknik
              destek talepleriniz için bizimle iletişime geçebilirsiniz.
            </p>

            <p>
              E-posta:
            </p>

            <a
              href="mailto:support@in-us.app"
              className="inline-block text-[#24221f] underline underline-offset-4"
            >
              support@in-us.app
            </a>
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
        </footer>
      </div>
    </main>
  );
}
