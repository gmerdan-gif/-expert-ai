import Link from "next/link";

export const metadata = {
  title: "Rüyalar | Rüya Analizi ve Rüya Araştırmaları | INUS",
  description:
    "Rüyalar, rüya görmenin psikolojisi, rüya hatırlama, semboller, duygular ve modern rüya araştırmaları hakkında kapsamlı ve kaynaklı bilgiler.",
};

const topics = [
  {
    title: "Rüya nedir?",
    text: "Rüyaların nasıl ortaya çıktığını, REM ve NREM uykusunu ve modern rüya araştırmalarının bize ne söylediğini keşfedin.",
  },
  {
    title: "Rüyalar neden görülür?",
    text: "Bellek, duygu, günlük yaşantı ve rüya içeriği arasındaki ilişkiler üzerine güncel araştırmalar.",
  },
  {
    title: "Rüyalar neden unutulur?",
    text: "Rüya hatırlamanın neden kişiden kişiye değiştiğini ve uyandıktan sonra neden hızla kaybolabildiğini inceleyin.",
  },
  {
    title: "Rüyalardaki semboller",
    text: "Sembolleri hazır sözlük anlamlarıyla değil, kişisel bağlam ve rüyanın bütünü içinde ele almak.",
  },
  {
    title: "Rüyalar ve duygular",
    text: "Korku, özlem, öfke, mutluluk ve diğer duyguların rüya deneyimiyle ilişkisi.",
  },
  {
    title: "Rüya yorumlama",
    text: "Bilimsel rüya araştırması ile psikolojik ve yorumlayıcı yaklaşımlar arasındaki fark.",
  },
];

export default function DreamsPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#24221f]">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">

        {/* HEADER */}
        <header className="flex items-center justify-between py-7">
          <Link
            href="/"
            className="text-xl font-medium tracking-[0.28em]"
          >
            INUS
          </Link>

          <Link
            href="/"
            className="text-sm tracking-wide text-[#5d5851] transition hover:text-[#24221f]"
          >
            Rüyanı analiz et
          </Link>
        </header>

        {/* INTRO */}
        <section className="pt-16 pb-14 sm:pt-24 sm:pb-20">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8a8177]">
            RÜYA KÜTÜPHANESİ
          </p>

          <h1 className="max-w-3xl text-5xl font-light tracking-tight sm:text-6xl">
            Rüyalar hakkında
            <br />
            bildiklerimiz.
          </h1>

          <p className="mt-7 max-w-2xl text-lg font-light leading-8 text-[#686158]">
            Rüyalar binlerce yıldır anlamlandırılmaya çalışılıyor. Modern
            bilim ise rüyaları uyku, bellek, duygu, algı ve bilinç
            araştırmalarının kesişiminde inceliyor.
          </p>

          <p className="mt-5 max-w-2xl leading-7 text-[#817970]">
            Buradaki içerikler, rüyalar hakkında yapılan bilimsel araştırmalar
            ile psikolojik ve yorumlayıcı yaklaşımları birbirinden ayırarak
            ele alır. Bir rüyanın tek ve evrensel bir anlamı olduğu varsayılmaz.
          </p>
        </section>

        {/* TOPICS */}
        <section className="pb-20">
          <div className="grid gap-4 sm:grid-cols-2">
            {topics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-[26px] border border-[#d9d1c7] bg-[#faf8f4] p-7 transition hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(70,60,50,0.06)]"
              >
                <h2 className="text-xl font-normal">
                  {topic.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#686158]">
                  {topic.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ARTICLE */}
        <article className="rounded-[30px] border border-[#d9d1c7] bg-[#faf8f4] px-7 py-10 sm:px-12 sm:py-14">

          <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
            RÜYA ARAŞTIRMALARI
          </p>

          <h2 className="mt-4 text-3xl font-light sm:text-4xl">
            Rüyalar neden önemlidir?
          </h2>

          <div className="mt-8 space-y-8 text-[15px] leading-8 text-[#454039]">

            <section>
              <h3 className="mb-3 text-xl font-normal">
                Rüya yalnızca bir hikâye değildir
              </h3>

              <p>
                Rüya deneyimi, uyku sırasında ortaya çıkan görsel imgeler,
                düşünceler, duygular, kişiler, mekânlar ve olay örgülerinden
                oluşabilir. Bu deneyimler bazen oldukça gerçekçi, bazen de
                gündelik mantığın tamamen dışındadır.
              </p>

              <p className="mt-4">
                Araştırmacılar uzun zamandır rüya içeriğinin uyanık yaşamdan
                tamamen bağımsız olmadığını araştırıyor. Özellikle kişinin
                günlük yaşamındaki olayların, düşüncelerin ve duygusal olarak
                önemli deneyimlerin rüyalara dahil olabildiğine dair önemli
                miktarda araştırma bulunuyor.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-normal">
                Günlük hayat rüyalara nasıl girer?
              </h3>

              <p>
                Rüya araştırmalarındaki “continuity hypothesis” olarak bilinen
                yaklaşım, uyanık yaşam ile rüya içeriği arasında belirli bir
                süreklilik olduğunu öne sürer. Bu, rüyaların gün içinde
                yaşananları birebir tekrar ettiği anlamına gelmez.
              </p>

              <p className="mt-4">
                Daha çok, kişinin önem verdiği insanlar, devam eden sorunlar,
                duygusal olarak güçlü deneyimler ve kişisel kaygılar rüya
                içeriğinde farklı biçimlerde yeniden ortaya çıkabilir.
              </p>

              <div className="mt-6 rounded-2xl bg-[#eee8df] p-6">
                <p className="text-sm leading-7 text-[#625c54]">
                  <strong>Örnek:</strong> İş yerinde önemli bir sunum
                  yapacak bir kişinin rüyasında sahneye çıkıp konuşamadığını
                  görmesi, “başarısızlık rüyası” diye evrensel bir kategoriye
                  sokulmak zorunda değildir. Daha anlamlı soru, kişinin
                  başarısızlık, değerlendirilme veya kontrol kaybıyla ilgili
                  uyanık yaşamında ne yaşadığı olabilir.
                </p>
              </div>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-normal">
                Rüyalar ve bellek
              </h3>

              <p>
                Uyku ile bellek arasındaki ilişki, rüya araştırmalarının önemli
                alanlarından biridir. Araştırmalar, uyku sırasında yeni öğrenilen
                bilgilerin yeniden işlenmesi ve belleğin pekiştirilmesi
                süreçlerinin rüya deneyimleriyle ilişkili olabileceğini
                düşündürüyor.
              </p>

              <p className="mt-4">
                Ancak burada dikkatli olmak gerekir: Bir kişinin rüyasında
                öğrendiği bir şeyi görmesi, o rüyanın kesin olarak belleği
                “pekiştirdiğini” kanıtlamaz. 2023 yılında yayımlanan bir
                meta-analiz, öğrenme ile ilişkili rüyalar ile uyku sonrası
                bellek performansı arasında anlamlı bir ilişki buldu; fakat
                araştırmacılar rüya ve bellek arasındaki mekanizmanın hâlâ
                araştırılması gerektiğini vurguluyor.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-normal">
                Rüyalar neden bazen bu kadar duygusaldır?
              </h3>

              <p>
                Rüyalar yalnızca görüntülerden oluşmaz. Korku, özlem,
                şaşkınlık, utanç, öfke veya mutluluk gibi yoğun duygular
                rüya deneyiminin önemli parçaları olabilir.
              </p>

              <p className="mt-4">
                Araştırmalar, rüyalardaki duygusal tepkilerin uyanık hayattaki
                duygusal tepkilerle bazı açılardan süreklilik gösterebildiğini
                ortaya koyuyor. İlginç olan ise rüyadaki olayların tamamen
                gerçek dışı olmasına rağmen kişinin verdiği duygusal tepkinin
                oldukça tanıdık olabilmesi.
              </p>

              <div className="mt-6 rounded-2xl bg-[#eee8df] p-6">
                <p className="text-sm leading-7 text-[#625c54]">
                  Örneğin rüyada hiç tanımadığınız bir şehirde kaybolabilirsiniz.
                  Şehrin kendisi gerçek olmayabilir; fakat kaybolduğunuzda
                  hissettiğiniz çaresizlik, merak veya özgürlük duygusu
                  gerçek yaşamınızdaki duygusal deneyimlerle bağlantılı
                  olabilir.
                </p>
              </div>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-normal">
                Rüyalardaki semboller ne anlama gelir?
              </h3>

              <p>
                Rüya sembolleri konusunda internette çok sayıda “rüya
                sözlüğü” bulunuyor. Ancak bilimsel açıdan bir sembolün her
                insanda aynı anlama geldiğini söylemek mümkün değildir.
              </p>

              <p className="mt-4">
                Örneğin su bir kişi için huzur, başka biri için tehlike,
                başka biri için çocukluk anısı veya özgürlük anlamına gelebilir.
                Bu nedenle psikolojik bir rüya analizinde sembolün sözlük
                karşılığından önce kişinin o sembolle kurduğu kişisel ilişki
                önemlidir.
              </p>

              <p className="mt-4">
                Bu yaklaşım INUS'un temel prensiplerinden biridir: Bir sembolü
                tek başına açıklamak yerine, rüyanın bütünündeki ilişkisine,
                karşıtlıklarına, duygusuna ve kişinin kendi yaşamındaki
                çağrışımlarına bakmak.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-normal">
                Peki rüyaların tek bir anlamı var mı?
              </h3>

              <p>
                Hayır. Günümüz rüya araştırmaları, “her rüyanın arkasında
                tek bir gizli mesaj vardır” şeklindeki basit bir modeli
                desteklemiyor.
              </p>

              <p className="mt-4">
                Rüyaların neden görüldüğü konusunda hâlâ birden fazla teori
                bulunuyor. Bellek işleme, duygusal süreçler, uyanık yaşamla
                süreklilik ve tehdit simülasyonu gibi farklı açıklamalar
                araştırılıyor. Hiçbiri bugün rüya görmenin bütün yönlerini
                tek başına açıklamıyor.
              </p>

              <p className="mt-4">
                Bu nedenle iyi bir rüya analizi kesin bir hüküm vermekten çok,
                rüyanın kişinin yaşamıyla hangi noktalarda anlamlı bir ilişki
                kurabileceğini araştırmalıdır.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-normal">
                Bilim ile rüya yorumu arasındaki fark
              </h3>

              <p>
                Rüyaların bilimsel olarak incelenmesi ile belirli bir rüyayı
                psikolojik olarak yorumlamak aynı faaliyet değildir. Bilimsel
                araştırma, çok sayıda kişinin verilerinden hareket ederek
                test edilebilir ilişkileri araştırır. Tek bir kişinin rüyasını
                yorumlamak ise kişisel bağlamı merkeze alan daha nitel ve
                yorumlayıcı bir süreçtir.
              </p>

              <p className="mt-4">
                Bu ayrım önemlidir. Bir araştırmada rüya içeriği ile günlük
                yaşam arasında istatistiksel bir ilişki bulunması, sizin
                gördüğünüz belirli bir rüyanın kesin olarak aynı nedenle
                ortaya çıktığını göstermez.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-normal">
                INUS rüya analizine nasıl yaklaşır?
              </h3>

              <p>
                INUS, rüyaları hazır sembol sözlükleriyle açıklamak yerine
                rüyanın kendi bağlamını incelemeyi amaçlar. Rüyadaki olaylar,
                kişiler, mekânlar, karşıtlıklar ve duygular birlikte
                değerlendirilir.
              </p>

              <p className="mt-4">
                Analiz kesin bir teşhis, gelecek tahmini veya bilimsel gerçek
                iddiası değildir. Amaç, rüyanın kişinin kendi yaşamında
                düşündürebileceği olası anlamları araştırmaktır.
              </p>

              <p className="mt-4">
                Bu nedenle INUS için en önemli soru “Bu sembol ne demek?”
                değil, daha çok şudur:
              </p>

              <blockquote className="mt-6 border-l-2 border-[#9b9186] pl-6 text-xl font-light leading-8 text-[#625c54]">
                “Bu rüya, bu kişi için neden tam olarak böyle bir hikâye
                kurmuş olabilir?”
              </blockquote>
            </section>
          </div>
        </article>

        {/* SOURCES */}
        <section className="py-16 sm:py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a8177]">
            KAYNAKLAR
          </p>

          <h2 className="mt-4 text-3xl font-light">
            Araştırma ve literatür
          </h2>

          <div className="mt-7 space-y-4 text-sm leading-7 text-[#686158]">
            <p>
              Schredl, M. (2010). <em>Characteristics and contents of dreams.</em>{" "}
              International Review of Neurobiology.
            </p>

            <p>
              Wamsley, E. J. (2014). <em>Dreaming and offline memory consolidation.</em>{" "}
              Current Neurology and Neuroscience Reports.
            </p>

            <p>
              Vallat, R. et al. (2017).{" "}
              <em>
                Characteristics of the memory sources of dreams.
              </em>{" "}
              Sleep.
            </p>

            <p>
              Blagrove, M. et al. (2019).{" "}
              <em>
                Reactions to Dream Content: Continuity and Non-continuity.
              </em>{" "}
              Frontiers in Psychology.
            </p>

            <p>
              Hudachek, L. & Wamsley, E. J. (2023).{" "}
              <em>
                A meta-analysis of the relation between dream content and
                memory consolidation.
              </em>{" "}
              Sleep.
            </p>

            <p>
              Roesler, C. (2023).{" "}
              <em>
                Dream interpretation and empirical dream research.
              </em>{" "}
              International Journal of Psychoanalysis.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16 rounded-[30px] bg-[#292621] px-7 py-12 text-center text-white sm:mb-20 sm:px-12">
          <h2 className="text-3xl font-light">
            Rüyanı kendin keşfet.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#d4cec5]">
            Rüyanı kendi kelimelerinle anlat. INUS, rüyanın sembollerini,
            duygularını ve hikâyesindeki ilişkileri inceleyerek farklı
            psikolojik bakış açıları sunar.
          </p>

          <Link
            href="/"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3 text-sm text-[#292621] transition hover:bg-[#eee8df]"
          >
            Rüyamı analiz et
          </Link>
        </section>

        <footer className="pb-8 text-center text-xs text-[#aaa198]">
          INUS · Rüyalar hakkında araştırma ve psikolojik yaklaşım
        </footer>
      </div>
    </main>
  );
}