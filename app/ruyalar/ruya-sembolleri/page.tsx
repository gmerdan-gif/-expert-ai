import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/ruyalar/ruya-sembolleri",
  },
  title: "Rüya Sembolleri Ne Anlama Gelir? | Jung ve Psikoloji",
  description:
    "Rüya sembolleri nasıl yorumlanır? Evrensel rüya sözlüklerinin sınırları, kişisel çağrışımlar, Jungcu yaklaşım ve modern rüya araştırmaları.",
};

const sources = [
  {
    authors: "Hall, C. S. & Van de Castle, R. L. (1966)",
    title: "The Content Analysis of Dreams",
    journal: "Appleton-Century-Crofts.",
    detail: "Rüya raporlarının sistematik içerik analizi için klasik kaynak",
    url: "https://psycnet.apa.org/record/1967-35001-000",
  },
  {
    authors: "Schredl, M. (2010)",
    title: "Characteristics and contents of dreams",
    journal: "International Review of Neurobiology, 92, 135–154.",
    detail: "PMID 20870066 · DOI 10.1016/S0074-7742(10)92007-2",
    url: "https://pubmed.ncbi.nlm.nih.gov/20870066/",
  },
  {
    authors: "Domhoff, G. W. (2003)",
    title:
      "The Scientific Study of Dreams: Neural Networks, Cognitive Development, and Content Analysis",
    journal: "American Psychological Association.",
    detail: "Rüya içeriğinin bilimsel ve sistematik incelenmesine ilişkin temel eser",
    url: "https://psycnet.apa.org/record/2003-88328-000",
  },
  {
    authors: "Kahn, D. (2019)",
    title: "Reactions to Dream Content: Continuity and Non-continuity",
    journal: "Frontiers in Psychology, 10, 2676.",
    detail: "PMID 31849778 · PMCID PMC6901388 · DOI 10.3389/fpsyg.2019.02676",
    url: "https://pubmed.ncbi.nlm.nih.gov/31849778/",
  },
  {
    authors: "Roesler, C. (2023)",
    title:
      "Dream interpretation and empirical dream research - an overview of research findings and their connections with psychoanalytic dream theories",
    journal: "International Journal of Psychoanalysis, 104(2), 301–330.",
    detail: "PMID 37139735 · DOI 10.1080/00207578.2023.2184268",
    url: "https://pubmed.ncbi.nlm.nih.gov/37139735/",
  },
  {
    authors: "Jung, C. G. (1964)",
    title: "Man and His Symbols",
    journal: "Aldus Books.",
    detail: "Jungcu sembol ve yorum yaklaşımının klasik kaynaklarından biri",
    url: "https://archive.org/details/manhissymbols0000jung",
  },
];

const faqs = [
  {
    question: "Rüya sembollerinin herkes için aynı anlamı var mı?",
    answer:
      "Hayır. Her sembol için herkeste geçerli tek bir psikolojik karşılık bulunduğunu gösteren doğrulanmış bir bilimsel sistem yoktur. Kişisel deneyim, duygu, kültür ve rüyanın bağlamı yorumda önem taşır.",
  },
  {
    question: "Rüyada yılan görmek ne anlama gelir?",
    answer:
      "Tek bir evrensel anlam verilemez. Yılan korku, merak, tehdit, hayranlık, kişisel bir anı veya kültürel bir çağrışımla ilişkili olabilir. Rüyada yılanın ne yaptığı ve sizin ne hissettiğiniz en az sembolün kendisi kadar önemlidir.",
  },
  {
    question: "Rüyada su görmek ne anlama gelir?",
    answer:
      "Suya otomatik olarak tek bir anlam vermek doğru değildir. Sakin deniz, taşkın nehir, bulanık su veya yüzülen bir havuz farklı rüya bağlamları yaratır. Kişisel çağrışım ve rüyadaki duygu birlikte değerlendirilmelidir.",
  },
  {
    question: "Rüya sözlükleri bilimsel mi?",
    answer:
      "Sabit sembol-anlam eşleştirmelerinin herkes için geçerli olduğunu gösteren güvenilir bilimsel kanıt yoktur. Rüya sözlükleri kültürel veya tarihsel yorumlar sunabilir; ancak kişisel psikolojik anlamın kanıtı değildir.",
  },
  {
    question: "Jung'a göre rüya sembolleri neden önemlidir?",
    answer:
      "Jungcu yaklaşım sembolleri bilinçdışı psikolojik süreçlerin ifade biçimleri olarak ele alabilir. Ancak Jungcu yorum, modern deneysel rüya araştırmasıyla aynı yöntem ve kanıt düzeyinde değildir.",
  },
  {
    question: "Bir rüya sembolünü nasıl yorumlayabilirim?",
    answer:
      "Önce sembolün sizde ne çağrıştırdığına, rüyada ne yaptığına, hangi duyguyu yarattığına ve rüyanın geri kalanıyla ilişkisine bakın. Daha sonra güncel yaşam bağlamınızı ve kültürel çağrışımları değerlendirin.",
  },
];

export default function DreamSymbolsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rüya Sembolleri Ne Anlama Gelir?",
    description:
      "Rüya sembollerinin kişisel çağrışım, kültür, Jungcu yaklaşım ve modern rüya araştırmaları açısından incelenmesi.",
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
            Rüyalar
          </Link>
          <span className="mx-2">/</span>
          <span>Rüya sembolleri</span>
        </nav>

        <header className="pb-14 pt-12 sm:pb-20 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
                RÜYA SEMBOLLERİ
              </p>
              <h1 className="max-w-xl text-[52px] font-light leading-[0.98] tracking-[-0.045em] sm:text-[68px] md:text-[78px]">
                Rüyadaki sembolün
                <br />
                anlamı nedir?
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-2xl text-[17px] font-light leading-8 text-[#625c54]">
                Bir yılan, kapı, deniz veya diş rüyada güçlü bir anlam
                taşıyabilir. Fakat modern rüya araştırması bu görüntülerin
                herkes için tek ve değişmez bir karşılığı olduğunu söylemiyor.
              </p>
              <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#81786e]">
                Daha verimli soru çoğu zaman “Bu sembol ne demek?” değil;
                “Bu sembol bu rüyada ne yapıyor, bende ne uyandırıyor ve
                hayatımdaki hangi bağlama temas ediyor olabilir?” sorusudur.
              </p>
            </div>
          </div>
        </header>

        <section className="border-t border-[#d9d2c9] py-10 sm:py-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            INUS&apos;UN TEMEL YAKLAŞIMI
          </p>
          <h2 className="mt-4 max-w-3xl text-2xl font-light leading-tight tracking-[-0.025em]">
            Rüya sembolü hazır bir cevap değil, bağlam içinde yorumlanması
            gereken bir veri noktasıdır.
          </h2>
          <p className="mt-4 max-w-3xl text-[14px] leading-7 text-[#625c54]">
            Sembolün kişisel çağrışımı, rüyadaki işlevi, yarattığı duygu,
            kültürel arka plan ve güncel yaşam bağlamı birlikte düşünüldüğünde
            yorum daha anlamlı hâle gelir.
          </p>
        </section>

        <article className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <div className="divide-y divide-[#d9d2c9] text-[15px] leading-8 text-[#454039] [&>section]:py-12 [&>section:first-child]:pt-0 [&>section:last-child]:pb-0 lg:[&>section]:grid lg:[&>section]:grid-cols-[0.9fr_1.1fr] lg:[&>section]:gap-x-14 lg:[&>section>h2]:col-start-1 lg:[&>section>h2]:row-start-1 lg:[&>section>:not(h2)]:col-start-2">
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Rüya sembolü dediğimiz şey nedir?
              </h2>
              <p className="mt-5">
                Rüyalar çoğu zaman insanlar, hayvanlar, nesneler, mekânlar ve
                olaylardan oluşur. Bunların bazıları rüyayı gören kişi için
                doğrudan görünen işlevinin ötesinde çağrışımlar taşıyabilir.
              </p>
              <p className="mt-4">
                Bir ev yalnızca bir bina olmayabilir; çocukluk, güvenlik,
                aile, yalnızlık veya bambaşka bir kişisel deneyimle
                ilişkilendirilebilir. Fakat bu çağrışım sembolün kendisinden
                otomatik olarak çıkmaz.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Bilim rüya sembollerini nasıl inceler?
              </h2>
              <p className="mt-5">
                Bilimsel rüya araştırmasının önemli bir bölümü tek tek
                sembollere hazır anlam vermek yerine rüya raporlarının
                içeriğini sistematik olarak inceler.
              </p>
              <p className="mt-4">
                Hall ve Van de Castle’ın klasik içerik analizi sistemi;
                karakterler, sosyal etkileşimler, saldırganlık, dostluk,
                başarı ve başarısızlık gibi içerik kategorilerini kodlayarak
                rüyalar arasında karşılaştırma yapmayı amaçladı.
              </p>
              <p className="mt-4">
                Yani araştırma “bu nesne kesin olarak şunu temsil eder” diye
                başlamaz; önce rüyada ne bulunduğunu ve örüntülerin nasıl
                dağıldığını ölçmeye çalışır.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Evrensel bir rüya sözlüğü var mı?
              </h2>
              <p className="mt-5">
                Tüm insanlar için geçerli, “sembol → tek psikolojik anlam”
                biçiminde doğrulanmış bir bilimsel sözlük bulunmuyor.
              </p>
              <p className="mt-4">
                “Yılan = düşman”, “su = duygu” veya “diş dökülmesi = kaygı”
                gibi eşleştirmeler hızlı bir cevap sunar. Ancak kişisel tarih,
                rüyadaki olay örgüsü ve duygu hesaba katılmadığında bu cevaplar
                kolayca aşırı kesinleşir.
              </p>
              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Kanıt sınırı:</strong> Bir sembol bazı kişilerde
                  benzer çağrışımlar yaratabilir. Bu, aynı anlamın herkese
                  uygulanabileceğini göstermez.
                </p>
              </div>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Kişisel çağrışım neden merkezde?
              </h2>
              <p className="mt-5">
                Aynı görüntü farklı insanların belleğinde farklı ağlara
                bağlanır. Yılanlardan korkan biriyle yılanlara ilgi duyan
                birinin aynı rüya görüntüsüne verdiği duygusal tepki aynı
                olmayabilir.
              </p>
              <p className="mt-4">
                Kişisel çağrışım tek başına “doğru yorum” üretmez; fakat
                sembolü rastgele bir sözlük maddesine çevirmekten daha
                bağlamsal bir başlangıç noktası sunar.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Rüyanın bütünü neden tek sembolden daha önemli?
              </h2>
              <p className="mt-5">
                Bir kapı rüyada çıkış yolu, engel, bekleyiş noktası veya merak
                edilen bir yere geçiş olabilir. Aynı nesnenin işlevi, içinde
                bulunduğu sahne değiştikçe değişebilir.
              </p>
              <p className="mt-4">
                Bu yüzden “neydi?” sorusunun yanına “ne yapıyordu?”,
                “öncesinde ne olmuştu?” ve “sonrasında ne değişti?” sorularını
                eklemek gerekir.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Duygu sembolün anlamını nasıl değiştirir?
              </h2>
              <p className="mt-5">
                Rüyadaki olaylar tuhaf veya fiziksel olarak imkânsız olabilir;
                buna rağmen rüya sırasında verilen duygusal tepkiler kişinin
                uyanık yaşamındaki tepkilerle süreklilik gösterebilir.
              </p>
              <p className="mt-4">
                Kahn’ın 2019 çalışması, rüya koşulları olağandışı olsa bile
                kişinin insanlara ve olaylara verdiği duygusal tepkilerde
                uyanık benlikle süreklilik bulunabildiğini gösterdi.
              </p>
              <p className="mt-4">
                Bu nedenle “rüyada su vardı” bilgisinden çok, “suyun içinde
                huzurlu muydum, korkuyor muydum, çıkmaya mı çalışıyordum?”
                bilgisi yorum açısından daha ayırt edici olabilir.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Uyanık yaşam rüya içeriğine nasıl taşınır?
              </h2>
              <p className="mt-5">
                Schredl’in derlemesinde ele alınan süreklilik hipotezi,
                rüyaların uyanık yaşam deneyimleriyle çeşitli düzeylerde
                bağlantı gösterebildiğini öne sürer. Günlük sorunlar,
                uğraşlar ve duygusal deneyimler rüya içeriğinde iz bırakabilir.
              </p>
              <p className="mt-4">
                Bu bağlantı rüyanın uyanık yaşamı birebir kopyaladığı anlamına
                gelmez. Rüyalar kişiler, zamanlar, mekânlar ve anı parçalarını
                alışılmadık biçimlerde birleştirebilir.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Kültür ve kişisel tarih neyi değiştirir?
              </h2>
              <p className="mt-5">
                Semboller yalnızca bireysel anılardan değil; dil, aile,
                toplumsal çevre, din, sanat ve kültürel anlatılardan da
                çağrışımlar kazanabilir.
              </p>
              <p className="mt-4">
                Aynı hayvan, renk veya nesne farklı kültürlerde farklı anlam
                katmanlarına sahip olabilir. Fakat kültürel anlam da kişisel
                anlamı otomatik olarak belirlemez.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Jung sembollere neden önem veriyordu?
              </h2>
              <p className="mt-5">
                Jung’un analitik psikolojisinde rüya sembolleri, bilinçli
                tutumun dışında kalan psikolojik malzemenin ifade
                biçimlerinden biri olarak ele alınabilir.
              </p>
              <p className="mt-4">
                Jungcu yorum sembolü tek bir sözlük karşılığına kapatmak yerine
                kişisel çağrışımların yanında mitolojik, kültürel ve
                arketipsel paralelleri de araştırabilir.
              </p>
              <p className="mt-4">
                Fakat bu yorumlama yöntemi modern deneysel rüya araştırmasının
                kullandığı yöntemle aynı değildir. Teorik veya klinik bir
                yorum, ampirik olarak doğrulanmış evrensel sembol anlamı gibi
                sunulmamalıdır.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Arketip ile sembol aynı şey mi?
              </h2>
              <p className="mt-5">
                Jungcu kuramda arketip, tek bir görüntü veya nesneyle aynı şey
                değildir. Daha çok insan deneyiminde tekrar eden temel
                psikolojik örüntüleri açıklamak için kullanılan teorik bir
                kavramdır.
              </p>
              <p className="mt-4">
                “Anne”, “gölge”, “kahraman” veya “bilge kişi” gibi figürler
                arketipsel biçimde ele alınabilir; ancak rüyada görülen her
                figür otomatik olarak belirli bir arketipin kanıtı değildir.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Bir sembolü adım adım nasıl inceleyebilirsin?
              </h2>
              <ol className="mt-5 space-y-4 pl-5">
                <li><strong>1.</strong> Sembolü tarif et: nasıl görünüyordu, ne yapıyordu?</li>
                <li><strong>2.</strong> İlk kişisel çağrışımını not et.</li>
                <li><strong>3.</strong> Ortaya çıktığında ne hissettiğini belirle.</li>
                <li><strong>4.</strong> Öncesinde ve sonrasında ne olduğunu hatırla.</li>
                <li><strong>5.</strong> Son günlerdeki yaşam olaylarıyla olası bağlantıları düşün.</li>
                <li><strong>6.</strong> Kültürel veya Jungcu yorumları kesin cevap değil, karşılaştırma çerçevesi olarak değerlendir.</li>
              </ol>
              <p className="mt-5">
                Bu yöntem “doğru cevabı” garanti etmez. Ama yorumu hazır bir
                eşleştirmeden çıkarıp kişinin gerçek rüya deneyimine geri
                taşır.
              </p>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                INUS sembolleri nasıl ele alır?
              </h2>
              <p className="mt-5">
                INUS sembol sayfalarını “kesin rüya tabiri” olarak değil,
                farklı anlam katmanlarını araştırmak için başlangıç noktası
                olarak ele alır.
              </p>
              <p className="mt-4">
                Bir sembolün psikolojik araştırmalardaki yeri, Jungcu
                literatürdeki olası yorumları, kültürel ve geleneksel
                yaklaşımlar ile kişinin kendi çağrışımları birbirinden
                ayrılarak değerlendirilebilir.
              </p>
              <p className="mt-4">
                Ama son adım tekrar rüyanın kendisine döner: sembol bu rüyada
                ne yaptı, hangi duyguyu taşıdı ve kişinin yaşamındaki hangi
                bağlama temas ediyor olabilir?
              </p>
              <blockquote className="mt-8 border-l border-[#9b9186] py-1 pl-6 text-xl font-light leading-8 tracking-[-0.015em] text-[#625c54]">
                “Sembolün genel anlamını bilmek başlangıç olabilir; asıl soru,
                onun senin rüyanda nasıl yaşadığıdır.”
              </blockquote>
            </section>

            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Kısaca ne biliyoruz?
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-[#eee8df] p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a8177]">DAHA GÜÇLÜ DAYANAK</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>• Rüya içeriği sistematik olarak incelenebilir.</li>
                    <li>• Uyanık yaşam deneyimleri rüya içeriğiyle süreklilik gösterebilir.</li>
                    <li>• Rüyadaki duygusal tepkiler önemli bilgi taşıyabilir.</li>
                    <li>• Kişisel ve kültürel bağlam sembolün çağrışımını değiştirebilir.</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-[#eee8df] p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a8177]">KANITLANMIŞ DEĞİL</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>• Her sembolün herkes için tek bir anlam taşıdığı.</li>
                    <li>• Bir sözlük maddesinin kişisel rüyanın anlamını belirlediği.</li>
                    <li>• Jungcu bir yorumun deneysel olarak kanıtlanmış sembol karşılığı olduğu.</li>
                    <li>• Tek bir sembolden teşhis veya gelecek tahmini yapılabileceği.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </article>

        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">KAYNAKLAR</p>
          <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">Araştırma ve literatür</h2>
          <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#6f675e]">
            Bu sayfa rüya içerik analizi, uyanık yaşam ile rüya içeriği
            arasındaki süreklilik, ampirik rüya araştırması ve Jungcu sembol
            yaklaşımına ilişkin kaynakları birlikte değerlendirir. Ampirik
            bulgular ile teorik ve yorumlayıcı yaklaşımlar aynı kanıt düzeyinde
            sunulmamıştır.
          </p>
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

        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">SIK SORULAN SORULAR</p>
          <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">Rüya sembolleri hakkında</h2>
          <div className="mt-10 overflow-hidden rounded-xl border border-[#d9d1c7] bg-[#faf8f4]">
            {faqs.map((faq) => (
              <article key={faq.question} className="border-b border-[#ded6cc] p-6 last:border-b-0 sm:p-7">
                <h3 className="text-lg font-light tracking-[-0.015em]">{faq.question}</h3>
                <p className="mt-3 max-w-4xl text-[14px] leading-7 text-[#6f675e]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[#d9d2c9] py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">KENDİ RÜYANA DÖN</p>
              <h2 className="max-w-2xl text-3xl font-light tracking-[-0.03em] sm:text-4xl">Rüyandaki sembolleri bağlamıyla keşfet.</h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#625c54]">
                Sembolün genel çağrışımlarını gör; sonra onu kendi duyguların,
                yaşam deneyimlerin ve rüyanın bütünüyle birlikte incele.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="inline-flex items-center gap-8 rounded-full bg-[#292621] px-7 py-3.5 text-sm text-white transition hover:bg-[#403b35]">
                Rüyanı anlat <span aria-hidden="true">→</span>
              </Link>
              <Link href="/ruyalar/semboller" className="inline-flex items-center gap-5 rounded-full border border-[#c8beb2] px-7 py-3.5 text-sm text-[#292621] transition hover:border-[#8f857a]">
                Rüya sembollerini keşfet <span aria-hidden="true">→</span>
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
