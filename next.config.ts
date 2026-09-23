import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/ruyalar/semboller/beyaz",
        destination: "/ruyalar/semboller/beyaz-renk",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/bulut_gormek",
        destination: "/ruyalar/semboller/bulut",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/dans",
        destination: "/ruyalar/semboller/dans-etmek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/kosu",
        destination: "/ruyalar/semboller/kosmak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/melek-gormek",
        destination: "/ruyalar/semboller/melek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/yetel-kurs-okumak",
        destination: "/ruyalar/semboller/ayetel-kursi-okumak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/alyans_takmak",
        destination: "/ruyalar/semboller/alyans-takmak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/olum_haberi_almak",
        destination: "/ruyalar/semboller/olum-haberi-almak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/ayakkabi_giymek",
        destination: "/ruyalar/semboller/ayakkabi-giymek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/cicek_toplamak",
        destination: "/ruyalar/semboller/cicek-toplamak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/gokkusagi_gormek",
        destination: "/ruyalar/semboller/gokkusagi",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/birini_beklemek",
        destination: "/ruyalar/semboller/beklemek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/turuncu_gormek",
        destination: "/ruyalar/semboller/turuncu-renk",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/resim_gormek",
        destination: "/ruyalar/semboller/resim",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/mahkeme_gormek",
        destination: "/ruyalar/semboller/mahkeme",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/silah_gormek",
        destination: "/ruyalar/semboller/silah",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/led_isik",
        destination: "/ruyalar/semboller/led-isik",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/lazer_isigi",
        destination: "/ruyalar/semboller/lazer-isigi",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/lunapark_donme_dolap",
        destination: "/ruyalar/semboller/lunapark-donme-dolap",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/fotograf_kaybetmek",
        destination: "/ruyalar/semboller/fotograf-kaybetmek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/lavabo_tasi",
        destination: "/ruyalar/semboller/lavabo-tasi",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/lunapark_korku_tuneli",
        destination: "/ruyalar/semboller/lunapark-korku-tuneli",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/kuyruklu_yildiz",
        destination: "/ruyalar/semboller/kuyruklu-yildiz",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/lavabo_tikanmasi",
        destination: "/ruyalar/semboller/lavabo-tikanmasi",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/logar_kapagi",
        destination: "/ruyalar/semboller/logar-kapagi",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/mail_almak",
        destination: "/ruyalar/semboller/mail-almak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/evine_girememek",
        destination: "/ruyalar/semboller/evine-girememek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/yanlis_adrese_gitmek",
        destination: "/ruyalar/semboller/yanlis-adrese-gitmek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/mesaji_silmek",
        destination: "/ruyalar/semboller/mesaji-silmek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/masa_saati",
        destination: "/ruyalar/semboller/masa-saati",
        permanent: true,
      },
      // Exact spelling aliases from the Search Console export.
      {
        source: "/ruyalar/semboller/altin_bulmak",
        destination: "/ruyalar/semboller/altin-bulmak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/anahtar_bulmak",
        destination: "/ruyalar/semboller/anahtar-bulmak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/araba_kazasi",
        destination: "/ruyalar/semboller/araba-kazasi",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/aynada_kendini_gormek",
        destination: "/ruyalar/semboller/aynada-kendini-gormek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/a%C4%9Fa%C3%A7",
        destination: "/ruyalar/semboller/agac",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/bah%C3%A7e",
        destination: "/ruyalar/semboller/bahce",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/balik_yemek",
        destination: "/ruyalar/semboller/balik-yemek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/birini_dovmek",
        destination: "/ruyalar/semboller/birini-dovmek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/cam_kirilmasi",
        destination: "/ruyalar/semboller/cam-kirilmasi",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/cenazeye_gitmek",
        destination: "/ruyalar/semboller/cenazeye-gitmek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/ciplak_olmak",
        destination: "/ruyalar/semboller/ciplak-olmak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/dans_etmek",
        destination: "/ruyalar/semboller/dans-etmek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/eski_sevgiliyi_aramak",
        destination: "/ruyalar/semboller/eski-sevgiliyi-aramak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/fotograf_cekmek",
        destination: "/ruyalar/semboller/fotograf-cekmek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/gec_kalmak",
        destination: "/ruyalar/semboller/gec-kalmak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/gelinlik_giymek",
        destination: "/ruyalar/semboller/gelinlik-giymek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/g%C3%BCne%C5%9F",
        destination: "/ruyalar/semboller/gunes",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/hamile_olmak",
        destination: "/ruyalar/semboller/hamile-olmak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/kapi_zili",
        destination: "/ruyalar/semboller/kapi-zili",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/kap%C4%B1",
        destination: "/ruyalar/semboller/kapi",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/kilitli_kapi",
        destination: "/ruyalar/semboller/kilitli-kapi",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/kopek_sahiplenmek",
        destination: "/ruyalar/semboller/kopek-sahiplenmek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/mezar_kazmak",
        destination: "/ruyalar/semboller/mezar-kazmak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/minib%C3%BCs",
        destination: "/ruyalar/semboller/minibus",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/m%C3%BCzik",
        destination: "/ruyalar/semboller/muzik",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/nefes_alamamak",
        destination: "/ruyalar/semboller/nefes-alamamak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/oldugunu_gormek",
        destination: "/ruyalar/semboller/oldugunu-gormek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/otelde_kalmak",
        destination: "/ruyalar/semboller/otelde-kalmak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/para_bulmak",
        destination: "/ruyalar/semboller/para-bulmak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/para_kaybetmek",
        destination: "/ruyalar/semboller/para-kaybetmek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/para_saymak",
        destination: "/ruyalar/semboller/para-saymak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/sac_dokulmesi",
        destination: "/ruyalar/semboller/sac-dokulmesi",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/sac_kesmek",
        destination: "/ruyalar/semboller/sac-kesmek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/sac_uzamasi",
        destination: "/ruyalar/semboller/sac-uzamasi",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/sarki_soylemek",
        destination: "/ruyalar/semboller/sarki-soylemek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/sevgiliyle_kavga_etmek",
        destination: "/ruyalar/semboller/sevgiliyle-kavga-etmek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/silahla_vurulmak",
        destination: "/ruyalar/semboller/silahla-vurulmak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/sinavdan_kalmak",
        destination: "/ruyalar/semboller/sinavdan-kalmak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/telefonla_konusmak",
        destination: "/ruyalar/semboller/telefonla-konusmak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/tirnak_kesmek",
        destination: "/ruyalar/semboller/tirnak-kesmek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/u%C3%A7urum",
        destination: "/ruyalar/semboller/ucurum",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/yangin_sondurmek",
        destination: "/ruyalar/semboller/yangin-sondurmek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/yangindan_kacmak",
        destination: "/ruyalar/semboller/yangindan-kacmak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/yemek_pisirmek",
        destination: "/ruyalar/semboller/yemek-pisirmek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/yuksekten_atlamak",
        destination: "/ruyalar/semboller/yuksekten-atlamak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/yuksekten_dusmek",
        destination: "/ruyalar/semboller/yuksekten-dusmek",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/yuzuk_takmak",
        destination: "/ruyalar/semboller/yuzuk-takmak",
        permanent: true,
      },
      {
        source: "/ruyalar/semboller/%C3%A7e%C5%9Fme",
        destination: "/ruyalar/semboller/cesme",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
