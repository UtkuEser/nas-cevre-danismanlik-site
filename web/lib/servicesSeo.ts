export interface ProcessStep {
  title: string;
  desc: string;
}

export interface ServiceSeo {
  slug: string;
  title: string;               // Kısa görünen ad (footer, linkler)
  h1: string;                  // Yerel SEO H1
  metaTitle: string;
  metaDescription: string;     // 140-160 karakter
  introParagraph1: string;
  introParagraph2: string;
  scopeItems: string[];        // 5-7 madde
  targetBusinesses: string;
  processSteps: ProcessStep[]; // 4 adım
  nasSupport: string;
  localSeo: string;
  relatedSlugs: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICES_SEO: ServiceSeo[] = [
  // ─────────────────────────────────────────
  // 1. Çevre Danışmanlığı
  // ─────────────────────────────────────────
  {
    slug: "cevre-danismanligi",
    title: "Çevre Danışmanlığı",
    h1: "Çevre Danışmanlığı",
    metaTitle: "Uşak Çevre Danışmanlığı | Nas Çevre Danışmanlık Mühendislik",
    metaDescription:
      "Uşak'ta çevre mevzuatı uyumu, izin takibi, beyan yönetimi ve denetim hazırlığı konularında kapsamlı çevre danışmanlığı. Nas Çevre Danışmanlık Mühendislik.",
    introParagraph1:
      "Çevre danışmanlığı; işletmelerin faaliyetlerini sürdürürken çevre mevzuatından kaynaklanan yasal yükümlülüklerini doğru ve zamanında yerine getirmelerini sağlayan sistematik bir destek hizmetidir. İzin belgelerinin takibi, periyodik beyanların yapılması, teknik raporların hazırlanması ve denetim süreçlerinin yönetilmesi bu hizmetin temel bileşenlerini oluşturur.",
    introParagraph2:
      "Uşak ve çevre illerdeki işletmeler için çevre danışmanlığı; deri işleme fabrikaları, tekstil tesisleri, gıda üretim işletmeleri ve her ölçekteki sanayi kuruluşu için kritik bir süreç yönetim aracıdır. Mevzuatın sık güncellenmesi ve denetimlerin beklenmedik zamanlarda gerçekleşebilmesi, düzenli ve profesyonel bir danışmanlık desteğini zorunlu kılmaktadır.",
    scopeItems: [
      "Mevcut çevre belgelerinin ve yasal yükümlülüklerin kapsamlı değerlendirilmesi",
      "Çevre izin ve lisans başvuruları ile yenileme süreçlerinin takibi",
      "Beyan takviminin oluşturulması ve yasal süreler içinde bildirim yapılması",
      "Denetim öncesi hazırlık çalışmaları ve eksik belge tespiti",
      "Teknik raporların ve çevre dokümanlarının hazırlanması",
      "Mevzuat değişikliklerinin işletmeye özgü etki analizinin yapılması",
      "Saha değerlendirmeleri ve periyodik danışmanlık raporları",
    ],
    targetBusinesses:
      "Organize sanayi bölgelerindeki fabrikalar, üretim tesisleri, geri dönüşüm ve bertaraf işletmeleri, tekstil ve deri fabrikaları, gıda üretim tesisleri, kimya ve boya işletmeleri, oteller, hastaneler, inşaat firmaları ve lojistik depolama alanları çevre danışmanlığı hizmetinden yararlanan başlıca sektörlerdir. Faaliyet alanı ne olursa olsun, çevre mevzuatı kapsamında herhangi bir yasal yükümlülüğü bulunan tüm işletmeler bu hizmet kapsamında değerlendirilebilir.",
    processSteps: [
      {
        title: "Ön Değerlendirme",
        desc: "İşletmenizin faaliyet türü, tesis kapasitesi ve mevcut çevre belgeleri incelenerek genel durum değerlendirilir.",
      },
      {
        title: "Mevcut Durum Analizi",
        desc: "Eksik izinler, süresi dolan belgeler, yapılmamış beyanlar ve öncelikli uyum gereksinimleri belirlenir.",
      },
      {
        title: "Aksiyon Planı ve Uygulama",
        desc: "İşletmeye özel çevre yönetim takvimi oluşturulur; başvurular, beyanlar ve raporlar ekibimiz tarafından hazırlanır.",
      },
      {
        title: "Sürekli Takip ve Bilgilendirme",
        desc: "Mevzuat değişiklikleri ve yenileme süreçleri düzenli olarak izlenir; işletmeniz zamanında bilgilendirilir.",
      },
    ],
    nasSupport:
      "Nas Çevre Danışmanlık, Uşak merkezli deneyimli mühendislik kadrosuyla çevre danışmanlığı sürecinin tamamını sade ve izlenebilir biçimde yönetir. Yerel mevzuat uygulamalarına ve bölgesel denetim pratiklerine hakim ekibimiz; teknik mühendislik yaklaşımı, düzenli raporlama ve işletmeye özel çözüm odaklı çalışma tarzıyla uzun vadeli uyum sürdürülebilirliğini güvence altına alır. Süreci baştan sona üstlenerek işletmenizin asıl faaliyetine odaklanmasına olanak tanır.",
    localSeo:
      "Uşak, Kütahya, Afyonkarahisar, Denizli, Manisa ve İzmir'deki işletmeler benzer çevre mevzuatı yükümlülükleri taşısa da her ilin sanayi yapısı ve yerel idari süreçleri farklılık gösterebilir. Nas Çevre Danışmanlık, bu illerdeki işletmelere bölgenin sektörel dinamiklerini ve yerel uygulama pratiklerini göz önünde bulundurarak hem ulusal mevzuata hem de bölgesel gereksinimlere uygun süreç yönetimi sunar.",
    relatedSlugs: ["cevre-izin-ve-lisans", "denetim-hazirligi", "mevzuat-takibi"],
    faqs: [
      {
        q: "Çevre danışmanlığı hizmeti almak zorunlu mudur?",
        a: "Belirli kapasite ve faaliyet türündeki tesisler için çevre danışmanı istihdam etme ya da hizmet alma yasal zorunluluktur. Kapsamın dışındaki işletmeler için ise mevzuata uyum ve denetim güvencesi açısından danışmanlık almak önemli bir önlem sağlar.",
      },
      {
        q: "Hangi belgeler çevre danışmanlığı kapsamında yönetilir?",
        a: "Çevre izin ve lisansları, yıllık atık beyanları, emisyon ve deşarj bildirimleri, sıfır atık kayıtları, teknik raporlar ve denetim hazırlık dokümanları bu hizmet kapsamında yönetilmektedir.",
      },
      {
        q: "Uşak'taki işletmeler için en sık ihtiyaç duyulan çevre hizmetleri nelerdir?",
        a: "Uşak'ta özellikle deri, tekstil ve gıda sektöründeki işletmeler çevre izin ve lisansı, atık yönetimi, çevre beyanları ve LWG denetim danışmanlığı konularında en sık destek almaktadır.",
      },
      {
        q: "Çevre danışmanlığı hizmeti ne sıklıkla sunulur?",
        a: "Hizmet kapsamı işletmenizin ihtiyacına göre yapılandırılır. Aylık periyodik takip, çeyrek dönem kontrolleri veya proje bazlı destek biçimlerinde sunulabilir.",
      },
      {
        q: "Başka şehirlerdeki işletmelere de hizmet veriliyor mu?",
        a: "Evet. Nas Çevre Danışmanlık, Uşak merkezli olmakla birlikte Kütahya, Afyonkarahisar, Denizli, Manisa ve İzmir gibi çevre illerdeki işletmelere yerinde ve uzaktan destek sunmaktadır.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. Çevre İzin ve Lisans
  // ─────────────────────────────────────────
  {
    slug: "cevre-izin-ve-lisans",
    title: "Çevre İzin ve Lisans",
    h1: "Çevre İzin ve Lisans Danışmanlığı",
    metaTitle: "Uşak Çevre İzin ve Lisans Danışmanlığı | Nas Çevre",
    metaDescription:
      "Uşak'ta entegre çevre izni ve lisansı başvurusu, belgeleme, e-çevre işlemleri ve yenileme süreçlerinde uzman danışmanlık. Nas Çevre.",
    introParagraph1:
      "Çevre İzin ve Lisansı; hava emisyonu, atık su deşarjı, gürültü-titreşim ve tehlikeli atık gibi çevre üzerinde önemli etkileri olan faaliyetleri yürüten tesislerin, bu faaliyetlerini yasal zemin altında sürdürebilmesi için alması zorunlu olan belgedir. Belge olmadan faaliyet yürütmek idari para cezası ve faaliyet durdurma yaptırımlarına yol açabilir.",
    introParagraph2:
      "Uşak organize sanayi bölgesindeki üretim tesisleri, deri ve tekstil fabrikaları, kimya işletmeleri ve diğer sanayi kuruluşları çevre izin ve lisansı süreçlerinde teknik ve bürokratik güçlüklerle karşılaşmaktadır. Nas Çevre Danışmanlık, başvuru dosyasının hazırlanmasından lisans onayına kadar tüm süreci yönetmektedir.",
    scopeItems: [
      "Faaliyet türü ve tesis kapasitesine göre izin gereklilik analizinin yapılması",
      "Ön başvuru ve başvuru dosyasının eksiksiz biçimde hazırlanması",
      "E-çevre sistemi üzerindeki tüm teknik işlemlerin yürütülmesi",
      "Yetkili çevre otoritesiyle koordinasyon ve resmi yazışmaların takibi",
      "Ek bilgi ve belge taleplerinin zamanında karşılanması",
      "Lisans yenileme ve güncelleme süreçlerinin takibi",
      "Lisans sonrası yükümlülüklerin izlenmesi",
    ],
    targetBusinesses:
      "Organize sanayi bölgesi üyeleri, hava emisyonu ya da atık su deşarjı olan fabrikalar, geri dönüşüm ve bertaraf tesisleri, deri işleme ve tekstil fabrikaları, kimya ve boya üretim tesisleri ile gürültü veya tehlikeli madde yükümlülüğü bulunan sanayi tesisleri çevre izin ve lisansı almak zorundadır.",
    processSteps: [
      {
        title: "Gereklilik Analizi",
        desc: "Faaliyet türü ve tesis kapasitesi değerlendirilerek hangi tür izin veya lisansın gerektiği belirlenir.",
      },
      {
        title: "Dosya Hazırlama",
        desc: "Başvuru dosyası, teknik dokümanlar ve ölçüm raporları eksiksiz biçimde hazırlanır; e-çevre sistemine yüklenir.",
      },
      {
        title: "Makam Koordinasyonu",
        desc: "Yetkili çevre otoritesiyle iletişim sürdürülür; ek bilgi talepleri ve inceleme süreci yakından takip edilir.",
      },
      {
        title: "Lisans Alımı ve Yenileme Takibi",
        desc: "Lisans onaylanır ve sonraki yenileme tarihi takvime alınarak süresi dolmadan yenileme başlatılır.",
      },
    ],
    nasSupport:
      "Nas Çevre Danışmanlık, Çevre İzin ve Lisansı sürecini baştan sona ekibimiz aracılığıyla yönetir. E-çevre sistemi teknik işlemleri, yetkili makam yazışmaları ve ek belge taleplerinin karşılanması dahil tüm aşamalar deneyimli mühendis kadromuz tarafından takip edilir. Lisans alımının ardından yenileme süreci de otomatik olarak takvime alınır.",
    localSeo:
      "Uşak Organize Sanayi Bölgesi başta olmak üzere Uşak, Kütahya, Afyonkarahisar ve Denizli'deki sanayi tesislerinin çevre izin ve lisans süreçleri il bazında farklı idari pratikler içerebilir. Nas Çevre Danışmanlık, bu illerdeki yerel uygulamaları yakından takip ederek başvuru ve onay süreçlerini bölgesel deneyimle yönetir.",
    relatedSlugs: ["cevre-danismanligi", "cevre-beyanlari", "denetim-hazirligi"],
    faqs: [
      {
        q: "Çevre İzin ve Lisansı olmadan faaliyet sürdürmek mümkün mü?",
        a: "Hayır. Kapsam dahilindeki işletmeler için bu belge zorunludur. Belgesiz faaliyet; idari para cezası ve faaliyet durdurma yaptırımlarına yol açabilir.",
      },
      {
        q: "Lisans başvurusu ne kadar sürer?",
        a: "Başvuru süresi faaliyet türüne ve dosyanın eksiksizliğine bağlıdır. Genellikle birkaç aylık bir süreç işlemektedir. Dosyanın tam ve eksiksiz hazırlanması bu süreyi önemli ölçüde kısaltır.",
      },
      {
        q: "Mevcut lisansımı yenilemek için ne yapmalıyım?",
        a: "Lisans yenileme başvurusunun süre dolmadan yapılması gerekir. Güncel teknik belgeler ve ölçüm raporlarıyla birlikte yenileme süreci ekibimiz tarafından yönetilmektedir.",
      },
      {
        q: "E-çevre sistemi nedir ve nasıl kullanılır?",
        a: "E-çevre, Çevre Bakanlığı'nın çevre izin ve lisans başvurularının elektronik ortamda yapıldığı sistemidir. Sisteme başvuru yükleme, belge ekleme ve takip işlemleri teknik bilgi gerektirmekte olup ekibimiz bu süreçlerin tamamını yürütmektedir.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. ÇED Süreçleri
  // ─────────────────────────────────────────
  {
    slug: "ced-surecleri",
    title: "ÇED Süreçleri",
    h1: "ÇED Süreçleri Danışmanlığı",
    metaTitle: "Uşak ÇED Danışmanlığı | Çevresel Etki Değerlendirmesi – Nas Çevre",
    metaDescription:
      "Uşak ve çevre illerde ÇED başvurusu, rapor hazırlama, halkın katılımı ve bakanlık süreç yönetiminde uzman ÇED danışmanlığı. Nas Çevre.",
    introParagraph1:
      "Çevresel Etki Değerlendirmesi (ÇED), büyük ölçekli veya çevre üzerinde önemli etki yaratabilecek yatırım projelerinin, uygulamaya konulmadan önce çevresel açıdan incelenmesini zorunlu kılan bir süreçtir. ÇED Yönetmeliği kapsamındaki projeler için bu süreç tamamlanmadan inşaat veya faaliyet izni alınamaz.",
    introParagraph2:
      "Uşak ve çevre illerde gerçekleştirilen sanayi, tarım, enerji ve altyapı yatırımları zaman zaman ÇED veya ÇED Gerekli Değildir kararı almayı gerektirmektedir. Nas Çevre Danışmanlık, başvuru öncesi değerlendirmeden bakanlık onayına kadar tüm aşamalarda teknik danışmanlık sağlamaktadır.",
    scopeItems: [
      "Projenin ÇED yönetmeliği kapsamında değerlendirilmesi ve gereklilik analizi",
      "ÇED Gerekli Değildir kararı için proje tanıtım dosyasının hazırlanması",
      "Tam ÇED başvuru dosyası ve ÇED raporunun hazırlanması",
      "Halkın katılımı toplantısının organize edilmesi ve koordinasyonu",
      "Çevre Bakanlığı nezdinde süreç takibi ve resmi yazışmaların yürütülmesi",
      "Ek bilgi ve doküman taleplerinin eksiksiz ve zamanında karşılanması",
      "ÇED olumlu kararı sonrası izleme programı desteği",
    ],
    targetBusinesses:
      "Yeni fabrika ve üretim tesisi kuracak yatırımcılar, enerji santrali projeleri, maden sahası ve taş ocağı işletmeleri, büyük ölçekli tarımsal sulama ve arazi düzenleme projeleri, turizm ve konaklama yatırımları ile altyapı ve lojistik tesisi projeleri ÇED sürecine tabi olabilecek başlıca yatırım alanlarıdır.",
    processSteps: [
      {
        title: "Kapsam Belirleme",
        desc: "Proje bilgileri ve teknik dokümanlar incelenerek ÇED yönetmeliği kapsamında değerlendirme yapılır ve gerekli işlem türü belirlenir.",
      },
      {
        title: "Dosya Hazırlama",
        desc: "Proje tanıtım dosyası ya da tam ÇED raporu hazırlanır; gerekli teknik analizler ve belgeler tamamlanır.",
      },
      {
        title: "Halkın Katılımı ve Başvuru",
        desc: "Halkın katılımı toplantısı koordine edilir ve başvuru dosyası yetkili makama eksiksiz biçimde iletilir.",
      },
      {
        title: "Süreç Takibi ve Karar",
        desc: "Bakanlık inceleme süreci yakından takip edilir; ek bilgi talepleri zamanında yanıtlanır ve karar aşamasına gelinir.",
      },
    ],
    nasSupport:
      "Nas Çevre Danışmanlık, ÇED sürecinin her aşamasında teknik mühendislik yaklaşımı ve deneyimli kadrosuyla kapsamlı destek sağlar. Proje tanıtım dosyasının ya da tam ÇED raporunun hazırlanması, halkın katılımı toplantısının organizasyonu ve bakanlık nezdindeki resmi yazışmalar ekibimiz tarafından yönetilir. Sürecin olabildiğince hızlı ve sorunsuz tamamlanması öncelikli hedefimizdir.",
    localSeo:
      "Uşak, Kütahya, Afyonkarahisar ve Denizli'de gerçekleştirilen sanayi, tarım ve altyapı yatırımlarında ÇED süreci sıklıkla gündeme gelmektedir. Bölgedeki yatırımcılar için yerel coğrafi ve çevresel koşulların ÇED raporuna doğru yansıtılması, sürecin sağlıklı ilerlemesi açısından büyük önem taşımaktadır. Nas Çevre Danışmanlık bu bölgesel deneyimi ile hizmet vermektedir.",
    relatedSlugs: ["cevre-izin-ve-lisans", "cevre-danismanligi", "cevre-beyanlari"],
    faqs: [
      {
        q: "Her yatırım projesi ÇED yapmak zorunda mıdır?",
        a: "Hayır. ÇED Yönetmeliği belirli ölçek ve türdeki projeleri kapsamaktadır. Projenizin yönetmelik kapsamında değerlendirilmesi için ön analiz yapılması gerekmektedir.",
      },
      {
        q: "ÇED Gerekli Değildir Kararı ne anlama gelir?",
        a: "Projenizin çevre üzerindeki olası etkilerinin tam ÇED sürecini gerektirmeyeceğine dair yetkili otoritenin verdiği belgedir. Bu karar da bir başvuru ve değerlendirme sürecini gerektirmektedir.",
      },
      {
        q: "ÇED süreci ne kadar sürer?",
        a: "Süre projenin büyüklüğüne ve karmaşıklığına göre değişir. Başvuru dosyasının eksiksiz hazırlanması süreci önemli ölçüde kısaltır.",
      },
      {
        q: "ÇED sürecinde halkın katılımı toplantısı zorunlu mudur?",
        a: "Evet, tam ÇED sürecine tabi projelerde halkın katılımı toplantısı mevzuat gereği zorunludur. Bu toplantının organizasyonu ve koordinasyonu ekibimiz tarafından yapılmaktadır.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. Atık Yönetimi
  // ─────────────────────────────────────────
  {
    slug: "atik-yonetimi",
    title: "Atık Yönetimi",
    h1: "Atık Yönetimi Danışmanlığı",
    metaTitle: "Uşak Atık Yönetimi Danışmanlığı | Nas Çevre Danışmanlık",
    metaDescription:
      "Uşak'ta atık beyanı, atık takip formu, lisanslı taşıyıcı koordinasyonu ve UATF kayıt yönetiminde uzman atık yönetimi danışmanlığı.",
    introParagraph1:
      "Atık yönetimi; işletmelerin faaliyetleri sonucunda ortaya çıkan atıkların türüne göre sınıflandırılmasını, izlenebilir biçimde taşınmasını, bertaraf edilmesini ve yasal kayıtların tutulmasını kapsayan bütünleşik bir süreçtir. Yanlış ya da eksik yönetilen atık süreçleri idari yaptırım, çevre kirliliği riski ve denetim bulgusuna yol açabilir.",
    introParagraph2:
      "Uşak'taki deri, tekstil, gıda ve kimya sektöründe faaliyet gösteren işletmeler; tehlikeli atık yönetimi, yıllık atık beyanı ve atık takip formu düzenleme konularında mevzuata tam uyum sağlamak durumundadır. Nas Çevre Danışmanlık, atık envanterinin çıkarılmasından yıllık beyanın tamamlanmasına kadar süreci bütünüyle yönetmektedir.",
    scopeItems: [
      "Atık envanterinin çıkarılması ve tehlikeli/tehlikesiz atık sınıflandırması",
      "Yıllık atık beyanının e-çevre sistemi üzerinden hazırlanması ve iletilmesi",
      "Atık takip formu (UATF) düzenlenmesi ve kayıtların tutulması",
      "Lisanslı atık taşıyıcı seçimi ve koordinasyonu",
      "Lisanslı geri dönüşüm ve bertaraf tesisiyle iş birliği sağlanması",
      "Atık depolama alanlarının mevzuata uygunluk değerlendirmesi",
      "Atık yönetim planının hazırlanması ve güncellenmesi",
    ],
    targetBusinesses:
      "Tehlikeli ya da tehlikesiz atık üreten fabrikalar ve üretim tesisleri, deri işleme işletmeleri, tekstil ve boya fabrikaları, gıda üretim ve işleme tesisleri, hastaneler ve sağlık kuruluşları, geri dönüşüm firmaları, inşaat şirketleri ve lojistik depolama işletmeleri atık yönetimi danışmanlığından yararlanan başlıca sektörlerdir.",
    processSteps: [
      {
        title: "Envanter ve Sınıflandırma",
        desc: "Tesisin ürettiği tüm atık türleri ve miktarları belirlenerek tehlikeli ve tehlikesiz atık sınıflandırması yapılır.",
      },
      {
        title: "Yasal Yükümlülük Tespiti",
        desc: "Atık türüne göre beyan, takip formu ve taşıma yükümlülükleri belirlenir; gerekli lisanslı firmalar tespit edilir.",
      },
      {
        title: "Beyan ve Form Hazırlama",
        desc: "Yıllık atık beyanı ve atık takip formları mevzuata uygun biçimde hazırlanır ve yetkili sisteme iletilir.",
      },
      {
        title: "Düzenli Takip",
        desc: "Taşıma, bertaraf ve beyan süreçleri dönem dönem kontrol edilir; kayıtlar güncel ve eksiksiz tutulur.",
      },
    ],
    nasSupport:
      "Nas Çevre Danışmanlık, atık yönetimi sürecinin tamamını teknik ve idari açıdan üstlenir. Atık envanteri çalışmasından yıllık beyan tamamlanmasına, lisanslı taşıyıcı seçiminden bertaraf belgelerinin düzenlenmesine kadar tüm adımlar deneyimli mühendis ekibimiz tarafından yürütülür. Kayıtların düzenli ve eksiksiz tutulması denetim süreçlerinde güçlü bir güvence sağlar.",
    localSeo:
      "Uşak deri sektörü başta olmak üzere Uşak, Kütahya ve Afyonkarahisar'daki sanayi tesislerinde tehlikeli atık yönetimi özellikle hassas bir konu oluşturmaktadır. Bölgedeki lisanslı taşıyıcı ve bertaraf tesisleri hakkındaki güncel bilgi, atık yönetimi sürecinin sorunsuz işlemesi için kritik öneme sahiptir. Nas Çevre Danışmanlık bu bölgesel bilgiyle hizmet vermektedir.",
    relatedSlugs: ["sifir-atik-danismanligi", "cevre-beyanlari", "denetim-hazirligi"],
    faqs: [
      {
        q: "Yıllık atık beyanı her işletmeden isteniyor mu?",
        a: "Belirli miktarın üzerinde tehlikeli veya tehlikesiz atık üreten işletmeler yıllık atık beyanı vermekle yükümlüdür. Beyan yükümlülüğü atığın niteliğine ve miktarına göre değişmektedir.",
      },
      {
        q: "Tehlikeli atıkları kim taşıyabilir?",
        a: "Tehlikeli atıklar yalnızca Çevre Bakanlığı'ndan lisanslı taşıyıcılar aracılığıyla taşınabilir. Lisanssız taşıma işlemi hem üretici işletme hem de taşıyıcı için yaptırım konusudur.",
      },
      {
        q: "Atık takip formu nedir, düzenleme zorunluluğu var mı?",
        a: "Atık takip formu (UATF), tehlikeli atığın üreticiden bertaraf tesisine taşınması sürecinde düzenlenmesi zorunlu resmi belgedir. Eksik ya da hatalı form denetim bulgusuna yol açabilir.",
      },
      {
        q: "Atık depolama alanım için ayrıca izin gerekiyor mu?",
        a: "Geçici atık depolama alanları mevzuatta belirtilen fiziksel ve teknik koşulları sağlamalıdır. Bu koşulların sağlanıp sağlanmadığı ön değerlendirme kapsamında incelenmektedir.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. Sıfır Atık Danışmanlığı
  // ─────────────────────────────────────────
  {
    slug: "sifir-atik-danismanligi",
    title: "Sıfır Atık Danışmanlığı",
    h1: "Sıfır Atık Danışmanlığı",
    metaTitle: "Uşak Sıfır Atık Belgesi ve Danışmanlığı | Nas Çevre",
    metaDescription:
      "Uşak'ta sıfır atık yönetim sistemi kurulumu, sıfır atık belgesi başvurusu ve belge sonrası periyodik takip danışmanlığı. Nas Çevre.",
    introParagraph1:
      "Sıfır Atık Yönetmeliği; işletmelerin ürettikleri atık miktarını azaltmayı, geri dönüşüm oranlarını artırmayı ve atıkların düzenli depolama tesisine gönderilmesini en aza indirmeyi hedefleyen kapsamlı bir düzenlemedir. Kapsam dahilindeki kamu kurumları ve büyük ölçekli özel tesisler bu yönetmelik çerçevesinde sıfır atık yönetim sistemi kurarak belge almakla yükümlüdür.",
    introParagraph2:
      "Sıfır atık belgesi alma süreci; mevcut atık yönetimi altyapısının değerlendirilmesini, sistematik bir geri dönüşüm düzeninin kurulmasını ve çalışanların bilinçlendirilmesini gerektirmektedir. Nas Çevre Danışmanlık, Uşak ve çevre illerdeki işletmelere bu sürecin tamamını yönetmektedir.",
    scopeItems: [
      "Tesisin mevcut atık yönetimi altyapısı ve geri dönüşüm oranlarının değerlendirilmesi",
      "Sıfır atık yönetim sisteminin kurulması ve belgelenmesi",
      "Atık ayrıştırma düzeninin oluşturulması ve fiziksel altyapı desteği",
      "Çalışan bilgilendirme ve eğitim programlarının planlanması",
      "Belge başvurusu dosyasının hazırlanması ve ilgili makama iletilmesi",
      "Denetim ve değerlendirme sürecinin koordinasyonu",
      "Belge sonrası periyodik raporlama ve takip desteği",
    ],
    targetBusinesses:
      "Kamu kurumları ve kamu binaları, alışveriş merkezleri ve ticari yapılar, oteller ve konaklama tesisleri, hastaneler ve sağlık kuruluşları, büyük ölçekli üretim tesisleri ve Sıfır Atık Yönetmeliği kapsamına giren tüm tesisler bu hizmetten yararlanabilir. Kapsam dışındaki işletmeler ise gönüllülük esasıyla belge alarak kurumsal sürdürülebilirlik hedeflerini destekleyebilir.",
    processSteps: [
      {
        title: "Mevcut Durum Değerlendirmesi",
        desc: "Tesisin atık üretim verileri, geri dönüşüm altyapısı ve mevcut süreçler incelenerek eksiklikler tespit edilir.",
      },
      {
        title: "Sistem Kurulumu",
        desc: "Sıfır atık yönetim sistemi oluşturulur; atık ayrıştırma düzeni, fiziksel altyapı ve eğitim programı hayata geçirilir.",
      },
      {
        title: "Belge Başvurusu",
        desc: "Başvuru dosyası hazırlanarak ilgili makama iletilir ve denetim süreci koordine edilir.",
      },
      {
        title: "Belge Sonrası Takip",
        desc: "Periyodik geri dönüşüm oranı raporlaması yapılır ve belge yenileme süreci zamanında başlatılır.",
      },
    ],
    nasSupport:
      "Nas Çevre Danışmanlık, sıfır atık sürecini teknik mühendislik yaklaşımıyla baştan sona yönetir. Mevcut durum analizinden sistem kurulumuna, belge başvurusundan yetkili makam denetimine kadar her aşamada aktif destek sağlanır. Belge alındıktan sonra da periyodik raporlama ve yenileme sürecinde işletmenizin yanında yer alırız.",
    localSeo:
      "Uşak, Kütahya ve Denizli'deki kamu kurumları ve büyük ölçekli sanayi tesisleri için sıfır atık belgesi zorunlulukları son yıllarda önem kazanmıştır. Bölgedeki işletmelerin belge süreçlerini eksiksiz ve zamanında tamamlaması, hem yasal uyum hem de kurumsal sürdürülebilirlik açısından kritik bir adımdır. Nas Çevre Danışmanlık bu süreci bölgesel deneyimiyle yönetmektedir.",
    relatedSlugs: ["atik-yonetimi", "cevre-danismanligi", "mevzuat-takibi"],
    faqs: [
      {
        q: "Sıfır atık belgesi almak zorunlu mu?",
        a: "Belirli büyüklükteki kamu binaları ve ticari tesisler için zorunluluk getirilmiştir. Kapsam dışındaki işletmeler gönüllü olarak belge alabilir.",
      },
      {
        q: "Sıfır atık sistemi kurmak ne kadar sürer?",
        a: "Tesisin büyüklüğüne ve mevcut altyapısına göre değişmekle birlikte genellikle birkaç haftadan birkaç aya kadar süren bir hazırlık süreci gerekir.",
      },
      {
        q: "Belge aldıktan sonra yükümlülüklerim biter mi?",
        a: "Hayır. Sıfır atık belgesi periyodik aralıklarla yenilenmelidir ve atık azaltma hedeflerine yönelik dönemsel raporlama devam eder.",
      },
      {
        q: "Çalışanlar bu süreçte nasıl dahil edilir?",
        a: "Sıfır atık sisteminin etkin çalışması için çalışan eğitimi zorunludur. Eğitim planlaması ve uygulama desteği de hizmet kapsamımızda yer almaktadır.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. Çevre Beyanları
  // ─────────────────────────────────────────
  {
    slug: "cevre-beyanlari",
    title: "Çevre Beyanları",
    h1: "Çevre Beyanları",
    metaTitle: "Uşak Çevre Beyanları | Emisyon, Deşarj ve Atık Beyanı – Nas Çevre",
    metaDescription:
      "Uşak'ta emisyon beyanı, atık su deşarjı, gürültü bildirimi ve yasal çevre beyanlarının hazırlanması ve süresinde iletilmesinde danışmanlık.",
    introParagraph1:
      "Çevre beyanları; işletmelerin emisyon, deşarj, gürültü ve tehlikeli madde gibi çevre üzerindeki etkilerini yetkili makamlara dönemsel olarak bildirdiği resmi bildirimlerdir. Bu beyanların yasal süreleri içinde eksiksiz yapılması, işletmenin mevzuata uyumunu belgelemesi açısından kritik önem taşımaktadır.",
    introParagraph2:
      "Uşak ve çevre illerde faaliyet gösteren üretim tesisleri, fabrikalar ve sanayi işletmeleri; yıllık atık beyanı, emisyon bildirimi, deşarj izni başvurusu ve tehlikeli madde envanteri gibi birden fazla beyan yükümlülüğüne sahip olabilmektedir. Nas Çevre Danışmanlık, tüm beyan takvimini işletmeniz adına takip etmektedir.",
    scopeItems: [
      "Beyan yükümlülüklerinin faaliyet türüne göre belirlenmesi ve takvime bağlanması",
      "Yıllık atık beyanının e-çevre sistemi üzerinden hazırlanması ve iletilmesi",
      "Hava emisyon bildirimleri ve deşarj izni başvurularının yönetimi",
      "Çevresel gürültü ölçüm koordinasyonu ve gürültü raporlarının hazırlanması",
      "Tehlikeli madde stok bildirimi ve envanter kayıtlarının tutulması",
      "Beyan sürelerinin ve güncellemelerinin periyodik takibi",
      "Yetkili makama iletim ve arşivleme süreçlerinin yürütülmesi",
    ],
    targetBusinesses:
      "Atık su deşarjı olan üretim tesisleri, hava emisyonu yaratan fabrikalar, gürültü ve titreşim yükümlülüğü bulunan sanayi işletmeleri, tehlikeli madde kullanan kimya ve boya fabrikaları, deri ve tekstil işleme tesisleri ile gıda üretim işletmeleri çevre beyanları hizmetinden yararlanan başlıca sektörlerdir.",
    processSteps: [
      {
        title: "Yükümlülük Tespiti",
        desc: "İşletmenizin faaliyet alanına göre hangi beyanların hangi dönemlerde yapılması gerektiği belirlenir.",
      },
      {
        title: "Takvim ve Koordinasyon",
        desc: "Yıllık beyan takvimi oluşturulur; ölçüm gerektiren beyanlar için ilgili akredite laboratuvarlarla koordinasyon sağlanır.",
      },
      {
        title: "Hazırlama ve İletim",
        desc: "Beyan dokümanları ve teknik raporlar hazırlanarak yasal süreler içinde yetkili makama eksiksiz iletilir.",
      },
      {
        title: "Arşivleme ve Güncelleme",
        desc: "Beyanlar düzenli olarak arşivlenir ve bir sonraki dönem için gerekli güncellemeler takip edilir.",
      },
    ],
    nasSupport:
      "Nas Çevre Danışmanlık, çevre beyanları takvimini işletmeniz adına baştan sona takip eder. Her beyan dönemi için gerekli ölçüm koordinasyonu, teknik doküman hazırlama ve yetkili makama iletim işlemleri ekibimiz tarafından yürütülür. Yasal sürelerin kaçırılmaması ve kayıtların eksiksiz tutulması birincil önceliğimizdir.",
    localSeo:
      "Uşak organize sanayi bölgesi başta olmak üzere Uşak, Kütahya, Afyonkarahisar ve Manisa'daki tesisler farklı beyan dönemleri ve bildirim gerekliliklerine sahip olabilmektedir. Nas Çevre Danışmanlık, bu bölgelerdeki yerel idari pratikleri ve dönemsel gereklilikleri bilen ekibiyle işletmelerin beyan süreçlerini eksiksiz yönetmektedir.",
    relatedSlugs: ["cevre-izin-ve-lisans", "atik-yonetimi", "denetim-hazirligi"],
    faqs: [
      {
        q: "Hangi beyanlar her yıl yapılmak zorundadır?",
        a: "Yıllık atık beyanı, emisyon bildirimi ve deşarj izni yenileme gibi beyanlar genellikle yıllık dönemlerde yapılmaktadır. Dönemler faaliyet türüne göre farklılık gösterebilir.",
      },
      {
        q: "Beyanı geç yaparsam ne olur?",
        a: "Yasal süresi geçmiş beyanlar idari para cezasına yol açabilir. Bu nedenle beyan takviminin profesyonel biçimde takip edilmesi kritik önem taşır.",
      },
      {
        q: "Ölçüm raporlarını siz mi hazırlıyorsunuz?",
        a: "Ölçümler akredite laboratuvarlar tarafından gerçekleştirilir. Ölçüm sürecini koordine ediyor, raporların doğruluğunu kontrol ediyor ve yetkili makama iletimini üstleniyoruz.",
      },
      {
        q: "Tehlikeli madde bildirimi zorunlu mu?",
        a: "Belirli miktarın üzerinde tehlikeli madde depolayan veya kullanan işletmelerin tehlikeli madde envanterini bildirmesi zorunludur. Bu yükümlülük Büyük Endüstriyel Kazaların Önlenmesi kapsamında da değerlendirilebilir.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // 7. Denetim Hazırlığı
  // ─────────────────────────────────────────
  {
    slug: "denetim-hazirligi",
    title: "Denetim Hazırlığı",
    h1: "Denetim Hazırlığı",
    metaTitle: "Uşak Çevre Denetim Hazırlığı | Nas Çevre Danışmanlık",
    metaDescription:
      "Uşak'ta çevre denetimleri öncesi kapsamlı eksik tespiti, belge tamamlama ve yerinde teknik destek. Nas Çevre Danışmanlık.",
    introParagraph1:
      "Çevre denetimleri; yetkili çevre otoritelerinin işletmelerin mevzuata uyumunu yerinde incelediği, belge ve süreçleri değerlendirdiği süreçlerdir. Denetimler önceden bildirilebileceği gibi habersiz de gerçekleşebilmektedir. Denetimde tespit edilen eksiklikler idari para cezasına ve faaliyet kısıtlamalarına yol açabilir.",
    introParagraph2:
      "Uşak ve çevre illerdeki sanayi işletmelerinde denetim öncesi hazırlık çalışmalarının sistematik yürütülmesi, olası yaptırım risklerini en aza indirmektedir. Nas Çevre Danışmanlık, gerçek bir denetim senaryosu üzerinden işletmenizi kapsamlı biçimde değerlendirerek eksiklikleri tespit etmekte ve gidermektedir.",
    scopeItems: [
      "Tüm çevre belgelerinin ve izinlerin güncellik ve eksiksizlik açısından incelenmesi",
      "Atık takip formları ve yıllık beyanların kontrolü",
      "Emisyon, deşarj ve gürültü ölçüm raporlarının güncelliğinin değerlendirilmesi",
      "Acil durum planları ve çevre yönetim dokümanlarının gözden geçirilmesi",
      "Riskli alanların tespiti ve öncelik sıralamasına göre aksiyon planı hazırlanması",
      "Eksik ya da süresi dolan belgelerin tamamlanması ve güncellenmesi",
      "Denetim günü yerinde teknik destek sağlanması",
    ],
    targetBusinesses:
      "Çevre izin ve lisansına tabi sanayi tesisleri, fabrikalar, geri dönüşüm ve bertaraf işletmeleri, organize sanayi bölgesi üyeleri, deri ve tekstil işletmeleri, gıda üretim tesisleri ve çevre denetimine tabi tüm işletmeler denetim hazırlığı hizmetinden yararlanabilir.",
    processSteps: [
      {
        title: "Kapsamlı Belge Taraması",
        desc: "İzin belgeleri, beyanlar, atık takip formları ve teknik raporlar gerçek denetim senaryosuyla karşılaştırılarak incelenir.",
      },
      {
        title: "Risk Tespiti ve Önceliklendirme",
        desc: "Eksiklikler ve riskli alanlar belirlenerek öncelik sıralaması yapılır; acil aksiyon gerektiren konular hızla ele alınır.",
      },
      {
        title: "Belge Tamamlama",
        desc: "Eksik ya da süresi dolan belgeler tamamlanır, güncellenir ve denetim öncesinde yerine konulur.",
      },
      {
        title: "Denetim Günü Desteği",
        desc: "İstenirse denetim günü teknik ekibimiz yerinde hazır bulunarak denetçilerle koordinasyona katkı sağlar.",
      },
    ],
    nasSupport:
      "Nas Çevre Danışmanlık, denetim hazırlığını sistematik ve kapsamlı biçimde yürütür. Gerçek denetim bakış açısıyla tesisinizi değerlendirir, olası sorulara ve bulgulara önceden hazırlıklı olmanızı sağlar. Eksikliklerin giderilmesinde teknik mühendislik desteği sunar ve gerektiğinde denetim gününde yerinde bulunur.",
    localSeo:
      "Uşak Organize Sanayi Bölgesi ve il genelindeki sanayi tesislerinde çevre denetimleri son yıllarda daha düzenli gerçekleştirilmektedir. Kütahya, Afyonkarahisar ve Manisa'daki tesisler de benzer denetim süreçlerine tabi olmaktadır. Bu bölgelerdeki yerel denetim pratiklerini bilen Nas Çevre Danışmanlık, işletmeleri en doğru biçimde hazırlamaktadır.",
    relatedSlugs: ["cevre-danismanligi", "cevre-izin-ve-lisans", "cevre-beyanlari"],
    faqs: [
      {
        q: "Çevre denetimi ne sıklıkla yapılır?",
        a: "Denetim sıklığı tesisin risk sınıfına, faaliyet türüne ve önceki denetim bulgularına göre değişir. Yılda birden fazla denetimle karşılaşmak mümkündür.",
      },
      {
        q: "Denetimde en sık hangi eksiklikler tespit edilir?",
        a: "Süresi dolmuş çevre izin ve lisansı, eksik atık takip formları, yapılmamış beyanlar ve güncel olmayan acil durum planları denetimlerde sık karşılaşılan bulgulardandır.",
      },
      {
        q: "Habersiz denetim gerçekleşebilir mi?",
        a: "Evet. Mevzuat kapsamında habersiz denetimler mümkündür. Bu nedenle denetim hazırlığının sürekli güncel tutulması önerilmektedir.",
      },
      {
        q: "Denetim günü teknik ekibiniz yerinde bulunabilir mi?",
        a: "Evet. Talep edilmesi durumunda teknik ekibimiz denetim günü yerinde bulunarak denetçilerle koordinasyona katkı sağlar.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // 8. Mevzuat Takibi
  // ─────────────────────────────────────────
  {
    slug: "mevzuat-takibi",
    title: "Mevzuat Takibi",
    h1: "Mevzuat Takibi",
    metaTitle: "Uşak Çevre Mevzuatı Takibi | Nas Çevre Danışmanlık",
    metaDescription:
      "Uşak'ta çevre mevzuatı değişikliklerinin işletmeye özgü takibi, etki analizi ve uyum eylem planı güncelleme danışmanlığı. Nas Çevre.",
    introParagraph1:
      "Çevre mevzuatı; yönetmelik değişiklikleri, yeni bildirim yükümlülükleri ve idari pratiklerdeki güncellemelerle sürekli gelişmektedir. Bu değişikliklerin zamanında fark edilmemesi; mevcut belgelerin geçersiz hale gelmesine, yeni yükümlülüklerin atlanmasına ve denetimde uyumsuzluk bulgusuna yol açabilir.",
    introParagraph2:
      "Uşak ve çevre illerdeki işletmeler için mevzuat takibi; özellikle deri, tekstil, kimya ve gıda gibi düzenleyici değişikliklerden yakından etkilenen sektörlerde kritik bir hizmet alanıdır. Nas Çevre Danışmanlık, sektörünüzü etkileyen yasal düzenlemeleri sürekli izleyerek değişikliklerin işletmenize özgü etkisini analiz etmektedir.",
    scopeItems: [
      "Çevre Bakanlığı duyuruları ve Resmi Gazete'deki mevzuat değişikliklerinin izlenmesi",
      "Sektöre özgü yönetmelik ve tebliğ güncellemelerinin takibi",
      "Yeni yükümlülüklerin işletmeye özgü etki analizinin yapılması",
      "Uyum eylem planının güncellenmesi ve aksiyon adımlarının belirlenmesi",
      "Değişikliklere ilişkin düzenli bilgilendirme raporlarının hazırlanması",
      "İşletmenin mevcut belgelerinin yeni mevzuatla uyumunun değerlendirilmesi",
      "Gerekli başvuru ve güncelleme süreçlerinin zamanında başlatılması",
    ],
    targetBusinesses:
      "Çevre mevzuatının sık değiştiği alanlarda faaliyet gösteren fabrikalar, üretim tesisleri, deri ve tekstil işletmeleri, kimya ve boya fabrikaları, gıda üretim tesisleri, geri dönüşüm firmaları ve tarımsal işleme tesisleri mevzuat takibi hizmetinden yararlanabilecek başlıca sektörlerdir.",
    processSteps: [
      {
        title: "Kapsam Belirleme",
        desc: "İşletmenizin faaliyet alanı ve mevcut yükümlülükleri belirlenerek hangi mevzuat alanlarının takip edileceği tespit edilir.",
      },
      {
        title: "Sürekli İzleme",
        desc: "Resmi Gazete, bakanlık duyuruları ve sektörel yayınlar düzenli olarak izlenir; faaliyet alanınızı etkileyen değişiklikler anında tespit edilir.",
      },
      {
        title: "Etki Analizi ve Bilgilendirme",
        desc: "Her değişiklik işletmenize özgü etki analizi yapılarak bilgilendirme raporu hazırlanır ve paylaşılır.",
      },
      {
        title: "Uyum Planı Güncelleme",
        desc: "Gerekli belge güncellemeleri, yeni başvurular ve uygulama adımları zamanında planlanır ve hayata geçirilir.",
      },
    ],
    nasSupport:
      "Nas Çevre Danışmanlık, çevre mevzuatındaki gelişmeleri sürekli izleyen ve bunların işletmeler üzerindeki pratik etkisini analiz eden deneyimli ekibiyle bu hizmeti sunmaktadır. Mevzuat değişikliklerine hazırlıksız yakalanmak yerine proaktif bir uyum yaklaşımı benimsenmesi, uzun vadede hem yasal riski hem de operasyonel maliyeti azaltır.",
    localSeo:
      "Uşak, Kütahya, Afyonkarahisar, Denizli ve Manisa'daki sanayi tesisleri mevzuat takibini genellikle yoğun üretim süreçleri arasında geri planda bırakmaktadır. Oysa özellikle atık yönetimi, tehlikeli madde ve emisyon alanlarındaki yönetmelik güncellemeleri bu illerdeki işletmeleri doğrudan etkileyebilmektedir. Nas Çevre Danışmanlık bu riski sistematik izleme hizmetiyle yönetmektedir.",
    relatedSlugs: ["cevre-danismanligi", "denetim-hazirligi", "cevre-beyanlari"],
    faqs: [
      {
        q: "Mevzuat değişikliklerini kendim takip edemez miyim?",
        a: "Resmi Gazete ve bakanlık duyurularını izlemek mümkündür; ancak değişikliklerin işletmenize özgü etkisini analiz etmek teknik ve hukuki bilgi gerektirmektedir. Profesyonel takip bu riski minimize eder.",
      },
      {
        q: "Yeni bir yönetmelik yayımlandığında ne kadar sürede bilgilendirilirim?",
        a: "Faaliyet alanınızı ilgilendiren değişiklikler yayımlanmasını takiben kısa sürede bilgilendirme raporu olarak paylaşılır.",
      },
      {
        q: "Bu hizmet bağımsız olarak alınabilir mi?",
        a: "Evet. Mevzuat takibi, mevcut çevre danışmanlığı hizmetinizin yanında destekleyici bir modül olarak ya da bağımsız olarak sunulabilmektedir.",
      },
      {
        q: "Mevzuata uyumsuzluk hangi yaptırımlara yol açar?",
        a: "Mevzuata aykırılıklar; idari para cezası, tesis durdurma ve lisans iptali gibi yaptırımları beraberinde getirebilir. Zamanında uyum bu riskleri ortadan kaldırır.",
      },
    ],
  },
];
