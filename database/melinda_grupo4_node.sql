-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-melinda.alwaysdata.net
-- Generation Time: Jul 01, 2024 at 01:56 AM
-- Server version: 10.6.17-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `melinda_grupo4_node`
--

-- --------------------------------------------------------

--
-- Table structure for table `alimentacion`
--

CREATE TABLE `alimentacion` (
  `id` int(200) NOT NULL,
  `tipo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alimentacion`
--

INSERT INTO `alimentacion` (`id`, `tipo`) VALUES
(0, '-Seleccione-'),
(1, 'No tengo'),
(2, 'Vegana'),
(3, 'Vegetariana'),
(4, 'Sin lacteos'),
(5, 'Sin TACC');

-- --------------------------------------------------------

--
-- Table structure for table `entretenimiento`
--

CREATE TABLE `entretenimiento` (
  `id` int(200) NOT NULL,
  `entretenimientos` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `entretenimiento`
--

INSERT INTO `entretenimiento` (`id`, `entretenimientos`) VALUES
(1, 'Karaoke'),
(2, 'Juego de la silla'),
(3, 'Estirar la cuerda'),
(4, 'Competición de baile'),
(5, 'Cabina de fotos'),
(6, 'Transformista humor'),
(7, 'Robot led'),
(8, 'Banda musical');

-- --------------------------------------------------------

--
-- Table structure for table `invitados`
--

CREATE TABLE `invitados` (
  `id` int(200) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `asistencia` varchar(50) NOT NULL,
  `login_id` int(200) NOT NULL,
  `prefAlimentaria_id` int(200) DEFAULT NULL,
  `entretenimiento_id` int(200) DEFAULT NULL,
  `cancion` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `invitados`
--

INSERT INTO `invitados` (`id`, `nombre`, `asistencia`, `login_id`, `prefAlimentaria_id`, `entretenimiento_id`, `cancion`) VALUES
(12, 'Marcela Pérez', 'Si', 2, 5, 8, 'rock'),
(13, 'Lucas Dominguez', 'Si', 3, 3, 7, 'Summer'),
(31, 'José Fernandez', 'Si', 1, 2, 3, 'The Scientist'),
(32, 'Marcelo Contreras', 'No', 1, NULL, NULL, 'folklore'),
(33, 'Lucas Díaz', 'Si', 1, 4, 3, 'Hola'),
(34, 'Lucía Pérez', 'No', 1, NULL, NULL, NULL),
(36, 'Marcelo Arias', 'Si', 1, 3, 4, 'folklore'),
(37, 'Martin Ferrari', 'No', 1, 2, NULL, 'cumbia'),
(38, 'Mariano Werner', 'No', 1, NULL, NULL, NULL),
(42, 'José Romano', 'Si', 3, 1, 7, 'Marry You'),
(43, 'Marcos Peña', 'Si', 1, 2, 1, 'Los Palmeras'),
(44, 'Larisa Duarte', 'Si', 3, NULL, 2, 'Mon Amour'),
(46, 'Micaela Duarte', 'Si', 3, NULL, 5, 'Marry You'),
(47, 'Juan Carlos Farfán', 'Si', 3, 1, 7, 'Folclore'),
(50, 'Laura Romano', 'Si', 3, 5, NULL, 'Love Story'),
(51, 'Roberta Dauría', 'No', 3, NULL, NULL, NULL),
(53, 'Malena Ferrari', 'si, alli estaré', 1, 3, 4, 'Tu y yo (Emilia Mernes)'),
(54, 'Ricardo Arias', 'Si, alli estaré', 2, 5, 8, 'rock');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(200) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `dni` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `mail`, `dni`) VALUES
(1, 'rg@hotmail.com', '1234'),
(2, 'mp@gmail.com', '1234'),
(3, 'jf@yahoo.com', '1234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alimentacion`
--
ALTER TABLE `alimentacion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `entretenimiento`
--
ALTER TABLE `entretenimiento`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invitados`
--
ALTER TABLE `invitados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `login` (`login_id`),
  ADD KEY `prefAlimentaria` (`prefAlimentaria_id`),
  ADD KEY `entretenimiento` (`entretenimiento_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alimentacion`
--
ALTER TABLE `alimentacion`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `entretenimiento`
--
ALTER TABLE `entretenimiento`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `invitados`
--
ALTER TABLE `invitados`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `invitados`
--
ALTER TABLE `invitados`
  ADD CONSTRAINT `entretenimiento` FOREIGN KEY (`entretenimiento_id`) REFERENCES `entretenimiento` (`id`),
  ADD CONSTRAINT `login` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`),
  ADD CONSTRAINT `prefAlimentaria` FOREIGN KEY (`prefAlimentaria_id`) REFERENCES `alimentacion` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
