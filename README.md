# buku-catatan

Pratikum Jobsheet 2
Buku Catatan Node.js
Proyek ini merupakan aplikasi catatan sederhana yang dibangun menggunakan Node.js. Aplikasi ini memanfaatkan beberapa package npm untuk fungsionalitas tambahan seperti fs, yargs, validator, dan chalk.
Langkah-langkah Penggunaan
Langkah 1: Membuat Catatan
1.	Buka terminal pada Visual Studio Code dan pastikan Anda berada di dalam direktori proyek (buku-catatan).
2.	Jalankan perintah node app.js tambah --judul="Judul Catatan" --isi="Isi Catatan" untuk menambahkan catatan baru.
3.	Perhatikan hasilnya pada terminal.
Langkah 2: Menampilkan Catatan
1.	Jalankan perintah node app.js list untuk menampilkan semua catatan yang telah ditambahkan.
2.	Perhatikan hasilnya pada terminal.
Langkah 3: Menghapus Catatan
1.	Jalankan perintah node app.js hapus --judul="Judul Catatan" untuk menghapus catatan berdasarkan judul.
2.	Perhatikan hasilnya pada terminal.
Langkah 4: Menampilkan Catatan Secara Spesifik
1.	Jalankan perintah node app.js baca --judul="Judul Catatan" untuk menampilkan isi catatan berdasarkan judul.
2.	Perhatikan hasilnya pada terminal.
Penggunaan Package npm
1. Validator
Package validator digunakan untuk melakukan validasi URL. Setelah menginstal, program memeriksa apakah URL https://proska.com valid.
2. Chalk
Package chalk versi 4.1.2 digunakan untuk memberikan warna dan variasi pada tampilan teks. Contoh penggunaan: chalk.blue.bold('warna biru sukses').
3. Nodemon
Package nodemon digunakan untuk memonitor perubahan dan menjalankan aplikasi secara otomatis saat ada perubahan.
4. Yargs
Package yargs membantu dalam analisis dan parsing argumen pada baris perintah. Perintah seperti tambah dan hapus diimplementasikan dengan menggunakan yargs.
Instalasi dan Konfigurasi
1.	Buka terminal pada Visual Studio Code dan pastikan Anda berada di dalam direktori proyek (buku-catatan).
2.	Jalankan perintah npm install untuk menginstal semua package yang diperlukan.
Menjalankan Aplikasi dengan Nodemon
1.	Pastikan nodemon terinstal dengan menjalankan perintah nodemon -v.
2.	Jika belum terinstal, jalankan npm install nodemon -g dan perintah nodemon app.js untuk menjalankan aplikasi.
Selamat mencoba dan eksplorasi fitur-fitur sederhana dalam aplikasi catatan ini!

