# Ispanyolca Kelime Kartlari

Modern, renkli bir flashcard uygulamasi (tek sayfa, ana sayfada).

## Ozellikler
- Buyuk, ceviriye tiklayinca 3D donen kart: on yuzde Ispanyolca kelime (+ ornek cumle), arkada Turkce anlami.
- Ileri / geri, karistir butonlari; klavye (bosluk = cevir, oklar = gecis).
- "Biliyorum" / "Tekrar et" butonlari; bilinen kelimeler cihazda hatirlanir, ust kisimda ilerleme cubugu.
- Telaffuz butonu (tarayicinin sesli okuma ozelligi, es-ES).
- ~60 temel kelimelik hazir liste.

## Tasarim
- Sunset Blaze paleti: #ff6b35, #f7931e, #e84393, #6c5ce7; acik krem zemin, kart uzerinde turuncu-pembe-mor gradyan.
- Basliklar Outfit, metin Figtree.
- Yumusak golgeler, buyuk yuvarlak koseler, akici animasyonlar, mobil uyumlu.

## Technical details
- src/routes/index.tsx yeniden yazilir, head() metadata eklenir; __root'ta font linkleri ve baslik.
- Kelime verisi src/data/words.ts; tokenlar src/styles.css (oklch).
- Bilinen kelimeler localStorage (useEffect icinde okunur).
