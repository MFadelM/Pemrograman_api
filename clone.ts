let data = [
    {
        jenis: 'Sedan',
        merek: 'Toyota',
        tahun: 2020,
        tipe: 'Camry',
    },
    {
        jenis: 'SUV',
        merek: 'Honda',
        tahun: 2019,
        tipe: 'CR-V',
    },
    {
        jenis: 'Hatchback',
        merek: 'Hyundai',
        tahun: 2021,
        tipe: 'i20',
    }
];

// Menampilkan semua data mobil dalam format tabel
console.table(data);

// TODO 1: Dapatkan semua data dengan tipe mobil tertentu
const getDataByType = (tipe) => data.find(car => car.tipe === tipe);
console.log("Data dengan tipe 'Camry':", getDataByType('Camry'));

// TODO 2: Dapatkan data dengan jenis mobil tertentu
const getDataByJenis = (jenis) => data.filter(car => car.jenis === jenis);
console.log("Data dengan jenis 'SUV':", getDataByJenis('SUV'));

// TODO 3: Dapatkan data dengan tahun tertentu
const getDataByTahun = (tahun) => data.filter(car => car.tahun === tahun);
console.log("Data dengan tahun 2020:", getDataByTahun(2020));
