import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/ruyalar/ruyalar-ve-bellek",
  },
  title: "Rüyalar ve Bellek | Uyku, Öğrenme ve Anılar",
  description:
    "Rüyalar ve bellek arasındaki ilişki nedir? Uyku sırasında bellek konsolidasyonu, yeni öğrenilenlerin rüyalara girmesi ve güncel araştırmaların ne söylediğini inceleyin.",
};

const sources = [
  {
    authors: "Hudachek, L. & Wamsley, E. J. (2023)",
    title:
      "A meta-analysis of the relation between dream content and memory consolidation",
    journal: "Sleep, 46(12), zsad111.",
    detail: "PMID 37058584 · DOI 10.1093/sleep/zsad111",
    url: "https://pubmed.ncbi.nlm.nih.gov/37058584/",
  },
  {
    authors: "Bloxham, A. & Horton, C. L. (2024)",
    title:
      "Enhancing and advancing the understanding and study of dreaming and memory consolidation",
    journal: "Consciousness and Cognition, 123, 103719.",
    detail: "PMID 38941924 · DOI 10.1016/j.concog.2024.103719",
    url: "https://pubmed.ncbi.nlm.nih.gov/38941924/",
  },
  {
    authors: "Picard-Deland, C. et al. (2023)",
    title:
      "The memory sources of dreams: serial awakenings across sleep stages and time of night",
    journal: "Sleep, 46(4), zsac292.",
    detail:
      "PMID 36462190 · PMCID PMC10091095 · DOI 10.1093/sleep/zsac292",
    url: "https://pubmed.ncbi.nlm.nih.gov/36462190/",
  },
  {
    authors: "Wamsley, E. J. & Stickgold, R. (2011)",
    title: "Memory, Sleep and Dreaming: Experiencing Consolidation",
    journal: "Sleep Medicine Clinics, 6(1), 97–108.",
    detail:
      "PMID 21516215 · PMCID PMC3079906 · DOI 10.1016/j.jsmc.2010.12.008",
    url: "https://pubmed.ncbi.nlm.nih.gov/21516215/",
  },
  {
    authors: "Wamsley, E. J. et al. (2010)",
    title:
      "Dreaming of a Learning Task Is Associated with Enhanced Sleep-Dependent Memory Consolidation",
    journal: "Current Biology, 20(9), 850–855.",
    detail:
      "PMID 20417102 · PMCID PMC2869395 · DOI 10.1016/j.cub.2010.03.027",
    url: "https://pubmed.ncbi.nlm.nih.gov/20417102/",
  },
  {
    authors: "Wamsley, E. J. & Stickgold, R. (2019)",
    title:
      "Dreaming of a learning task is associated with enhanced memory consolidation: Replication in an overnight sleep study",
    journal: "Journal of Sleep Research, 28(1), e12749.",
    detail:
      "PMID 30091247 · PMCID PMC6338510 · DOI 10.1111/jsr.12749",
    url: "https://pubmed.ncbi.nlm.nih.gov/30091247/",
  },
  {
    authors: "Tamminen, J. et al. (2010)",
    title:
      "Sleep spindle activity is associated with the integration of new memories and existing knowledge",
    journal: "Journal of Neuroscience, 30(43), 14356–14360.",
    detail:
      "PMID 20980591 · PMCID PMC2989532 · DOI 10.1523/JNEUROSCI.3028-10.2010",
    url: "https://pubmed.ncbi.nlm.nih.gov/20980591/",
  },
];

const faqs = [
  {
    question: "Rüyalar gerçekten hafızayı güçlendirir mi?",
    answer:
      "Öğrenmeyle ilişkili rüya içeriği ile daha iyi uyku sonrası bellek performansı arasında ilişki bildiren çalışmalar vardır. Ancak bu, rüya deneyiminin kendisinin belleği doğrudan güçlendirdiğini kanıtlamaz; ikisi de uyku sırasında gerçekleşen daha temel bellek süreçlerinin sonucu olabilir.",
  },
  {
    question: "Yeni öğrendiğimiz şeyler rüyalarımıza girebilir mi?",
    answer:
      "Evet. Deneysel çalışmalar, uyku öncesinde öğrenilen görev veya deneyimlerin bazı katılımcıların sonraki rüya raporlarında ortaya çıkabildiğini gösteriyor. Fakat yeni öğrenilen her şey rüyaya girmez ve rüyadaki temsil çoğu zaman birebir tekrar değildir.",
  },
  {
    question: "Rüyamda eski bir anıyı görmem beynimin onu işlediği anlamına gelir mi?",
    answer:
      "Böyle bir bağlantı mümkün olsa da tek bir rüyadan bunu kesin olarak çıkaramayız. Rüyalar yakın ve uzak anı kaynaklarını, anlamsal bilgileri ve güncel yaşantıları aynı anlatıda birleştirebilir.",
  },
  {
    question: "REM uykusu mu, NREM uykusu mu bellek için daha önemli?",
    answer:
      "Bellek konsolidasyonu tek bir uyku evresine indirgenemez. Farklı bellek türleri ve farklı işlemler REM ve NREM uykusunun farklı özellikleriyle ilişkili olabilir. Ayrıca rüya ile bellek arasındaki ilişki de yalnızca REM uykusuna özgü görünmüyor.",
  },
  {
    question: "Rüyada bir öğrenme görevini görmek daha iyi öğrenmek anlamına gelir mi?",
    answer:
      "Bazı deneylerde görevle ilişkili rüya içeriği daha iyi sonraki performansla birlikte görülmüştür. Araştırmacılar bunun rüyanın başarıya neden olduğunu değil, uyku sırasında gerçekleşen bellek yeniden etkinleşmesinin rüya içeriğine yansıyabileceğini düşündürdüğünü vurgular.",
  },
];

export default function DreamsMemoryPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rüyalar ve Bellek: Uyku, Öğrenme ve Anılar",
    description:
      "Rüyalar ile bellek konsolidasyonu arasındaki ilişkiyi, öğrenme deneyleri ve güncel araştırmalar üzerinden açıklayan kapsamlı rehber.",
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
            <Link href="/ruyalar" className="transition hover:text-[#24221f]">
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
          <Link href="/ruyalar" className="transition hover:text-[#24221f]">
            Rüya Kütüphanesi
          </Link>
          <span className="mx-2">/</span>
          <span>Rüyalar ve bellek</span>
        </nav>

        {/* HERO */}
        <header className="pb-14 pt-12 sm:pb-20 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                RÜYA VE BELLEK
              </p>

              <h1 className="max-w-xl text-[52px] font-light leading-[0.98] tracking-[-0.045em] sm:text-[68px] md:text-[78px]">
                Rüyalar ve bellek
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-2xl text-[17px] font-light leading-8 text-[#625c54]">
                Uyku, yeni anıların yalnızca saklandığı pasif bir ara değildir.
                Bellek izleri yeniden etkinleşebilir, güçlenebilir ve mevcut
                bilgilerle bütünleşebilir. Rüyalar da kimi zaman bu işlemenin
                öznel bir izini taşıyor olabilir.
              </p>

              <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#81786e]">
                Fakat önemli ayrım şu: Uyku belleği yeniden düzenler; rüyaların
                bu sürecin nedeni olduğu ise gösterilmiş değildir.
              </p>
            </div>
          </div>
        </header>

        {/* KEY POINT */}
        <section className="border-t border-[#d9d2c9] py-10 sm:py-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            KISA CEVAP
          </p>

          <h2 className="mt-4 max-w-3xl text-2xl font-light leading-tight tracking-[-0.025em]">
            Rüyalar belleğin kendisi değil; bazı durumlarda uyku sırasında
            çalışan bellek süreçlerine açılan bir pencere olabilir.
          </h2>

          <p className="mt-4 max-w-3xl text-[14px] leading-7 text-[#625c54]">
            Yeni öğrenilen bir görev rüyaya girebilir ve bu tür rüyalar daha iyi
            sonraki performansla ilişkili olabilir. Ama “rüyayı gördüğüm için
            daha iyi öğrendim” demek için elimizde yeterli nedensel kanıt yok.
          </p>
        </section>

        {/* ARTICLE */}
        <article className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <div className="divide-y divide-[#d9d2c9] text-[15px] leading-8 text-[#454039] [&>section]:py-12 [&>section:first-child]:pt-0 [&>section:last-child]:pb-0 lg:[&>section]:grid lg:[&>section]:grid-cols-[0.9fr_1.1fr] lg:[&>section]:gap-x-14 lg:[&>section>h2]:col-start-1 lg:[&>section>h2]:row-start-1 lg:[&>section>:not(h2)]:col-start-2">
            {/* 1 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Uyku neden bellek için önemli?
              </h2>

              <p className="mt-5">
                Yeni bir bilgi öğrendiğimizde ortaya çıkan bellek izi hemen
                değişmez ve kalıcı bir kayıt hâline gelmez. Sonraki saatlerde
                ve özellikle uyku sırasında bu izlerin yeniden etkinleşmesi,
                güçlenmesi ve mevcut bilgi ağlarıyla bütünleşmesi gibi süreçler
                gerçekleşebilir.
              </p>

              <p className="mt-4">
                Bu dönüşüm genel olarak <strong>bellek konsolidasyonu</strong>{" "}
                başlığı altında incelenir. Konsolidasyon tek bir mekanizma
                değildir; farklı bellek türleri farklı sinirsel süreçlerden
                yararlanabilir.
              </p>

              <p className="mt-4">
                Tamminen ve arkadaşlarının 2010 çalışması buna iyi bir örnek:
                yeni öğrenilen sözcüklerin mevcut sözcük bilgisiyle
                bütünleşmesi uyku sonrasında belirginleşti ve gece içindeki
                uyku iğciği etkinliği bu bütünleşmeyle ilişkili bulundu.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Rüya ile bellek arasındaki kritik ayrım
              </h2>

              <p className="mt-5">
                Uyku sırasında bellek işleniyor olabilir ve aynı gece bir rüya
                görülebilir. Bu iki olayın birlikte gerçekleşmesi, rüyanın
                belleği işleyen mekanizma olduğu anlamına gelmez.
              </p>

              <p className="mt-4">
                Wamsley ve Stickgold’un 2011 derlemesi, yeni kodlanan anıların
                uyuyan beyinde yeniden etkinleştiğini ve bu süreçlerin rüya
                içeriğine yansıyabileceğini tartışır. Bu yaklaşımda rüya,
                konsolidasyonun kendisinden çok, altta çalışan bellek
                etkinliğinin deneyimlenen yüzü olabilir.
              </p>

              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Temel ayrım:</strong> “Bu anı rüyama girdi” ile “Bu
                  anı rüya sayesinde pekişti” aynı iddia değildir.
                </p>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Yeni öğrenilen şeyler rüyaya nasıl girebilir?
              </h2>

              <p className="mt-5">
                Uyku öncesinde yaşanan veya öğrenilen deneyimlerin parçaları
                sonraki rüyalarda ortaya çıkabilir. Ancak rüya bunları çoğu
                zaman birebir yeniden oynatmaz.
              </p>

              <p className="mt-4">
                Yeni bir mekân başka bir mekânla birleşebilir, öğrenilen bir
                görev farklı bir hikâyenin içine yerleşebilir veya yalnızca
                deneyimin belirli bir ayrıntısı rüyada kalabilir.
              </p>

              <p className="mt-4">
                Bu nedenle rüyalardaki bellek izlerini “video kaydı” gibi değil,
                seçilmiş ve yeniden düzenlenmiş malzeme gibi düşünmek daha
                güvenlidir.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                2023 meta-analizi ne buldu?
              </h2>

              <p className="mt-5">
                Hudachek ve Wamsley’nin 2023 meta-analizi, uyku öncesinde bir
                öğrenme görevi kullanan 16 çalışmadaki toplam 45 etkiyi
                birleştirdi.
              </p>

              <p className="mt-4">
                Görevle ilişkili rüya içeriği bildiren kişilerin uyku sonrası
                bellek performansının genel olarak daha iyi olduğu bulundu.
                Birleştirilmiş etki orta büyüklükteydi.
              </p>

              <p className="mt-4">
                Polisomnografi kullanan çalışmaların alt analizinde ilişki NREM
                rüyalarında anlamlıydı; REM rüyalarında ise anlamlı değildi.
                Bu sonuç, rüya-bellek bağını yalnızca REM uykusuna bağlayan
                basit açıklamalara karşı da önemli bir uyarı.
              </p>

              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Ne kanıtlıyor?</strong> Öğrenmeyle ilişkili rüya
                  içeriği ile sonraki bellek performansı arasında güvenilir bir
                  ilişki olabileceğini. <strong>Ne kanıtlamıyor?</strong>{" "}
                  Rüyanın kendisinin daha iyi belleğe neden olduğunu.
                </p>
              </div>
            </section>

            {/* 5 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Sanal labirent deneyleri neden önemli?
              </h2>

              <p className="mt-5">
                Wamsley ve arkadaşlarının 2010 çalışmasında katılımcılar sanal
                bir labirentte gezinmeyi öğrendi. Ardından bir grup kısa bir
                uyku uyudu ve rüya raporları toplandı.
              </p>

              <p className="mt-4">
                Öğrenme göreviyle ilişkili rüya içeriği bildiren uyuyan
                katılımcılar, daha sonraki labirent testinde daha büyük
                performans artışı gösterdi. Uyanıkken görevi düşünmek aynı
                ilişkiyi göstermedi.
              </p>

              <p className="mt-4">
                Araştırmacılar özellikle rüyanın performans artışına neden
                olduğunu iddia etmedi. Bunun yerine hem görevle ilişkili rüya
                içeriğinin hem de gelişmiş performansın, uyku sırasında çalışan
                ortak bir bellek yeniden etkinleşmesi ve konsolidasyon
                sürecinden kaynaklanabileceğini önerdiler.
              </p>

              <p className="mt-4">
                Daha sonraki gece uykusu çalışması da görevle ilişkili rüya
                içeriği ile ertesi sabahki performans artışı arasındaki bu
                ilişkiyi yeniden gösterdi.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Rüyalar anıları birebir tekrar mı eder?
              </h2>

              <p className="mt-5">
                Genellikle hayır. Uyku sırasında bellek yeniden etkinleşmesi,
                rüyada uyanık deneyimin eksiksiz ve kronolojik bir tekrarına
                dönüşmek zorunda değildir.
              </p>

              <p className="mt-4">
                Wamsley ve Stickgold’un çalışmalarında da rüya içeriğinin yakın
                deneyimlerin doğrudan kopyası olmaktan çok parçalı ve
                dönüştürülmüş biçimlerde ortaya çıkabildiği vurgulanır.
              </p>

              <p className="mt-4">
                Bu özellik, rüyalarda neden farklı zamanlardan insanların,
                mekânların ve olayların aynı anlatı içinde birleşebildiğini
                açıklamaya yardımcı olabilir.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Gece ilerledikçe anı kaynakları değişiyor mu?
              </h2>

              <p className="mt-5">
                Picard-Deland ve arkadaşlarının 2023 çalışması bu soruyu
                doğrudan inceledi. Yirmi katılımcı bir gece laboratuvarda
                yaklaşık 12 kez uyandırıldı ve farklı uyku evrelerinden rüya
                raporları toplandı.
              </p>

              <p className="mt-4">
                Yakın zamanda yaşanan olaylardan gelen anı kaynakları N1 ve REM
                rüyalarında diğer evrelere göre daha sık bulundu.
              </p>

              <p className="mt-4">
                Daha dikkat çekici olarak, gece ilerledikçe rüyalardaki yakın
                anıların göreli oranı azaldı; bir haftadan daha eski anıların
                göreli oranı arttı. Bu değişim uyku evresinden bağımsız olarak
                görüldü.
              </p>

              <p className="mt-4">
                Bu sonuçlar rüya malzemesinin gece boyunca sabit bir havuzdan
                çekilmediğini, zaman içinde farklı bellek kaynaklarının ağırlık
                kazanabildiğini düşündürüyor.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                REM mi, NREM mi?
              </h2>

              <p className="mt-5">
                Bellek konsolidasyonunu tek bir uyku evresine bağlamak doğru
                değil. NREM uykusundaki yavaş dalgalar, uyku iğcikleri ve bellek
                yeniden etkinleşmesi gibi süreçler uzun süredir araştırılıyor;
                REM uykusu da özellikle duygusal ve ilişkisel bellek
                bağlamlarında inceleniyor.
              </p>

              <p className="mt-4">
                Rüya-bellek ilişkisi açısından da tek bir evreye indirgeme
                sorunlu. 2023 meta-analizinin NREM alt bulgusu ilginç olsa da,
                mevcut çalışmaların sayısı ve yöntemsel çeşitliliği nedeniyle
                bunu “NREM rüyaları belleği güçlendirir” şeklinde okumamak
                gerekir.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Eski ve yeni anılar neden birleşir?
              </h2>

              <p className="mt-5">
                Bellek yalnızca bilgiyi korumakla kalmaz; yeni bilgiyi mevcut
                bilgiyle ilişkilendirerek daha kullanılabilir hâle de getirir.
                Bu nedenle uyku araştırmalarında yalnızca “hatırlama” değil,
                entegrasyon da önemlidir.
              </p>

              <p className="mt-4">
                Tamminen ve arkadaşlarının sözcük öğrenme deneyinde yeni
                sözcüklerin mevcut zihinsel sözlüğe entegrasyonu uyku
                sonrasında belirginleşti ve bu bütünleşme uyku iğciği
                etkinliğiyle ilişkiliydi.
              </p>

              <p className="mt-4">
                Rüyalardaki eski-yeni karışımları bu tür süreçlerin doğrudan
                kanıtı değildir; ama uyuyan beynin yeni malzemeyi mevcut bilgi
                ağlarından tamamen ayrı tutmadığı fikriyle uyumludur.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Rüyaya giren anı daha önemli midir?
              </h2>

              <p className="mt-5">
                Araştırmalar, rüyaya giren her anının diğerlerinden daha önemli
                veya daha kalıcı olduğunu göstermez.
              </p>

              <p className="mt-4">
                Bir anının rüya raporunda bulunması; yakınlık, duygusal önem,
                son dönemde yeniden düşünülmüş olması veya uyku sırasında
                yeniden etkinleşen ağlarla ilişkisi gibi birçok etkene bağlı
                olabilir.
              </p>

              <p className="mt-4">
                Üstelik hatırlanmayan rüyaları göremediğimiz için, hangi bellek
                öğelerinin gerçekten rüya deneyimine girdiğini eksiksiz
                bilmiyoruz.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Rüya hatırlama araştırmayı neden zorlaştırıyor?
              </h2>

              <p className="mt-5">
                Rüya araştırmacısı çoğu zaman rüyanın kendisine değil, kişinin
                uyandıktan sonra hatırlayıp anlattığı rapora ulaşır.
              </p>

              <p className="mt-4">
                Bu yüzden “rüyada görülmedi” ile “görüldü ama hatırlanmadı”
                arasında her zaman kesin ayrım yapılamaz. Laboratuvarda sık
                uyandırma yöntemlerinin kullanılmasının nedenlerinden biri de
                bu kaybı azaltmaktır.
              </p>

              <p className="mt-4">
                Bloxham ve Horton’un 2024 değerlendirmesi de rüya-bellek
                araştırmalarındaki yöntemsel farklılıkların sonuçların
                karşılaştırılmasını zorlaştırdığını ve daha tutarlı deneysel
                yaklaşımlara ihtiyaç olduğunu vurguluyor.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                INUS rüyalar ve belleğe nasıl yaklaşıyor?
              </h2>

              <p className="mt-5">
                INUS, rüyada görülen her kişi veya mekânı otomatik olarak
                “bellekte işlenen bir anı” diye etiketlemez.
              </p>

              <p className="mt-4">
                Geçmişten bir kişi rüyada görünüyorsa o kişinin neyi
                çağrıştırdığı, rüyadaki rolü, uyandırdığı duygu ve güncel
                yaşamla bağlantısı birlikte değerlendirilir.
              </p>

              <p className="mt-4">
                Bilimsel literatür burada önemli bir sınır çizer: uyku sırasında
                bellek yeniden etkinleşebilir ve bu etkinlik rüyalara
                yansıyabilir; fakat tek bir rüyanın hangi anıyı neden seçtiğini
                laboratuvar bulgularından doğrudan çıkaramayız.
              </p>

              <blockquote className="mt-8 border-l border-[#9b9186] py-1 pl-6 text-xl font-light leading-8 tracking-[-0.015em] text-[#625c54]">
                “Rüya geçmişi kopyalamak zorunda değildir; geçmişten parçaları
                bugünün zihinsel bağlamında yeniden bir araya getirebilir.”
              </blockquote>
            </section>

            {/* SUMMARY */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Kısaca ne biliyoruz?
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-[#eee8df] p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a8177]">
                    DAHA GÜÇLÜ DAYANAK
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>
                      • Uyku, yeni anıların konsolidasyonu ve entegrasyonuyla
                      ilişkilidir.
                    </li>
                    <li>
                      • Yeni öğrenilen deneyimler sonraki rüyalara girebilir.
                    </li>
                    <li>
                      • Görevle ilişkili rüya içeriği daha iyi sonraki bellek
                      performansıyla ilişkili bulunmuştur.
                    </li>
                    <li>
                      • Rüyalar yakın ve uzak bellek kaynaklarını aynı anlatıda
                      birleştirebilir.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-[#eee8df] p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a8177]">
                    HÂLÂ AÇIK
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>
                      • Rüya deneyiminin konsolidasyonda nedensel bir rolü var
                      mı?
                    </li>
                    <li>
                      • Hangi anıların rüyaya gireceğini ne belirliyor?
                    </li>
                    <li>
                      • Farklı uyku evrelerindeki rüyaların bellekle ilişkisi
                      nasıl değişiyor?
                    </li>
                    <li>
                      • Hatırlanmayan rüyalar araştırma tablosunu ne kadar
                      değiştiriyor?
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </article>

        {/* SOURCES */}
        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            KAYNAKLAR
          </p>

          <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
            Araştırma ve literatür
          </h2>

          <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#6f675e]">
            Bu sayfa uyku ve bellek konsolidasyonu, öğrenme içeriğinin
            rüyalara dahil olması, rüyalardaki bellek kaynakları ve görevle
            ilişkili rüyaların sonraki performansla ilişkisi üzerine hakemli
            araştırmalar ve bilimsel derlemeler temel alınarak hazırlanmıştır.
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
            Rüyalar ve bellek hakkında
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
                Rüyandaki anıların bağlamına bak.
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#625c54]">
                Geçmişten bir kişi, yer veya olay rüyanda belirdiyse yalnızca
                “hangi anı?” diye değil, bugün sende neyi çağrıştırdığı ve
                rüyadaki duyguyla nasıl birleştiği açısından da inceleyebilirsin.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-8 rounded-full bg-[#292621] px-7 py-3.5 text-sm text-white transition hover:bg-[#403b35]"
              >
                Rüyanı anlat
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/ruyalar/semboller"
                className="inline-flex items-center gap-5 rounded-full border border-[#c8beb2] px-7 py-3.5 text-sm text-[#292621] transition hover:border-[#8f857a]"
              >
                Rüya sembollerini keşfet
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <footer className="pb-8 text-center text-xs text-[#aaa198]">
          INUS · Rüyalar hakkında araştırma ve psikolojik yaklaşım
        </footer>
      </div>
    </main>
  );
}
