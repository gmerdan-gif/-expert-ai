import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/ruyalar/tekrarlayan-ruyalar",
  },
  title: "Tekrarlayan Rüyalar | Neden Aynı Rüyayı Tekrar Görürüz?",
  description:
    "Tekrarlayan rüyalar neden görülür? Aynı rüya ve temaların tekrarını; stres, psikolojik iyi oluş, tehdit içeriği ve kişisel bağlam üzerinden bilimsel araştırmalarla inceleyin.",
};

const sources = [
  {
    authors: "Zadra, A. L., O'Brien, S. A. & Donderi, D. C. (1998)",
    title:
      "Dream Content, Dream Recurrence and Well-Being: A Replication with a Younger Sample",
    journal: "Imagination, Cognition and Personality, 17(4), 293–311.",
    detail: "DOI 10.2190/LLXL-D4DB-9CP5-BRGT",
    url: "https://doi.org/10.2190/LLXL-D4DB-9CP5-BRGT",
  },
  {
    authors: "Weinstein, N., Campbell, R. & Vansteenkiste, M. (2018)",
    title:
      "Linking psychological need experiences to daily and recurring dreams",
    journal: "Motivation and Emotion, 42(1), 50–63.",
    detail:
      "PMID 29391655 · PMCID PMC5775982 · DOI 10.1007/s11031-017-9656-0",
    url: "https://pubmed.ncbi.nlm.nih.gov/29391655/",
  },
  {
    authors: "Zadra, A., Desjardins, S. & Marcotte, É. (2006)",
    title:
      "Evolutionary function of dreams: A test of the threat simulation theory in recurrent dreams",
    journal: "Consciousness and Cognition, 15(2), 450–463.",
    detail: "PMID 16720254 · DOI 10.1016/j.concog.2005.02.002",
    url: "https://pubmed.ncbi.nlm.nih.gov/16720254/",
  },
  {
    authors:
      "Gauchat, A., Zadra, A., Tremblay, R. E., Zelazo, P. D. & Séguin, J. R. (2009)",
    title: "Recurrent Dreams and Psychosocial Adjustment in Preteenaged Children",
    journal: "Dreaming, 19(2), 75–84.",
    detail: "PMID 24976740 · PMCID PMC4072653 · DOI 10.1037/a0016549",
    url: "https://pubmed.ncbi.nlm.nih.gov/24976740/",
  },
  {
    authors: "Gauchat, A., Séguin, J. R., McSween-Cadieux, E. & Zadra, A. (2015)",
    title: "The content of recurrent dreams in young adolescents",
    journal: "Consciousness and Cognition, 37, 103–111.",
    detail:
      "PMID 26366465 · PMCID PMC4851546 · DOI 10.1016/j.concog.2015.08.009",
    url: "https://pubmed.ncbi.nlm.nih.gov/26366465/",
  },
];

const faqs = [
  {
    question: "Aynı rüyayı tekrar tekrar görmek ne anlama gelir?",
    answer:
      "Tekrarlayan bir rüyanın herkes için geçerli tek bir anlamı yoktur. Araştırmalar tekrarlayan rüyaların bazı örneklemlerde stres, daha olumsuz rüya içeriği ve daha düşük psikolojik iyi oluşla ilişkili olabildiğini gösterir. Ancak bu ilişkiler, tek bir kişinin rüyasının neden tekrar ettiğini tek başına açıklamaz.",
  },
  {
    question: "Tekrarlayan rüyalar stres yüzünden mi görülür?",
    answer:
      "Stres olası etkenlerden biridir, fakat her tekrarlayan rüyanın nedeni stres değildir. Yaşam koşulları, duygusal olarak önemli konular, kişisel çağrışımlar, uyku ve rüya hatırlama süreçleri birlikte rol oynayabilir.",
  },
  {
    question: "Tekrarlayan rüyalar hep kötü veya korkutucu mudur?",
    answer:
      "Hayır. Tekrarlayan rüyalar olumlu veya nötr de olabilir. Bununla birlikte araştırmalarda olumsuz içerik ve tehdit temaları dikkat çekicidir. Bazı örneklemlerde kovalanma, düşme, saldırı veya tehdit gibi içerikler sık görülmüştür.",
  },
  {
    question: "Tekrarlayan rüya bilinçdışının mesajı mıdır?",
    answer:
      "Bu, deneysel araştırmaların doğruladığı bir gerçek değildir. Jungcu ve diğer psikodinamik yaklaşımlar tekrarı psikolojik açıdan anlamlı bir örüntü olarak ele alabilir; fakat ortaya çıkan yorum kişinin bağlamıyla sınanması gereken bir yorumdur, kanıtlanmış gizli mesaj değildir.",
  },
  {
    question: "Tekrarlayan rüyalar geleceği haber verir mi?",
    answer:
      "Tekrarlayan rüyaların gelecekteki olayları güvenilir biçimde öngördüğünü gösteren bilimsel kanıt yoktur. Tekrarın kendisi kehanet veya uyarı olarak değerlendirilmemelidir.",
  },
  {
    question: "Tekrarlayan rüyalar ne zaman profesyonel destek gerektirebilir?",
    answer:
      "Rüya veya kâbuslar sık sık uykudan uyandırıyor, uyumaktan kaçınmaya yol açıyor, gündüz işlevselliğini belirgin biçimde etkiliyor ya da travmatik bir deneyimle bağlantılı yoğun sıkıntı yaratıyorsa bir sağlık veya ruh sağlığı uzmanıyla görüşmek uygun olabilir.",
  },
];

export default function RecurrentDreamsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tekrarlayan Rüyalar: Neden Aynı Rüyayı Tekrar Görürüz?",
    description:
      "Tekrarlayan rüyaları; stres, psikolojik iyi oluş, tehdit içeriği, kişisel bağlam ve yorum sınırları üzerinden bilimsel araştırmalarla ele alan INUS rehberi.",
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
            Rüyalar
          </Link>

          <span className="mx-2">/</span>

          <span>Tekrarlayan rüyalar</span>
        </nav>

        {/* HERO */}
        <header className="pb-14 pt-12 sm:pb-20 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                TEKRARLAYAN RÜYALAR
              </p>

              <h1 className="max-w-xl text-[52px] font-light leading-[0.98] tracking-[-0.045em] sm:text-[68px] md:text-[78px]">
                Neden aynı rüyayı
                <br />
                tekrar görüyoruz?
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-2xl text-[17px] font-light leading-8 text-[#625c54]">
                Bazen aynı sahne geri gelir. Bazen mekân ve kişiler değişir ama
                kovalanma, yetişememe, düşme ya da sıkışıp kalma gibi bir örüntü
                yeniden ortaya çıkar. Bazen de tekrar eden şey yalnızca
                duygudur.
              </p>

              <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#81786e]">
                Araştırmalar tekrarlayan rüyaları stres, psikolojik iyi oluş,
                temel psikolojik ihtiyaçlar ve tehdit içeriği gibi başlıklarla
                ilişkilendiriyor. Fakat tekrarın herkes için geçerli tek bir
                nedeni veya hazır bir anlamı gösterilmiş değil.
              </p>
            </div>
          </div>
        </header>

        {/* KEY POINT */}
        <section className="border-t border-[#d9d2c9] py-10 sm:py-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            TEMEL AYRIM
          </p>

          <h2 className="mt-4 max-w-3xl text-2xl font-light leading-tight tracking-[-0.025em]">
            Tekrarlayan rüya bir mesajdan önce, tanımlanması gereken bir
            örüntüdür.
          </h2>

          <p className="mt-4 max-w-3xl text-[14px] leading-7 text-[#625c54]">
            Birebir aynı senaryonun tekrar etmesiyle, benzer temaların veya aynı
            duygusal yapının farklı rüyalarda yeniden belirmesi aynı şey
            değildir. Önce neyin tekrar ettiğini ayırmak, yoruma hemen anlam
            yüklemekten daha sağlam bir başlangıçtır.
          </p>
        </section>

        {/* ARTICLE */}
        <article className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <div className="divide-y divide-[#d9d2c9] text-[15px] leading-8 text-[#454039] [&>section]:py-12 [&>section:first-child]:pt-0 [&>section:last-child]:pb-0 lg:[&>section]:grid lg:[&>section]:grid-cols-[0.9fr_1.1fr] lg:[&>section]:gap-x-14 lg:[&>section>h2]:col-start-1 lg:[&>section>h2]:row-start-1 lg:[&>section>:not(h2)]:col-start-2">
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Tekrarlayan rüya tam olarak nedir?
              </h2>

              <p className="mt-5">
                Araştırma literatüründe tekrarlayan rüya, zaman içinde yeniden
                ortaya çıkan ve temel tema ile içeriğini önemli ölçüde koruyan
                rüyaları ifade eder. Bu tanım, gündelik dilde kullandığımız
                “hep benzer rüyalar görüyorum” ifadesinden daha dardır.
              </p>

              <p className="mt-4">
                Bu yüzden üç farklı deneyimi ayırmak yararlıdır: neredeyse aynı
                rüyanın tekrar etmesi, aynı temanın farklı senaryolarla geri
                gelmesi ve farklı rüyalarda aynı duygusal örüntünün
                hissedilmesi.
              </p>

              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Örnek:</strong> Her seferinde aynı koridorda kaybolmak
                  daha dar anlamda tekrarlayan rüyaya yakındır. Bir gece uçağı,
                  başka bir gece sınavı, başka bir gece toplantıyı kaçırmak ise
                  “yetişememe” temasının tekrar etmesi olabilir.
                </p>
              </div>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Neden aynı örüntü geri gelebilir?
              </h2>

              <p className="mt-5">
                Bugün için bütün tekrarlayan rüyaları açıklayan tek bir
                mekanizma yok. Araştırmalar, tekrarın uyanık yaşamdaki
                süreklilikler, stres, duygusal olarak önemli deneyimler ve
                kişinin psikolojik durumuyla ilişkili olabileceğini gösteriyor.
              </p>

              <p className="mt-4">
                Buradaki kritik kelime <strong>ilişki</strong>. Bir örüntünün
                stresli dönemlerde görülmesi, stresin o rüyayı tek başına
                ürettiğini kanıtlamaz. Aynı şekilde rüyanın tekrarlanması da
                çözülememiş belirli bir sorunun varlığını otomatik olarak
                göstermez.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Stres ve psikolojik iyi oluşla bağlantı ne kadar güçlü?
              </h2>

              <p className="mt-5">
                Zadra, O&apos;Brien ve Donderi&apos;nin genç yetişkinlerle
                yaptığı çalışmada, aktif olarak tekrarlayan rüya bildiren
                katılımcılar daha düşük psikolojik iyi oluş ve daha olumsuz
                gündelik rüya içeriği bildirdi. Araştırmacılar bu bulguları
                önceki yetişkin çalışmalarıyla benzer bir örüntü olarak
                değerlendirdi.
              </p>

              <p className="mt-4">
                Bu sonuç önemlidir; ama klinik bir test değildir. Grup
                düzeyindeki bir ilişki, tek bir kişiye doğrudan teşhis olarak
                uygulanamaz.
              </p>

              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Kanıtın sınırı:</strong> Tekrarlayan rüyalar bazı
                  araştırmalarda stres ve daha düşük iyi oluşla birlikte
                  görülmüştür. Bu, her tekrarın stres kaynaklı olduğu anlamına
                  gelmez.
                </p>
              </div>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Karşılanmayan psikolojik ihtiyaçlar rüyalara yansıyor mu?
              </h2>

              <p className="mt-5">
                Weinstein, Campbell ve Vansteenkiste&apos;nin çalışması,
                tekrarlayan rüyaları öz-belirleme kuramındaki özerklik,
                yeterlik ve ilişki kurma ihtiyaçları üzerinden inceledi.
              </p>

              <p className="mt-4">
                Tekrarlayan rüyalara odaklanan örneklemde psikolojik ihtiyaç
                engellenmesi yaşayan katılımcılar daha olumsuz rüya temaları
                bildirdi ve rüyalarını daha olumsuz değerlendirdi.
              </p>

              <p className="mt-4">
                Bu bulgu, belirli bir sembolün belirli bir ihtiyacı temsil
                ettiğini göstermez. Çalışma grup düzeyindeki ilişkileri
                gösterir; kişisel rüya yorumu için hazır bir sözlük sunmaz.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Neden kovalanma, düşme ve saldırı gibi temalar dikkat çekiyor?
              </h2>

              <p className="mt-5">
                Tekrarlayan rüya araştırmalarında olumsuz ve tehdit içeren
                senaryolar sık inceleniyor. Zadra, Desjardins ve
                Marcotte&apos;un 212 tekrarlayan rüyayı değerlendirdiği
                çalışmada raporların yüzde 66&apos;sında en az bir tehdit
                bulundu.
              </p>

              <p className="mt-4">
                Buna karşılık rüyaların yüzde 15&apos;inden azı fiziksel
                hayatta kalma veya üreme açısından gerçekçi ve olası kritik
                durumlar içeriyordu.
              </p>

              <p className="mt-4">
                Bu nedenle çalışma, rüyaların tehditleri prova ettiği yönündeki
                tehdit simülasyonu teorisine karma destek
                verdi. Tekrarlayan rüyaların tek işlevinin tehlikeye hazırlık
                olduğunu söylemek bulguların ötesine geçer.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Çocuklarda ve ergenlerde de aynı örüntüler mi görülüyor?
              </h2>

              <p className="mt-5">
                Yaş ve gelişim dönemi önem taşıyabilir. Genç ergenlerden
                toplanan 102 tekrarlayan rüyanın incelendiği bir çalışmada en
                sık bildirilen temalar canavar veya hayvanlarla karşılaşma,
                fiziksel saldırı, düşme ve kovalanmaydı.
              </p>

              <p className="mt-4">
                Rüyalar olumlu içerikten daha sık olumsuz içerik taşıyordu,
                fakat yalnızca yaklaşık yarısında tehdit öğeleri vardı.
                Araştırmacılar bu rüyaların yetişkinlerde bildirilenlerden bazı
                yönleriyle farklılaştığını da vurguladı.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Tekrarlayan rüya ile tekrarlayan kâbus aynı şey mi?
              </h2>

              <p className="mt-5">
                Hayır. Tekrarlayan rüya, tekrar eden içerik veya temayı
                tanımlar; kâbus ise yoğun olumsuz duygu taşıyan ve kişiyi
                uyandırabilen rahatsız edici rüya deneyimini ifade eder. İki
                kategori kesişebilir ama eş anlamlı değildir.
              </p>

              <p className="mt-4">
                Rüya veya kâbuslar sık sık uykudan uyandırıyor, uyumaktan
                kaçınmaya neden oluyor, gündüz işlevselliğini belirgin biçimde
                etkiliyor ya da travmatik bir deneyimle bağlantılı yoğun
                sıkıntı yaratıyorsa yalnızca sembolik yorumla yetinmek yerine
                profesyonel değerlendirme düşünülmelidir.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Rüyanın değişmesi veya sona ermesi ne anlatır?
              </h2>

              <p className="mt-5">
                Tekrarlayan rüya zaman içinde aynı kalmak zorunda değildir.
                Tehdit ortadan kalkabilir, rüya gören kişinin tepkisi
                değişebilir veya rüya tamamen sona erebilir.
              </p>

              <p className="mt-4">
                Böyle bir değişim psikolojik açıdan ilginç bir veri noktasıdır,
                fakat tek başına “sorun çözüldü” sonucunu kanıtlamaz. Rüyanın
                dönüşümü, kişinin yaşamındaki değişikliklerle birlikte
                değerlendirilmelidir.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Jungcu yaklaşım tekrarı nasıl ele alabilir?
              </h2>

              <p className="mt-5">
                Jungcu yaklaşımda tekrar eden imgeler ve temalar, kişinin
                bilinçli tutumuyla henüz yeterince ilişki kurulmamış psikolojik
                içerikleri düşünmek için kullanılabilir. Burada rüya hazır bir
                şifre değil; çağrışımlar üzerinden araştırılan bir deneyimdir.
              </p>

              <p className="mt-4">
                Bu yaklaşım deneysel rüya araştırmasıyla aynı tür kanıt üretmez.
                “Araştırmalar tekrarlayan rüyanın şu bilinçdışı mesaj olduğunu
                kanıtladı” demek doğru olmaz.
              </p>

              <p className="mt-4">
                Daha güvenli kullanım, Jungcu yorumu bir hipotez olarak
                tutmaktır: Bu tekrar kişinin yaşamında neyle yankılanıyor?
                Rüyadaki imge kişiye ne çağrıştırıyor?
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Tekrarlayan rüyayı incelerken neyi kaydetmek gerekir?
              </h2>

              <p className="mt-5">
                Tek bir rüyanın anlamını hemen çözmeye çalışmak yerine,
                tekrarlar arasındaki benzerlik ve farklılıkları kaydetmek daha
                bilgi verici olabilir.
              </p>

              <ol className="mt-5 space-y-4 pl-5">
                <li>
                  <strong>1.</strong> Hangi sahne, kişi, mekân veya tema gerçekten
                  tekrar ediyor?
                </li>
                <li>
                  <strong>2.</strong> Her rüyada baskın duygu aynı mı?
                </li>
                <li>
                  <strong>3.</strong> Rüyadaki rolün değişiyor mu: kaçıyor,
                  izliyor, karşı koyuyor veya yardım mı arıyorsun?
                </li>
                <li>
                  <strong>4.</strong> Rüya hangi dönemlerde sıklaşıyor veya
                  azalıyor?
                </li>
                <li>
                  <strong>5.</strong> İlk görüldüğü ve yeniden ortaya çıktığı
                  dönemlerde yaşamında hangi konular öne çıkıyor?
                </li>
                <li>
                  <strong>6.</strong> Sonraki versiyonlarda yeni bir son veya
                  farklı bir davranış ortaya çıkıyor mu?
                </li>
              </ol>

              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Pratik ayrım:</strong> “Yine aynı rüyayı gördüm”
                  demek yerine değişmeyen ve değişen parçaları ayrı ayrı
                  yazmak, gerçekten neyin tekrar ettiğini görmeyi kolaylaştırır.
                </p>
              </div>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                INUS tekrarlayan rüyalara nasıl yaklaşır?
              </h2>

              <p className="mt-5">
                INUS tekrarın kendisini önemli bir veri noktası olarak ele
                alır; fakat onu otomatik olarak bilinçdışının mesajı, travmanın
                kanıtı veya geleceğe ilişkin uyarı saymaz.
              </p>

              <p className="mt-4">
                Önce rüyanın değişmeyen çekirdeği belirlenir: olay mı, kişi mi,
                mekân mı, sembol mü, ilişki biçimi mi yoksa duygu mu tekrar
                ediyor? Ardından kişinin o öğelere ilişkin kendi çağrışımları
                ve rüyanın ortaya çıktığı yaşam dönemi incelenir.
              </p>

              <p className="mt-4">
                Bilimsel bulgular genel çerçeveyi sınırlar; Jungcu ve diğer
                psikolojik okumalar ise kişisel anlamı araştırmak için
                kullanılabilir. Bu iki düzey birbirine karıştırılmaz.
              </p>

              <blockquote className="mt-8 border-l border-[#9b9186] py-1 pl-6 text-xl font-light leading-8 tracking-[-0.015em] text-[#625c54]">
                “Aynı rüya neden geliyor?” sorusundan önce, “Tam olarak ne
                tekrar ediyor?” diye sormak gerekir.
              </blockquote>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Kısaca ne biliyoruz?
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-[#eee8df] p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a8177]">
                    DAHA GÜÇLÜ BULGULAR
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>
                      • Tekrarlayan rüyalar araştırılabilir bir rüya
                      örüntüsüdür.
                    </li>
                    <li>
                      • Bazı çalışmalarda stres, olumsuz içerik ve daha düşük
                      psikolojik iyi oluşla ilişkiler bulunmuştur.
                    </li>
                    <li>
                      • Tehdit temaları sık görülebilir, ancak bütün tekrarlayan
                      rüyalar tehdit içermez.
                    </li>
                    <li>
                      • Yaş ve gelişim dönemi rüya içeriğinde fark yaratabilir.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-[#eee8df] p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a8177]">
                    KANITLANMIŞ DEĞİL
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>
                      • Her tekrarlayan rüyanın tek bir psikolojik nedeni
                      olduğu.
                    </li>
                    <li>
                      • Tekrarın belirli bir bastırılmış çatışmayı kanıtladığı.
                    </li>
                    <li>
                      • Belirli bir tekrar temasının herkes için aynı anlama
                      geldiği.
                    </li>
                    <li>
                      • Tekrarlayan rüyaların gelecekteki olayları haber
                      verdiği.
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
            Bu sayfadaki bilimsel açıklamalar; tekrarlayan rüyaların içeriği,
            psikolojik iyi oluşla ilişkileri, temel psikolojik ihtiyaçlar ve
            tehdit simülasyonu hipotezini doğrudan inceleyen çalışmalara
            dayanır. İlişkisel bulgular nedensellik veya bireysel teşhis olarak
            sunulmamıştır.
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
                  Kaynağı görüntüle →
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
            Tekrarlayan rüyalar hakkında
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
                Rüyanda neyin tekrar ettiğini keşfet.
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#625c54]">
                Aynı sahne mi geri geliyor, aynı duygu mu, yoksa farklı
                rüyalarda benzer bir tema mı beliriyor? Tekrarı kendi yaşam
                bağlamın ve kişisel çağrışımlarınla birlikte incele.
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
