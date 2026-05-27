export interface BlogSection {
  h2: string;
  body: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishDate: string;
  readingTime: string;
  sections: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "her-isletmenin-cevre-danismani-zorunlu-mu",
    title: "Her İşletme Çevre Danışmanı Almak Zorunda mı?",
    metaTitle: "Çevre Danışmanı Zorunlu mu? | Nas Çevre Danışmanlık",
    metaDescription:
      "Çevre danışmanı almak hangi işletmeler için yasal zorunluluktur? Zorunlu olmayan işletmeler için neden önemlidir? Kapsamlı değerlendirme.",
    publishDate: "2025-01-15",
    readingTime: "4 dk",
    sections: [
      {
        h2: "Yasal Zorunluluk Kapsamı",
        body: "Çevre mevzuatına göre belirli kapasite ve faaliyet türündeki tesisler için çevre görevlisi istihdam etme ya da çevre danışmanlık hizmeti alma zorunluluğu bulunmaktadır. Bu zorunluluk; tesisin çevre izin ve lisansı kapsamında olup olmadığına, üretim kapasitesine ve faaliyetin çevre üzerindeki potansiyel etkisine göre belirlenmektedir.",
      },
      {
        h2: "Hangi İşletmeler İçin Zorunludur?",
        body: "Çevre İzin ve Lisansı'na tabi olan sanayi tesisleri, faaliyet kapasitesi belirli eşiği aşan fabrikalar ve tehlikeli madde kullanan üretim tesisleri yasal olarak çevre danışmanlığı almak zorundadır. Bu kapsamdaki işletmeler için ilgili çevre mevzuatında yükümlülükler ayrıntılı biçimde tanımlanmıştır.",
      },
      {
        h2: "Zorunlu Olmayan İşletmeler İçin Önemi",
        body: "Yasal zorunluluk kapsamı dışındaki işletmeler için de çevre danışmanlığı önemli bir güvence sağlar. Mevzuatın sık değiştiği çevre alanında gerekli beyanları zamanında yapamamak, eksik izin belgesiyle faaliyet göstermek veya denetimde hazırlıksız yakalanmak ciddi yaptırımlara yol açabilir. Profesyonel danışmanlık bu riskleri en aza indirir.",
      },
      {
        h2: "İşletmenizin Durumunu Nasıl Değerlendirirsiniz?",
        body: "Faaliyet alanınız ve tesis büyüklüğünüze göre zorunluluğun kapsamını belirlemenin en doğru yolu bir ön değerlendirme yapmaktır. Nas Çevre Danışmanlık, ücretsiz ön görüşmeyle işletmenizin durumunu değerlendirmekte ve uygun hizmet modelini önermektedir.",
      },
    ],
  },
  {
    slug: "cevre-izin-ve-lisans-belgesi-nedir",
    title: "Çevre İzin ve Lisans Belgesi Nedir, Kimler Almalıdır?",
    metaTitle: "Çevre İzin ve Lisans Belgesi Nedir? | Nas Çevre Danışmanlık",
    metaDescription:
      "Çevre izin ve lisansı nedir, hangi faaliyetler için zorunludur, başvuru süreci nasıl işler? Kapsamlı rehber.",
    publishDate: "2025-02-01",
    readingTime: "5 dk",
    sections: [
      {
        h2: "Çevre İzin ve Lisansı Nedir?",
        body: "Çevre İzin ve Lisansı, hava emisyonu, atık su deşarjı, gürültü ve titreşim, tehlikeli atık gibi çevre üzerinde önemli etkileri olan faaliyetler yürüten tesislerin, bu faaliyetleri çevre mevzuatı çerçevesinde yürütebilmesi için almak zorunda olduğu belgedir. Belge, Çevre, Şehircilik ve İklim Değişikliği Bakanlığı tarafından verilmektedir.",
      },
      {
        h2: "Hangi Faaliyetler Kapsam Dahilindedir?",
        body: "Organize sanayi bölgelerindeki üretim tesisleri, geri dönüşüm ve bertaraf tesisleri, kimya ve boya fabrikaları, tekstil ve deri işleme tesisleri, büyük ölçekli hayvancılık işletmeleri ve depolama tesisleri bu belgeyi almak zorunda olan faaliyetler arasındadır. Kapsamın tam listesi Çevre İzin ve Lisans Yönetmeliği'nde yer almaktadır.",
      },
      {
        h2: "Başvuru Süreci Nasıl İşler?",
        body: "Başvuru e-çevre sistemi üzerinden yapılmaktadır. Ön başvuru aşamasında tesis bilgileri ve teknik dokümanlar sisteme yüklenir. Yetkili çevre otoritesi tarafından başvuru incelenerek ek bilgi talep edilebilir. Eksikliklerin giderilmesinin ardından izin veya lisans belgesi düzenlenir.",
      },
      {
        h2: "Belge Olmadan Faaliyet Göstermenin Riskleri",
        body: "Çevre İzin ve Lisansı olmadan faaliyet gösteren işletmeler yüksek idari para cezasıyla karşılaşabilir. Tekrarlayan ihlallerde tesisin faaliyetinin geçici veya kalıcı olarak durdurulması söz konusu olabilir. Bu nedenle belgenin zamanında alınması ve yenilenmesi kritik önem taşımaktadır.",
      },
    ],
  },
  {
    slug: "ced-gerekli-degildir-karari-nedir",
    title: "ÇED Gerekli Değildir Kararı Nedir ve Nasıl Alınır?",
    metaTitle: "ÇED Gerekli Değildir Kararı | Nas Çevre Danışmanlık",
    metaDescription:
      "ÇED Gerekli Değildir kararı nedir, hangi projeler için alınır ve başvuru süreci nasıl yönetilir? Detaylı bilgi.",
    publishDate: "2025-02-20",
    readingTime: "4 dk",
    sections: [
      {
        h2: "Çevresel Etki Değerlendirmesi (ÇED) Nedir?",
        body: "ÇED, büyük ölçekli veya çevre üzerinde önemli etkiler yaratabilecek yatırım projelerinin yapılabilirliğini çevresel açıdan inceleyen ve karar sürecine katkı sağlayan sistematik bir değerlendirme sürecidir. ÇED Yönetmeliği kapsamındaki projeler için başvuru zorunludur.",
      },
      {
        h2: "Gerekli Değildir Kararı Ne Anlama Gelir?",
        body: "ÇED Yönetmeliği'nin II. listesinde yer alan projeler için, yetkili otorite projenin çevre üzerindeki olası etkilerini değerlendirerek tam ÇED sürecine gerek olmadığına karar verebilir. 'ÇED Gerekli Değildir' kararı, projenin mevcut koşullarda hayata geçirilebileceğini belgeleyen resmi bir karardır.",
      },
      {
        h2: "Başvuru Nasıl Yapılır?",
        body: "ÇED Gerekli Değildir kararı için proje tanıtım dosyası hazırlanarak ilgili Valiliğe ya da Bakanlığa başvuru yapılır. Dosyada projenin özellikleri, konumu, faaliyet türü ve çevre etkileri ayrıntılı biçimde belirtilmelidir. Değerlendirme sonucunda karar aşamasına gelinir.",
      },
      {
        h2: "Bu Kararın Yatırımlar Açısından Önemi",
        body: "ÇED Gerekli Değildir kararı olmadan inşaat veya faaliyet izni alınamaz. Kararın doğru ve eksiksiz bir dosyayla zamanında alınması yatırım süreçlerini önemli ölçüde hızlandırır ve olası hukuki riskleri en aza indirir.",
      },
    ],
  },
  {
    slug: "sifir-atik-belgesi-nasil-alinir",
    title: "Sıfır Atık Belgesi Nasıl Alınır?",
    metaTitle: "Sıfır Atık Belgesi Nasıl Alınır? | Nas Çevre Danışmanlık",
    metaDescription:
      "Sıfır Atık Yönetmeliği kapsamında belge alma süreci, gerekli belgeler ve belge sonrası yükümlülükler hakkında kapsamlı bilgi.",
    publishDate: "2025-03-10",
    readingTime: "5 dk",
    sections: [
      {
        h2: "Sıfır Atık Yönetmeliği Nedir?",
        body: "Sıfır Atık Yönetmeliği, israfı önlemek, geri dönüşümü artırmak ve atığın düzenli depolama tesisine gönderilmesini azaltmak amacıyla yürürlüğe girmiştir. Yönetmelik kapsamında kamu kurumları ve belirli büyüklükteki özel tesisler sıfır atık yönetim sistemi kurmak ve belge almakla yükümlüdür.",
      },
      {
        h2: "Belge Alma Süreci",
        body: "Sıfır atık belgesi için önce tesisin mevcut atık yönetimi altyapısı ve geri dönüşüm oranları değerlendirilir. Sıfır atık yönetim sistemi kurulur, gerekli altyapı tamamlanır ve çalışan eğitimleri verilir. Ardından ilgili makama belge başvurusu yapılır ve denetim süreci yönetilir.",
      },
      {
        h2: "Başvuruda Gerekli Unsurlar",
        body: "Sıfır atık yönetim planı, atık miktarları ve geri dönüşüm oranlarına ilişkin kayıtlar, çalışan eğitim belgeleri ve tesis altyapısına ait bilgiler başvuruda bulunması gereken temel unsurlar arasındadır.",
      },
      {
        h2: "Belge Sonrası Yükümlülükler",
        body: "Belge alındıktan sonra atık azaltma ve geri dönüşüm hedeflerine yönelik periyodik raporlama zorunluluğu devam eder. Belge, belirlenen aralıklarla yenilenmelidir. Bu süreçte düzenli takip ve yıllık raporlama desteği sunulmaktadır.",
      },
    ],
  },
  {
    slug: "cevre-denetimi-oncesi-kontrol-listesi",
    title: "Çevre Denetimi Öncesi İşletmeler İçin Kontrol Listesi",
    metaTitle: "Çevre Denetimi Öncesi Kontrol Listesi | Nas Çevre Danışmanlık",
    metaDescription:
      "Çevre denetimine hazırlanmak için işletmelerin kontrol etmesi gereken belgeler, eksiklikler ve hazırlık adımları.",
    publishDate: "2025-03-25",
    readingTime: "5 dk",
    sections: [
      {
        h2: "Çevre Denetimleri Hakkında",
        body: "Çevre denetimleri, yetkili çevre otoritelerinin işletmelerin çevre mevzuatına uyumunu yerinde incelediği ve eksiklikleri tespit ettiği süreçlerdir. Denetimler önceden bildirilebileceği gibi habersiz de gerçekleştirilebilir. Denetim sonunda tespit edilen eksiklikler için idari yaptırım uygulanabilir.",
      },
      {
        h2: "Denetim Öncesi Kontrol Etmeniz Gerekenler",
        body: "Çevre İzin ve Lisans belgesi güncel ve eksiksiz olmalıdır. Atık takip formları ve yıllık atık beyanları tamamlanmış ve arşivlenmiş olmalıdır. Emisyon ve deşarj ölçüm raporları hazır bulunmalıdır. Sıfır atık sistemi kurulu olan tesislerde kayıt formları eksiksiz tutulmuş olmalıdır.",
      },
      {
        h2: "Sık Karşılaşılan Eksiklikler",
        body: "Denetimlerde en sık karşılaşılan bulgular arasında süresi dolan izin ve lisanslar, eksik veya hatalı atık takip formları, yapılmamış veya gecikmiş beyanlar ve acil durum planlarının güncel olmaması yer almaktadır. Bu eksikliklerin önceden giderilmesi yaptırım riskini ortadan kaldırır.",
      },
      {
        h2: "Nas Çevre ile Denetim Hazırlığı",
        body: "Nas Çevre Danışmanlık, denetim öncesinde kapsamlı bir durum değerlendirmesi yaparak işletmenizin tüm çevre belgelerini inceler. Eksiklikler tespit edilip öncelik sırasına konulur, gerekli belgeler tamamlanır ve denetim günü teknik destek sağlanır.",
      },
    ],
  },
  {
    slug: "atik-yonetim-plani-nedir",
    title: "Atık Yönetim Planı Nedir, Hangi İşletmeler Hazırlamak Zorundadır?",
    metaTitle: "Atık Yönetim Planı Nedir? | Nas Çevre Danışmanlık",
    metaDescription:
      "Atık yönetim planı nedir, yasal zorunluluk kapsamı nedir ve nasıl hazırlanır? İşletmeler için kapsamlı rehber.",
    publishDate: "2025-04-08",
    readingTime: "4 dk",
    sections: [
      {
        h2: "Atık Yönetim Planı Nedir?",
        body: "Atık yönetim planı, bir işletmenin faaliyetleri sonucunda ortaya çıkan atıkların nasıl sınıflandırılacağını, depolanacağını, taşınacağını ve bertaraf edileceğini düzenleyen belgedir. Plan; atık türleri, miktarları, taşıma yöntemleri ve sorumlu kişileri kapsar.",
      },
      {
        h2: "Yasal Zorunluluk Kapsamı",
        body: "Tehlikeli atık üreten işletmeler ve yıllık belirli miktarın üzerinde atık üreten tesisler atık yönetim planı hazırlamakla yükümlüdür. Çevre mevzuatı, planın hazırlanması ve periyodik güncellenmesi için ayrıntılı gereklilikler belirlemektedir.",
      },
      {
        h2: "Atık Yönetim Planı Nasıl Hazırlanır?",
        body: "Önce işletmede üretilen tüm atık türleri ve miktarları envanter çalışmasıyla belirlenir. Her atık türü için sınıflandırma, geçici depolama, taşıma ve bertaraf yöntemi tanımlanır. Sorumlu personel belirlenir ve plan dönemsel olarak güncellenir.",
      },
      {
        h2: "Nas Çevre ile Atık Yönetimi",
        body: "Nas Çevre Danışmanlık, atık envanterinin çıkarılmasından planın hazırlanmasına ve yıllık beyanın tamamlanmasına kadar atık yönetimi sürecinin tamamını üstlenir. Lisanslı taşıyıcı seçimi ve bertaraf tesisi koordinasyonunda da destek sağlanır.",
      },
    ],
  },
  {
    slug: "cevre-beyani-ne-zaman-yapilir",
    title: "Çevre Beyanları Ne Zaman ve Nasıl Yapılır?",
    metaTitle: "Çevre Beyanları Ne Zaman Yapılır? | Nas Çevre Danışmanlık",
    metaDescription:
      "İşletmelerin yapmak zorunda olduğu çevre beyanları, beyan dönemleri ve beyan yapılmamasının sonuçları hakkında bilgi.",
    publishDate: "2025-04-22",
    readingTime: "4 dk",
    sections: [
      {
        h2: "Çevre Beyanı Nedir?",
        body: "Çevre beyanı, işletmelerin emisyon, deşarj, gürültü ve tehlikeli madde gibi çevre üzerindeki etkilerini yetkili makamlara bildirdiği resmi bildirimlerdir. Beyanlar, tesisin yasal yükümlülüklerine uygun biçimde faaliyet gösterdiğini belgelemek açısından kritik öneme sahiptir.",
      },
      {
        h2: "Hangi Beyanlar Hangi Dönemde Yapılır?",
        body: "Yıllık atık beyanı her yılın belirli ayları içinde e-çevre sistemi üzerinden yapılır. Emisyon beyanları ve deşarj izni bildirimleri de yıllık ya da altı aylık dönemlerle iletilmelidir. Tehlikeli madde stok bildirimleri ise başlı başına ayrı bir takvime tabidir.",
      },
      {
        h2: "Beyan Yapılmamasının Sonuçları",
        body: "Yasal süresi içinde yapılmayan veya eksik yapılan beyanlar idari para cezasına yol açabilir. Aynı ihlal tekrarlandığında ceza miktarı artar ve faaliyet durdurma yaptırımına kadar ulaşabilir. Bu nedenle beyan takviminin profesyonel biçimde takip edilmesi önem taşır.",
      },
      {
        h2: "Nas Çevre ile Beyan Takibi",
        body: "Nas Çevre Danışmanlık, işletmenizin tüm beyan yükümlülüklerini takvime bağlayarak zamanında tamamlanmasını sağlar. Beyan için gereken ölçüm koordinasyonu ve teknik dokümanların hazırlanması da hizmet kapsamına dahildir.",
      },
    ],
  },
];
