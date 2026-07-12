import projFleetspace from "../assets/images/portfolio-images/proj-fleetspace.png";
import projSmartpower from "../assets/images/portfolio-images/proj-smartpower.png";
import projLookgateway from "../assets/images/portfolio-images/proj-lookgateway.png";
import projSmartpju from "../assets/images/portfolio-images/proj-smartpju.png";
import projNetworking from "../assets/images/portfolio-images/proj-networking.jpg";
import projSmartlighting from "../assets/images/portfolio-images/proj-smartlighting.png";
import blog1 from "../assets/images/blog/blog-1.jpg";
import blog2 from "../assets/images/blog/blog-2.jpg";
import blog3 from "../assets/images/blog/blog-3.jpg";
import blog4 from "../assets/images/blog/blog-4.jpg";
import certJavadwipa from "../assets/images/certificates/cert-javadwipa.png";
import certPertamina from "../assets/images/certificates/cert-pertamina.png";
import {
  faBehance,
  faDribbble,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const portfolioData = {
  personal: {
    name: "Moh. Khoirun Nafis",
    firstName: "Khoirun Nafis",
    title: "IoT & Web Developer | IT Support",
    location: "Tuban, Jawa Timur, Indonesia",
    email: "afisalamanah@gmail.com",
    phone: "083132563845",
    linkedin: "https://www.linkedin.com/in/moh-khoirun-nafis",
    instagram: "https://www.instagram.com/mh_navis?igsh=MXZ2cDg1c2RjdHl2aQ==",
    facebook: "https://www.facebook.com/afiz.nafis",
    github: "https://github.com/Rexshin1",
    shortBio:
      "Lulusan S1 Sistem Komputer Universitas Nahdlatul Ulama Sunan Giri (IPK 3.73) dengan keahlian komprehensif dalam integrasi perangkat keras & lunak, Fullstack Web Development (Laravel & React.js), IoT Systems, dan IT Support.",
    longBio:
      "Berkomitmen untuk mengaplikasikan kemampuan teknis dan analitis guna mendukung efisiensi operasional sistem teknologi. Berpengalaman merancang ekosistem Smart Monitoring multi-parameter, middleware kustom Python (Look Gateway), aplikasi Fleet Space Laravel dengan verifikasi QR Code, serta pemeliharaan infrastruktur jaringan dan server fisik.",
  },
  informationSummary: [
    {
      id: 1,
      title: "Academic GPA (Cumlaude)",
      description: "3.73",
    },
    {
      id: 2,
      title: "Key Systems & IoT Projects",
      description: "10+",
    },
    {
      id: 3,
      title: "Enterprise Users Supported",
      description: "50+",
    },
  ],
  roles: [
    {
      id: 1,
      title: "IoT & Smart Ecosystems (Python / C++)",
      description:
        "Mengembangkan middleware kustom Look Gateway menggunakan Python untuk koneksi real-time sensor/aktuator ke server, serta merancang ekosistem Smart Power, Smart Water, dan Smart Lighting berbasis mikrokontroler (ESP32/Arduino).",
    },
    {
      id: 2,
      title: "Full-Stack Web Development (Laravel / React)",
      description:
        "Membangun aplikasi enterprise berkinerja tinggi seperti Fleet Space (Manajemen Armada & Otomatisasi Booking Ruangan berfitur QR Code), dashboard pemantauan konsumsi daya real-time, dan sistem administrasi terpadu.",
    },
    {
      id: 3,
      title: "IT Support & Network Infrastructure",
      description:
        "Memberikan dukungan teknis menyeluruh (PC, Laptop, Hardware/Software), troubleshooting jaringan LAN & dasar Mikrotik, instalasi dan penyambungan (splicing) kabel fiber optik, serta monitoring berkala kondisi server fisik.",
    },
  ],
  experience: [
    {
      id: 1,
      company: "PT Javadwipa Duta Mandiri",
      location: "Kota Surabaya",
      period: "24 Nov 2025 - 23 Mei 2026",
      role: "Programmer (MagangHub / Kemnaker RI)",
      grade: "Predikat: SANGAT BAIK",
      credential: "No. Sertifikat: MN.035.011744.02.2025",
      highlights: [
        "Merancang & membangun aplikasi Manajemen Armada (Fleet Space) berbasis Laravel untuk digitalisasi pengajuan kendaraan & otomatisasi booking ruangan terintegrasi QR Code.",
        "Mengembangkan Multi-Parameter Smart Monitoring: ekosistem monitoring terpadu mencakup Smart Power, Smart Water, Smart Lighting, & Smart Environment dalam satu dashboard.",
        "Inovasi IoT Gateway (Look Gateway): middleware kustom berbasis Python sebagai penghubung cerdas antara jaringan sensor/aktuator di lapangan dengan server database real-time.",
        "Sistem Monitoring Daya: solusi pemantauan konsumsi energi listrik real-time untuk mendeteksi beban berlebih & visualisasi histori konsumsi daya via dashboard Laravel.",
      ],
    },
    {
      id: 2,
      company: "PT Pertamina EP Sukowati Field",
      location: "Kab. Tuban",
      period: "01 Mei 2024 - 30 Juni 2024",
      role: "IT Support Intern (Praktek Kerja Lapangan)",
      grade: "Verified Praktek Kerja Lapangan",
      credential: "No. Sertifikat: CERT-048/PPC62370/2024-S0",
      highlights: [
        "Memberikan dukungan teknis (IT Support) kepada lebih dari 50 karyawan terkait penyelesaian masalah pada perangkat keras dan perangkat lunak.",
        "Terlibat langsung dalam pemeliharaan infrastruktur jaringan, termasuk instalasi dan penyambungan (splicing) kabel fiber optik.",
        "Melakukan monitoring dan pengecekan rutin terhadap kondisi server fisik untuk memastikan kinerja optimal.",
        "Membantu proses administrasi IT dengan melakukan dokumentasi inventaris aset dan rekapitulasi permintaan barang.",
      ],
    },
  ],
  education: [
    {
      id: 1,
      institution: "Universitas Nahdlatul Ulama Sunan Giri",
      degree: "S1 Sistem Komputer",
      gpa: "IPK 3.73 (Cumlaude)",
      period: "Sep 2021 - Aug 2025",
      description:
        "Memberikan fondasi kuat dalam menganalisis dan mengintegrasikan sistem perangkat keras dan perangkat lunak, serta memecahkan masalah teknis dalam infrastruktur jaringan dan komputer.",
    },
  ],
  skills: {
    hardSkills: [
      { name: "Laravel (PHP)", level: "90%" },
      { name: "React.js", level: "85%" },
      { name: "Python (IoT & Gateway)", level: "88%" },
      { name: "C/C++ (Arduino IDE / ESP32)", level: "85%" },
      { name: "MySQL & PostgreSQL", level: "88%" },
      { name: "Git & GitHub", level: "85%" },
      { name: "Linux (Ubuntu) & Windows", level: "90%" },
      { name: "Troubleshooting LAN & Mikrotik", level: "82%" },
      { name: "Hardware & Fiber Optic Splicing", level: "80%" },
    ],
    softSkills: [
      "Pemecahan Masalah (Problem Solving)",
      "Berpikir Analitis (Analytical Thinking)",
      "Komunikasi Efektif",
      "Kerja Sama Tim (Teamwork)",
      "Ketelitian & High Attention to Detail",
      "Manajemen Waktu yang Baik",
    ],
  },
  projects: [
    {
      id: 1,
      image: projFleetspace,
      category: "WEB APP / LARAVEL",
      title: "Fleet Space - Fleet & Booking Management",
      description:
        "Aplikasi enterprise berbasis Laravel untuk digitalisasi pengajuan kendaraan operasional & otomatisasi booking ruangan yang terintegrasi dengan sistem verifikasi QR Code keamanan tinggi.",
      link: "#!",
    },
    {
      id: 2,
      image: projSmartpower,
      category: "IOT & WEB DASHBOARD",
      title: "Multi-Parameter Smart Monitoring System",
      description:
        "Ekosistem monitoring terpadu mencakup pemantauan Smart Power (analisis daya), Smart Water (debit air), Smart Lighting, dan Smart Environment dalam satu dashboard terpusat.",
      link: "#!",
    },
    {
      id: 3,
      image: projLookgateway,
      category: "IOT & PYTHON MIDDLEWARE",
      title: "Look Gateway - Custom IoT Middleware",
      description:
        "Middleware kustom berkinerja tinggi menggunakan Python sebagai penghubung cerdas antara jaringan sensor/aktuator di lapangan dengan server database berkinerja real-time & stabil.",
      link: "#!",
    },
    {
      id: 4,
      image: projSmartpju,
      category: "ENERGY & LARAVEL",
      title: "Real-Time Power Monitoring Dashboard",
      description:
        "Solusi pemantauan konsumsi energi listrik secara real-time untuk mendeteksi penggunaan daya berlebih, proteksi beban, dan memberikan visualisasi histori akurat via Laravel.",
      link: "#!",
    },
    {
      id: 5,
      image: projNetworking,
      category: "IT SUPPORT & NETWORKING",
      title: "Enterprise Network & Fiber Optic Infrastructure",
      description:
        "Instalasi infrastruktur jaringan LAN, pemeliharaan splicing kabel fiber optik, dan monitoring kesehatan server fisik untuk mendukung operasional >50 karyawan di PT Pertamina EP.",
      link: "#!",
    },
    {
      id: 6,
      image: projSmartlighting,
      category: "IOT & AUTOMATION",
      title: "Smart Lighting & Environment Automation",
      description:
        "Sistem otomatisasi pencahayaan dan kontrol suhu ruang berbasis mikrokontroler ESP32/Arduino yang terhubung protokol MQTT untuk penghematan energi berkelanjutan.",
      link: "#!",
    },
  ],
  testimonials: [
    {
      certImage: certJavadwipa,
      certTitle: "SERTIFIKAT PEMAGANGAN KEMNAKER RI / PT JAVADWIPA",
      certNo: "MN.035.011744.02.2025",
      certRole: "PROGRAMMER",
      certPeriod: "24 November 2025 s.d. 23 Mei 2026",
      certSigner: "Darmawansyah, S.T., M.Si (Dirjen Kemnaker) & Sulaeman, S.T (PT Javadwipa)",
      certGrade: "SANGAT BAIK",
      certIssuer: "KEMNAKER & PT JAVADWIPA DUTA MANDIRI",
      message:
        "Dedikasi Nafis dalam merancang arsitektur Fleet Space dan integrasi IoT Look Gateway sangat luar biasa. Kemampuan analisanya membantu menyederhanakan proses yang kompleks.",
      quote: `Kemampuan pemrograman Laravel yang digabungkan dengan pemahaman perangkat keras (IoT) membuat Nafis menjadi tech talent yang sangat langka dan berharga. Setiap delivery selesai tepat waktu dengan standar kualitas tinggi!`,
      name: "Sulaeman, S.T",
      designation: "Direktur, PT Javadwipa Duta Mandiri",
    },
    {
      certImage: certPertamina,
      certTitle: "SERTIFIKAT PRAKTEK KERJA LAPANGAN PERTAMINA EP",
      certNo: "CERT-048/PPC62370/2024-S0",
      certRole: "IT Support Intern",
      certPeriod: "01 Mei 2024 s.d. 30 Juni 2024",
      certSigner: "Arif Rahman Hakim (Manager Sukowati Field PT PERTAMINA EP)",
      certGrade: "VERIFIED PKL",
      certIssuer: "PT PERTAMINA EP SUKOWATI FIELD",
      message:
        "Selama program magang IT Support di Sukowati Field, Nafis menunjukkan kecekatan tinggi dalam troubleshooting problem hardware/software bagi >50 karyawan kami.",
      quote: `Tidak hanya jago di depan monitor, Nafis juga cepat tanggap saat terjun langsung dalam pemeliharaan jaringan fiber optik dan pemeriksaan server fisik. Sangat proaktif dan komunikatif.`,
      name: "Arif Rahman Hakim",
      designation: "Manager Sukowati Field, PT PERTAMINA EP",
    },
  ],
  blogs: [
    {
      id: 1,
      image: blog1,
      date: "15 May, 2026",
      comments: 38,
      title: "Membangun Middleware IoT Gateway Real-time dengan Python dan MQTT",
      link: "#!",
    },
    {
      id: 2,
      image: blog2,
      date: "28 Apr, 2026",
      comments: 42,
      title: "Digitalisasi Manajemen Armada dengan Laravel dan Verifikasi QR Code",
      link: "#!",
    },
    {
      id: 3,
      image: blog3,
      date: "10 Mar, 2026",
      comments: 29,
      title: "Arsitektur Smart Monitoring Multi-Parameter: dari ESP32 hingga Web Dashboard",
      link: "#!",
    },
    {
      id: 4,
      image: blog4,
      date: "20 Jun, 2024",
      comments: 15,
      title: "Best Practices Maintenance Server dan Splicing Fiber Optik di Enterprise IT",
      link: "#!",
    },
  ],
  socialIcons: [
    { icon: faLinkedin, link: "https://www.linkedin.com/in/moh-khoirun-nafis" },
    { icon: faInstagram, link: "https://www.instagram.com/mh_navis?igsh=MXZ2cDg1c2RjdHl2aQ==" },
    { icon: faFacebookF, link: "https://www.facebook.com/afiz.nafis" },
    { icon: faGithub, link: "https://github.com/Rexshin1" },
  ],
  contactAddresses: [
    {
      icon: faLocationDot,
      title: "Location",
      description: "Tuban, Jawa Timur, Indonesia",
    },
    {
      icon: faEnvelope,
      title: "My Email",
      description: "afisalamanah@gmail.com",
    },
    {
      icon: faPhone,
      title: "Call Me Now",
      description: "0831-3256-3845",
    },
  ],
};
