export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/905053975054?text=Merhaba%2C%20%C3%A7evre%20dan%C4%B1%C5%9Fmanl%C4%B1%C4%9F%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="
        fixed bottom-5 right-5
        sm:bottom-5 sm:right-5
        bottom-4 right-4
        z-40
        flex items-center justify-center
        w-14 h-14
        sm:w-14 sm:h-14
        rounded-full
        bg-[#25D366]
        shadow-[0_4px_16px_rgba(37,211,102,0.35)]
        transition-all duration-200 ease-out
        hover:scale-110
        hover:shadow-[0_6px_24px_rgba(37,211,102,0.5)]
        hover:opacity-95
        active:scale-100
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-7 h-7 sm:w-7 sm:h-7"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.548 5.874L.057 23.57a.75.75 0 0 0 .921.921l5.696-1.491A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.693 9.693 0 0 1-4.983-1.374l-.357-.212-3.706.97.987-3.607-.232-.371A9.694 9.694 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
      </svg>
    </a>
  );
}
