-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 22 mai 2024 à 12:39
-- Version du serveur : 8.0.36
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `examen`
--

-- --------------------------------------------------------

--
-- Structure de la table `classes`
--

CREATE TABLE `classes` (
  `id` int NOT NULL,
  `nom` varchar(255) NOT NULL,
  `departementId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `niveau` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `classes`
--

INSERT INTO `classes` (`id`, `nom`, `departementId`, `createdAt`, `updatedAt`, `niveau`) VALUES
(2, 'devops', 2, '2024-04-20 10:18:57', '2024-04-20 10:18:57', 'premier année'),
(23, 'ti13', 2, '2024-05-10 16:34:55', '2024-05-10 16:34:55', 'premiére année'),
(24, 'ti11', 2, '2024-05-10 16:35:11', '2024-05-10 16:35:11', 'premiére année'),
(25, 'ti12', 2, '2024-05-10 16:35:27', '2024-05-10 16:35:27', 'premiére année'),
(26, 'rsi', 2, '2024-05-10 16:35:52', '2024-05-10 16:35:52', 'deuxieme annee'),
(27, 'mdw', 2, '2024-05-10 16:36:04', '2024-05-10 16:36:04', 'deuxieme annee'),
(28, ' devops', 2, '2024-05-10 16:47:51', '2024-05-10 16:47:51', 'deuxieme annee master');

-- --------------------------------------------------------

--
-- Structure de la table `departements`
--

CREATE TABLE `departements` (
  `id` int NOT NULL,
  `nom` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `departements`
--

INSERT INTO `departements` (`id`, `nom`, `createdAt`, `updatedAt`) VALUES
(2, 'Département informatique', '2024-04-20 08:42:49', '2024-04-20 08:42:49'),
(6, 'Département  genie civil', '2024-05-10 16:29:46', '2024-05-10 16:29:46'),
(7, 'Département  mecanique', '2024-05-10 16:33:47', '2024-05-10 16:33:47');

-- --------------------------------------------------------

--
-- Structure de la table `enseignants`
--

CREATE TABLE `enseignants` (
  `id` int NOT NULL,
  `matricule` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `examenclasses`
--

CREATE TABLE `examenclasses` (
  `id` int NOT NULL,
  `examenId` int DEFAULT NULL,
  `classeId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `examenclasses`
--

INSERT INTO `examenclasses` (`id`, `examenId`, `classeId`, `createdAt`, `updatedAt`) VALUES
(1, 70, 26, '2024-05-19 16:42:24', '2024-05-19 16:42:24'),
(2, 70, 27, '2024-05-19 16:42:24', '2024-05-19 16:42:24'),
(3, 71, 26, '2024-05-19 16:42:24', '2024-05-19 16:42:24'),
(4, 71, 27, '2024-05-19 16:42:24', '2024-05-19 16:42:24'),
(5, 72, 26, '2024-05-20 15:32:07', '2024-05-20 15:32:07'),
(6, 72, 27, '2024-05-20 15:32:07', '2024-05-20 15:32:07'),
(7, 73, 26, '2024-05-20 15:32:07', '2024-05-20 15:32:07'),
(8, 73, 27, '2024-05-20 15:32:07', '2024-05-20 15:32:07'),
(9, 77, 26, '2024-05-20 15:54:25', '2024-05-20 15:54:25'),
(10, 77, 27, '2024-05-20 15:54:25', '2024-05-20 15:54:25'),
(11, 78, 26, '2024-05-20 15:54:26', '2024-05-20 15:54:26'),
(12, 78, 27, '2024-05-20 15:54:26', '2024-05-20 15:54:26'),
(13, 82, 26, '2024-05-20 16:07:14', '2024-05-20 16:07:14'),
(14, 82, 27, '2024-05-20 16:07:14', '2024-05-20 16:07:14'),
(15, 83, 26, '2024-05-20 16:07:14', '2024-05-20 16:07:14'),
(16, 83, 27, '2024-05-20 16:07:14', '2024-05-20 16:07:14'),
(17, 87, 26, '2024-05-20 16:09:39', '2024-05-20 16:09:39'),
(18, 87, 27, '2024-05-20 16:09:39', '2024-05-20 16:09:39'),
(19, 88, 26, '2024-05-20 16:09:39', '2024-05-20 16:09:39'),
(20, 88, 27, '2024-05-20 16:09:39', '2024-05-20 16:09:39'),
(21, 92, 26, '2024-05-20 16:13:52', '2024-05-20 16:13:52'),
(22, 92, 27, '2024-05-20 16:13:52', '2024-05-20 16:13:52'),
(23, 93, 26, '2024-05-20 16:13:52', '2024-05-20 16:13:52'),
(24, 93, 27, '2024-05-20 16:13:53', '2024-05-20 16:13:53'),
(25, 97, 26, '2024-05-20 18:05:38', '2024-05-20 18:05:38'),
(26, 97, 27, '2024-05-20 18:05:38', '2024-05-20 18:05:38'),
(27, 98, 26, '2024-05-20 18:05:38', '2024-05-20 18:05:38'),
(28, 98, 27, '2024-05-20 18:05:38', '2024-05-20 18:05:38'),
(29, 102, 26, '2024-05-20 18:06:36', '2024-05-20 18:06:36'),
(30, 102, 27, '2024-05-20 18:06:36', '2024-05-20 18:06:36'),
(31, 103, 26, '2024-05-20 18:06:36', '2024-05-20 18:06:36'),
(32, 103, 27, '2024-05-20 18:06:36', '2024-05-20 18:06:36'),
(33, 107, 26, '2024-05-20 20:11:44', '2024-05-20 20:11:44'),
(34, 107, 27, '2024-05-20 20:11:44', '2024-05-20 20:11:44'),
(35, 108, 26, '2024-05-20 20:11:44', '2024-05-20 20:11:44'),
(36, 108, 27, '2024-05-20 20:11:44', '2024-05-20 20:11:44'),
(37, 112, 26, '2024-05-20 20:26:34', '2024-05-20 20:26:34'),
(38, 112, 27, '2024-05-20 20:26:34', '2024-05-20 20:26:34'),
(39, 113, 26, '2024-05-20 20:26:34', '2024-05-20 20:26:34'),
(40, 113, 27, '2024-05-20 20:26:34', '2024-05-20 20:26:34'),
(41, 121, 23, '2024-05-21 22:02:18', '2024-05-21 22:02:18'),
(42, 121, 24, '2024-05-21 22:02:18', '2024-05-21 22:02:18'),
(43, 121, 25, '2024-05-21 22:02:18', '2024-05-21 22:02:18'),
(44, 122, 23, '2024-05-21 22:02:18', '2024-05-21 22:02:18'),
(45, 122, 24, '2024-05-21 22:02:18', '2024-05-21 22:02:18'),
(46, 122, 25, '2024-05-21 22:02:18', '2024-05-21 22:02:18'),
(47, 123, 23, '2024-05-21 22:02:18', '2024-05-21 22:02:18'),
(48, 123, 24, '2024-05-21 22:02:18', '2024-05-21 22:02:18'),
(49, 123, 25, '2024-05-21 22:02:18', '2024-05-21 22:02:18'),
(50, 124, 26, '2024-05-21 22:03:42', '2024-05-21 22:03:42'),
(51, 124, 27, '2024-05-21 22:03:42', '2024-05-21 22:03:42'),
(52, 125, 26, '2024-05-21 22:03:42', '2024-05-21 22:03:42'),
(53, 125, 27, '2024-05-21 22:03:42', '2024-05-21 22:03:42');

-- --------------------------------------------------------

--
-- Structure de la table `examens`
--

CREATE TABLE `examens` (
  `id` int NOT NULL,
  `titre` varchar(255) NOT NULL,
  `date_debut` datetime NOT NULL,
  `date_fin` datetime NOT NULL,
  `type_examen` enum('synthese','controle') NOT NULL,
  `duree` int NOT NULL,
  `id_classe` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `examens`
--

INSERT INTO `examens` (`id`, `titre`, `date_debut`, `date_fin`, `type_examen`, `duree`, `id_classe`, `createdAt`, `updatedAt`) VALUES
(27, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 23, '2024-05-17 22:35:09', '2024-05-17 22:35:09'),
(28, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 23, '2024-05-17 22:52:11', '2024-05-17 22:52:11'),
(29, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 23, '2024-05-17 22:56:36', '2024-05-17 22:56:36'),
(30, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-17 22:58:24', '2024-05-17 22:58:24'),
(31, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-17 22:58:26', '2024-05-17 22:58:26'),
(32, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-17 23:00:34', '2024-05-17 23:00:34'),
(33, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-17 23:01:43', '2024-05-17 23:01:43'),
(34, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-17 23:13:43', '2024-05-17 23:13:43'),
(35, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-17 23:18:31', '2024-05-17 23:18:31'),
(36, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-17 23:24:58', '2024-05-17 23:24:58'),
(37, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 27, '2024-05-17 23:24:58', '2024-05-17 23:24:58'),
(38, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-17 23:32:32', '2024-05-17 23:32:32'),
(39, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 27, '2024-05-17 23:32:32', '2024-05-17 23:32:32'),
(40, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-18 00:12:03', '2024-05-18 00:12:03'),
(41, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 27, '2024-05-18 00:12:03', '2024-05-18 00:12:03'),
(42, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-18 00:32:45', '2024-05-18 00:32:45'),
(43, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 27, '2024-05-18 00:32:45', '2024-05-18 00:32:45'),
(44, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-18 00:37:42', '2024-05-18 00:37:42'),
(45, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 27, '2024-05-18 00:37:42', '2024-05-18 00:37:42'),
(46, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-18 11:42:11', '2024-05-18 11:42:11'),
(47, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 27, '2024-05-18 11:42:11', '2024-05-18 11:42:11'),
(48, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-18 12:31:52', '2024-05-18 12:31:52'),
(49, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 27, '2024-05-18 12:31:52', '2024-05-18 12:31:52'),
(50, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-18 13:38:04', '2024-05-18 13:38:04'),
(51, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 27, '2024-05-18 13:38:04', '2024-05-18 13:38:04'),
(52, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-18 13:40:05', '2024-05-18 13:40:05'),
(53, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 27, '2024-05-18 13:40:05', '2024-05-18 13:40:05'),
(54, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-19 10:09:41', '2024-05-19 10:09:41'),
(55, 'Examen de fin d\'année', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 27, '2024-05-19 10:09:41', '2024-05-19 10:09:41'),
(56, 'Test examen', '2024-06-01 08:00:00', '2024-06-01 09:00:00', 'synthese', 90, 28, '2024-05-19 10:32:40', '2024-05-19 10:32:40'),
(57, 'Test examen', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-19 10:32:41', '2024-05-19 10:32:41'),
(58, 'Test examen', '2024-06-01 08:00:00', '2024-06-01 09:00:00', 'synthese', 60, 2, '2024-05-19 10:32:41', '2024-05-19 10:32:41'),
(59, 'Test examen', '2024-06-01 08:00:00', '2024-06-01 09:00:00', 'synthese', 90, 28, '2024-05-19 10:32:58', '2024-05-19 10:32:58'),
(60, 'Test examen', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-19 10:32:58', '2024-05-19 10:32:58'),
(61, 'Test examen', '2024-06-01 08:00:00', '2024-06-01 09:00:00', 'synthese', 60, 2, '2024-05-19 10:32:58', '2024-05-19 10:32:58'),
(62, 'Examen ', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-19 12:48:03', '2024-05-19 12:48:03'),
(63, 'Examen ', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 27, '2024-05-19 12:48:03', '2024-05-19 12:48:03'),
(64, 'Examen ', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-19 12:49:58', '2024-05-19 12:49:58'),
(65, 'Examen ', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 27, '2024-05-19 12:49:58', '2024-05-19 12:49:58'),
(66, 'Examen ', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-19 13:33:01', '2024-05-19 13:33:01'),
(67, 'Examen ', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 27, '2024-05-19 13:33:01', '2024-05-19 13:33:01'),
(68, 'Examen ', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-19 13:33:04', '2024-05-19 13:33:04'),
(69, 'Examen ', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 27, '2024-05-19 13:33:04', '2024-05-19 13:33:04'),
(70, 'Examen ', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 26, '2024-05-19 16:42:24', '2024-05-19 16:42:24'),
(71, 'Examen ', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 27, '2024-05-19 16:42:24', '2024-05-19 16:42:24'),
(72, 'Test examen', '2024-06-02 08:00:00', '2024-06-02 09:30:00', 'synthese', 90, 26, '2024-05-20 15:32:07', '2024-05-20 15:32:07'),
(73, 'Test examen', '2024-06-02 08:00:00', '2024-06-02 09:30:00', 'synthese', 90, 27, '2024-05-20 15:32:07', '2024-05-20 15:32:07'),
(74, 'Test examen', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-20 15:32:07', '2024-05-20 15:32:07'),
(75, 'Examen mis à jour', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-20 15:32:07', '2024-05-20 15:32:07'),
(77, 'Test examen', '2024-06-02 08:00:00', '2024-06-02 09:30:00', 'synthese', 90, 26, '2024-05-20 15:54:25', '2024-05-20 15:54:25'),
(78, 'Test examen', '2024-06-02 08:00:00', '2024-06-02 09:30:00', 'synthese', 90, 27, '2024-05-20 15:54:25', '2024-05-20 15:54:25'),
(79, 'Test examen', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-20 15:54:26', '2024-05-20 15:54:26'),
(80, 'Examen mis à jour', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-20 15:54:26', '2024-05-20 15:54:26'),
(82, 'Test examen', '2024-06-02 08:00:00', '2024-06-02 09:30:00', 'synthese', 90, 26, '2024-05-20 16:07:14', '2024-05-20 16:07:14'),
(83, 'Test examen', '2024-06-02 08:00:00', '2024-06-02 09:30:00', 'synthese', 90, 27, '2024-05-20 16:07:14', '2024-05-20 16:07:14'),
(84, 'Test examen', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-20 16:07:14', '2024-05-20 16:07:14'),
(85, 'Examen mis à jour', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-20 16:07:14', '2024-05-20 16:07:14'),
(87, 'agile', '2024-06-05 08:00:00', '2024-06-05 09:30:00', 'synthese', 90, 26, '2024-05-20 16:09:39', '2024-05-20 16:09:39'),
(88, 'agile', '2024-06-05 08:00:00', '2024-06-05 09:30:00', 'synthese', 90, 27, '2024-05-20 16:09:39', '2024-05-20 16:09:39'),
(89, 'Test examen', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-20 16:09:39', '2024-05-20 16:09:39'),
(90, 'Examen mis à jour', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-20 16:09:39', '2024-05-20 16:09:39'),
(92, 'agile', '2024-06-05 08:00:00', '2024-06-05 09:30:00', 'synthese', 90, 26, '2024-05-20 16:13:52', '2024-05-20 16:13:52'),
(93, 'agile', '2024-06-05 08:00:00', '2024-06-05 09:30:00', 'synthese', 90, 27, '2024-05-20 16:13:52', '2024-05-20 16:13:52'),
(94, 'Test examen', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-20 16:13:53', '2024-05-20 16:13:53'),
(95, 'Examen mis à jour', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-20 16:13:53', '2024-05-20 16:13:53'),
(97, 'agile', '2024-06-05 08:00:00', '2024-06-05 09:30:00', 'synthese', 90, 26, '2024-05-20 18:05:38', '2024-05-20 18:05:38'),
(98, 'agile', '2024-06-05 08:00:00', '2024-06-05 09:30:00', 'synthese', 90, 27, '2024-05-20 18:05:38', '2024-05-20 18:05:38'),
(99, 'Test examen', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-20 18:05:38', '2024-05-20 18:05:38'),
(100, 'Examen mis à jour', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-20 18:05:38', '2024-05-20 18:05:38'),
(102, 'agile', '2024-06-05 08:00:00', '2024-06-05 09:30:00', 'synthese', 90, 26, '2024-05-20 18:06:36', '2024-05-20 18:06:36'),
(103, 'agile', '2024-06-05 08:00:00', '2024-06-05 09:30:00', 'synthese', 90, 27, '2024-05-20 18:06:36', '2024-05-20 18:06:36'),
(104, 'Test examen', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-20 18:06:36', '2024-05-20 18:06:36'),
(105, 'Examen mis à jour', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-20 18:06:36', '2024-05-20 18:06:36'),
(107, 'agile', '2024-06-05 08:00:00', '2024-06-05 09:30:00', 'synthese', 90, 26, '2024-05-20 20:11:44', '2024-05-20 20:11:44'),
(108, 'agile', '2024-06-05 08:00:00', '2024-06-05 09:30:00', 'synthese', 90, 27, '2024-05-20 20:11:44', '2024-05-20 20:11:44'),
(109, 'Test examen', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-20 20:11:44', '2024-05-20 20:11:44'),
(110, 'Examen mis à jour', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-20 20:11:44', '2024-05-20 20:11:44'),
(112, 'agile', '2024-06-05 08:00:00', '2024-06-05 09:30:00', 'synthese', 90, 26, '2024-05-20 20:26:34', '2024-05-20 20:26:34'),
(113, 'agile', '2024-06-05 08:00:00', '2024-06-05 09:30:00', 'synthese', 90, 27, '2024-05-20 20:26:34', '2024-05-20 20:26:34'),
(114, 'Test examen', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-20 20:26:34', '2024-05-20 20:26:34'),
(115, 'Examen mis à jour', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-20 20:26:34', '2024-05-20 20:26:34'),
(117, 'Examen de Synthèse', '2024-06-01 09:00:00', '2024-06-01 10:30:00', 'synthese', 90, 28, '2024-05-21 12:45:22', '2024-05-21 12:45:22'),
(118, 'Test examen', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-21 17:37:56', '2024-05-21 17:37:56'),
(119, 'Examen mis à jour', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-21 17:37:56', '2024-05-21 17:37:56'),
(121, 'Exam Title', '2024-05-22 09:00:00', '2024-05-22 10:30:00', 'synthese', 90, 23, '2024-05-21 22:02:18', '2024-05-21 22:02:18'),
(122, 'Exam Title', '2024-05-22 09:00:00', '2024-05-22 10:30:00', 'synthese', 90, 24, '2024-05-21 22:02:18', '2024-05-21 22:02:18'),
(123, 'Exam Title', '2024-05-22 09:00:00', '2024-05-22 10:30:00', 'synthese', 90, 25, '2024-05-21 22:02:18', '2024-05-21 22:02:18'),
(124, 'agile', '2024-06-05 08:00:00', '2024-06-05 09:30:00', 'synthese', 90, 26, '2024-05-21 22:03:42', '2024-05-21 22:03:42'),
(125, 'agile', '2024-06-05 08:00:00', '2024-06-05 09:30:00', 'synthese', 90, 27, '2024-05-21 22:03:42', '2024-05-21 22:03:42'),
(126, 'Test examen', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-21 22:03:42', '2024-05-21 22:03:42'),
(127, 'Examen mis à jour', '2024-06-01 08:00:00', '2024-06-01 09:30:00', 'synthese', 90, 28, '2024-05-21 22:03:42', '2024-05-21 22:03:42');

-- --------------------------------------------------------

--
-- Structure de la table `questions`
--

CREATE TABLE `questions` (
  `id` int NOT NULL,
  `titre` text NOT NULL,
  `type` enum('choix_unique','choix_multiple') NOT NULL,
  `options` json NOT NULL,
  `Reponse_correcte` varchar(255) NOT NULL,
  `points` int NOT NULL,
  `id_examen` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `reponse_etudiants`
--

CREATE TABLE `reponse_etudiants` (
  `id` int NOT NULL,
  `id_examen` int NOT NULL,
  `id_question` int NOT NULL,
  `id_etudiant` int NOT NULL,
  `reponse` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `resultats`
--

CREATE TABLE `resultats` (
  `id` int NOT NULL,
  `id_examen` int NOT NULL,
  `id_question` int NOT NULL,
  `id_etudiant` int NOT NULL,
  `total_points` float NOT NULL,
  `max_points` float NOT NULL,
  `score_percentage` float NOT NULL,
  `id_reponse_etudiant` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` int NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mot_de_passe` varchar(255) NOT NULL,
  `cin` varchar(255) NOT NULL,
  `type_utilisateur` enum('admin','enseignant','etudiant') NOT NULL,
  `id_classe` int NOT NULL,
  `id_departement` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `nom`, `prenom`, `email`, `mot_de_passe`, `cin`, `type_utilisateur`, `id_classe`, `id_departement`, `createdAt`, `updatedAt`) VALUES
(3, 'amal', 'seghaier', 'amal@gmail.com', '$2b$10$8d//cAJx3klaycMlz4mVzOy2fKWT9ubNSuEbPsIroh12SExWpbWeu', '12347578', 'admin', 2, 2, '2024-04-21 10:43:28', '2024-04-21 10:43:28'),
(12, 'amal', 'seghaier', 'amalse@gmail.com', '$2b$10$CqvIOAkekAW4rG3gx04feuTNBm32H/SzdZDWX3St2TIinFeCSJRqq', '19347578', 'enseignant', 2, 2, '2024-05-11 17:35:08', '2024-05-11 17:35:08'),
(13, 'amal', 'seghaier', 'amalseg@gmail.com', '$2b$10$A8wX0BDXnZy8nt/V/G7tY.wqm4cPRWRFElkHwXInAVa85DZCLRSii', '19347579', 'enseignant', 25, 2, '2024-05-11 17:35:43', '2024-05-11 17:35:43'),
(14, 'John', 'Doe', 'john.@example.com', '$2b$10$QkjIqlUvg8OwzS7BwltAfea32Z7f13feBBccqHw3I5CzZT1nhAxYq', '12345677', 'etudiant', 24, 2, '2024-05-11 17:37:49', '2024-05-11 17:37:49'),
(15, 'John', 'Doe', 'john.do@example.com', '$2b$10$RmILn/DmLsqQEbHmSvkgHuEtBgaI3V0FEcReMe8CG677HhxGB8kGO', '12345676', 'etudiant', 23, 2, '2024-05-11 17:38:49', '2024-05-11 17:38:49'),
(16, 'amal', 'seghaier', 'amseg@gmail.com', '$2b$10$4BVU9C7U1r5aGW2MeFKIcegxmKSmZHEpaaChnaFnDiVv3iRDGBcQm', '99963258', 'etudiant', 26, 2, '2024-05-15 09:31:11', '2024-05-15 09:31:11'),
(17, 'amal', 'seghaier', 'amsegh@gmail.com', '$2b$10$JVguH8qb.vPRDew0yXaPCO2n.34YrRibOAYkNU96s2AsaouyuLRSW', '99963259', 'etudiant', 23, 2, '2024-05-15 09:34:18', '2024-05-15 09:34:18'),
(19, 'John', 'Doe', 'john.doe@example.com', '$2b$10$4lN/uLqzf5sqlhPZi821TeVRj.MOeAmIaRvoXJOvMz6jndJTNcFCS', '12345678', 'etudiant', 23, 2, '2024-05-15 15:41:01', '2024-05-15 15:41:01'),
(20, 'amal', 'seghaier', 'seghaier@gmail.com', '$2b$10$1bZL/qwi3.F5vGZOqskrmOqzNEUi4odDkguY.h5pxpZn2T7j1GJA.', '12365498', 'etudiant', 2, 2, '2024-05-16 10:34:01', '2024-05-16 10:34:01');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nom` (`nom`),
  ADD KEY `departements_ibfk_1_idx` (`departementId`);

--
-- Index pour la table `departements`
--
ALTER TABLE `departements`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nom` (`nom`);

--
-- Index pour la table `enseignants`
--
ALTER TABLE `enseignants`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `matricule` (`matricule`);

--
-- Index pour la table `examenclasses`
--
ALTER TABLE `examenclasses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `examenclasses_classeId_examenId_unique` (`examenId`,`classeId`),
  ADD KEY `classeId` (`classeId`);

--
-- Index pour la table `examens`
--
ALTER TABLE `examens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_classe` (`id_classe`);

--
-- Index pour la table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_examen` (`id_examen`);

--
-- Index pour la table `reponse_etudiants`
--
ALTER TABLE `reponse_etudiants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reponse_etudiant_idx` (`id_etudiant`),
  ADD KEY `reponse_etudiants_ibfk_1;` (`id_examen`);

--
-- Index pour la table `resultats`
--
ALTER TABLE `resultats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_examen` (`id_examen`),
  ADD KEY `id_reponse_etudiant` (`id_reponse_etudiant`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `cin` (`cin`),
  ADD KEY `id_classe` (`id_classe`),
  ADD KEY `id_departement` (`id_departement`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `classes`
--
ALTER TABLE `classes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT pour la table `departements`
--
ALTER TABLE `departements`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `enseignants`
--
ALTER TABLE `enseignants`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `examenclasses`
--
ALTER TABLE `examenclasses`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT pour la table `examens`
--
ALTER TABLE `examens`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- AUTO_INCREMENT pour la table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT pour la table `reponse_etudiants`
--
ALTER TABLE `reponse_etudiants`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `resultats`
--
ALTER TABLE `resultats`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `classes`
--
ALTER TABLE `classes`
  ADD CONSTRAINT `departements_ibfk_1` FOREIGN KEY (`departementId`) REFERENCES `departements` (`id`);

--
-- Contraintes pour la table `enseignants`
--
ALTER TABLE `enseignants`
  ADD CONSTRAINT `enseignant` FOREIGN KEY (`id`) REFERENCES `utilisateurs` (`id`);

--
-- Contraintes pour la table `examenclasses`
--
ALTER TABLE `examenclasses`
  ADD CONSTRAINT `examenclasses_ibfk_1` FOREIGN KEY (`examenId`) REFERENCES `examens` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `examenclasses_ibfk_2` FOREIGN KEY (`classeId`) REFERENCES `classes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `examens`
--
ALTER TABLE `examens`
  ADD CONSTRAINT `examens_ibfk_1` FOREIGN KEY (`id_classe`) REFERENCES `classes` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`id_examen`) REFERENCES `examens` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `reponse_etudiants`
--
ALTER TABLE `reponse_etudiants`
  ADD CONSTRAINT `reponse_etudiant` FOREIGN KEY (`id_etudiant`) REFERENCES `utilisateurs` (`id`),
  ADD CONSTRAINT `reponse_etudiants_ibfk_1;` FOREIGN KEY (`id_examen`) REFERENCES `examens` (`id`);

--
-- Contraintes pour la table `resultats`
--
ALTER TABLE `resultats`
  ADD CONSTRAINT `resultats_ibfk_1` FOREIGN KEY (`id_examen`) REFERENCES `examens` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `resultats_ibfk_3` FOREIGN KEY (`id_reponse_etudiant`) REFERENCES `reponse_etudiants` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD CONSTRAINT `utilisateurs_ibfk_1` FOREIGN KEY (`id_classe`) REFERENCES `classes` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `utilisateurs_ibfk_2` FOREIGN KEY (`id_departement`) REFERENCES `departements` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
