import React, { createContext, useState, useContext } from 'react';

const translations = {
  en: {
    nav: { home: "Home", about: "About", project: "Project", contact: "Contact" },
    preloader: { choose: "Choose Your Path", frontend: "Frontend", data: "Data", developer: "Developer", engineer: "Engineer", or: "OR", welcome: "Welcome to my portfolio" },
    home: { title: "Home", download: "Download My Resume" },
    about: {
      title: "About Me", hi: "Hi, ALL", im: "I'm", tech: "Technical Stack",
      desc: "A {role} specializing in building modern web applications using Next.js and Vue.js, with robust cross-functional capabilities in Go (Golang) backend development. I have a proven track record of delivering end-to-end digital solutions, including Employee Self-Service (ESS) dashboards, Learning Management Systems (LMS), and Kestra Monitoring systems integrated with PostgreSQL."
    },
    projects: {
      title: "Projects", private: "Private Repository",
      kestra: "This project is a Next.js and PostgreSQL-based monitoring dashboard designed to monitor workflow execution status, logs, and daily activities on the Kestra orchestration platform in real-time.",
      lms: "This project is the User Interface (UI) development of a modern Learning Management System (LMS) platform designed to provide an interactive dashboard for various user roles (role-based access).",
      ess: "This project is the User Interface (UI) development of a Web-based Employee Dashboard. Its main focus is building a fast navigation system, informative display, and seamless user experience (UX) for internal needs.",
      pos: "This project is a SaaS POS (Point of Sale) Cashier System designed to manage business operations such as transactions, staff management, work shifts, and discounts.",
      naturu: "This project is a casual Naruto-themed website with a mix of Coding.",
      revou: "This is a mini coding assignment to create a Todo List at RevoU to get a certificate."
    },
    contact: { title: "Contact", success: "Message Sent!", successDesc: "Thank you, I will get back to you soon.", name: "Your name", email: "Your email", subject: "Subject", message: "Your Message", sending: "Sending...", send: "Send", error: "Oops! Something went wrong. Please try again." }
  },
  id: {
    nav: { home: "Beranda", about: "Tentang", project: "Proyek", contact: "Kontak" },
    preloader: { choose: "Pilih Jalur Anda", frontend: "Frontend", data: "Data", developer: "Developer", engineer: "Engineer", or: "ATAU", welcome: "Selamat datang di portofolio saya" },
    home: { title: "Beranda", download: "Unduh Resume Saya" },
    about: {
      title: "Tentang Saya", hi: "Halo Semua", im: "Saya", tech: "Teknologi",
      desc: "Seorang {role} yang berspesialisasi dalam membangun aplikasi web modern menggunakan Next.js dan Vue.js, dengan kemampuan lintas fungsi yang kuat dalam pengembangan backend Go (Golang). Saya memiliki rekam jejak yang terbukti dalam memberikan solusi digital ujung-ke-ujung (end-to-end), termasuk dasbor Employee Self-Service (ESS), Learning Management Systems (LMS), dan sistem Monitoring Kestra yang terintegrasi dengan PostgreSQL."
    },
    projects: {
      title: "Proyek", private: "Repositori Privat",
      kestra: "Proyek ini adalah dashboard monitoring berbasis Next.js dan PostgreSQL yang dirancang untuk memantau status eksekusi workflow, log, dan aktivitas harian pada platform orkestrasi Kestra secara real-time.",
      lms: "Proyek ini adalah pengembangan Antarmuka (UI) dari platform Learning Management System (LMS) modern yang dirancang untuk menyediakan dashboard interaktif bagi berbagai peran pengguna (role-based access).",
      ess: "Proyek ini adalah pengembangan Antarmuka (UI) Dashboard Karyawan berbasis web. Fokus utamanya adalah membangun sistem navigasi yang cepat, tampilan yang informatif, dan pengalaman pengguna (UX) yang mulus untuk kebutuhan internal.",
      pos: "Project ini adalah sebuah SaaS POS (Point of Sale) System Kasir yang dirancang untuk mengelola operasional bisnis seperti transaksi, manajemen staf, shift kerja, dan diskon.",
      naturu: "Project ini adalah website gabut bertema Naruto tapi ada perpaduan Codingan.",
      revou: "Ini Tugas mini coding membuat Todo List di Revou untuk mendapatkan sertifikat."
    },
    contact: { title: "Kontak", success: "Pesan Terkirim!", successDesc: "Terima kasih, saya akan segera menghubungi Anda.", name: "Nama Anda", email: "Email Anda", subject: "Subjek", message: "Pesan Anda", sending: "Mengirim...", send: "Kirim", error: "Ups! Terjadi kesalahan. Silakan coba lagi." }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
