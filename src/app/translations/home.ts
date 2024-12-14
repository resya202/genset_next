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
        title: "Questions & Answers",
        faqs: [
            {
                question: "How can I contact customer support?",
                answer:
                    "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
            },
            {
                question: "How do I find my purchase history?",
                answer:
                    "To find your purchase history, log in and go to the account or purchase history page. Look for a list of your past purchases or orders, and click on any item to see more details.",
            },
            {
                question: "How do I update my billing information?",
                answer:
                    "To update your billing information, log in and go to the billing or payment page. Look for an option to 'Update payment method' or 'Edit billing information' and follow the prompts. Be sure to save your changes before exiting.",
            },
            {
                question: "How do I upload a file or document?",
                answer:
                    "To upload a file or document, look for a button or link that says 'Upload' or 'Add file.' Click on the button or link and follow the prompts to select the file from your computer or device. Be sure to check the file size and format requirements before uploading.",
            },
        ],
        contactPrompt: "Didn’t find the answer you were looking for?",
        contactLink: "Contact Support",
    },
    id: {
        title: "Pertanyaan & Jawaban",
        faqs: [
            {
                question: "Bagaimana saya bisa menghubungi layanan pelanggan?",
                answer:
                    "Untuk menghubungi layanan pelanggan, cari tombol atau tautan 'Hubungi kami' atau 'Bantuan' di situs web atau platform. Anda dapat menghubungi melalui email, telepon, atau obrolan.",
            },
            {
                question: "Bagaimana saya menemukan riwayat pembelian saya?",
                answer:
                    "Untuk menemukan riwayat pembelian Anda, masuk dan buka halaman akun atau riwayat pembelian. Cari daftar pembelian atau pesanan Anda sebelumnya, lalu klik item apa pun untuk melihat detailnya.",
            },
            {
                question: "Bagaimana cara memperbarui informasi tagihan saya?",
                answer:
                    "Untuk memperbarui informasi tagihan Anda, masuk dan buka halaman pembayaran atau tagihan. Cari opsi 'Perbarui metode pembayaran' atau 'Edit informasi tagihan' dan ikuti petunjuknya. Jangan lupa untuk menyimpan perubahan Anda sebelum keluar.",
            },
            {
                question: "Bagaimana cara mengunggah file atau dokumen?",
                answer:
                    "Untuk mengunggah file atau dokumen, cari tombol atau tautan yang bertuliskan 'Unggah' atau 'Tambahkan file'. Klik tombol atau tautan tersebut dan ikuti petunjuknya untuk memilih file dari komputer atau perangkat Anda. Pastikan ukuran dan format file sesuai dengan persyaratan.",
            },
        ],
        contactPrompt: "Tidak menemukan jawaban yang Anda cari?",
        contactLink: "Hubungi Dukungan",
    },
};

export const productTranslations = {
    en: {
        generatorHeading: "Explore the Best Generators for Your Energy Needs",
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
        generatorHeading: "Jelajahi Generator Terbaik untuk Kebutuhan Energi Anda",
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
        contactAddress: "Puri Indah, West Jakarta, Indonesia.",
        contactPhone: "+62 856 9955 1109",
        contactEmail: "support@gmail.com",
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
        newsletterTitle: "Join Our Community for Exclusive Updates",
        newsletterDescription:
            "Subscribe to Our Exclusive Newsletter for the Latest Updates.",
        placeholder: "mail@gmail.com",
        subscribe: "Subscribe",
        copyright: "©Company 2024, All rights reserved.",
    },
    id: {
        contactTitle: "Kontak",
        contactAddress: "Puri Indah, Jakarta Barat, Indonesia.",
        contactPhone: "+62 856 9955 1109",
        contactEmail: "dukungan@gmail.com",
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


