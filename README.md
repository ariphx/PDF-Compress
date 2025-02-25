# PDF Compressor - Web-Based Tool

## 📌 Deskripsi
PDF Compressor adalah alat berbasis web yang memungkinkan pengguna untuk mengompres file PDF dengan ukuran yang dapat disesuaikan tanpa kehilangan kualitas secara signifikan. Dibangun menggunakan **Node.js, Express, dan Ghostscript**, alat ini memastikan bahwa ukuran file PDF dapat disesuaikan sesuai permintaan pengguna dengan pendekatan **adaptive compression**.

---

## 🔥 Fitur Utama
✅ **Kompresi PDF Berbasis Web** - Tidak perlu mengunduh software tambahan.
✅ **Custom Target Size** - Pilih ukuran file akhir dalam **MB atau KB**.
✅ **Adaptive Compression** - Sistem secara otomatis menyesuaikan kualitas untuk mencapai ukuran yang diinginkan.
✅ **Tampilan Modern & Responsif** - UI yang menarik dengan efek animasi.
✅ **Nama File Otomatis** - Nama file tetap sama dengan tambahan "_compressed.pdf".
✅ **Mendukung Hosting** - Dapat diunggah ke web hosting.

---

## 🛠 Instalasi & Menjalankan

### **1️⃣ Instalasi Dependencies**
Pastikan **Node.js** telah terinstall, lalu jalankan perintah berikut:
```sh
npm install
```

### **2️⃣ Menjalankan Server**
Jalankan server dengan perintah berikut:
```sh
node server.js
```
Server akan berjalan di **http://localhost:3000**

### **3️⃣ Menggunakan Aplikasi**
1. Buka browser dan akses **http://localhost:3000**.
2. Unggah file PDF yang ingin dikompres.
3. Pilih ukuran target (MB/KB) lalu tekan tombol **Compress PDF**.
4. File akan dikompres dan otomatis terunduh.

---

## 🏗 Teknologi yang Digunakan
- **Node.js** (Backend Processing)
- **Express.js** (Web Server)
- **Ghostscript** (PDF Compression Engine)
- **Multer** (File Upload Handling)
- **HTML, CSS, JavaScript** (Frontend)

---

## 📄 Struktur Folder
```
📁 pdf-compressor
├── 📂 public          # Folder untuk frontend (HTML, CSS, JS)
│   ├── index.html     # Tampilan utama aplikasi
│   ├── styles.css     # Styling UI
│   ├── script.js      # Logika frontend
├── 📂 uploads         # Temporary folder untuk file yang diupload
├── 📂 compressed      # Folder hasil kompresi PDF
├── server.js         # Backend utama (Node.js + Express)
├── package.json      # Konfigurasi dependencies
└── README.md         # Dokumentasi
```

---

## 🎯 TODO & Pengembangan
- [ ] Tambahkan fitur **batch compression** untuk banyak file sekaligus.
- [ ] Integrasi dengan **Cloud Storage** untuk penyimpanan file hasil kompresi.
- [ ] Penambahan opsi kompresi **high-quality vs low-quality**.

---

## 📜 Lisensi
MIT License - Gunakan secara bebas! 🚀

