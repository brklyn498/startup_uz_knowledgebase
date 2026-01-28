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
        stats: { label: string; value: string; detail: string }[];
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
            title: "Экотизим Кўрсаткичлари",
            stats: [
                { label: "IT Экспорт Мақсади", value: "$100M+", detail: "2023 йил якунигача" },
                { label: "B2G Бозор Имконияти", value: "214+", detail: "Янги давлат АКТ тизимлари" },
                { label: "Венчур Бозори", value: "$17.5M", detail: "2024 йилда 3х ўсиш" },
                { label: "Стартаплар Сони", value: "750+", detail: "Республика бўйлаб" },
                { label: "E-Gov Фойдаланувчилари", value: "4.0M", detail: "Хусусий сектор иштирокида" },
            ],
        },
        funding: {
            title: "Маблағ ажратиш ва Грантлар",
            items: [
                {
                    title: "Президент Tech Award",
                    value: "$1,000,000",
                    description: "Энг яхши стартап лойиҳалар учун йиллик танлов. 5 та асосий йўналиш бўйича мукофотлар.",
                    source: "ПҚ-357, 7-банд",
                    tags: ["Йиллик", "Валютада"],
                },
                {
                    title: "Стартапларни Қўллаб-қувватлаш Гранти",
                    value: "1 млрд сўмгача",
                    description: "Дастурий маҳсулот яратиш ва экспортга йўналтириш учун ажратилади. Инновацион ривожланиш агентлиги орқали.",
                    source: "ПҚ-357, 8-банд",
                    tags: ["Грант", "Экспорт"],
                },
                {
                    title: "Ёш Тадбиркорлар Жамғармаси",
                    value: "60 млрд сўм",
                    description: "Дастлабки босқичда стартапларни молиялаштириш учун ажратилган умумий маблағ.",
                    source: "ПҚ-357, 8-банд",
                },
                {
                    title: "Чет эл IT хизматлари учун ҚҚС",
                    value: "0% Имтиёз",
                    description: "Норезидентлардан олинадиган IT хизматлар учун ҚҚС бўйича имтиёзлар қўлланилиши.",
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
                    source: "ПҚ-357, 5-банд",
                },
                {
                    title: "Компьютер ускуналари",
                    description: "Ёшлар ишлари агентлиги марказларни замонавий компьютерлар билан таъминлайди.",
                    source: "ПҚ-357, 5-банд",
                },
                {
                    title: "Хорижий буюртмалар",
                    description: "АКТ вазирлиги марказларга хорижий бозорлардан мунтазам буюртмалар жалб этади.",
                    source: "ПҚ-357, 8-банд",
                },
                {
                    title: "Битирувчилар учун Грантлар",
                    value: "$100,000,000",
                    description: "Олий таълим битирувчиларининг стартап лойиҳалари учун ажратилган махсус жамғарма.",
                    source: "ПҚ-61 (2025 йил 14-февраль)",
                    tags: ["Битирувчилар", "Грант"],
                },
                {
                    title: "Энг яхши ижодий ғоя",
                    value: "300 млн сўм",
                    description: "Талабалар ва ёшлар ўртасида ўтказиладиган инновацион танлов гранти.",
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
            title: "Ekotizim Ko'rsatkichlari",
            stats: [
                { label: "IT Eksport Maqsadi 2030", value: "$5.0B", detail: "Global outsourcing markazi" },
                { label: "IT Ish o'rinlari", value: "300K", detail: "Yoshlar bandligi uchun" },
                { label: "Startaplar Soni", value: "5000+", detail: "Ekotizimning 7x o'sishi" },
                { label: "E-Gov Reytingi (BMT)", value: "Top 30", detail: "Raqamli Hukumat maqsadi" },
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
                    source: "PQ-357, 8-band",
                },
                {
                    title: "Chet el IT xizmatlari uchun QQS",
                    value: "0% Imtiyoz",
                    description: "Norezidentlardan olinadigan IT xizmatlar uchun QQS bo'yicha imtiyozlar qo'llanilishi.",
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
                    source: "PQ-61 (2025 yil 14-fevral)",
                    tags: ["Bitiruvchilar", "Grant"],
                },
                {
                    title: "Eng yaxshi ijodiy g'oya",
                    value: "300 mln so'm",
                    description: "Talabalar va yoshlar o'rtasida o'tkaziladigan innovatsion tanlov granti.",
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
                    source: "PQ-357 (2024)",
                    tags: ["Investment", "Reward"],
                },
                {
                    title: "UzVC Milliy Jamg'armasi",
                    value: "100 mlrd so'm",
                    description: "Portfel loyihalarni moliyalashtirish uchun qo'shimcha mablag' ajratish.",
                    source: "PQ-357 (Oktyabr 2024)",
                },
                {
                    title: "Bank Venchur Fondlari",
                    description: "Davlat ulushiga ega banklarga venchur fondlari va startap-studiyalar tashkil etish huquqi berildi.",
                    source: "Prezident Farmoni (2024)",
                },
                {
                    title: "Digital Wealthy",
                    value: "0% PIT",
                    description: "Xorijiy investorlar uchun maxsus rejim: $50k to'lov evaziga xorijiy daromadlardan soliq ozodligi (min 30 kun stay).",
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
            title: "Показатели Экосистемы",
            stats: [
                { label: "Цель IT-Экспорта 2030", value: "$5.0B", detail: "Глобальный хаб аутсорсинга" },
                { label: "IT Рабочие места", value: "300K", detail: "Занятость молодежи" },
                { label: "Кол-во Стартапов", value: "5000+", detail: "Рост экосистемы в 7 раз" },
                { label: "Рейтинг E-Gov (ООН)", value: "Топ-30", detail: "Цель Цифрового Правительства" },
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
                    source: "ПП-357, пункт 8",
                },
                {
                    title: "НДС на иностранные IT-услуги",
                    value: "Льгота 0%",
                    description: "Распространение льгот по НДС при приобретении IT-услуг у нерезидентов.",
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
                    source: "ПП-61 (14 февраля 2025)",
                    tags: ["Выпускники", "Грант"],
                },
                {
                    title: "Лучшая креативная идея",
                    value: "300 млн сум",
                    description: "Инновационный грантовый конкурс среди студентов и молодежи.",
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
                    source: "ПП-357 (2024)",
                    tags: ["Investment", "Reward"],
                },
                {
                    title: "Нацфонд UzVC",
                    value: "100 млрд сум",
                    description: "Выделение дополнительных средств для прямого инвестирования в стартап-экосистему.",
                    source: "ПП-357 (Октябрь 2024)",
                },
                {
                    title: "Банковские Венчурные Фонды",
                    description: "Банкам с госдолей разрешено создавать собственные венчурные фонды и стартап-студии.",
                    source: "Указ Президента (2024)",
                },
                {
                    title: "Digital Wealthy",
                    value: "0% PIT",
                    description: "Спецрежим для инвесторов: освобождение от налога на зарубежные доходы при разовом взносе $50k (мин. 30 дней пребывания).",
                    source: "Новое положение (план 2026)",
                    tags: ["Foreigners", "Expats"],
                },
            ],
        },
    },
};
