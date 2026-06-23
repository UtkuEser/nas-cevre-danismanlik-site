import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "nasmuhendislik2016@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

export async function POST(req: NextRequest) {
  console.log("API /api/basvuru tetiklendi");
  console.log("RESEND_API_KEY var mı:", Boolean(process.env.RESEND_API_KEY));
  console.log("CONTACT_TO_EMAIL:", process.env.CONTACT_TO_EMAIL);
  console.log("CONTACT_FROM_EMAIL:", process.env.CONTACT_FROM_EMAIL);

  const body = await req.json();

  const {
    companyName,
    contactName,
    phone,
    email,
    city,
    activityArea,
    businessType,
    service,
    details,
    kvkk,
    _hp, // honeypot
  } = body;

  // Honeypot kontrolü — bot doldurmuşsa sessizce reddet
  if (_hp) {
    return NextResponse.json({ ok: true });
  }

  // Zorunlu alan doğrulama
  const missing: string[] = [];
  if (!companyName?.trim()) missing.push("Firma adı");
  if (!contactName?.trim()) missing.push("Yetkili kişi");
  if (!phone?.trim()) missing.push("Telefon");
  if (!email?.trim()) missing.push("E-posta");
  if (!service?.trim()) missing.push("İhtiyaç duyulan hizmet");
  if (!kvkk) missing.push("KVKK onayı");

  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Eksik alanlar: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  const row = (label: string, value: string) =>
    value
      ? `<tr>
          <td style="padding:8px 12px;font-weight:600;color:#1C1C1C;background:#F7F7F5;white-space:nowrap;font-size:13px;border-bottom:1px solid #E2E2E2;">${label}</td>
          <td style="padding:8px 12px;color:#4B4B4B;font-size:13px;border-bottom:1px solid #E2E2E2;">${value}</td>
        </tr>`
      : "";

  const html = `
<!DOCTYPE html>
<html lang="tr">
<head><meta charset="UTF-8" /></head>
<body style="font-family:Inter,Arial,sans-serif;background:#F7F7F5;padding:32px 16px;margin:0;">
  <div style="max-width:560px;margin:0 auto;background:#FFFFFF;border:1px solid #E2E2E2;border-radius:10px;overflow:hidden;">

    <div style="background:#E8620C;padding:18px 24px;">
      <p style="margin:0;color:#FFFFFF;font-size:14px;font-weight:700;letter-spacing:0.04em;">
        YENİ BAŞVURU — NAS ÇEVRE DANIŞMANLIK
      </p>
    </div>

    <div style="padding:24px;">
      <table style="width:100%;border-collapse:collapse;border:1px solid #E2E2E2;border-radius:6px;overflow:hidden;">
        <tbody>
          ${row("Firma Adı", companyName)}
          ${row("Yetkili Kişi", contactName)}
          ${row("Telefon", phone)}
          ${row("E-posta", email)}
          ${row("Şehir", city || "—")}
          ${row("Faaliyet Alanı", activityArea || "—")}
          ${row("İşletme Türü", businessType || "—")}
          ${row("İstenen Hizmet", service)}
          ${row("KVKK Onayı", kvkk ? "Evet" : "Hayır")}
        </tbody>
      </table>

      ${
        details?.trim()
          ? `<div style="margin-top:20px;">
               <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#1C1C1C;">Açıklama / Talep Detayları</p>
               <div style="background:#F7F7F5;border:1px solid #E2E2E2;border-radius:6px;padding:12px 14px;font-size:13px;color:#4B4B4B;line-height:1.6;">
                 ${details.replace(/\n/g, "<br />")}
               </div>
             </div>`
          : ""
      }
    </div>

    <div style="padding:14px 24px;border-top:1px solid #E2E2E2;background:#F7F7F5;">
      <p style="margin:0;font-size:11px;color:#8A8A8A;">
        Bu e-posta nascevre.com başvuru formu aracılığıyla otomatik olarak gönderilmiştir.
      </p>
    </div>
  </div>
</body>
</html>`;

  const { data, error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: `Yeni Başvuru | ${companyName} — Nas Çevre Danışmanlık`,
    html,
    replyTo: email,
  });

  if (error) {
    console.error("Resend gönderim hatası:", error);
    return NextResponse.json({ ok: false, error }, { status: 500 });
  }

  console.log("Resend gönderim başarılı:", data);
  return NextResponse.json({ ok: true, data });
}
