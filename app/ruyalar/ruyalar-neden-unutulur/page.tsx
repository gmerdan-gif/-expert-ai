import Link from "next/link";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata = {
  alternates: {
    canonical: "/ruyalar/ruyalar-neden-unutulur",
  },
  title: "Rüyalar Neden Unutulur? | Rüya Hatırlama ve Bilim",
  description:
    "Rüyalar neden unutulur? Rüya hatırlama, REM ve NREM uykusu, uyanma, bellek ve bireysel farklılıklar hakkında bilimsel ve kaynaklı bilgiler.",
};

const sources = [
  {
    authors: "Stucky, B. (2025)",
    title:
      "We are the Sensors of Consciousness! A Review and Analysis on How Awakenings During Sleep Influence Dream Recall",
    journal: "Nature and Science of Sleep, 17, 709–729.",
    detail: "PMID 40330584 · DOI 10.2147/NSS.S506461",
    url: "https://pubmed.ncbi.nlm.nih.gov/40330584/",
  },
  {
    authors: "Nemeth, G. (2023)",
    title:
      "The route to recall a dream: theoretical considerations and methodological implications",
    journal: "Psychological Research, 87, 964–987.",
    detail: "PMID 35960337 · DOI 10.1007/s00426-022-01722-7",
    url: "https://pubmed.ncbi.nlm.nih.gov/35960337/",
  },
  {
    authors: "Picard-Deland, C. et al. (2023)",
    title:
      "The memory sources of dreams: serial awakenings across sleep stages and time of night",
    journal: "Sleep, 46(4), zsac292.",
    detail: "PMID 36462190 · PMCID PMC10091095 · DOI 10.1093/sleep/zsac292",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10091095/",
  },
  {
    authors: "Siclari, F. et al. (2017)",
    title:
      "The neural correlates of dreaming",
    journal: "Nature Neuroscience, 20, 872–878.",
    detail: "PMID 28394322 · DOI 10.1038/nn.4545",
    url: "https://pubmed.ncbi.nlm.nih.gov/28394322/",
  },
  {
    authors: "De Gennaro, L. et al. (2010)",
    title:
      "Recovery sleep after sleep deprivation almost completely abolishes dream recall",
    journal: "Behavioural Brain Research, 206(2), 293–298.",
    detail: "PMID 19788898 · DOI 10.1016/j.bbr.2009.09.030",
    url: "https://pubmed.ncbi.nlm.nih.gov/19788898/",
  },
  {
    authors: "Putois, B. et al. (2020)",
    title:
      "Methodological Recommendations to Control for Factors Influencing Dream and Nightmare Recall in Clinical and Experimental Studies of Dreaming",
    journal: "Frontiers in Neurology, 11, 724.",
    detail: "PMID 33041958 · PMCID PMC7523469 · DOI 10.3389/fneur.2020.00724",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7523469/",
  },
];

const faqs = [
  {
    question: "Rüyalarımı hatırlamıyorsam rüya görmüyor muyum?",
    answer:
      "Hayır. Rüya deneyimi ile rüyanın daha sonra hatırlanması farklı süreçlerdir. Bir kişi uyku sırasında bir deneyim yaşamış olabilir ancak bu deneyimin bellekte yeterince güçlü bir izi oluşmadığında sabah bunu hatırlamayabilir.",
  },
  {
    question: "Rüyalar neden uyandıktan hemen sonra kayboluyor?",
    answer:
      "Uyanma ile rüya deneyimi arasında kısa süre içinde yeni düşünceler ve duyusal bilgiler devreye girebilir. Rüyanın bellekteki izinin zayıf olması ve geri getirme için yeterli ipucu bulunmaması da hatırlamayı zorlaştırabilir.",
  },
  {
    question: "REM uykusundan uyanınca rüyalar daha mı iyi hatırlanır?",
    answer:
      "Ortalama olarak evet. REM uyanmalarından sonra rüya hatırlama oranları NREM uyanmalarına göre daha yüksek olma eğilimindedir. Ancak NREM uykusunda da rüya deneyimleri ve hatırlanan rüya raporları oldukça yaygındır.",
  },
  {
    question: "Neden bazı insanlar rüyalarını çok iyi hatırlıyor?",
    answer:
      "Rüya hatırlama kişiden kişiye ciddi ölçüde değişebilir. Uyanma özellikleri, bireysel bilişsel özellikler, rüyaya verilen dikkat ve uyanık yaşamla ilgili bazı faktörler bu farklılıklarda rol oynayabilir.",
  },
  {
    question: "Alarm rüya hatırlamayı etkiler mi?",
    answer:
      "Bazı araştırmalar uyanma yönteminin önemli olduğunu gösteriyor. 2025 tarihli geniş bir derleme, alarm ile uyandırılmanın bazı deneysel koşullarda daha düşük rüya hatırlamayla ilişkili olduğunu bildirdi. Ancak bunun her bireyde aynı şekilde gerçekleştiği söylenemez.",
  },
  {
    question: "Rüya günlüğü tutmak işe yarar mı?",
    answer:
      "Rüyayı uyandıktan hemen sonra yazmak veya sesli olarak kaydetmek, hatırlanan içeriğin daha fazla kaybolmasını önlemek için mantıklı bir yöntemdir. Ancak rüya günlüğünün uzun vadede rüya hatırlamayı ne ölçüde artırdığı konusunda kullanılan yöntemlere göre değişen sonuçlar bulunmaktadır.",
  },
];

export default function DreamRecallPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rüyalar Neden Unutulur? Rüya Hatırlama ve Bilim",
    description:
      "Rüya hatırlamanın uyku, bellek, uyanma ve bireysel farklılıklarla ilişkisini açıklayan bilimsel rehber.",
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

          <span>Rüyalar neden unutulur?</span>
        </nav>

        {/* HERO */}
        <header className="pb-14 pt-12 sm:pb-20 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            RÜYA VE BELLEK
          </p>

          <h1 className="max-w-xl text-[48px] font-light leading-[0.98] tracking-[-0.045em] sm:text-[64px] md:text-[72px]">
            Rüyalar neden unutulur?
          </h1>
            </div>

            <div className="flex flex-col justify-end">

          <p className="max-w-2xl text-[17px] font-light leading-8 text-[#625c54]">
            Sabah uyandığınızda rüyanızın tamamını hatırlayamamanız, gece
            boyunca hiç rüya görmediğiniz anlamına gelmez. Rüya deneyimi ile
            rüyanın daha sonra hatırlanması birbirinden farklı süreçlerdir.
          </p>

          <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#81786e]">
            Araştırmalar; uyku evresi, uyanma biçimi, uyanıklık süresi, bellek
            süreçleri ve bireysel farklılıkların rüya hatırlamada rol
            oynayabileceğini gösteriyor.
          </p>
                    </div>
          </div>
        </header>

        {/* KEY POINT */}
        <section className="mb-12 rounded-xl bg-[#eee8df] px-7 py-9 sm:px-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#81786e]">
            EN ÖNEMLİ AYRIM
          </p>

          <h2 className="mt-4 max-w-4xl text-2xl font-light tracking-[-0.025em] sm:text-3xl">
            “Rüya görmedim” ile “rüyamı hatırlamıyorum” aynı şey değildir.
          </h2>

          <p className="mt-5 max-w-3xl text-[14px] leading-7 text-[#625c54]">
            Bir rüyanın deneyimlenmesi ile o deneyimin daha sonra bellekte
            erişilebilir olması arasında birkaç aşama bulunabilir. Bu nedenle
            sabah hatırlanan rüya, gece boyunca yaşanan tüm rüya deneyiminin
            yalnızca bir bölümünü temsil ediyor olabilir.
          </p>
        </section>

        {/* ARTICLE */}
        <article className="border-t border-[#d9d2c9] py-14 sm:py-16">

          <div className="divide-y divide-[#d9d2c9] text-[15px] leading-8 text-[#454039] [&>section]:py-12 [&>section:first-child]:pt-0 [&>section:last-child]:pb-0 lg:[&>section]:grid lg:[&>section]:grid-cols-[0.9fr_1.1fr] lg:[&>section]:gap-x-14 lg:[&>section>h2]:col-start-1 lg:[&>section>h2]:row-start-1 lg:[&>section>:not(h2)]:col-start-2">

            {/* SECTION 1 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Rüya hatırlama nasıl gerçekleşiyor?
              </h2>

              <p className="mt-5">
                Rüya hatırlamayı yalnızca “rüyayı görmek” olarak düşünmek
                yerine, birkaç aşamalı bir süreç olarak ele almak daha
                açıklayıcıdır.
              </p>

              <p className="mt-4">
                Önce uyku sırasında bilinçli bir deneyim ortaya çıkabilir.
                Ardından bu deneyimin bellekte bir iz bırakması gerekir.
                Uyanma sonrasında ise kişi bu izi yeniden erişilebilir hâle
                getirmelidir.
              </p>

              <p className="mt-4">
                2023 yılında yayımlanan kapsamlı bir teorik çalışma bu süreci
                kabaca <strong>üretim, kodlama ve geri getirme</strong>
                aşamaları üzerinden ele alıyor.
              </p>

              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Basitçe:</strong> Bir rüyanın hatırlanması için onu
                  yalnızca deneyimlemek yetmez. Deneyimin bellekte yeterince
                  erişilebilir bir iz bırakması ve uyanınca bu izin geri
                  getirilebilmesi gerekir.
                </p>
              </div>
            </section>

            {/* SECTION 2 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Uyanınca neden hızla unutuyoruz?
              </h2>

              <p className="mt-5">
                Rüyaların unutulmasının en dikkat çekici özelliği hızıdır.
                Bir kişi rüyasının önemli bir bölümünü uyandığı anda
                hatırlayabilirken birkaç dakika sonra ayrıntıların önemli
                kısmını kaybedebilir.
              </p>

              <p className="mt-4">
                Bunun olası nedenlerinden biri, uyanma ile birlikte zihinsel
                durumun hızla değişmesidir. Rüyanın bıraktığı iz, yeni
                düşünceler, görüntüler, sesler ve günlük planlarla
                yarışmaya başlar.
              </p>

              <p className="mt-4">
                Bu nedenle araştırmacılar rüya hatırlamayı değerlendirirken
                uyanmadan rüya raporunun alınmasına kadar geçen sürenin
                mümkün olduğunca kısa olmasına dikkat ediyor.
              </p>
            </section>

            {/* SECTION 3 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                REM uykusu rüyaların daha iyi hatırlanmasını sağlar mı?
              </h2>

              <p className="mt-5">
                Ortalama olarak REM uykusundan uyandırılan kişiler rüyalarını
                NREM uykusundan uyandırılan kişilere göre daha sık ve daha
                ayrıntılı hatırlama eğilimindedir.
              </p>

              <p className="mt-4">
                Bununla birlikte eski “rüyalar sadece REM uykusunda görülür”
                düşüncesi artık yeterli değildir. NREM uykusundan uyanmalarda
                da rüya deneyimleri ve rüya raporları elde ediliyor.
              </p>

              <p className="mt-4">
                2025 yılında yayımlanan ve 2000–2024 arasındaki 69 uyanma
                çalışmasını inceleyen bir derleme, rüya veya başka uyku
                deneyimlerinin NREM uykusunda da düzenli olarak raporlandığını
                gösterdi. İncelenen çalışmalarda ortalama hatırlama oranı REM
                için yaklaşık %83, NREM için yaklaşık %60 olarak bildirildi.
              </p>

              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Önemli:</strong> Bu oranlar insanların “gecede
                  gördüğü rüyaların yüzde kaçı” değildir. Laboratuvar
                  çalışmalarında belirli bir uyku evresinden uyandırılan
                  kişilerin o anda bir deneyim hatırlayıp hatırlamadığını
                  gösteren araştırma oranlarıdır.
                </p>
              </div>
            </section>

            {/* SECTION 4 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Uyanma şekli neden önemli olabilir?
              </h2>

              <p className="mt-5">
                Uyanmak pasif bir olay değildir. Bir kişi doğal olarak mı
                uyandı, alarm ile mi uyandırıldı veya araştırmacı tarafından
                yumuşak biçimde mi uyandırıldı gibi faktörler hatırlanan
                deneyimin miktarını etkileyebilir.
              </p>

              <p className="mt-4">
                2025 tarihli geniş derleme, kullanılan uyanma yönteminin rüya
                hatırlama oranları üzerinde etkili olduğunu bildirdi. Alarm
                kullanımı bazı koşullarda daha düşük hatırlama ile
                ilişkilendirildi.
              </p>

              <p className="mt-4">
                Bunun olası açıklamalarından biri, alarmın yeni ve dikkat
                çekici bir uyaran olarak rüya deneyiminin hemen ardından
                zihinsel kaynakları başka yöne çekebilmesidir.
              </p>

              <p className="mt-4">
                Ancak bu mekanizma kesin olarak kanıtlanmış değildir. Uyanma
                yönteminin kendisi ile kişinin alarm kullanma alışkanlıkları
                gibi başka değişkenler birbirinden tamamen ayrılamayabilir.
              </p>
            </section>

            {/* SECTION 5 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Neden bazı insanlar rüyalarını çok iyi hatırlıyor?
              </h2>

              <p className="mt-5">
                Rüya hatırlama bireyler arasında belirgin biçimde değişir.
                Bazı kişiler neredeyse her sabah birden fazla rüya
                hatırlarken bazı kişiler haftalar boyunca hiçbir rüyayı
                hatırlamayabilir.
              </p>

              <p className="mt-4">
                Araştırmalarda rüyaya verilen önem, bireysel bilişsel
                özellikler, uyanma örüntüleri ve bazı kişilik özellikleriyle
                rüya hatırlama arasında ilişkiler bulunmuştur. Ancak bu
                ilişkilerin hepsi tutarlı değildir.
              </p>

              <p className="mt-4">
                Özellikle “iyi rüya hatırlayanların mutlaka daha iyi hafızası
                vardır” gibi basit bir sonuç çıkarmak doğru değildir. Rüya
                hatırlama, genel bellek kapasitesinden farklı özelliklere
                sahip olabilir.
              </p>
            </section>

            {/* SECTION 6 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Gece boyunca görülen rüyalar neden aynı şekilde hatırlanmıyor?
              </h2>

              <p className="mt-5">
                Uyku gecenin tamamında aynı yapıda ilerlemez. REM ve NREM
                dönemleri gece boyunca döngüler hâlinde değişir ve sabaha
                doğru REM dönemleri genellikle uzar.
              </p>

              <p className="mt-4">
                Araştırmalar, özellikle REM dönemlerinde daha uzun ve canlı
                rüya raporlarının alınabildiğini gösteriyor. Bazı çalışmalar
                ayrıca gecenin ilerleyen bölümlerindeki rüyaların sabah
                hatırlanma açısından daha erişilebilir olabileceğini bildiriyor.
              </p>

              <p className="mt-4">
                Ancak bunun “sabah gördüğün rüyalar her zaman daha önemlidir”
                gibi psikolojik bir anlam taşıdığı sonucu çıkarılamaz.
                Buradaki fark öncelikle uyku mimarisi ve hatırlama
                koşullarıyla ilgilidir.
              </p>
            </section>

            {/* SECTION 7 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                “Beyaz rüya” nedir?
              </h2>

              <p className="mt-5">
                Rüya araştırmalarında bazen kişi uyandığında bir şeyler
                yaşadığını hissettiğini ancak bunun ne olduğunu
                hatırlayamadığını bildirir. Literatürde buna “white dream”
                gibi ifadelerle atıfta bulunulabilir.
              </p>

              <p className="mt-4">
                Bu durum ilginçtir çünkü kişi tamamen “hiçbir şey olmadı”
                demek yerine bir tür deneyim olduğunu hissedebilir ancak
                içeriğe erişemez.
              </p>

              <p className="mt-4">
                Bu gözlem, rüya deneyimi ile rüyanın içeriğinin bellekte
                erişilebilir olması arasında ayrım yapılması gerektiğini
                gösteren örneklerden biridir.
              </p>
            </section>

            {/* SECTION 8 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Rüya günlüğü gerçekten yardımcı olur mu?
              </h2>

              <p className="mt-5">
                Rüyasını daha iyi hatırlamak isteyen biri için en basit
                yöntem, uyandıktan hemen sonra hatırlananları kaydetmektir.
              </p>

              <p className="mt-4">
                Bunun nedeni, ayrıntıların zamanla kaybolmasını beklemek
                yerine hatırlanan içeriği mümkün olduğunca erken dışarı
                aktarmaktır.
              </p>

              <div className="mt-7 rounded-xl bg-[#eee8df] p-6 sm:p-7">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Pratik yöntem:</strong> Uyandığınızda önce rüyanın
                  en güçlü görüntüsünü, ardından kişileri, mekânı, olayları
                  ve hissettiğiniz duyguyu yazabilirsiniz. Hikâyeyi düzgün
                  cümlelerle oluşturmak zorunda değilsiniz.
                </p>
              </div>

              <p className="mt-4">
                Örneğin yalnızca “ev — kardeşim — su — korku — kapı — kaçmaya
                çalışıyorum” gibi birkaç kelime bile daha sonra rüyayı
                yeniden hatırlamak için ipucu oluşturabilir.
              </p>
            </section>

            {/* SECTION 9 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                Rüyayı hatırlamak, rüyanın anlamlı olduğu anlamına gelir mi?
              </h2>

              <p className="mt-5">
                Hayır. Çok canlı hatırlanan bir rüyanın mutlaka psikolojik
                olarak daha önemli veya “mesaj içerdiği” sonucunu çıkarmak
                mümkün değildir.
              </p>

              <p className="mt-4">
                Bir rüyanın hatırlanabilirliği ile rüyanın kişisel anlamı
                farklı sorulardır. Yoğun bir rüya, uyanma koşulları nedeniyle
                daha iyi hatırlanabilir; bu onun otomatik olarak daha önemli
                olduğu anlamına gelmez.
              </p>

              <p className="mt-4">
                Aynı şekilde unutulan bir rüyanın önemsiz olduğu da
                söylenemez. Hatırlanmama ile psikolojik önem arasında doğrudan
                bir eşitlik kurmak bilimsel olarak mümkün değildir.
              </p>
            </section>

            {/* SECTION 10 */}
            <section>
              <h2 className="max-w-xs text-[26px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[30px]">
                INUS bu bilgileri rüya analizinde nasıl kullanır?
              </h2>

              <p className="mt-5">
                INUS, kullanıcının hatırladığı rüyayı rüyanın tamamı olarak
                kabul etmek yerine, hatırlanan bölümün bir kayıt olduğunu
                varsayar.
              </p>

              <p className="mt-4">
                Bu nedenle eksik, parçalı veya yalnızca birkaç görüntüden
                oluşan rüyalar da analiz edilebilir. Bir rüyanın bütün
                ayrıntılarının hatırlanmaması analizi otomatik olarak
                değersiz hâle getirmez.
              </p>

              <p className="mt-4">
                Ancak eksik hatırlanan bir rüyanın boşluklarını tahmin ederek
                doldurmak doğru değildir. INUS, kullanıcının gerçekten
                hatırladığı içerik üzerinden hareket eder ve belirsiz
                noktaları kesin gerçekler gibi sunmaz.
              </p>

              <blockquote className="mt-8 border-l border-[#9b9186] py-1 pl-6 text-xl font-light leading-8 tracking-[-0.015em] text-[#625c54]">
                “Hatırladığın rüya, gördüğün rüyanın tamamı olmayabilir;
                ama elindeki en doğrudan veridir.”
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
                      • Rüya deneyimleri REM ve NREM uykusunda raporlanabilir.
                    </li>
                    <li>
                      • REM uyanmalarında ortalama rüya hatırlama daha yüksektir.
                    </li>
                    <li>
                      • Uyanma yöntemi hatırlamayı etkileyebilir.
                    </li>
                    <li>
                      • Rüya hatırlama kişiler arasında ciddi farklılık
                      gösterebilir.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-[#eee8df] p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a8177]">
                    HÂLÂ AÇIK SORULAR
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#625c54]">
                    <li>
                      • Rüya deneyiminin bellekte nasıl kodlandığı tam olarak
                      nasıl gerçekleşiyor?
                    </li>
                    <li>
                      • Neden bazı insanlar sürekli yüksek hatırlama gösteriyor?
                    </li>
                    <li>
                      • Rüya hatırlamanın kişilik ve bilişsel özelliklerle
                      ilişkisi ne kadar güçlü?
                    </li>
                    <li>
                      • Rüya deneyimi ile rüya hatırlama arasındaki sinirsel
                      mekanizmalar tam olarak nedir?
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
            Bu sayfadaki açıklamalar; rüya hatırlama, uyku evreleri, uyanma
            koşulları ve rüya-bellek ilişkisi üzerine deneysel çalışmalar ve
            derlemeler temel alınarak hazırlanmıştır.
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
            Rüya hatırlama hakkında
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
            Hatırladığın rüyayı keşfet.
          </h2>

          <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#625c54]">
            Rüyanın tamamını hatırlamak zorunda değilsin. Hatırladığın
            görüntüleri, olayları ve duyguları kendi kelimelerinle anlat.
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