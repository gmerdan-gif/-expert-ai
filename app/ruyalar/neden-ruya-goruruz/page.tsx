import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/ruyalar/neden-ruya-goruruz",
  },
  title: "Neden Rüya Görürüz? | Bilim Ne Biliyor?",
  description:
    "Neden rüya görürüz? Bellek, duygular, uyanık yaşamla süreklilik ve tehdit simülasyonu gibi başlıca teorileri, kanıtları ve bilimsel sınırlarıyla inceleyin.",
};

const sources = [
  {
    authors: "Scarpelli, S., Alfonsi, V., Gorgoni, M. & De Gennaro, L. (2022)",
    title: "What about dreams? State of the art and open questions",
    journal: "Journal of Sleep Research, 31(4), e13609.",
    detail: "PMID 35417930 · PMCID PMC9539486 · DOI 10.1111/jsr.13609",
    url: "https://pubmed.ncbi.nlm.nih.gov/35417930/",
  },
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
    authors: "Scarpelli, S. et al. (2019)",
    title: "The Functional Role of Dreaming in Emotional Processes",
    journal: "Frontiers in Psychology, 10, 459.",
    detail:
      "PMID 30930809 · PMCID PMC6428732 · DOI 10.3389/fpsyg.2019.00459",
    url: "https://pubmed.ncbi.nlm.nih.gov/30930809/",
  },
  {
    authors: "Schredl, M. (2010)",
    title: "Characteristics and contents of dreams",
    journal: "International Review of Neurobiology, 92, 135–154.",
    detail: "PMID 20870066 · DOI 10.1016/S0074-7742(10)92007-2",
    url: "https://pubmed.ncbi.nlm.nih.gov/20870066/",
  },
  {
    authors: "Valli, K. & Revonsuo, A. (2009)",
    title:
      "The threat simulation theory in light of recent empirical evidence: a review",
    journal: "American Journal of Psychology, 122(1), 17–38.",
    detail: "PMID 19353929",
    url: "https://pubmed.ncbi.nlm.nih.gov/19353929/",
  },
  {
    authors: "Malcolm-Smith, S. et al. (2008)",
    title: "Threat in dreams: an adaptation?",
    journal: "Consciousness and Cognition, 17(4), 1281–1291.",
    detail: "PMID 17702604 · DOI 10.1016/j.concog.2007.07.002",
    url: "https://pubmed.ncbi.nlm.nih.gov/17702604/",
  },
  {
    authors: "Lafrenière, A. et al. (2018)",
    title: "Autobiographical memory sources of threats in dreams",
    journal: "Consciousness and Cognition, 58, 124–135.",
    detail: "PMID 29146175 · DOI 10.1016/j.concog.2017.10.017",
    url: "https://pubmed.ncbi.nlm.nih.gov/29146175/",
  },
];

const faqs = [
  {
    question: "Rüyaların neden görüldüğü kesin olarak biliniyor mu?",
    answer:
      "Hayır. Rüya görmenin tek ve kanıtlanmış bir amacı olduğu konusunda bilimsel uzlaşma yoktur. Bellek, duygusal süreçler, uyanık yaşamla süreklilik ve tehdit simülasyonu gibi farklı açıklamalar araştırılmaktadır.",
  },
  {
    question: "Rüyalar belleği güçlendirir mi?",
    answer:
      "Öğrenme içeriğinin rüyaya girmesi ile daha iyi uyku sonrası bellek performansı arasında ilişki bildiren çalışmalar vardır. Ancak bu, rüya görmenin belleği doğrudan güçlendirdiğini veya rüyaların bu amaçla var olduğunu tek başına kanıtlamaz.",
  },
  {
    question: "Rüyalar duyguları işlememize yardım eder mi?",
    answer:
      "Rüyalar sıklıkla duygusal içerik taşır ve duygusal deneyimler rüya içeriğine girebilir. Duygusal işleme veya düzenleme işlevi önemli bir hipotezdir; ancak her rüyanın bu amaçla ortaya çıktığı kanıtlanmış değildir.",
  },
  {
    question: "Rüyalar günlük hayatımızı mı yansıtır?",
    answer:
      "Rüya içeriği ile uyanık yaşam arasında süreklilikler bulunabilir. İnsanlar, uğraşlar, kaygılar ve duygusal olarak önemli deneyimler rüyalara taşınabilir; fakat rüyalar uyanık yaşamın birebir kaydı değildir.",
  },
  {
    question: "Rüyalar tehditleri prova etmek için mi vardır?",
    answer:
      "Tehdit Simülasyonu Teorisi bunu öne sürer. Teoriyle uyumlu bulgular olduğu gibi bazı temel öngörülerine karşı sonuçlar da vardır. Bu nedenle tehdit simülasyonu araştırılmış bir teoridir, rüyaların kanıtlanmış tek işlevi değildir.",
  },
  {
    question: "Rüyaların hiçbir özel işlevi olmayabilir mi?",
    answer:
      "Bu olasılık bilimsel olarak dışlanmış değildir. Rüya deneyimi, uyku sırasında çalışan bellek, duygu ve algı süreçlerinin bilinçte beliren bir sonucu olabilir; ayrıca özel bir biyolojik işlev taşıyıp taşımadığı hâlâ araştırılmaktadır.",
  },
];

export default function WhyDreamPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Neden Rüya Görürüz? Bilim Ne Biliyor?",
    description:
      "Rüyaların neden görüldüğüne dair bellek, duygu, süreklilik ve tehdit simülasyonu yaklaşımlarının kanıtları ve sınırları.",
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

        <nav
          className="border-t border-[#d9d2c9] pt-6 text-[11px] text-[#91887e]"
          aria-label="Breadcrumb"
        >
          <Link href="/ruyalar" className="transition hover:text-[#24221f]">
            Rüya Kütüphanesi
          </Link>
          <span className="mx-2">/</span>
          <span>Neden rüya görürüz?</span>
        </nav>

        <header className="pb-14 pt-12 sm:pb-20 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                RÜYA ARAŞTIRMALARI
              </p>

              <h1 className="max-w-xl text-[52px] font-light leading-[0.98] tracking-[-0.045em] sm:text-[68px] md:text-[78px]">
                Neden rüya
                <br />
                görürüz?
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-2xl text-[17px] font-light leading-8 text-[#625c54]">
                Rüya görmek insan deneyiminin en tanıdık ama bilimsel olarak
                hâlâ tam açıklanamamış parçalarından biri. Bellek, duygular,
                uyanık yaşam ve tehdit simülasyonu arasında önemli bağlantılar
                bulunuyor; fakat bunların hiçbiri tek başına “rüyaların amacı
                budur” demeye yetmiyor.
              </p>

              <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#81786e]">
                Bugün en sağlam cevap bir cümlelik teori değil: Rüyaların nasıl
                oluştuğu, içeriğinin nereden geldiği ve bir işlev taşıyıp
                taşımadığı birbirinden ayrı sorular.
              </p>
            </div>
          </div>
        </header>

        <section className="border-t border-[#d9d2c9] py-10 sm:py-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            KISA CEVAP
          </p>

          <h2 className="mt-4 max-w-3xl text-2xl font-light leading-tight tracking-[-0.025em]">
            Rüyaların neden görüldüğünü kesin olarak bilmiyoruz; fakat hangi
            süreçlerle ilişkili oldukları konusunda giderek daha fazla şey
            biliyoruz.
          </h2>

          <p className="mt-4 max-w-3xl text-[14px] leading-7 text-[#625c54]">
            Uyku sırasında bellek yeniden etkinleşir, duygusal deneyimler
            işlenir ve uyanık yaşamdan parçalar rüya içeriğine girebilir.
            Rüyanın bu süreçlerin nedeni mi, parçası mı yoksa öznel bir izi mi
            olduğu ise hâlâ araştırılıyor.
          </p>
        </section>

        <article className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <div className="divide-y divide-[#d9d2c9] text-[15px] leading-8 text-[#454039] [&>section]:py-12 [&>section:first-child]:pt-0 [&>section:last-child]:pb-0 lg:[&>section]:grid lg:[&>section]:grid-cols-[0.9fr_1.1fr] lg:[&>section]:gap-x-14 lg:[&>section>h2]:col-start-1 lg:[&>section>h2]:row-start-1 lg:[&>section>:not(h2)]:col-start-2">
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Önce üç farklı soruyu ayırmak gerekiyor
              </h2>

              <p className="mt-5">
                “Neden rüya görürüz?” sorusu aslında en az üç bilimsel soruyu
                bir araya getirir: Rüya deneyimi beyinde nasıl ortaya çıkar?
                Rüya içeriği neden belirli insanları, olayları ve duyguları
                içerir? Ve rüya görmenin organizma için özel bir işlevi var mı?
              </p>

              <p className="mt-4">
                Bu soruların cevapları aynı olmak zorunda değildir. Bir
                mekanizmayı açıklamak onun evrimsel işlevini açıklamaz; rüya
                içeriğinde bellek izleri bulmak da rüyanın “belleği
                güçlendirmek için” var olduğunu tek başına göstermez.
              </p>

              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Temel ayrım:</strong> ilişki, mekanizma, işlev ve
                  nedensellik aynı iddia değildir. Rüya biliminin en önemli
                  sınırlarından biri bu ayrımı korumaktır.
                </p>
              </div>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Rüya yalnızca REM uykusunun ürünü mü?
              </h2>

              <p className="mt-5">
                Hayır. REM uykusu canlı, duygusal ve anlatı niteliği güçlü
                rüyalarla sık ilişkilendirilse de rüya deneyimleri NREM
                uykusundan uyandırılan kişilerde de bildirilebilir.
              </p>

              <p className="mt-4">
                Scarpelli ve arkadaşlarının 2022 tarihli derlemesi, modern rüya
                araştırmasının basit “REM eşittir rüya” ikiliğinin ötesine
                geçtiğini vurguluyor. Bugünkü araştırmalar rüya bildiriminin
                öncesindeki beyin etkinliği, kişisel rüya hatırlama eğilimleri
                ve rüya içeriğini etkileyen duyusal ve bilişsel süreçlerle de
                ilgileniyor.
              </p>

              <p className="mt-4">
                Bu nedenle “neden rüya görüyoruz?” sorusu artık yalnızca bir
                uyku evresine bağlanabilecek kadar basit değil.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Bellek rüya araştırmasının merkezinde neden?
              </h2>

              <p className="mt-5">
                Uyku, öğrenilen bilgilerin sonraki kullanım için
                düzenlenmesiyle yakından ilişkilidir. Bu yüzden araştırmacılar
                yeni öğrenilen materyalin rüyalara girip girmediğini ve bunun
                ertesi günkü bellek performansıyla ilişkisini uzun süredir
                inceliyor.
              </p>

              <p className="mt-4">
                Hudachek ve Wamsley’nin 2023 meta-analizi, uyku öncesi bir
                öğrenme görevi kullanan 16 çalışmadan 45 etkiyi birleştirdi.
                Görevle ilişkili rüya içeriği ile daha iyi uyku sonrası bellek
                performansı arasında anlamlı bir ilişki bulundu.
              </p>

              <p className="mt-4">
                Polisomnografi kullanılan çalışmaların alt analizinde ilişki
                NREM uykusundan toplanan rüyalarda anlamlıydı; REM
                örneklerinde ise anlamlı değildi. Bu ayrıntı, “rüya = REM =
                bellek işleme” gibi basit bir zincirin veriler tarafından
                desteklenmediğini de gösteriyor.
              </p>

              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Ne söyleyebiliriz?</strong> Öğrenilen içeriğin
                  rüyaya girmesi daha iyi bellek performansıyla ilişkili
                  olabilir. Bunun rüyanın kendisinin belleği güçlendirdiğini
                  kanıtladığını söyleyemeyiz.
                </p>
              </div>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Rüya bellek işlemenin kendisi mi, izi mi?
              </h2>

              <p className="mt-5">
                Bu ayrım güncel araştırmanın önemli tartışmalarından biri.
                Rüyada yeni öğrenilmiş bir unsurun görülmesi, uyku sırasında
                o anıyla ilişkili süreçlerin etkin olduğuna dair öznel bir
                pencere olabilir.
              </p>

              <p className="mt-4">
                Fakat Bloxham ve Horton’un 2024 değerlendirmesi, rüya içeriği
                ile bellek konsolidasyonu arasındaki ampirik desteğin karışık
                olduğunu ve çalışmaların yöntemsel olarak birbirinden önemli
                biçimde ayrıldığını vurguluyor.
              </p>

              <p className="mt-4">
                Bu yüzden bugün daha ihtiyatlı ifade şudur: rüyalar bellek
                konsolidasyonu sırasında çalışan süreçlerin bazı yönlerini
                yansıtabilir; rüya deneyiminin konsolidasyon için zorunlu
                olduğu gösterilmiş değildir.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Duygular neden rüyalarda bu kadar belirgin?
              </h2>

              <p className="mt-5">
                Rüyalar korku, özlem, utanç, öfke, yakınlık ve sevinç gibi
                güçlü duygular içerebilir. Özellikle REM’den hatırlanan
                rüyalar sıklıkla daha canlı ve duygusal olarak yoğun
                bildirilebilir.
              </p>

              <p className="mt-4">
                Bu gözlem rüyaların duygusal bellek ve duygu düzenleme
                süreçleriyle ilişkili olabileceği hipotezlerini doğurdu.
                Scarpelli ve arkadaşlarının 2019 derlemesi de rüya deneyimi
                ile duygusal süreçler arasındaki nörobiyolojik ve psikolojik
                bağlantıları ele alıyor.
              </p>

              <p className="mt-4">
                Ancak rüyanın duygusal olması, o rüyanın belirli bir duyguyu
                “çözmek” amacıyla üretildiği anlamına gelmez. Duygusal işleme
                güçlü bir araştırma alanıdır; tek ve kanıtlanmış rüya işlevi
                değildir.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Uyanık yaşam neden rüyaya sızıyor?
              </h2>

              <p className="mt-5">
                Rüyalarda gündelik yaşamdan kişiler, mekânlar, uğraşlar ve
                duygusal olarak önemli deneyimler tekrar ortaya çıkabilir.
                Rüya araştırmalarında bu tür ilişkiler genellikle süreklilik
                çerçevesinde incelenir.
              </p>

              <p className="mt-4">
                Schredl’in 2010 derlemesi, uyanık yaşamdaki faaliyetlerin ve
                deneyimlerin rüya içeriğiyle ilişkili olabildiğini gösteren
                geniş literatürü özetler. Bu, rüyaların zihinsel yaşamdan
                tamamen kopuk rastgele görüntüler olmadığını düşündürür.
              </p>

              <p className="mt-4">
                Fakat süreklilik birebir tekrar değildir. Bir iş arkadaşı
                çocukluk evinde görünebilir, eski bir anı güncel bir sorunla
                birleşebilir veya gerçek kişiler alışılmadık roller
                üstlenebilir.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Tehdit Simülasyonu Teorisi ne söylüyor?
              </h2>

              <p className="mt-5">
                Tehdit Simülasyonu Teorisi, rüyaların tehlikeli durumları
                simüle ederek tehdit algılama ve kaçınma tepkilerinin provasına
                katkı sağlamış olabileceğini öne süren evrimsel bir modeldir.
              </p>

              <p className="mt-4">
                Valli ve Revonsuo’nun 2009 derlemesi, farklı örneklemlerde
                tehdit içeriklerini inceleyen çalışmaların önemli bölümünün
                teorinin bazı öngörüleriyle uyumlu olduğunu savunur.
              </p>

              <p className="mt-4">
                Lafrenière ve arkadaşlarının çalışmasında da rüyalardaki
                tehditlerin günlük kayıtlardaki tehdit, tehdit şiddeti ve bir
                önceki günün stres düzeyiyle ilişkileri bulundu. Ayrıca bazı
                rüya tehditleri daha eski otobiyografik anılarla
                ilişkilendirildi.
              </p>

              <p className="mt-4">
                Bunlar teoriyi araştırmaya değer kılar; fakat tek yönlü bir
                kanıt tablosu oluşturmaz.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Tehdit teorisine karşı bulgular da var
              </h2>

              <p className="mt-5">
                Malcolm-Smith ve arkadaşlarının 2008 çalışması, yüksek suç
                oranına sahip bir bölgede yaşayan katılımcılarla daha güvenli
                bir bölgedeki katılımcıları karşılaştırdı. Teorinin
                öngörüsünün aksine, daha fazla gerçek yaşam tehdidine maruz
                kalan grupta daha fazla tehdit rüyası görülmedi.
              </p>

              <p className="mt-4">
                Çalışmada gerçekçi hayatta kalma tehditleri rüyaların yüzde
                20’sinden azında görüldü ve tehditten başarılı kaçış çok
                nadirdi. Araştırmacılar bu sonuçların teorinin bazı temel
                öngörüleriyle çeliştiği sonucuna vardı.
              </p>

              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Bilimsel tablo:</strong> Tehdit Simülasyonu Teorisi
                  gerçek verilerle sınanmış bir modeldir. Hem destekleyici hem
                  de karşı bulgular vardır; bu yüzden rüyaların evrensel ve
                  kesin açıklaması değildir.
                </p>
              </div>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Belki rüyanın tek bir görevi yoktur
              </h2>

              <p className="mt-5">
                Bellek, duygu ve uyanık yaşamla süreklilik bulgularının aynı
                anda var olması başka bir olasılığı gündeme getirir: rüya
                deneyimi tek bir biyolojik görevin ürünü olmak zorunda
                olmayabilir.
              </p>

              <p className="mt-4">
                Uyuyan beyinde bellek yeniden etkinleşmesi, duygusal
                değerlendirme, algısal üretim ve çağrışımsal süreçler aynı gece
                içinde birlikte çalışabilir. Rüya bunların bir bölümünün
                bilinçli deneyimde aldığı biçim olabilir.
              </p>

              <p className="mt-4">
                Bu yaklaşım “rüyaların hiçbir anlamı yoktur” demek değildir.
                Yalnızca bilimsel işlev sorusunu kişisel anlam sorusundan
                ayırır.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Araştırmanın temel sınırı: rüyaya doğrudan erişemiyoruz
              </h2>

              <p className="mt-5">
                Rüya araştırmasının özel bir metodolojik sorunu vardır:
                araştırmacılar rüyanın kendisini doğrudan ölçmez; çoğu zaman
                kişinin uyandıktan sonra verdiği rüya raporuna ulaşır.
              </p>

              <p className="mt-4">
                Hatırlama, raporlama zamanı, uyku evresi, kullanılan soru ve
                laboratuvar koşulları sonuçları etkileyebilir. Scarpelli ve
                arkadaşlarının 2022 derlemesi, rüya biliminin daha ortak
                protokollere ve gelişmiş ölçüm yöntemlerine ihtiyaç duyduğunu
                özellikle vurgular.
              </p>

              <p className="mt-4">
                Bu sınır, farklı teorilerin neden uzun süre bir arada
                yaşayabildiğini anlamak açısından önemlidir.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Bilimsel işlev ile kişisel anlam aynı şey değil
              </h2>

              <p className="mt-5">
                Bir teorinin rüyaların genel işlevine ilişkin açıklama
                sunması, tek bir kişinin belirli bir rüyasının anlamını
                otomatik olarak açıklamaz.
              </p>

              <p className="mt-4">
                Bellek araştırmaları güçlü olsa bile dün gece gördüğünüz bir
                kişinin “bir anıyı pekiştirmek için” rüyaya girdiğini
                söyleyemeyiz. Tehdit teorisi ilginç olsa bile her kovalanma
                rüyasını evrimsel prova olarak etiketleyemeyiz.
              </p>

              <p className="mt-4">
                Kişisel rüya yorumu; rüyanın bağlamı, duygusu, yaşam
                deneyimleri ve kişinin kendi çağrışımları üzerine ayrı bir
                değerlendirme gerektirir.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                INUS bu soruya nasıl yaklaşıyor?
              </h2>

              <p className="mt-5">
                INUS “rüyalar yalnızca bellek içindir” veya “bütün rüyalar
                tehdit provasıdır” gibi tek teoriye dayalı bir analiz
                kullanmaz.
              </p>

              <p className="mt-4">
                Bilimsel araştırmalar rüyanın oluşabileceği zihinsel süreçler
                hakkında çerçeve sağlar. Kişisel analizde ise rüyanın olay
                örgüsü, duygular, semboller, uyanık yaşam bağlantıları ve
                kişinin kendi çağrışımları birlikte değerlendirilir.
              </p>

              <p className="mt-4">
                Böylece araştırma bulguları kişiye zorla uygulanmaz; fakat
                yorum da “her şey her anlama gelebilir” düzeyinde bırakılmaz.
              </p>

              <blockquote className="mt-8 border-l border-[#9b9186] py-1 pl-6 text-xl font-light leading-8 tracking-[-0.015em] text-[#625c54]">
                “Bilim rüyaların ortak süreçlerini araştırır; kişisel yorum ise
                bu rüyanın bu insanın hayatında neden önemli olabileceğini.”
              </blockquote>
            </section>

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
                    <li>• Rüyalar REM dışında da bildirilebilir.</li>
                    <li>• Rüya içeriği uyanık yaşamla süreklilik gösterebilir.</li>
                    <li>
                      • Öğrenmeyle ilişkili rüya içeriği bellek performansıyla
                      ilişkili olabilir.
                    </li>
                    <li>
                      • Duygusal deneyimler rüya içeriğinin önemli bir
                      parçasıdır.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-[#eee8df] p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a8177]">
                    HÂLÂ AÇIK
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>• Rüya görmenin tek bir temel işlevi olup olmadığı.</li>
                    <li>
                      • Rüya deneyiminin bellek konsolidasyonunda nedensel bir
                      rol oynayıp oynamadığı.
                    </li>
                    <li>• Duygusal rüyaların duygu düzenlemedeki kesin rolü.</li>
                    <li>
                      • Rüya görmenin evrimsel olarak hangi nedenle ortaya
                      çıktığı.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </article>

        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            KAYNAKLAR
          </p>

          <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
            Araştırma ve literatür
          </h2>

          <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#6f675e]">
            Bu sayfa güncel rüya bilimi derlemeleri ile bellek, duygusal
            süreçler, uyanık yaşamla süreklilik ve tehdit simülasyonu üzerine
            hakemli araştırmaları birlikte değerlendirir. Bir teoriye destek
            veren bulgular, o teorinin rüyaların tek ve kesin işlevi olduğunu
            gösterecek biçimde yorumlanmamıştır.
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

        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            SIK SORULAN SORULAR
          </p>

          <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
            Neden rüya gördüğümüz hakkında
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

        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                KENDİ RÜYANA DÖN
              </p>

              <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
                Genel teoriden kişisel rüyana geç.
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#625c54]">
                Bilim rüyaların ortak özelliklerini araştırır. Kendi rüyanı
                anlamak içinse olayları, duyguları, sembolleri ve yaşam
                bağlamını birlikte incelemek gerekir.
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
