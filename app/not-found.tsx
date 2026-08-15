export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f8f6f2] px-6 text-center text-[#403b35]">
      <div className="w-full max-w-xl">
        <p className="text-xs tracking-[0.35em] text-[#9b9288]">
          INUS
        </p>

        <h1 className="mt-8 text-7xl font-light tracking-tight">
          404
        </h1>

        <h2 className="mt-6 text-2xl font-light">
          Rüya burada bitmiş gibi görünüyor.
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#817970]">
          Aradığın sayfayı bulamadık. Ancak rüyanı anlatmak için
          doğru yer hâlâ burada.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="/"
            className="rounded-full border border-[#cfc7bd] px-6 py-3 text-sm transition hover:bg-[#eeeae4]"
          >
            Rüyamı Yorumla
          </a>

          <a
            href="/ruyalar"
            className="rounded-full border border-[#cfc7bd] px-6 py-3 text-sm transition hover:bg-[#eeeae4]"
          >
            Rüyalar
          </a>
        </div>

        <nav className="mt-10 text-xs text-[#9b9288]">
          <a href="/ruyalar/semboller" className="hover:text-[#403b35]">
            Rüya Sembolleri
          </a>

          <span className="mx-3">·</span>

          <a href="/hakkimizda" className="hover:text-[#403b35]">
            Hakkımızda
          </a>
        </nav>
      </div>
    </main>
  )
}
