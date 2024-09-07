const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;
    const response = getBotResponse(message);
    res.json({ reply: response });
  } catch (error) {
    console.error('Chatbot error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

function getBotResponse(message) {
  const lowercaseMessage = message.toLowerCase();
  
  if (lowercaseMessage.includes('lokasi') || lowercaseMessage.includes('alamat')) {
    return "Kantor pusat kami berlokasi di Jl. Raya Canggu, Kerobokan Kaja, Kec. Kuta Utara, Kabupaten Badung, Bali 80361.";
  } 
  else if (lowercaseMessage.includes('jam') || lowercaseMessage.includes('operasional') || lowercaseMessage.includes('buka')) {
    return "Kami beroperasi Senin-Jumat pukul 08.00-17.00 WITA, di Jl. Raya Canggu, Kerobokan Kaja, Kec. Kuta Utara, Kabupaten Badung, Bali 80361.";
  } 
  else if (lowercaseMessage.includes('layanan') || lowercaseMessage.includes('produk')) {
    return "Kami menyediakan berbagai layanan perbankan seperti tabungan, deposito, dan kredit. Layanan mana yang ingin Anda ketahui lebih lanjut ? ketik ( 'tabungan' /  'deposito' / 'kredit' )";
  } 
  else if (lowercaseMessage.includes('tabungan')) {
    return "BPR Cahaya Bina Putra menawarkan 3 jenis tabungan dengan bunga kompetitif, yakni; Tabungan CBP, Tabungan Sibulan, dan Tabungan Berjangka. Apa ada layanan yang anda ingin ketahui lebih lanjut?, jika iya ketik ('cbp'/ 'sibulan'/ 'berjangka'?)";
  } 
  else if ( lowercaseMessage.includes('cbp')) {
    return "Tabungan CBP adalah produk tabungan yang menawarkan keamanan dan kenyamanan transaksi tanpa biaya tambahan. Dengan fasilitas bebas biaya RTGS dan administrasi bulanan, tabungan ini cocok untuk Anda yang menginginkan bunga kompetitif tanpa biaya tambahan. Tidak memerlukan setoran awal dan memiliki saldo minimum yang terjangkau.";
  } 
  else if (lowercaseMessage.includes('sibulan')) {
    return "Tabungan Sibulan adalah jenis tabungan yang dirancang untuk memberikan bunga tinggi dengan biaya penutupan rekening yang ringan. Tabungan ini memungkinkan Anda untuk melakukan top-up setoran bulanan sesuai kebutuhan, dengan bunga yang bersaing dibandingkan dengan produk tabungan berjangka lainnya.";
  } 
  else if (lowercaseMessage.includes('berjangka')) {
    return "Tabungan Berjangka adalah produk simpanan yang menawarkan bunga tinggi hingga 5% per tahun dengan setoran awal minimal yang terjangkau. Tabungan ini cocok untuk Anda yang ingin mengelola keuangan dengan bunga yang kompetitif dan fasilitas autodebet dari rekening tabungan. Dengan jangka waktu yang dapat disesuaikan dan dijamin oleh LPS, tabungan ini memberikan keamanan tambahan untuk dana Anda.";
  } 
  else if (lowercaseMessage.includes('kredit') || lowercaseMessage.includes('pinjaman')) {
    return "Kami menyediakan 3 jenis kredit, yakni: Kredit Investasi, Kredit Konsumtif, dan Kredit Modal Kerja. Apa ada layanan yang anda ingin ketahui lebih lanjut?, jika iya ketik ('investasi'/ 'konsumtif'/ 'modal'?)";
  } 
  else if (lowercaseMessage.includes('investasi')) {
    return "Kredit Investasi adalah pinjaman yang diberikan untuk tujuan investasi, seperti membeli peralatan usaha, properti, atau memperluas bisnis. Kredit ini membantu Anda mendapatkan modal untuk investasi yang bisa meningkatkan keuntungan atau produktivitas di masa depan.";
  } 
  else if (lowercaseMessage.includes('konsumtif')) {
    return "Kredit Konsumtif adalah pinjaman yang diberikan untuk kebutuhan konsumsi sehari-hari, seperti membeli barang-barang pribadi, liburan, atau keperluan konsumsi lainnya. Kredit ini membantu Anda memenuhi kebutuhan pribadi yang tidak terkait langsung dengan investasi atau bisnis.";
  } 
  else if (lowercaseMessage.includes('modal')) {
    return "Kredit Modal Kerja adalah pinjaman yang diberikan untuk membantu perusahaan atau usaha dalam membiayai kebutuhan sehari-hari, seperti membeli bahan baku, membayar gaji karyawan, atau menutupi biaya operasional lainnya. Kredit ini bertujuan untuk memastikan perusahaan memiliki dana yang cukup untuk menjalankan aktivitas usahanya dengan lancar.";
  } 
  else if (lowercaseMessage.includes('deposito')) {
    return "BPR Cahaya Bina Putra menawarkan 3 jenis deposito, yakni: Deposito Berhadiah Langsung, Deposito Bisnis, Deposito CBP. Apa ada layanan yang anda ingin ketahui lebih lanjut?, jika iya ketik ('berhadiah'/ 'bisnis'/ 'cahayabina'?)";
  }
  else if (lowercaseMessage.includes('berhadiah')) {
    return "Deposito Berhadiah Langsung adalah produk simpanan berjangka di mana nasabah menyimpan uang untuk jangka waktu tertentu dan berkesempatan memenangkan hadiah menarik. Produk ini menawarkan bunga yang kompetitif dan fleksibilitas dalam jangka waktu simpanan, mulai dari minimal 1 tahun. Dana yang disimpan juga dijamin aman oleh LPS.";
  }
  else if (lowercaseMessage.includes('bisnis')) {
    return "Deposito Bisnis adalah produk simpanan berjangka yang dirancang untuk kebutuhan bisnis dengan bunga tinggi dan fleksibilitas dalam pencairan dana. Deposito ini menawarkan bunga yang tinggi hingga 5% per tahun dan bebas biaya transaksi, dengan pilihan untuk memperpanjang deposito secara otomatis.";
  }
  else if (lowercaseMessage.includes('cahayabina')) {
    return "Deposito CBP adalah produk simpanan berjangka dengan jangka waktu fleksibel mulai dari 1 hingga 12 bulan. Deposito ini menawarkan bunga yang dihitung berdasarkan jumlah hari sebenarnya dan berbagai fasilitas tambahan, dengan keuntungan dan keamanan yang terjamin.";
  }
  else if (lowercaseMessage.includes('bunga') || lowercaseMessage.includes('interest')) {
    return "Suku bunga kami bervariasi tergantung produk. Untuk tabungan, kami menawarkan bunga hingga 3% per tahun. Deposito kami menawarkan bunga hingga 6.5% per tahun. Sedangkan untuk kredit, suku bunga mulai dari 0.9% per bulan.";
  }
  else if (lowercaseMessage.includes('syarat') || lowercaseMessage.includes('dokumen')) {
    return "Syarat pembukaan rekening atau pengajuan kredit umumnya meliputi KTP, NPWP, dan slip gaji/bukti penghasilan.";
  }
  else if (lowercaseMessage.includes('kontak') || lowercaseMessage.includes('hubungi')) {
    return "Anda dapat menghubungi customer service kami di nomor 0361-9876543. Kami juga memiliki layanan WhatsApp di 08123456789. ";
  }
  else if (lowercaseMessage.includes('terima kasih') || lowercaseMessage.includes('thanks') || lowercaseMessage.includes('terimakasih') || lowercaseMessage.includes('terimakasi')) {
    return "Terima kasih kembali! Senang bisa membantu Anda. Apakah ada hal lain yang ingin Anda tanyakan?";
  }
  else if (lowercaseMessage.includes('promo') || lowercaseMessage.includes('rekomendasi')) {
    return "Kami memiliki 3 program promo menarik untuk Anda. Untuk informasi lebih lengkap dan persyaratannya, silakan hubungi langsung customer service kami di nomor 0361-9876543 atau WhatsApp di 08123456789.";
  }
  else {
    return "Terima kasih atas pertanyaan Anda. Untuk informasi lebih lanjut, silakan hubungi customer service kami melalui WhatsApp di nomor 087862109106. Anda juga dapat menghubungi kami melalui telepon di nomor 0361-9876543 atau kunjungi langsung kantor kami.";
  }
}

module.exports = router;