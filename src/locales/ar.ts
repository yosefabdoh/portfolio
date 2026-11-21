import type { CaseStudy, Content } from './types'
import { en } from './en'

const [ayma, gift, sbe] = en.work.cases as [CaseStudy, CaseStudy, CaseStudy]

export const ar: Content = {
  meta: {
    title: 'يوسف عبده، مطوّر برمجيات متكامل في القاهرة',
    description:
      'يوسف عبده يبني برمجيات أعمال ثنائية اللغة بالعربية والإنجليزية باستخدام \u200E.NET وPostgreSQL وReact وPython. السيرة الذاتية وصور المشاريع ووسائل التواصل.',
  },
  nav: {
    work: 'الأعمال',
    experience: 'الخبرات',
    skills: 'المهارات',
    contact: 'التواصل',
    menu: 'القائمة',
    close: 'إغلاق القائمة',
    switchLang: 'English',
    switchLangLabel: 'View this page in English',
    themeToDark: 'التبديل إلى الوضع الداكن',
    themeToLight: 'التبديل إلى الوضع الفاتح',
    skip: 'تخطَّ إلى المحتوى',
  },
  hero: {
    name: 'يوسف عبده',
    role: 'مطوّر برمجيات متكامل في القاهرة',
    intro:
      'أبني برمجيات أعمال تعمل بالعربية والإنجليزية، من واجهة \u200E.NET البرمجية وقاعدة بيانات PostgreSQL إلى شاشات React التي يعمل عليها المستخدمون طوال اليوم. وقبل ذلك سنوات من الدعم الفني في مصر والسعودية واليمن.',
    available: 'متاح لفرص عمل جديدة',
    email: 'راسلني',
    cv: 'حمّل السيرة الذاتية',
  },
  board: {
    title: 'المشاريع والأدوار من 2018 إلى 2026',
    clock: 'القاهرة',
    columns: {
      year: 'السنة',
      project: 'المشروع',
      stack: 'التقنيات',
      role: 'الدور',
      status: 'الحالة',
    },
    rows: [
      {
        year: '2026',
        project: 'أيما ERP',
        stack: '\u200E.NET، React، PostgreSQL',
        role: 'المطوّر الرئيسي',
        status: 'قيد التطوير',
        tone: 'wait',
        href: '#ayma',
      },
      {
        year: '2026',
        project: 'GiftSniper',
        stack: 'Python، Telethon',
        role: 'المطوّر الرئيسي',
        status: 'يعمل',
        tone: 'go',
        href: '#giftsniper',
      },
      {
        year: '2024',
        project: 'فاست آند أكيوريت للخدمات اللوجستية',
        stack: '3CX، Microsoft 365، Sophos',
        role: 'أخصائي دعم فني',
        status: 'وظيفتي الحالية',
        tone: 'go',
        href: '#experience',
      },
      {
        year: '2020',
        project: 'سيرفس بيس',
        stack: 'موقع إلكتروني واستشارات تقنية',
        role: 'استشاري تقنية ومطوّر ويب',
        status: 'الموقع يعمل',
        tone: 'go',
        href: '#servicebase',
      },
      {
        year: '2019',
        project: 'كلية التقنية الحديثة',
        stack: 'HTML، CSS، JavaScript',
        role: 'مدرّب واجهات أمامية',
        status: 'مكتمل',
        tone: 'done',
        href: '#experience',
      },
      {
        year: '2018',
        project: 'كلية المجتمع بصنعاء',
        stack: 'مشاريع برمجية طلابية',
        role: 'مشرف مشاريع',
        status: 'مكتمل',
        tone: 'done',
        href: '#experience',
      },
    ],
  },
  work: {
    title: 'أعمال مختارة',
    intro:
      'مستودع أيما ومستودع GiftSniper خاصّان. الشاشات أدناه من تشغيل محلي على بيانات تجريبية، ويسعدني أن أشرح لك الكود بالتفصيل.',
    openFull: 'افتح الصورة بالحجم الكامل',
    cases: [
      {
        ...ayma,
        name: 'أيما ERP',
        summary: 'نظام محاسبة وتخطيط موارد للشركات الصغيرة والمتوسطة في السعودية.',
        body: 'نظام متعدد المستأجرين يغطي دفتر الأستاذ العام والمبيعات والمشتريات والمخزون والخزينة والتقارير المالية، بالعربية والإنجليزية في كل شاشة. صممت البنية المعمارية وأبني الواجهة البرمجية وقاعدة البيانات والواجهة الأمامية.',
        facts: [
          { label: 'التقنيات', value: ayma.facts[0]!.value },
          {
            label: 'الحجم',
            value: '60 وحدة تحكم في الواجهة البرمجية و18 وحدة في الواجهة الأمامية',
          },
          {
            label: 'الاختبارات',
            value:
              'نحو 830 حالة اختبار للخادم باستخدام xUnit، و100 ملف اختبار للواجهة باستخدام Vitest وPlaywright',
          },
          {
            label: 'الآن',
            value:
              'الفوترة الإلكترونية لهيئة الزكاة والضريبة (ZATCA): سلسلة التجزئة والاعتماد وبناء الفواتير',
          },
        ],
        shots: [
          {
            file: 'ayma-dashboard-ar',
            tab: 'العربية',
            alt: 'لوحة قيادة أيما بالعربية مع الإيرادات والمصروفات وصافي الربح ومخطط التدفق النقدي والذمم المدينة المستحقة',
            dir: 'rtl',
          },
          {
            file: 'ayma-dashboard',
            tab: 'English',
            alt: 'لوحة القيادة نفسها بالإنجليزية من اليسار إلى اليمين',
          },
          {
            file: 'ayma-trial-balance',
            tab: 'ميزان المراجعة',
            alt: 'تقرير ميزان المراجعة في أيما مع اثني عشر حسابًا ومجموع مدين يساوي مجموع الدائن',
          },
        ],
        viewsLabel: 'شاشات أيما',
      },
      {
        ...gift,
        summary:
          'بوت تليجرام يشتري هدايا إعادة البيع فور ظهور عرض يطابق قواعد السعر التي يحددها المالك.',
        body: 'يراقب قنوات السوق ويفحص السوق بالتوازي، ويحجز كل عرض مرة واحدة، ويدفع بنجوم تليجرام عبر MTProto. ولوحة تحكم عربية خاصة تعرض المشتريات والإنفاق وحالة كل جلسة.',
        facts: [
          { label: 'التقنيات', value: gift.facts[0]!.value },
          { label: 'الحجم', value: 'حتى 32 جلسة تليجرام تتشارك سقف إنفاق يومي واحد' },
          { label: 'الاختبارات', value: 'نحو 490 اختبارًا آليًا بـ pytest' },
          {
            label: 'التصميم',
            value: 'لوحة من اليمين إلى اليسار بوضعين فاتح وداكن وخط Tajawal مستضاف ذاتيًا',
          },
        ],
        shots: [
          {
            file: 'giftsniper-overview',
            tab: 'فاتح',
            alt: 'لوحة GiftSniper بالعربية تعرض عدد الهدايا المشتراة والنجوم المنفقة ونسبة النجاح وآخر خمس عمليات شراء',
            dir: 'rtl',
          },
          {
            file: 'giftsniper-overview-dark',
            theme: 'dark',
            tab: 'داكن',
            alt: 'لوحة GiftSniper في الوضع الداكن',
            dir: 'rtl',
          },
        ],
        viewsLabel: 'أوضاع GiftSniper',
      },
      {
        ...sbe,
        name: 'موقع سيرفس بيس',
        summary: 'الموقع الرسمي لشركة سيرفس بيس للخدمات اللوجستية والمقاولات في صنعاء، اليمن.',
        body: 'صممت الموقع وبنيته أثناء عملي استشاريًا للشركة: الخدمات والرسالة والشركاء ونموذج تواصل وخريطة للمكتب. مبني بـ HTML وCSS وJavaScript فقط، وما زال يعمل حتى اليوم.',
        facts: [
          { label: 'التقنيات', value: sbe.facts[0]!.value },
          { label: 'السنة', value: 'الإصدار الأول 2021، مع صيانة مستمرة' },
        ],
        shots: [
          {
            file: 'servicebase-home',
            tab: 'الرئيسية',
            alt: 'الصفحة الرئيسية لسيرفس بيس مع رسم متساوي القياس لمبنى قيد الإنشاء بجوار تعريف الشركة',
          },
          {
            file: 'servicebase-mission',
            tab: 'الرسالة',
            alt: 'قسم رسالة سيرفس بيس مع رسوم توضيحية لخطوات التطوير والتخطيط',
          },
        ],
        links: [
          { label: 'زُر servicebaseye.com', href: 'https://servicebaseye.com' },
          { label: 'شاهد الكود', href: 'https://github.com/yosefabdoh/ServiceBaseye' },
        ],
        viewsLabel: 'صفحات سيرفس بيس',
      },
    ],
    earlierTitle: 'أكواد سابقة',
    earlier: [
      {
        ...en.work.earlier[0]!,
        text: 'منصة تجمع الطلاب والشركات حول مشاريع التخرج، مبنية بتقنيات ASP.NET Web Forms، C#\u200E، Azure Pipelines.',
      },
      {
        ...en.work.earlier[1]!,
        text: 'موقع إعلانات سيارات مع تسجيل مستخدمين ولوحة إدارة، مبني بتقنيات ASP.NET Web Forms، C#\u200E، SQL Server.',
      },
    ],
    codeLink: 'الكود على GitHub',
  },
  experience: {
    title: 'الخبرات',
    jobs: [
      {
        role: 'أخصائي دعم فني',
        company: 'فاست آند أكيوريت للخدمات اللوجستية',
        place: 'القاهرة',
        years: '2024 حتى الآن',
        points: [
          'دعم الموظفين في مكاتب الشركة بمصر والسعودية، حضوريًا وعن بُعد.',
          'إدارة نظام الهاتف 3CX، ونظام Chameleon ERP، وخدمات Microsoft 365.',
          'إدارة حماية أجهزة المستخدمين عبر Sophos، وأجهزة الحضور BioTime.',
          'إعداد التقارير للإدارة والإشراف على محتوى وسائل التواصل.',
        ],
      },
      {
        role: 'دعم تقنية المعلومات واستشاري',
        company: 'Servicebaseye، مجموعة Benefits',
        place: 'القاهرة',
        years: '2020 إلى 2024',
        points: [
          'صيانة المنصات الإلكترونية للشركة وتدريب الموظفين على استخدامها.',
          'استشارات تقنية وتنفيذ مشاريع لعملاء في قطاعي اللوجستيات والاستشارات.',
        ],
      },
      {
        role: 'مدرّب تصميم واجهات وتطوير أمامي',
        company: 'كلية التقنية الحديثة (MTC)',
        place: 'صنعاء، اليمن',
        years: '2019 إلى 2022',
        points: [
          'تدريس HTML وCSS وJavaScript وأطر الواجهات الأمامية الحديثة.',
          'بناء مشاريع عملية حول مبادئ تصميم الواجهات وكتابة كود نظيف.',
          'توجيه الطلاب في التصميم المتمحور حول المستخدم.',
        ],
      },
      {
        role: 'مشرف مشاريع برمجية',
        company: 'كلية المجتمع بصنعاء (SCC)',
        place: 'صنعاء، اليمن',
        years: '2018 إلى 2022',
        points: [
          'قيادة فرق برمجة طلابية من الفكرة الأولى حتى المشروع المكتمل.',
          'تطبيق ممارسات أجايل للالتزام بالجداول الزمنية.',
          'التنسيق مع أعضاء هيئة التدريس لتناسب المشاريع المنهج الدراسي.',
        ],
      },
    ],
    educationTitle: 'التعليم',
    degrees: [
      {
        title: 'بكالوريوس برمجة الحاسوب',
        school: 'كلية المجتمع بصنعاء',
        years: '2018 إلى 2019',
        grade: 'المعدل 3.5',
      },
      {
        title: 'دبلوم عالٍ في تقنية برمجة الحاسوب',
        school: 'كلية المجتمع بصنعاء',
        years: '2015 إلى 2018',
        grade: '83.28%',
      },
    ],
    certificationsTitle: 'الشهادات',
    certifications: 'CompTIA A+، Cisco CCNA، ICDL',
    awardTitle: 'جائزة',
    award: {
      text: "الفوز في مسابقة الأفكار التطويرية ضمن فعالية TEDxSana'a لعام 2020 (It's Time)، برعاية Baader.",
      link: { label: 'شاهد الفيديو', href: en.experience.award.link.href },
    },
    volunteeringTitle: 'التطوع',
    volunteering: {
      text: 'عضو في منظمة مركز التطوع (VHO) أعمل على مشاريع مجتمعية.',
      link: { label: 'زُر موقع VHO', href: en.experience.volunteering.link.href },
    },
    referencesTitle: 'التوصيات',
    references: [
      { name: 'مبارك سيف', title: 'مستشار أكاديمي وأستاذ، كلية المجتمع بصنعاء' },
      { name: 'د. خالد البريهي', title: 'رئيس قسم نظم المعلومات الإدارية، جامعة الملكة أروى' },
    ],
    referencesNote: 'بيانات التواصل عند الطلب.',
  },
  skills: {
    title: 'المهارات والأدوات',
    groups: [
      { name: 'الخادم', items: en.skills.groups[0]!.items.replace(/, /g, '، ') },
      {
        name: 'الواجهة الأمامية',
        items:
          'TypeScript، React، Vue، Tailwind CSS، HTML، CSS، تخطيط من اليمين إلى اليسار وتعدد اللغات',
      },
      { name: 'الاختبار والتسليم', items: en.skills.groups[2]!.items.replace(/, /g, '، ') },
      {
        name: 'تقنية المعلومات والبنية التحتية',
        items: 'Microsoft 365، 3CX، Sophos، الشبكات (CCNA)، خوادم Vultr السحابية، الدعم عن بُعد',
      },
      { name: 'التصميم', items: 'Figma، تصميم واجهات لمنتجات بالعربية والإنجليزية' },
      { name: 'اللغات', items: 'العربية (اللغة الأم)، الإنجليزية (بطلاقة)' },
    ],
  },
  contact: {
    title: 'التواصل',
    text: 'أنا متاح لوظائف التطوير والدعم الفني. البريد الإلكتروني أسرع طريقة للوصول إليّ.',
    email: en.contact.email,
    github: 'GitHub',
    linkedin: 'LinkedIn',
    cv: 'حمّل السيرة الذاتية (PDF)',
  },
  footer: {
    rights: 'يوسف عبده',
    source: 'المصدر على GitHub',
  },
}
