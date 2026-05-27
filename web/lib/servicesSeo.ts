export interface ServiceSeo {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  scope: string;
  targetBusinesses: string;
  process: string;
  nasSupport: string;
  faqs: { q: string; a: string }[];
}

export const SERVICES_SEO: ServiceSeo[] = [
  {
    slug: "cevre-danismanligi",
    title: "Çevre Danışmanlığı",
    metaTitle: "Çevre Danışmanlığı | Nas Çevre Danışmanlık Mühendislik – Uşak",
    metaDescription:
      "Uşak ve çevre illerdeki işletmelere çevre mevzuatı uyumu, izin takibi ve denetim hazırlığı konularında kapsamlı çevre danışmanlığı hizmeti.",
    intro:
      "İşletmenizin çevre mevzuatına uyumunu sağlamak, yasal yükümlülükleri düzenli biçimde yönetmek ve denetim hazırlıklarını organize etmek için kapsamlı danışmanlık desteği sunuyoruz. Periyodik kontroller, mevzuat güncellemeleri ve teknik raporlama süreçlerinde işletmenizin yanında yer alıyoruz.",
    scope:
      "Çevre danışmanlığı hizmeti; işletmenizin faaliyet türüne göre geçerli yasal yükümlülüklerin tespitini, eksik belge ve izinlerin belirlenmesini, periyodik beyan ve raporların hazırlanmasını ve denetim süreçlerinin yönetilmesini kapsar. Mevzuat değişiklikleri düzenli olarak izlenerek işletmeniz zamanında bilgilendirilir.",
    targetBusinesses:
      "Organize sanayi bölgelerinde faaliyet gösteren üretim tesisleri, fabrikalar, geri dönüşüm firmaları, oteller, hastaneler, inşaat firmaları ve çevre mevzuatı kapsamında herhangi bir yasal yükümlülüğü bulunan tüm ölçeklerdeki işletmeler bu hizmetten yararlanabilir.",
    process:
      "İşletmenizin faaliyet türü ve mevcut çevre süreçleri önce kapsamlı biçimde analiz edilir. Yasal yükümlülükler, süresi dolan belgeler ve öncelikli aksiyon alanları belirlenir. İşletmeye özel bir yönetim takvimi oluşturularak izin, beyan, rapor ve denetim süreçleri düzenli biçimde takip edilir.",
    nasSupport:
      "Nas Çevre Danışmanlık, Uşak merkezli deneyimli mühendislik kadrosuyla süreci baştan sona yönetir. Yasal süreler kaçırılmadan gerekli bildirimleri yapar, denetimler öncesinde işletmenizi hazır hale getirir ve güncel mevzuat değişikliklerini düzenli olarak paylaşır.",
    faqs: [
      {
        q: "Çevre danışmanlığı hizmeti almak zorunlu mudur?",
        a: "Belirli kapasitedeki ve faaliyet türündeki tesisler için çevre danışmanı istihdam etme veya danışmanlık hizmeti alma yasal zorunluluğu bulunmaktadır. Küçük ölçekli işletmeler için zorunlu olmasa da mevzuata uyum ve denetim güvencesi açısından danışmanlık almak önemli bir önlem sağlar.",
      },
      {
        q: "Hizmet hangi sıklıkta sunulmaktadır?",
        a: "Hizmet kapsamı işletmenizin ihtiyacına göre yapılandırılır; aylık periyodik takip, üç aylık kontrol veya proje bazlı destek biçimlerinde sunulabilir.",
      },
      {
        q: "Başka şehirlerdeki işletmelere hizmet veriliyor mu?",
        a: "Evet. Uşak merkezli olmakla birlikte Kütahya, Afyon, Denizli, Manisa, İzmir ve çevre illerdeki işletmelere hizmet sunulmaktadır.",
      },
      {
        q: "Mevcut çevre izinlerim yeterli mi, nasıl öğrenebilirim?",
        a: "İlk ön görüşmede faaliyet türünüz ve mevcut belgeleriniz değerlendirilerek eksiklikler tespit edilir. Bu değerlendirme ücretsiz olarak gerçekleştirilmektedir.",
      },
    ],
  },
  {
    slug: "cevre-izin-ve-lisans",
    title: "Çevre İzin ve Lisans",
    metaTitle: "Çevre İzin ve Lisans | Nas Çevre Danışmanlık – Uşak",
    metaDescription:
      "Entegre çevre izni ve çevre izin ve lisansı başvurusu, belgeleme ve takip süreçlerinde Uşak'tan profesyonel danışmanlık hizmeti.",
    intro:
      "Entegre Çevre İzni ve Çevre İzin ve Lisansı kapsamındaki tüm başvuru, belgeleme ve takip süreçlerini ekibimiz yönetir. E-çevre sistemi işlemleri, yetkili makam koordinasyonu ve lisans yenileme süreçlerinde işletmenizin yanında yer alıyoruz.",
    scope:
      "Çevre izin ve lisans hizmeti; ön başvuru aşamasından lisans onayına ve yenilenmesine kadar tüm süreci kapsar. Başvuru dosyasının hazırlanması, eksik belgelerin tamamlanması, yetkili makamlarla yazışmalar ve e-çevre sistemi üzerindeki tüm işlemler dahildir.",
    targetBusinesses:
      "Hava emisyonu, atık su deşarjı, gürültü veya titreşim gibi çevre üzerinde etkisi olan faaliyetleri bulunan sanayi tesisleri, fabrikalar, organize sanayi bölgesi üyeleri ve işletmecileri bu hizmetten yararlanabilir.",
    process:
      "Önce işletmenizin faaliyet türü ve tesis kapasitesi değerlendirilerek hangi tür izin gerektiği belirlenir. Başvuru dosyası hazırlanır, eksik teknik dokümanlar tamamlanır ve yetkili çevre otoritesiyle koordineli biçimde süreç yürütülür. Lisans alındıktan sonra yenileme takvimi de takip edilir.",
    nasSupport:
      "Nas Çevre Danışmanlık, başvuru öncesinden lisans onayına kadar tüm süreci yönetir. E-çevre sistemi üzerindeki teknik işlemleri gerçekleştirir, yetkili makamlarla gerekli iletişimi sağlar ve olası eksiklikleri zamanında giderir.",
    faqs: [
      {
        q: "Çevre İzin ve Lisansı olmadan faaliyet göstermek mümkün mü?",
        a: "Hayır. İlgili mevzuat kapsamındaki işletmeler için Çevre İzin ve Lisansı zorunludur. Belgesiz faaliyet göstermek idari para cezası ve faaliyet durdurma yaptırımlarına yol açabilir.",
      },
      {
        q: "Lisans başvurusu ne kadar sürer?",
        a: "Süre faaliyet türüne ve başvuru dosyasının eksiksizliğine bağlı olarak değişmekle birlikte genellikle birkaç ayı kapsayan bir süreçtir. Ekibimiz bu süreci hızlandıracak şekilde yönetir.",
      },
      {
        q: "Mevcut lisansımı yenilemek için ne yapmalıyım?",
        a: "Lisans yenileme başvurusunun süre dolmadan yapılması gerekir. Gerekli belgeler ve güncel teknik raporlarla yenileme sürecini ekibimiz takip eder.",
      },
    ],
  },
  {
    slug: "ced-surecleri",
    title: "ÇED Süreçleri",
    metaTitle: "ÇED Danışmanlığı | Çevresel Etki Değerlendirmesi – Nas Çevre Uşak",
    metaDescription:
      "ÇED başvurusu, rapor hazırlama, halkın katılımı ve bakanlık süreci yönetiminde Uşak merkezli profesyonel ÇED danışmanlığı.",
    intro:
      "Çevresel Etki Değerlendirmesi (ÇED) süreçlerinde başvuru öncesi değerlendirmeden bakanlık onayına kadar tüm aşamaları yönetiyoruz. ÇED gerekli/gerekli değil kararı, rapor hazırlama ve halkın katılımı toplantılarında kapsamlı teknik destek sağlıyoruz.",
    scope:
      "ÇED danışmanlığı hizmeti; projenizin ÇED yönetmeliği kapsamında değerlendirilmesini, başvuru dosyasının ve ÇED raporunun hazırlanmasını, halkın katılımı toplantısının koordinasyonunu ve Çevre, Şehircilik ve İklim Değişikliği Bakanlığı nezdindeki süreç takibini kapsar.",
    targetBusinesses:
      "Yeni sanayi tesisi, enerji santrali, maden sahası, büyük ölçekli tarımsal proje, altyapı yatırımı veya turizm tesisi kurulumu planlayan yatırımcılar ve işletmeciler bu hizmetten yararlanabilir.",
    process:
      "Proje bilgileri ve fizibilite dokümanları incelenerek önce ÇED gerekliliği belirlenir. 'Gerekli Değildir' kararı için başvuru ya da tam ÇED raporu hazırlama aşamasına geçilir. Halkın katılımı toplantısı organize edilir ve bakanlık süreciyle resmi yazışmalar yönetilir.",
    nasSupport:
      "Nas Çevre Danışmanlık, teknik rapor hazırlama konusundaki deneyimiyle ÇED sürecinde kapsamlı destek sağlar. Bakanlık sürecini yakından takip eder, ek bilgi taleplerini zamanında yanıtlar ve halkın katılımı toplantısının düzenli biçimde gerçekleştirilmesini koordine eder.",
    faqs: [
      {
        q: "Her yatırım için ÇED zorunlu mudur?",
        a: "Hayır. ÇED yönetmeliği belirli ölçek ve türdeki projeleri kapsar. Projenizin yönetmelik kapsamında olup olmadığı başvuru öncesinde değerlendirilmelidir.",
      },
      {
        q: "ÇED Gerekli Değildir Kararı nedir?",
        a: "Projenizin çevre üzerindeki etkilerinin tam ÇED sürecini gerektirmeyecek düzeyde olduğuna dair yetkili otoritenin verdiği belgedir. Bu karar da bir başvuru süreciyle alınır.",
      },
      {
        q: "ÇED süreci ne kadar sürer?",
        a: "Süreç projenin büyüklüğüne ve karmaşıklığına göre değişir; birkaç aydan iki yıla kadar uzayabilir. Dosyanın eksiksiz hazırlanması süreci önemli ölçüde kısaltır.",
      },
    ],
  },
  {
    slug: "atik-yonetimi",
    title: "Atık Yönetimi",
    metaTitle: "Atık Yönetimi Danışmanlığı | Nas Çevre Danışmanlık – Uşak",
    metaDescription:
      "Atık beyanı, taşıma izni, bertaraf belgeleri ve UATF kayıt yönetiminde Uşak merkezli atık yönetimi danışmanlığı.",
    intro:
      "İşletmenizin atık türlerine göre yasal yükümlülüklerini belirliyor, atık beyanları, taşıma izinleri, bertaraf belgeleri ve kayıt form yönetimini üstleniyoruz. Atık yönetimi süreçlerinizi mevzuata uygun, izlenebilir ve düzenli biçimde yürütüyoruz.",
    scope:
      "Atık yönetimi hizmeti; tehlikeli ve tehlikesiz atık sınıflandırmasını, yıllık atık beyanının hazırlanmasını, lisanslı taşıyıcı ve bertaraf tesisi koordinasyonunu, UATF belgelerinin ve kayıt formlarının yönetimini kapsar.",
    targetBusinesses:
      "Üretim atığı, tehlikeli atık, ambalaj atığı veya tıbbi atık üreten fabrikalar, sanayi tesisleri, hastaneler, inşaat firmaları ve her ölçekteki işletme atık yönetimi danışmanlığından yararlanabilir.",
    process:
      "İşletmenizin ürettiği atık türleri ve miktarları tespit edilerek atık envanteri oluşturulur. Yasal yükümlülükler belirlenir, lisanslı taşıyıcı ve bertaraf tesisiyle koordinasyon sağlanır. Yıllık atık beyanı ve gerekli form kayıtları zamanında tamamlanır.",
    nasSupport:
      "Nas Çevre Danışmanlık, atık envanterinin çıkarılmasından yıllık beyan tamamlanmasına kadar tüm süreci yönetir. Lisanslı taşıyıcı seçimi ve bertaraf belgelendirmesinde işletmenize yol gösterir, UATF kayıtlarının eksiksiz tutulmasını sağlar.",
    faqs: [
      {
        q: "Yıllık atık beyanı her işletmeden isteniyor mu?",
        a: "Belirli atık türü ve miktarının üzerindeki işletmeler yıllık atık beyanı vermekle yükümlüdür. Beyan yükümlülüğü atığın niteliğine ve miktarına göre değişmektedir.",
      },
      {
        q: "Tehlikeli atıkları kim taşıyabilir?",
        a: "Tehlikeli atıklar yalnızca Çevre ve Şehircilik Bakanlığı'ndan lisanslı taşıyıcılar aracılığıyla taşınabilir. Lisanssız taşıma işlemi hem işletme hem de taşıyıcı için yaptırım konusudur.",
      },
      {
        q: "Atık takip formlarını düzenlemek zorunlu mu?",
        a: "Evet. Tehlikeli atık üreticilerinin atık takip formu (UATF) düzenlemesi ve belgeleri saklaması yasal zorunluluktur.",
      },
    ],
  },
  {
    slug: "sifir-atik-danismanligi",
    title: "Sıfır Atık Danışmanlığı",
    metaTitle: "Sıfır Atık Belgesi ve Danışmanlığı | Nas Çevre – Uşak",
    metaDescription:
      "Sıfır Atık Yönetmeliği kapsamında sistem kurulumu, sıfır atık belgesi başvurusu ve sonrası takip hizmetleri. Uşak ve çevre iller.",
    intro:
      "Sıfır Atık Yönetmeliği kapsamında işletmenizin mevcut durumunu analiz ediyor, sıfır atık yönetim sistemini kuruyor ve belge başvurusunu yönetiyoruz. Belge alındıktan sonra da düzenli takip desteği sunuyoruz.",
    scope:
      "Sıfır atık danışmanlığı hizmeti; mevcut atık yönetimi altyapısının değerlendirilmesini, geri dönüşüm oranlarının tespit ve iyileştirilmesini, sıfır atık yönetim sistemi kurulumunu ve belge başvurusu dosyasının hazırlanmasını kapsar.",
    targetBusinesses:
      "Kamu kurumları, büyük ölçekli özel sektör işletmeleri, alışveriş merkezleri, oteller, hastaneler ve Sıfır Atık Yönetmeliği kapsamına giren tüm tesisler bu hizmetten yararlanabilir.",
    process:
      "Tesisin atık üretim verileri ve geri dönüşüm altyapısı incelenir. Eksik bileşenler belirlenerek sıfır atık yönetim sistemi oluşturulur. Çalışan eğitimleri planlanır ve belge başvurusu yetkili makama iletilir. Belge sonrasında periyodik takip devam eder.",
    nasSupport:
      "Nas Çevre Danışmanlık, sıfır atık sisteminin kurulumundan belge alımına kadar süreci kapsamlı biçimde destekler. Belge başvurusundaki teknik gereklilikleri eksiksiz karşılar ve yetkili makam denetimine hazırlık sağlar.",
    faqs: [
      {
        q: "Sıfır atık belgesi almak zorunda mıyım?",
        a: "Belirli büyüklükteki kamu binaları ve ticari tesisler için zorunluluk getirilmiştir. Kapsama girmeyen işletmeler gönüllü olarak belge alarak kurumsal sürdürülebilirlik hedeflerini destekleyebilir.",
      },
      {
        q: "Sıfır atık sistemi kurmak ne kadar sürer?",
        a: "Tesisin büyüklüğüne ve mevcut altyapısına göre değişmekle birlikte genellikle birkaç haftadan birkaç aya kadar süren bir hazırlık süreci gereklidir.",
      },
      {
        q: "Belge aldıktan sonra yükümlülüklerim biter mi?",
        a: "Hayır. Sıfır atık belgesi belirli aralıklarla yenilenmeli ve atık azaltma hedefleri raporlanmaya devam etmelidir. Bu süreçte de destek sağlıyoruz.",
      },
    ],
  },
  {
    slug: "cevre-beyanlari",
    title: "Çevre Beyanları",
    metaTitle: "Çevre Beyanları Hizmeti | Nas Çevre Danışmanlık – Uşak",
    metaDescription:
      "Emisyon beyanları, deşarj izinleri, gürültü raporları ve yasal çevre beyanlarının hazırlanması ve süresinde iletilmesinde danışmanlık.",
    intro:
      "Deşarj izinleri, emisyon beyanları, gürültü raporları ve diğer yasal yükümlülük kapsamındaki tüm çevre beyanlarını hazırlıyor, yasal süreler içinde ilgili makama iletilmesini sağlıyoruz. Beyan takviminizi kurumsal bir şekilde yönetiyoruz.",
    scope:
      "Çevre beyanları hizmeti; atık su deşarj izni başvuruları, hava emisyon beyanları, çevresel gürültü raporları, tehlikeli madde envanter bildirimlerini ve yasal beyan takviminin düzenlenmesini kapsar.",
    targetBusinesses:
      "Atık su deşarjı olan, hava emisyonu yaratan veya çevresel gürültü yükümlülüğü bulunan üretim tesisleri, fabrikalar ve sanayi işletmeleri bu hizmetten yararlanabilir.",
    process:
      "İşletmenizin faaliyet kapsamında zorunlu olan beyan türleri tespit edilir. Beyan dönemleri ve yasal süreler bir takvime bağlanır. Her dönemde gerekli ölçümler ve teknik belgeler hazırlanarak yetkili makama eksiksiz iletilir.",
    nasSupport:
      "Nas Çevre Danışmanlık, beyan takvimini sizin adınıza takip eder ve yasal süreler kaçırılmadan gerekli bildirimlerin tamamlanmasını sağlar. Ölçüm koordinasyonundan yetkili makama iletim aşamasına kadar süreci yönetir.",
    faqs: [
      {
        q: "Hangi beyanlar her yıl yapılmak zorundadır?",
        a: "Atık beyanı, emisyon bildirimi ve deşarj izni yenileme gibi beyanların büyük bölümü yıllık olarak yapılmaktadır. Beyan dönemleri faaliyet türüne göre farklılık gösterir.",
      },
      {
        q: "Beyanı geç yaparsam ne olur?",
        a: "Yasal süresi aşılan beyanlar idari para cezasına yol açabilir. Bu nedenle beyan takviminin düzenli takibi kritik önem taşır.",
      },
      {
        q: "Ölçüm raporlarını da siz hazırlıyor musunuz?",
        a: "Ölçümler akredite laboratuvarlar tarafından gerçekleştirilir. Ölçüm sürecini koordine eder, raporların doğruluğunu denetler ve yetkili makama iletimi üstleniriz.",
      },
    ],
  },
  {
    slug: "denetim-hazirligi",
    title: "Denetim Hazırlığı",
    metaTitle: "Çevre Denetim Hazırlığı | Nas Çevre Danışmanlık – Uşak",
    metaDescription:
      "Çevre denetimleri öncesi kapsamlı eksik tespiti, belge tamamlama ve yerinde destek. Uşak ve çevre illerdeki işletmelere hizmet.",
    intro:
      "Çevre denetimleri öncesinde işletmenizin mevcut durumunu kapsamlı biçimde değerlendiriyor; eksiklikleri, riskleri ve öncelikli aksiyon alanlarını belirleyerek sizi denetime hazır hale getiriyoruz. Denetim süresince de yerinde destek sağlıyoruz.",
    scope:
      "Denetim hazırlığı hizmeti; işletmenin tüm çevre belgelerinin ve süreçlerinin gözden geçirilmesini, eksik veya süresi dolan belgelerin tespitini, riskli alanların önceliklendirilmesini ve denetim günü yerinde teknik destek sağlanmasını kapsar.",
    targetBusinesses:
      "Çevre denetimine tabi tüm işletmeler; fabrikalar, sanayi tesisleri, geri dönüşüm firmaları, otel ve konaklama işletmeleri ile organize sanayi bölgesi üyeleri bu hizmetten yararlanabilir.",
    process:
      "Denetim öncesinde işletmenin çevre izinleri, beyanlar, atık kayıtları ve teknik raporlar eksiksiz olarak incelenir. Eksiklikler ve riskli alanlar raporlanır, öncelikli aksiyon planı oluşturulur. Gerekli belgeler tamamlanarak denetim günü teknik ekip yerinde destek sağlar.",
    nasSupport:
      "Nas Çevre Danışmanlık, denetim hazırlığını sistematik biçimde yönetir. Gerçek bir denetim senaryosu üzerinden tesisinizi değerlendirir, olası sorulara hazırlıklı olmanızı sağlar ve gerektiğinde denetçilerle iletişimi teknik ekibimiz koordine eder.",
    faqs: [
      {
        q: "Çevre denetimi ne sıklıkla yapılır?",
        a: "Denetim sıklığı tesisin risk sınıfına, faaliyet türüne ve önceki denetim sonuçlarına göre değişmektedir. Yılda bir veya birden fazla denetimle karşılaşmak mümkündür.",
      },
      {
        q: "Denetimde en sık hangi eksiklikler tespit edilir?",
        a: "Süresi dolmuş izinler, eksik atık takip formları, beyan gecikmeleri ve personel eğitim kayıtlarının eksikliği en sık karşılaşılan bulgulardandır.",
      },
      {
        q: "Denetim bildirim yapılmadan da gelebilir mi?",
        a: "Evet, habersiz denetimler mevzuat kapsamında mümkündür. Bu nedenle denetim hazırlığının sürekli güncel tutulması önerilmektedir.",
      },
    ],
  },
  {
    slug: "mevzuat-takibi",
    title: "Mevzuat Takibi",
    metaTitle: "Çevre Mevzuat Takibi | Nas Çevre Danışmanlık – Uşak",
    metaDescription:
      "Çevre mevzuatındaki değişikliklerin işletmeye özgü takibi, yeni yükümlülüklerin etki analizi ve uyum eylem planı güncelleme hizmeti.",
    intro:
      "Çevre mevzuatındaki değişiklikler ve yeni yükümlülükler işletmenizin faaliyet alanına göre sürekli izleniyor; gerekli güncellemeler zamanında bildirilip uygulamaya alınıyor. Mevzuat değişikliklerinin operasyonel etkilerini minimize etmenize yardımcı oluyoruz.",
    scope:
      "Mevzuat takibi hizmeti; sektörünüze özgü yasal düzenlemelerin izlenmesini, yeni yükümlülüklerin etki analizini, uyum eylem planının güncellenmesini ve düzenli bilgilendirme raporlarının hazırlanmasını kapsar.",
    targetBusinesses:
      "Çevre mevzuatının sık değiştiği alanlarda faaliyet gösteren fabrikalar, sanayi tesisleri, geri dönüşüm firmaları, tarımsal işletmeler ve her ölçekteki şirket bu hizmetten yararlanabilir.",
    process:
      "İşletmenizin faaliyet alanı ve mevcut yükümlülükleri belirlenir. Sektörünüzü etkileyen yasal düzenlemeler takibe alınır. Her değişiklik işletmenize özel etki analizi yapılarak düzenli bilgilendirme raporuyla paylaşılır ve gerektiğinde uyum eylem planı güncellenir.",
    nasSupport:
      "Nas Çevre Danışmanlık, Çevre Bakanlığı duyurularını, yönetmelik değişikliklerini ve tebliğleri sürekli izler. Bu değişikliklerin işletmeniz üzerindeki etkisini analiz eder, uyum için gerekli adımları planlar ve süreci birlikte yönetir.",
    faqs: [
      {
        q: "Mevzuat değişikliklerini kendim takip edemez miyim?",
        a: "Resmi Gazete ve bakanlık duyurularını düzenli takip etmek mümkündür; ancak değişikliklerin işletmenize özgü etkisini analiz etmek teknik bilgi gerektirir. Profesyonel takip bu riski minimize eder.",
      },
      {
        q: "Yeni bir yönetmelik yayımlandığında ne kadar sürede bilgilendirilirim?",
        a: "Faaliyet alanınızı ilgilendiren değişiklikler yayımlanmasını takiben kısa sürede bilgilendirme raporu olarak paylaşılır.",
      },
      {
        q: "Bu hizmet tek başına alınabilir mi?",
        a: "Evet. Mevzuat takibi, mevcut çevre danışmanlığı hizmetinizin yanında destekleyici bir modül olarak ya da bağımsız olarak alınabilir.",
      },
    ],
  },
];
