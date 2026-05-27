export interface RegionSeo {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;    // 140-160 karakter
  h1: string;                 // Kurumsal görünür başlık (şehir adı şart değil)
  introParagraph1: string;
  introParagraph2: string;
  whyImportant: string;
  sectors: string[];          // 6-7 madde
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
    h1: "Çevre Süreçlerinizi Güvenle Yönetin",
    introParagraph1:
      "Uşak; tekstil, deri işleme ve gıda üretim sektörlerinin yoğun faaliyet gösterdiği, güçlü bir sanayi altyapısına sahip bir ildir. Bu sektörler, çevre mevzuatı kapsamında çok sayıda yasal yükümlülük doğurmakta; izin belgeleri, periyodik beyanlar, atık yönetimi ve teknik raporlama süreçleri düzenli ve sistematik biçimde yönetilmesi gereken bir bütünü oluşturmaktadır.",
    introParagraph2:
      "Nas Çevre Danışmanlık Mühendislik, Uşak merkezli konumuyla Uşak Organize Sanayi Bölgesi'ndeki ve merkez ile ilçelerindeki işletmelere sahada ve uzaktan destek sunmaktadır. Mevzuat uyumu, denetim hazırlığı ve süreç takibinde yerel bilgimizi ve teknik uzmanlığımızı birlikte kullanarak işletmelerin yaptırım risklerini azaltıyoruz.",
    whyImportant:
      "Uşak'taki üretim tesisleri, deri işleme fabrikaları ve tekstil işletmeleri, Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın denetim kapsamındaki faaliyetler arasında yer almaktadır. Hem deşarj standartları hem de atık yönetimi mevzuatı açısından sık güncellenen düzenlemeler, bu işletmelerin sürekli ve profesyonel çevre danışmanlığı desteğine ihtiyaç duymasını kaçınılmaz kılmaktadır. LWG (Leather Working Group) sertifikasyon sürecine giren deri fabrikaları için de ayrıca özelleşmiş teknik destek verilmektedir.",
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
      "Uşak'taki işletmeler için çevre süreci; mevcut çevre izin belgelerinin ve beyan takvimlerinin incelenmesiyle başlar. Eksik veya süresi dolan belgeler, yapılmamış beyanlar ve öncelikli yasal gereksinimler belirlenerek işletmeye özel bir çevre yönetim takvimi oluşturulur. Çevre İzin ve Lisans başvuruları, yıllık atık beyanı (TABS), hava emisyon beyanı ve tehlikeli madde beyanları dahil tüm zorunlu bildirimler ekibimiz tarafından düzenli takiple hazırlanır ve iletilir. Denetim öncesi hazırlık çalışmaları ve eksik belge tespiti de sürece dahildir.",
    nasApproach:
      "Nas Çevre Danışmanlık, Uşak merkezli kadrosuyla Uşak OSB ve çevre ilçelerdeki işletmelere yerinde saha desteği sağlamaktadır. Yerel Çevre ve Şehircilik İl Müdürlüğü ile koordineli çalışma deneyimine sahip ekibimiz, başvuruların doğru ve zamanında tamamlanmasını güvence altına almaktadır. Anlık mevzuat güncellemelerini izleyerek işletmenizi önceden bilgilendiriyor; denetim baskısı değil, rutin süreç yönetimi anlayışıyla çalışıyoruz.",
    nearbyRegionSlugs: [
      "kutahya-cevre-danismanlik",
      "afyon-cevre-danismanlik",
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
        q: "Yıllık atık beyanı (TABS) için neler gereklidir?",
        a: "TABS beyanı için işletmenizin yıl içinde ürettiği her atık türünü (tehlikeli/tehlikesiz) kodlu olarak takip etmiş olmanız gerekir. Beyan, her yıl Ocak–Mart döneminde Çevre Bilgi Sistemi (ÇBS) üzerinden yapılır. Nas Çevre, atık takibi ve beyan sürecini başından sonuna kadar yönetir.",
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
    metaTitle: "Kütahya Çevre Danışmanlık ve Mevzuat Uyumu | Nas Çevre",
    metaDescription:
      "Kütahya'da çevre izin ve lisans, atık yönetimi, ÇED danışmanlığı ve denetim hazırlığı hizmetleri. Seramik, madencilik ve enerji sektörlerine özel çevre danışmanlığı.",
    h1: "Yerel Mevzuat Süreçlerinde Teknik Destek",
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
      "afyon-cevre-danismanlik",
      "manisa-cevre-danismanlik",
    ],
    faqs: [
      {
        q: "Kütahya'da çevre izin ve lisans süreci nasıl ilerler?",
        a: "İşletmenin faaliyet türü ve kapasitesi belirlenerek Ek-1 veya Ek-2 listesinden hangisine girdiği tespit edilir. E-ÇÖZÜM sistemi üzerinden başvuru yapılır; emisyon, atık ve gürültü ölçüm raporları sisteme yüklenir. Bakanlık incelemesinin ardından çevre izni ve gerekiyorsa lisans düzenlenir. Nas Çevre tüm bu adımları koordine eder.",
      },
      {
        q: "Kütahya'daki seramik fabrikaları için hangi çevre yükümlülükleri geçerlidir?",
        a: "Seramik üretiminde fırın kaynaklı hava emisyonları, proses atıksuları ve sırçalama atıkları başlıca çevre etkileridir. İşletmeler; hava emisyon ölçümü, atıksu deşarj izni, tehlikeli atık beyanı ve yıllık TABS bildirimi yapmakla yükümlüdür. Kapasite eşiğine göre çevre izni veya lisansı da gerekebilir.",
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
    slug: "afyon-cevre-danismanlik",
    city: "Afyonkarahisar",
    metaTitle: "Afyonkarahisar Çevre Danışmanlık Hizmetleri | Nas Çevre",
    metaDescription:
      "Afyonkarahisar'da mermer, doğal taş, termal otel ve gıda sektörlerine çevre danışmanlığı, izin ve lisans, atık yönetimi ve ÇED hizmetleri.",
    h1: "İşletmenize Özel Çevre Danışmanlığı",
    introParagraph1:
      "Afyonkarahisar; mermer ve doğal taş sektörünün Türkiye'deki merkezi konumundadır. Bunun yanı sıra termal turizm, gıda üretimi ve madencilik alanlarındaki yoğun sanayi faaliyeti, bölgedeki işletmeleri kapsamlı çevre yükümlülükleri kapsamına sokmaktadır. Hem üretim hem çevre mevzuatı açısından sık değişen düzenlemeler, işletmelerin sürekli takip ve profesyonel destek gerektirdiği anlamına gelmektedir.",
    introParagraph2:
      "Nas Çevre Danışmanlık Mühendislik, Afyonkarahisar'daki işletmelere; çevre izin ve lisans başvurusu, ÇED süreci, atık yönetimi, beyan takibi ve denetim hazırlığı konularında yerinde ve uzaktan danışmanlık sunmaktadır. Bölgenin sektörel özelliklerine hâkim ekibimiz, işletmelerin yasal süreçlerini karmaşıklaşmadan yönetmelerine destek olmaktadır.",
    whyImportant:
      "Afyonkarahisar'daki mermer işleme tesisleri ve taşocakları, hem maden mevzuatı hem de çevre mevzuatı kapsamında çift yükümlülük taşımaktadır. Termal oteller ise atıksu yönetimi ve tehlikeli atık (kimyasal) beyanı konularında sıkı mevzuat gereksinimlerine tabi tutulmaktadır. Gıda tesisleri ve tarımsal işletmeler de periyodik beyan ve denetim yükümlülükleri nedeniyle düzenli danışmanlık desteğine ihtiyaç duymaktadır.",
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
        a: "Termal oteller; jeotermal akışkan deşarjı, havuz kimyasallarının atıksu yönetimi ve tesis kaynaklı atıklar (tehlikeli/tehlikesiz) açısından mevzuat kapsamındadır. Yıllık atık beyanı, tehlikeli madde beyanı ve gerekiyorsa çevre izni zorunludur. Nas Çevre bu yükümlülükleri eksiksiz takip eder.",
      },
      {
        q: "Afyonkarahisar'da ÇED süreci ne kadar sürer?",
        a: "ÇED Gerekli Değildir kararı genellikle 2–4 ay, ÇED raporu gerektiren projeler için ise 6–18 ay arası değişen süreçler söz konusudur. Projenin kapsamı, hazırlanan teknik belgelerin kalitesi ve kamu görüş toplantılarının içeriği süreci doğrudan etkiler.",
      },
      {
        q: "Afyonkarahisar'daki gıda tesisleri için atık yönetimi nasıl yapılandırılır?",
        a: "Gıda tesisleri; organik atık, ambalaj atığı ve tehlikeli atık (yağ, kimyasal) ayrıştırması yapmak zorundadır. TABS beyanı, lisanslı atık taşıyıcı ile sözleşme ve tehlikeli atık gözetim formu tutmak temel gereksinimlerdir. Sıfır atık belgesi alınması halinde idari yaptırım indirimi de sağlanabilir.",
      },
      {
        q: "Sıfır Atık Yönetmeliği Afyonkarahisar'daki işletmeleri nasıl etkiliyor?",
        a: "Belirli kapasitenin üzerindeki işletmeler için Sıfır Atık Belgesi zorunlu tutulmuştur. Bu belge için atık ayrıştırma altyapısı kurulması, kayıt sistemi oluşturulması ve belediye/valilik denetimine hazır belge dosyası tutulması gerekir. Nas Çevre, kurulum ve başvuru sürecini başından sonuna yönetir.",
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
    h1: "Mevzuata Uyum ve Süreç Takibi",
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
      "Denizli'deki işletmeler için süreç, atıksu deşarjı ve hava emisyonu öncelikli olmak üzere tesisin çevre etkilerinin sınıflandırılmasıyla başlar. Çevre İzin ve Lisans başvurusu için gerekli ölçüm ve belgeler hazırlanır. İzleme, beyan ve raporlama takvimi oluşturulur. Uluslararası alıcı denetimlerine (BSCI, OEKO-TEX vb.) yönelik çevre dokümanları da bu süreçte desteklenmektedir.",
    nasApproach:
      "Nas Çevre Danışmanlık, Denizli sanayi ve tekstil sektörünün çevre süreçlerini teknik derinlikle yöneten, yerinde ve uzaktan hizmet veren bir ekibe sahiptir. Denizli'deki işletmelerin hem Türk mevzuatına hem de uluslararası alıcı gereksinimlerine eş zamanlı uyumunu sağlamak için bütünleşik bir danışmanlık yaklaşımı benimsiyoruz.",
    nearbyRegionSlugs: [
      "usak-cevre-danismanlik",
      "afyon-cevre-danismanlik",
      "manisa-cevre-danismanlik",
    ],
    faqs: [
      {
        q: "Denizli'de tekstil işletmeleri için hangi çevre yükümlülükleri geçerlidir?",
        a: "Denizli'deki tekstil ve boya tesisleri; atıksu deşarj standardı, hava emisyonu ölçümü, tehlikeli kimyasal beyanı (REACH/KKDİK kapsamında), yıllık atık beyanı ve çevre izin/lisansı gereksinimlerine tabidir. OSB'de yer alan tesisler ortak arıtma sistemini kullanmakla birlikte bireysel izleme yükümlülükleri de devam eder.",
      },
      {
        q: "Denizli'de çevre izin ve lisans başvurusu nasıl yapılır?",
        a: "E-ÇÖZÜM Çevre Bilgi Sistemi üzerinden başvuru açılır; faaliyet kategorisi (Ek-1 veya Ek-2) belirlendikten sonra tesis bilgileri, teknik belgeler ve ölçüm raporları sisteme yüklenir. Başvurunun tam ve doğru hazırlanması, onay süresini doğrudan etkiler. Nas Çevre, hazırlık sürecini başından yönetir.",
      },
      {
        q: "Uluslararası alıcı denetimleri için çevre uyum belgeleri nasıl hazırlanır?",
        a: "BSCI, OEKO-TEX, bluesign gibi uluslararası denetimler; kimyasal yönetimi, atıksu standartları ve çevre politikası belgelerini incelemektedir. Nas Çevre, bu denetime özgü boşluk analizi yaparak eksik belgelerin tamamlanmasında ve çevre yönetim sistemi kurulumunda destek verir.",
      },
      {
        q: "Denizli'de atıksu deşarjı için hangi standartlar geçerlidir?",
        a: "Su Kirliliği Kontrolü Yönetmeliği kapsamında tekstil atıksularına özgü parametre sınırları uygulanmaktadır. OSB dışındaki tesislerin deşarjı doğrudan alıcı ortama ise çok daha sıkı sınır değerlere uymak gerekir. Nas Çevre, ölçüm yaptırma ve deşarj standardı karşılaştırması konusunda destek verir.",
      },
      {
        q: "Denizli'de sıfır atık belgesi almak zorunlu mu?",
        a: "Belirli kapasite ve faaliyet türündeki işletmeler için Sıfır Atık Belgesi zorunlu hale gelmiştir. Denizli'deki üretim tesisleri bu kapsama büyük ölçüde girmektedir. Belge için atık ayrıştırma altyapısı, kayıt sistemi ve yönetim planı hazırlanması gerekmektedir.",
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
    h1: "Çevre İzin, Beyan ve Denetim Süreçlerinde Destek",
    introParagraph1:
      "Manisa; Türkiye'nin önde gelen sanayi illerinden biridir. Elektronik, otomotiv yan sanayi, tarım ve gıda işleme, tekstil ve lojistik gibi birbirinden farklı sektörler aynı organize sanayi ekosisteminde bir arada faaliyet göstermektedir. Bu çeşitli sektörel yapı; atık yönetimi, emisyon beyanı ve çevre izin süreçleri açısından her işletmenin bireysel değerlendirme gerektirdiği karmaşık bir mevzuat tablosu oluşturmaktadır.",
    introParagraph2:
      "Nas Çevre Danışmanlık Mühendislik, Manisa'daki sanayi işletmelerine çevre izin ve lisans, ÇED süreci, atık yönetimi, yıllık beyan takibi ve denetim hazırlığı konularında sistematik destek sunmaktadır. Manisa Organize Sanayi Bölgeleri'ndeki işletmelerin çevre yükümlülüklerini doğru ve zamanında yerine getirmeleri için teknik uzmanlığımızı ve yerel deneyimimizi birlikte kullanıyoruz.",
    whyImportant:
      "Manisa'daki büyük sanayi tesisleri; hem bakanlık denetimi hem de OSB yönetimi denetimi kapsamında çift taraflı izlemeye tabi tutulmaktadır. Elektronik ve otomotiv yan sanayisindeki tehlikeli kimyasal kullanımı, tarım-gıda sektöründeki organik atık yönetimi ve lojistik depolama alanlarındaki ambalaj atığı yükümlülükleri bölgede öne çıkan çevre yönetim başlıklarındandır. Bu karmaşık yapıyı etkin biçimde yönetmek için profesyonel destek kritik önem taşımaktadır.",
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
      "denizli-cevre-danismanlik",
    ],
    faqs: [
      {
        q: "Manisa OSB'deki işletmelerin çevre izin yükümlülükleri nelerdir?",
        a: "Manisa Organize Sanayi Bölgesi'ndeki işletmeler; hem OSB yönetiminin çevre koşullarını hem de Bakanlık'ın Çevre İzin ve Lisans yükümlülüklerini ayrı ayrı karşılamak zorundadır. Ortak atıksu arıtma tesisine bağlantı koşullarına uyum ve bireysel emisyon ölçüm yükümlülükleri bu kapsamda değerlendirilir.",
      },
      {
        q: "Manisa'da tehlikeli atık yönetimi nasıl yapılmalıdır?",
        a: "Tehlikeli atık (yağ, solvent, kimyasal atık, pil vb.) için lisanslı geçici depolama alanı kurulması, atık kodu bazında TABS kaydı tutulması ve lisanslı bertaraf/geri dönüşüm firmasıyla sözleşme yapılması zorunludur. Nas Çevre, tehlikeli atık envanteri ve depolama alanı standartları konusunda eksiksiz hazırlık sağlar.",
      },
      {
        q: "Manisa'da gıda işleme tesisleri için çevre yükümlülükleri nelerdir?",
        a: "Gıda tesisleri; organik atık yönetimi, atıksu arıtma, paket atık takibi ve yıllık TABS beyanı açısından mevzuat kapsamındadır. Kapasite büyüklüğüne göre çevre izni gerekebilir. Sıfır Atık Belgesi ise belirli büyüklükteki tesisler için zorunlu hale gelmiştir.",
      },
      {
        q: "Manisa'da ÇED süreci hangi projeler için gereklidir?",
        a: "ÇED Yönetmeliği'nin Ek-1 listesindeki büyük ölçekli projeler (kapasite eşiğini aşan fabrika, sanayi tesisi vb.) ÇED raporu hazırlatmak zorundadır. Ek-2 listesindekiler ise ÇED Gerekli Değildir kararı alarak süreci tamamlar. Nas Çevre, projenin hangi kategoriye girdiğini baştan belirler.",
      },
      {
        q: "Manisa'da lojistik ve depolama tesisleri için çevre gereksinimleri var mı?",
        a: "Evet. Lojistik depolama alanlarında ambalaj atığı yönetimi, tehlikeli madde depolama standartları, yangın söndürme sistemlerinin atıksu yönetimi ve sıfır atık belgesi yükümlülükleri oluşabilmektedir. İşletmenin faaliyetine göre çevre izni de gerekebilir.",
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
    h1: "Kapsamlı Çevre Süreç Yönetimi",
    introParagraph1:
      "İzmir; Türkiye'nin üçüncü büyük şehri olarak geniş bir sektörel yelpazede faaliyet gösteren işletmelere ev sahipliği yapmaktadır. Liman ve lojistik, organize sanayi, gıda üretimi, turizm ve ihracat odaklı imalat sanayi; çevre mevzuatı açısından birbirinden farklı yükümlülük tablolarına sahiptir. Bu çeşitlilik, her işletmenin kendi faaliyet kapsamına özgü, özelleştirilmiş bir çevre yönetim yaklaşımını zorunlu kılmaktadır.",
    introParagraph2:
      "Nas Çevre Danışmanlık Mühendislik, İzmir'deki işletmelere çevre izin ve lisans başvurusu, ÇED süreci, atık yönetimi, beyan takibi ve denetim hazırlığı konularında uzaktan ve periyodik yerinde danışmanlık hizmeti sunmaktadır. Büyük ölçekli ve karmaşık çevre süreçlerinde deneyim sahibi mühendislik kadromuzla İzmir'deki işletmelerin yanındayız.",
    whyImportant:
      "İzmir Aliağa'daki petrokimya ve rafineri tesisleri, Ege Serbest Bölgesi'ndeki üretim işletmeleri ve Çiğli OSB'deki imalat sanayii; ülkemizin en yoğun çevre denetimi yapılan sektörleri arasında yer almaktadır. Turizm işletmeleri atıksu ve tehlikeli madde yönetimi açısından, ihracat yapan fabrikalar ise hem yerel mevzuat hem uluslararası alıcı standartları açısından çift yükümlülük taşımaktadır. Bu karmaşık tablo, sistematik ve güncel bir çevre danışmanlığını kaçınılmaz kılmaktadır.",
    sectors: [
      "Petrokimya, rafineri ve büyük sanayi tesisleri",
      "Liman ve lojistik işletmeleri",
      "Organize Sanayi Bölgesi üyeleri (Çiğli, Kemalpaşa, Ege SB)",
      "Gıda ve içecek üretim tesisleri",
      "Turizm ve otel işletmeleri",
      "İhracat odaklı imalat sanayi",
      "Geri dönüşüm ve çevre hizmet işletmeleri",
    ],
    processText:
      "İzmir'deki işletmeler için çevre süreci; tesisin faaliyetinin doğru kategorize edilmesiyle başlar. Büyük ölçekli tesislerde Entegre Çevre İzni (EÇİ) veya standart Çevre İzin ve Lisansı'nın hangisinin gerektiği belirlenerek başvuru aşamasına geçilir. ÇED gereksinimleri ayrıca değerlendirilir. Yıllık beyan takvimi (atık, emisyon, tehlikeli madde) oluşturulur. İzmir'in yüksek denetim kapasitesi nedeniyle belge güncelliği ve denetim hazırlığına özel önem gösterilir.",
    nasApproach:
      "Nas Çevre Danışmanlık, İzmir'deki işletmelere uzaktan danışmanlık ve planlı yerinde ziyaret modeliyle hizmet vermektedir. Büyük ölçekli ve karmaşık süreçlerde deneyimli mühendislik kadromuz devreye girer; küçük ve orta ölçekli işletmeler için ise verimli ve sürdürülebilir bir çevre yönetim düzeni kuruyoruz. İzmir'in yoğun sanayi ortamında işletmenizin hem yasal uyumunu hem de rekabet gücünü koruyoruz.",
    nearbyRegionSlugs: [
      "manisa-cevre-danismanlik",
      "denizli-cevre-danismanlik",
      "usak-cevre-danismanlik",
    ],
    faqs: [
      {
        q: "İzmir'de büyük sanayi tesisleri için Entegre Çevre İzni (EÇİ) zorunlu mu?",
        a: "Evet. Belirli sektörlerde ve kapasitelerde faaliyet gösteren büyük tesisler (özellikle petrokimya, rafineri, büyük metal üretimi vb.) Entegre Çevre İzni kapsamında değerlendirilmektedir. EÇİ; hava, su, atık ve gürültü gibi tüm çevre etkilerini tek belge altında toplar ve daha kapsamlı teknik belgeleme gerektirir.",
      },
      {
        q: "İzmir Aliağa'daki sanayi tesisleri için çevre süreci nasıl işler?",
        a: "Aliağa'daki tesisler büyük ölçekli ve yüksek çevre etkili faaliyetler olduğundan hem ÇED hem de EÇİ veya Çevre İzin ve Lisansı süreçlerini ayrı ayrı yönetmek gerekebilir. Periyodik emisyon ölçümleri, atıksu izleme ve raporlaması ile tehlikeli madde beyanları bu tesisler için rutin yükümlülüklerdir.",
      },
      {
        q: "İzmir'de turizm ve otel işletmeleri için çevre yükümlülükleri nelerdir?",
        a: "Otel ve turizm tesisleri; atıksu arıtma veya deşarj standardı, tehlikeli atık (kimyasal, yağ) beyanı, ambalaj atığı yönetimi ve sıfır atık belgesi yükümlülüklerine tabidir. Ege kıyısındaki tesisler için deşarj standartları ek kısıtlamalar içerebilir.",
      },
      {
        q: "İzmir'deki ihracat yapan fabrikalar için uluslararası çevre standartları nasıl yönetilir?",
        a: "İhracat yapan firmalar; Türk mevzuatına uyum yanı sıra alıcıların talep ettiği BSCI, ISO 14001, REACH/KKDİK veya sektöre özgü çevre standartlarını da karşılamak zorundadır. Nas Çevre, her iki gereksinim setini birlikte değerlendirerek bütünleşik bir uyum stratejisi oluşturur.",
      },
      {
        q: "İzmir'de çevre denetimine nasıl hazırlanılır?",
        a: "İzmir, yoğun sanayi faaliyeti nedeniyle Bakanlık'ın öncelikli denetim illerinden biridir. Denetim hazırlığı; çevre izin belgesinin güncelliği, atık takip formları, emisyon ölçüm raporları, tehlikeli madde beyanları ve tesis içi çevre düzenlemelerinin gözden geçirilmesini kapsar. Nas Çevre, bu hazırlık sürecini sistematik biçimde yönetir.",
      },
    ],
  },
];
