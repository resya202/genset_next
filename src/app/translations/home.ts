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

export const heroTranslations = {
    en: {
        heading: "We make your Flight journey as easy as possible",
        description:
            "Embarking on a flight journey can be an exhilarating experience, filled with anticipation for the adventures ahead. To ensure a smooth and enjoyable trip, it's important to prepare adequately.",
        bookingButton: "Booking Now",
        downloadButton: "Download App",
    },
    id: {
        heading: "Kami membuat perjalanan penerbangan Anda semudah mungkin",
        description:
            "Memulai perjalanan penerbangan bisa menjadi pengalaman yang mendebarkan, penuh dengan antisipasi untuk petualangan yang akan datang. Untuk memastikan perjalanan yang lancar dan menyenangkan, penting untuk mempersiapkan dengan baik.",
        bookingButton: "Pesan Sekarang",
        downloadButton: "Unduh Aplikasi",
    },
};
