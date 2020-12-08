const tasks = `
    [
        {
            "question": "В произведении Жюль Верна «Пятнадцатилетний капитан» судно в течение пути меняет своё направление из-за неопытности юного капитана и обмана судового кока. В результате, вместо Америки шхуна «Пилигрим» оказывается в Анголе. Какие приборы помогли бы определить широту и долготу нахождения судна, чтобы избежать серьёзной ошибки?",
            "answer1": { "result": false, "value": "компас и лаг" },
            "answer2": { "result": true, "value": "хронометр и секстант" },
            "answer3": { "result": false, "value": "эхолот и компас" },
            "answer4": { "result": false, "value": "лаг и нивелир" }
        },
        {
            "question": "Какая из перечисленных карт не относится к тематическим?",
            "answer1": { "result": false, "value": "почвенная" },
            "answer2": { "result": false, "value": "климатическая" },
            "answer3": { "result": false, "value": "политическая" },
            "answer4": { "result": true, "value": "топографическая" }
        },
        {
            "question": "В поясах низкого атмосферного давления выпадает много осадков, потому что воздух в них:",
            "answer1": { "result": false, "value": "поднимается, нагревается, приближается к насыщению" },
            "answer2": { "result": false, "value": "поднимается, нагревается, становиться суше" },
            "answer3": { "result": true, "value": "поднимается, охлаждается, приближается к насыщению" },
            "answer4": { "result": false, "value": "опускается, охлаждается, становиться суше" }
        },
        {
            "question": "Составные части географической оболочки называются",
            "answer1": { "result": true, "value": "природными компонентами" },
            "answer2": { "result": false, "value": "природной средой" },
            "answer3": { "result": false, "value": "географической средой" },
            "answer4": { "result": false, "value": "растениями и животными" }
        },
        {
            "question": "Какие ресурсы относятся к исчерпаемым возобновимым:",
            "answer1": { "result": false, "value": "нефть, газ, уголь, руда" },
            "answer2": { "result": true, "value": "почвенное плодородие, биологические ресурсы" },
            "answer3": { "result": false, "value": "энергия ветра" },
            "answer4": { "result": false, "value": "энергия приливов и отливов" }
        },
        {
            "question": "Как называются подземные воды, находящиеся в первом от поверхности водоносном горизонте?",
            "answer1": { "result": false, "value": "верховодка" },
            "answer2": { "result": false, "value": "артезианские" },
            "answer3": { "result": true, "value": "грунтовые" },
            "answer4": { "result": false, "value": "ювенильные" }
        },
        {
            "question": "Выберите единственно правильный ответ:",
            "answer1": { "result": false, "value": "Россию пересекает линия перемены дат" },
            "answer2": { "result": true, "value": "Россия расположена в трех полушариях" },
            "answer3": { "result": false, "value": "в столице России в период с мая по октябрь включительно продолжительность дня всегда больше продолжительности ночи" },
            "answer4": { "result": false, "value": "возраст рельефа России всюду соответствует палеозойскому возрасту" }
        },
        {
            "question": "Данное дерево А.Гумбольдт назвал «старейшим органическим памятником» нашей планеты",
            "answer1": { "result": false, "value": "чайное" },
            "answer2": { "result": true, "value": "баобаб" },
            "answer3": { "result": false, "value": "дуб" },
            "answer4": { "result": false, "value": "эвкалипт" }
        },
        {
            "question": "Для какой природной территории характерны  сейба, какао, гевея, анаконда, тапиры, капибара, ягуар? ",
            "answer1": { "result": true, "value": "экваториальные леса" },
            "answer2": { "result": false, "value": "саванны" },
            "answer3": { "result": false, "value": "смешанные леса" },
            "answer4": { "result": false, "value": "мангровые заросли" }
        },
        {
            "question": "В честь какого офицера русского флота, возглавлявшего две крупные экспедиции, названы остров, море и пролив? ",
            "answer1": { "result": false, "value": "Б.Вилькицкий" },
            "answer2": { "result": true, "value": "В. Беринг" },
            "answer3": { "result": false, "value": "С.Дежнев" },
            "answer4": { "result": false, "value": "Д.Лаптев" }
        },
        {
            "question": "Какова будет продолжительность дня 22 декабря в акватории моря Амундсена?",
            "answer1": { "result": false, "value": "0 ч." },
            "answer2": { "result": false, "value": "12 ч." },
            "answer3": { "result": false, "value": "18 ч." },
            "answer4": { "result": true, "value": "24 ч." }
        },
        {
            "question": "Благодаря открытию этого объекта в 2013 году территория России увеличилась на 452 квадратные мили и границы экономической зоны России продвинулись вглубь Арктики.",
            "answer1": { "result": true, "value": "остров Яя" },
            "answer2": { "result": false, "value": "месторождение Приразломное" },
            "answer3": { "result": false, "value": "пролив Лонга" },
            "answer4": { "result": false, "value": "остров Баунти" }
        },
        {
            "question": "Какой из представленных масштабов самый крупный: ",
            "answer1": { "result": false, "value": "1:25000" },
            "answer2": { "result": false, "value": "1:50000" },
            "answer3": { "result": false, "value": "1:100000" },
            "answer4": { "result": true, "value": "1:1000000" }
        },
        {
            "question": "В каком случае верна, указана смена почвенных горизонтов от поверхности вглубь земли?",
            "answer1": { "result": false, "value": "материнская порода – гумусовый – вымывания – вмывания" },
            "answer2": { "result": true, "value": "гумусовый – вымывания – вмывания – материнская порода" },
            "answer3": { "result": false, "value": "гумусовый – вмывания – вымывания – материнская порода" },
            "answer4": { "result": false, "value": "вмывания – материнская порода – гумусовый – вымывания" }
        },
        {
            "question": "В каком геологическом периоде началось раскрытие южной части Атлантического океана?",
            "answer1": { "result": false, "value": "кембрий" },
            "answer2": { "result": false, "value": "неоген" },
            "answer3": { "result": true, "value": "мел" },
            "answer4": { "result": false, "value": "пермь" }
        },
        {
            "question": "Для какой реки Волга не служит местным базисом эрозии?",
            "answer1": { "result": false, "value": "Ока" },
            "answer2": { "result": false, "value": "Кама" },
            "answer3": { "result": true, "value": "Вятка" },
            "answer4": { "result": false, "value": "Ветлуга" }
        },
        {
            "question": "Какое утверждения о рельефе России является верным:",
            "answer1": { "result": false, "value": "на территории России преобладают аккумулятивные морфоструктуры" },
            "answer2": { "result": true, "value": "Плато Путорана сложенно эффузивными породами" },
            "answer3": { "result": false, "value": "пояс гор Юга Сибири сформировался в мезозойскую складчатость" },
            "answer4": { "result": false, "value": "минимальная абсолютная высота находится на Северо-Сибирской низм" }
        },
        {
            "question": "Для какой территории Русской равнины характерны типчак, ковыль, грызуны?",
            "answer1": { "result": false, "value": "Северные Увалы" },
            "answer2": { "result": false, "value": "Валдайская возв" },
            "answer3": { "result": true, "value": "Приволжская возв" },
            "answer4": { "result": false, "value": "Печерская низм" }
        },
        {
            "question": "Как называются хорошо дренированные  возвышенные равнины с плодородными темноцветными почвами на покровных лессовидных суглинках, встречающиеся на юге тайги и в смешанных лесах Восточно-Европейской равнины?",
            "answer1": { "result": false, "value": "колки" },
            "answer2": { "result": false, "value": "полесье " },
            "answer3": { "result": true, "value": "ополье" },
            "answer4": { "result": false, "value": "лощины" }
        },
        {
            "question": "Укажите самый северный город России с населением более 150 000 человек",
            "answer1": { "result": false, "value": "Северодвинск" },
            "answer2": { "result": false, "value": "Уссурийск" },
            "answer3": { "result": false, "value": "Сыктывкар" },
            "answer4": { "result": true, "value": "Норильск" }
        },
        {
            "question": "В каком из перечисленных городов имеется крупнейшее производство вертолетов?",
            "answer1": { "result": false, "value": "Омск" },
            "answer2": { "result": false, "value": "Иркутск" },
            "answer3": { "result": true, "value": "Казань" },
            "answer4": { "result": false, "value": "Кемерово" }
        },
        {
            "question": "Выберите страны, агроклиматические ресурсы которых позволяют выращивать сельскохозяйственные культуры умеренного, субтропического, и тропического поясов:",
            "answer1": { "result": true, "value": "Индия, Китай" },
            "answer2": { "result": false, "value": "Россия, Корея" },
            "answer3": { "result": false, "value": "Украина. Канада" },
            "answer4": { "result": false, "value": "Испания, Франция" }
        },
        {
            "question": "Территория какой из перечисленных государств может уменьшиться в результате глобального потепления?",
            "answer1": { "result": false, "value": "Узбекистан" },
            "answer2": { "result": true, "value": "Швейцария" },
            "answer3": { "result": false, "value": "Бангладеш" },
            "answer4": { "result": false, "value": "Парагвай" }
        },
        {
            "question": "Какое утверждения о рельефе России является верным:",
            "answer1": { "result": false, "value": "на территории России преобладают гляциальные формы рельефа" },
            "answer2": { "result": true, "value": "Плато Путорана сложенно эффузивными породами" },
            "answer3": { "result": false, "value": "пояс гор Юга Сибири сформировался в мезозойскую складчатость" },
            "answer4": { "result": false, "value": "минимальная абсолютная высота находится на Северо-Сибирской низм" }
        },
        {
            "question": "Выберите верное высказывание:",
            "answer1": { "result": false, "value": "в организацию объединенных наций входят все страны мира" },
            "answer2": { "result": true, "value": "Гваделупа – заморский департамент Франции" },
            "answer3": { "result": false, "value": "о-ва Нампо входят в состав островов Курильской гряды" },
            "answer4": { "result": false, "value": "к наименее плотно заселенным территориям мира относят районы древнего орошаемого земледелия" }
        },
        {
            "question": "Морской порт Сабетта предназначен для транспортировки.... ",
            "answer1": { "result": false, "value": "каменного угля" },
            "answer2": { "result": true, "value": "сжиженного природного газа" },
            "answer3": { "result": false, "value": "нефти" },
            "answer4": { "result": false, "value": "леса" }
        },
        {
            "question": "Для какой природной территории характерны  сейба, гевея, тапиры, капибара?",
            "answer1": { "result": true, "value": "сельва" },
            "answer2": { "result": false, "value": "пампа" },
            "answer3": { "result": false, "value": "смешанные леса" },
            "answer4": { "result": false, "value": "мангровые заросли" }
        },
        {
            "question": "Какое из утверждений о складчатости гор России является верным?",
            "answer1": { "result": false, "value": "горы Алтай образовались в эпоху кайнозойской складчатости" },
            "answer2": { "result": false, "value": "горы Кавказ образовались в эпоху палеозойской складчатости" },
            "answer3": { "result": true, "value": "горы Урал образовались в эпоху герцинской складчатости" },
            "answer4": { "result": false, "value": "горы Саяны образовался в эпоху мезозойской складчатости" }
        },
        {
            "question": "В каких точках земного шара может быть одновременно полночь?",
            "answer1": { "result": false, "value": "на полюсах" },
            "answer2": { "result": true, "value": "на одном меридиане" },
            "answer3": { "result": false, "value": "на экваторе" },
            "answer4": { "result": false, "value": "на тропике" }
        },
        {
            "question": "Как называется угол между магнитным и географическим меридианом?",
            "answer1": { "result": false, "value": "магнитный азимут" },
            "answer2": { "result": false, "value": "дирекционный угол" },
            "answer3": { "result": true, "value": "магнитное склонение" },
            "answer4": { "result": false, "value": "румб" }
        },
        {
            "question": "На карте какого масштаба можно показать лес, площадью 100 кв.м.?",
            "answer1": { "result": true, "value": "1: 10 000" },
            "answer2": { "result": false, "value": "1: 500 000" },
            "answer3": { "result": false, "value": "1:250 000" },
            "answer4": { "result": false, "value": "1: 100 000" }
        },
        {
            "question": "В каком варианте, представлены только магматические горные породы?",
            "answer1": { "result": false, "value": "пемза, гранит, сланец" },
            "answer2": { "result": false, "value": "пемза, гранит, мрамор" },
            "answer3": { "result": true, "value": "гранит, базальт, пемза" },
            "answer4": { "result": false, "value": "мрамор, гранит, базальт" }
        },
        {
            "question": "Как называется слой атмосферы,  в котором образуются перистые и кучевые облака?",
            "answer1": { "result": false, "value": "стратосфера" },
            "answer2": { "result": true, "value": "тропосфера" },
            "answer3": { "result": false, "value": "мезосфера" },
            "answer4": { "result": false, "value": "экзосфера" }
        },
        {
            "question": "Какой климатический пояс не характерен для Австралии?",
            "answer1": { "result": false, "value": "субэкваториальный" },
            "answer2": { "result": false, "value": "тропический" },
            "answer3": { "result": false, "value": "субтропический" },
            "answer4": { "result": true, "value": "умеренный" }
        },
        {
            "question": "На границе взаимодействия каких литосферных плит образовалась горная система мира на суше с самыми высокими вершинами?",
            "answer1": { "result": true, "value": "Евразиатской и Индо-Австралийской" },
            "answer2": { "result": false, "value": "Южно-Американской и Наска" },
            "answer3": { "result": false, "value": "Северо-Американской и Тихоокеанской" },
            "answer4": { "result": false, "value": "Евразийской и Африканской" }
        },
        {
            "question": "В каких  широтах  соленость воды выше? ",
            "answer1": { "result": false, "value": "экваториальных" },
            "answer2": { "result": true, "value": "тропических" },
            "answer3": { "result": false, "value": "умеренных" }
        },
        {
            "question": "Какой единый материк существовал 175 млн. лет назад?",
            "answer1": { "result": false, "value": "Лавразия" },
            "answer2": { "result": false, "value": "Гондвана" },
            "answer3": { "result": true, "value": "Пангея" },
            "answer4": { "result": false, "value": "Тетис" }
        },
        {
            "question": "5 + 5",
            "answer1": { "result": false, "value": "1" },
            "answer2": { "result": true, "value": "10" },
            "answer3": { "result": false, "value": "11" }
        },
        {
            "question": "Столица Италии?",
            "answer1": { "result": false, "value": "Ватикан" },
            "answer2": { "result": true, "value": "Рим" },
            "answer3": { "result": false, "value": "Мир" }
        },
        {
            "question": "var a = 1; var b = ++a+a; alert(b); Результат работы кода - сообщение с текстом:",
            "answer1": { "result": false, "value": "1" },
            "answer2": { "result": false, "value": "2" },
            "answer3": { "result": true, "value": "4" },
            "answer4": { "result": false, "value": "3" },
            "answer5": { "result": false, "value": "Этот код не будет работать" }
        },
        {
            "question": "Какие из этих вариантов не задает массив из элементов 'a', 'b'?",
            "answer1": { "result": false, "value": "var a = new Array('a','b')" },
            "answer2": { "result": false, "value": "var a = [ 'a', 'b' ]" },
            "answer3": { "result": true, "value": "var a = ( 'a', 'b' )" },
            "answer4": { "result": false, "value": "var a = 'a,b'.split(',')" },
            "answer5": { "result": false, "value": "Все подойдут" },
            "answer6": { "result": false, "value": "Ни один не подойдет" }
        } 
    ]
`;
