import { v4 as uuidv4 } from "uuid";

import slugify from "slugify";

import inceptionposter from "./img/inception-poster.jpg";
import inceptionbg from "./img/inception-bg.jpg";
import interstellar from "./img/interstellar.jpg";
import interstellarbg from "./img/interstellar-bg.jpg";
import parasite from "./img/parasite.jpg";
import parasitebg from "./img/parasite-bg.jpg";
import departed from "./img/departed.jpg";
import departedbg from "./img/departedbg.jpg";
import joker from "./img/joker.jpg";
import jokerbg from "./img/jokerbg.jpg";
import madmax from "./img/mad_max.jpg";
import madmaxbg from "./img/mad_maxbg.jpg";
import fightclub from "./img/fight_club.jpg";
import fightclubbg from "./img/fight_clubbg.jpg";

const data = () => {
  return [
    {
      id: uuidv4(),
      poster: inceptionposter,
      background: inceptionbg,
      title: "Inception",
      reviews: 520,
      imdb: 8.8,
      year: 2010,
      categories: "Bilim Kurgu, Dram",
      video: "YoHD9XEInc0",
      description:
        "Inception yani Başlangıç, çok sevdiğimiz yönetmen Christopher Nolan’ın, Leonardo DiCaprio, Marion Cotillard, Ellen Page, Cillian Murphy, Ken Watanabe, Michael Caine, Joseph Gordon-Levitt, Tom Hardy gibi izlemeye doyamadığımız bütün oyuncuları bünyesinde barındıran ve seyirciden oldukça iyi notlar almış filmi. Elbette Christopher Nolan filmografisinin çoğunda karşımıza çıkan ve bizi filmin içine çeken Hans Zimmer müziklerini de unutmamak gerekir. Film, insanların rüyalarına girerek onların bilinçaltından bazı sırları çalan veya onların zihinlerine bazı komutlar veren bir ekibi konu alıyor. Oldukça sürükleyici ve ilginç bir senaryosu var. Hala izlememiş olanlara duyurulur. Filmin, 8 Oscar adaylığına rağmen En İyi Sinematografi, Görsel Efekt, Ses Montajı ve Ses Miksajı olmak üzere toplam 4 ödülü bulunuyor.",
    },
    {
      id: uuidv4(),
      poster: interstellar,
      background: interstellarbg,
      title: "Interstellar",
      reviews: 225,
      imdb: 8.6,
      year: 2014,
      categories: "Bilim Kurgu, Dram",
      video: "zSWdZVtXT7E",
      description:
        "Bilim Kurgu ve dramı çok başarılı bir şekilde harmanlayan Christopher Nolan’dan bir modern klasik daha. Kendisi bu kez izleyicileri bir uzay macerasının içine sokuyor. Matthew McConaughey, Anne Hathaway, Jessica Chastain ve Michael Caine’in başrollerinde olduğu filmde, iklimsel değişiklikler nedeniyle artan kuraklık sebebiyle dünyanın ciddi tehlike altında olduğu bir yakın gelecekte geçiyor. Bir grup uzay kaşifi, yeni keşfedilen bir solucan deliğini kullanarak yıldızlararası bir yolculuk yapıyor. Filmin, Hans Zimmer imzalı müzikleri de müthiş. Filmin, 5 Oscar adaylığı olmasına rağmen sadece En İyi Görsel Efekt ödülü bulunuyor.",
    },
    {
      id: uuidv4(),
      poster: parasite,
      background: parasitebg,
      title: "Parasite",
      reviews: 520,
      imdb: 8.6,
      year: 2019,
      categories: "Gerilim, Dram, Komedi",
      video: "5xH0HfJHsaY",
      description:
        "Parasite için Oscar tarihinin ilklerine imza atan film diyebiliriz. Şu güne kadar, En İyi Yönetmen ödülüne layık görülen Güney Koreli ilk yönetmen olan Bong Joon-ho’nun filmi, 92. Akademi Ödülleri’nde En İyi Film dahil dört dalda Oscar kazanmakla kalmadı bir de üstüne Oscar tarihinde, İngilizce dışında bir dilde (Korece) çekilmiş ve en iyi film seçilmiş ilk film oldu. Filmde gerilim, dram, komedi, aksiyon ne ararsanız var. 2 saat boyunca temposu bir an olsun düşmüyor ve sizi moddan moda sokuyor. Kendinizi bir an gülerken, bir an ağlarken bir an da korkarken bulabiliyorsunuz. Filmin konusu ise temelde, Güney Kore’de sınıf farklılıklarının yol açtığı sonuçlar.  Daha fazla spoiler vermek istemiyoruz o yüzden burada kesiyoruz.",
    },
    {
      id: uuidv4(),
      poster: departed,
      background: departedbg,
      title: "The Departed",
      reviews: 520,
      imdb: 8.5,
      year: 2006,
      categories: "Suç, Gerilim",
      video: "iojhqm0JTW4",
      description:
        "The Departed, 2006 Oscar’larında, yılın en iyi filmi ve en iyi yönetmeni seçilerek Martin Scorsese‘yi Oscar’a kavuşturan film. Aslen Leonardo DiCaprio, Matt Damon, Jack Nicholson ve Mark Wahlberg’ün başrolde olduğu, Güney Kore sinemasından Hollywood’a uyarlanmış bir casus hikayesi. Boston’da geçen filmde, Boston’da yeraltı dünyasını elinde tutan İrlanda çetelerine sızmış bir polis köstebek ve polis teşkilatına sızmış çete üyesi köstebeğin kedi fare oyununu izliyoruz.",
    },
    {
      id: uuidv4(),
      poster: joker,
      background: jokerbg,
      title: "Joker",
      reviews: 520,
      imdb: 8.5,
      year: 2021,
      categories: "Dram, Suç",
      video: "t433PEQGErc",
      description:
        "Her ne kadar ödülü Parasite almış olsa da 2020 Oscar’larına gerçekten damgasını vuran yapımı bizce Joker.  Her zaman iyilerin tarafında olan süper kahraman filmlerini izlemeye alışkın olduğumuz sinemada bu sefer Batman filmleri ve çizgi romanlarının en ünlü kötüsü Joker’i izledik. En İyi Erkek Oyuncu dalında Joaquin Phoenix’e heykelciği getiren filmde, kötülerin kötüsü Joker’in doğuşuna ve onu Joker yapan nedenlere tanık oluyoruz. Filmin, İzlandalı besteci ve çellist, Oscarlı Hildur Guðnadóttir imzalı müzikleri de şahane.",
    },
    {
      id: uuidv4(),
      poster: madmax,
      background: madmaxbg,
      title: "Mad Max: Fury Road",
      reviews: 520,
      imdb: 8.1,
      year: 2015,
      categories: "Aksiyon",
      video: "hEJnMQG9ev8",
      description:
        "Mad Max: Fury Road, Tom Hardy, Charlize Theron, Nicholas Hoult, Zoe Kravitz, Rosie Huntington-Whiteley gibi isimlerin başrolde olduğu, aksiyonu bol bir yapım. Filmde, Kale adlı yeri tirani ile yöneten Immortan Joe’nun zulmünden kaçan eşleri ve onlara önderlik eden ve evine dönmeye çalışan Furiosa’nın (Charlize Theron) yolunun çöllerin yalnız kovboyu Mad Max (Tom Hardy) ile keşişmesini ve sonrasında yaşanan aksiyon dolu olayları konu alıyor. Fury Road’un, serinin dördüncü filmi olduğunu, 1970’lerde Max’i Mel Gibson’un canlandırdığını ve filmin 2016 Oscar’larında, En İyi Kostüm Tasarımı, Prodüksiyon, Makyaj, Kurgu, Ses Kurgusu ve Ses Miksajı olmak üzere 6 ödül kazandığını da söylemeden geçmeyelim.",
    },
    {
      id: uuidv4(),
      poster: fightclub,
      background: fightclubbg,
      title: "Fight Club",
      reviews: 520,
      imdb: 8.8,
      year: 1999,
      categories: "Dram, Gerilim",
      video: "qtRKdVHc-cE",
      description:
        "Başrollerinde de Brad Pitt, Edward Norton ve Helena Bonham Carter’ın olduğu, David Fincher’ın yönettiği, Amerikan yeraltı edebiyatının en önemli temsilcisi Chuck Palahniuk’un aynı adlı romanından uyarlanmış Fight Club yani Dövüş Kulübü, tüm zamanların en kült filmlerinden. Ana temasını, tüketim kültürü içinde kaybolmuş bir jenerasyonun öfkesinin dışavurumu şeklinde özetleyebileceğimiz film, monoton bir yaşamı olan ve kronik uyku problemi çeken Jack’in Marla ve Tyler Durden ile karşılaşmasından sonra tamamen değişen yaşamını konu alıyor. Filmin müzikleri de ayrıca kült olmuş bir yapım.",
    },
  ];
};

export default data;
