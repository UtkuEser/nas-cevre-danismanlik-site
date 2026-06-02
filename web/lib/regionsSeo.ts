export interface RegionSeo {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  introParagraph1: string;
  introParagraph2: string;
  whyImportant: string;
  sectors: string[];
  processText: string;
  nasApproach: string;
  nearbyRegionSlugs: string[];
  faqs: { q: string; a: string }[];
}

export const REGIONS_SEO: RegionSeo[] = [
  // ─────────────────────────────────────────
  // 1. Uşak
  // ─────────────────────────────────────────
  {
    slug: "usak-cevre-danismanlik",
    city: "Uşak",
    metaTitle: "Uşak Çevre Danışmanlık Hizmetleri | Nas Çevre",
    metaDescription:
      "Uşak'ta çevre mevzuatı uyumu, çevre izin ve lisans, atık yönetimi, ÇED ve denetim hazırlığı. Nas Çevre Danışmanlık Mühendislik.",
    h1: "Uşak Çevre Danışmanlık Hizmetleri",
    introParagraph1:
      "Uşak; tekstil, deri işleme ve gıda üretim sektörlerinin yoğun faaliyet gösterdiği, güçlü bir sanayi altyapısına sahip bir ildir. Bu sektörler, çevre mevzuatı kapsamında çok sayıda yasal yükümlülük doğurmakta; izin belgeleri, periyodik beyanlar, atık yönetimi ve teknik raporlama süreçleri düzenli ve sistematik biçimde yönetilmesi gereken bir bütünü oluşturmaktadır.",
    introParagraph2:
      "Nas Çevre Danışmanlık Mühendislik, Uşak merkezli konumuyla Uşak Organize Sanayi Bölgesi'ndeki ve merkez ile ilçelerindeki işletmelere sahada ve uzaktan destek sunmaktadır. Mevzuat uyumu, denetim hazırlığı ve süreç takibinde yerel bilgimizi ve teknik uzmanlığımızı birlikte kullanarak işletmelerin yaptırım risklerini azaltıyoruz.",
    whyImportant:
      "Uşak'taki üretim tesisleri, deri işleme fabrikaları ve tekstil işletmeleri, Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın denetim kapsamındaki faaliyetler arasında yer almaktadır. Hem deşarj standartları hem de atık yönetimi mevzuatı açısından sık güncellenen düzenlemeler, bu işletmelerin sürekli ve profesyonel çevre danışmanlığı desteğine ihtiyaç duymasını kaçınılmaz kılmaktadır. LWG (Leather Working Group) sertifikasyon sürecine giren deri fabrikaları için de özelleşmiş teknik destek verilmektedir.",
    sectors: [
      "Deri işleme ve LWG sertifikasyonuna tabi fabrikalar",
      "Tekstil ve boya tesisleri",
      "Gıda üretim işletmeleri",
      "Geri dönüşüm ve atık bertaraf tesisleri",
      "Organize Sanayi Bölgesi üyeleri",
      "Tarım ve sulama projesi yürüten işletmeler",
      "Her ölçekteki imalat sanayi kuruluşları",
    ],
    processText:
      "Uşak'taki işletmeler için çevre süreci; mevcut çevre izin belgelerinin ve beyan takvimlerinin incelenmesiyle başlar. Eksik veya süresi dolan belgeler, yapılmamış beyanlar ve öncelikli yasal gereksinimler belirlenerek işletmeye özel bir çevre yönetim takvimi oluşturulur. Çevre İzin ve Lisans başvuruları, yıllık atık beyanı, hava emisyon beyanı ve tehlikeli madde beyanları dahil tüm zorunlu bildirimler ekibimiz tarafından düzenli takiple hazırlanır ve iletilir. Denetim öncesi hazırlık çalışmaları ve eksik belge tespiti de sürece dahildir.",
    nasApproach:
      "Nas Çevre Danışmanlık, Uşak merkezli kadrosuyla Uşak OSB ve çevre ilçelerdeki işletmelere yerinde saha desteği sağlamaktadır. Yerel Çevre ve Şehircilik İl Müdürlüğü ile koordineli çalışma deneyimine sahip ekibimiz, başvuruların doğru ve zamanında tamamlanmasını güvence altına almaktadır. Anlık mevzuat güncellemelerini izleyerek işletmenizi önceden bilgilendiriyor; denetim baskısı değil, rutin süreç yönetimi anlayışıyla çalışıyoruz.",
    nearbyRegionSlugs: [
      "kutahya-cevre-danismanlik",
      "afyonkarahisar-cevre-danismanlik",
      "manisa-cevre-danismanlik",
    ],
    faqs: [
      {
        q: "Uşak'ta hangi işletmeler çevre danışmanlığına ihtiyaç duyar?",
        a: "Başta deri işleme, tekstil, gıda ve geri dönüşüm sektörleri olmak üzere çevre izni veya lisansı gerektiren tüm işletmeler çevre danışmanlığı hizmetine ihtiyaç duyar. Uşak'taki Organize Sanayi Bölgesi üyeleri ve atık üretim kapasitesi belirli eşiğin üzerindeki tesisler de bu kapsamda değerlendirilir.",
      },
      {
        q: "Uşak'ta çevre izin ve lisans süreci nasıl ilerler?",
        a: "Önce işletmenin faaliyet kapasitesi ve türü belirlenerek E-ÇÖZÜM sistemi üzerinden başvuru yapılır. Başvuruya uygun teknik belgeler (emisyon ölçümleri, atık beyanları, proses açıklamaları) hazırlanır. Bakanlık incelemesi tamamlandıktan sonra çevre izni veya lisansı düzenlenir. Nas Çevre bu sürecin tamamını koordineli biçimde yönetir.",
      },
      {
        q: "Uşak deri sektörü için LWG sertifikasyonunda çevre danışmanı rolü nedir?",
        a: "LWG denetimlerinde çevre yönetim sistemi, atık su deşarj standartları, kimyasal kullanım kayıtları ve enerji tüketimi belgeleri incelenmektedir. Nas Çevre, bu gereksinimlere uygun teknik hazırlık, boşluk analizi ve iyileştirme planı konularında destek sağlamaktadır.",
      },
      {
        q: "Yıllık atık beyanı için neler gereklidir?",
        a: "Beyan için işletmenizin yıl içinde ürettiği her atık türünü (tehlikeli/tehlikesiz) kodlu olarak takip etmiş olmanız gerekir. Beyan, her yıl Ocak–Mart döneminde Çevre Bilgi Sistemi üzerinden yapılır. Nas Çevre, atık takibi ve beyan sürecini başından sonuna kadar yönetir.",
      },
      {
        q: "Uşak'taki işletmelerde denetim nasıl gerçekleşir?",
        a: "Uşak Çevre ve Şehircilik İl Müdürlüğü rutin ve şikâyete dayalı denetimler gerçekleştirir. Denetimde çevre izin belgesi, atık takip formları, emisyon ölçüm raporları, tehlikeli madde beyanları ve tesis içi çevre düzenlemeleri incelenir. Nas Çevre, işletmeleri denetim öncesinde kapsamlı biçimde hazırlar.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. Kütahya
  // ─────────────────────────────────────────
  {
    slug: "kutahya-cevre-danismanlik",
    city: "Kütahya",
    metaTitle: "Kütahya Çevre Danışmanlık Hizmetleri | Nas Çevre",
    metaDescription:
      "Kütahya'da çevre izin ve lisans, atık yönetimi, ÇED danışmanlığı ve denetim hazırlığı hizmetleri. Seramik, madencilik ve enerji sektörlerine özel çevre danışmanlığı.",
    h1: "Kütahya Çevre Danışmanlık Hizmetleri",
    introParagraph1:
      "Kütahya; seramik ve porselen üretimi, madencilik, enerji santralleri ve organize sanayi faaliyetlerinin bir arada yürütüldüğü, sanayileşme açısından önemli bir ildir. Bu sektörel çeşitlilik; çevre izin ve lisans süreçlerini, atık yönetimini ve hava emisyonu beyanlarını karmaşık hale getirmekte, işletmelerin profesyonel destek almasını zorunlu kılmaktadır.",
    introParagraph2:
      "Nas Çevre Danışmanlık Mühendislik, Uşak'a yakın konumuyla Kütahya'daki işletmelere hem yerinde hem de uzaktan danışmanlık hizmeti sunmaktadır. Mevzuatın düzenli takibi, beyan süreçlerinin zamanında yönetilmesi ve denetim hazırlığı konularında deneyimli ekibimizle çalışıyoruz.",
    whyImportant:
      "Kütahya'da faaliyet gösteren seramik fabrikaları ve madencilik işletmeleri, hem hava emisyonları hem de endüstriyel atık yönetimi açısından yoğun mevzuat yükümlülüğü altındadır. Termik santral kaynaklı çevre etkileri ve maden sahalarının rehabilitasyonu da bölgede öne çıkan çevre yönetim başlıklarındandır. Tüm bu alanlarda güncel mevzuata uyum, işletmelerin sürekliliği açısından kritik önem taşımaktadır.",
    sectors: [
      "Seramik ve porselen üretim tesisleri",
      "Madencilik ve taşocağı işletmeleri",
      "Termik ve yenilenebilir enerji tesisleri",
      "Organize Sanayi Bölgesi üyeleri",
      "Kâğıt ve ambalaj üretim tesisleri",
      "Gıda ve tarımsal işleme işletmeleri",
      "Kimya ve boya üreticileri",
    ],
    processText:
      "Kütahya'daki işletmeler için süreç; faaliyet türünün ve kapasitenin doğru sınıflandırılmasıyla başlar. Çevre izni gerektiren faaliyetler E-ÇÖZÜM sistemi üzerinden başvuruya hazır hale getirilir; hava emisyonu, atık su deşarjı ve gürültü gibi teknik parametreler ölçüm yaptırılarak belgelenir. Yıllık beyanlar (atık, emisyon, tehlikeli madde) işletme takvimli olarak planlanır. Denetim dönemlerinde belgeler güncellenir ve eksik tespitler giderilir.",
    nasApproach:
      "Nas Çevre Danışmanlık, Kütahya ilindeki işletmelere Uşak'tan hızlı erişim ve periyodik saha ziyaretleriyle destek vermektedir. Seramik ve madencilik sektörlerine özgü çevre süreçleri genel danışmanlıktan farklı teknik bilgi gerektirmektedir; ekibimiz bu alanlarda deneyim sahibidir. Uzaktan takip süreçleriyle de kesintisiz danışmanlık güvencesi sunulmaktadır.",
    nearbyRegionSlugs: [
      "usak-cevre-danismanlik",
      "afyonkarahisar-cevre-danismanlik",
      "manisa-cevre-danismanlik",
    ],
    faqs: [
      {
        q: "Kütahya'da çevre izin ve lisans süreci nasıl ilerler?",
        a: "İşletmenin faaliyet türü ve kapasitesi belirlenerek Ek-1 veya Ek-2 listesinden hangisine girdiği tespit edilir. E-ÇÖZÜM sistemi üzerinden başvuru yapılır; emisyon, atık ve gürültü ölçüm raporları sisteme yüklenir. Bakanlık incelemesinin ardından çevre izni ve gerekiyorsa lisans düzenlenir. Nas Çevre tüm bu adımları koordine eder.",
      },
      {
        q: "Kütahya'daki seramik fabrikaları için hangi çevre yükümlülükleri geçerlidir?",
        a: "Seramik üretiminde fırın kaynaklı hava emisyonları, proses atıksuları ve sırçalama atıkları başlıca çevre etkileridir. İşletmeler; hava emisyon ölçümü, atıksu deşarj izni, tehlikeli atık beyanı ve yıllık atık bildirimi yapmakla yükümlüdür. Kapasite eşiğine göre çevre izni veya lisansı da gerekebilir.",
      },
      {
        q: "Madencilik işletmeleri için ÇED zorunluluğu ne zaman ortaya çıkar?",
        a: "Belirli kapasite ve alanda açılan taşocakları ve maden sahaları, ÇED Yönetmeliği kapsamında değerlendirilir. Ek-1 listesindeki projeler ÇED raporu hazırlatmak; Ek-2 listesindekiler ise ÇED Gerekli Değildir kararı almak zorundadır. Nas Çevre bu ayrımı yaparak ilgili süreci başlatır.",
      },
      {
        q: "Kütahya'da sıfır atık sistemi kurmak ne kadar sürer?",
        a: "İşletmenin boyutu ve mevcut atık yönetimi altyapısına bağlı olarak değişmekle birlikte, orta ölçekli bir tesis için Sıfır Atık Belgesi başvurusu genellikle 2–4 ay sürmektedir. Atık ayrıştırma, depolama alanı düzenleme ve kayıt tutma süreçleri tamamlandıktan sonra başvuru yapılır.",
      },
      {
        q: "Kütahya'da çevre denetimlerinde en sık rastlanan eksiklikler nelerdir?",
        a: "Süresi geçmiş çevre izin belgeleri, zamanında yapılmamış yıllık beyanlar, tehlikeli atık takip formlarındaki eksiklikler ve emisyon ölçüm raporlarının güncel olmaması en sık rastlanan sorunlardır. Nas Çevre, periyodik durum değerlendirmeleriyle bu riskleri önceden giderir.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. Afyonkarahisar
  // ─────────────────────────────────────────
  {
    slug: "afyonkarahisar-cevre-danismanlik",
    city: "Afyonkarahisar",
    metaTitle: "Afyonkarahisar Çevre Danışmanlık Hizmetleri | Nas Çevre",
    metaDescription:
      "Afyonkarahisar'da mermer, doğal taş, termal otel ve gıda sektörlerine çevre danışmanlığı, izin ve lisans, atık yönetimi ve ÇED hizmetleri.",
    h1: "Afyonkarahisar Çevre Danışmanlık Hizmetleri",
    introParagraph1:
      "Afyonkarahisar; mermer ve doğal taş sektörünün Türkiye'deki merkezi konumundadır. Bunun yanı sıra termal turizm, gıda üretimi ve madencilik alanlarındaki yoğun sanayi faaliyeti, bölgedeki işletmeleri kapsamlı çevre yükümlülükleri kapsamına sokmaktadır. Hem üretim hem çevre mevzuatı açısından sık değişen düzenlemeler, işletmelerin sürekli takip ve profesyonel destek gerektirdiği anlamına gelmektedir.",
    introParagraph2:
      "Nas Çevre Danışmanlık Mühendislik, Afyonkarahisar'daki işletmelere; çevre izin ve lisans başvurusu, ÇED süreci, atık yönetimi, beyan takibi ve denetim hazırlığı konularında yerinde ve uzaktan danışmanlık sunmaktadır. Bölgenin sektörel özelliklerine hâkim ekibimiz, işletmelerin yasal süreçlerini karmaşıklaşmadan yönetmelerine destek olmaktadır.",
    whyImportant:
      "Afyonkarahisar'daki mermer işleme tesisleri ve taşocakları, hem maden mevzuatı hem de çevre mevzuatı kapsamında çift yükümlülük taşımaktadır. Termal oteller ise atıksu yönetimi ve tehlikeli atık beyanı konularında sıkı mevzuat gereksinimlerine tabi tutulmaktadır. Gıda tesisleri ve tarımsal işletmeler de periyodik beyan ve denetim yükümlülükleri nedeniyle düzenli danışmanlık desteğine ihtiyaç duymaktadır.",
    sectors: [
      "Mermer ve doğal taş işleme tesisleri",
      "Taşocakları ve maden sahaları",
      "Termal oteller ve kaplıca işletmeleri",
      "Gıda ve tarımsal ürün işleme tesisleri",
      "Sanayi bölgelerindeki üretim işletmeleri",
      "Kimya ve boya işletmeleri",
      "Tarımsal sulama ve arazi işleme projeleri",
    ],
    processText:
      "Afyonkarahisar'daki işletmeler için çevre süreci, faaliyet türü ve kapasite sınıflandırmasıyla başlar. Mermer ve taşocakları için hem ÇED hem de çevre izni değerlendirmesi yapılır; termal oteller için atıksu ve tehlikeli atık yükümlülükleri belirlenir. Tüm beyan takvimleri işletme bazında planlanarak yıllık döngü oluşturulur. Denetim hazırlığı kapsamında eksik belgeler tespit edilip tamamlanır.",
    nasApproach:
      "Nas Çevre Danışmanlık, Afyonkarahisar'daki işletmelere Uşak merkezinden sağlanan hızlı erişim ve periyodik saha ziyaretleriyle destek vermektedir. Bölgeye özgü sektörel deneyimimiz, işletmelere standart bir çevre danışmanlığının ötesinde, sürece özgü ve öngörülü bir hizmet sunmamıza olanak tanımaktadır.",
    nearbyRegionSlugs: [
      "usak-cevre-danismanlik",
      "kutahya-cevre-danismanlik",
      "denizli-cevre-danismanlik",
    ],
    faqs: [
      {
        q: "Afyonkarahisar'da mermer ve doğal taş işletmeleri için hangi çevre süreçleri gereklidir?",
        a: "Mermer işleme ve taşocağı faaliyetleri için proje büyüklüğüne göre ÇED veya ÇED Gerekli Değildir kararı alınması gerekir. Bunun yanı sıra çevre izni, tozuma ve gürültü yönetimi için teknik önlemler, atık taş ve çamur yönetimi ile arazi rehabilitasyon planı gerekebilir.",
      },
      {
        q: "Termal oteller ve kaplıca işletmeleri için çevre yükümlülükleri nelerdir?",
        a: "Termal oteller; jeotermal akışkan deşarjı, havuz kimyasallarının atıksu yönetimi ve tesis kaynaklı atıklar açısından mevzuat kapsamındadır. Yıllık atık beyanı, tehlikeli madde beyanı ve gerekiyorsa çevre izni zorunludur.",
      },
      {
        q: "Afyonkarahisar'da ÇED süreci ne kadar sürer?",
        a: "ÇED Gerekli Değildir kararı genellikle 2–4 ay, ÇED raporu gerektiren projeler için ise 6–18 ay arası değişen süreçler söz konusudur. Projenin kapsamı ve hazırlanan teknik belgelerin kalitesi süreci doğrudan etkiler.",
      },
      {
        q: "Afyonkarahisar'daki gıda tesisleri için atık yönetimi nasıl yapılandırılır?",
        a: "Gıda tesisleri; organik atık, ambalaj atığı ve tehlikeli atık ayrıştırması yapmak zorundadır. Yıllık atık beyanı, lisanslı atık taşıyıcı ile sözleşme ve tehlikeli atık takip formu tutmak temel gereksinimlerdir.",
      },
      {
        q: "Sıfır Atık Yönetmeliği Afyonkarahisar'daki işletmeleri nasıl etkiliyor?",
        a: "Belirli kapasitenin üzerindeki işletmeler için Sıfır Atık Belgesi zorunlu tutulmuştur. Bu belge için atık ayrıştırma altyapısı kurulması, kayıt sistemi oluşturulması ve denetime hazır belge dosyası tutulması gerekir.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. Denizli
  // ─────────────────────────────────────────
  {
    slug: "denizli-cevre-danismanlik",
    city: "Denizli",
    metaTitle: "Denizli Çevre Danışmanlık Hizmetleri | Nas Çevre",
    metaDescription:
      "Denizli'de tekstil, sanayi ve ihracat sektörlerine çevre danışmanlığı, izin ve lisans, atık yönetimi, ÇED ve denetim hazırlığı hizmetleri.",
    h1: "Denizli Çevre Danışmanlık Hizmetleri",
    introParagraph1:
      "Denizli; Türkiye'nin en büyük tekstil ihracat merkezlerinden biri olup hem dokuma hem de boya-apre tesisleri açısından yoğun çevre yükümlülüğü taşıyan işletmelere ev sahipliği yapmaktadır. Uluslararası ihracat yapan fabrikaların çevre standartlarına uyumu; yalnızca yasal zorunluluk değil, aynı zamanda ticari rekabet gücü açısından da kritik bir gereklilik haline gelmiştir.",
    introParagraph2:
      "Nas Çevre Danışmanlık Mühendislik, Denizli'deki tekstil, enerji ve sanayi işletmelerine çevre izin ve lisans süreci, atık yönetimi, ÇED danışmanlığı ve denetim hazırlığı konularında profesyonel destek sunmaktadır. Denizli'nin üretim yoğunluğunu ve mevzuat gereksinimlerini bilen ekibimiz, işletmelerin hem yasal uyumunu hem de uluslararası denetim hazırlığını birlikte yönetmektedir.",
    whyImportant:
      "Denizli'deki tekstil ve boya tesisleri, atıksu deşarjı açısından Türkiye'nin en sıkı mevzuat gereksinimlerine tabi sektörler arasındadır. Organize sanayi bölgelerindeki ortak arıtma sistemleri ile bireysel tesis bazındaki deşarj standartları arasındaki fark, doğru teknik danışmanlık olmadan yönetilmesi güç bir yükümlülük tablosu oluşturmaktadır. İhracat yapan işletmeler ise uluslararası alıcıların talep ettiği çevre uyum belgelerine ek olarak yerel mevzuat uyumunu da sağlamak zorundadır.",
    sectors: [
      "Tekstil, dokuma ve iplik üretim tesisleri",
      "Boya, baskı ve apre fabrikaları",
      "İhracat odaklı üretim işletmeleri",
      "Organize Sanayi Bölgesi üyeleri",
      "Enerji üretim ve dağıtım tesisleri",
      "Gıda ve tarımsal işleme işletmeleri",
      "Mermer ve doğal taş işletmeleri",
    ],
    processText:
      "Denizli'deki işletmeler için süreç, atıksu deşarjı ve hava emisyonu öncelikli olmak üzere tesisin çevre etkilerinin sınıflandırılmasıyla başlar. Çevre İzin ve Lisans başvurusu için gerekli ölçüm ve belgeler hazırlanır. İzleme, beyan ve raporlama takvimi oluşturulur. Uluslararası alıcı denetimlerine yönelik çevre dokümanları da bu süreçte desteklenmektedir.",
    nasApproach:
      "Nas Çevre Danışmanlık, Denizli sanayi ve tekstil sektörünün çevre süreçlerini teknik derinlikle yöneten, yerinde ve uzaktan hizmet veren bir ekibe sahiptir. Denizli'deki işletmelerin hem Türk mevzuatına hem de uluslararası alıcı gereksinimlerine eş zamanlı uyumunu sağlamak için bütünleşik bir danışmanlık yaklaşımı benimsiyoruz.",
    nearbyRegionSlugs: [
      "afyonkarahisar-cevre-danismanlik",
      "mugla-cevre-danismanlik",
      "aydin-cevre-danismanlik",
    ],
    faqs: [
      {
        q: "Denizli'de tekstil işletmeleri için hangi çevre yükümlülükleri geçerlidir?",
        a: "Denizli'deki tekstil ve boya tesisleri; atıksu deşarj standardı, hava emisyonu ölçümü, tehlikeli kimyasal beyanı, yıllık atık beyanı ve çevre izin/lisansı gereksinimlerine tabidir. OSB'de yer alan tesisler ortak arıtma sistemini kullanmakla birlikte bireysel izleme yükümlülükleri de devam eder.",
      },
      {
        q: "Denizli'de çevre izin ve lisans başvurusu nasıl yapılır?",
        a: "E-ÇÖZÜM Çevre Bilgi Sistemi üzerinden başvuru açılır; faaliyet kategorisi belirlendikten sonra tesis bilgileri, teknik belgeler ve ölçüm raporları sisteme yüklenir. Başvurunun tam ve doğru hazırlanması, onay süresini doğrudan etkiler.",
      },
      {
        q: "Uluslararası alıcı denetimleri için çevre uyum belgeleri nasıl hazırlanır?",
        a: "BSCI, OEKO-TEX, bluesign gibi uluslararası denetimler; kimyasal yönetimi, atıksu standartları ve çevre politikası belgelerini incelemektedir. Nas Çevre, bu denetime özgü boşluk analizi yaparak eksik belgelerin tamamlanmasında ve çevre yönetim sistemi kurulumunda destek verir.",
      },
      {
        q: "Denizli'de atıksu deşarjı için hangi standartlar geçerlidir?",
        a: "Su Kirliliği Kontrolü Yönetmeliği kapsamında tekstil atıksularına özgü parametre sınırları uygulanmaktadır. OSB dışındaki tesislerin deşarjı doğrudan alıcı ortama ise çok daha sıkı sınır değerlere uymak gerekir.",
      },
      {
        q: "Denizli'de sıfır atık belgesi almak zorunlu mu?",
        a: "Belirli kapasite ve faaliyet türündeki işletmeler için Sıfır Atık Belgesi zorunlu hale gelmiştir. Belge için atık ayrıştırma altyapısı, kayıt sistemi ve yönetim planı hazırlanması gerekmektedir.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. Manisa
  // ─────────────────────────────────────────
  {
    slug: "manisa-cevre-danismanlik",
    city: "Manisa",
    metaTitle: "Manisa Çevre Danışmanlık Hizmetleri | Nas Çevre",
    metaDescription:
      "Manisa'da sanayi ve organize sanayi bölgelerine çevre danışmanlığı, izin ve lisans, atık yönetimi, ÇED ve denetim hazırlığı hizmetleri.",
    h1: "Manisa Çevre Danışmanlık Hizmetleri",
    introParagraph1:
      "Manisa; Türkiye'nin önde gelen sanayi illerinden biridir. Elektronik, otomotiv yan sanayi, tarım ve gıda işleme, tekstil ve lojistik gibi birbirinden farklı sektörler aynı organize sanayi ekosisteminde bir arada faaliyet göstermektedir. Bu çeşitli sektörel yapı; atık yönetimi, emisyon beyanı ve çevre izin süreçleri açısından her işletmenin bireysel değerlendirme gerektirdiği karmaşık bir mevzuat tablosu oluşturmaktadır.",
    introParagraph2:
      "Nas Çevre Danışmanlık Mühendislik, Manisa'daki sanayi işletmelerine çevre izin ve lisans, ÇED süreci, atık yönetimi, yıllık beyan takibi ve denetim hazırlığı konularında sistematik destek sunmaktadır. Manisa Organize Sanayi Bölgeleri'ndeki işletmelerin çevre yükümlülüklerini doğru ve zamanında yerine getirmeleri için teknik uzmanlığımızı ve yerel deneyimimizi birlikte kullanıyoruz.",
    whyImportant:
      "Manisa'daki büyük sanayi tesisleri; hem bakanlık denetimi hem de OSB yönetimi denetimi kapsamında çift taraflı izlemeye tabi tutulmaktadır. Elektronik ve otomotiv yan sanayisindeki tehlikeli kimyasal kullanımı, tarım-gıda sektöründeki organik atık yönetimi ve lojistik depolama alanlarındaki ambalaj atığı yükümlülükleri bölgede öne çıkan çevre yönetim başlıklarındandır.",
    sectors: [
      "Elektronik ve beyaz eşya üretim tesisleri",
      "Otomotiv yan sanayi işletmeleri",
      "Tarım ve gıda işleme tesisleri",
      "Organize Sanayi Bölgesi üyeleri",
      "Lojistik ve depolama alanları",
      "Tekstil ve hazır giyim üreticileri",
      "Kimya ve ambalaj sanayi",
    ],
    processText:
      "Manisa'daki işletmeler için çevre yönetim süreci; önce faaliyet kapsamı ve tehlikeli madde envanterinin çıkarılmasıyla başlar. Her birimin atık türü, emisyon kaynağı ve deşarj noktası belirlenir. İzin başvurusu ve yıllık beyan takvimleri oluşturulur. OSB yönetiminin talep ettiği belgeler ile bakanlık gereksinimleri eş zamanlı planlanarak boşluk bırakılmadan yönetilir.",
    nasApproach:
      "Nas Çevre Danışmanlık, Manisa'daki çok sektörlü sanayi yapısına uygun esnek bir danışmanlık modeli benimsemektedir. Kısa mesafe avantajıyla Uşak'tan kolayca erişilebilen Manisa'da hem yerinde saha değerlendirmeleri hem de uzaktan süreç takibi sunulmaktadır. İşletmenizin OSB yönetimi ile bakanlık arasındaki belge akışını da koordine ediyoruz.",
    nearbyRegionSlugs: [
      "usak-cevre-danismanlik",
      "izmir-cevre-danismanlik",
      "kutahya-cevre-danismanlik",
    ],
    faqs: [
      {
        q: "Manisa OSB'deki işletmelerin çevre izin yükümlülükleri nelerdir?",
        a: "Manisa Organize Sanayi Bölgesi'ndeki işletmeler; hem OSB yönetiminin çevre koşullarını hem de Bakanlık'ın Çevre İzin ve Lisans yükümlülüklerini ayrı ayrı karşılamak zorundadır. Ortak atıksu arıtma tesisine bağlantı koşullarına uyum ve bireysel emisyon ölçüm yükümlülükleri bu kapsamda değerlendirilir.",
      },
      {
        q: "Manisa'da tehlikeli atık yönetimi nasıl yapılmalıdır?",
        a: "Tehlikeli atık için lisanslı geçici depolama alanı kurulması, atık kodu bazında kayıt tutulması ve lisanslı bertaraf/geri dönüşüm firmasıyla sözleşme yapılması zorunludur. Nas Çevre, tehlikeli atık envanteri ve depolama alanı standartları konusunda eksiksiz hazırlık sağlar.",
      },
      {
        q: "Manisa'da gıda işleme tesisleri için çevre yükümlülükleri nelerdir?",
        a: "Gıda tesisleri; organik atık yönetimi, atıksu arıtma, paket atık takibi ve yıllık atık beyanı açısından mevzuat kapsamındadır. Kapasite büyüklüğüne göre çevre izni gerekebilir.",
      },
      {
        q: "Manisa'da ÇED süreci hangi projeler için gereklidir?",
        a: "ÇED Yönetmeliği'nin Ek-1 listesindeki büyük ölçekli projeler ÇED raporu hazırlatmak zorundadır. Ek-2 listesindekiler ise ÇED Gerekli Değildir kararı alarak süreci tamamlar. Nas Çevre, projenin hangi kategoriye girdiğini baştan belirler.",
      },
      {
        q: "Manisa'da lojistik ve depolama tesisleri için çevre gereksinimleri var mı?",
        a: "Evet. Lojistik depolama alanlarında ambalaj atığı yönetimi, tehlikeli madde depolama standartları ve sıfır atık belgesi yükümlülükleri oluşabilmektedir. İşletmenin faaliyetine göre çevre izni de gerekebilir.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. İzmir
  // ─────────────────────────────────────────
  {
    slug: "izmir-cevre-danismanlik",
    city: "İzmir",
    metaTitle: "İzmir Çevre Danışmanlık Hizmetleri | Nas Çevre",
    metaDescription:
      "İzmir'de sanayi, liman, gıda ve turizm sektörlerine çevre danışmanlığı, izin ve lisans, atık yönetimi, ÇED ve denetim hazırlığı hizmetleri.",
    h1: "İzmir Çevre Danışmanlık Hizmetleri",
    introParagraph1:
      "İzmir; Türkiye'nin üçüncü büyük şehri olarak geniş bir sektörel yelpazede faaliyet gösteren işletmelere ev sahipliği yapmaktadır. Liman ve lojistik, organize sanayi, gıda üretimi, turizm ve ihracat odaklı imalat sanayi; çevre mevzuatı açısından birbirinden farklı yükümlülük tablolarına sahiptir. Bu çeşitlilik, her işletmenin kendi faaliyet kapsamına özgü, özelleştirilmiş bir çevre yönetim yaklaşımını zorunlu kılmaktadır.",
    introParagraph2:
      "Nas Çevre Danışmanlık Mühendislik, İzmir'deki işletmelere çevre izin ve lisans başvurusu, ÇED süreci, atık yönetimi, beyan takibi ve denetim hazırlığı konularında uzaktan ve periyodik yerinde danışmanlık hizmeti sunmaktadır. Büyük ölçekli ve karmaşık çevre süreçlerinde deneyim sahibi mühendislik kadromuzla İzmir'deki işletmelerin yanındayız.",
    whyImportant:
      "İzmir Aliağa'daki petrokimya ve rafineri tesisleri, Ege Serbest Bölgesi'ndeki üretim işletmeleri ve OSB'lerdeki imalat sanayii; ülkemizin en yoğun çevre denetimi yapılan sektörleri arasında yer almaktadır. Turizm işletmeleri atıksu ve tehlikeli madde yönetimi açısından, ihracat yapan fabrikalar ise hem yerel mevzuat hem uluslararası alıcı standartları açısından çift yükümlülük taşımaktadır.",
    sectors: [
      "Petrokimya, rafineri ve büyük sanayi tesisleri",
      "Liman ve lojistik işletmeleri",
      "Organize Sanayi Bölgesi üyeleri",
      "Gıda ve içecek üretim tesisleri",
      "Turizm ve otel işletmeleri",
      "İhracat odaklı imalat sanayi",
      "Geri dönüşüm ve çevre hizmet işletmeleri",
    ],
    processText:
      "İzmir'deki işletmeler için çevre süreci; tesisin faaliyetinin doğru kategorize edilmesiyle başlar. Büyük ölçekli tesislerde Entegre Çevre İzni veya standart Çevre İzin ve Lisansı'nın hangisinin gerektiği belirlenerek başvuru aşamasına geçilir. ÇED gereksinimleri ayrıca değerlendirilir. Yıllık beyan takvimi oluşturulur. İzmir'in yüksek denetim kapasitesi nedeniyle belge güncelliği ve denetim hazırlığına özel önem gösterilir.",
    nasApproach:
      "Nas Çevre Danışmanlık, İzmir'deki işletmelere uzaktan danışmanlık ve planlı yerinde ziyaret modeliyle hizmet vermektedir. Büyük ölçekli ve karmaşık süreçlerde deneyimli mühendislik kadromuz devreye girer; küçük ve orta ölçekli işletmeler için ise verimli ve sürdürülebilir bir çevre yönetim düzeni kuruyoruz.",
    nearbyRegionSlugs: [
      "manisa-cevre-danismanlik",
      "aydin-cevre-danismanlik",
      "mugla-cevre-danismanlik",
    ],
    faqs: [
      {
        q: "İzmir'de büyük sanayi tesisleri için Entegre Çevre İzni zorunlu mu?",
        a: "Evet. Belirli sektörlerde ve kapasitelerde faaliyet gösteren büyük tesisler Entegre Çevre İzni kapsamında değerlendirilmektedir. Bu belge; hava, su, atık ve gürültü gibi tüm çevre etkilerini tek belge altında toplar ve daha kapsamlı teknik belgeleme gerektirir.",
      },
      {
        q: "İzmir Aliağa'daki sanayi tesisleri için çevre süreci nasıl işler?",
        a: "Aliağa'daki tesisler büyük ölçekli ve yüksek çevre etkili faaliyetler olduğundan hem ÇED hem de Çevre İzin ve Lisansı süreçlerini ayrı ayrı yönetmek gerekebilir. Periyodik emisyon ölçümleri, atıksu izleme ve tehlikeli madde beyanları bu tesisler için rutin yükümlülüklerdir.",
      },
      {
        q: "İzmir'de turizm ve otel işletmeleri için çevre yükümlülükleri nelerdir?",
        a: "Otel ve turizm tesisleri; atıksu arıtma veya deşarj standardı, tehlikeli atık beyanı, ambalaj atığı yönetimi ve sıfır atık belgesi yükümlülüklerine tabidir. Ege kıyısındaki tesisler için deşarj standartları ek kısıtlamalar içerebilir.",
      },
      {
        q: "İzmir'deki ihracat yapan fabrikalar için uluslararası çevre standartları nasıl yönetilir?",
        a: "İhracat yapan firmalar; Türk mevzuatına uyum yanı sıra alıcıların talep ettiği BSCI, ISO 14001, REACH/KKDİK veya sektöre özgü çevre standartlarını da karşılamak zorundadır. Nas Çevre, her iki gereksinim setini birlikte değerlendirerek bütünleşik bir uyum stratejisi oluşturur.",
      },
      {
        q: "İzmir'de çevre denetimine nasıl hazırlanılır?",
        a: "İzmir, yoğun sanayi faaliyeti nedeniyle Bakanlık'ın öncelikli denetim illerinden biridir. Denetim hazırlığı; çevre izin belgesinin güncelliği, atık takip formları, emisyon ölçüm raporları ve tehlikeli madde beyanlarının gözden geçirilmesini kapsar.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // 7. Aydın
  // ─────────────────────────────────────────
  {
    slug: "aydin-cevre-danismanlik",
    city: "Aydın",
    metaTitle: "Aydın Çevre Danışmanlık Hizmetleri | Nas Çevre",
    metaDescription:
      "Nas Çevre Danışmanlık Mühendislik; Aydın'daki gıda, tarım ve sanayi işletmelerine çevre danışmanlığı, çevre izin ve lisans, atık yönetimi ve denetim hazırlığı hizmetleri sunar.",
    h1: "Aydın Çevre Danışmanlık Hizmetleri",
    introParagraph1:
      "Tarımsal üretim, gıda işleme ve zeytinyağı sektörünün güçlü bir ekonomik temel oluşturduğu Aydın'da sanayi işletmeleri ve tarımsal üretim tesisleri kapsamlı çevre mevzuatı yükümlülükleriyle karşı karşıyadır. Atık su yönetimi, ambalaj atığı bildirimi ve tehlikeli atık beyanı bu sektörlerde öne çıkan başlıca çevre yönetim konularıdır.",
    introParagraph2:
      "Nas Çevre Danışmanlık Mühendislik, Aydın'daki gıda üretim tesisleri, tarımsal işleme işletmeleri ve sanayi kuruluşlarına çevre izin ve lisans süreci, atık yönetimi, beyan takibi ve denetim hazırlığı konularında profesyonel destek sunmaktadır.",
    whyImportant:
      "Aydın'daki zeytinyağı, konserve ve işlenmiş gıda tesisleri; üretim süreçlerinden kaynaklanan organik atık yükü, atık su deşarjı ve ambalaj atığı yönetimi açısından mevzuat kapsamındadır. İhracata yönelik gıda üretim tesisleri ayrıca uluslararası alıcı ve sertifikasyon kuruluşlarının çevresel standart gereksinimlerini karşılamak zorundadır. Organize sanayi bölgelerindeki üretim işletmeleri ise çevre izin ve lisans yükümlülüğü altındadır.",
    sectors: [
      "Zeytinyağı ve işlenmiş zeytin üretim tesisleri",
      "Konserve ve tarımsal gıda işleme işletmeleri",
      "Tekstil ve hazır giyim üreticileri",
      "Sanayi işletmeleri ve üretim tesisleri",
      "Turizm ve konaklama işletmeleri",
      "Tarımsal sulama ve arazi işleme projeleri",
      "Geri dönüşüm ve atık yönetim firmaları",
    ],
    processText:
      "Aydın'daki işletmeler için süreç, faaliyet türünün ve atık üretim kapasitesinin sınıflandırılmasıyla başlar. Gıda ve tarımsal işleme tesisleri için atık su deşarjı, organik atık bertarafı ve ambalaj atığı yükümlülükleri belirlenerek beyan takvimi oluşturulur. Çevre izin ve lisansı gerektiren işletmeler için başvuru dosyası hazırlanır. Denetim öncesi eksik belgeler tespit edilerek tamamlanır.",
    nasApproach:
      "Nas Çevre Danışmanlık, Aydın'daki işletmelere gıda ve tarım sektörünün çevre mevzuatı gereksinimlerine hâkim ekibiyle uzaktan ve periyodik yerinde destek sunmaktadır. Aydın'ın tarıma dayalı ekonomik yapısı ve sanayi işletmelerinin çeşitli çevre yükümlülüklerini birlikte yönetmek için kapsamlı bir yaklaşım benimsiyoruz.",
    nearbyRegionSlugs: [
      "izmir-cevre-danismanlik",
      "denizli-cevre-danismanlik",
      "mugla-cevre-danismanlik",
    ],
    faqs: [
      {
        q: "Aydın'da zeytinyağı ve gıda tesisleri için hangi çevre yükümlülükleri geçerlidir?",
        a: "Gıda işleme tesisleri; organik atık yönetimi, ambalaj atığı bildirimi ve atıksu deşarjı konularında mevzuat kapsamındadır. Kapasite büyüklüğüne göre yıllık atık beyanı ve çevre izni de gerekebilir. Zeytinyağı üretim tesisleri için karasu (jif) yönetimi özel dikkat gerektiren bir konudur.",
      },
      {
        q: "Aydın'da çevre izin ve lisans başvurusu nasıl yapılır?",
        a: "Faaliyet türü ve tesis kapasitesi değerlendirilerek E-ÇÖZÜM sistemi üzerinden başvuru yapılır. Gerekli teknik belgeler hazırlanarak sisteme yüklenir. Nas Çevre, bu sürecin tamamını koordineli biçimde yönetir.",
      },
      {
        q: "Aydın'daki turizm tesisleri için çevre gereksinimleri var mı?",
        a: "Evet. Konaklama ve turizm işletmeleri; tehlikeli atık beyanı, atıksu yönetimi, ambalaj atığı takibi ve sıfır atık belgesi kapsamında mevzuat yükümlülüğü taşıyabilir. Tesisin büyüklüğüne ve faaliyetine göre çevre izni de gerekebilir.",
      },
      {
        q: "Aydın'da sıfır atık belgesi için neler gereklidir?",
        a: "Sıfır atık belgesi; atık ayrıştırma altyapısı, kayıt sistemi ve yönetim planı hazırlanmasını gerektirmektedir. Belirli büyüklükteki tesisler için zorunlu olan bu belge, kapsam dışı işletmeler tarafından gönüllü olarak da alınabilir.",
      },
      {
        q: "Aydın'da çevre denetimlerine nasıl hazırlanılır?",
        a: "Denetim öncesinde çevre izin belgeleri, atık takip formları, beyanlar ve emisyon raporlarının güncelliği kontrol edilir. Eksik belgeler tamamlanır ve tesis içi çevre düzenlemeleri gözden geçirilir. Nas Çevre bu süreçte sistematik bir denetim hazırlık paketi sunar.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // 8. Muğla
  // ─────────────────────────────────────────
  {
    slug: "mugla-cevre-danismanlik",
    city: "Muğla",
    metaTitle: "Muğla Çevre Danışmanlık Hizmetleri | Nas Çevre",
    metaDescription:
      "Nas Çevre Danışmanlık Mühendislik; Muğla'daki turizm, otel ve sanayi işletmelerine çevre danışmanlığı, atık yönetimi, sıfır atık ve çevre izin hizmetleri sunar.",
    h1: "Muğla Çevre Danışmanlık Hizmetleri",
    introParagraph1:
      "Türkiye'nin önde gelen turizm destinasyonlarından biri olan Muğla; Bodrum, Marmaris, Fethiye ve Milas gibi ilçelerinde yoğun turizm, sanayi ve lojistik faaliyetlerine ev sahipliği yapmaktadır. Bu işletmeler, çevre mevzuatı kapsamında atık yönetimi, çevre izni ve sıfır atık belgesi gibi konularda artan düzenleyici yükümlülüklerle karşı karşıyadır.",
    introParagraph2:
      "Nas Çevre Danışmanlık Mühendislik, Muğla'daki turizm tesisleri, sanayi işletmeleri ve hizmet kuruluşlarına çevre izin ve lisans süreçleri, atık yönetimi, beyan takibi ve denetim hazırlığı konularında profesyonel destek sunmaktadır.",
    whyImportant:
      "Muğla'nın turizm odaklı ekonomisi; otel, tatil köyü ve marina işletmelerini çevre mevzuatı kapsamında kritik yükümlülükler altına sokmaktadır. Mavi Bayrak ve çevre kalite standartlarına uyum, bu işletmeler için rekabet avantajı sağlayan bir unsur haline gelmiştir. Aynı zamanda atıksu deşarjı ve tehlikeli atık yönetimi konularında bakanlık denetimlerine hazır olunması giderek zorunlu hale gelmektedir. Sanayi ve lojistik tesisler ise çevre beyanları ve izin süreçlerinde sistematik destek gerektirmektedir.",
    sectors: [
      "Otel, tatil köyü ve konaklama tesisleri",
      "Marina ve yat limanları",
      "Sağlık turizmi ve termal işletmeler",
      "Mermer ve doğal taş işleme tesisleri",
      "Sanayi ve üretim işletmeleri",
      "Lojistik ve depolama tesisleri",
      "Gıda ve içecek üretim işletmeleri",
    ],
    processText:
      "Muğla'daki işletmeler için süreç, faaliyet türüne göre öncelikli yükümlülüklerin belirlenmesiyle başlar. Turizm tesisleri için atıksu deşarjı, tehlikeli atık beyanı ve sıfır atık belgesi ön plana çıkar; sanayi işletmeleri için çevre izin ve lisans sürecine odaklanılır. Tüm beyan ve bildirim takvimleri işletme bazında planlanarak yıllık döngü oluşturulur. Denetim öncesi hazırlık kapsamında belgeler güncellenir ve eksiklikler giderilir.",
    nasApproach:
      "Nas Çevre Danışmanlık, Muğla'daki turizm ve sanayi işletmelerine uzaktan danışmanlık ve planlı yerinde ziyaret modeliyle hizmet vermektedir. Muğla'nın mevsimsel turizm yoğunluğu göz önünde bulundurularak beyan takvimleri ve denetim hazırlıkları önceden planlanmaktadır. Mavi Bayrak gereksinimlerinden çevre iznine kadar geniş bir çevre yönetim kapsamında işletmenizin yanındayız.",
    nearbyRegionSlugs: [
      "aydin-cevre-danismanlik",
      "denizli-cevre-danismanlik",
      "izmir-cevre-danismanlik",
    ],
    faqs: [
      {
        q: "Muğla'daki otel ve tatil köyleri için çevre yükümlülükleri nelerdir?",
        a: "Konaklama tesisleri; atıksu arıtma veya deşarj standardı, tehlikeli atık beyanı (kimyasal, yağ), ambalaj atığı yönetimi ve sıfır atık belgesi yükümlülüklerine tabidir. Sahil ve kıyı bölgelerindeki tesisler için deşarj standartları ek kısıtlamalar içerebilir.",
      },
      {
        q: "Muğla'da çevre izin ve lisans hangi işletmeler için zorunludur?",
        a: "Belirli emisyon veya deşarj kaynağı olan işletmeler çevre izni almakla yükümlüdür. Büyük tesislerde bu lisans kapsamına girebilir. Muğla'da özellikle enerji üretim, sanayi ve büyük konaklama zinciri işletmeleri bu kapsama dahil olabilmektedir.",
      },
      {
        q: "Mavi Bayrak sertifikası için çevre mevzuatına uyum yeterli mi?",
        a: "Mavi Bayrak, Türk çevre mevzuatına uyumun ötesinde ek gereksinimler içermektedir. Nas Çevre, hem yasal uyum hem de Mavi Bayrak ek gereksinimlerini karşılamak üzere bütünleşik destek sunmaktadır.",
      },
      {
        q: "Muğla'da sıfır atık belgesi nasıl alınır?",
        a: "Sıfır atık belgesi; atık ayrıştırma altyapısı, kayıt sistemi ve yönetim planı hazırlanmasını gerektirmektedir. Belirli büyüklükteki otel ve tesisler için zorunlu olan bu belge, kapsam altı tesisler tarafından gönüllü olarak da alınabilir. Nas Çevre tüm süreci yönetmektedir.",
      },
      {
        q: "Muğla'daki sanayi tesisleri için denetim süreci nasıl işler?",
        a: "Sanayi tesisleri; çevre izin belgeleri, atık beyanları ve teknik raporlar açısından Çevre ve Şehircilik İl Müdürlüğü tarafından denetlenmektedir. Denetim öncesinde belge güncelliği, atık takip formları ve emisyon ölçüm raporlarının eksiksizliği kontrol edilir. Nas Çevre bu hazırlığı sistematik biçimde yönetir.",
      },
    ],
  },
];
