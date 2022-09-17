-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 09, 2022 at 07:18 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecomm`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(100) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `file_path` varchar(200) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `price` varchar(200) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `file_path`, `description`, `price`, `updated_at`, `created_at`) VALUES
(3, NULL, NULL, NULL, NULL, '2022-09-02 03:17:36', '2022-08-31 09:53:39'),
(5, 'Vivo', 'products/sZEijzcmxnf6jj9BdUh5YafedSCZ5pAIq2csiJD1.png', 'Good', '132231', '2022-08-31 10:50:32', '2022-08-31 10:50:32');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(12) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(2, 'adnan', 'fahimadnan@gmail.com', '$2y$10$ecMhRwezG013mk9rfM7Te..UHpVRi5wY.yfnzyKSh1lJSsFSgcVIW'),
(3, 'adnan', 'fahimadnan@gmail.com', '$2y$10$SPmf.Ki0pAQ03RpRzJlYvee/4QQD8Sfak4xRrht0KgyGwV/bRZsYu'),
(4, 't', 'ttt', '$2y$10$Xtu5CPufXgPE7adqdDQ6/.NLwCFfawNolp.qyNFOSZqnF.f1u0xmO'),
(5, 'm', 'm', '$2y$10$6tUUIRNqgi7xdr4LqI31ne3pWZoFAIjBbSBp8RoRSt8O4QS4X5h1y'),
(6, 'adnan', 'adnan@gmail.com', '$2y$10$C0E1ok3YPKleUsQpheuNl.W0drp86hKG/CQ8a8LxNDoHJwF7/j5Ny');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
