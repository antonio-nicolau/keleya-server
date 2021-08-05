-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 05-Ago-2021 às 22:03
-- Versão do servidor: 5.7.31
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `keleya`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `babyBirthDate` datetime NOT NULL,
  `onboardingDone` tinyint(1) DEFAULT NULL,
  `acceptPrivatePolicy` tinyint(1) NOT NULL,
  `acceptTermConditions` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `babyBirthDate`, `onboardingDone`, `acceptPrivatePolicy`, `acceptTermConditions`) VALUES
(1, 'test react', 'adilson@gmail.com', '$2b$12$gaR6FlkBPLzHeUrVOIPLTun/Ir/tkacR1vogys1JtrVXJ9L/TIz9i', '2021-07-31 22:20:58', NULL, 1, 1),
(2, 'Adilson2', 'adilson2@gmail.com', '$2b$12$6NDzwD8RPmr9nqQd1wQs3./1fYmGsEWEgSrSii4soW3t6OX6A0fXe', '2021-07-31 22:22:48', NULL, 1, 1),
(3, 'Adilson3', 'adilson3@gmail.com', '$2b$12$2lKrqEaMsx0Z1CGOnMCACuGc4bL6gohCce8C7stWAizUUHJ6IWf4W', '2021-07-31 22:24:36', 1, 1, 1),
(4, 'yolanda', 'joyce@gmail.com', '$2b$12$wR0WjItbIep4tOU3lP752OzH6FtIVMdtKY4SfA4gJkjWRvxCnt2AK', '2021-07-29 00:00:00', 1, 1, 1),
(5, 'test1628197535694', 'joyce1627864175133@gmail.com', '$2b$12$.6PbpY4kYWGnENshHtrMUeXSswPzSoOGXvsOSDL2YGz6DeGRapING', '2021-08-05 21:05:35', 1, 1, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
