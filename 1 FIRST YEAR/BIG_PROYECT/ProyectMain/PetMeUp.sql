-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-05-2019 a las 12:53:27
-- Versión del servidor: 10.1.32-MariaDB
-- Versión de PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `petmeup`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `animal`
--

CREATE TABLE `animal` (
  `id` int(11) NOT NULL,
  `name` char(20) NOT NULL,
  `age` int(2) NOT NULL,
  `sex` char(1) NOT NULL,
  `species` char(10) NOT NULL,
  `description` varchar(140) NOT NULL,
  `weight` float NOT NULL,
  `adopted` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `animal`
--

INSERT INTO `animal` (`id`, `name`, `age`, `sex`, `species`, `description`, `weight`, `adopted`) VALUES
(1, 'Muchacho', 5, 'M', 'gato', 'Gato de prueba gordo', 12, 0),
(2, 'Gos', 12, 'M', 'perro', 'Perrete flaco', 30, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `axp`
--

CREATE TABLE `axp` (
  `id` int(11) NOT NULL,
  `id_animal` int(11) NOT NULL,
  `id_person` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `axp`
--

INSERT INTO `axp` (`id`, `id_animal`, `id_person`) VALUES
(7, 2, 4),
(8, 1, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `axpfav`
--

CREATE TABLE `axpfav` (
  `id` int(11) NOT NULL,
  `id_animal` int(11) NOT NULL,
  `id_person` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `axpfav`
--

INSERT INTO `axpfav` (`id`, `id_animal`, `id_person`) VALUES
(36, 2, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `axs`
--

CREATE TABLE `axs` (
  `id` int(11) NOT NULL,
  `id_animal` int(11) NOT NULL,
  `id_shelter` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `axs`
--

INSERT INTO `axs` (`id`, `id_animal`, `id_shelter`) VALUES
(1, 1, 1),
(2, 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `person`
--

CREATE TABLE `person` (
  `id` int(11) NOT NULL,
  `name` char(30) NOT NULL,
  `pass` char(16) NOT NULL,
  `tlf` char(15) DEFAULT NULL,
  `email` char(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `person`
--

INSERT INTO `person` (`id`, `name`, `pass`, `tlf`, `email`) VALUES
(3, 'pepelamenea', 'odioelgazpacho', 'odioelgazpacho', 'odioelgazpacho@gmail.com'),
(4, 'Will', '1234', '1234', 'guigarro23@gmail.com'),
(5, 'Pablo', '010419995', '01041995', 'pablovidal1995@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shelter`
--

CREATE TABLE `shelter` (
  `id` int(11) NOT NULL,
  `name` char(30) NOT NULL,
  `pass` char(16) NOT NULL,
  `address` char(40) NOT NULL,
  `location` char(30) NOT NULL,
  `email` char(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `shelter`
--

INSERT INTO `shelter` (`id`, `name`, `pass`, `address`, `location`, `email`) VALUES
(1, 'El perro moribundo', '1234', 'Valencia', 'Valencia', 'moribundoperro@gmail.com'),
(2, 'La loca de los gatos', '1234', 'Guatemala', 'Guatemala', 'locagatos@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `animal`
--
ALTER TABLE `animal`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `axp`
--
ALTER TABLE `axp`
  ADD PRIMARY KEY (`id`),
  ADD KEY `axpanimal` (`id_animal`),
  ADD KEY `axpperson` (`id_person`);

--
-- Indices de la tabla `axpfav`
--
ALTER TABLE `axpfav`
  ADD PRIMARY KEY (`id`),
  ADD KEY `axpfavanimal` (`id_animal`),
  ADD KEY `axpfavperson` (`id_person`) USING BTREE;

--
-- Indices de la tabla `axs`
--
ALTER TABLE `axs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `axsanimal` (`id_animal`),
  ADD KEY `axsshelter` (`id_shelter`);

--
-- Indices de la tabla `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `shelter`
--
ALTER TABLE `shelter`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `animal`
--
ALTER TABLE `animal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `axp`
--
ALTER TABLE `axp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `axpfav`
--
ALTER TABLE `axpfav`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `axs`
--
ALTER TABLE `axs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `person`
--
ALTER TABLE `person`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `shelter`
--
ALTER TABLE `shelter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `axp`
--
ALTER TABLE `axp`
  ADD CONSTRAINT `axp_ibfk_1` FOREIGN KEY (`id_animal`) REFERENCES `animal` (`id`),
  ADD CONSTRAINT `axp_ibfk_2` FOREIGN KEY (`id_person`) REFERENCES `person` (`id`);

--
-- Filtros para la tabla `axpfav`
--
ALTER TABLE `axpfav`
  ADD CONSTRAINT `axpfav_ibfk_1` FOREIGN KEY (`id_animal`) REFERENCES `animal` (`id`),
  ADD CONSTRAINT `axpfav_ibfk_2` FOREIGN KEY (`id_person`) REFERENCES `person` (`id`);

--
-- Filtros para la tabla `axs`
--
ALTER TABLE `axs`
  ADD CONSTRAINT `axs_ibfk_1` FOREIGN KEY (`id_animal`) REFERENCES `animal` (`id`),
  ADD CONSTRAINT `axs_ibfk_2` FOREIGN KEY (`id_shelter`) REFERENCES `shelter` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
