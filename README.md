## Cloudxier Simple Fish Blog by Raditya Dwisatrio Santoso

### LINK DEPLOY: 
<p> Tidak disirkulasikan, hanya diperuntukkan kepada Recruiter Cloudxier </p>
  
### Backend Report
<p>Memulai pemrograman dengan menginstall Git Bash untuk memasukkan script ke dalam repository dan dependencies yang dibutuhkan dalam Text Editor (VSCode). Terdapat kendala saat melakukan Git dan inisialisasi Sequelize ORM, Git tidak dapat berjalan karena script berada pada file directory yang salah (tidak terdapat folder Git pada directory tersebut). Sequelize juga tidak dapat diinisiasikan karena terdapat scope yang membatasi, dengan menjalankan Set-ExecutionPolicy RemoteSigned -Scope CurrentUser pada terminal akhirnya Sequelize dapat dijalankan. Pada pembuatan aplikasi kali ini menggunakan database PostgreSQL dan menggunakan GUI Dbeaver. Bagian tersulit dirasakan saat pengimplementasian ImageKit, sering kali terjadi error dikarenakan buffer dari multer yang tidak berjalan sebagaimana mesti nya. Tahap terakhir adalah deploying server menggunakan Heroku, tahapan ini dapat dikatakan cukup tricky karena perlu diperhatikan remote branch nya berada. Server akhirnya berhasil di deploy pada hari Minggu, 2 Desember 2022.
</p>

### Frontend Report
<p>Bagian ini adalah tahapan yang paling sulit, karena kemampuan yang dimiliki dalam menggunakan React hanya bisa sampai menampilkan “Hello World” saja. Apresiasi kepada seluruh teman-teman Hacktiv8 yang bersedia membantu untuk mengajari materi React ini dalam waktu yang sangat singkat. Materi seperti React Router dan Hooks seperti bisa dipelajari dalam sekejap, bahkan sudah menggunakan framework ANTD design untuk mempercantik tampilan website. Bagian tersulit pada tahapan ini adalah pada bagian Method PUT, dengan melakukan tahapan-tahapan tertentu akhirnya fitur berjalan sesuai dengan ekspektasi, bahkan Image dapat terpopulate dengan sedikit memberikan kondisional logic pada bagian Server dan Client. Tahapan deploy dapat dikatakan cukup mudah, tetapi kadang tidak sesuai dengan ekspektasi jika menggunakan media hosting Vercel, Netlify, dan sebagainya. Aplikasi akhirnya dapat terdeploy menggunakan firebase pada hari Senin, 3 Desember 2022 
</p>
