import { CoverImageObjects } from "./about";

export type SupportedLanguages = "en" | "id";

export const headerTranslations: Record<SupportedLanguages, {
    home: string;
    aboutUs: string;
    products: string;
    bookNow: string;
    clients: string;
    services: string;
}> = {
    en: {
        home: "Home",
        aboutUs: "About Us",
        products: "Our Products",
        bookNow: "Get a Quote",
        clients: "Our Clients",
        services: "Services & Support",
    },
    id: {
        home: "Beranda",
        aboutUs: "Tentang Kami",
        products: "Produk Kami",
        bookNow: "Dapatkan Penawaran",
        clients: "Klien Kami",
        services: "Layanan & Dukungan",
    },
};

export const homeCoverImage: CoverImageObjects = {
    en: {
        title: "Powering Your Needs",
        description:
            "PT. Berkat Power Nusantara Energi provides high-quality generators and reliable energy solutions for residential, industrial, and commercial projects across Indonesia.",
    },
    id: {
        title: "Mendukung Kebutuhan Anda",
        description:
            "PT. Berkat Power Nusantara Energi menyediakan generator berkualitas tinggi dan solusi energi yang andal untuk proyek residensial, industri, dan komersial di seluruh Indonesia.",
    },
};


// translations/home.ts
export const heroTranslations = {
    en: {
        heading: "Providing Reliable Power Solutions for Every Project",
        description:
            "PT. Berkat Power Nusantara Energi is your trusted partner in delivering high-quality generators, ATS & Syncro Panels, and maintenance services to ensure uninterrupted energy for your operations.",
        bookingButton: "Get a Quote",
        downloadButton: "View Product Catalog",
        statistics: {
            yearsOperated: "Years in Operation",
            satisfiedBuyers: "Satisfied Clients",
            satisfiedRate: "Customer Satisfaction Rate",
        },
    },
    id: {
        heading: "Menyediakan Solusi Daya Andal untuk Setiap Proyek",
        description:
            "PT. Berkat Power Nusantara Energi adalah mitra terpercaya Anda dalam menyediakan generator berkualitas tinggi, panel ATS & Syncro, serta layanan perawatan untuk memastikan energi tanpa gangguan.",
        bookingButton: "Dapatkan Penawaran",
        downloadButton: "Lihat Katalog Produk",
        statistics: {
            yearsOperated: "Tahun Beroperasi",
            satisfiedBuyers: "Klien Puas",
            satisfiedRate: "Tingkat Kepuasan Pelanggan",
        },
    },
};

// translations/features.ts
export const featuresTranslations = {
    en: {
        heading: "Why Choose Us?",
        description:
            "Discover what sets PT. Berkat Power Nusantara Energi apart and how we deliver value through our trusted solutions.",
        features: [
            {
                title: "Trusted Expertise",
                content:
                    "Backed by years of experience in the generator and electrical industries, we provide reliable and effective energy solutions for every project.",
            },
            {
                title: "Responsive Support",
                content:
                    "Our team offers fast and responsive customer service to assist with technical needs anytime.",
            },
            {
                title: "Customized Solutions",
                content:
                    "We tailor our solutions to your needs, from generator selection to panel configuration, ensuring optimal performance.",
            },
            {
                title: "After-Sales Service",
                content:
                    "We provide warranties and ongoing maintenance services to ensure long-term satisfaction and reliability.",
            },
        ],
    },
    id: {
        heading: "Mengapa Memilih Kami?",
        description:
            "Temukan apa yang membuat PT. Berkat Power Nusantara Energi berbeda dan bagaimana kami memberikan nilai melalui solusi terpercaya.",
        features: [
            {
                title: "Keahlian Terpercaya",
                content:
                    "Didukung pengalaman bertahun-tahun di industri generator dan kelistrikan, kami menyediakan solusi energi yang andal dan efektif untuk setiap proyek.",
            },
            {
                title: "Dukungan Responsif",
                content:
                    "Tim kami menawarkan layanan pelanggan yang cepat dan responsif untuk memenuhi kebutuhan teknis kapan saja.",
            },
            {
                title: "Solusi yang Disesuaikan",
                content:
                    "Kami menyesuaikan solusi kami dengan kebutuhan Anda, mulai dari pemilihan generator hingga konfigurasi panel, memastikan kinerja optimal.",
            },
            {
                title: "Layanan Purna Jual",
                content:
                    "Kami menyediakan garansi dan layanan perawatan berkelanjutan untuk memastikan kepuasan dan keandalan jangka panjang.",
            },
        ],
    },
};


// translations/faq.ts
export const faqTranslations = {
    en: {
        title: "Why Choose PT. Berkat Power Nusantara Energi?",
        faqs: [
            {
                question: "What services does PT. Berkat Power Nusantara Energi offer?",
                answer:
                    "We provide a complete range of services, including generator set distribution, installation, spare parts supply, ATS & Syncro Panel manufacturing, and comprehensive maintenance solutions to ensure your power systems run efficiently and reliably.",
            },
            {
                question: "What types of generators do you offer?",
                answer:
                    "We specialize in Open Type Generators for industrial and outdoor applications and Silent Type Generators for noise-sensitive environments. Our products are designed to deliver reliable power with tailored solutions for your unique needs.",
            },
            {
                question: "Who are your clients?",
                answer:
                    "Our clients include industry leaders such as Yamaha, PLN, Bakrie Group, and Schneider Electric. We serve businesses across various sectors, from residential to industrial and commercial projects.",
            },
            {
                question: "Why is maintenance important for generators?",
                answer:
                    "Regular maintenance ensures optimal performance, extends the lifespan of your generator, and minimizes the risk of unexpected downtime, saving you time and costs in the long run.",
            },
        ],
        contactPrompt: "Have more questions or need personalized solutions?",
        contactLink: "Contact Our Sales Team",
    },
    id: {
        title: "Mengapa Memilih PT. Berkat Power Nusantara Energi?",
        faqs: [
            {
                question: "Layanan apa saja yang ditawarkan PT. Berkat Power Nusantara Energi?",
                answer:
                    "Kami menyediakan layanan lengkap, termasuk distribusi genset, instalasi, penyediaan suku cadang, pembuatan Panel ATS & Sinkronisasi, serta solusi perawatan menyeluruh untuk memastikan sistem daya Anda berjalan efisien dan andal.",
            },
            {
                question: "Apa saja jenis genset yang Anda tawarkan?",
                answer:
                    "Kami mengkhususkan diri pada Generator Tipe Terbuka untuk aplikasi industri dan luar ruangan, serta Generator Tipe Hening untuk lingkungan sensitif terhadap kebisingan. Produk kami dirancang untuk memberikan daya andal dengan solusi yang disesuaikan dengan kebutuhan Anda.",
            },
            {
                question: "Siapa saja klien Anda?",
                answer:
                    "Klien kami termasuk pemimpin industri seperti Yamaha, PLN, Bakrie Group, dan Schneider Electric. Kami melayani bisnis di berbagai sektor, mulai dari proyek residensial hingga industri dan komersial.",
            },
            {
                question: "Mengapa perawatan penting untuk genset?",
                answer:
                    "Perawatan rutin memastikan kinerja optimal, memperpanjang umur genset Anda, dan meminimalkan risiko downtime yang tidak terduga, sehingga menghemat waktu dan biaya dalam jangka panjang.",
            },
        ],
        contactPrompt: "Punya pertanyaan lebih lanjut atau butuh solusi khusus?",
        contactLink: "Hubungi Tim Penjualan Kami",
    },
};


export const productTranslations = {
    en: {
        generatorHeading: "Dont listen to us, Look at Them",
        generatorSubHeadings: "PT Berkat Power Nusantara Energy Project and Sales",
        catalogButton: "View Catalog",
        orderButton: "Get a Quote",
        startFrom: "Starting from",
        joinHeading:
            "Talk to our expert team for accurate information or send your inquiries via email.",
        emailPrompt: "Contact us via email",
        emailPlaceholder: "Enter your email",
        submitButton: "Submit",
    },
    id: {
        generatorHeading: "Lihatlah Mereka",
        generatorSubHeadings: "PT Berkat Power Nusantara Energy Project and Sales",
        catalogButton: "Lihat Katalog",
        orderButton: "Dapatkan Penawaran",
        startFrom: "Mulai dari",
        joinHeading:
            "Hubungi tim ahli kami untuk mendapatkan informasi yang akurat atau kirimkan pertanyaan Anda melalui email.",
        emailPrompt: "Hubungi kami melalui email",
        emailPlaceholder: "Masukkan email Anda",
        submitButton: "Kirim",
    },
};


export const testimonialsTranslations = {
    en: {
        title: "What Our Clients Say About Us",
        subtitle:
            "Hear from our satisfied clients about how our solutions helped them achieve their goals.",
        reviews: [
            {
                id: 1,
                src: "/features/IMG_7124.webp",
                name: "PT. Bakrie Autoparts",
                from: "Indonesia",
                companyName: "Client",
                testimonial:
                    "PT. Berkat Power Nusantara Energi provided excellent service during the installation of our 250kVA generator. The team was professional and efficient.",
            },
            {
                id: 2,
                src: "/features/IMG_7124.webp",
                name: "PT. Wima Jaya Artek",
                from: "Indonesia",
                companyName: "Client",
                testimonial:
                    "From purchasing to commissioning, the team ensured our 1000kVA generator operated flawlessly. Highly recommended.",
            },
        ],
    },
    id: {
        title: "Apa Kata Klien Kami Tentang Kami",
        subtitle:
            "Dengarkan dari klien kami yang puas tentang bagaimana solusi kami membantu mereka mencapai tujuan mereka.",
        reviews: [
            {
                id: 1,
                src: "/features/IMG_7124.webp",
                name: "PT. Bakrie Autoparts",
                from: "Indonesia",
                companyName: "Klien",
                testimonial:
                    "PT. Berkat Power Nusantara Energi memberikan layanan luar biasa selama instalasi generator 250kVA kami. Timnya profesional dan efisien.",
            },
            {
                id: 2,
                src: "/features/IMG_7124.webp",
                name: "PT. Wima Jaya Artek",
                from: "Indonesia",
                companyName: "Klien",
                testimonial:
                    "Dari pembelian hingga commissioning, tim memastikan generator 1000kVA kami beroperasi dengan sempurna. Sangat direkomendasikan.",
            },
        ],
    },
};


export const footerTranslations = {
    en: {
        contactTitle: "Contact",
        contactAddress: "My Republic Plaza (d/h Green Office Park 6), Wing A Lantai Dasar Zona 6 Jalan Grand Boulevard, Jl. BSD Green Office Park, Sampora, Kec. Cisauk, Kabupaten Tangerang, Banten 15345",
        contactPhone: "+6285877777271",
        contactEmail: "ptberkatpowernusantaraenergi@gmail.com",
        pagedone: "Pagedone",
        home: "Home",
        about: "About",
        products: "Products Catalogs",
        proVersion: "Pro Version",
        resources: "Resources",
        faqs: "FAQs",
        quickStart: "Quick Start",
        documentation: "Documentation",
        userGuide: "User Guide",
        // newsletterTitle: "Join Our Community for Exclusive Updates",
        // newsletterDescription:
        //     "Subscribe to Our Exclusive Newsletter for the Latest Updates.",
        // placeholder: "mail@gmail.com",
        // subscribe: "Subscribe",
        copyright: "©Company 2024, All rights reserved.",
    },
    id: {
        contactTitle: "Kontak",
        contactAddress: "My Republic Plaza (d/h Green Office Park 6), Wing A Lantai Dasar Zona 6 Jalan Grand Boulevard, Jl. BSD Green Office Park, Sampora, Kec. Cisauk, Kabupaten Tangerang, Banten 15345",
        contactPhone: "+6285877777271",
        contactEmail: "ptberkatpowernusantaraenergi@gmail.com",
        pagedone: "Pagedone",
        home: "Beranda",
        about: "Tentang",
        products: "Catalog Produk",
        proVersion: "Versi Pro",
        resources: "Sumber Daya",
        faqs: "FAQ",
        quickStart: "Panduan Cepat",
        documentation: "Dokumentasi",
        userGuide: "Panduan Pengguna",
        newsletterTitle: "Bergabung dengan Newsletter Kami",
        newsletterDescription:
            "Berlangganan Newsletter Eksklusif Kami untuk Mendapatkan Pembaruan Terbaru.",
        placeholder: "mail@gmail.com",
        subscribe: "Langganan",
        copyright: "©Company 2024, Semua hak dilindungi.",
    },
};


