
export type CoverImageObjects = {
    [locale: string]: {
        title: string;
        description: string;
    };
};


export const aboutCoverImage: CoverImageObjects = {
    en: {
        title: "About Us",
        description: "BPN Indonesia is a great company",
    },
    id: {
        title: "Tentang Kami",
        description: "BPN Indonesia adalah perusahaan besar",
    },
};



export const achievementTranslations = {
    en: {
        sectionTitle: "About Us",
        heading: "The Tale of Our Achievement Story",
        description:
            "Our achievement story is a testament to teamwork and perseverance. Together, we’ve overcome challenges, celebrated victories, and created a narrative of progress and success.",
        stats: [
            {
                title: "33+ Years",
                description: "Influencing Digital Landscapes Together",
            },
            {
                title: "125+ Projects",
                description: "Excellence Achieved Through Success",
            },
            {
                title: "26+ Awards",
                description: "Our Dedication to Innovation Wins Understanding",
            },
            {
                title: "99% Happy Clients",
                description: "Mirrors our Focus on Client Satisfaction",
            },
        ],
        readMore: "Read More",
    },
    id: {
        sectionTitle: "Tentang Kami",
        heading: "Kisah Keberhasilan Kami",
        description:
            "Kisah keberhasilan kami adalah bukti dari kerja tim dan ketekunan. Bersama-sama, kami telah mengatasi tantangan, merayakan kemenangan, dan menciptakan cerita tentang kemajuan dan keberhasilan.",
        stats: [
            {
                title: "33+ Tahun",
                description: "Memengaruhi Lanskap Digital Bersama",
            },
            {
                title: "125+ Proyek",
                description: "Keberhasilan yang Dicapai Melalui Kesempurnaan",
            },
            {
                title: "26+ Penghargaan",
                description: "Dedikasi Kami untuk Inovasi Mendapatkan Pengakuan",
            },
            {
                title: "99% Klien Bahagia",
                description: "Mencerminkan Fokus Kami pada Kepuasan Klien",
            },
        ],
        readMore: "Baca Selengkapnya",
    },
};
