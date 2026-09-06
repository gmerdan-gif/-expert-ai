import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/ruyalar/kabuslar",
  },
  title: "Kâbuslar Neden Olur? | Kötü Rüyalar, Stres ve Travma",
  description:
    "Kâbus nedir, kötü rüyadan farkı nedir ve neden tekrar eder? Stres, travma, REM uykusu, kâbus bozukluğu ve tedavi yaklaşımları hakkında bilimsel bilgiler.",
};

const sources = [
  {
    authors: "Gieselmann, A. et al. (2019)",
    title:
      "Aetiology and treatment of nightmare disorder: State of the art and future perspectives",
    journal: "Journal of Sleep Research, 28(4), e12820.",
    detail: "PMID 30697860 · DOI 10.1111/jsr.12820",
    url: "https://pubmed.ncbi.nlm.nih.gov/30697860/",
  },
  {
    authors: "Levin, R. & Nielsen, T. A. (2007)",
    title:
      "Disturbed dreaming, posttraumatic stress disorder, and affect distress: A review and neurocognitive model",
    journal: "Psychological Bulletin, 133(3), 482–528.",
    detail: "PMID 17469988 · DOI 10.1037/0033-2909.133.3.482",
    url: "https://pubmed.ncbi.nlm.nih.gov/17469988/",
  },
  {
    authors: "Zadra, A. & Donderi, D. C. (2000)",
    title:
      "Nightmares and bad dreams: Their prevalence and relationship to well-being",
    journal: "Journal of Abnormal Psychology, 109(2), 273–281.",
    detail: "PMID 10895565 · DOI 10.1037/0021-843X.109.2.273",
    url: "https://pubmed.ncbi.nlm.nih.gov/10895565/",
  },
  {
    authors: "Morgenthaler, T. I. et al. (2018)",
    title:
      "Position Paper for the Treatment of Nightmare Disorder in Adults: An American Academy of Sleep Medicine Position Paper",
    journal: "Journal of Clinical Sleep Medicine, 14(6), 1041–1055.",
    detail: "PMID 29852917 · PMCID PMC5991964 · DOI 10.5664/jcsm.7178",
    url: "https://pubmed.ncbi.nlm.nih.gov/29852917/",
  },
  {
    authors: "Scarpelli, S. et al. (2019)",
    title: "The Functional Role of Dreaming in Emotional Processes",
    journal: "Frontiers in Psychology, 10, 459.",
    detail: "PMID 30930809 · PMCID PMC6428732 · DOI 10.3389/fpsyg.2019.00459",
    url: "https://pubmed.ncbi.nlm.nih.gov/30930809/",
  },
];

const faqs = [
  {
    question: "Kâbus nedir?",
    answer:
      "Kâbus, güçlü olumsuz duygular içeren ve çoğu zaman uyandıktan sonra ayrıntıları hatırlanabilen rahatsız edici bir rüya deneyimidir. Ara sıra kâbus görmek tek başına bir uyku bozukluğu anlamına gelmez.",
  },
  {
    question: "Kötü rüya ile kâbus aynı şey mi?",
    answer:
      "Araştırmalarda iki kavram ayrılabilir. Zadra ve Donderi’nin çalışmasında kâbuslar uyanmayla sonuçlanan, kötü rüyalar ise rahatsız edici olduğu hâlde kişiyi uyandırmayan deneyimler olarak ele alınmıştır. Klinik değerlendirme ise daha kapsamlıdır.",
  },
  {
    question: "Stres kâbusları artırabilir mi?",
    answer:
      "Stres ve duygusal yük kâbus sıklığı ve yarattığı sıkıntıyla ilişkili olabilir. Ancak stres yaşayan herkes kâbus görmez ve her kâbus yalnızca stresle açıklanamaz.",
  },
  {
    question: "Travmadan sonra kâbus görmek PTSD olduğu anlamına gelir mi?",
    answer:
      "Hayır. Travma sonrasında kâbuslar görülebilir ve PTSD içinde önemli bir belirti olabilir; fakat tek başına kâbus görmek PTSD tanısı koydurmaz. Tanı başka belirtilerin ve işlevselliğin profesyonel değerlendirilmesini gerektirir.",
  },
  {
    question: "Kâbuslar yalnızca REM uykusunda mı görülür?",
    answer:
      "Canlı ve duygusal rüyalar REM uykusuyla güçlü biçimde ilişkilidir, ancak rüya deneyimi yalnızca REM’e özgü değildir. Bütün kâbusları tek bir uyku evresine indirgemek fazla basitleştirici olur.",
  },
  {
    question: "Tekrarlayan kâbuslar için etkili bir tedavi var mı?",
    answer:
      "Klinik literatürde çeşitli yaklaşımlar araştırılmıştır. American Academy of Sleep Medicine’ın 2018 position paper’ı, Imagery Rehearsal Therapy’yi yetişkinlerde kâbus bozukluğu ve PTSD ile ilişkili kâbuslar için önerilen bir yaklaşım olarak belirtir. Uygun tedavi kişinin durumuna göre profesyonelle belirlenmelidir.",
  },
  {
    question: "Kâbuslar gelecekte kötü bir şey olacağını gösterir mi?",
    answer:
      "Kâbusların gelecekte gerçekleşecek olayları güvenilir biçimde öngördüğünü gösteren bilimsel kanıt bulunmamaktadır.",
  },
];

export default function NightmaresPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kâbuslar Neden Olur? Kötü Rüyalar, Stres ve Travma",
    description:
      "Kâbusların ne olduğu, kötü rüyalardan nasıl ayrıldığı ve stres, travma, uyku süreçleri ve kâbus bozukluğuyla ilişkisi hakkında bilimsel ve psikolojik bir inceleme.",
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
          <Link href="/" className="text-lg font-medium tracking-[0.28em] transition hover:opacity-70">
            INUS
          </Link>
          <div className="flex items-center gap-7 text-sm text-[#625c54]">
            <Link href="/ruyalar" className="transition hover:text-[#24221f]">Rüya Kütüphanesi</Link>
            <Link href="/ruyalar/semboller" className="hidden transition hover:text-[#24221f] sm:inline">Rüya Sembolleri</Link>
          </div>
        </header>

        {/* BREADCRUMB */}
        <nav className="border-t border-[#d9d2c9] pt-6 text-[11px] text-[#91887e]" aria-label="Breadcrumb">
          <Link href="/ruyalar" className="transition hover:text-[#24221f]">Rüyalar</Link>
          <span className="mx-2">/</span>
          <span>Kâbuslar ve yoğun rüyalar</span>
        </nav>

        {/* HERO */}
        <header className="pb-14 pt-12 sm:pb-20 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">KÂBUSLAR VE YOĞUN RÜYALAR</p>
              <h1 className="max-w-xl text-[52px] font-light leading-[0.98] tracking-[-0.045em] sm:text-[68px] md:text-[78px]">
                Neden kâbus<br />görürüz?
              </h1>
            </div>
            <div className="flex flex-col justify-end">
              <p className="max-w-2xl text-[17px] font-light leading-8 text-[#625c54]">
                Kâbus korkutucu bir hikâyeden fazlasıdır: uyku sırasında yaşanan yoğun bir duygusal deneyimdir. Fakat tek bir kâbustan kişinin ruhsal durumu, geçmişi veya geleceği hakkında kesin sonuç çıkarılamaz.
              </p>
              <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#81786e]">
                Araştırmalar stres, duygusal yük, travma ve bazı uyku süreçleriyle bağlantılar gösteriyor. Bu bağlantılar önemlidir; ancak “her kâbusun tek bir nedeni vardır” sonucunu desteklemez.
              </p>
            </div>
          </div>
        </header>

        {/* KEY POINT */}
        <section className="border-t border-[#d9d2c9] py-10 sm:py-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#81786e]">TEMEL AYRIM</p>
          <h2 className="mt-4 max-w-3xl text-2xl font-light leading-tight tracking-[-0.025em]">
            Kâbusun içeriği bir veridir; klinik önemini ise sıklığı, yarattığı sıkıntı ve günlük yaşama etkisi belirler.
          </h2>
          <p className="mt-4 max-w-3xl text-[14px] leading-7 text-[#625c54]">
            Ara sıra görülen rahatsız edici bir rüya ile tekrar eden, uykuyu bozan ve gündüz işlevselliğini etkileyen kâbuslar aynı düzeyde ele alınmamalıdır. Rüyanın anlamını araştırmak ile bir uyku sorununu değerlendirmek de aynı şey değildir.
          </p>
        </section>

        {/* ARTICLE */}
        <article className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <div className="divide-y divide-[#d9d2c9] text-[15px] leading-8 text-[#454039] [&>section]:py-12 [&>section:first-child]:pt-0 [&>section:last-child]:pb-0 lg:[&>section]:grid lg:[&>section]:grid-cols-[0.9fr_1.1fr] lg:[&>section]:gap-x-14 lg:[&>section>h2]:col-start-1 lg:[&>section>h2]:row-start-1 lg:[&>section>:not(h2)]:col-start-2">
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">Kâbus nedir?</h2>
              <p className="mt-5">Kâbuslar genellikle korku, tehdit, çaresizlik, öfke, iğrenme veya yoğun üzüntü gibi güçlü olumsuz duygular içeren rüya deneyimleridir. Kişi uyandığında rüyanın önemli bölümlerini çoğu zaman hatırlayabilir.</p>
              <p className="mt-4">Kovalanmak, saldırıya uğramak, düşmek, sıkışıp kalmak veya sevilen birini kaybetmek sık rastlanan temalar arasında olabilir. Fakat aynı tema iki kişi için aynı anlamı taşımak zorunda değildir.</p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">Kötü rüya, kâbus ve kâbus bozukluğu aynı şey mi?</h2>
              <p className="mt-5">Hayır. Zadra ve Donderi’nin dört haftalık rüya günlükleri kullanan çalışmasında kâbuslar kişiyi uyandıran, kötü rüyalar ise rahatsız edici olduğu hâlde uyanmayla sonuçlanmayan deneyimler olarak sınıflandırıldı.</p>
              <p className="mt-4">Kâbus bozukluğu ise tek bir geceyle tanımlanmaz. Klinik değerlendirmede tekrar eden rahatsız edici rüyaların yanı sıra kişinin uykusu, gündüz işlevselliği ve yaşadığı sıkıntının bütünü önem taşır.</p>
              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7"><p className="text-sm leading-7 text-[#625c54]">Ara sıra kâbus görmek ile tedavi gerektirebilecek düzeyde süren bir kâbus sorunu arasında önemli bir fark vardır.</p></div>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">Kâbusların tek bir nedeni var mı?</h2>
              <p className="mt-5">Bugünkü araştırmalar tek nedenli bir açıklamayı desteklemiyor. Kâbuslar stres, duygusal yük, travmatik yaşantılar, bazı ruhsal bozukluklar, uyku sorunları ve başka bireysel etkenlerle birlikte görülebilir.</p>
              <p className="mt-4">Levin ve Nielsen’in kapsamlı derlemesi, hem travmatik hem de travmatik olmayan kâbusları açıklamak için duygusal yük ve kişinin olumsuz duygulara verdiği tepki gibi birden fazla sürecin hesaba katılması gerektiğini vurgular.</p>
              <p className="mt-4">Bu nedenle bir kâbusu tek bir yaşam olayına, tek bir “bilinçaltı mesajına” veya tek bir sembole indirgemek araştırmaların gösterdiğinden daha kesin bir iddia olur.</p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">Stres ve duygusal yük nasıl devreye girer?</h2>
              <p className="mt-5">Rüyalar uyanık yaşamın duygusal malzemesinden tamamen kopuk değildir. Yoğun belirsizlik, kayıp, çatışma veya baskı dönemlerinde bazı kişiler daha rahatsız edici rüyalar bildirebilir.</p>
              <p className="mt-4">Ancak “stres kâbusa neden olur” ifadesi tek başına fazla basittir. Aynı stres kaynağı farklı kişilerde farklı uyku ve rüya deneyimleriyle ilişkili olabilir.</p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">Travma sonrası kâbuslar neden ayrı ele alınır?</h2>
              <p className="mt-5">Travmatik bir deneyimden sonra kâbuslar ortaya çıkabilir. Bazı rüyalar yaşanan olayı oldukça doğrudan tekrar ederken bazıları olayın ayrıntılarından uzaklaşıp benzer tehdit, çaresizlik veya kontrol kaybı duygularını taşıyabilir.</p>
              <p className="mt-4">PTSD ile ilişkili kâbuslar klinik araştırmalarda önemli bir alandır. Bununla birlikte kâbus görmek tek başına PTSD tanısı anlamına gelmez; PTSD daha geniş bir belirti örüntüsünün profesyonel değerlendirilmesini gerektirir.</p>
              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7"><p className="text-sm leading-7 text-[#625c54]"><strong>Kanıt sınırı:</strong> Travma kâbuslarla ilişkili olabilir; fakat her kâbusun gizli veya unutulmuş bir travmayı gösterdiğini söylemek için bilimsel dayanak yoktur.</p></div>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">Sıklık kadar yarattığı sıkıntı da neden önemli?</h2>
              <p className="mt-5">İki kişi aynı sıklıkta kâbus görebilir ama deneyimin gündüz etkisi çok farklı olabilir. Biri kısa sürede günlük yaşamına dönerken diğeri uyumaktan kaçınabilir, yeniden uykuya dalmakta zorlanabilir veya ertesi gün rüyanın etkisini taşımaya devam edebilir.</p>
              <p className="mt-4">Bu nedenle klinik açıdan yalnızca “ayda kaç kez?” sorusuna bakmak yeterli değildir. Kâbusun oluşturduğu sıkıntı, kaçınma, uyku kaybı ve işlev kaybı da önemlidir.</p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">Kâbuslar neden bu kadar gerçek hissedilebilir?</h2>
              <p className="mt-5">Rüyadaki olay fiziksel olarak gerçekleşmese de yaşanan duygu öznel olarak gerçektir. Korku, kaçma isteği, çaresizlik veya panik hissi uyanınca da bir süre devam edebilir.</p>
              <p className="mt-4">REM uykusu canlı ve duygusal rüya bildirimleriyle güçlü biçimde ilişkilidir; ancak rüya deneyimi yalnızca REM’e özgü değildir. Bu yüzden bütün korkulu rüyaları tek bir uyku evresine indirgemek doğru olmaz.</p>
              <p className="mt-4">Duygunun yoğunluğu da rüyanın geleceğe ilişkin bilgi taşıdığını kanıtlamaz.</p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">Tekrarlayan kâbuslar ne anlatır?</h2>
              <p className="mt-5">Aynı veya benzer kâbusların geri dönmesi dikkat çekici bir örüntüdür; fakat tekrarın kendisi otomatik olarak tek bir psikolojik nedeni göstermez.</p>
              <p className="mt-4">Devam eden stres, travma sonrası süreçler, uyku sorunları veya kişisel yatkınlık gibi farklı etkenler tekrar eden kâbuslarla ilişkili olabilir.</p>
              <p className="mt-4">Rüyayı incelerken yalnızca değişmeyen sembole değil, korkunun artıp azaldığına, kişinin rüyada ne yapabildiğine ve uyanık yaşam bağlamındaki değişimlere de bakmak daha bilgilendiricidir.</p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">Kâbuslarla çalışmak mümkün mü?</h2>
              <p className="mt-5">Evet. Kâbuslar yalnızca yorumlanan içerikler değildir; klinik olarak doğrudan üzerinde çalışılan uyku deneyimleridir. Rüya senaryosunun yeniden yazılması ve gündüz prova edilmesine dayanan yaklaşımlar özellikle dikkat çeker.</p>
              <p className="mt-4">American Academy of Sleep Medicine’ın 2018 position paper’ı, Imagery Rehearsal Therapy’yi yetişkinlerde hem kâbus bozukluğu hem de PTSD ile ilişkili kâbuslar için önerilen bir tedavi olarak belirtir.</p>
              <p className="mt-4">Bu, kişinin kendi kendine herhangi bir tekniği uygulaması gerektiği anlamına gelmez. Kâbuslar ağır, travmayla ilişkili veya uzun süredir devam ediyorsa uygun yaklaşım bir sağlık profesyoneliyle belirlenmelidir.</p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">Jungcu yaklaşım kâbusu nasıl ele alabilir?</h2>
              <p className="mt-5">Jungcu ve diğer derinlik psikolojisi yaklaşımları kâbusu, kişinin bilinçli tutumuyla gerilim içinde olan duyguların, imgelerin veya çatışmaların araştırılabileceği psikolojik malzeme olarak ele alabilir.</p>
              <p className="mt-4">Bu yaklaşım deneysel uyku araştırmasından farklı bir bilgi düzeyidir. Bir sembole Jungcu yorum getirmek, o yorumun biyolojik veya klinik neden olarak kanıtlandığı anlamına gelmez.</p>
              <p className="mt-4">Sembolik okuma bu nedenle evrensel bir “kâbus sözlüğü” gibi değil, kişinin kendi çağrışımları ve yaşam bağlamıyla birlikte kullanılmalıdır.</p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">Ne zaman profesyonel değerlendirme düşünülmeli?</h2>
              <p className="mt-5">Ara sıra görülen kâbuslar tek başına olağandışı değildir. Ancak kâbuslar sıklaşıyor, uzun süre devam ediyor, uykuyu belirgin biçimde bölüyor veya uyumaktan kaçınmaya neden oluyorsa durum yalnızca rüya yorumuyla ele alınmamalıdır.</p>
              <p className="mt-4">Gündüz yorgunluğu, yoğun kaygı, işlev kaybı veya travmatik bir olayın ardından başlayan belirgin sıkıntı da profesyonel değerlendirmeyi anlamlı kılabilir.</p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">INUS kâbuslara nasıl yaklaşır?</h2>
              <p className="mt-5">INUS kâbusu geleceğin habercisi, otomatik bir travma işareti veya tek başına psikolojik teşhis olarak değerlendirmez.</p>
              <p className="mt-4">Rüyadaki olayları, kişileri, sembolleri ve duyguları kişinin kendi çağrışımları ve güncel yaşam bağlamıyla birlikte inceler. “Ne gördün?” kadar “ne hissettin?” ve “bu rüya hayatında nereye temas ediyor olabilir?” soruları da önemlidir.</p>
              <p className="mt-4">Kâbus kişinin uykusunu veya günlük yaşamını ciddi biçimde etkiliyorsa INUS’taki psikolojik keşif profesyonel değerlendirmeye alternatif değildir.</p>
              <blockquote className="mt-8 border-l border-[#9b9186] py-1 pl-6 text-xl font-light leading-8 tracking-[-0.015em] text-[#625c54]">“Kâbusun neye benzediğini anlamak kadar, sende ne bıraktığını anlamak da önemlidir.”</blockquote>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">Kısaca ne biliyoruz?</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-[#eee8df] p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a8177]">DAHA GÜÇLÜ BULGULAR</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>• Kâbuslar yoğun olumsuz duygular içerebilir.</li>
                    <li>• Kötü rüya ile kâbus arasında araştırma açısından ayrım yapılabilir.</li>
                    <li>• Stres ve travma bazı kişilerde kâbuslarla ilişkili olabilir.</li>
                    <li>• Tekrarlayan ve sıkıntı yaratan kâbuslar uyku ve gündüz yaşamını etkileyebilir.</li>
                    <li>• Kâbus bozukluğu için araştırılmış psikolojik tedaviler vardır.</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-[#eee8df] p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a8177]">KANITLANMIŞ DEĞİL</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>• Her kâbusun tek bir nedeni olduğu.</li>
                    <li>• Her kâbusun travmaya işaret ettiği.</li>
                    <li>• Her sembolün herkes için aynı anlama geldiği.</li>
                    <li>• Kâbusların geleceği güvenilir biçimde haber verdiği.</li>
                    <li>• Sembolik yorumun klinik değerlendirme veya tedavinin yerini tutabileceği.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </article>

        {/* SOURCES */}
        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">KAYNAKLAR</p>
          <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">Araştırma ve literatür</h2>
          <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#6f675e]">Bu sayfa; kâbusların tanımı ve yaygınlığı, duygusal süreçler, travma sonrası rahatsız edici rüyalar ve yetişkinlerde kâbus bozukluğunun tedavisi üzerine hakemli araştırmalar ve klinik literatür temel alınarak hazırlanmıştır. Araştırma bulguları ile psikolojik yorum aynı kanıt düzeyinde sunulmamıştır.</p>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {sources.map((source) => (
              <article key={source.title} className="border-t border-[#d9d2c9] pt-5">
                <p className="text-sm font-medium text-[#454039]">{source.authors}</p>
                <p className="mt-2 text-[13px] leading-6 text-[#625c54]"><em>{source.title}</em></p>
                <p className="mt-2 text-xs leading-6 text-[#91887e]">{source.journal}</p>
                <p className="mt-1 text-[10px] tracking-wide text-[#aaa198]">{source.detail}</p>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-xs text-[#625c54] underline decoration-[#bdb4aa] underline-offset-4 transition hover:text-[#24221f]">Kaynağı görüntüle →</a>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">SIK SORULAN SORULAR</p>
          <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">Kâbuslar hakkında</h2>
          <div className="mt-10 overflow-hidden rounded-xl border border-[#d9d1c7] bg-[#faf8f4]">
            {faqs.map((faq) => (
              <article key={faq.question} className="border-b border-[#ded6cc] p-6 last:border-b-0 sm:p-7">
                <h3 className="text-lg font-light tracking-[-0.015em]">{faq.question}</h3>
                <p className="mt-3 max-w-4xl text-[14px] leading-7 text-[#6f675e]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        {/* DREAM BRIDGE */}
        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">KENDİ RÜYANA DÖN</p>
              <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">Kâbusunun sende bıraktığı izi keşfet.</h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#625c54]">Rüyadaki olayları ve sembolleri, hissettiğin duygular ve kendi yaşam bağlamınla birlikte incele.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="inline-flex items-center gap-8 rounded-full bg-[#292621] px-7 py-3.5 text-sm text-white transition hover:bg-[#403b35]">Rüyanı anlat<span aria-hidden="true">→</span></Link>
              <Link href="/ruyalar/semboller" className="inline-flex items-center gap-5 rounded-full border border-[#c8beb2] px-7 py-3.5 text-sm text-[#292621] transition hover:border-[#8f857a]">Rüya sembollerini keşfet<span aria-hidden="true">→</span></Link>
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
