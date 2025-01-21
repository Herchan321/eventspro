-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2025 at 10:25 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eventspro`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog_posts`
--

CREATE TABLE `blog_posts` (
  `id_blog` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text DEFAULT NULL,
  `main_image` text DEFAULT NULL,
  `fk_id_prestataire` int(11) DEFAULT NULL,
  `published_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog_posts`
--

INSERT INTO `blog_posts` (`id_blog`, `title`, `content`, `main_image`, `fk_id_prestataire`, `published_date`, `created_at`, `updated_at`) VALUES
(1, 'Le mariage parfait : Comment organiser le jour de vos rêves', 'Le mariage est un événement magique qui marquera à jamais la vie des couples. Organiser un mariage parfait nécessite de prêter attention aux moindres détails. De la sélection du lieu à la décoration, chaque aspect doit être en harmonie. Dans cet article, nous vous guiderons à travers les étapes essentielles pour organiser le mariage de vos rêves.\n\nLe choix du lieu est crucial. Un château, une plage, un jardin secret, chaque endroit a son charme unique. Ensuite, la décoration doit refléter le style du couple : romantique, vintage, moderne ou classique. Ne sous-estimez pas l\'importance des fleurs, de l\'éclairage et des petites touches personnelles.\n\nEnfin, n\'oubliez pas les prestataires : photographes, traiteurs, musiciens, chacun joue un rôle clé pour faire de cette journée un moment inoubliable. Prenez le temps de les choisir avec soin.', 'https://images.pexels.com/photos/13882793/pexels-photo-13882793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1, '2025-01-19 03:44:11', '2025-01-19 02:43:40', '2025-01-19 03:44:11'),
(2, 'Les tendances des mariages en 2024', 'Les mariages évoluent chaque année et les tendances de 2024 ne sont pas en reste. En 2024, les couples recherchent de plus en plus des expériences uniques et personnalisées pour leur grand jour. Les couleurs de mariage tendance incluent des tons neutres comme le beige, le crème et le pastel. Les mariés optent aussi pour des touches écologiques, en privilégiant les fleurs locales et les lieux écoresponsables.\n\nLa technologie s\'invite également dans les mariages : photobooths interactifs, invitations numériques et même des livestreams pour permettre aux proches éloignés de participer à l\'événement. Mais au-delà des tendances, ce qui reste important, c\'est l\'authenticité. Les mariés veulent créer une expérience qui leur ressemble et qui émerveillera leurs invités.', 'https://www.pexels.com/photo/photo-of-people-holding-wedding-bouquet-7432820/', 1, '2025-01-19 02:46:50', '2025-01-19 02:46:50', '2025-01-19 02:46:50');

-- --------------------------------------------------------

--
-- Table structure for table `categories_services`
--

CREATE TABLE `categories_services` (
  `id_categorie` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories_services`
--

INSERT INTO `categories_services` (`id_categorie`, `nom`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Mariage', 'Événements de mariage', '2025-01-19 03:07:33', '2025-01-19 03:07:33');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id_client` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id_client`, `nom`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'ASMA HERCHAN', 'asma@gmail.com', '$2b$10$R.IeUIOTj5Dj.GyeOoXHMOsZsBn9t19XNvFv5xN.RX0dj6oiY.tU6', '2025-01-19 15:38:01', '2025-01-19 15:38:01');

-- --------------------------------------------------------

--
-- Table structure for table `feedbacks`
--

CREATE TABLE `feedbacks` (
  `id_feedback` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feedbacks`
--

INSERT INTO `feedbacks` (`id_feedback`, `name`, `content`, `created_at`) VALUES
(1, 'ASMA HERCHAN', 'great service', '2025-01-19 23:47:38'),
(2, 'alia', 'great service', '2025-01-19 23:47:59'),
(3, 'Fadi', 'great service', '2025-01-19 23:48:10'),
(4, 'khaoula ', 'bon service', '2025-01-20 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `prestataires`
--

CREATE TABLE `prestataires` (
  `id_prestataire` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `fk_id_ville` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prestataires`
--

INSERT INTO `prestataires` (`id_prestataire`, `nom`, `email`, `password`, `description`, `fk_id_ville`, `created_at`, `updated_at`) VALUES
(1, 'Samira Décoration', 'samira@deco.ma', '$2b$10$bJYNwTQmmHnMXwYZ8AD2Ee51MoAKZSi.nRirV0vsgm0G/wLkJLsWC', 'Décoratrice professionnelle pour événements', 1, '2025-01-18 02:21:09', '2025-01-18 02:21:09'),
(2, 'Hassan Events', 'hassan@events.ma', '$2b$10$Bs6ieS77ELY.FG1Q77zenOI5bZFu.cIBBuckFttcWCOEhuBbnBC9a', 'Spécialiste des mariages traditionnels marocains', 1, '2025-01-18 02:35:31', '2025-01-18 02:35:31'),
(3, 'Test User', 'test@test.ma', '$2b$10$QM.3zWdkr7CfgZY7YI69WOC4w5E7d4PhpA7BHmc2Ify2i0/w/FE/C', 'Test description', 1, '2025-01-19 00:42:53', '2025-01-19 00:42:53');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id_service` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `fk_id_categorie` int(11) DEFAULT NULL,
  `fk_id_prestataire` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `image` text DEFAULT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`images`)),
  `servicesOffered` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`servicesOffered`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id_service`, `nom`, `description`, `prix`, `fk_id_categorie`, `fk_id_prestataire`, `created_at`, `updated_at`, `image`, `images`, `servicesOffered`) VALUES
(1, 'Traiteur ', 'Service de traiteur pour événements spéciaux', 600.00, 1, 1, '2025-01-19 03:16:27', '2025-01-20 17:56:09', 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg', '[\"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg\",\"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg\",\"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg\"]', '[\"Buffets et menus personnalisés\", \"Organisation de cocktails dînatoires\", \"Événements corporatifs et familiaux\"]'),
(3, 'Photographe Mariage', 'Service de photographie pour mariages', 1200.00, 1, 1, '2025-01-19 03:35:20', '2025-01-20 18:09:58', 'https://media.istockphoto.com/id/621711304/photo/shooting-a-wedding-with-a-vintage-camera.jpg?s=1024x1024&w=is&k=20&c=___8RWtRHP9l_9gS7vsYDxHq5YSS7RFp_aJk4uEhFjs=', '[\"https://media.istockphoto.com/id/1431986910/photo/wedding-photography-and-photographer-with-bride-and-groom-posing-for-a-picture-with-wedding.webp?s=1024x1024&w=is&k=20&c=pbNDMaOwjk3ctxKUZj09tv0jYmgpkkSxVquAtY31VFs=\",\"https://media.istockphoto.com/id/829612362/photo/photographer-taking-photo-of-bride-and-her-parents.webp?s=1024x1024&w=is&k=20&c=S7na--aVOfcu5PNGHnoLHXrMtyxqi5soT8_8htH-kwE=\",\"https://media.istockphoto.com/id/1431986910/photo/wedding-photography-and-photographer-with-bride-and-groom-posing-for-a-picture-with-wedding.webp?s=1024x1024&w=is&k=20&c=pbNDMaOwjk3ctxKUZj09tv0jYmgpkkSxVquAtY31VFs=\"]', '[\"Couverture complète de la cérémonie et de la réception.\",\"Albums photo personnalisés.\",\"Séance photo avant le mariage (pre-wedding).\"]'),
(4, 'Animateur Anniversaire', 'Animation pour anniversaires d\'enfants', 300.00, 1, 2, '2025-01-19 03:40:01', '2025-01-19 03:40:01', 'https://media.istockphoto.com/id/828507078/photo/gifts-for-kids.jpg?s=1024x1024&w=is&k=20&c=s6g1aa6vUhiZ_uduTILd6T4Swf0cid3MNlyX7WaFwrs=', '', NULL),
(5, 'Décoration Événement', 'Service de décoration pour mariages, anniversaires et autres événements', 500.00, 1, 2, '2025-01-19 03:42:15', '2025-01-19 03:42:15', 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg', '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `villes`
--

CREATE TABLE `villes` (
  `id_ville` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `region` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `villes`
--

INSERT INTO `villes` (`id_ville`, `nom`, `region`, `created_at`, `updated_at`) VALUES
(1, 'Casablanca', 'Grand Casablanca', '2025-01-18 01:44:04', '2025-01-18 01:44:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog_posts`
--
ALTER TABLE `blog_posts`
  ADD PRIMARY KEY (`id_blog`),
  ADD KEY `fk_id_prestataire` (`fk_id_prestataire`);

--
-- Indexes for table `categories_services`
--
ALTER TABLE `categories_services`
  ADD PRIMARY KEY (`id_categorie`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id_client`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`id_feedback`);

--
-- Indexes for table `prestataires`
--
ALTER TABLE `prestataires`
  ADD PRIMARY KEY (`id_prestataire`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `fk_id_ville` (`fk_id_ville`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id_service`),
  ADD KEY `fk_id_categorie` (`fk_id_categorie`),
  ADD KEY `fk_id_prestataire` (`fk_id_prestataire`);

--
-- Indexes for table `villes`
--
ALTER TABLE `villes`
  ADD PRIMARY KEY (`id_ville`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog_posts`
--
ALTER TABLE `blog_posts`
  MODIFY `id_blog` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `categories_services`
--
ALTER TABLE `categories_services`
  MODIFY `id_categorie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id_client` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `id_feedback` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `prestataires`
--
ALTER TABLE `prestataires`
  MODIFY `id_prestataire` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id_service` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `villes`
--
ALTER TABLE `villes`
  MODIFY `id_ville` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blog_posts`
--
ALTER TABLE `blog_posts`
  ADD CONSTRAINT `blog_posts_ibfk_1` FOREIGN KEY (`fk_id_prestataire`) REFERENCES `prestataires` (`id_prestataire`) ON DELETE CASCADE;

--
-- Constraints for table `prestataires`
--
ALTER TABLE `prestataires`
  ADD CONSTRAINT `prestataires_ibfk_1` FOREIGN KEY (`fk_id_ville`) REFERENCES `villes` (`id_ville`) ON DELETE SET NULL;

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_ibfk_1` FOREIGN KEY (`fk_id_categorie`) REFERENCES `categories_services` (`id_categorie`) ON DELETE CASCADE,
  ADD CONSTRAINT `services_ibfk_2` FOREIGN KEY (`fk_id_prestataire`) REFERENCES `prestataires` (`id_prestataire`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
