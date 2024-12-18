import { useState } from 'react';

const Pengeluaran = () => {
  const [pengeluaran, setPengeluaran] = useState('');
  const [totalPengeluaran, setTotalPengeluaran] = useState(0);
  const [listPengeluaran, setListPengeluaran] = useState([]);

  // Fungsi untuk memformat angka menjadi mata uang (IDR)
  const formatMataUang = (jumlah) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(jumlah);
  };

  const handleTambahPengeluaran = () => {
    const jumlahPengeluaran = parseFloat(pengeluaran); // Pastikan pengeluaran berupa angka

    if (isNaN(jumlahPengeluaran) || jumlahPengeluaran <= 0) {
      alert('Masukkan jumlah pengeluaran yang valid!');
      return;
    }

    setListPengeluaran([...listPengeluaran, jumlahPengeluaran]);
    setTotalPengeluaran(prevTotal => prevTotal + jumlahPengeluaran);
    setPengeluaran(''); // Reset input setelah ditambahkan
  };

  // Fungsi untuk mereset seluruh data
  const handleReset = () => {
    setPengeluaran('');
    setTotalPengeluaran(0);
    setListPengeluaran([]);
  };

  return (
    <div className="container">
      <h1>Penghitung Pengeluaran Harian</h1>

      <div>
        <label>Masukkan Pengeluaran: </label>
        <input
          type="number"
          value={pengeluaran}
          onChange={(e) => setPengeluaran(e.target.value)}
        />
        <button onClick={handleTambahPengeluaran}>Tambah Pengeluaran</button>
      </div>

      <h2>Total Pengeluaran: {formatMataUang(totalPengeluaran)}</h2>

      <div>       
        <h3>Daftar Pengeluaran:</h3>
        <ul>
          {listPengeluaran.map((item, index) => (
            <li key={index}>
              Pengeluaran {index + 1}: {formatMataUang(item)}
            </li>
          ))}
        </ul>
      </div>

      <div>
        {/* Tombol Reset */}
        <button type="reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Pengeluaran;