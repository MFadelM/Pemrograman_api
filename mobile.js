let data = [
    {
        jenis: 'Sedan',
        merek: 'Toyota',
        tahun: 2020,
        tipe: 'Camry',
        warna: 'Hitam',
        harga: 400000000
    },
    {
        jenis: 'SUV',
        merek: 'Honda',
        tahun: 2019,
        tipe: 'CR-V',
        warna: 'Putih',
        harga: 500000000
    },
    {
        jenis: 'Hatchback',
        merek: 'Hyundai',
        tahun: 2021,
        tipe: 'i20',
        warna: 'Merah',
        harga: 300000000
    },
    {
        jenis: 'Sedan',
        merek: 'BMW',
        tahun: 2022,
        tipe: 'Series 3',
        warna: 'Biru',
        harga: 700000000
    }
];

// Menampilkan semua data mobil dalam format tabel
console.table(data);

// TODO 1: Dapatkan semua data dengan merek mobil tertentu
const getDataByMerek = (merek) => data.filter(car => car.merek === merek);
console.log("Data dengan merek 'Toyota':", getDataByMerek('Toyota'));

// TODO 2: Dapatkan data dengan jenis mobil tertentu
const getDataByJenis = (jenis) => data.filter(car => car.jenis === jenis);
console.log("Data dengan jenis 'Sedan':", getDataByJenis('Sedan'));

// TODO 3: Dapatkan data mobil yang memiliki harga lebih dari angka tertentu
const getDataByHarga = (harga) => data.filter(car => car.harga > harga);
console.log("Data dengan harga lebih dari 500 juta:", getDataByHarga(500000000));

// TODO 4: Dapatkan data dengan tahun produksi tertentu
const getDataByTahun = (tahun) => data.filter(car => car.tahun === tahun);
console.log("Data dengan tahun 2020:", getDataByTahun(2020));

// TODO 5: Dapatkan semua mobil yang berwarna tertentu
const getDataByWarna = (warna) => data.filter(car => car.warna === warna);
console.log("Data dengan warna 'Merah':", getDataByWarna('Merah'));
