-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 29 Des 2019 pada 08.37
-- Versi Server: 10.1.10-MariaDB
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mahasiswa`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `mahasiswa_aktif`
--

CREATE TABLE `mahasiswa_aktif` (
  `NPM` int(11) NOT NULL,
  `Nama` varchar(255) NOT NULL,
  `Kelas` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `mahasiswa_aktif`
--

INSERT INTO `mahasiswa_aktif` (`NPM`, `Nama`, `Kelas`) VALUES
(0, 'Afif', '3IA17'),
(50414385, 'Afif Makarim', '3IA17'),
(213414213, 'Afif', '3IA17'),
(555555555, 'Afif', '3IA17'),
(2147483647, 'Afif Makarim zzz', '6ia17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mahasiswa_aktif`
--
ALTER TABLE `mahasiswa_aktif`
  ADD PRIMARY KEY (`NPM`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
