export type Word = { es: string; tr: string; ex: string };
const raw = `hola|merhaba|¡Hola! ¿Qué tal?
adiós|hoşça kal|Adiós, hasta mañana.
gracias|teşekkürler|Muchas gracias por todo.
por favor|lütfen|Un café, por favor.
agua|su|Quiero un vaso de agua.
casa|ev|Mi casa es pequeña.
perro|köpek|El perro corre en el parque.
gato|kedi|El gato duerme mucho.
libro|kitap|Leo un libro interesante.
amigo|arkadaş|Él es mi mejor amigo.
familia|aile|Mi familia es grande.
comida|yemek|La comida está deliciosa.
pan|ekmek|Compro pan cada día.
manzana|elma|La manzana es roja.
leche|süt|Bebo leche por la mañana.
café|kahve|Me gusta el café negro.
escuela|okul|Voy a la escuela en autobús.
trabajo|iş|Tengo mucho trabajo hoy.
ciudad|şehir|Madrid es una ciudad bonita.
calle|sokak|La calle está tranquila.
coche|araba|Mi coche es azul.
tiempo|zaman / hava|No tengo tiempo.
día|gün|Hoy es un buen día.
noche|gece|Buenas noches.
sol|güneş|El sol brilla.
luna|ay|La luna está llena.
mar|deniz|Me encanta el mar.
playa|plaj|Vamos a la playa.
montaña|dağ|La montaña es alta.
árbol|ağaç|El árbol tiene muchas hojas.
flor|çiçek|Esta flor huele bien.
rojo|kırmızı|Tengo una camiseta roja.
azul|mavi|El cielo es azul.
verde|yeşil|La hierba es verde.
grande|büyük|Es un edificio grande.
pequeño|küçük|Tengo un perro pequeño.
bonito|güzel|¡Qué bonito día!
feliz|mutlu|Estoy muy feliz.
triste|üzgün|¿Por qué estás triste?
hablar|konuşmak|Hablo un poco de español.
comer|yemek yemek|Vamos a comer juntos.
beber|içmek|¿Qué quieres beber?
dormir|uyumak|Necesito dormir más.
vivir|yaşamak|Vivo en Estambul.
querer|istemek / sevmek|Te quiero mucho.
tener|sahip olmak|Tengo dos hermanos.
ir|gitmek|Voy al mercado.
ver|görmek|¿Ves esa casa?
saber|bilmek|No sé la respuesta.
hoy|bugün|Hoy hace calor.
mañana|yarın / sabah|Nos vemos mañana.
ayer|dün|Ayer fui al cine.
siempre|her zaman|Siempre llego tarde.
nunca|asla|Nunca como carne.
mucho|çok|Gracias, mucho gusto.
corazón|kalp|Mi corazón late rápido.
mano|el|Dame la mano.
ojo|göz|Tiene los ojos verdes.
dinero|para|No tengo dinero.
viaje|yolculuk|¡Buen viaje!`;
export const WORDS: Word[] = raw.split("\n").map((l) => { const [es = "", tr = "", ex = ""] = l.split("|"); return { es, tr, ex }; });
