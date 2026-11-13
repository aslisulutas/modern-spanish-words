# Palabra — İspanyolca Kelime Kartları

İspanyolca kelime öğrenmek için modern bir flashcard uygulaması. 60 temel
kelime; karta dokununca dönüyor, arka yüzünde Türkçe anlamı çıkıyor.
Telaffuz, karıştırma ve "öğrenildi" takibi var.

## Özellikler

- **3D çevirmeli kartlar** — İspanyolca kelime + örnek cümle önde, Türkçe
  anlamı arkada.
- **Telaffuz** — "Dinle" butonu kelimeyi İspanyolca (es-ES) seslendirir.
- **İlerleme takibi** — "Biliyorum" dediğin kelimeler kaydedilir ve üstteki
  ilerleme çubuğunda `öğrenilen / 60` olarak görünür.
- **Karıştır** — kart sırasını rastgele yeniler.
- **Klavye kısayolları** — `Boşluk` kartı çevirir, `←` `→` kartlar arasında
  geçer.
- **Kalıcı ilerleme** — öğrenilen kelimeler tarayıcıda (localStorage) saklanır,
  sayfa yenilense de kaybolmaz.

## Teknolojiler

- [TanStack Start](https://tanstack.com/start) (React 19 + Vite 7, dosya bazlı
  routing)
- [Tailwind CSS v4](https://tailwindcss.com) — tema değişkenleri
  `src/styles.css` içinde
- [shadcn/ui](https://ui.shadcn.com) + Radix primitives
- [Vitest](https://vitest.dev) + Testing Library

## Başlarken

Node.js gerekiyor — [nvm ile kur](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd palabra
npm i
npm run dev
```

Uygulama `http://localhost:8080` adresinde açılır.

| Komut            | İş                                        |
| ---------------- | ----------------------------------------- |
| `npm run dev`    | Geliştirme sunucusu                        |
| `npm run build`  | Üretim derlemesi                           |
| `npm run preview`| Derlenmiş sürümü yerelde çalıştır          |
| `npm test`       | Testleri bir kez çalıştır                  |
| `npm run lint`   | ESLint kontrolü                            |
| `npm run format` | Prettier ile biçimlendirme                 |

## Proje yapısı

```text
src/
  data/words.ts        kelime listesi (İspanyolca | Türkçe | örnek cümle)
  routes/
    __root.tsx         app shell — her sayfayı saran düzen
    index.tsx          kart ekranı (/)
  styles.css           tema renkleri, gradyanlar, kart çevirme animasyonu
  test/                Vitest testleri
```

## Kelime ekleme

`src/data/words.ts` dosyasındaki listeye `İspanyolca|Türkçe|örnek cümle`
biçiminde bir satır ekle. Kart sayısı ve ilerleme çubuğu otomatik güncellenir.

```text
cielo|gökyüzü|El cielo está azul.
```

## Lovable ile geliştirme

Bu proje [Lovable](https://lovable.dev) ile oluşturuldu.
[Editörde](https://lovable.dev/projects/5a822ed4-f512-4f74-a7c5-27a2b738a4bd)
devam edebilirsin:

- **Daha hızlı üret**: ne istediğini anlat, Lovable kodu yazsın.
- **Senkron kal**: Lovable'da yapılan her değişiklik bu depoya commit'lenir.
- **Tam sahiplik**: kod senin. GitHub'da `main` branch'ine push'la,
  Lovable'da bir sonraki prompt'un için hazır olsun.
