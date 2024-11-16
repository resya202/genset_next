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


