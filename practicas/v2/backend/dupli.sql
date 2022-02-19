-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 19, 2022 at 06:38 PM
-- Server version: 5.5.24-log
-- PHP Version: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `duplicados`
--

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE IF NOT EXISTS `productos` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `marca` varchar(50) NOT NULL,
  `modelo` varchar(50) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `img_id` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=28 ;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id_producto`, `marca`, `modelo`, `descripcion`, `img_id`) VALUES
(5, 'Brother', 'DCP-1612', 'Monocromatica - Simple faz', 'czsbimevqeenx8lpfofr'),
(20, 'Brother', 'DCP-L2550', 'Monocromatica - Simple faz', 'eyc17oxxo5hnte6qsuok'),
(21, 'Brother', 'HL-5440', 'Monocromatica - Simple faz- SIN ESCANER', 'nhq5huwzdc7swpwonauy'),
(22, 'HP', 'MFP 178', 'Monocromatica - Simple faz', 'aazqvvju8hj1vn85ybdu'),
(23, 'HP', '1202nw', 'Multifuncion color', 'q4ii4vl7gcxva6abjc6c'),
(24, 'Lexmark', 'MB2236', 'Multifuncion color', 'yu1fqetxmj4qdukqctua'),
(25, 'Ricoh', 'C305SFP', 'Monocromatica alta produccion', 'keormo7c1nbubnfobikx'),
(26, 'Samsung', 'SL M2070W', 'Monocromatica - Simple faz', 'tnujg0fjrdbqhmexnido'),
(27, 'Toshiba', 'B-EX4T3', 'Impresora industrual monocromatica', 'ppi2orpjm6wq9mxd2aox');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'pablo', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'agostina', '81dc9bdb52d04dc20036dbd8313ed055');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
