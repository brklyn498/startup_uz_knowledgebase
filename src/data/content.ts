export type FeatureItem = {
    title: string;
    value?: string;
    description: string;
    date?: string;
    source: string;
    tags?: string[];
    extendedInfo?: string;
};

export type Content = {
    nav: {
        title: string;
        lang: string;
        sections: { id: string; label: string }[];
    };
    overview: {
        title: string;
        stats: FeatureItem[];
    };
    funding: {
        title: string;
        items: FeatureItem[];
    };
    regulatory: {
        title: string;
        timeline: FeatureItem[];
    };
    tax: {
        title: string;
        warning: string;
        deadline: string;
        date: string;
        affectedGroups: string[];
        details: string;
        checklistTitle: string;
        safeMessage: string;
        dangerMessage: string;
        checklist: { id: string; label: string }[];
    };
    bpo: {
        title: string;
        items: FeatureItem[];
    };
    future: {
        title: string;
        items: FeatureItem[];
    };
    venture: {
        title: string;
        items: FeatureItem[];
    };
};

export const content: Record<"uz" | "ru" | "uz_cyr", Content> = {
    uz_cyr: {
        nav: {
            title: "Стартап Портал",
            lang: "UZ",
            sections: [
                { id: "overview", label: "Умумий" },
                { id: "funding", label: "Грантлар ва Пул" },
                { id: "regulatory", label: "Қоидаlar ва Йўл харитаси" },
                { id: "tax", label: "Солиқ ва Имтиёзлар" },
                { id: "venture", label: "Инвестиция (VC)" },
                { id: "bpo", label: "Экспорт (BPO)" },
                { id: "future", label: "Стратегия 2030" },
            ],
        },
        overview: {
            title: "Экотизим Кўрсаткичлари (2026)",
            stats: [
                {
                    title: "IT Экспорт Мақсади",
                    value: "$1.0B",
                    description: "2026 йил якунигача бўлган асосий кўрсаткич. Ўзбекистонни минтақавий IT хабга айлантириш.",
                    extendedInfo: "Давлат стратегиясига кўра, 2026 йил охиригача IT-хизматлар экспорти $1 миллиарддан ошиши кутилмоқда. Бу асосан BPO хизматлари ва дастурий маҳсулотлар экспорти ҳисобига амалга оширилади.",
                    source: "Рақамли Ўзбекистон-2026"
                },
                {
                    title: "IT Мутахассислар",
                    value: "100,000+",
                    description: "Юқори малакали ва халқаро сертификатга эга бўлган кадрлар сони.",
                    extendedInfo: "Айни пайтда 'Бир миллион дастурчи' лойиҳаси ва IT-академиялар тизими орқали йиллик 25-30 минг янги кадрлар бозорга чиқиши таъминланмоқда.",
                    source: "ИТ-Парк Ҳисоботи 2025"
                },
                {
                    title: "Стартаплар Сони",
                    value: "1,500+",
                    description: "Рўйхатдан ўтган ва фаол стартап лойиҳалар.",
                    extendedInfo: "2026 йилга келиб стартап экотизимида сифат ўзгариши кутилмоқда. Асосан FinTech, EdTech ва GovTech йўналишлари етакчилик қилмоқда.",
                    source: "Инновацион Ривожланиш Агентлиги"
                },
            ],
        },
        funding: {
            title: "Маблағ ажратиш ва Грантлар",
            items: [
                {
                    title: "Президент Tech Award",
                    value: "$1,000,000",
                    description: "Энг яхши стартап лойиҳалар учун йиллик танлов. 5 та асосий йўналиш бўйича мукофотлар.",
                    extendedInfo: "Мукофот жамғармаси $1 миллион бўлиб, у 5 та асосий йўналишни қамраб олади: СИ, Ижтимоий технологиялар, Киберспорт, Тадбиркорлик/Финтех ва ЭдТеч. Ғолиблар 1-ўрин учун $100к, 2-ўрин учун $50к ва 3-ўрин учун $30к миқдорида тўғридан-тўғри инвестиция оладилар. Бундан ташқари, ғолиблар халқаро акселераторларда иштирок этиш ҳуқуқини қўлга киритадилар.",
                    source: "ПҚ-357, 7-банд",
                    tags: ["Йиллик", "Валютада"],
                },
                {
                    title: "Стартапларни Қўллаб-қувватлаш Гранти",
                    value: "1 млрд сўмгача",
                    description: "Дастурий маҳсулот яратиш ва экспортга йўналтириш учун ажратилади. Инновацион ривожланиш агентлиги орқали.",
                    extendedInfo: "Грант маблағлари MVP (минимум виабле продуст) яратиш, сервер қувватларини ижарага олиш ва маҳсулотни хорижий бозорларда (Google/Facebook Ads) реклама қилиш учун берилади. Асосий талаб - лойиҳанинг экспорт потенциали мавжудлиги ва амалга ошириш жадвалининг аниқлиги.",
                    source: "ПҚ-357, 8-банд",
                    tags: ["Грант", "Экспорт"],
                },
                {
                    title: "Ёш Тадбиркорлар Жамғармаси",
                    value: "60 млрд сўм",
                    description: "Дастлабки босқичда стартапларни молиялаштириш учун ажратилган умумий маблағ.",
                    extendedInfo: "Жамғарма маблағлари имтиёзли кредитлар ёки улушбай иштирок (equity) шаклида тақдим этилади. Бунда ёш тадбиркорларга бизнес-режа тузишдан бошлаб, бозорга чиқишгача бўлган даврда техник кўмак ҳам кўрсатилади.",
                    source: "ПҚ-357, 8-банд",
                },
                {
                    title: "Чет эл IT хизматлари учун ҚҚС",
                    value: "0% Имтиёз",
                    description: "Норезидентлардан олинадиган IT хизматлар учун ҚҚС бўйича имтиёзлар қўлланилиши.",
                    extendedInfo: "Ўзбекистонлик стартаплар хорижий хизматлардан (масалан, AWS, Azure, Google Cloud ёки халқаро дастурий таъминот лицензиялари) фойдаланганда, аввал тўланадиган 12-15% ҚҚС (VAT) бўйича солиқ озодлиги берилади. Бу таннархни туширишга ва рақобатбардошликни оширишга хизмат қилади.",
                    source: "ПҚ-357, 14-банд",
                    tags: ["Солиқ", "Норезидент"],
                },
            ],
        },
        regulatory: {
            title: "Тартибга солиш ва Ислоҳотлар",
            timeline: [
                {
                    title: "Антенна-мачта иншоотлари",
                    date: "2022 йил август",
                    description: "Мобил алоқа операторлари учун ер ажратиш жараёни соддалаштирилди.",
                    source: "ПҚ-357, 3-банд",
                    tags: ["Архив"],
                },
                {
                    title: "Digital Office тизими",
                    date: "2023 йил 1 январь",
                    description: "Давлат органлари учун ягона ишчи муҳит (ҳужжат алмашинуви, видео-алоқа).",
                    source: "ПҚ-357, 10-банд",
                    tags: ["Архив"],
                },
                {
                    title: "Рақамли Маълумотлар Платформаси",
                    date: "2022 йил 1 октябрь",
                    description: "Давлат маълумотларига тижорий кириш пуллик асосда йўлга қўйилди.",
                    source: "ПҚ-357, 11-банд",
                    tags: ["Архив"],
                },
                {
                    title: "Телекоммуникация қурилиши (Тезкор)",
                    date: "2022 йил 1 октябрь",
                    description: "Лойиҳа-смета ҳужжатлари экспертизага топширилган кундан қурилишни бошлашга рухсат. Экспертиза муддати - 15 ку.",
                    source: "ПҚ-357, 4-банд",
                    tags: ["Архив"],
                },
                {
                    title: "Санитария ва Ёнғин хавфсизлиги",
                    date: "2-ҳафталик муддат",
                    description: "Рухсатномалар My.gov.uz орқали 2 ҳафта ичида расмийлаштирилади.",
                    extendedInfo: "Аввалги тизимда рухсатномалар олиш ойлаб давом этган бўлса, янги тартибга кўра, агар давлат органи 2 ҳафта ичида жавоб бермаса, рухсатнома автоматик тарзда берилган деб ҳисобланади (жимлик - розилик белгиси). Бу бюрократияни кескин камайтиради.",
                    source: "ПҚ-357, 4-банд",
                },
                {
                    title: "Тартибга солиш 'Қумлоғи'",
                    date: "2025 - 2027",
                    description: "Рақамли стартаплар учун махсус ҳуқуқий режим - қонунчилик чекловларисиз тест ўтказиш имконияти.",
                    extendedInfo: "Ушбу режим стартапларга янги рақамли маҳсулотларни (масалан, блокчейн ёки финтех ечимлар) амалдаги норматив ҳужжатларга зид келса ҳам, махсус назорат остида синаб кўриш имконини беради.",
                    source: "ПҚ-357 (янги таҳрир)",
                    tags: ["Sandbox", "Digital"],
                },
            ],
        },
        tax: {
            title: "Солиқ Режими Ўзгаришлари (ПҚ-388)",
            warning: "Критик Ўзгариш",
            deadline: "Муҳим Муддатлар:",
            date: "2026-2027",
            details: "Экспорт талаблари жорий этилади: 2026 йил апрелдан мин. 20%, 2027 йилдан мин. 35%. Тўлов ва Marketplace ўзгаришлари 2026 апрелдан.",
            affectedGroups: [
                "Тўлов ташкилотлари (Payment organizations)",
                "Тўлов тизими операторлари",
                "Маркетплейслар (Электрон тўлов платформалари)",
                "Микромолия ташкилотлари",
                "IT Park Резидентлари (юқоридагилар)",
                "Cyber-Inno T-Park Резидентлари",
                "Inno Texnopark Резидентлари",
            ],
            checklistTitle: "Сизнинг лойиҳангиз шулардан бирими?",
            safeMessage: "Хавфсиз: Сизнинг фаолиятингизга бу чеклов таъсир қилмайди.",
            dangerMessage: "ДИҚҚАТ: 2026 йил апрелдан имтиёзлар бекор бўлади!",
            checklist: [
                { id: "payment", label: "Тўлов ташкилоти" },
                { id: "operator", label: "Тўлов тизими оператори" },
                { id: "marketplace", label: "Маркетплейс" },
                { id: "mfo", label: "Микромолия ташкилоти" },
            ],
        },
        bpo: {
            title: "Масофавий хизматлар (BPO) имкониятлари",
            items: [
                {
                    title: "BPO Марказлари",
                    description: "Республиканинг барча ҳудудларида масофавий хизмат кўрсатиш марказлари ташкил этилади. Замонавий бино ва узлуксиз электр билан таъминланади.",
                    extendedInfo: "BPO (Business Process Outsourcing) марказлари ёшлар учун масофадан туриб хорижий компанияларга хизмат кўрсатиш имкониятини яратади. Бу ерда юқори тезликдаги интернет, узлуксиз электр таъминоти ва замонавий офис инфратузилмаси давлат томонидан бепул ёки имтиёзли шартларда тақдим этилади.",
                    source: "ПҚ-357, 5-банд",
                },
                {
                    title: "Компьютер ускуналари",
                    description: "Ёшлар ишлари агентлиги марказларни замонавий компьютерлар билан таъминлайди.",
                    extendedInfo: "Марказларда ишлашни истаган ёшлар учун замонавий ноутбук ва иш станциялари ажратилади. Бундан ташқари, ўзининг шахсий компьютерига эга бўлишни истаган ёшлар учун фоизсиз микроқарзлар ёки субсидиялар бериш тизими ҳам мавжуд.",
                    source: "ПҚ-357, 5-банд",
                },
                {
                    title: "Хорижий буюртмалар",
                    description: "АКТ вазирлиги марказларга хорижий бозорлардан мунтазам буюртмалар жалб этади.",
                    extendedInfo: "Рақамли технологиялар вазирлиги халқаро компаниялар (масалан, Amazon, EPAM, Exadel) билан келишган ҳолда, маҳаллий BPO марказларига доимий иш ҳажмини йўналтиради. Бу ёшларнинг қидириб юрмасдан, тайёр экспорт буюртмалари билан ишлашини таъминлайди.",
                    source: "ПҚ-357, 8-банд",
                },
                {
                    title: "Битирувчилар учун Грантлар",
                    value: "$100,000,000",
                    description: "Олий таълим битирувчиларининг стартап лойиҳалари учун ажратилган махсус жамғарма.",
                    extendedInfo: "Ушбу жамғарма университет битирувчиларининг диплом ишларини реал бизнес лойиҳага айлантиришга ёрдам беради. Грантлар асосан илмий тадқиқотларни тижоратлаштириш ва илк сотувларни йўлга қўйиш учун сарфланади.",
                    source: "ПҚ-61 (2025 йил 14-февраль)",
                    tags: ["Битирувчилар", "Грант"],
                },
                {
                    title: "Энг яхши ижодий ғоя",
                    value: "300 млн сўм",
                    description: "Талабалар ва ёшлар ўртасида ўтказиладиган инновацион танлов гранти.",
                    extendedInfo: "Танлов доирасида креатив индустрия, дизайн ва медиа соҳасидаги янги ғоялар саралаб олинади. Ғолибларга ўз ғоясини прототип даражасига олиб чиқиш учун моддий кўмак берилади.",
                    source: "ПҚ-60 (2025 йил 14-февраль)",
                },
            ],
        },
        future: {
            title: "Стратегия Ўзбекистон-2030 Мақсадлари",
            items: [
                {
                    title: "IT-Unicorn Quest",
                    value: "$1.0B Value",
                    description: "2030 йилга қадар Ўзбекистонда капиталлашуви $1 миллиарддан ошган биринчи стартапни яратиш.",
                    source: "ПФ-158 (Сент 2023)",
                    tags: ["Unicorn", "Target"],
                },
                {
                    title: "Рақамли Ташқи Савдо",
                    value: "$5,000,000,000",
                    description: "IT-хизматлар экспорти ҳажмини 2030 йилга қадар $5 млрдга етказиш.",
                    source: "ПФ-158, 2-банд",
                    tags: ["Export", "Economy"],
                },
                {
                    title: "AI Инқилоби",
                    value: "5M Лидер",
                    description: "2030 йилгача 'Five Million AI Leaders' лойиҳаси доирасида аҳолини сунъий интеллект бўйича ўқитиш.",
                    source: "Рақамли Ўзбекистон-2030",
                    tags: ["AI", "Education"],
                },
                {
                    title: "Халқаро IT Марказ",
                    value: "1000 Comp",
                    description: "Хорижий технологик компаниялар ваколатхоналари сонини 1000 тага етказиш.",
                    source: "IT-Park Режаси",
                },
            ],
        },
        venture: {
            title: "Венчур ва Инвестициялар",
            items: [
                {
                    title: "Хорижий VC Бонус",
                    value: "$100,000",
                    description: "Агар стартап хорижий венчур фондидан $50M ва ундан ортиқ инвестиция жалб қилса, давлатдан рағбатлантирувчи грант.",
                    source: "ПҚ-357 (2024)",
                    tags: ["Investment", "Reward"],
                },
                {
                    title: "UzVC Миллий Жамғармаси",
                    value: "100 млрд сўм",
                    description: "Портфель лойиҳаларни молиялаштириш учун қўшимча маблағ ажратиш.",
                    source: "ПҚ-357 (Октябрь 2024)",
                },
                {
                    title: "Банк Венчур Фондлари",
                    description: "Давлат улушига эга банкларга венчур фондлари ва стартап-студиялар ташкил этиш ҳуқуқи берилди.",
                    source: "Президент Фармони (2024)",
                },
                {
                    title: "Digital Wealthy",
                    value: "0% PIT",
                    description: "Хорижий инвесторлар учун махсус режим: $50k тўлов эвазига хорижий даромадлардан солиқ озодлиги (мин 30 кун stay).",
                    source: "Янги Низом (2026 режаси)",
                    tags: ["Foreigners", "Expats"],
                },
            ],
        },
    },
    uz: {
        nav: {
            title: "Startap Portal",
            lang: "RU",
            sections: [
                { id: "overview", label: "Umumiy" },
                { id: "funding", label: "Grantlar va Pul" },
                { id: "regulatory", label: "Qoidalar va Yo'l xaritasi" },
                { id: "tax", label: "Soliq va Imtiyozlar" },
                { id: "venture", label: "Investitsiya (VC)" },
                { id: "bpo", label: "Eksport (BPO)" },
                { id: "future", label: "Strategiya 2030" },
            ],
        },
        overview: {
            title: "Ekotizim Ko'rsatkichlari (2026)",
            stats: [
                {
                    title: "IT Eksport Maqsadi",
                    value: "$1.0B",
                    description: "2026 yil yakunigacha bo'lgan asosiy ko'rsatkich. O'zbekistonni mintaqaviy IT habga aylantirish.",
                    extendedInfo: "Davlat strategiyasiga ko'ra, 2026 yil oxirigacha IT-xizmatlar eksporti $1 milliarddan oshishi kutilmoqda. Bu asosan BPO xizmatlari va dasturiy mahsulotlar eksporti hisobiga amalga oshiriladi.",
                    source: "Raqamli O'zbekiston-2026"
                },
                {
                    title: "IT Mutaxassislar",
                    value: "100,000+",
                    description: "Yuqori malakali va xalqaro sertifikatga ega bo'lgan kadrlar soni.",
                    extendedInfo: "Ayni paytda 'Bir million dasturchi' loyihasi va IT-akademiyalar tizimi orqali yillik 25-30 ming yangi kadrlar bozorga chiqishi ta'minlanmoqda.",
                    source: "IT-Park Hisoboti 2025"
                },
                {
                    title: "Startaplar Soni",
                    value: "1,500+",
                    description: "Ro'yxatdan o'tgan va faol startap loyihalar.",
                    extendedInfo: "2026 yilga kelib startap ekotizimida sifat o'zgarishi kutilmoqda. Asosan FinTech, EdTech va GovTech yo'nalishlari yetakchilik qilmoqda.",
                    source: "Innovatsion Rivojlanish Agentligi"
                },
            ],
        },
        funding: {
            title: "Mablag' ajratish va Grantlar",
            items: [
                {
                    title: "Prezident Tech Award",
                    value: "$1,000,000",
                    description: "Eng yaxshi startap loyihalar uchun yillik tanlov. 5 ta asosiy yo'nalish bo'yicha mukofotlar.",
                    extendedInfo: "Mukofot jamg'armasi $1 million qilib belgilangan bo'lib, har bir yo'nalish bo'yicha g'oliblar quyidagicha taqdirlanadi: 1-o'rin $100k, 2-o'rin $50k, 3-o'rin $30k. Asosiy yo'nalishlar: Sun'iy intellekt, Ijtimoiy texnologiyalar, Kibersport, Tadbirkorlik va moliyaviy texnologiyalar.",
                    source: "PQ-357, 7-band",
                    tags: ["Yillik", "Valyutada"],
                },
                {
                    title: "Startaplarni Qo'llab-quvvatlash Granti",
                    value: "1 mlrd so'mgacha",
                    description: "Dasturiy mahsulot yaratish va eksportga yo'naltirish uchun ajratiladi. Innovatsion rivojlanish agentligi orqali.",
                    extendedInfo: "Grant mablag'lari MVP (minimum viable product) yaratish va uni xalqaro bozorga olib chiqish xarajatlarini qoplash uchun beriladi. Talabgorlar kamida 6 oylik faoliyat tarixiga va aniq eksport rejasiga ega bo'lishlari shart.",
                    source: "PQ-357, 8-band",
                    tags: ["Grant", "Eksport"],
                },
                {
                    title: "Yosh Tadbirkorlar Jamg'armasi",
                    value: "60 mlrd so'm",
                    description: "Dastlabki bosqichda startaplarni moliyalashtirish uchun ajratilgan umumiy mablag'.",
                    extendedInfo: "Jamg'arma mablag'lari imtiyozli kreditlar yoki ulushbay ishtirok (equity) shaklida taqdim etiladi. Bu yosh tadbirkorlarga biznes-reja tuzishdan boshlab, bozorgacha bo'lgan davrda texnik va moliyaviy ko'mak berishni ko'zda tutadi.",
                    source: "PQ-357, 8-band",
                },
                {
                    title: "Chet el IT xizmatlari uchun QQS",
                    value: "0% Imtioz",
                    description: "Norezidentlardan olinadigan IT xizmatlar uchun QQS bo'yicha imtiyozlar qo'llanilishi.",
                    extendedInfo: "O'zbekistonlik startaplar xalqaro bulutli xizmatlardan (Google Cloud, AWS, Azure kabi) foydalanganda, ilgari to'lanishi kerak bo'lgan 12-15%lik VAT (QQS)dan ozod etiladi. Bu startaplar uchun yillik xarajatlarni sezilarli darajada kamaytiradi.",
                    source: "PQ-357, 14-band",
                    tags: ["Soliq", "Norezident"],
                },
            ],
        },
        regulatory: {
            title: "Tartibga solish va Islohotlar",
            timeline: [
                {
                    title: "Antenno-machta inshootlari",
                    date: "2022 yil avgust",
                    description: "Mobil aloqa operatorlari uchun yer ajratish jarayoni soddalashtirildi.",
                    source: "PQ-357, 3-band",
                    tags: ["Arxiv"],
                },
                {
                    title: "Digital Office tizimi",
                    date: "2023 yil 1 yanvar",
                    description: "Davlat organlari uchun yagona ishchi muhit (hujjat almashinuvi, video-aloqa).",
                    source: "PQ-357, 10-band",
                    tags: ["Arxiv"],
                },
                {
                    title: "Raqamli Ma'lumotlar Platformasi",
                    date: "2022 yil 1 oktyabr",
                    description: "Davlat ma'lumotlariga tijoriy kirish pullik asosda yo'lga qo'yildi.",
                    source: "PQ-357, 11-band",
                    tags: ["Arxiv"],
                },
                {
                    title: "Telekommunikatsiya qurilishi",
                    date: "2022 yil 1 oktyabr",
                    description: "Loyiha-smeta hujjatlari экспертизаси соддалаштирилган.",
                    source: "PQ-357, 4-band",
                    tags: ["Arxiv"],
                },
                {
                    title: "Sanitariya va Yong'in xavfsizligi",
                    date: "2-haftalik muddat",
                    description: "Ruxsatnomalar My.gov.uz orqali 2 hafta ichida rasmiylashtiriladi.",
                    source: "PQ-357, 4-band",
                },
                {
                    title: "Tartibga solish 'Qumlog'i'",
                    date: "2025 - 2027",
                    description: "Raqamli startaplar uchun maxsus huquqiy rejim - qonunchilik cheklovlarisiz test o'tkazish imkoniyati.",
                    extendedInfo: "Ushbu rejim doirasida startaplar amaldagi qonunchilikda ko'zda tutilmagan yoki taqiqlangan yangi raqamli xizmatlarni (masalan, kripto-aktivlar yoki yangi Fintech yechimlar) cheklangan hududda va vaqt davomida test qilishlari mumkin.",
                    source: "PQ-357 (yangi tahrir)",
                    tags: ["Sandbox", "Digital"],
                },
            ],
        },
        tax: {
            title: "Soliq Rejimi O'zgarishlari (PQ-388)",
            warning: "Kritik O'zgarish",
            deadline: "Muhim Muddatlar:",
            date: "2026-2027",
            details: "Eksport talablari joriy etiladi: 2026 yil apreldan min. 20%, 2027 yildan min. 35%. To'lov va Marketplace o'zgarishlari 2026 apreldan.",
            affectedGroups: [
                "To'lov tashkilotlari (Payment organizations)",
                "To'lov tizimi operatorlari",
                "Marketpleyslar (Elektron to'lov platformalari)",
                "Mikromoliya tashkilotlari",
                "IT Park Rezidentlari (yuqoridagilar)",
                "Cyber-Inno T-Park Rezidentlari",
                "Inno Texnopark Rezidentlari",
            ],
            checklistTitle: "Sizning loyihangiz shulardan birimi?",
            safeMessage: "Xavfsiz: Sizning faoliyatingizga bu cheklov ta'sir qilmaydi.",
            dangerMessage: "DIQQAT: 2026 yil apreldan imtiyozlar bekor bo'ladi!",
            checklist: [
                { id: "payment", label: "To'lov tashkiloti" },
                { id: "operator", label: "To'lov tizimi operatori" },
                { id: "marketplace", label: "Marketpleys" },
                { id: "mfo", label: "Mikromoliya tashkiloti" },
            ],
        },
        bpo: {
            title: "Masofaviy xizmatlar (BPO) imkoniyatlari",
            items: [
                {
                    title: "BPO Markazlari",
                    description: "Respublikaning barcha hududlarida masofaviy xizmat ko'rsatish markazlari tashkil etiladi. Zamonaviy bino va uzluksiz elektr bilan ta'minlanadi.",
                    source: "PQ-357, 5-band",
                },
                {
                    title: "Kompyuter uskunalari",
                    description: "Yoshlar ishlari agentligi markazlarni zamonaviy kompyuterlar bilan ta'minlaydi.",
                    source: "PQ-357, 5-band",
                },
                {
                    title: "Xorijiy buyurtmalar",
                    description: "AKT vazirligi markazlarga xorijiy bozorlardan muntazam buyurtmalar jalb etadi.",
                    source: "PQ-357, 8-band",
                },
                {
                    title: "Bitiruvchilar uchun Grantlar",
                    value: "$100,000,000",
                    description: "Oliy ta'lim bitiruvchilarining startap loyihalari uchun ajratilgan maxsus jamg'arma.",
                    extendedInfo: "Ushbu jamg'arma universitet bitiruvchilarining diplom ishlarini real biznes loyihaga aylantirishga yordam beradi. Grantlar asosan ilmiy tadqiqotlarni tijoratlashtirish va ilk sotuvlarni yo'lga qo'yish uchun sarflanadi.",
                    source: "PQ-61 (2025 yil 14-fevral)",
                    tags: ["Bitiruvchilar", "Grant"],
                },
                {
                    title: "Eng yaxshi ijodiy g'oya",
                    value: "300 mln so'm",
                    description: "Talabalar va yoshlar o'rtasida o'tkaziladigan innovatsion tanlov granti.",
                    extendedInfo: "Tanlov doirasida kreativ industriya, dizayn va media sohasidagi yangi g'oyalar saralab olinadi. G'oliblarga o'z g'oyasini prototip darajasiga olib chiqish uchun moddiy ko'mak beriladi.",
                    source: "PQ-60 (2025 yil 14-fevral)",
                },
            ],
        },
        future: {
            title: "Strategiya O'zbekiston-2030 Maqsadlari",
            items: [
                {
                    title: "IT-Unicorn Quest",
                    value: "$1.0B Value",
                    description: "2030 yilga qadar O'zbekistonda kapitallashuvi $1 milliarddan oshgan birinchi startapni yaratish.",
                    source: "PF-158 (Sentr 2023)",
                    tags: ["Unicorn", "Target"],
                },
                {
                    title: "Raqamli Tashqi Savdo",
                    value: "$5,000,000,000",
                    description: "IT-xizmatlar eksporti hajmini 2030 yilga qadar $5 mlrdga yetkazish.",
                    source: "PF-158, 2-band",
                    tags: ["Export", "Economy"],
                },
                {
                    title: "AI Inqilobi",
                    value: "5M Lider",
                    description: "2030 yilgacha 'Five Million AI Leaders' loyihasi doirasida aholini sun'iy intellekt bo'yicha o'qitish.",
                    source: "Raqamli O'zbekiston-2030",
                    tags: ["AI", "Education"],
                },
                {
                    title: "Xalqaro IT Markaz",
                    value: "1000 Comp",
                    description: "Xorijiy texnologik kompaniyalar vakolatxonalari sonini 1000 taga yetkazish.",
                    extendedInfo: "O'zbekistonni mintaqaviy 'Tech Hub'ga aylantirish uchun xalqaro korporatsiyalarga (Big Tech) soliq imtiyozlari va infratuzilma (IT Village, IT Park) taqdim etiladi. Maqsad - xalqaro tajribani mahalliylashtirish va yuqori haq to'lanadigan ish o'rinlarini yaratish.",
                    source: "IT-Park Rejasi",
                },
            ],
        },
        venture: {
            title: "Venchur va Investitsiyalar",
            items: [
                {
                    title: "Xorijiy VC Bonus",
                    value: "$100,000",
                    description: "Agar startap xorijiy venchur fondidan $50M va undan ortiq investitsiya jalb qilsa, davlatdan rag'batlantiruvchi grant.",
                    extendedInfo: "Bu bonus startaplarni xalqaro darajaga chiqishini rag'batlantirish uchun joriy etilgan. Davlat $100,000gacha bo'lgan mablag'ni startapning xalqaro marketing va patentlash xarajatlari uchun qaytarib bermaydigan grant sifatida taqdim etadi.",
                    source: "PQ-357 (2024)",
                    tags: ["Investment", "Reward"],
                },
                {
                    title: "UzVC Milliy Jamg'armasi",
                    value: "100 mlrd so'm",
                    description: "Portfel loyihalarni moliyalashtirish uchun qo'shimcha mablag' ajratish.",
                    extendedInfo: "UzVC milliy venchur jamg'armasi mahalliy startaplarga 'co-investment' (birgalikda investitsiya qilish) modeli asosida sarmoya kiritadi. Bu orqali xususiy investorlar uchun risklar kamaytiriladi.",
                    source: "PQ-357 (Oktyabr 2024)",
                },
                {
                    title: "Bank Venchur Fondlari",
                    description: "Davlat ulushiga ega banklarga venchur fondlari va startap-studiyalar tashkil etish huquqi berildi.",
                    extendedInfo: "Endilikda banklar nafaqat kredit berish, balki startaplar ulushiga (equity) ega bo'lish orqali ularni rivojlantirishlari mumkin. Bu banklar qoshida 'Sandbox' laboratoriyalarini yaratishga yo'l ochadi.",
                    source: "Prezident Farmoni (2024)",
                },
                {
                    title: "Digital Wealthy",
                    value: "0% PIT",
                    description: "Xorijiy investorlar uchun maxsus rejim: $50k to'lov evaziga xorijiy daromadlardan soliq ozodligi (min 30 kun stay).",
                    extendedInfo: "Ushbu 'Raqamli badavlat shaxs' dasturi IT-investorlarni O'zbekistonga jalb qilishga qaratilgan. Investor bir marotaba $50k to'lov qilsa, uning O'zbekiston tashqarisida oladigan daromadlari jismoniy shaxslar daromad solig'idan (PIT) to'liq ozod qilinadi (agar u yiliga 30 kundan ortiq mamlakatda tursa).",
                    source: "Yangi Nizom (2026 rejasi)",
                    tags: ["Foreigners", "Expats"],
                },
            ],
        },
    },
    ru: {
        nav: {
            title: "Портал Стартапов",
            lang: "UZ",
            sections: [
                { id: "overview", label: "Обзор" },
                { id: "funding", label: "Гранты и Финансы" },
                { id: "regulatory", label: "Регуляторика" },
                { id: "tax", label: "Налоги и Льготы" },
                { id: "venture", label: "Инвестиции (VC)" },
                { id: "bpo", label: "Экспорт (BPO)" },
                { id: "future", label: "Стратегия 2030" },
            ],
        },
        overview: {
            title: "Показатели Экосистемы (2026)",
            stats: [
                {
                    title: "Цель IT-Экспорта",
                    value: "$1.0B",
                    description: "Основной показатель к концу 2026 года. Превращение Узбекистана в региональный IT-хаб.",
                    extendedInfo: "Согласно государственной стратегии, к концу 2026 года объем экспорта IT-услуг ожидается превысить $1 миллиард. Это будет достигнуто в основном за счет экспорта услуг BPO и программных продуктов.",
                    source: "Цифровой Узбекистан-2026"
                },
                {
                    title: "IT-Специалисты",
                    value: "100,000+",
                    description: "Количество высококвалифицированных кадров с международными сертификатами.",
                    extendedInfo: "В настоящее время через проект 'Один миллион программистов' и систему IT-академий ежегодно обеспечивается выход на рынок 25-30 тысяч новых кадров.",
                    source: "Отчет IT-Park 2025"
                },
                {
                    title: "Количество Стартапов",
                    value: "1,500+",
                    description: "Зарегистрированные и активные стартап-проекты.",
                    extendedInfo: "К 2026 году ожидается качественное изменение в стартап-экосистеме. Лидирующие направления: FinTech, EdTech и GovTech.",
                    source: "Агентство Инновационного Развития"
                },
            ],
        },
        funding: {
            title: "Финансирование и Гранты",
            items: [
                {
                    title: "President Tech Award",
                    value: "$1,000,000",
                    description: "Ежегодный конкурс лучших стартапов. Призы по 5 основным направлениям.",
                    extendedInfo: "Призовой фонд в $1 млн распределяется по 5 направлениям: AI, Social Tech, Cyber Sport, FinTech и EdTech. Победители получают $100k (1-е место), $50k (2-е место) и $30k (3-е место). Конкурс направлен на поддержку инноваций мирового уровня.",
                    source: "ПП-357, пункт 7",
                    tags: ["Ежегодно", "В валюте"],
                },
                {
                    title: "Грант на поддержку стартапов",
                    value: "до 1 млрд сум",
                    description: "Выделяется на создание прототипа и экспортного ПО через Агентство инновационного развития.",
                    extendedInfo: "Средства предоставляются компаниям-резидентам для покрытия расходов на R&D, закупку облачных мощностей и маркетинг на внешних рынках. Обязательным условием является наличие экспортного потенциала.",
                    source: "ПП-357, пункт 8",
                    tags: ["Грант", "Экспорт"],
                },
                {
                    title: "Фонд молодых предпринимателей",
                    value: "60 млрд сум",
                    description: "Общий объем средств, выделенных на начальном этапе для финансирования стартапов.",
                    extendedInfo: "Фонд предоставляет льготное финансирование для молодежных инновационных команд. Процесс включает в себя не только выдачу средств, но и менторскую поддержку от ведущих IT-экспертов Узбекистана для подготовки продукта к этапу посевных инвестиций.",
                    source: "ПП-357, пункт 8",
                },
                {
                    title: "НДС на иностранные IT-услуги",
                    value: "Льгота 0%",
                    description: "Распространение льгот по НДС при приобретении IT-услуг у нерезидентов.",
                    extendedInfo: "Ранее стартапы платили 12-15% НДС при покупке облачных сервисов (Google, AWS) или подписок. Теперь эта нагрузка снята за счет механизма освобождения от налога на услуги нерезидентов, что позволяет экономить до 15% бюджета на инфраструктуру.",
                    source: "ПП-357, пункт 14",
                    tags: ["Налоги", "Нерезиденты"],
                },
            ],
        },
        regulatory: {
            title: "Регуляторика и Реформы",
            timeline: [
                {
                    title: "Антенно-мачтовые сооружения",
                    date: "Август 2022 года",
                    description: "Упрощен процесс выделения земли для операторов мобильной связи.",
                    source: "ПП-357, пункт 3",
                    tags: ["Архив"],
                },
                {
                    title: "Система Digital Office",
                    date: "1 января 2023 года",
                    description: "Единая рабочая среда для госорганов (документооборот, видео-связь).",
                    source: "ПП-357, пункт 10",
                    tags: ["Архив"],
                },
                {
                    title: "Платформа цифровых данных",
                    date: "1 октября 2022 года",
                    description: "Запуск платного коммерческого доступа к государственным данным.",
                    source: "ПП-357, пункт 11",
                    tags: ["Архив"],
                },
                {
                    title: "Телеком-строительство",
                    date: "1 октября 2022 года",
                    description: "Разрешение на строительство со дня подачи ПСД на экспертизу.",
                    source: "ПП-357, пункт 4",
                    tags: ["Архив"],
                },
                {
                    title: "Санитарные и Пожарные заключения",
                    date: "Срок 2 недели",
                    description: "Оформление заключений через My.gov.uz в срок не более двух недель.",
                    source: "ПП-357, пункт 4",
                },
                {
                    title: "Регуляторная 'Песочница'",
                    date: "2025 - 2027",
                    description: "Особый правовой режим для цифровых стартапов — возможность тестирования без законодательных ограничений.",
                    extendedInfo: "Песочница позволяет обходить некоторые нормы действующего законодательства для тестирования инновационных продуктов в сфере финтеха, крипто-активов и ИИ под наблюдением регулятора.",
                    source: "ПП-357 (новая ред.)",
                    tags: ["Sandbox", "Digital"],
                },
            ],
        },
        tax: {
            title: "Изменения Налогового Режима (ПП-388)",
            warning: "Критическое Изменение",
            deadline: "Важные Сроки:",
            date: "2026-2027",
            details: "Вводятся требования по экспорту: с апр. 2026 мин. 20%, с 2027 мин. 35%. Платежные системы и Маркетплейсы лишаются льгот с апр. 2026.",
            checklistTitle: "Ваш проект относится к ним?",
            safeMessage: "Безопасно: Ваша деятельность не подпадает под эти ограничения.",
            dangerMessage: "ВНИМАНИЕ: С апреля 2026 льготы будут отменены!",
            affectedGroups: [
                "Платежные организации",
                "Операторы платежных систем",
                "Маркетплейсы (Электронные платежные системы)",
                "Микрофинансовые организации",
                "Резиденты IT Park (вышеуказанные)",
                "Резиденты Cyber-Inno T-Park",
                "Резиденты Inno Texnopark",
            ],
            checklist: [
                { id: "payment", label: "Платежная организация" },
                { id: "operator", label: "Оператор платежной системы" },
                { id: "marketplace", label: "Маркетплейс" },
                { id: "mfo", label: "Микрофинансовая организация" },
            ],
        },
        bpo: {
            title: "Возможности экспорта (BPO)",
            items: [
                {
                    title: "Центры BPO",
                    description: "Создание центров экспорта дистанционных услуг во всех регионах. Обеспечение зданиями и бесперебойным питанием.",
                    source: "ПП-357, пункт 5",
                },
                {
                    title: "Компьютерное оборудование",
                    description: "Агентство по делам молодежи обеспечит центры современными компьютерами.",
                    source: "ПП-357, пункт 5",
                },
                {
                    title: "Зарубежные заказы",
                    description: "Мининфоком привлечет регулярные заказы с зарубежных рынков для центров.",
                    source: "ПП-357, пункт 8",
                },
                {
                    title: "Гранты для Выпускников",
                    value: "$100,000,000",
                    description: "Специальный фонд для поддержки стартап-стартапов выпускников высших учебных заведений.",
                    extendedInfo: "Этот фонд помогает превратить дипломные работы выпускников вузов в реальные бизнес-проекты. Гранты в первую очередь направлены на коммерциализацию научных исследований и запуск первых продаж.",
                    source: "ПП-61 (14 февраля 2025)",
                    tags: ["Выпускники", "Грант"],
                },
                {
                    title: "Лучшая креативная идея",
                    value: "300 млн сум",
                    description: "Инновационный грантовый конкурс среди студентов и молодежи.",
                    extendedInfo: "В рамках конкурса отбираются новые идеи в сфере креативной индустрии, дизайна и медиа. Победителям предоставляется материальная поддержка для доведения своей идеи до уровня прототипа.",
                    source: "ПП-60 (14 февраля 2025)",
                },
            ],
        },
        future: {
            title: "Цели Стратегии Узбекистан-2030",
            items: [
                {
                    title: "IT-Unicorn Quest",
                    value: "$1.0B Value",
                    description: "Создание первого узбекского стартапа с капитализацией более $1 млрд к 2030 году.",
                    source: "УП-158 (Сент 2023)",
                    tags: ["Unicorn", "Цель"],
                },
                {
                    title: "Цифровая Внешняя Торговля",
                    value: "$5,000,000,000",
                    description: "Доведение объема экспорта IT-услуг до $5 млрд к 2030 году.",
                    source: "УП-158, пункт 2",
                    tags: ["Экспорт", "Экономика"],
                },
                {
                    title: "AI-Революция",
                    value: "5M Лидеров",
                    description: "Обучение населения искусственному интеллекту в рамках проекта 'Five Million AI Leaders'.",
                    source: "Цифровой Узбекистан-2030",
                    tags: ["AI", "Образование"],
                },
                {
                    title: "Международный IT-Центр",
                    value: "1000 Комп.",
                    description: "Увеличение количества представительств иностранных технологических компаний до 1000.",
                    source: "План IT-Park",
                },
            ],
        },
        venture: {
            title: "Венчур и Инвестиции",
            items: [
                {
                    title: "Бонус за Иностранный VC",
                    value: "$100,000",
                    description: "Стимулирующий грант от государства при привлечении инвестиций от иностранных фондов на сумму >$50M.",
                    extendedInfo: "Государство выплачивает безвозвратный грант стартапу, который смог привлечь крупного мирового венчурного инвестора. Эти средства можно использовать на приобретение оборудования, патентование за рубежом и глобальный маркетинг.",
                    source: "ПП-357 (2024)",
                    tags: ["Investment", "Reward"],
                },
                {
                    title: "Нацфонд UzVC",
                    value: "100 млрд сум",
                    description: "Выделение дополнительных средств для прямого инвестирования в стартап-экосистему.",
                    extendedInfo: "Фонд UzVC работает по модели со-инвестирования, предлагая партнерство частным венчурным фондам. Это снижает финансовые риски для локальных инвесторов и ускоряет закрытие раундов для стартапов.",
                    source: "ПП-357 (Октябрь 2024)",
                },
                {
                    title: "Банковские Венчурные Фонды",
                    description: "Банкам с госдолей разрешено создавать собственные венчурные фонды и стартап-студии.",
                    extendedInfo: "Банки теперь могут входить в капитал стартапов, создавая собственные экосистемы. Это позволяет развивать Fintech-решения напрямую внутри банковских структур и под регуляторным надзором.",
                    source: "Указ Президента (2024)",
                },
                {
                    title: "Digital Wealthy",
                    value: "0% PIT",
                    description: "Спецрежим для инвесторов: освобождение от налога на зарубежные доходы при разовом взносе $50k (мин. 30 дней пребывания).",
                    extendedInfo: "Программа 'Цифровой богатый гражданин' нацелена на привлечение IT-капитала. При единоразовом взносе в $50,000 инвестор полностью освобождается от подоходного налога (PIT) на любые свои доходы, полученные за пределами Узбекистана, при условии пребывания в стране не менее 30 дней в году.",
                    source: "Новое положение (план 2026)",
                    tags: ["Foreigners", "Expats"],
                },
            ],
        },
    },
};
