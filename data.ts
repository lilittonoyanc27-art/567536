import {
  Subtitle,
  QuizQuestion,
  WhoSaidQuestion,
  FillBlankQuestion,
  TrueFalseQuestion,
  DialogueOrderStep,
  ExpressionItem,
  WhatHappensNextQuestion,
  FinalExamQuestion,
} from './types.ts';

// 1. ALL SUBTITLES WITH ACCURATE TIMESTAMPS AND ARMENIAN TRANSLATIONS
export const SUBTITLES_DATA: Subtitle[] = [
  {
    id: 1,
    timecode: '00:00',
    seconds: 0,
    endSeconds: 5,
    speaker: 'Martín',
    spanish: 'Escuchame, hablando de cuidar. Hablé con Alfredo y va a traer a la gente de Nils.',
    armenian: 'Լսի՛ր ինձ, պաշտպանելու մասին խոսելով... Ես խոսեցի Ալֆրեդոյի հետ, և նա Նիլսի մարդկանց է բերելու։',
    notes: '«Escuchame» — аргентинское обращение на vos вместо peninsular «escúchame» / «escucha».'
  },
  {
    id: 2,
    timecode: '00:05',
    seconds: 5,
    endSeconds: 7,
    speaker: 'Esperanza',
    spanish: '¡Ay, no! ¡Cortala con eso de guardabujes!',
    armenian: 'Ա՜յ, ո՛չ։ Վե՛րջ տուր այդ թիկնապահների մասին խոսակցություններին։',
    notes: '«Cortala» — разговорное аргентинское «прекрати / завязывай». «Guardabujes» — ироничное коверкание слова guardaespaldas.'
  },
  {
    id: 3,
    timecode: '00:07',
    seconds: 7,
    endSeconds: 9,
    speaker: 'Esperanza',
    spanish: 'Mire, si a usted le encanta tener un chabón atrás todo el tiempo, es raro.',
    armenian: 'Նայե՛ք, եթե Դուք սիրում եք, որ մի տղա անընդհատ Ձեր հետևից քարշ գա, դա տարօրինակ է։',
    notes: '«Chabón» — типичное лунфардо: «парень», «мужик», «тип».'
  },
  {
    id: 4,
    timecode: '00:09',
    seconds: 9,
    endSeconds: 11,
    speaker: 'Esperanza',
    spanish: 'Pero es su problema, yo me sé cuidar sola.',
    armenian: 'Բայց դա Ձեր խնդիրն է, ես կարող եմ ինքս ինձ պաշտպանել։',
    notes: 'Эсперанса подчеркивает свою независимость (она боксерша La Monita).'
  },
  {
    id: 5,
    timecode: '00:11',
    seconds: 11,
    endSeconds: 12,
    speaker: 'Martín',
    spanish: 'Monita, casi te matan hoy.',
    armenian: 'Մոնիտա՛, այսօր քեզ քիչ էր մնում սպանեին։',
    notes: '«Casi te matan» — тебя чуть не убили.'
  },
  {
    id: 6,
    timecode: '00:12',
    seconds: 12,
    endSeconds: 13,
    speaker: 'Esperanza',
    spanish: '¿Qué con esa tijerita?',
    armenian: 'Ի՞նչ է, այդ մկրատիկո՞վ։',
    notes: '«Tijerita» — уменьшительное от tijera (ножницы).'
  },
  {
    id: 7,
    timecode: '00:13',
    seconds: 13,
    endSeconds: 15,
    speaker: 'Martín',
    spanish: 'Bueno, escuchame una cosa.',
    armenian: 'Դե լավ, մի բան լսի՛ր ինձ։',
  },
  {
    id: 8,
    timecode: '00:15',
    seconds: 15,
    endSeconds: 19,
    speaker: 'Martín',
    spanish: 'Te guste o no, vos vas a tener un guardaespaldas encima tuyo día y noche.',
    armenian: 'Ուզես թե չուզես, դու գիշեր-ցերեկ քո գլխին թիկնապահ ես ունենալու։',
    notes: '«Encima tuyo» — буквально «над тобой», постоянно рядом неотступно.'
  },
  {
    id: 9,
    timecode: '00:19',
    seconds: 19,
    endSeconds: 22,
    speaker: 'Martín',
    spanish: 'Hasta que yo encuentre a Bárbara. Y fin de la discusión.',
    armenian: 'Մինչև ես չգտնեմ Բարբարային։ Եվ քննարկումը փակված է։',
    notes: 'Мартин ставит твердую точку в споре.'
  },
  {
    id: 10,
    timecode: '00:22',
    seconds: 22,
    endSeconds: 29,
    speaker: 'Esperanza',
    spanish: 'Yo ya tengo a alguien que está encima mío día y noche y no pienso cambiarlo.',
    armenian: 'Ես արդեն ունեմ մեկին, ով գիշեր-ցերեկ իմ գլխին է, ու չեմ պատրաստվում նրան փոխել։',
    notes: 'Эсперанса намекает на самого Мартина!'
  },
  {
    id: 11,
    timecode: '00:29',
    seconds: 29,
    endSeconds: 31,
    speaker: 'Sebastián',
    spanish: 'Buen día, le dijo la chancha a la cría...',
    armenian: '«Բարի լույս»,– ասաց խոզը իր ձագին...',
    notes: 'Популярная шуточная аргентинская присказка-рифмовка при входе.'
  },
  {
    id: 12,
    timecode: '00:31',
    seconds: 31,
    endSeconds: 33,
    speaker: 'Esperanza',
    spanish: 'Alala.',
    armenian: 'Այ քեզ բա՜ն...',
    notes: 'Ироничный вздох удивления / скепсиса.'
  },
  {
    id: 13,
    timecode: '00:33',
    seconds: 33,
    endSeconds: 35,
    speaker: 'Sebastián',
    spanish: '¿Martín? ¿Martín?',
    armenian: 'Մարտի՞ն։ Մարտի՞ն։',
  },
  {
    id: 14,
    timecode: '00:35',
    seconds: 35,
    endSeconds: 38,
    speaker: 'Esperanza',
    spanish: 'Eh, salió, salió. Sí, se fue a buscar a una persona, creo.',
    armenian: 'Է՜, դուրս եկավ, դուրս եկավ։ Հա, կարծես թե գնաց ինչ-որ մեկին փնտրելու։',
  },
  {
    id: 15,
    timecode: '00:38',
    seconds: 38,
    endSeconds: 40,
    speaker: 'Sebastián',
    spanish: 'Bueno, está bien. Le dejo su capuchino. No te lo tomes, eh.',
    armenian: 'Դե լավ, եղավ։ Նրա կապուչինոն թողնում եմ այստեղ։ Չխմե՛ս, հա՞։',
    notes: 'Шутит, ставя чашку кофе на стол Мартина.'
  },
  {
    id: 16,
    timecode: '00:40',
    seconds: 40,
    endSeconds: 41,
    speaker: 'Sebastián',
    spanish: '¿Vos querés algo?',
    armenian: 'Դու մի բան կուզե՞ս։',
    notes: '«Vos querés» вместо «tú quieres».'
  },
  {
    id: 17,
    timecode: '00:41',
    seconds: 41,
    endSeconds: 45,
    speaker: 'Esperanza',
    spanish: 'Ah, sí. Qué bueno que lo preguntás. Si quisiera, eh...',
    armenian: 'Ա՜, հա։ Ինչ լավ է, որ հարցրիր։ Եթե ուզենայի, ըըը...',
  },
  {
    id: 18,
    timecode: '00:45',
    seconds: 45,
    endSeconds: 48,
    speaker: 'Sebastián',
    spanish: 'Una cita con vos, sin azúcar.',
    armenian: 'Մի ժամադրություն քեզ հետ՝ առանց շաքարի։',
    notes: 'Дерзкий флирт: «Свидание с тобой, без сахара».'
  },
  {
    id: 19,
    timecode: '00:48',
    seconds: 48,
    endSeconds: 49,
    speaker: 'Esperanza',
    spanish: '¿Perdón?',
    armenian: 'Կներե՞ք։ / Ի՞նչ ասացիք։',
  },
  {
    id: 20,
    timecode: '00:49',
    seconds: 49,
    endSeconds: 51,
    speaker: 'Sebastián',
    spanish: 'No. Estás perdonada, eh. Sí.',
    armenian: 'Չէ՛, դու արդեն ներված ես, հա՜։ Այո։',
    notes: 'Игра слов на «¿Perdón?» (простите?) -> «ты прощена».'
  },
  {
    id: 21,
    timecode: '00:51',
    seconds: 51,
    endSeconds: 54,
    speaker: 'Sebastián',
    spanish: 'Bueno, en realidad te perdono si aceptás ir a bailar conmigo.',
    armenian: 'Դե, ճիշտն ասած, քեզ կներեմ, եթե համաձայնես ինձ հետ պարելու գնալ։',
    notes: '«aceptás» = аргентинская форма восео (tú aceptas).'
  },
  {
    id: 22,
    timecode: '00:54',
    seconds: 54,
    endSeconds: 57,
    speaker: 'Sebastián',
    spanish: 'O ir a tomar un copetín con unos petit fours. Elegimos el lugar.',
    armenian: 'Կամ էլ գնանք կոկտեյլ խմելու փոքրիկ թխվածքներով (պտիֆուրներով)։ Վայրը կընտրենք։',
    notes: '«Copetín» — аперитив/закуска; «petit fours» — миниатюрные французские пирожные.'
  },
  {
    id: 23,
    timecode: '00:57',
    seconds: 57,
    endSeconds: 60,
    speaker: 'Esperanza',
    spanish: '¿Pero qué canchero que sos unos petit fours? ¡Grasa!',
    armenian: 'Այ քեզ ինքնավստահ շողոքորթ՝ իր պտիֆուրներով։ Անճաշա՜կ։',
    notes: '«Canchero» — самодовольный франт/пижон; «grasa» — безвкусный, вульгарный, без шика.'
  },
  {
    id: 24,
    timecode: '01:00',
    seconds: 60,
    endSeconds: 61,
    speaker: 'Esperanza',
    spanish: 'Ni siquiera me conocés y ya me estás invitando a salir.',
    armenian: 'Դու ինձ նույնիսկ չես ճանաչում, բայց արդեն հրավիրում ես հանդիպման։',
  },
  {
    id: 25,
    timecode: '01:01',
    seconds: 61,
    endSeconds: 62,
    speaker: 'Sebastián',
    spanish: 'No. Justamente.',
    armenian: 'Ո՛չ, հենց դրա համար էլ։',
  },
  {
    id: 26,
    timecode: '01:02',
    seconds: 62,
    endSeconds: 65,
    speaker: 'Sebastián',
    spanish: 'Justamente quiero salir con vos para conocerte.',
    armenian: 'Հենց քեզ ճանաչելու համար էլ ուզում եմ հանդիպել քեզ հետ։',
  },
  {
    id: 27,
    timecode: '01:05',
    seconds: 65,
    endSeconds: 67,
    speaker: 'Sebastián',
    spanish: 'Bueno, ¿qué decís? ¿Aceptás?',
    armenian: 'Դե, ի՞նչ կասես։ Համաձա՞յն ես։',
    notes: '«¿qué decís?» = «¿qué dices?».'
  },
  {
    id: 28,
    timecode: '01:07',
    seconds: 67,
    endSeconds: 70,
    speaker: 'Martín',
    spanish: 'Ah, bueno. Veo que ya se vieron. ¿Se presentaron?',
    armenian: 'Ա՜հ, դե լավ։ Տեսնում եմ՝ արդեն տեսնվել եք։ Ծանոթացա՞ք։',
  },
  {
    id: 29,
    timecode: '01:10',
    seconds: 70,
    endSeconds: 71,
    speaker: 'Esperanza & Sebastián',
    spanish: 'No.',
    armenian: 'Ո՛չ։',
  },
  {
    id: 30,
    timecode: '01:11',
    seconds: 71,
    endSeconds: 74,
    speaker: 'Martín',
    spanish: 'Ella es Esperanza Muñoz. Es mi asistente.',
    armenian: 'Սա Էսպերանսա Մունյոսն է։ Իմ օգնականն է։',
  },
  {
    id: 31,
    timecode: '01:14',
    seconds: 74,
    endSeconds: 76,
    speaker: 'Esperanza',
    spanish: 'Y novia.',
    armenian: 'Եվ հարսնացուն (ընկերուհին)։',
    notes: 'Эсперанса сразу подчеркивает свой статус невесты Мартина перед Себастьяном!'
  },
  {
    id: 32,
    timecode: '01:16',
    seconds: 76,
    endSeconds: 79,
    speaker: 'Martín',
    spanish: 'Y él es Sebastián Andrade. Tu nuevo guardaespaldas.',
    armenian: 'Իսկ նա Սեբաստիան Անդրադեն է։ Քո նոր թիկնապահը։',
  },
  {
    id: 33,
    timecode: '01:19',
    seconds: 79,
    endSeconds: 80,
    speaker: 'Esperanza',
    spanish: 'Sí.',
    armenian: 'Հա՛։',
  },
  {
    id: 34,
    timecode: '01:20',
    seconds: 80,
    endSeconds: 86,
    speaker: 'Esperanza',
    spanish: 'Chau.',
    armenian: 'Ցտեսություն (Չաո)։',
  },
  {
    id: 35,
    timecode: '01:27',
    seconds: 87,
    endSeconds: 90,
    speaker: 'Sebastián',
    spanish: 'Chau.',
    armenian: 'Ցտեսություն։',
  },
];

// 2. QUIZ: 15 COMPREHENSION QUESTIONS WITH ARMENIAN TRANSLATIONS
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    questionEs: '1. ¿Por qué Martín quiere contratar un guardaespaldas para Esperanza?',
    questionHy: '1. Ինչո՞ւ է Մարտինը ցանկանում թիկնապահ վարձել Էսպերանսայի համար։',
    options: [
      { key: 'A', textEs: 'Porque Esperanza quiere viajar sola al extranjero.', textHy: 'Քանի որ Էսպերանսան ցանկանում է մենակ մեկնել արտերկիր։' },
      { key: 'B', textEs: 'Porque Esperanza ha estado en peligro hoy («casi te matan»).', textHy: 'Քանի որ այսօր Էսպերանսան վտանգի մեջ է եղել («քեզ քիչ էր մնում սպանեին»)։' },
      { key: 'C', textEs: 'Porque necesita un chofer para la oficina.', textHy: 'Քանի որ գրասենյակի համար վարորդ է պետք։' },
    ],
    correctKey: 'B',
    explanationEs: 'Martín le dice claramente: «Monita, casi te matan hoy» para justificar la necesidad de protección.',
    explanationHy: 'Մարտինը հստակ ասում է. «Monita, casi te matan hoy», որպեսզի հիմնավորի պաշտպանության անհրաժեշտությունը։'
  },
  {
    id: 2,
    questionEs: '2. ¿Cómo se llama el nuevo guardaespaldas presentado por Martín?',
    questionHy: '2. Ի՞նչ է Մարտինի ներկայացրած նոր թիկնապահի անունը։',
    options: [
      { key: 'A', textEs: 'Alfredo Rossi.', textHy: 'Ալֆրեդո Ռոսսի։' },
      { key: 'B', textEs: 'Sebastián Andrade.', textHy: 'Սեբաստիան Անդրադե։' },
      { key: 'C', textEs: 'Nils.', textHy: 'Նիլս։' },
    ],
    correctKey: 'B',
    explanationEs: 'Martín lo presenta al final diciendo: «Y él es Sebastián Andrade. Tu nuevo guardaespaldas».',
    explanationHy: 'Մարտինը նրան ներկայացնում է վերջում՝ ասելով. «Եվ նա Սեբաստիան Անդրադեն է։ Քո նոր թիկնապահը»։'
  },
  {
    id: 3,
    questionEs: '3. ¿Qué le propone Sebastián a Esperanza antes de saber quién es ella?',
    questionHy: '3. Ի՞նչ է առաջարկում Սեբաստիանը Էսպերանսային՝ նախքան իմանալը, թե ով է նա։',
    options: [
      { key: 'A', textEs: 'Ir a bailar o tomar un copetín con petit fours.', textHy: 'Գնալ պարելու կամ կոկտեյլ խմելու փոքրիկ թխվածքներով (պտիֆուրներով)։' },
      { key: 'B', textEs: 'Acompañarla a ver una pelea de boxeo.', textHy: 'Ուղեկցել նրան բռնցքամարտի մենամարտ դիտելու։' },
      { key: 'C', textEs: 'Comprar café para toda la empresa.', textHy: 'Սուրճ գնել ամբողջ ընկերության համար։' },
    ],
    correctKey: 'A',
    explanationEs: 'Sebastián le ofrece: «...si aceptás ir a bailar conmigo. O ir a tomar un copetín con unos petit fours».',
    explanationHy: 'Սեբաստիանն առաջարկում է նրան գնալ պարելու կամ կոկտեյլ խմելու պտիֆուրներով։'
  },
  {
    id: 4,
    questionEs: '4. ¿Cómo presenta Martín a Esperanza y qué añade ella inmediatamente?',
    questionHy: '4. Ինչպե՞ս է Մարտինը ներկայացնում Էսպերանսային, և ի՞նչ է նա անմիջապես ավելացնում։',
    options: [
      { key: 'A', textEs: 'Martín dice que es su jefa, y ella añade que es boxeadora.', textHy: 'Մարտինն ասում է, որ նա իր տնօրենն է, իսկ նա ավելացնում է, որ բռնցքամարտիկ է։' },
      { key: 'B', textEs: 'Martín dice «Es mi asistente», y Esperanza añade con orgullo: «Y novia».', textHy: 'Մարտինն ասում է «Իմ օգնականն է», իսկ Էսպերանսան հպարտորեն ավելացնում է. «Եվ հարսնացուն»։' },
      { key: 'C', textEs: 'Martín dice que es su prima.', textHy: 'Մարտինն ասում է, որ նա իր զարմուհին է։' },
    ],
    correctKey: 'B',
    explanationEs: 'Martín dice: «Ella es Esperanza Muñoz. Es mi asistente», a lo que Esperanza replica de inmediato: «Y novia».',
    explanationHy: 'Մարտինն ասում է. «Նա իմ օգնականն է», իսկ Էսպերանսան ակնթարթորեն ուղղում է. «Եվ հարսնացուն»։'
  },
  {
    id: 5,
    questionEs: '5. ¿Qué palabra coloquial usa Esperanza para referirse a un hombre o tipo?',
    questionHy: '5. Ո՞ր խոսակցական բառն է օգտագործում Էսպերանսան՝ տղամարդուն կամ «տիպին» բնորոշելու համար։',
    options: [
      { key: 'A', textEs: 'Tío.', textHy: 'Tío (իսպանական խոսակցական)։' },
      { key: 'B', textEs: 'Chabón.', textHy: 'Chabón (արգենտինյան լունֆարդո)։' },
      { key: 'C', textEs: 'Chaval.', textHy: 'Chaval։' },
    ],
    correctKey: 'B',
    explanationEs: 'Ella dice: «...si a usted le encanta tener un chabón atrás todo el tiempo, es raro». «Chabón» es puro lunfardo porteño.',
    explanationHy: 'Նա ասում է. «...tener un chabón atrás». «Chabón»-ը արգենտինյան լունֆարդոյի դասական բառ է։'
  },
  {
    id: 6,
    questionEs: '6. ¿Qué refrán o frase graciosa dice Sebastián al entrar en la oficina?',
    questionHy: '6. Ի՞նչ ասացվածք կամ կատակային արտահայտություն է ասում Սեբաստիանը գրասենյակ մտնելիս։',
    options: [
      { key: 'A', textEs: '«Buen día, le dijo la chancha a la cría...»', textHy: '««Բարի լույս»,– ասաց խոզը իր ձագին...»' },
      { key: 'B', textEs: '«Al que madruga, Dios lo ayuda».', textHy: '«Ով վաղ է զարթնում, նրան Աստված է օգնում»։' },
      { key: 'C', textEs: '«Más vale pájaro en mano».', textHy: '«Ավելի լավ է ճնճղուկը ձեռքում»։' },
    ],
    correctKey: 'A',
    explanationEs: 'Sebastián entra saludando con humor: «Buen día, le dijo la chancha a la cría...».',
    explanationHy: 'Սեբաստիանը ներս է մտնում հումորային ասացվածքով. «Buen día, le dijo la chancha a la cría...»։'
  },
  {
    id: 7,
    questionEs: '7. ¿Qué bebida le deja Sebastián a Martín en su escritorio?',
    questionHy: '7. Ի՞նչ ըմպելիք է Սեբաստիանը թողնում Մարտինի գրասեղանին։',
    options: [
      { key: 'A', textEs: 'Un mate amargo.', textHy: 'Դառը մատե։' },
      { key: 'B', textEs: 'Un capuchino.', textHy: 'Կապուչինո։' },
      { key: 'C', textEs: 'Un jugo de naranja.', textHy: 'Նարնջի հյութ։' },
    ],
    correctKey: 'B',
    explanationEs: 'Sebastián dice: «Le dejo su capuchino. No te lo tomes, eh».',
    explanationHy: 'Սեբաստիանն ասում է. «Նրա կապուչինոն թողնում եմ այստեղ։ Չխմե՛ս, հա՞»։'
  },
  {
    id: 8,
    questionEs: '8. ¿Hasta qué momento exige Martín que Esperanza tenga un guardaespaldas?',
    questionHy: '8. Մինչև ո՞ր պահն է Մարտինը պահանջում, որ Էսպերանսան թիկնապահ ունենա։',
    options: [
      { key: 'A', textEs: 'Hasta el fin de semana.', textHy: 'Մինչև շաբաթվա վերջը։' },
      { key: 'B', textEs: 'Hasta que él encuentre a Bárbara.', textHy: 'Մինչև ինքը չգտնի Բարբարային։' },
      { key: 'C', textEs: 'Para siempre.', textHy: 'Հավերժ։' },
    ],
    correctKey: 'B',
    explanationEs: 'Martín dice tajantemente: «Hasta que yo encuentre a Bárbara. Y fin de la discusión».',
    explanationHy: 'Մարտինը կտրուկ ասում է. «Hasta que yo encuentre a Bárbara. Y fin de la discusión»։'
  },
  {
    id: 9,
    questionEs: '9. Cuando Sebastián pregunta: «¿Vos querés algo?», ¿qué pide él en broma?',
    questionHy: '9. Երբ Սեբաստիանը հարցնում է. «¿Vos querés algo?», ի՞նչ է նա կատակով խնդրում։',
    options: [
      { key: 'A', textEs: 'Un café negro con dos cucharadas de azúcar.', textHy: 'Սև սուրճ՝ երկու գդալ շաքարով։' },
      { key: 'B', textEs: '«Una cita con vos, sin azúcar».', textHy: '«Մի ժամադրություն քեզ հետ՝ առանց շաքարի»։' },
      { key: 'C', textEs: 'Un vaso de agua fría.', textHy: 'Մեկ բաժակ սառը ջուր։' },
    ],
    correctKey: 'B',
    explanationEs: 'Sebastián coquetea diciendo ingeniosamente: «Una cita con vos, sin azúcar».',
    explanationHy: 'Սեբաստիանը սիրախաղ է սկսում՝ ասելով. «Una cita con vos, sin azúcar» (Ժամադրություն քեզ հետ՝ առանց շաքարի)։'
  },
  {
    id: 10,
    questionEs: '10. ¿Cómo reacciona Esperanza a la propuesta de Sebastián sobre los «petit fours»?',
    questionHy: '10. Ինչպե՞ս է արձագանքում Էսպերանսան Սեբաստիանի առաջարկին «պտիֆուրների» մասին։',
    options: [
      { key: 'A', textEs: 'Acepta encantada porque le gustan los dulces franceses.', textHy: 'Հիացմունքով համաձայնում է, քանի որ սիրում է ֆրանսիական քաղցրավենիք։' },
      { key: 'B', textEs: 'Lo critica llamándolo «canchero» y diciendo «¡Grasa!».', textHy: 'Քննադատում է նրան՝ անվանելով «canchero» (պիժոն) և ասելով «¡Grasa!» (անճաշակ)։' },
      { key: 'C', textEs: 'Le pide dinero para pagar los dulces.', textHy: 'Գումար է խնդրում քաղցրավենիքի դիմաց վճարելու համար։' },
    ],
    correctKey: 'B',
    explanationEs: 'Esperanza le responde con ironía: «¿Pero qué canchero que sos unos petit fours? ¡Grasa!».',
    explanationHy: 'Էսպերանսան հեգնանքով պատասխանում է. «¿Pero qué canchero que sos unos petit fours? ¡Grasa!»։'
  },
  {
    id: 11,
    questionEs: '11. ¿Qué forma verbal de voseo utiliza Sebastián para decir «¿Qué dices?»?',
    questionHy: '11. Ո՞ր voseo բայաձևն է օգտագործում Սեբաստիանը «Ի՞նչ ես ասում» ասելու համար։',
    options: [
      { key: 'A', textEs: '¿Qué dices tú?', textHy: '¿Qué dices tú? (իսպանական ստանդարտ)։' },
      { key: 'B', textEs: '¿Qué decís?', textHy: '¿Qué decís? (արգենտինյան վոսեո)։' },
      { key: 'C', textEs: '¿Qué digas?', textHy: '¿Qué digas?։' },
    ],
    correctKey: 'B',
    explanationEs: 'En Argentina se usa «¿Qué decís?» con acento en la última sílaba en lugar de «¿Qué dices?».',
    explanationHy: 'Արգենտինայում օգտագործվում է «¿Qué decís?»՝ վերջին վանկի շեշտով, «¿Qué dices?»-ի փոխարեն։'
  },
  {
    id: 12,
    questionEs: '12. ¿Quién es la persona que Esperanza dice que ya «está encima de ella día y noche»?',
    questionHy: '12. Ո՞վ է այն անձնավորությունը, ում մասին Էսպերանսան ասում է, որ արդեն «գիշեր-ցերեկ իր գլխին է»։',
    options: [
      { key: 'A', textEs: 'Su entrenador de boxeo.', textHy: 'Իր բռնցքամարտի մարզիչը։' },
      { key: 'B', textEs: 'El propio Martín Quesada.', textHy: 'Հենց ինքը՝ Մարտին Կեսադան։' },
      { key: 'C', textEs: 'Su madre.', textHy: 'Իր մայրը։' },
    ],
    correctKey: 'B',
    explanationEs: 'Esperanza se refiere con cariño y picardía al propio Martín, quien no se separa de ella.',
    explanationHy: 'Էսպերանսան քնքշությամբ և հնարամտությամբ ակնարկում է հենց Մարտինին, ով չի հեռանում նրանից։'
  },
  {
    id: 13,
    questionEs: '13. ¿Qué palabra usa Esperanza para despedirse secamente al final?',
    questionHy: '13. Ի՞նչ բառով է Էսպերանսան չոր հրաժեշտ տալիս վերջում։',
    options: [
      { key: 'A', textEs: 'Adiós.', textHy: 'Adiós (հրաժեշտ)։' },
      { key: 'B', textEs: 'Hasta luego.', textHy: 'Hasta luego (մինչ հանդիպում)։' },
      { key: 'C', textEs: 'Chau.', textHy: 'Chau (արգենտինյան տարածված հրաժեշտ)։' },
    ],
    correctKey: 'C',
    explanationEs: 'Esperanza dice un rotundo «Chau», característico del habla argentina, y se retira.',
    explanationHy: 'Էսպերանսան կտրուկ ասում է «Chau» (չաո), որը բնորոշ է արգենտինյան առօրյա խոսքին, և հեռանում է։'
  },
  {
    id: 14,
    questionEs: '14. ¿A quién fue a buscar Martín según lo que le cuenta Esperanza a Sebastián?',
    questionHy: '14. Ո՞ւմ էր գնացել փնտրելու Մարտինը՝ ըստ այն բանի, ինչ Էսպերանսան ասաց Սեբաստիանին։',
    options: [
      { key: 'A', textEs: '«A una persona, creo» (fue a buscar al propio Sebastián).', textHy: '«Ինչ-որ մեկին, կարծես» (գնացել էր հենց Սեբաստիանին փնտրելու)։' },
      { key: 'B', textEs: 'A comprar comida para el almuerzo.', textHy: 'Ճաշի համար սնունդ գնելու։' },
      { key: 'C', textEs: 'A un médico de urgencia.', textHy: 'Շտապօգնության բժշկի։' },
    ],
    correctKey: 'A',
    explanationEs: 'Esperanza le dice a Sebastián que Martín salió a buscar a alguien, sin saber que era a Sebastián.',
    explanationHy: 'Էսպերանսան Սեբաստիանին ասում է, որ Մարտինը գնաց ինչ-որ մեկին փնտրելու՝ չիմանալով, որ խոսքը հենց Սեբաստիանի մասին է։'
  },
  {
    id: 15,
    questionEs: '15. ¿Qué significa la frase argentina «¡Cortala!» dicha por Esperanza?',
    questionHy: '15. Ի՞նչ է նշանակում Էսպերանսայի ասած «¡Cortala!» արգենտինյան արտահայտությունը։',
    options: [
      { key: 'A', textEs: 'Corta el papel con tijeras.', textHy: 'Մկրատով կտրիր թուղթը։' },
      { key: 'B', textEs: '¡Basta!, ¡deja de insistir con eso!', textHy: '«Բավակա՛ն է», «վե՛րջ տուր դրան», դադարիր պնդել։' },
      { key: 'C', textEs: 'Corta la llamada telefónica.', textHy: 'Անջատիր հեռախոսազանգը։' },
    ],
    correctKey: 'B',
    explanationEs: '«¡Cortala!» viene del lunfardo y significa «basta», «pará un poco», o «deja de molestar con ese tema».',
    explanationHy: '«¡Cortala!»-ն նշանակում է «վե՛րջ տուր», «բավակա՛ն է», «դադարեցրու այդ թեման»։'
  },
];

// 3. JUEGO 1: ¿QUIÉN LO DIJO? (MARTÍN, ESPERANZA, SEBASTIÁN)
export const WHO_SAID_DATA: WhoSaidQuestion[] = [
  {
    id: 1,
    quoteEs: '«Monita, casi te matan hoy».',
    quoteHy: '«Մոնիտա՛, այսօր քեզ քիչ էր մնում սպանեին»։',
    speaker: 'Martín',
    contextEs: 'Preocupado por la seguridad de Esperanza tras el incidente.',
    contextHy: 'Մտահոգված Էսպերանսայի անվտանգությամբ միջադեպից հետո։'
  },
  {
    id: 2,
    quoteEs: '«¡Ay, no! ¡Cortala con eso de guardabujes!»',
    quoteHy: '«Ա՜յ, ո՛չ։ Վե՛րջ տուր այդ թիկնապահների մասին խոսակցություններին»։',
    speaker: 'Esperanza',
    contextEs: 'Rechazando la idea de tener un guardaespaldas encima.',
    contextHy: 'Մերժելով իր կողքին թիկնապահ ունենալու միտքը։'
  },
  {
    id: 3,
    quoteEs: '«Una cita con vos, sin azúcar».',
    quoteHy: '«Մի ժամադրություն քեզ հետ՝ առանց շաքարի»։',
    speaker: 'Sebastián',
    contextEs: 'Flirteando con Esperanza apenas se conocen en la oficina.',
    contextHy: 'Սիրախաղ անելով Էսպերանսայի հետ գրասենյակում նոր ծանոթանալիս։'
  },
  {
    id: 4,
    quoteEs: '«Mire, si a usted le encanta tener un chabón atrás todo el tiempo, es raro».',
    quoteHy: '«Նայե՛ք, եթե Դուք սիրում եք, որ մի տղա անընդհատ Ձեր հետևից քարշ գա, դա տարօրինակ է»։',
    speaker: 'Esperanza',
    contextEs: 'Argumentando con ironía frente a Martín.',
    contextHy: 'Հեգնանքով վիճելով Մարտինի հետ։'
  },
  {
    id: 5,
    quoteEs: '«Bueno, en realidad te perdono si aceptás ir a bailar conmigo».',
    quoteHy: '«Դե, ճիշտն ասած, քեզ կներեմ, եթե համաձայնես ինձ հետ պարելու գնալ»։',
    speaker: 'Sebastián',
    contextEs: 'Insistiendo en invitar a salir a Esperanza.',
    contextHy: 'Համառորեն շարունակելով հրավիրել Էսպերանսային։'
  },
  {
    id: 6,
    quoteEs: '«Hasta que yo encuentre a Bárbara. Y fin de la discusión».',
    quoteHy: '«Մինչև ես չգտնեմ Բարբարային։ Եվ քննարկումը փակված է»։',
    speaker: 'Martín',
    contextEs: 'Determinando el límite de tiempo de la custodia.',
    contextHy: 'Որոշելով պահպանության ժամկետը։'
  },
  {
    id: 7,
    quoteEs: '«¿Pero qué canchero que sos unos petit fours? ¡Grasa!»',
    quoteHy: '«Այ քեզ ինքնավստահ շողոքորթ՝ իր պտիֆուրներով։ Անճաշա՜կ»։',
    speaker: 'Esperanza',
    contextEs: 'Burlándose del intento sofisticado de seducción de Sebastián.',
    contextHy: 'Ծաղրելով Սեբաստիանի նրբաճաշակ գայթակղելու փորձը։'
  },
  {
    id: 8,
    quoteEs: '«Le dejo su capuchino. No te lo tomes, eh».',
    quoteHy: '«Նրա կապուչինոն թողնում եմ այստեղ։ Չխմե՛ս, հա՞»։',
    speaker: 'Sebastián',
    contextEs: 'Dejando el café para Martín en el escritorio.',
    contextHy: 'Մարտինի սուրճը թողնելով սեղանին։'
  },
];

// 4. JUEGO 2: COMPLETA LA FRASE
export const FILL_BLANK_DATA: FillBlankQuestion[] = [
  {
    id: 1,
    sentenceWithBlankEs: '«Vos vas a tener un ________ encima tuyo día y noche».',
    sentenceCompleteEs: '«Vos vas a tener un guardaespaldas encima tuyo día y noche».',
    sentenceHy: '«Դու գիշեր-ցերեկ քո գլխին թիկնապահ ես ունենալու»։',
    missingWord: 'guardaespaldas',
    optionsEs: ['guardaespaldas', 'abogado', 'profesor'],
    optionsHy: ['թիկնապահ', 'փաստաբան', 'ուսուցիչ']
  },
  {
    id: 2,
    sentenceWithBlankEs: '«Monita, casi te ________ hoy».',
    sentenceCompleteEs: '«Monita, casi te matan hoy».',
    sentenceHy: '«Մոնիտա՛, այսօր քեզ քիչ էր մնում սպանեին»։',
    missingWord: 'matan',
    optionsEs: ['matan', 'despiden', 'llaman'],
    optionsHy: ['սպանեին', 'աշխատանքից ազատեին', 'զանգահարեին']
  },
  {
    id: 3,
    sentenceWithBlankEs: '«Si a usted le encanta tener un ________ atrás todo el tiempo, es raro».',
    sentenceCompleteEs: '«Si a usted le encanta tener un chabón atrás todo el tiempo, es raro».',
    sentenceHy: '«Եթե Դուք սիրում եք, որ մի տղա անընդհատ Ձեր հետևից քարշ գա, դա տարօրինակ է»։',
    missingWord: 'chabón',
    optionsEs: ['chabón', 'policía', 'doctor'],
    optionsHy: ['տղա (chabón)', 'ոստիկան', 'բժիշկ']
  },
  {
    id: 4,
    sentenceWithBlankEs: '«Buen día, le dijo la ________ a la cría...».',
    sentenceCompleteEs: '«Buen día, le dijo la chancha a la cría...».',
    sentenceHy: '««Բարի լույս»,– ասաց խոզը իր ձագին...»։',
    missingWord: 'chancha',
    optionsEs: ['chancha', 'vaca', 'gata'],
    optionsHy: ['խոզ (chancha)', 'կով', 'կատու']
  },
  {
    id: 5,
    sentenceWithBlankEs: '«Una cita con vos, sin ________».',
    sentenceCompleteEs: '«Una cita con vos, sin azúcar».',
    sentenceHy: '«Մի ժամադրություն քեզ հետ՝ առանց շաքարի»։',
    missingWord: 'azúcar',
    optionsEs: ['azúcar', 'dinero', 'prisa'],
    optionsHy: ['շաքար (azúcar)', 'գումար', 'շտապողականություն']
  },
  {
    id: 6,
    sentenceWithBlankEs: '«¿Pero qué ________ que sos unos petit fours? ¡Grasa!».',
    sentenceCompleteEs: '«¿Pero qué canchero que sos unos petit fours? ¡Grasa!».',
    sentenceHy: '«Այ քեզ ինքնավստահ շողոքորթ՝ իր պտիֆուրներով։ Անճաշա՜կ»։',
    missingWord: 'canchero',
    optionsEs: ['canchero', 'aburrido', 'amable'],
    optionsHy: ['ինքնավստահ/շողոքորթ (canchero)', 'ձանձրալի', 'բարյացակամ']
  },
  {
    id: 7,
    sentenceWithBlankEs: '«Ella es Esperanza Muñoz. Es mi asistente. Y ________».',
    sentenceCompleteEs: '«Ella es Esperanza Muñoz. Es mi asistente. Y novia».',
    sentenceHy: '«Սա Էսպերանսա Մունյոսն է։ Իմ օգնականն է։ Եվ հարսնացուն»։',
    missingWord: 'novia',
    optionsEs: ['novia', 'prima', 'vecina'],
    optionsHy: ['հարսնացու / ընկերուհի (novia)', 'զարմուհի', 'հարևանուհի']
  },
];

// 5. JUEGO 3: VERDADERO O FALSO (10 STATEMENTS)
export const TRUE_FALSE_DATA: TrueFalseQuestion[] = [
  {
    id: 1,
    statementEs: '1. Esperanza acepta con entusiasmo la idea de tener un guardaespaldas desde el principio.',
    statementHy: '1. Էսպերանսան հենց սկզբից մեծ ոգևորությամբ ընդունում է թիկնապահ ունենալու միտքը։',
    isTrue: false,
    explanationEs: 'Falso. Esperanza se niega rotundamente diciendo: «¡Ay, no! ¡Cortala con eso de guardabujes!» y afirma que sabe cuidarse sola.',
    explanationHy: 'Սխալ է։ Էսպերանսան կտրականապես հրաժարվում է՝ ասելով, որ ինքը կարող է ինքնուրույն պաշտպանվել։'
  },
  {
    id: 2,
    statementEs: '2. Martín quiere que el guardaespaldas esté con Esperanza hasta que él encuentre a Bárbara.',
    statementHy: '2. Մարտինը ցանկանում է, որ թիկնապահը լինի Էսպերանսայի հետ մինչև ինքը չգտնի Բարբարային։',
    isTrue: true,
    explanationEs: 'Verdadero. Martín lo dice textualmente: «Hasta que yo encuentre a Bárbara. Y fin de la discusión».',
    explanationHy: 'Ճիշտ է։ Մարտինը բառացի ասում է. «Hasta que yo encuentre a Bárbara. Y fin de la discusión»։'
  },
  {
    id: 3,
    statementEs: '3. Sebastián sabe que Esperanza es la novia de Martín antes de invitarla a salir.',
    statementHy: '3. Սեբաստիանը գիտեր, որ Էսպերանսան Մարտինի հարսնացուն է, նախքան նրան ժամադրության հրավիրելը։',
    isTrue: false,
    explanationEs: 'Falso. No se conocen previamente; Sebastián se entera de que es la asistente y novia de Martín al final de la escena.',
    explanationHy: 'Սխալ է։ Նրանք նախկինում ծանոթ չէին. Սեբաստիանը միայն վերջում է իմանում, որ նա Մարտինի հարսնացուն է։'
  },
  {
    id: 4,
    statementEs: '4. Esperanza le dice a Sebastián que Martín salió a buscar a una persona.',
    statementHy: '4. Էսպերանսան Սեբաստիանին ասում է, որ Մարտինը դուրս է եկել ինչ-որ մեկին փնտրելու։',
    isTrue: true,
    explanationEs: 'Verdadero. Ella le informa: «Eh, salió, salió. Sí, se fue a buscar a una persona, creo».',
    explanationHy: 'Ճիշտ է։ Նա ասում է. «Eh, salió, salió. Sí, se fue a buscar a una persona, creo»։'
  },
  {
    id: 5,
    statementEs: '5. Sebastián le ofrece a Esperanza salir a comer hamburguesas.',
    statementHy: '5. Սեբաստիանն առաջարկում է Էսպերանսային գնալ համբուրգեր ուտելու։',
    isTrue: false,
    explanationEs: 'Falso. Le propone ir a bailar o tomar un copetín con petit fours.',
    explanationHy: 'Սխալ է։ Նա առաջարկում է գնալ պարելու կամ կոկտեյլ խմելու պտիֆուրներով։'
  },
  {
    id: 6,
    statementEs: '6. La palabra «canchero» se usa en Argentina para alguien que se cree seductor, astuto o seguro de sí.',
    statementHy: '6. «Canchero» բառը Արգենտինայում օգտագործվում է ինքնավստահ, շողոքորթ կամ իրեն գրավիչ համարող մարդու համար։',
    isTrue: true,
    explanationEs: 'Verdadero. «Canchero» describe a quien presume de destreza, canchereada o galantería callejera.',
    explanationHy: 'Ճիշտ է։ «Canchero»-ն բնորոշում է այն մարդուն, ով իրեն շատ ինքնավստահ է պահում կամ գլուխ է գովում։'
  },
  {
    id: 7,
    statementEs: '7. Al presentarlos, Martín dice que Sebastián Andrade es el nuevo contador de la empresa.',
    statementHy: '7. Նրանց ծանոթացնելիս Մարտինն ասում է, որ Սեբաստիան Անդրադեն ընկերության նոր հաշվապահն է։',
    isTrue: false,
    explanationEs: 'Falso. Martín dice: «Y él es Sebastián Andrade. Tu nuevo guardaespaldas».',
    explanationHy: 'Սխալ է։ Մարտինն ասում է. «Y él es Sebastián Andrade. Tu nuevo guardaespaldas» (Քո նոր թիկնապահը)։'
  },
  {
    id: 8,
    statementEs: '8. Esperanza aclara inmediatamente ante Sebastián: «Y novia», defendiendo su lugar con Martín.',
    statementHy: '8. Էսպերանսան Սեբաստիանի առաջ անմիջապես հստակեցնում է. «Եվ հարսնացուն», պաշտպանելով իր կարգավիճակը։',
    isTrue: true,
    explanationEs: 'Verdadero. En cuanto Martín dice «mi asistente», ella interrumpe con «Y novia».',
    explanationHy: 'Ճիշտ է։ Հենց Մարտինն ասում է «իմ օգնականն է», նա ավելացնում է «Եվ հարսնացուն»։'
  },
  {
    id: 9,
    statementEs: '9. En la escena, los personajes usan el voseo argentino («vos querés», «vos decís», «escuchame»).',
    statementHy: '9. Տեսարանում հերոսները օգտագործում են արգենտինյան վոսեո («vos querés», «vos decís», «escuchame»)։',
    isTrue: true,
    explanationEs: 'Verdadero. El dialecto rioplatense se caracteriza por el uso de «vos» y sus conjugaciones específicas.',
    explanationHy: 'Ճիշտ է։ Ռիոպլատենսե բարբառն աչքի է ընկնում «vos»-ով և դրա յուրահատուկ խոնարհումներով։'
  },
  {
    id: 10,
    statementEs: '10. Al final de la conversación, Esperanza se queda charlando amistosamente con Sebastián durante horas.',
    statementHy: '10. Զրույցի վերջում Էսպերանսան ժամերով մնում է ընկերաբար զրուցելու Սեբաստիանի հետ։',
    isTrue: false,
    explanationEs: 'Falso. Esperanza corta la charla de golpe con un seco «Chau» y se va.',
    explanationHy: 'Սխալ է։ Էսպերանսան միանգամից ընդհատում է զրույցը՝ ասելով չոր «Chau» և հեռանալով։'
  },
];

// 6. JUEGO 4: ORDENA EL DIÁLOGO (CHRONOLOGICAL ORDER)
export const DIALOGUE_ORDER_DATA: DialogueOrderStep[] = [
  {
    id: 1,
    order: 1,
    speaker: 'Martín',
    textEs: '«Escuchame, hablando de cuidar. Hablé con Alfredo y va a traer a la gente de Nils».',
    textHy: '«Լսի՛ր ինձ, պաշտպանելու մասին խոսելով... Ես խոսեցի Ալֆրեդոյի հետ, և նա Նիլսի մարդկանց է բերելու»։'
  },
  {
    id: 2,
    order: 2,
    speaker: 'Esperanza',
    textEs: '«¡Ay, no! ¡Cortala con eso de guardabujes! Pero es su problema, yo me sé cuidar sola».',
    textHy: '«Ա՜յ, ո՛չ։ Վե՛րջ տուր այդ թիկնապահների մասին խոսակցություններին։ Ես ինքս կարող եմ ինձ պաշտպանել»։'
  },
  {
    id: 3,
    order: 3,
    speaker: 'Martín',
    textEs: '«Te guste o no, vos vas a tener un guardaespaldas encima tuyo día y noche».',
    textHy: '«Ուզես թե չուզես, դու գիշեր-ցերեկ քո գլխին թիկնապահ ես ունենալու»։'
  },
  {
    id: 4,
    order: 4,
    speaker: 'Sebastián',
    textEs: '«Buen día, le dijo la chancha a la cría... Le dejo su capuchino a Martín. ¿Vos querés algo?»',
    textHy: '««Բարի լույս»,– ասաց խոզը իր ձագին... Մարտինի կապուչինոն թողնում եմ այստեղ։ Դու մի բան կուզե՞ս»։'
  },
  {
    id: 5,
    order: 5,
    speaker: 'Sebastián',
    textEs: '«Una cita con vos, sin azúcar. Te perdono si aceptás ir a bailar conmigo o unos petit fours».',
    textHy: '«Մի ժամադրություն քեզ հետ՝ առանց շաքարի։ Քեզ կներեմ, եթե համաձայնես ինձ հետ պարելու գնալ կամ պտիֆուրներ ուտել»։'
  },
  {
    id: 6,
    order: 6,
    speaker: 'Esperanza',
    textEs: '«¿Pero qué canchero que sos unos petit fours? ¡Grasa! Ni siquiera me conocés».',
    textHy: '«Այ քեզ ինքնավստահ շողոքորթ՝ իր պտիֆուրներով։ Անճաշա՜կ։ Դու ինձ նույնիսկ չես ճանաչում»։'
  },
  {
    id: 7,
    order: 7,
    speaker: 'Martín',
    textEs: '«Ella es Esperanza Muñoz. Es mi asistente. Y él es Sebastián Andrade. Tu nuevo guardaespaldas».',
    textHy: '«Սա Էսպերանսա Մունյոսն է։ Իմ օգնականն է։ Իսկ նա Սեբաստիան Անդրադեն է։ Քո նոր թիկնապահը»։'
  },
  {
    id: 8,
    order: 8,
    speaker: 'Esperanza',
    textEs: '«Y novia. ... Chau».',
    textHy: '«Եվ հարսնացուն։ ... Ցտեսություն (Չաո)»։'
  },
];

// 7. JUEGO 5: ¿QUÉ SIGNIFICA? (10 ARGENTINE USEFUL EXPRESSIONS)
export const EXPRESSIONS_DATA: ExpressionItem[] = [
  {
    id: 1,
    phraseEs: '¡Cortala!',
    phraseHy: 'Վե՛րջ տուր։ / Բավակա՛ն է։',
    literalEs: '«Córtala» (de cortar)',
    literalHy: 'Ուղիղ իմաստով՝ «կտրի՛ր այն»',
    meaningEs: '¡Basta!, ¡deja de molestar o insistir con ese tema!',
    meaningHy: '«Բավակա՛ն է», «վե՛րջ տուր», դադարիր նույն բանը կրկնել։',
    exampleEs: '«¡Cortala con eso de los guardaespaldas!»',
    exampleHy: '«Վե՛րջ տուր այդ թիկնապահների մասին խոսակցություններին»։',
    optionsEs: [
      '¡Basta! ¡Deja de insistir con eso!',
      'Usa unas tijeras para cortar la tela.',
      'Llama a la policía rápidamente.'
    ],
    optionsHy: [
      'Բավակա՛ն է, վե՛րջ տուր դրան։',
      'Մկրատ օգտագործիր կտորը կտրելու համար։',
      'Արագ զանգահարիր ոստիկանություն։'
    ],
    correctOptionIndex: 0
  },
  {
    id: 2,
    phraseEs: 'Chabón',
    phraseHy: 'Տղա, տիպ, մարդ (արգենտինյան ժարգոն)',
    literalEs: 'Lunfardo argentino',
    literalHy: 'Արգենտինյան լունֆարդո',
    meaningEs: 'Tipo, muchacho, hombre, sujeto (muy común en Buenos Aires).',
    meaningHy: 'Տղա, երիտասարդ, մարդ (շատ տարածված է Բուենոս Այրեսում)։',
    exampleEs: '«Tener un chabón atrás todo el tiempo es raro».',
    exampleHy: '«Մի տղայի անընդհատ հետևիցդ ունենալը տարօրինակ է»։',
    optionsEs: [
      'Un tipo o muchacho.',
      'Un abrigo de invierno.',
      'Un automóvil lujoso.'
    ],
    optionsHy: [
      'Տղա, երիտասարդ, մարդ։',
      'Ձմեռային վերարկու։',
      'Շքեղ ավտոմեքենա։'
    ],
    correctOptionIndex: 0
  },
  {
    id: 3,
    phraseEs: '¡Qué canchero!',
    phraseHy: 'Ինչպիսի՜ ինքնավստահ շողոքորթ / ֆրանտ։',
    meaningEs: 'Persona que presume de ser muy hábil, seductora, astuta o segura de sí.',
    meaningHy: 'Մարդ, ով իրեն շատ հմուտ, գրավիչ կամ ինքնավստահ է ցույց տալիս։',
    exampleEs: '«¿Pero qué canchero que sos con unos petit fours?»',
    exampleHy: '«Այ քեզ ինքնավստահ շողոքորթ՝ իր պտիֆուրներով»։',
    optionsEs: [
      '¡Qué canchero! = Cree que se las sabe todas o es un galán.',
      '¡Qué trabajador tan esforzado!',
      '¡Qué tímido y callado es!'
    ],
    optionsHy: [
      'Շատ ինքնավստահ, կարծում է, թե ամեն ինչ գիտի կամ գայթակղիչ է։',
      'Ինչպիսի՜ աշխատասեր մարդ։',
      'Ինչպիսի՜ ամաչկոտ ու լռակյաց մարդ։'
    ],
    correctOptionIndex: 0
  },
  {
    id: 4,
    phraseEs: 'Grasa',
    phraseHy: 'Անճաշակ, վուլգար, գռեհիկ (խոսակցական)',
    meaningEs: 'De mal gusto, vulgar, ordinario, sin elegancia.',
    meaningHy: 'Անճաշակ, գռեհիկ, առանց նրբագեղության։',
    exampleEs: '«¡Grasa!» (le dice Esperanza a Sebastián).',
    exampleHy: '«Անճաշա՜կ» (ասում է Էսպերանսան Սեբաստիանին)։',
    optionsEs: [
      'De mal gusto, cursi o vulgar.',
      'Comida frita con mucho aceite.',
      'Persona muy rica e influyente.'
    ],
    optionsHy: [
      'Անճաշակ, գռեհիկ կամ անտաշ։',
      'Շատ յուղով տապակած ուտելիք։',
      'Շատ հարուստ և ազդեցիկ մարդ։'
    ],
    correctOptionIndex: 0
  },
  {
    id: 5,
    phraseEs: 'Te guste o no',
    phraseHy: 'Ուզես թե չուզես',
    meaningEs: 'Sin importar si estás de acuerdo o te agrada; de manera obligatoria.',
    meaningHy: 'Անկախ նրանից՝ դու համաձայն ես, թե ոչ. պարտադիր կերպով։',
    exampleEs: '«Te guste o no, vos vas a tener un guardaespaldas».',
    exampleHy: '«Ուզես թե չուզես, դու թիկնապահ ես ունենալու»։',
    optionsEs: [
      'Sin importar tu opinión o preferencia, es obligatorio.',
      'Si tienes hambre te preparo la comida.',
      'Te gustará mucho el regalo.'
    ],
    optionsHy: [
      'Անկախ քո ցանկությունից, պարտադիր է։',
      'Եթե քաղցած ես, կերակուր կպատրաստեմ։',
      'Նվերը քեզ շատ դուր կգա։'
    ],
    correctOptionIndex: 0
  },
  {
    id: 6,
    phraseEs: 'Encima tuyo / Encima mío',
    phraseHy: 'Գլխիս նստած / կողքիցս չհեռացող',
    meaningEs: 'Siguiendo cada paso, vigilando constantemente sin dar espacio.',
    meaningHy: 'Անընդհատ հետևելով, ամեն քայլը վերահսկելով առանց ազատ տարածության։',
    exampleEs: '«Yo ya tengo a alguien que está encima mío día y noche».',
    exampleHy: '«Ես արդեն ունեմ մեկին, ով գիշեր-ցերեկ իմ գլխին է»։',
    optionsEs: [
      'Vigilando o pegado a ti todo el tiempo.',
      'Parado físicamente sobre tu cabeza.',
      'Viviendo en el piso de arriba.'
    ],
    optionsHy: [
      'Անընդհատ հետևում է կամ կողքիցդ չի հեռանում։',
      'Ուղղակիորեն կանգնած է գլխիդ վրա։',
      'Ապրում է վերևի հարկում։'
    ],
    correctOptionIndex: 0
  },
  {
    id: 7,
    phraseEs: '¿Vos querés algo?',
    phraseHy: 'Դու մի բան կուզե՞ս։ (վոսեո)',
    meaningEs: '¿Deseas o te apetece tomar/tener algo? (forma de voseo para «¿tú quieres algo?») ',
    meaningHy: 'Ցանկանո՞ւմ ես որևէ բան (վոսեոյի ձև՝ «¿tú quieres algo?»-ի փոխարեն)։',
    exampleEs: '«Le dejo su capuchino a Martín. ¿Vos querés algo?»',
    exampleHy: '«Մարտինի կապուչինոն թողնում եմ։ Դու մի բան կուզե՞ս»։',
    optionsEs: [
      'Forma rioplatense de «¿Quieres tú alguna cosa?».',
      '¿Por qué quieres marcharte?',
      '¿A quién quieres más?'
    ],
    optionsHy: [
      '«¿Quieres tú alguna cosa?»-ի արգենտինյան տարբերակը։',
      'Ինչո՞ւ ես ուզում հեռանալ։',
      'Ո՞ւմ ես ավելի շատ սիրում։'
    ],
    correctOptionIndex: 0
  },
  {
    id: 8,
    phraseEs: '¿Qué decís? ¿Aceptás?',
    phraseHy: 'Ի՞նչ կասես։ Համաձա՞յն ես։',
    meaningEs: '¿Qué opinas? ¿Aceptas la invitación? (conjugación con acento en la última sílaba).',
    meaningHy: 'Ի՞նչ կարծիքի ես։ Համաձա՞յն ես հրավերին։',
    exampleEs: '«Bueno, ¿qué decís? ¿Aceptás?»',
    exampleHy: '«Դե, ի՞նչ կասես։ Համաձա՞յն ես»։',
    optionsEs: [
      '¿Qué opinas? ¿Aceptas mi propuesta?',
      '¿Por qué dices tantas mentiras?',
      '¿Aceptas este cheque bancario?'
    ],
    optionsHy: [
      'Ի՞նչ կարծիքի ես։ Համաձա՞յն ես առաջարկիս։',
      'Ինչո՞ւ ես այդքան ստում։',
      'Ընդունո՞ւմ ես այս բանկային չեկը։'
    ],
    correctOptionIndex: 0
  },
  {
    id: 9,
    phraseEs: 'No pienso cambiarlo',
    phraseHy: 'Մտադիր չեմ նրան փոխել',
    meaningEs: 'No tengo ninguna intención de sustituirlo ni de cambiar de opinión.',
    meaningHy: 'Ոչ մի մտադրություն չունեմ նրան փոխարինելու կամ կարծիքս փոխելու։',
    exampleEs: '«Ya tengo a alguien y no pienso cambiarlo».',
    exampleHy: '«Ես արդեն ունեմ մեկին և մտադիր չեմ նրան փոխել»։',
    optionsEs: [
      'No tengo la intención de reemplazarlo por otro.',
      'No pienso en nada en este momento.',
      'No puedo cambiar monedas por billetes.'
    ],
    optionsHy: [
      'Մտադիր չեմ նրան մեկ ուրիշով փոխարինել։',
      'Այս պահին ոչ մի բանի մասին չեմ մտածում։',
      'Չեմ կարող մանրադրամը թղթադրամով փոխել։'
    ],
    correctOptionIndex: 0
  },
  {
    id: 10,
    phraseEs: 'Chau',
    phraseHy: 'Ցտեսություն / Չաո (առօրյա հրաժեշտ)',
    meaningEs: 'Despedida habitual en Argentina (del italiano «ciao»), equivalente a «adiós» o «hasta luego».',
    meaningHy: 'Արգենտինայում ամենօրյա հրաժեշտի բառ (իտալերեն «ciao»-ից), համարժեք է «ցտեսություն»-ին։',
    exampleEs: '«Sí. Chau».',
    exampleHy: '«Հա՛։ Ցտեսություն (Չաո)»։',
    optionsEs: [
      'Despedida informal equivalente a «adiós / hasta luego».',
      'Saludo militar formal.',
      'Insulto grave.'
    ],
    optionsHy: [
      'Ոչ պաշտոնական հրաժեշտ՝ համարժեք «ցտեսություն / մինչ հանդիպում»-ին։',
      'Պաշտոնական զինվորական ողջույն։',
      'Ծանր վիրավորանք։'
    ],
    correctOptionIndex: 0
  },
];

// 8. JUEGO 6: ¿QUÉ PASA DESPUÉS? (INTERACTIVE VIDEO PREDICTION)
export const WHAT_HAPPENS_NEXT_DATA: WhatHappensNextQuestion[] = [
  {
    id: 1,
    pauseAtSeconds: 11,
    continueAtSeconds: 15,
    promptEs: 'Martín dice: «Monita, casi te matan hoy». ¿Qué responde Esperanza con desdén?',
    promptHy: 'Մարտինն ասում է. «Մոնիտա՛, այսօր քեզ քիչ էր մնում սպանեին»։ Ի՞նչ է արհամարհանքով պատասխանում Էսպերանսան։',
    precedingDialogueEs: 'Martín: «Monita, casi te matan hoy».',
    precedingDialogueHy: 'Մարտին. «Մոնիտա՛, այսօր քեզ քիչ էր մնում սպանեին»։',
    options: [
      {
        key: 'A',
        textEs: '«¿Qué con esa tijerita?»',
        textHy: '«Ի՞նչ է, այդ մկրատիկո՞վ»։',
        isCorrect: true
      },
      {
        key: 'B',
        textEs: '«¡Tenés toda la razón, tengo mucho miedo!»',
        textHy: '«Դու լիովին ճիշտ ես, ես շատ եմ վախենում»։',
        isCorrect: false
      },
      {
        key: 'C',
        textEs: '«Llamá a la policía ya mismo».',
        textHy: '«Անմիջապես զանգահարիր ոստիկանություն»։',
        isCorrect: false
      }
    ],
    revealExplanationEs: 'Esperanza le resta importancia con ironía diciendo: «¿Qué con esa tijerita?».',
    revealExplanationHy: 'Էսպերանսան հեգնանքով նսեմացնում է վտանգը՝ ասելով. «¿Qué con esa tijerita?» (Ի՞նչ է, այդ մկրատիկո՞վ)։'
  },
  {
    id: 2,
    pauseAtSeconds: 41,
    continueAtSeconds: 48,
    promptEs: 'Sebastián pregunta: «¿Vos querés algo?». ¿Qué inesperada y atrevida respuesta da él mismo?',
    promptHy: 'Սեբաստիանը հարցնում է. «¿Vos querés algo?»: Ի՞նչ անսպասելի և համարձակ պատասխան է նա ինքն իրեն տալիս։',
    precedingDialogueEs: 'Esperanza: «Ah, sí. Qué bueno que lo preguntás. Si quisiera, eh...»',
    precedingDialogueHy: 'Էսպերանսա. «Ա՜, հա։ Ինչ լավ է, որ հարցրիր։ Եթե ուզենայի, ըըը...»',
    options: [
      {
        key: 'A',
        textEs: '«Un vaso de agua mineral con hielo».',
        textHy: '«Մեկ բաժակ հանքային ջուր սառույցով»։',
        isCorrect: false
      },
      {
        key: 'B',
        textEs: '«Una cita con vos, sin azúcar».',
        textHy: '«Մի ժամադրություն քեզ հետ՝ առանց շաքարի»։',
        isCorrect: true
      },
      {
        key: 'C',
        textEs: '«El informe de contabilidad».',
        textHy: '«Հաշվապահական հաշվետվությունը»։',
        isCorrect: false
      }
    ],
    revealExplanationEs: 'Sebastián se adelanta con picardía y pide: «Una cita con vos, sin azúcar».',
    revealExplanationHy: 'Սեբաստիանն առաջ է ընկնում և ասում. «Una cita con vos, sin azúcar» (Ժամադրություն քեզ հետ՝ առանց շաքարի)։'
  },
  {
    id: 3,
    pauseAtSeconds: 71,
    continueAtSeconds: 76,
    promptEs: 'Martín presenta: «Ella es Esperanza Muñoz. Es mi asistente». ¿Qué agrega Esperanza al instante?',
    promptHy: 'Մարտինը ներկայացնում է. «Նա Էսպերանսա Մունյոսն է։ Իմ օգնականն է»։ Ի՞նչ է ակնթարթորեն ավելացնում Էսպերանսան։',
    precedingDialogueEs: 'Martín: «Ella es Esperanza Muñoz. Es mi asistente».',
    precedingDialogueHy: 'Մարտին. «Սա Էսպերանսա Մունյոսն է։ Իմ օգնականն է»։',
    options: [
      {
        key: 'A',
        textEs: '«Y secretaria ejecutiva».',
        textHy: '«Եվ գործադիր քարտուղարուհի»։',
        isCorrect: false
      },
      {
        key: 'B',
        textEs: '«Y novia».',
        textHy: '«Եվ հարսնացուն»։',
        isCorrect: true
      },
      {
        key: 'C',
        textEs: '«Y socia del negocio».',
        textHy: '«Եվ բիզնեսի գործընկեր»։',
        isCorrect: false
      }
    ],
    revealExplanationEs: 'Esperanza no duda en marcar su territorio ante el nuevo guardaespaldas diciendo firmemente: «Y novia».',
    revealExplanationHy: 'Էսպերանսան առանց վարանելու նշում է իր կարգավիճակը նոր թիկնապահի առաջ՝ ասելով. «Y novia» (Եվ հարսնացուն)։'
  },
  {
    id: 4,
    pauseAtSeconds: 79,
    continueAtSeconds: 87,
    promptEs: 'Martín dice: «Y él es Sebastián Andrade. Tu nuevo guardaespaldas». ¿Cómo termina Esperanza la escena?',
    promptHy: 'Մարտինն ասում է. «Իսկ նա Սեբաստիան Անդրադեն է։ Քո նոր թիկնապահը»։ Ինչպե՞ս է Էսպերանսան ավարտում տեսարանը։',
    precedingDialogueEs: 'Martín: «Tu nuevo guardaespaldas». Esperanza: «Sí...»',
    precedingDialogueHy: 'Մարտին. «Քո նոր թիկնապահը»։ Էսպերանսա. «Հա՛...»',
    options: [
      {
        key: 'A',
        textEs: 'Le da un abrazo de bienvenida.',
        textHy: 'Ողջույնի գրկախառնությամբ է ընդունում նրան։',
        isCorrect: false
      },
      {
        key: 'B',
        textEs: 'Dice un seco y tajante «Chau» y se va.',
        textHy: 'Չոր և կտրուկ ասում է «Chau» ու հեռանում։',
        isCorrect: true
      },
      {
        key: 'C',
        textEs: 'Le ofrece una taza de té.',
        textHy: 'Մեկ բաժակ թեյ է առաջարկում։',
        isCorrect: false
      }
    ],
    revealExplanationEs: 'Esperanza corta en seco toda cordialidad con un breve «Chau» y le da la espalda.',
    revealExplanationHy: 'Էսպերանսան միանգամից կտրում է բարեկամական շփումը կարճ «Chau»-ով և մեջքով շրջվում։'
  }
];

// 9. ESPAÑOL ARGENTINO (RIOPLATENSE LESSONS)
export const ARGENTINE_LESSONS = [
  {
    id: 1,
    titleEs: '1. El Voseo (Uso de «Vos» en vez de «Tú»)',
    titleHy: '1. Վոսեո («Vos»-ի օգտագործումը «Tú»-ի փոխարեն)',
    badge: 'Gramática clave',
    explanationEs: 'En Argentina y Uruguay no se usa el pronombre «tú», sino «vos». Este cambio modifica la acentuación y conjugación en presente del indicativo e imperativo.',
    explanationHy: 'Արգենտինայում և Ուրուգվայում չեն օգտագործում «tú» դերանունը, այլ օգտագործում են «vos»։ Այս փոփոխությունը փոխում է ներկա ժամանակի և հրամայական եղանակի շեշտադրումն ու խոնարհումը։',
    examples: [
      {
        standardEs: 'Tú quieres algo',
        argentineEs: 'Vos querés algo',
        armenian: 'Դու մի բան ես ուզում'
      },
      {
        standardEs: '¿Qué dices tú?',
        argentineEs: '¿Qué decís vos?',
        armenian: 'Ի՞նչ ես ասում դու'
      },
      {
        standardEs: 'Tú no me conoces',
        argentineEs: 'Vos no me conocés',
        armenian: 'Դու ինձ չես ճանաչում'
      },
      {
        standardEs: 'Si tú aceptas',
        argentineEs: 'Si vos aceptás',
        armenian: 'Եթե դու համաձայնես'
      },
      {
        standardEs: 'Tú vas a tener',
        argentineEs: 'Vos vas a tener',
        armenian: 'Դու ունենալու ես'
      }
    ]
  },
  {
    id: 2,
    titleEs: '2. El Imperativo Rioplatense («Escuchame», «Cortala»)',
    titleHy: '2. Ռիոպլատենսե հրամայականը («Escuchame», «Cortala»)',
    badge: 'Imperativo',
    explanationEs: 'En el imperativo con vos, la fuerza de voz va en la última sílaba del verbo raíz antes del pronombre enclítico: «Escuchá» + «me» = «Escuchame» (pronunciado es-cu-CHA-me), a diferencia del español estándar «Escúchame» (es-CU-cha-me).',
    explanationHy: '«Vos»-ով հրամայական եղանակում շեշտը ընկնում է բայահիմքի վերջին վանկի վրա՝ «Escuchame» (արտասանվում է էս-կու-ՉԱ-մե), ի տարբերություն ստանդարտ իսպաներենի «Escúchame» (էս-ԿՈՒ-չա-մե) ձևի։',
    examples: [
      {
        standardEs: '¡Escúchame una cosa!',
        argentineEs: '¡Escuchame una cosa!',
        armenian: 'Լսի՛ր ինձ մի բան։'
      },
      {
        standardEs: '¡Córtala con eso! (Basta)',
        argentineEs: '¡Cortala con eso!',
        armenian: 'Վե՛րջ տուր դրան։ (Բավակա՛ն է)'
      },
      {
        standardEs: '¡Mírame!',
        argentineEs: '¡Mirame!',
        armenian: 'Նայի՛ր ինձ։'
      }
    ]
  },
  {
    id: 3,
    titleEs: '3. Lunfardo y Vocabulario Coloquial Porteño',
    titleHy: '3. Լունֆարդո և առօրյա բուենոսայրեսյան բառապաշար',
    badge: 'Vocabulario',
    explanationEs: 'El lunfardo es el argot popular nacido en los barrios de Buenos Aires a finales del siglo XIX con fuerte influencia de inmigrantes italianos.',
    explanationHy: 'Լունֆարդոն ժողովրդական ժարգոն է, որը ծնվել է 19-րդ դարի վերջին Բուենոս Այրեսում՝ իտալացի ներգաղթյալների ուժեղ ազդեցությամբ։',
    examples: [
      {
        standardEs: 'Un tipo, un hombre, un muchacho',
        argentineEs: 'Un chabón',
        armenian: 'Տղա, տիպ, երիտասարդ'
      },
      {
        standardEs: 'Seguro de sí, creído, astuto',
        argentineEs: 'Canchero',
        armenian: 'Ինքնավստահ, շողոքորթ, իրեն ամենագետ համարող'
      },
      {
        standardEs: 'Vulgar, de mal gusto, sin clase',
        argentineEs: 'Grasa',
        armenian: 'Անճաշակ, գռեհիկ, անտաշ'
      },
      {
        standardEs: 'Aperitivo, trago con tentempié',
        argentineEs: 'Copetín',
        armenian: 'Ապերիտիվ, կոկտեյլ թեթև նախուտեստով'
      },
      {
        standardEs: 'Adiós / Hasta luego (del italiano ciao)',
        argentineEs: 'Chau',
        armenian: 'Ցտեսություն / Չաո'
      }
    ]
  },
  {
    id: 4,
    titleEs: '4. Pronunciación: El Yeísmo Rehilado («Sh»)',
    titleHy: '4. Արտասանություն. Ռեիլադո յեիզմ («Շ» հնչյուն)',
    badge: 'Fonética',
    explanationEs: 'En Argentina y Uruguay las letras «ll» e «y» se pronuncian habitualmente como «sh» suave (fricativa postalveolar sorda o sonora). Por ejemplo, «Yo ya tengo» suena fonéticamente «Sho sha tengo».',
    explanationHy: 'Արգենտինայում և Ուրուգվայում «ll» և «y» տառերը սովորաբար արտասանվում են որպես փափուկ «շ»։ Օրինակ՝ «Yo ya tengo» հնչում է «Շո շա տենգո»։',
    examples: [
      {
        standardEs: 'Yo ya tengo a alguien',
        argentineEs: '[Sho sha tengo a alguien]',
        armenian: 'Ես արդեն ունեմ մեկին'
      },
      {
        standardEs: 'Ella es Esperanza',
        argentineEs: '[Esha es Esperanza]',
        armenian: 'Նա Էսպերանսան է'
      },
      {
        standardEs: 'Encima tuyo día y noche',
        argentineEs: '[Encima tusho día y noche]',
        armenian: 'Քո գլխին գիշեր-ցերեկ'
      }
    ]
  }
];

// 10. EL DESAFÍO FINAL: 20 COMPREHENSIVE QUESTIONS
export const FINAL_TEST_QUESTIONS: FinalExamQuestion[] = [
  {
    id: 1,
    category: 'comprensión',
    questionEs: '1. ¿Cuál es el motivo principal de la discusión inicial entre Martín y Esperanza?',
    questionHy: '1. Ո՞րն է Մարտինի և Էսպերանսայի սկզբնական վեճի գլխավոր պատճառը։',
    options: [
      { key: 'A', textEs: 'Martín quiere imponerle un guardaespaldas para protegerla tras un atentado.', textHy: 'Մարտինը ցանկանում է նրան թիկնապահ պարտադրել՝ հարձակումից հետո պաշտպանելու համար։' },
      { key: 'B', textEs: 'Esperanza quiere renunciar a su puesto de trabajo.', textHy: 'Էսպերանսան ցանկանում է հրաժարվել իր աշխատանքից։' },
      { key: 'C', textEs: 'Martín olvidó comprar el almuerzo.', textHy: 'Մարտինը մոռացել է ճաշ գնել։' },
    ],
    correctKey: 'A',
    explanationEs: 'Martín insiste en contratar seguridad porque casi la matan hoy.',
    explanationHy: 'Մարտինը պնդում է անվտանգության աշխատակից վարձել, քանի որ այսօր քիչ էր մնում նրան սպանեին։'
  },
  {
    id: 2,
    category: 'comprensión',
    questionEs: '2. ¿Qué objeto menciona irónicamente Esperanza sobre el ataque que sufrió?',
    questionHy: '2. Ի՞նչ առարկայի մասին է հեգնանքով հիշատակում Էսպերանսան իր վրա կատարված հարձակման վերաբերյալ։',
    options: [
      { key: 'A', textEs: 'Una pistola.', textHy: 'Ատրճանակ։' },
      { key: 'B', textEs: '«Esa tijerita» (una pequeña tijera).', textHy: '«Esa tijerita» (այդ փոքրիկ մկրատը)։' },
      { key: 'C', textEs: 'Un cuchillo de cocina.', textHy: 'Խոհանոցային դանակ։' },
    ],
    correctKey: 'B',
    explanationEs: 'Esperanza se burla diciendo: «¿Qué con esa tijerita?».',
    explanationHy: 'Էսպերանսան ծաղրում է՝ ասելով. «¿Qué con esa tijerita?» (Ի՞նչ է, այդ մկրատիկո՞վ)։'
  },
  {
    id: 3,
    category: 'vocabulario',
    questionEs: '3. En lunfardo porteño, ¿a qué equivale la palabra «chabón»?',
    questionHy: '3. Բուենոսայրեսյան լունֆարդոյում ինչի՞ն է համարժեք «chabón» բառը։',
    options: [
      { key: 'A', textEs: 'A un muchacho, tipo o individuo.', textHy: 'Երիտասարդին, տղային կամ անհատին։' },
      { key: 'B', textEs: 'A un coche deportivo.', textHy: 'Սպորտային ավտոմեքենային։' },
      { key: 'C', textEs: 'A un sombrero antiguo.', textHy: 'Հնաոճ գլխարկին։' },
    ],
    correctKey: 'A',
    explanationEs: '«Chabón» es un término coloquial rioplatense para «hombre / tipo».',
    explanationHy: '«Chabón»-ը արգենտինյան խոսակցական եզրույթ է «տղամարդ / տիպ» իմաստով։'
  },
  {
    id: 4,
    category: 'gramática',
    questionEs: '4. ¿Cómo conjuga el voseo el verbo «querer» en presente para la segunda persona?',
    questionHy: '4. Ինչպե՞ս է վոսեոն խոնարհում «querer» բայը ներկա ժամանակի 2-րդ դեմքում։',
    options: [
      { key: 'A', textEs: 'Vos quieres.', textHy: 'Vos quieres.' },
      { key: 'B', textEs: 'Vos querés.', textHy: 'Vos querés.' },
      { key: 'C', textEs: 'Vos quiera.', textHy: 'Vos quiera.' },
    ],
    correctKey: 'B',
    explanationEs: 'En el voseo rioplatense se dice «vos querés» con acento ortográfico en la última sílaba.',
    explanationHy: 'Ռիոպլատենսե վոսեոյում ասում են «vos querés»՝ վերջին վանկի շեշտով։'
  },
  {
    id: 5,
    category: 'expresión_argentina',
    questionEs: '5. ¿Qué significa la frase «¡Cortala con eso!»?',
    questionHy: '5. Ի՞նչ է նշանակում «¡Cortala con eso!» արտահայտությունը։',
    options: [
      { key: 'A', textEs: '«¡Basta! ¡Deja de insistir con ese tema!»', textHy: '«Բավակա՛ն է, վե՛րջ տուր այդ թեմային»։' },
      { key: 'B', textEs: '«Corta el pan en rebanadas».', textHy: '«Հացը կտոր-կտոր կտրիր»։' },
      { key: 'C', textEs: '«Pásame el teléfono».', textHy: '«Փոխանցիր ինձ հեռախոսը»։' },
    ],
    correctKey: 'A',
    explanationEs: '«Cortala» es una forma muy argentina de decir «basta» o «pará la mano».',
    explanationHy: '«Cortala»-ն արգենտինյան ձև է «բավական է» կամ «վերջ տուր» ասելու համար։'
  },
  {
    id: 6,
    category: 'comprensión',
    questionEs: '6. ¿Quién es Bárbara y por qué se la menciona?',
    questionHy: '6. Ո՞վ է Բարբարան և ինչո՞ւ է նա հիշատակվում։',
    options: [
      { key: 'A', textEs: 'La persona a quien Martín busca desesperadamente antes de liberar a Esperanza de la custodia.', textHy: 'Այն անձնավորությունը, ում Մարտինը հուսահատ փնտրում է նախքան Էսպերանսայի պահպանությունը դադարեցնելը։' },
      { key: 'B', textEs: 'La nueva recepcionista de la empresa.', textHy: 'Ընկերության նոր ընդունարանի աշխատակցուհին։' },
      { key: 'C', textEs: 'La entrenadora de gimnasia.', textHy: 'Մարմնամարզության մարզիչը։' },
    ],
    correctKey: 'A',
    explanationEs: 'Martín dice: «Hasta que yo encuentre a Bárbara. Y fin de la discusión».',
    explanationHy: 'Մարտինն ասում է. «Hasta que yo encuentre a Bárbara. Y fin de la discusión»։'
  },
  {
    id: 7,
    category: 'comprensión',
    questionEs: '7. ¿A quién se refiere Esperanza cuando dice: «Yo ya tengo a alguien que está encima mío día y noche»?',
    questionHy: '7. Ո՞ւմ նկատի ունի Էսպերանսան, երբ ասում է. «Ես արդեն ունեմ մեկին, ով գիշեր-ցերեկ իմ գլխին է»։',
    options: [
      { key: 'A', textEs: 'A su perro guardián.', textHy: 'Իր պահակ շանը։' },
      { key: 'B', textEs: 'Al mismo Martín Quesada.', textHy: 'Հենց նույն ինքը Մարտին Կեսադային։' },
      { key: 'C', textEs: 'A su vecino del edificio.', textHy: 'Շենքի իր հարևանին։' },
    ],
    correctKey: 'B',
    explanationEs: 'Es un guiño romántico hacia Martín, quien cuida de ella todo el tiempo.',
    explanationHy: 'Սա ռոմանտիկ ակնարկ է Մարտինին, ով անընդհատ հոգ է տանում նրա մասին։'
  },
  {
    id: 8,
    category: 'vocabulario',
    questionEs: '8. ¿Qué significa el término «copetín» en el español rioplatense?',
    questionHy: '8. Ի՞նչ է նշանակում «copetín» եզրույթը ռիոպլատենսե իսպաներենում։',
    options: [
      { key: 'A', textEs: 'Un trago o refrigerio previo a la comida con pequeños aperitivos.', textHy: 'Խմիչք կամ ապերիտիվ ճաշից առաջ՝ թեթև նախուտեստներով։' },
      { key: 'B', textEs: 'Un sombrero de copa alta.', textHy: 'Բարձր գլանաձև գլխարկ։' },
      { key: 'C', textEs: 'Un baile tradicional.', textHy: 'Ավանդական պար։' },
    ],
    correctKey: 'A',
    explanationEs: '«Copetín» es una bebida ligera acompañada de bocadillos o picada.',
    explanationHy: '«Copetín»-ը թեթև ըմպելիք է նախուտեստներով։'
  },
  {
    id: 9,
    category: 'expresión_argentina',
    questionEs: '9. Cuando Esperanza llama a Sebastián «¡Grasa!», ¿qué le está diciendo?',
    questionHy: '9. Երբ Էսպերանսան Սեբաստիանին անվանում է «¡Grasa!», ի՞նչ է նա նրան ասում։',
    options: [
      { key: 'A', textEs: 'Que su actitud es ordinaria, de mal gusto o cursi.', textHy: 'Որ նրա պահվածքը անճաշակ է, վուլգար կամ գռեհիկ։' },
      { key: 'B', textEs: 'Que tiene sobrepeso.', textHy: 'Որ նա ավելորդ քաշ ունի։' },
      { key: 'C', textEs: 'Que cocina comida grasienta.', textHy: 'Որ նա յուղոտ կերակուր է պատրաստում։' },
    ],
    correctKey: 'A',
    explanationEs: 'En Argentina «grasa» se utiliza despectivamente para calificar a algo o alguien de mal gusto.',
    explanationHy: 'Արգենտինայում «grasa»-ն արհամարհական բառ է անճաշակ մարդկանց կամ իրերի համար։'
  },
  {
    id: 10,
    category: 'gramática',
    questionEs: '10. ¿Cuál es la forma correcta del imperativo con vos para el verbo «escuchar» con pronombre me?',
    questionHy: '10. Ո՞րն է «escuchar» բայի հրամայականի ճիշտ ձևը «vos»-ի և «me» դերանվան հետ։',
    options: [
      { key: 'A', textEs: 'Escúchame (acento en la U).', textHy: 'Escúchame (շեշտը U-ի վրա)։' },
      { key: 'B', textEs: 'Escuchame (acento prosódico en la A: es-cu-CHA-me).', textHy: 'Escuchame (շեշտը A-ի վրա՝ էս-կու-ՉԱ-մե)։' },
      { key: 'C', textEs: 'Escucha me.', textHy: 'Escucha me.' },
    ],
    correctKey: 'B',
    explanationEs: 'En el dialecto porteño la raíz «escuchá» retiene la fuerza de voz.',
    explanationHy: 'Բուենոսայրեսյան բարբառում հրամայականի շեշտը մնում է «escuchá» հիմքի վրա։'
  },
  {
    id: 11,
    category: 'comprensión',
    questionEs: '11. ¿Qué frase poético-humorística dice Sebastián al pedir una cita?',
    questionHy: '11. Ի՞նչ բանաստեղծական-հումորային արտահայտություն է ասում Սեբաստիանը ժամադրություն խնդրելիս։',
    options: [
      { key: 'A', textEs: '«Una cita con vos, sin azúcar».', textHy: '«Մի ժամադրություն քեզ հետ՝ առանց շաքարի»։' },
      { key: 'B', textEs: '«Un café con leche bajo la luna».', textHy: '«Սուրճ կաթով լուսնի լույսի ներքո»։' },
      { key: 'C', textEs: '«Una flor para la más bella».', textHy: '«Ծաղիկ ամենագեղեցիկի համար»։' },
    ],
    correctKey: 'A',
    explanationEs: 'Sebastián responde al capuchino diciendo con coquetería: «Una cita con vos, sin azúcar».',
    explanationHy: 'Սեբաստիանը սրամտորեն ասում է. «Una cita con vos, sin azúcar» (Ժամադրություն քեզ հետ՝ առանց շաքարի)։'
  },
  {
    id: 12,
    category: 'gramática',
    questionEs: '12. En «¿Qué decís?», ¿cuál es el equivalente en español peninsular estándar?',
    questionHy: '12. «¿Qué decís?» արտահայտության ստանդարտ իսպանական համարժեքը ո՞րն է։',
    options: [
      { key: 'A', textEs: '¿Qué dices tú?', textHy: '¿Qué dices tú?' },
      { key: 'B', textEs: '¿Qué dijeron ustedes?', textHy: '¿Qué dijeron ustedes?' },
      { key: 'C', textEs: '¿Qué decir?', textHy: '¿Qué decir?' },
    ],
    correctKey: 'A',
    explanationEs: '«¿Qué decís?» corresponde exactamente a «¿Qué dices tú?».',
    explanationHy: '«¿Qué decís?»-ը ուղիղ համապատասխանում է «¿Qué dices tú?»-ին։'
  },
  {
    id: 13,
    category: 'comprensión',
    questionEs: '13. ¿Cómo reacciona Sebastián cuando Martín revela que Esperanza es su novia?',
    questionHy: '13. Ինչպե՞ս է արձագանքում Սեբաստիանը, երբ բացահայտվում է, որ Էսպերանսան Մարտինի ընկերուհին է։',
    options: [
      { key: 'A', textEs: 'Queda sorprendido y algo cortado tras haber intentado seducirla instantes antes.', textHy: 'Զարմանում և մի փոքր շփոթվում է, քանի որ քիչ առաջ փորձում էր նրան գայթակղել։' },
      { key: 'B', textEs: 'Se enfada y renuncia de inmediato.', textHy: 'Բարկանում է և անմիջապես հրաժարվում աշխատանքից։' },
      { key: 'C', textEs: 'Empieza a reír a carcajadas con Martín.', textHy: 'Սկսում է բարձր ծիծաղել Մարտինի հետ։' },
    ],
    correctKey: 'A',
    explanationEs: 'Sebastián se da cuenta de que estuvo flirteando con la prometida de su nuevo jefe.',
    explanationHy: 'Սեբաստիանը հասկանում է, որ քիչ առաջ սիրախաղ էր անում իր նոր ղեկավարի հարսնացուի հետ։'
  },
  {
    id: 14,
    category: 'vocabulario',
    questionEs: '14. ¿Qué son los «petit fours» mencionados en el diálogo?',
    questionHy: '14. Ի՞նչ են երկխոսության մեջ հիշատակված «petit fours»-ը։',
    options: [
      { key: 'A', textEs: 'Pastelitos o bocaditos dulces franceses de pequeño tamaño.', textHy: 'Փոքր չափի ֆրանսիական քաղցր թխվածքներ կամ խմորեղեններ։' },
      { key: 'B', textEs: 'Cuatro pequeños guardias de seguridad.', textHy: 'Չորս փոքրիկ թիկնապահներ։' },
      { key: 'C', textEs: 'Una marca de cigarrillos.', textHy: 'Ծխախոտի ապրանքանիշ։' },
    ],
    correctKey: 'A',
    explanationEs: '«Petit fours» son pastelillos finos de origen francés.',
    explanationHy: '«Petit fours»-ը ֆրանսիական ծագմամբ նուրբ փոքրիկ թխվածքներ են։'
  },
  {
    id: 15,
    category: 'gramática',
    questionEs: '15. ¿Cómo se conjuga el verbo «conocer» con «vos» en presente?',
    questionHy: '15. Ինչպե՞ս է խոնարհվում «conocer» բայը «vos»-ի հետ ներկա ժամանակում։',
    options: [
      { key: 'A', textEs: 'Vos conocés.', textHy: 'Vos conocés.' },
      { key: 'B', textEs: 'Vos conoces.', textHy: 'Vos conoces.' },
      { key: 'C', textEs: 'Vos conozcas.', textHy: 'Vos conozcas.' },
    ],
    correctKey: 'A',
    explanationEs: 'Esperanza dice: «Ni siquiera me conocés...». Lleva acento agudo en la última sílaba.',
    explanationHy: 'Էսպերանսան ասում է. «Ni siquiera me conocés...»՝ շեշտը վերջին վանկի վրա։'
  },
  {
    id: 16,
    category: 'expresión_argentina',
    questionEs: '16. ¿De qué lengua proviene el popular saludo de despedida argentino «Chau»?',
    questionHy: '16. Ո՞ր լեզվից է ծագում արգենտինյան հայտնի «Chau» (չաո) հրաժեշտի բառը։',
    options: [
      { key: 'A', textEs: 'Del italiano («ciao»).', textHy: 'Իտալերենից («ciao»)։' },
      { key: 'B', textEs: 'Del francés («salut»).', textHy: 'Ֆրանսերենից («salut»)։' },
      { key: 'C', textEs: 'Del quechua nativo.', textHy: 'Բնիկ կեչուա լեզվից։' },
    ],
    correctKey: 'A',
    explanationEs: 'Los millones de inmigrantes italianos en el Río de la Plata incorporaron «ciao» adaptado como «chau».',
    explanationHy: 'Միլիոնավոր իտալացի ներգաղթյալները Ռիո դե լա Պլատայում ներմուծեցին «ciao» բառը, որը դարձավ «chau»։'
  },
  {
    id: 17,
    category: 'comprensión',
    questionEs: '17. ¿Por qué Esperanza inventa la palabra «guardabujes»?',
    questionHy: '17. Ինչո՞ւ է Էսպերանսան հորինում «guardabujes» բառը։',
    options: [
      { key: 'A', textEs: 'Para burlarse y deformar irónicamente la palabra «guardaespaldas».', textHy: '«Guardaespaldas» (թիկնապահ) բառը հեգնանքով աղավաղելու և ծաղրելու համար։' },
      { key: 'B', textEs: 'Porque no habla español.', textHy: 'Քանի որ չի տիրապետում իսպաներենին։' },
      { key: 'C', textEs: 'Porque habla de piezas mecánicas de un automóvil.', textHy: 'Քանի որ մեքենայի մեխանիկական մասերի մասին է խոսում։' },
    ],
    correctKey: 'A',
    explanationEs: 'La Monita suele usar juegos de palabras disparatados para mostrar su disgusto.',
    explanationHy: 'Մոնիտան հաճախ օգտագործում է զավեշտալի բառախաղեր՝ իր դժգոհությունն արտահայտելու համար։'
  },
  {
    id: 18,
    category: 'vocabulario',
    questionEs: '18. ¿Qué significa la palabra «tijerita» dicha por Esperanza?',
    questionHy: '18. Ի՞նչ է նշանակում Էսպերանսայի ասած «tijerita» բառը։',
    options: [
      { key: 'A', textEs: 'Diminutivo de tijera (tijeras pequeñas).', textHy: 'Tijera բառի փոքրացուցիչ ձևը (փոքրիկ մկրատ)։' },
      { key: 'B', textEs: 'Un tipo de árbol.', textHy: 'Ծառի տեսակ։' },
      { key: 'C', textEs: 'Un paso de baile.', textHy: 'Պարային քայլ։' },
    ],
    correctKey: 'A',
    explanationEs: '«Tijerita» es el diminutivo cariñoso o irónico de tijeras.',
    explanationHy: '«Tijerita»-ն «tijera» (մկրատ) բառի փոքրացուցիչ ձևն է։'
  },
  {
    id: 19,
    category: 'gramática',
    questionEs: '19. ¿Cómo se pronuncian las letras «ll» e «y» en el dialecto rioplatense (yeísmo rehilado)?',
    questionHy: '19. Ինչպե՞ս են արտասանվում «ll» և «y» տառերը ռիոպլատենսե բարբառում։',
    options: [
      { key: 'A', textEs: 'Como un sonido similar a «sh» o «zh».', textHy: '«Շ» կամ «ժ» հնչյունին նման ձայնով։' },
      { key: 'B', textEs: 'Como una «L» suave.', textHy: 'Որպես փափուկ «L»։' },
      { key: 'C', textEs: 'Son completamente mudas.', textHy: 'Լիովին համր են։' },
    ],
    correctKey: 'A',
    explanationEs: 'En Argentina «calle» suena [kashe] y «yo» suena [sho].',
    explanationHy: 'Արգենտինայում «calle» հնչում է [կաշե], իսկ «yo» հնչում է [շո]։'
  },
  {
    id: 20,
    category: 'comprensión',
    questionEs: '20. ¿Qué actitud muestra Esperanza durante todo el fragmento?',
    questionHy: '20. Ի՞նչ վերաբերմունք է ցուցաբերում Էսպերանսան ողջ տեսանյութի ընթացքում։',
    options: [
      { key: 'A', textEs: 'Independiente, pícara, irónica y celosa de su dignidad y su relación con Martín.', textHy: 'Ինքնուրույն, չարաճճի, հեգնական և իր արժանապատվության ու Մարտինի հետ կապի տերը։' },
      { key: 'B', textEs: 'Temerosa, sumisa y necesitada de auxilio constante.', textHy: 'Վախկոտ, հնազանդ և անընդհատ օգնության կարիք ունեցող։' },
      { key: 'C', textEs: 'Desinteresada de todo lo que sucede a su alrededor.', textHy: 'Անտարբեր իր շուրջը կատարվող ամեն ինչի նկատմամբ։' },
    ],
    correctKey: 'A',
    explanationEs: 'La Monita es una mujer fuerte, boxeadora y decidida que no se deja intimidar ni seducir fácilmente.',
    explanationHy: 'Լա Մոնիտան ուժեղ, բռնցքամարտիկ և վճռական կին է, ում հեշտ չէ վախեցնել կամ գայթակղել։'
  },
];
