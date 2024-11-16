export type SupportedLanguages = "en" | "id";

export const headerTranslations: Record<SupportedLanguages, {
    home: string;
    aboutUs: string;
    products: string;
    bookNow: string;
}> = {
    en: {
        home: "Home",
        aboutUs: "About Us",
        products: "Products",
        bookNow: "Book Now",
    },
    id: {
        home: "Beranda",
        aboutUs: "Tentang Kami",
        products: "Produk",
        bookNow: "Pesan Sekarang",
    },
};

// translations/home.ts
export const heroTranslations = {
    en: {
        heading: "We make your Flight journey as easy as possible",
        description:
            "Embarking on a flight journey can be an exhilarating experience, filled with anticipation for the adventures ahead. To ensure a smooth and enjoyable trip, it's important to prepare adequately.",
        bookingButton: "Book Now",
        downloadButton: "See Product Catalogs",
        statistics: {
            yearsOperated: "Years Operated",
            satisfiedBuyers: "Satisfied Buyers",
            satisfiedRate: "Satisfied Rate",
        },
    },
    id: {
        heading: "Kami membuat perjalanan penerbangan Anda semudah mungkin",
        description:
            "Memulai perjalanan penerbangan bisa menjadi pengalaman yang mendebarkan, penuh dengan antisipasi untuk petualangan yang akan datang. Untuk memastikan perjalanan yang lancar dan menyenangkan, penting untuk mempersiapkan dengan baik.",
        bookingButton: "Pesan Sekarang",
        downloadButton: "Lihat Catalog",
        statistics: {
            yearsOperated: "Tahun Beroperasi",
            satisfiedBuyers: "Pembeli Puas",
            satisfiedRate: "Tingkat Kepuasan",
        },
    },
};

// translations/features.ts
export const featuresTranslations = {
    en: {
        heading: "Explore the Features of Our Platform",
        description:
            "Learn more about what makes us stand out and how we bring value to your business.",
        features: [
            {
                title: "Who Are We?",
                content:
                    "We are a team of passionate professionals dedicated to delivering innovative solutions and exceptional services to our customers worldwide.",
            },
            {
                title: "What Do We Sell?",
                content:
                    "We specialize in offering a wide range of high-quality products and services designed to meet the needs of modern businesses and individuals.",
            },
            {
                title: "Where to Find Us?",
                content:
                    "Our headquarters are located in the heart of the city, with multiple branches worldwide to serve our global customer base.",
            },
        ],
    },
    id: {
        heading: "Jelajahi Fitur Platform Kami",
        description:
            "Pelajari lebih lanjut tentang apa yang membuat kami menonjol dan bagaimana kami membawa nilai bagi bisnis Anda.",
        features: [
            {
                title: "Siapa Kami?",
                content:
                    "Kami adalah tim profesional yang bersemangat, berdedikasi untuk memberikan solusi inovatif dan layanan luar biasa kepada pelanggan kami di seluruh dunia.",
            },
            {
                title: "Apa yang Kami Jual?",
                content:
                    "Kami mengkhususkan diri dalam menawarkan berbagai produk dan layanan berkualitas tinggi yang dirancang untuk memenuhi kebutuhan bisnis dan individu modern.",
            },
            {
                title: "Di Mana Kami Berada?",
                content:
                    "Kantor pusat kami terletak di jantung kota, dengan banyak cabang di seluruh dunia untuk melayani basis pelanggan global kami.",
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
        generatorHeading: "Find and order the best generator for your needs",
        catalogButton: "Product Catalog",
        orderButton: "Order Now",
        startFrom: "Start from",
        joinHeading:
            "Talk to our sales team for accurate information or send your request via email.",
        emailPrompt: "Send an email now",
        emailPlaceholder: "Enter your email",
        submitButton: "Submit",
    },
    id: {
        generatorHeading:
            "Cari dan pesan mesin generator yang paling cocok untuk kebutuhanmu",
        catalogButton: "Katalog Produk",
        orderButton: "Pesan Sekarang",
        startFrom: "Mulai dari",
        joinHeading:
            "Berbicara dengan sales kami untuk mendapatkan info paling akurat, atau bisa kirimkan permintaanmu melalui email.",
        emailPrompt: "Kirimkan email sekarang",
        emailPlaceholder: "Masukan Email",
        submitButton: "Kirim",
    },
};

