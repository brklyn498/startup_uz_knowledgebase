export type FeatureItem = {
    title: string;
    value?: string;
    description: string;
    date?: string;
    source: string;
    tags?: string[];
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

export const content: Record<"uz" | "ru", Content> = {
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
                { id: "future", label: "Kelajak (2025-2026)" },
            ],
        },
        overview: {
            title: "Ekotizim Ko'rsatkichlari",
            stats: [
                { label: "IT Eksport Maqsadi", value: "$100M+", detail: "2023 yil yakunigacha" },
                { label: "B2G Bozor Imkoniyati", value: "214+", detail: "Yangi davlat AKT tizimlari" },
                { label: "Venchur Bozori", value: "$17.5M", detail: "2024 yilda 3x o'sish" },
                { label: "Startaplar Soni", value: "750+", detail: "Respublika bo'ylab" },
                { label: "E-Gov Foydalanuvchilari", value: "4.0M", detail: "Xususiy sektor ishtirokida" },
            ],
        },
        funding: {
            title: "Mablag' ajratish va Grantlar",
            items: [
                {
                    title: "Prezident Tech Award",
                    value: "$1,000,000",
                    description: "Eng yaxshi startap loyihalar uchun yillik tanlov. 5 ta asosiy yo'nalish bo'yicha mukofotlar.",
                    source: "PQ-357, 7-band",
                    tags: ["Yillik", "Valyutada"],
                },
                {
                    title: "Startaplarni Qo'llab-quvvatlash Granti",
                    value: "1 mlrd so'mgacha",
                    description: "Dasturiy mahsulot yaratish va eksportga yo'naltirish uchun ajratiladi. Innovatsion rivojlanish agentligi orqali.",
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
                },
                {
                    title: "Digital Office tizimi",
                    date: "2023 yil 1 yanvar",
                    description: "Davlat organlari uchun yagona ishchi muhit (hujjat almashinuvi, video-aloqa).",
                    source: "PQ-357, 10-band",
                },
                {
                    title: "Raqamli Ma'lumotlar Platformasi",
                    date: "2022 yil 1 oktyabr",
                    description: "Davlat ma'lumotlariga tijoriy kirish pullik asosda yo'lga qo'yildi.",
                    source: "PQ-357, 11-band",
                },
                {
                    title: "Telekommunikatsiya qurilishi (Tezkor)",
                    date: "2022 yil 1 oktyabr",
                    description: "Loyiha-smeta hujjatlari ekspertizaga topshirilgan kundan qurilishni boshlashga ruxsat. Ekspertiza muddati - 15 kun.",
                    source: "PQ-357, 4-band",
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
            title: "Kelajak Istiqbollari (2025-2026)",
            items: [
                {
                    title: "Talim-Krediti.mf.uz ishga tushishi",
                    date: "2026 yil 1 yanvar",
                    description: "Ta'lim krediti olish uchun arizalar to'liq onlayn (My.gov.uz va maxsus portal) orqali amalga oshiriladi.",
                    source: "PQ-388, 24-band",
                    tags: ["EdTech", "Online"],
                },
                {
                    title: "Elektron Budjet Buyurtmalari",
                    date: "2026 yil 1 avgust",
                    description: "Budjet tashkilotlari barcha xarajat buyurtmalarini elektron shaklda shakllantirishga to'liq o'tadi.",
                    source: "PQ-388, 25-band",
                    tags: ["GovTech", "Digital"],
                },
                {
                    title: "Suveren Xalqaro Obligatsiyalar",
                    date: "2026 yil davomida",
                    description: "Budjet teshigini yopish va investitsiya uchun navbatdagi xalqaro obligatsiyalar chiqarilishi.",
                    source: "PQ-388, 25-band",
                    tags: ["Moliya", "Investitsiya"],
                },
                {
                    title: "Ijtimoiy Soliq Islohoti",
                    date: "2026 yil 1 yanvar",
                    description: "Yangi ijtimoiy soliq stavkalari va hisob-kitob tartibining joriy etilishi.",
                    source: "PQ-388, 4-band",
                    tags: ["Soliq"],
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
                { id: "future", label: "Будущее (2025-2026)" },
            ],
        },
        overview: {
            title: "Показатели Экосистемы",
            stats: [
                { label: "Цель IT Экспорта", value: "$100M+", detail: "К концу 2023 года" },
                { label: "Рынок B2G", value: "214+", detail: "Новых госсистем" },
                { label: "Венчурный Рынок", value: "$17.5M", detail: "Рост 3x в 2024" },
                { label: "Кол-во Стартапов", value: "750+", detail: "По всей стране" },
                { label: "Пользователи E-Gov", value: "4.0M", detail: "С участием частного сектора" },
            ],
        },
        funding: {
            title: "Финансирование и Гранты",
            items: [
                {
                    title: "President Tech Award",
                    value: "$1,000,000",
                    description: "Ежегодный конкурс лучших стартапов. Призы по 5 основным направлениям.",
                    source: "ПП-357, пункт 7",
                    tags: ["Ежегодно", "В валюте"],
                },
                {
                    title: "Грант на поддержку стартапов",
                    value: "до 1 млрд сум",
                    description: "Выделяется на создание прототипа и экспортного ПО через Агентство инновационного развития.",
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
                    date: "Август 2022",
                    description: "Упрощен процесс выделения земли для операторов мобильной связи.",
                    source: "ПП-357, пункт 3",
                },
                {
                    title: "Система Digital Office",
                    date: "1 января 2023",
                    description: "Единое рабочее пространство для госорганов (документооборот, видеосвязь).",
                    source: "ПП-357, пункт 10",
                },
                {
                    title: "Платформа цифровых данных",
                    date: "1 октября 2022",
                    description: "Запуск коммерческого доступа к государственным данным на платной основе.",
                    source: "ПП-357, пункт 11",
                },
                {
                    title: "Строительство телеком-объектов (Ускоренно)",
                    date: "1 октября 2022",
                    description: "Разрешено начинать работы с даты внесения проекта на экспертизу. Срок экспертизы - 15 дней.",
                    source: "ПП-357, пункт 4",
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
            title: "Перспективы на Будущее (2025-2026)",
            items: [
                {
                    title: "Запуск Talim-Krediti.mf.uz",
                    date: "1 января 2026",
                    description: "Подача заявок на образовательные кредиты полностью переходит в онлайн формат.",
                    source: "ПП-388, пункт 24",
                    tags: ["EdTech", "Online"],
                },
                {
                    title: "Электронные Бюджетные Заявки",
                    date: "1 августа 2026",
                    description: "Полный переход бюджетных организаций на электронное формирование заявок через информационные системы.",
                    source: "ПП-388, пункт 25",
                    tags: ["GovTech", "Digital"],
                },
                {
                    title: "Суверенные Международные Облигации",
                    date: "В течение 2026 года",
                    description: "Очередное размещение суверенных облигаций на международных рынках для финансирования дефицита.",
                    source: "ПП-388, пункт 25",
                    tags: ["Финансы", "Инвестиции"],
                },
                {
                    title: "Реформа Социального Налога",
                    date: "1 января 2026",
                    description: "Внедрение новых ставок и порядка исчисления социального налога.",
                    source: "ПП-388, пункт 4",
                    tags: ["Налоги"],
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
