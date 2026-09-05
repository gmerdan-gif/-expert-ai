import Link from "next/link";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata = {
  alternates: {
    canonical: "/ruyalar/ruya-nedir",
  },
  title: "Rüya Nedir? | Rüya Deneyimi ve Bilim",
  description:
    "Rüya nedir? Rüya deneyimi nasıl oluşur, REM ve NREM uykusunda rüyalar nasıl farklılaşır ve bilim rüyalar hakkında ne biliyor? Araştırmalara dayalı kapsamlı rehber.",
};

const sources = [
  {
    authors: "Siclari, F. et al. (2017)",
    title: "The neural correlates of dreaming",
    journal: "Nature Neuroscience",
    detail: "PMID 28394322 · DOI 10.1038/nn.4545",
    url: "https://pubmed.ncbi.nlm.nih.gov/28394322/",
  },
  {
    authors: "Scarpelli, S. et al. (2022)",
    title: "What about dreams? State of the art and open questions",
    journal: "Journal of Sleep Research, 31(4), e13609.",
    detail: "PMID 35417930 · PMCID PMC9539486 · DOI 10.1111/jsr.13609",
    url: "https://pubmed.ncbi.nlm.nih.gov/35417930/",
  },
  {
    authors: "Suzuki, H. et al. (2023)",
    title: "What are the neural mechanisms and physiological functions of dreams?",
    journal: "Neuroscience Research",
    detail: "PMID 36572252",
    url: "https://pubmed.ncbi.nlm.nih.gov/36572252/",
  },
  {
    authors: "Fazekas, P. & Nemeth, G. (2018)",
    title: "Dream experiences and the neural correlates of perceptual consciousness and cognitive access",
    journal: "Philosophical Transactions of the Royal Society B",
    detail: "PMID 30061469 · DOI 10.1098/rstb.2017.0356",
    url: "https://pubmed.ncbi.nlm.nih.gov/30061469/",
  },
  {
    authors: "Windt, J. M. & Noreika, V. (2011)",
    title:
      "How to integrate dreaming into a general theory of consciousness",
    journal: "Consciousness and Cognition",
    detail: "PMID 20933438 · DOI 10.1016/j.concog.2010.09.010",
    url: "https://pubmed.ncbi.nlm.nih.gov/20933438/",
  },
  {
    authors: "Tononi, G., Boly, M. & Cirelli, C. (2024)",
    title: "Consciousness and sleep",
    journal: "Neuron, 112(10), 1568–1594.",
    detail: "PMID 38697113 · DOI 10.1016/j.neuron.2024.04.011",
    url: "https://pubmed.ncbi.nlm.nih.gov/38697113/",
  },
  {
    authors: "Stucky, B. (2025)",
    title:
      "We are the Sensors of Consciousness! A Review and Analysis on How Awakenings During Sleep Influence Dream Recall",
    journal: "Nature and Science of Sleep, 17, 709–729.",
    detail: "PMID 40330584 · DOI 10.2147/NSS.S506461",
    url: "https://pubmed.ncbi.nlm.nih.gov/40330584/",
  },
];

const faqs = [
  {
    question: "Herkes rüya görür mü?",
    answer:
      "İnsanların büyük bölümünde uyku sırasında rüya veya başka türden bilinçli deneyimler raporlanır. Ancak herkes rüyalarını aynı sıklıkta hatırlamaz. Bu nedenle “rüya görmemek” ile “rüyayı hatırlamamak” birbirinden farklıdır.",
  },
  {
    question: "Rüyalar sadece REM uykusunda mı görülür?",
    answer:
      "Hayır. Rüya deneyimleri REM uykusunda sık ve genellikle daha canlı biçimde raporlansa da NREM uykusunda da rüyalar ve rüya benzeri deneyimler görülebilir. REM ve NREM rüyaları bazı özellikler açısından farklılaşabilir.",
  },
  {
    question: "Rüyaların kesin olarak bir amacı var mı?",
    answer:
      "Henüz kesin olarak bilmiyoruz. Bellek, duygusal süreçler ve diğer bilişsel mekanizmalarla ilişkili çeşitli teoriler bulunuyor; ancak rüyanın tek ve evrensel bir işlevi olduğu konusunda bilimsel bir uzlaşı yok.",
  },
  {
    question: "Rüyalar gerçek hayattaki düşüncelerimizi yansıtır mı?",
    answer:
      "Araştırmalar uyanık yaşam ile rüya içeriği arasında belirli süreklilikler bulunduğunu gösteriyor. Ancak rüyaların gündüz yaşananların birebir kopyası olduğunu söylemek doğru olmaz. Kişisel deneyimler rüyalarda değişmiş, birleşmiş veya sembolik biçimlerde ortaya çıkabilir.",
  },
  {
    question: "Rüyaların herkes için aynı anlamı var mı?",
    answer:
      "Bunu destekleyen güvenilir bir bilimsel sistem bulunmuyor. Aynı kişi, nesne veya olay farklı insanlar için farklı çağrışımlara sahip olabilir. Bu nedenle kişisel bağlam, bireysel rüya analizinde önemlidir.",
  },
];

export default function DreamWhatIsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rüya Nedir? Rüya Deneyimi ve Bilim",
    description:
      "Rüya deneyimi, REM ve NREM uykusu ve modern rüya araştırmaları hakkında kapsamlı bir rehber.",
    author: {
      "@type": "Organization",
      name: "INUS",
    },
    publisher: {
      "@type": "Organization",
      name: "INUS",
    },
  };

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#24221f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* HEADER */}
        <header className="flex items-center justify-between py-6">
          <Link
            href="/"
            className="text-lg font-medium tracking-[0.28em] transition hover:opacity-70"
          >
            INUS
          </Link>

          <div className="flex items-center gap-7 text-sm text-[#625c54]">
            <Link
              href="/ruyalar"
              className="transition hover:text-[#24221f]"
            >
              Rüya Kütüphanesi
            </Link>

            <Link
              href="/ruyalar/semboller"
              className="hidden transition hover:text-[#24221f] sm:inline"
            >
              Rüya Sembolleri
            </Link>
          </div>
        </header>

        {/* BREADCRUMB */}
        <nav
          className="border-t border-[#d9d2c9] pt-6 text-[11px] text-[#91887e]"
          aria-label="Breadcrumb"
        >
          <Link
            href="/ruyalar"
            className="transition hover:text-[#24221f]"
          >
            Rüya Kütüphanesi
          </Link>
          <span className="mx-2">/</span>
          <span>Rüya nedir?</span>
        </nav>

        {/* HERO */}
        <header className="pb-14 pt-12 sm:pb-20 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                RÜYA ARAŞTIRMALARI
              </p>

              <h1 className="max-w-xl text-[52px] font-light leading-[0.98] tracking-[-0.045em] sm:text-[68px] md:text-[78px]">
                Rüya
                <br />
                nedir?
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-2xl text-[17px] font-light leading-8 text-[#625c54]">
                Rüya, uyku sırasında ortaya çıkan görsel imgeler, düşünceler,
                duygular, kişiler, mekânlar ve olay örgülerinden oluşabilen bir
                bilinçli deneyim biçimidir.
              </p>

              <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#81786e]">
                Ancak rüyayı yalnızca “uyurken görülen bir hikâye” olarak
                tanımlamak yetersiz kalır. Modern araştırmalar, rüya deneyiminin
                farklı uyku evrelerinde ortaya çıkabildiğini ve bilinç
                araştırmaları açısından önemli bir pencere sunduğunu gösteriyor.
              </p>
            </div>
          </div>
        </header>

        {/* ARTICLE */}
        <article className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <div className="divide-y divide-[#d9d2c9] text-[15px] leading-8 text-[#454039] [&>section]:py-12 [&>section:first-child]:pt-0 [&>section:last-child]:pb-0 lg:[&>section]:grid lg:[&>section]:grid-cols-[0.9fr_1.1fr] lg:[&>section]:gap-x-14 lg:[&>section>h2]:col-start-1 lg:[&>section>h2]:row-start-1 lg:[&>section>:not(h2)]:col-start-2">
            {/* 1 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Rüya deneyimi nedir?
              </h2>

              <p className="mt-5">
                Rüyalar, uyku sırasında yaşanan zihinsel deneyimlerdir. Bu
                deneyimlerde görüntüler, sesler, düşünceler, duygular,
                bedenle ilgili hisler ve sosyal etkileşimler bir araya
                gelebilir.
              </p>

              <p className="mt-4">
                Bazı rüyalar günlük hayata oldukça benzer. Tanıdığımız
                insanlarla konuşabilir, gerçek bir mekânda dolaşabilir veya
                gün içinde yaşadığımız bir olayın farklı bir versiyonunu
                görebiliriz. Bazı rüyalar ise zamanın, mekânın ve fiziksel
                kuralların değiştiği oldukça sıra dışı deneyimlerdir.
              </p>

              <p className="mt-4">
                Bu nedenle bilimsel açıdan rüyayı yalnızca içeriği üzerinden
                tanımlamak yerine, uyku sırasında ortaya çıkan bir deneyim
                biçimi olarak ele almak daha kullanışlıdır.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-light tracking-[-0.025em] sm:text-3xl">
                Rüyalar gerçekten uyurken mi görülür?
              </h2>

              <p className="mt-5">
                Evet. Rüyaların yalnızca uyanmaya yakın anda beynin ürettiği
                anılardan ibaret olduğu düşüncesi günümüzde yeterli kabul
                edilmiyor. Araştırmacılar insanları uykunun farklı
                aşamalarında uyandırarak o anda yaşadıkları deneyimleri
                kaydettiğinde, uykunun çeşitli evrelerinde zihinsel
                deneyimlerin ortaya çıkabildiğini görüyor.
              </p>

              <p className="mt-4">
                Bu deneyimler her zaman ayrıntılı bir “rüya hikâyesi”
                şeklinde olmayabilir. Bazen kısa bir görüntü, düşünce,
                duygu, beden hissi veya daha soyut bir deneyim raporlanabilir.
              </p>

              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Önemli ayrım:</strong> “Rüya” ile “rüya
                  hatırlama” aynı şey değildir. Bir kişi sabah hiçbir şey
                  hatırlamasa bile gece boyunca zihinsel deneyimler yaşamış
                  olabilir.
                </p>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-light tracking-[-0.025em] sm:text-3xl">
                REM uykusu ile rüyalar arasındaki ilişki
              </h2>

              <p className="mt-5">
                REM, “rapid eye movement” yani hızlı göz hareketleri anlamına
                gelir. Bu uyku evresinde beyin aktivitesi uyanıklığa bazı
                açılardan yaklaşırken vücutta belirgin fizyolojik değişiklikler
                meydana gelir.
              </p>

              <p className="mt-4">
                Rüya araştırmalarının uzun süre REM uykusuyla özdeşleştirilmiş
                olmasının önemli bir nedeni, REM sırasında uyandırılan
                insanların sık ve canlı rüya raporları vermesidir.
              </p>

              <p className="mt-4">
                REM rüyaları çoğu araştırmada daha uzun, canlı, görsel,
                duygusal ve hikâyesel olarak tanımlanırken, bu durum
                “yalnızca REM'de rüya görülür” anlamına gelmez.
              </p>

              <p className="mt-4">
                Güncel çalışmalar REM ve NREM arasındaki klasik ayrımın rüya
                deneyimini açıklamak için tek başına yeterli olmadığını
                gösteriyor.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-light tracking-[-0.025em] sm:text-3xl">
                NREM uykusunda da rüya görülür mü?
              </h2>

              <p className="mt-5">
                Evet. NREM uykusundan uyandırılan kişiler de rüya ve başka
                türden zihinsel deneyimler raporlayabilir.
              </p>

              <p className="mt-4">
                Ancak NREM rüyaları ortalama olarak REM rüyalarından farklı
                özellikler gösterebilir. Daha kısa, düşünce benzeri veya
                parçalı deneyimler raporlanabildiği gibi, bazı NREM rüyaları
                oldukça canlı ve ayrıntılı da olabilir.
              </p>

              <p className="mt-4">
                Bu nedenle günümüzde araştırmacılar “REM mi, NREM mi?” sorusu
                kadar, belirli bir anda beynin hangi bölgelerinin ve hangi
                ağlarının deneyimin ortaya çıkmasıyla ilişkili olduğunu da
                araştırıyor.
              </p>

              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Araştırmaların önemli sonucu:</strong> Rüya
                  deneyiminin varlığı ile belirli bir uyku evresini birebir
                  eşleştirmek mümkün değildir. Rüya, uyku boyunca değişen
                  bilinç durumlarının bir parçası olarak ele alınmaktadır.
                </p>
              </div>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-light tracking-[-0.025em] sm:text-3xl">
                Rüya görmek ile bilinç arasındaki ilişki
              </h2>

              <p className="mt-5">
                Rüyalar, bilinç araştırmaları açısından özellikle ilginçtir.
                Çünkü kişi dış dünyayla normal biçimde etkileşim kurmazken
                içeride oldukça karmaşık bir deneyim yaşayabilir.
              </p>

              <p className="mt-4">
                Bir rüyada kişi bir mekânı görebilir, bir insanla konuşabilir,
                korkabilir, karar verebilir veya fiziksel olarak hareket
                ettiğini hissedebilir. Bunların hiçbiri dış dünyada gerçekten
                gerçekleşmiyor olabilir.
              </p>

              <p className="mt-4">
                Bu durum araştırmacılara şu temel soruyu inceleme fırsatı
                verir: Beyin dış dünyadan gelen duyusal bilgi büyük ölçüde
                azalmışken nasıl bir deneyim dünyası oluşturabiliyor?
              </p>

              <p className="mt-4">
                Rüya araştırmaları bu nedenle yalnızca uyku araştırmaları için
                değil, bilinç ve öznel deneyimin nasıl oluştuğunu anlamak için
                de önemlidir.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-light tracking-[-0.025em] sm:text-3xl">
                Rüyaların neden görüldüğünü biliyor muyuz?
              </h2>

              <p className="mt-5">
                Henüz kesin bir cevabımız yok.
              </p>

              <p className="mt-4">
                Araştırmacılar rüyaları bellek işleme, duygusal süreçler,
                uyanık yaşamla süreklilik, bilişsel işleme ve diğer
                nörofizyolojik mekanizmalarla ilişkilendiren çeşitli teoriler
                üzerinde çalışıyor.
              </p>

              <p className="mt-4">
                Bazı bulgular rüya içeriğinin bellek ve duygularla ilişkili
                olabileceğini düşündürüyor. Ancak bu ilişkilerden yola çıkarak
                rüyaların tek bir biyolojik “amacı” olduğunu söylemek için
                yeterli kanıt bulunmuyor.
              </p>

              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Bilimsel olarak doğru ifade:</strong> “Rüyaların
                  amacı kesin olarak budur” demek yerine, “şu süreçlerle
                  ilişkili olabileceklerine dair kanıtlar bulunmaktadır”
                  demek daha doğrudur.
                </p>
              </div>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-light tracking-[-0.025em] sm:text-3xl">
                Neden bazı rüyaları hatırlıyoruz?
              </h2>

              <p className="mt-5">
                Rüyanın oluşması ile rüyanın hatırlanması arasında önemli bir
                fark vardır. Sabah uyandığımızda aklımızda kalan rüya, gece
                boyunca yaşadığımız tüm zihinsel deneyimlerin yalnızca bir
                bölümü olabilir.
              </p>

              <p className="mt-4">
                Rüya hatırlama; uyanma zamanı, uyanma biçimi, bireysel
                farklılıklar, dikkat ve rüyanın ne kadar güçlü bir iz
                bıraktığı gibi çeşitli faktörlerden etkilenebilir.
              </p>

              <p className="mt-4">
                2025 yılında yayımlanan geniş bir derleme, 2000–2024 arasında
                gerçekleştirilen 69 uyanma çalışmasını inceleyerek rüya
                hatırlamanın yalnızca rüyanın içeriğiyle değil, uyanma yöntemi
                ve bireysel özelliklerle de ilişkili olabileceğini vurguladı.
                
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-light tracking-[-0.025em] sm:text-3xl">
                Rüyaların tek bir anlamı var mı?
              </h2>

              <p className="mt-5">
                Bilimsel araştırmalar, her rüya sembolünün herkes için
                değişmez bir anlam taşıdığı bir sistem ortaya koymuş değil.
              </p>

              <p className="mt-4">
                Örneğin “su her zaman duyguları temsil eder” veya “yılan her
                zaman düşmandır” gibi ifadeler bilimsel sonuçlar değildir.
                Aynı nesne farklı kişiler için tamamen farklı kişisel
                çağrışımlara sahip olabilir.
              </p>

              <p className="mt-4">
                Bu nedenle bireysel bir rüyayı anlamaya çalışırken rüyanın
                tamamı, kişinin yaşamındaki olaylar, rüya sırasında yaşanan
                duygular ve kişinin sembollerle kurduğu kişisel ilişkiler
                önem kazanır.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-light tracking-[-0.025em] sm:text-3xl">
                Bilim neyi biliyor, neyi henüz bilmiyor?
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-[#eee8df] p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a8177]">
                    DAHA İYİ BİLDİKLERİMİZ
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>• Rüya deneyimleri uyku sırasında ortaya çıkabilir.</li>
                    <li>• REM ve NREM'de rüya deneyimleri görülebilir.</li>
                    <li>• Rüya içeriği uyanık yaşamla ilişkili olabilir.</li>
                    <li>• Rüya hatırlama kişiden kişiye değişir.</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-[#eee8df] p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a8177]">
                    HÂLÂ AÇIK SORULAR
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>• Rüyaların temel işlevi nedir?</li>
                    <li>• Neden bazı rüyalar çok canlıdır?</li>
                    <li>• Rüya içeriği nasıl oluşur?</li>
                    <li>• Bilinç rüyada nasıl ortaya çıkar?</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-light tracking-[-0.025em] sm:text-3xl">
                INUS rüyalara nasıl yaklaşıyor?
              </h2>

              <p className="mt-5">
                INUS, bilimsel araştırmalar ile bireysel rüya yorumunu
                birbirinden ayırır. Bilimsel çalışmalar rüyalar hakkında genel
                bilgiler sağlayabilir; ancak tek bir kişinin belirli bir
                rüyasının nedenini otomatik olarak açıklamaz.
              </p>

              <p className="mt-4">
                Bu nedenle INUS hazır sembol sözlüklerinden kesin sonuçlar
                üretmek yerine rüyanın kendi bağlamına bakar: olaylar,
                karakterler, mekânlar, semboller, karşıtlıklar ve özellikle
                rüyanın duygusal tonu birlikte değerlendirilir.
              </p>

              <p className="mt-4">
                Ortaya çıkan yorum bir teşhis, gelecek tahmini veya bilimsel
                gerçek olarak sunulmaz. Amaç, kişinin kendi rüyasına farklı
                psikolojik açılardan bakabilmesini sağlamaktır.
              </p>

              <blockquote className="mt-8 border-l border-[#9b9186] py-1 pl-6 text-xl font-light leading-8 tracking-[-0.015em] text-[#625c54]">
                “Bir rüyanın anlamını bulmak kadar, o rüyanın neden tam da
                şimdi ortaya çıktığını sormak da önemlidir.”
              </blockquote>
            </section>
          </div>
        </article>

        {/* SOURCES */}
        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            KAYNAKLAR
          </p>

          <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
            Araştırma ve literatür.
          </h2>

          <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#6f675e]">
            Bu sayfadaki bilimsel açıklamalar, hakemli dergilerde yayımlanmış
            derlemeler ve deneysel çalışmalar temel alınarak hazırlanmıştır.
            Kaynakların tamamı bağımsız olarak incelenebilir.
          </p>

          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {sources.map((source) => (
              <article
                key={source.title}
                className="border-t border-[#d9d2c9] pt-5"
              >
                <p className="text-sm font-medium text-[#454039]">
                  {source.authors}
                </p>

                <p className="mt-2 text-[13px] leading-6 text-[#625c54]">
                  <em>{source.title}</em>
                </p>

                <p className="mt-2 text-xs leading-6 text-[#91887e]">
                  {source.journal}
                </p>

                <p className="mt-1 text-[10px] tracking-wide text-[#aaa198]">
                  {source.detail}
                </p>

                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs text-[#625c54] underline decoration-[#bdb4aa] underline-offset-4 transition hover:text-[#24221f]"
                >
                  PubMed kaydını görüntüle →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            SIK SORULAN SORULAR
          </p>

          <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
            Rüya hakkında sık sorulanlar.
          </h2>

          <div className="mt-10 overflow-hidden rounded-xl border border-[#d9d1c7] bg-[#faf8f4]">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="border-b border-[#ded6cc] p-6 last:border-b-0 sm:p-7"
              >
                <h3 className="text-lg font-light tracking-[-0.015em]">
                  {faq.question}
                </h3>

                <p className="mt-3 max-w-4xl text-[14px] leading-7 text-[#6f675e]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* DREAM BRIDGE */}
        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                KENDİ RÜYANA DÖN
              </p>

              <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
                Şimdi kendi rüyana bak.
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#625c54]">
                Rüyanı kendi kelimelerinle anlat. INUS, rüyanın olaylarını,
                sembollerini ve duygularını birlikte değerlendirerek farklı
                psikolojik bakış açıları sunar.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-8 rounded-full bg-[#292621] px-7 py-3.5 text-sm text-white transition hover:bg-[#403b35]"
            >
              Rüyanı anlat
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}