import Link from "next/link";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata = {
  alternates: {
    canonical: "/ruyalar/ruyalar-ve-duygular",
  },
  title: "Rüyalar ve Duygular | Korku, Stres ve Rüya Araştırmaları",
  description:
    "Rüyalar ve duygular arasındaki ilişki nedir? Korku, stres, özlem, öfke, mutluluk, REM uykusu ve günlük yaşamın rüya duygularına etkisi hakkında bilimsel bilgiler.",
};

const sources = [
  {
    authors: "Scarpelli, S. et al. (2019)",
    title: "The Functional Role of Dreaming in Emotional Processes",
    journal: "Frontiers in Psychology, 10, 459.",
    detail: "PMID 30930809 · DOI 10.3389/fpsyg.2019.00459",
    url: "https://pubmed.ncbi.nlm.nih.gov/30930809/",
  },
  {
    authors: "Malinowski, J. E. & Horton, C. L. (2014)",
    title:
      "Evidence for the preferential incorporation of emotional waking-life experiences into dreams",
    journal: "Dreaming, 24(1), 18–31.",
    detail: "DOI 10.1037/a0036017",
    url: "https://doi.org/10.1037/a0036017",
  },
  {
    authors: "Kahn, D. (2019)",
    title: "Reactions to Dream Content: Continuity and Non-continuity",
    journal: "Frontiers in Psychology, 10, 2676.",
    detail: "PMID 31849778 · PMCID PMC6901388 · DOI 10.3389/fpsyg.2019.02676",
    url: "https://pubmed.ncbi.nlm.nih.gov/31849778/",
  },
  {
    authors: "Horton, C. L. (2017)",
    title:
      "Consciousness across Sleep and Wake: Discontinuity and Continuity of Memory Experiences As a Reflection of Consolidation Processes",
    journal: "Frontiers in Psychiatry, 8, 159.",
    detail: "PMID 28936183 · DOI 10.3389/fpsyt.2017.00159",
    url: "https://pubmed.ncbi.nlm.nih.gov/28936183/",
  },
];

const faqs = [
  {
    question: "Rüyalar neden bu kadar duygusal olabilir?",
    answer:
      "Rüyalar sırasında korku, özlem, öfke, utanç, mutluluk ve şaşkınlık gibi yoğun duygular yaşanabilir. Duygusal deneyimin rüyalarda neden bu kadar belirgin olduğu hâlâ araştırılıyor; ancak rüya içeriği ile uyanık yaşamın duygusal deneyimleri arasında süreklilikler bulunduğuna dair kanıtlar vardır.",
  },
  {
    question: "Stresli dönemlerde neden daha garip rüyalar görüyoruz?",
    answer:
      "Stres ve duygusal olarak önemli deneyimler rüya içeriğinin değişmesiyle ilişkili olabilir. Ancak stresin herkeste aynı rüyayı oluşturduğu söylenemez. Kişinin yaşadığı olay, kişisel çağrışımları ve duygusal tepkisi önemlidir.",
  },
  {
    question: "Korkulu rüyalar korktuğumuz bir şey olacağı anlamına gelir mi?",
    answer:
      "Hayır. Korkulu bir rüya gelecekte gerçekleşecek bir olayı güvenilir biçimde öngörmez. Korku duygusu, rüyanın içeriği ve kişinin uyanık yaşamındaki duygusal durumları arasındaki ilişkiler farklı biçimlerde açıklanabilir.",
  },
  {
    question: "Rüyalar duyguları düzenlememize yardımcı olur mu?",
    answer:
      "Bu konuda çeşitli teoriler ve araştırmalar vardır. Bazı bulgular rüya ve uyku süreçlerinin duygusal deneyimlerin işlenmesiyle ilişkili olabileceğini düşündürür. Ancak rüyaların tek başına duygusal düzenlemenin amacı olduğu kesin olarak kanıtlanmış değildir.",
  },
  {
    question: "Rüyamda ağlamak gerçekten üzgün olduğum anlamına mı gelir?",
    answer:
      "Rüyadaki ağlama gerçek bir üzüntü duygusuyla ilişkili olabilir, ancak tek açıklama bu değildir. Rüyadaki duygu; olayın bağlamı, kişiler, semboller ve kişinin kendi yaşamındaki çağrışımlarla birlikte değerlendirilmelidir.",
  },
  {
    question: "Rüyalar gerçek duygularımızı gösterir mi?",
    answer:
      "Rüyalarda yaşanan duygular gerçek bir deneyimdir; fakat bundan rüyadaki her duygunun gizli bir gerçeği ortaya çıkardığı sonucu çıkarılamaz. Rüyadaki duygular bazen gündelik yaşamla bağlantılı olabilir, bazen de rüyanın kendi hikâyesinin içinde oluşabilir.",
  },
];

export default function DreamsEmotionPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rüyalar ve Duygular: Korku, Stres ve Rüya Deneyimi",
    description:
      "Rüya deneyimi ile duygular arasındaki ilişkiyi bilimsel araştırmalar üzerinden açıklayan kapsamlı rehber.",
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

          <Link
            href="/ruyalar"
            className="text-sm text-[#625c54] transition hover:text-[#24221f]"
          >
            Rüya Kütüphanesi
          </Link>
        </header>

        {/* BREADCRUMB */}
        <nav
          className="border-t border-[#d9d2c9] pt-6 text-[11px] text-[#91887e]"
          aria-label="Breadcrumb"
        >
          <Link href="/ruyalar" className="hover:text-[#24221f]">
            Rüyalar
          </Link>

          <span className="mx-2">/</span>

          <span>Rüyalar ve duygular</span>
        </nav>

        {/* HERO */}
        <header className="pb-14 pt-12 sm:pb-20 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            RÜYA VE DUYGU
          </p>

          <h1 className="max-w-xl text-[48px] font-light leading-[0.98] tracking-[-0.045em] sm:text-[64px] md:text-[72px]">
            Rüyalar ve duygular
          </h1>
            </div>

            <div className="flex flex-col justify-end">

          <p className="max-w-2xl text-[17px] font-light leading-8 text-[#625c54]">
            Bir rüyada yaşanan korku, özlem, utanç veya mutluluk bazen rüyanın
            kendisinden daha gerçek gelebilir. Rüyalar yalnızca görüntülerden
            değil, yoğun duygusal deneyimlerden de oluşur.
          </p>

          <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#81786e]">
            Araştırmalar, rüya duyguları ile uyanık yaşam arasında çeşitli
            süreklilikler olduğunu gösteriyor. Ancak belirli bir rüyadaki
            duygunun tek ve kesin bir açıklaması olduğunu söylemek mümkün
            değil.
          </p>
                    </div>
          </div>
        </header>

        {/* KEY POINT */}
        <section className="mb-12 rounded-xl bg-[#eee8df] px-7 py-9 sm:px-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            TEMEL AYRIM
          </p>

          <h2 className="mt-4 max-w-4xl text-2xl font-light tracking-[-0.025em] sm:text-3xl">
            Rüyadaki duygu gerçek olabilir; ama rüyanın yorumu kesin olmak
            zorunda değildir.
          </h2>

          <p className="mt-5 max-w-3xl text-[14px] leading-7 text-[#625c54]">
            Bir rüyada gerçekten korkabilir, özleyebilir veya sevinebilirsiniz.
            Bu duygusal deneyimin gerçek olması, rüyanın nedenini otomatik
            olarak açıklamaz. Duygu ile yorum arasında önemli bir fark vardır.
          </p>
        </section>

        {/* ARTICLE */}
        <article className="border-t border-[#d9d2c9] py-14 sm:py-16">

          <div className="divide-y divide-[#d9d2c9] text-[15px] leading-8 text-[#454039] [&>section]:py-12 [&>section:first-child]:pt-0 [&>section:last-child]:pb-0 lg:[&>section]:grid lg:[&>section]:grid-cols-[0.9fr_1.1fr] lg:[&>section]:gap-x-14 lg:[&>section>h2]:col-start-1 lg:[&>section>h2]:row-start-1 lg:[&>section>:not(h2)]:col-start-2">

            {/* 1 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Rüya yalnızca görüntülerden oluşmaz
              </h2>

              <p className="mt-5">
                Rüya deneyimi görsel imgelerden, seslerden, düşüncelerden,
                kişilerden ve olaylardan oluşabildiği gibi yoğun duygular da
                içerebilir.
              </p>

              <p className="mt-4">
                Korku, şaşkınlık, özlem, öfke, utanç, huzur ve mutluluk gibi
                duygular rüya raporlarında sıkça tanımlanır. Bazı rüyaların
                hatırlanmasının en önemli nedeni de olayın kendisinden çok
                bıraktığı güçlü duygusal iz olabilir.
              </p>

              <p className="mt-4">
                Bu nedenle rüya araştırmalarında yalnızca “ne gördün?” sorusu
                değil, “rüyada nasıl hissettin?” sorusu da önemlidir.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Rüyalar uyanık yaşamın duygularını yansıtır mı?
              </h2>

              <p className="mt-5">
                Rüya araştırmalarındaki süreklilik yaklaşımı, uyanık yaşam ile
                rüya deneyimi arasında belirli bir bağlantı olduğunu savunur.
              </p>

              <p className="mt-4">
                Kişinin gündüz yaşadığı önemli olaylar, ilişkiler, kaygılar ve
                duygusal deneyimler rüya içeriğinde farklı biçimlerde ortaya
                çıkabilir.
              </p>

              <p className="mt-4">
                Örneğin önemli bir görüşmeden önce kişinin rüyasında
                yetişemediğini, kaybolduğunu veya hazırlıksız olduğunu görmesi
                mümkündür. Ancak bu rüyaya doğrudan “başarısızlık korkusu”
                etiketi yapıştırmak doğru değildir.
              </p>

              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Daha iyi soru:</strong> “Bu kişi neden tam olarak
                  şimdi, bu olayla bağlantılı böyle bir rüya yaşamış olabilir?”
                  Kişisel bağlam, hazır sembol anlamından daha fazla bilgi
                  sağlayabilir.
                </p>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Stres rüyaları etkiler mi?
              </h2>

              <p className="mt-5">
                Duygusal olarak yoğun dönemlerin rüya içeriğinde değişikliklerle
                ilişkili olabileceğine dair araştırmalar bulunuyor.
              </p>

              <p className="mt-4">
                Stresli dönemlerde bazı kişiler daha canlı, daha sık hatırlanan
                veya daha olumsuz duygular içeren rüyalar bildirebilir.
              </p>

              <p className="mt-4">
                Bununla birlikte “stres = kötü rüya” şeklinde basit bir formül
                yoktur. Aynı stres kaynağı farklı kişilerde tamamen farklı
                rüya deneyimleri oluşturabilir.
              </p>

              <p className="mt-4">
                Bir kişinin stresle nasıl başa çıktığı, yaşadığı olayın
                niteliği, geçmiş deneyimleri ve kişisel çağrışımları rüyanın
                içeriğini etkileyebilir.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Neden bazı rüyalar korkutucu?
              </h2>

              <p className="mt-5">
                Korku rüya deneyiminde en çok incelenen duygulardan biridir.
                Tehdit, kovalanma, düşme, kaybolma veya çaresizlik gibi
                temalar birçok kişinin rüya raporlarında görülebilir.
              </p>

              <p className="mt-4">
                Tehdit simülasyonu gibi teoriler, rüyaların bazı durumlarda
                tehditlerle karşılaşmaya ilişkin zihinsel modeller
                oluşturabileceğini öne sürer.
              </p>

              <p className="mt-4">
                Ancak bu teoriler “korkutucu her rüyanın amacı kişiyi tehlikeye
                hazırlamaktır” anlamına gelmez. Rüyaların neden görüldüğüne
                ilişkin hâlâ birden fazla açıklama bulunmaktadır.
              </p>

              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Önemli:</strong> Korkunç bir rüya gelecekte kötü bir
                  olay yaşanacağının işareti değildir. Rüyalar geleceği
                  güvenilir biçimde öngören bir sistem olarak gösterilmiş
                  değildir.
                </p>
              </div>
            </section>

            {/* 5 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Rüyadaki duygu neden olaydan daha gerçek gelebilir?
              </h2>

              <p className="mt-5">
                Rüyalarda mantıksız veya imkânsız olayların son derece yoğun
                duygular oluşturması mümkündür.
              </p>

              <p className="mt-4">
                Örneğin rüyanızda hiç tanımadığınız birinin sizi terk ettiğini
                görebilir ve uyandığınızda gerçek bir kayıp yaşamış gibi
                hissedebilirsiniz.
              </p>

              <p className="mt-4">
                Burada rüyanın olay örgüsü ile duygusal deneyimi birbirinden
                ayırmak önemlidir. Rüyadaki kişi gerçek olmayabilir; ancak
                rüyada yaşanan özlem veya üzüntü gerçek bir deneyimdir.
              </p>

              <p className="mt-4">
                Bu nedenle rüya analizinde “Bu kişi kimdi?” sorusu kadar
                “Bu kişiyi kaybettiğimde ne hissettim?” sorusu da anlamlı
                olabilir.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                REM uykusu ve duygusal rüyalar
              </h2>

              <p className="mt-5">
                REM uykusundan alınan rüya raporları çoğu zaman daha canlı,
                karmaşık ve duygusal içeriklerle ilişkilendirilir.
              </p>

              <p className="mt-4">
                Bununla birlikte duygusal rüyalar yalnızca REM uykusuna özgü
                değildir. NREM uykusundan uyandırılan kişiler de duygusal
                içerikli rüyalar bildirebilir.
              </p>

              <p className="mt-4">
                Dolayısıyla “REM = duygusal rüya, NREM = düşünsel rüya” gibi
                kesin bir ayrım bilimsel olarak fazla basitleştirici olur.
              </p>

              <p className="mt-4">
                Uyku evreleri arasında farklar bulunmakla birlikte rüya
                deneyimi birden fazla beyin sürecinin ortak ürünü olarak
                değerlendiriliyor.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Rüyalar duyguları düzenlememize yardımcı oluyor mu?
              </h2>

              <p className="mt-5">
                Bu soru rüya araştırmalarındaki en ilgi çekici konulardan
                biridir.
              </p>

              <p className="mt-4">
                Bazı teoriler, uyku ve rüya süreçlerinin duygusal anıların
                işlenmesine veya duygusal tepkilerin yeniden düzenlenmesine
                katkıda bulunabileceğini öne sürüyor.
              </p>

              <p className="mt-4">
                Bazı deneysel bulgular da uyku sonrasında duygusal uyaranlara
                verilen tepkilerde değişiklikler olduğunu gösteriyor.
              </p>

              <p className="mt-4">
                Ancak burada önemli bir metodolojik sorun var: Uykunun kendisi,
                REM ve NREM süreçleri ve rüya deneyimi aynı anda gerçekleşiyor.
                Bu nedenle gözlenen etkinin özellikle rüyadan kaynaklandığını
                kesin olarak ayırmak kolay değil.
              </p>

              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Bilimsel sınır:</strong> “Rüyalar duyguları
                  düzenlemek için vardır” bugün kanıtlanmış bir gerçek değil;
                  araştırılan açıklamalardan biridir.
                </p>
              </div>
            </section>

            {/* 8 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Özlem ve sevgi rüyalarda neden güçlü olabilir?
              </h2>

              <p className="mt-5">
                Rüyalar yalnızca korku ve stresle ilgili değildir. Özlem,
                sevgi, yakınlık ve mutluluk da rüyalarda yoğun biçimde
                yaşanabilir.
              </p>

              <p className="mt-4">
                Özellikle duygusal olarak önemli kişiler rüya içeriğinde
                ortaya çıkabilir. Ancak bir kişinin rüyada görülmesi,
                kişinin bilinçdışında o kişiye ilişkin tek bir duygu taşıdığı
                anlamına gelmez.
              </p>

              <p className="mt-4">
                Örneğin yıllardır görüşmediğiniz bir arkadaşınızı rüyanızda
                görmek; özlem, geçmişe yönelik nostalji, mevcut yaşamınızdaki
                bir ilişki veya tamamen başka bir çağrışımla ilişkili olabilir.
              </p>

              <p className="mt-4">
                Rüyanın bağlamı olmadan tek bir açıklamayı seçmek mümkün
                değildir.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Aynı rüya neden farklı duygular yaratabilir?
              </h2>

              <p className="mt-5">
                Rüya sembollerinin herkes için aynı anlamı olmadığı gibi,
                rüyalardaki olayların duygusal karşılığı da kişiden kişiye
                değişebilir.
              </p>

              <p className="mt-4">
                Örneğin deniz bir kişi için huzur ve özgürlük hissi yaratırken
                başka biri için korku veya kontrol kaybını temsil edebilir.
              </p>

              <p className="mt-4">
                Bu nedenle bir rüyadaki duyguyu anlamaya çalışırken hazır
                sembol sözlüklerinden çok kişinin kendi deneyimine bakmak
                daha anlamlıdır.
              </p>

              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Örnek:</strong> “Deniz görmek” tek başına bir duygu
                  söylemez. Rüyadaki denizde yüzüyor musunuz, boğuluyor
                  musunuz, kıyıda mı duruyorsunuz? Korkuyor musunuz, huzurlu
                  musunuz? Rüyanın anlamını değiştiren şey tam olarak bu
                  ilişkiler olabilir.
                </p>
              </div>
            </section>

            {/* 10 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Rüyadaki duygu bastırılmış bir gerçeği gösterir mi?
              </h2>

              <p className="mt-5">
                Rüyadaki güçlü bir duygunun mutlaka bilinçdışında bastırılmış
                bir gerçeği ortaya çıkardığını söylemek mümkün değildir.
              </p>

              <p className="mt-4">
                Psikodinamik ve Jungcu yaklaşımlar rüyaların bilinçli yaşamda
                fark edilmeyen bazı çatışmaları veya duygusal süreçleri
                düşünmek için kullanılabileceğini savunabilir.
              </p>

              <p className="mt-4">
                Ancak bu yorumlayıcı yaklaşımlar ile deneysel rüya araştırması
                aynı tür kanıt üretmez. Bir psikolojik yorum, bilimsel bir
                deneyin sonucu gibi sunulmamalıdır.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Rüyalar ve duygular hakkında neyi kesin olarak bilmiyoruz?
              </h2>

              <p className="mt-5">
                Rüya araştırmalarındaki en önemli açık sorulardan biri,
                rüyadaki duygusal deneyimin neden ortaya çıktığıdır.
              </p>

              <p className="mt-4">
                Rüya içeriğinin uyanık yaşamla sürekliliği konusunda önemli
                kanıtlar bulunmasına rağmen, bu ilişkinin mekanizması tam
                olarak açıklanmış değildir.
              </p>

              <p className="mt-4">
                Aynı şekilde rüyaların duygusal hafızayı düzenleyip
                düzenlemediği, düzenliyorsa bunun rüyanın kendisinden mi
                yoksa uykunun diğer nörobiyolojik süreçlerinden mi
                kaynaklandığı hâlâ araştırılmaktadır.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                INUS rüyalardaki duygulara nasıl yaklaşır?
              </h2>

              <p className="mt-5">
                INUS için rüyadaki duygu, yorumun en önemli parçalarından
                biridir; ancak tek başına bir teşhis veya sonuç değildir.
              </p>

              <p className="mt-4">
                Örneğin rüyadaki korkuyu yalnızca “kaygı” olarak etiketlemek
                yerine korkunun ne zaman ortaya çıktığı, kime veya neye
                yönelik olduğu ve rüyanın diğer bölümleriyle nasıl ilişkili
                olduğu incelenir.
              </p>

              <p className="mt-4">
                Aynı şekilde özlem veya sevgi gibi duygular da doğrudan
                “bu kişiyi özlüyorsun” şeklinde yorumlanmaz. Kişinin kendi
                çağrışımları ve yaşamındaki güncel bağlam dikkate alınır.
              </p>

              <blockquote className="mt-8 border-l border-[#9b9186] py-1 pl-6 text-xl font-light leading-8 tracking-[-0.015em] text-[#625c54]">
                “Rüyada ne olduğunu anlamak kadar, o sırada nasıl
                hissettiğini anlamak da önemlidir.”
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
                    BİLDİKLERİMİZ
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>
                      • Rüyalar yoğun duygusal deneyimler içerebilir.
                    </li>
                    <li>
                      • Uyanık yaşamın duygusal deneyimleri rüyalara
                      yansıyabilir.
                    </li>
                    <li>
                      • Korku ve diğer güçlü duygular rüya deneyiminin önemli
                      parçalarıdır.
                    </li>
                    <li>
                      • Duygular ile rüya içeriği arasında kişiden kişiye
                      değişen ilişkiler vardır.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-[#eee8df] p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a8177]">
                    HÂLÂ AÇIK
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>
                      • Rüyaların duygusal düzenlemedeki doğrudan rolü nedir?
                    </li>
                    <li>
                      • Neden bazı rüyalar son derece yoğun duygular yaratıyor?
                    </li>
                    <li>
                      • Rüya duygularının sinirsel mekanizmaları tam olarak
                      nasıl çalışıyor?
                    </li>
                    <li>
                      • Uyku ile rüyanın duygusal etkileri nasıl ayrılabilir?
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
            Bu sayfadaki açıklamalar; rüya duyguları, uyanık yaşam ile rüya
            arasındaki süreklilik, duygusal süreçler ve rüya araştırmalarının
            güncel literatürü temel alınarak hazırlanmıştır.
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
            Rüyalar ve duygular hakkında
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

        {/* CTA */}
        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            INUS
          </p>

          <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">
            Rüyanın duygusunu keşfet.
          </h2>

          <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#625c54]">
            Rüyanda yaşadığın korku, özlem, öfke veya huzuru kendi yaşamındaki
            bağlamıyla birlikte incele.
          </p>

                      </div>

            <Link
            href="/"
            scroll={true}
            className="inline-flex items-center gap-8 rounded-full bg-[#292621] px-7 py-3.5 text-sm text-white transition hover:bg-[#403b35]"
          >
            Rüyamı analiz et
          
              <span aria-hidden="true">→</span>
            </Link>
                  </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}