-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 18-09-2021 a las 20:48:19
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inventario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `categoria` text COLLATE utf8_spanish_ci NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `categoria`, `fecha`) VALUES
(7, 'Comida', '2020-12-21 22:35:00'),
(8, 'Bebidas', '2021-01-14 19:03:05'),
(9, 'prueba', '2021-03-14 22:49:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nombre` text COLLATE utf8_spanish_ci NOT NULL,
  `telefono` text COLLATE utf8_spanish_ci NOT NULL,
  `direccion` text COLLATE utf8_spanish_ci NOT NULL,
  `compras` int(11) NOT NULL,
  `ultima_compra` datetime NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `telefono`, `direccion`, `compras`, `ultima_compra`, `fecha`) VALUES
(13, 'daniel', '(322) 314-1038', 'calle 20 # 41-63', 38, '2021-03-01 23:31:16', '2021-01-23 17:12:06'),
(14, 'felipe', '(322) 314-1038', 'calle 20 # 41-63', 466, '2021-02-13 23:41:41', '2021-01-23 17:12:06'),
(20, 'andres felipe', '(322) 314-1038', 'calle 20 # 41-63', 2787, '2021-03-18 11:40:15', '2021-01-23 17:16:34'),
(21, 'daniela', '(322) 314-1038', 'calle 20 # 41-63', 395, '2021-02-18 14:15:06', '2021-01-24 01:11:47'),
(22, 'Shell', '(122) 233-2321', '3799 bufford hwy, Atlanta, garri', 2757, '2021-03-20 13:04:34', '2021-01-31 14:56:46'),
(23, 'fernando', '(322) 132-4522', 'calle 20 # 41-54', 447, '2021-03-31 17:22:20', '2021-02-25 20:46:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `devoluciones`
--

CREATE TABLE `devoluciones` (
  `id` int(11) NOT NULL,
  `codigo` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_vendedor` int(11) NOT NULL,
  `productos` text COLLATE utf8_spanish_ci NOT NULL,
  `impuesto` float NOT NULL,
  `neto` float NOT NULL,
  `total` float NOT NULL,
  `devoluciones` text COLLATE utf8_spanish_ci NOT NULL,
  `metodo_pago` text COLLATE utf8_spanish_ci NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `devoluciones`
--

INSERT INTO `devoluciones` (`id`, `codigo`, `id_cliente`, `id_vendedor`, `productos`, `impuesto`, `neto`, `total`, `devoluciones`, `metodo_pago`, `fecha`) VALUES
(1, 10001, 23, 69, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"2\",\"stock\":\"23541\",\"stock2\":\"23543\",\"precio\":\"2.8\",\"total\":\"5.6\"}]', 0, 5.6, 5.6, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"2\",\"stock\":\"2\",\"stock2\":\"23541\",\"precio\":\"2.8\",\"total\":\"5.6\"}]', 'Efectivo', '2021-03-16 15:18:48'),
(2, 10002, 23, 68, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"4\",\"stock\":\"136\",\"stock2\":\"23397\",\"precio\":\"2.8\",\"total\":\"11.2\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"6\",\"stock\":\"8\",\"stock2\":\"32418\",\"precio\":\"16.8\",\"total\":\"100.8\"},{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"10\",\"stock\":\"239980\",\"stock2\":\"239990\",\"precio\":\"5.6\",\"total\":\"56\"}]', 0, 168, 168, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"4\",\"stock\":\"4\",\"stock2\":\"136\",\"precio\":\"2.8\",\"total\":\"11.2\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"6\",\"stock\":\"6\",\"stock2\":\"8\",\"precio\":\"16.8\",\"total\":\"100.8\"},{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"10\",\"stock\":\"10\",\"stock2\":\"239980\",\"precio\":\"5.6\",\"total\":\"56\"}]', 'Efectivo', '2021-03-27 21:45:33'),
(3, 10003, 20, 62, '[{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"5\",\"stock\":\"18\",\"stock2\":\"4207\",\"precio\":\"2.8\",\"total\":\"14\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"5\",\"stock\":\"15\",\"stock2\":\"32413\",\"precio\":\"16.8\",\"total\":\"84\"}]', 0, 0, 0, '[{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"5\",\"stock\":\"5\",\"stock2\":\"18\",\"precio\":\"2.8\",\"total\":\"14\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"5\",\"stock\":\"5\",\"stock2\":\"15\",\"precio\":\"16.8\",\"total\":\"84\"}]', 'Efectivo', '2021-03-16 15:36:56'),
(4, 10004, 20, 62, '[{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"3\",\"stock\":\"0\",\"stock2\":\"32413\",\"precio\":\"16.8\",\"total\":\"50.4\"}]', 0, 0, 0, '', 'Efectivo', '2021-03-16 15:33:47'),
(5, 10005, 20, 62, '[{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"1\",\"stock\":\"9\",\"stock2\":\"32403\",\"precio\":\"16.8\",\"total\":\"16.8\"},{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"1\",\"stock\":\"9\",\"stock2\":\"23374\",\"precio\":\"2.8\",\"total\":\"2.8\"}]', 0, 0, 0, '[{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"1\",\"stock\":\"1\",\"stock2\":\"9\",\"precio\":\"16.8\",\"total\":\"16.8\"},{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"1\",\"stock\":\"1\",\"stock2\":\"9\",\"precio\":\"2.8\",\"total\":\"2.8\"}]', 'Efectivo', '2021-03-18 16:40:15'),
(6, 10006, 23, 68, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"2\",\"stock\":\"134\",\"stock2\":\"23397\",\"precio\":\"2.8\",\"total\":\"5.6\"},{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"3\",\"stock\":\"22\",\"stock2\":\"342409\",\"precio\":\"29.4\",\"total\":\"88.2\"},{\"id\":\"5\",\"descripcion\":\"maiz\",\"cantidad\":\"1\",\"stock\":\"29\",\"stock2\":\"\",\"precio\":\"16.8\",\"total\":\"16.8\"}]', 0, 110.6, 110.6, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"2\",\"stock\":\"2\",\"stock2\":\"134\",\"precio\":\"2.8\",\"total\":\"5.6\"},{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"3\",\"stock\":\"3\",\"stock2\":\"22\",\"precio\":\"29.4\",\"total\":\"88.2\"},{\"id\":\"5\",\"descripcion\":\"maiz\",\"cantidad\":\"1\",\"stock\":\"1\",\"stock2\":\"29\",\"precio\":\"16.8\",\"total\":\"16.8\"}]', 'Efectivo', '2021-03-18 15:59:11'),
(7, 10007, 23, 68, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"5\",\"stock\":\"126\",\"stock2\":\"23397\",\"precio\":\"2.8\",\"total\":\"14\"},{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"1\",\"stock\":\"9\",\"stock2\":\"4230\",\"precio\":\"2.8\",\"total\":\"2.8\"}]', 0, 16.8, 16.8, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"5\",\"stock\":\"5\",\"stock2\":\"126\",\"precio\":\"2.8\",\"total\":\"14\"},{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"1\",\"stock\":\"1\",\"stock2\":\"9\",\"precio\":\"2.8\",\"total\":\"2.8\"}]', 'Efectivo', '2021-03-18 16:13:36'),
(8, 10008, 23, 68, '[{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"2\",\"stock\":\"6\",\"stock2\":\"342409\",\"precio\":\"29.4\",\"total\":\"58.8\"}]', 0, 58.8, 58.8, '[{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"2\",\"stock\":\"2\",\"stock2\":\"6\",\"precio\":\"29.4\",\"total\":\"58.8\"}]', 'Efectivo', '2021-03-18 19:18:53'),
(9, 10009, 23, 68, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"3\",\"stock\":\"117\",\"stock2\":\"23397\",\"precio\":\"2.8\",\"total\":\"8.4\"},{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"5\",\"stock\":\"9\",\"stock2\":\"342409\",\"precio\":\"29.4\",\"total\":\"147\"},{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"1\",\"stock\":\"5\",\"stock2\":\"4230\",\"precio\":\"2.8\",\"total\":\"2.8\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"2\",\"stock\":\"32416\",\"precio\":\"16.8\",\"total\":\"33.6\"}]', 0, 0, 0, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"3\",\"stock\":\"3\",\"stock2\":\"117\",\"precio\":\"2.8\",\"total\":\"8.4\"},{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"5\",\"stock\":\"5\",\"stock2\":\"9\",\"precio\":\"29.4\",\"total\":\"147\"},{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"1\",\"stock\":\"1\",\"stock2\":\"5\",\"precio\":\"2.8\",\"total\":\"2.8\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"2\",\"stock\":\"2\",\"stock2\":\"32416\",\"precio\":\"16.8\",\"total\":\"33.6\"}]', 'Efectivo', '2021-03-18 19:55:21'),
(10, 10010, 23, 68, '[{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"10\",\"stock\":\"990\",\"stock2\":\"31418\",\"precio\":\"16.8\",\"total\":\"168\"},{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"16\",\"stock\":\"101\",\"stock2\":\"23397\",\"precio\":\"2.8\",\"total\":\"44.8\"}]', 0, 0, 0, '[{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"10\",\"stock\":\"10\",\"stock2\":\"990\",\"precio\":\"16.8\",\"total\":\"168\"},{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"16\",\"stock\":\"16\",\"stock2\":\"101\",\"precio\":\"2.8\",\"total\":\"44.8\"}]', 'Efectivo', '2021-03-20 17:16:22'),
(11, 10011, 23, 68, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"5\",\"stock\":\"96\",\"stock2\":\"23397\",\"precio\":\"2.8\",\"total\":\"14\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"10\",\"stock\":\"980\",\"stock2\":\"31418\",\"precio\":\"16.8\",\"total\":\"168\"},{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"9\",\"stock\":\"0\",\"stock2\":\"342409\",\"precio\":\"29.4\",\"total\":\"264.59999999999997\"}]', 0, 0, 0, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"5\",\"stock\":\"5\",\"stock2\":\"96\",\"precio\":\"2.8\",\"total\":\"14\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"10\",\"stock\":\"10\",\"stock2\":\"980\",\"precio\":\"16.8\",\"total\":\"168\"},{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"9\",\"stock\":\"9\",\"stock2\":\"0\",\"precio\":\"29.4\",\"total\":\"264.59999999999997\"}]', 'Efectivo', '2021-03-20 17:35:29'),
(12, 10012, 22, 68, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"12\",\"stock\":\"1113\",\"stock2\":\"240116\",\"precio\":\"5.6\",\"total\":\"67.19999999999999\"},{\"id\":\"16\",\"descripcion\":\"Cacahuate garrapinado\",\"cantidad\":\"8\",\"stock\":\"146\",\"stock2\":\"43088\",\"precio\":\"7\",\"total\":\"56\"},{\"id\":\"15\",\"descripcion\":\"Camote y calabaza\",\"cantidad\":\"10\",\"stock\":\"102\",\"stock2\":\"21202\",\"precio\":\"16.8\",\"total\":\"168\"}]', 0, 291.2, 291.2, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"12\",\"stock\":\"12\",\"stock2\":\"1113\",\"precio\":\"5.6\",\"total\":\"67.19999999999999\"},{\"id\":\"16\",\"descripcion\":\"Cacahuate garrapinado\",\"cantidad\":\"8\",\"stock\":\"8\",\"stock2\":\"146\",\"precio\":\"7\",\"total\":\"56\"},{\"id\":\"15\",\"descripcion\":\"Camote y calabaza\",\"cantidad\":\"10\",\"stock\":\"10\",\"stock2\":\"102\",\"precio\":\"16.8\",\"total\":\"168\"}]', 'Efectivo', '2021-03-21 01:06:09'),
(13, 10013, 23, 68, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"5\",\"stock\":\"1109\",\"stock2\":\"240116\",\"precio\":\"5.6\",\"total\":\"28\"},{\"id\":\"13\",\"descripcion\":\"Kit mixto\",\"cantidad\":\"10\",\"stock\":\"114\",\"stock2\":\"42219\",\"precio\":\"16.8\",\"total\":\"168\"},{\"id\":\"14\",\"descripcion\":\"Pan pueblo\",\"cantidad\":\"6\",\"stock\":\"294\",\"stock2\":\"12012\",\"precio\":\"47.6\",\"total\":\"285.6\"},{\"id\":\"16\",\"descripcion\":\"Cacahuate garrapinado\",\"cantidad\":\"5\",\"stock\":\"141\",\"stock2\":\"43088\",\"precio\":\"7\",\"total\":\"35\"},{\"id\":\"15\",\"descripcion\":\"Camote y calabaza\",\"cantidad\":\"50\",\"stock\":\"52\",\"stock2\":\"21202\",\"precio\":\"16.8\",\"total\":\"840\"},{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"10\",\"stock\":\"23176\",\"stock2\":\"23186\",\"precio\":\"2.8\",\"total\":\"28\"},{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"15\",\"stock\":\"342394\",\"stock2\":\"342409\",\"precio\":\"29.4\",\"total\":\"441\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"5\",\"stock\":\"31413\",\"stock2\":\"31418\",\"precio\":\"16.8\",\"total\":\"84\"},{\"id\":\"8\",\"descripcion\":\"Calientes\",\"cantidad\":\"8\",\"stock\":\"119\",\"stock2\":\"127\",\"precio\":\"29.4\",\"total\":\"235.2\"},{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"2\",\"stock\":\"4228\",\"stock2\":\"4230\",\"precio\":\"2.8\",\"total\":\"5.6\"}]', 0, 2150.4, 2150.4, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"5\",\"stock\":\"5\",\"stock2\":\"1109\",\"precio\":\"5.6\",\"total\":\"28\"},{\"id\":\"13\",\"descripcion\":\"Kit mixto\",\"cantidad\":\"10\",\"stock\":\"10\",\"stock2\":\"114\",\"precio\":\"16.8\",\"total\":\"168\"},{\"id\":\"14\",\"descripcion\":\"Pan pueblo\",\"cantidad\":\"6\",\"stock\":\"6\",\"stock2\":\"294\",\"precio\":\"47.6\",\"total\":\"285.6\"},{\"id\":\"16\",\"descripcion\":\"Cacahuate garrapinado\",\"cantidad\":\"5\",\"stock\":\"5\",\"stock2\":\"141\",\"precio\":\"7\",\"total\":\"35\"},{\"id\":\"15\",\"descripcion\":\"Camote y calabaza\",\"cantidad\":\"50\",\"stock\":\"50\",\"stock2\":\"52\",\"precio\":\"16.8\",\"total\":\"840\"},{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"10\",\"stock\":\"10\",\"stock2\":\"23176\",\"precio\":\"2.8\",\"total\":\"28\"},{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"15\",\"stock\":\"15\",\"stock2\":\"342394\",\"precio\":\"29.4\",\"total\":\"441\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"5\",\"stock\":\"5\",\"stock2\":\"31413\",\"precio\":\"16.8\",\"total\":\"84\"},{\"id\":\"8\",\"descripcion\":\"Calientes\",\"cantidad\":\"8\",\"stock\":\"8\",\"stock2\":\"119\",\"precio\":\"29.4\",\"total\":\"235.2\"},{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"2\",\"stock\":\"2\",\"stock2\":\"4228\",\"precio\":\"2.8\",\"total\":\"5.6\"}]', 'Efectivo', '2021-03-27 21:16:55'),
(14, 10014, 23, 69, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"116\",\"stock\":\"240000\",\"stock2\":\"\",\"precio\":\"5.6\",\"total\":\"649.6\"},{\"id\":\"15\",\"descripcion\":\"Camote y calabaza\",\"cantidad\":\"202\",\"stock\":\"21000\",\"stock2\":\"\",\"precio\":\"16.8\",\"total\":\"3393.6\"},{\"id\":\"4\",\"descripcion\":\"buen provecho\",\"cantidad\":\"6\",\"stock\":\"130\",\"stock2\":\"\",\"precio\":\"2.8\",\"total\":\"16.8\"}]', 0, 0, 0, '', 'Efectivo', '2021-03-26 16:06:17'),
(15, 10015, 23, 69, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"1\",\"stock\":\"239989\",\"stock2\":\"239990\",\"precio\":\"5.6\",\"total\":\"5.6\"},{\"id\":\"16\",\"descripcion\":\"Cacahuate garrapinado\",\"cantidad\":\"1\",\"stock\":\"43087\",\"stock2\":\"43088\",\"precio\":\"7\",\"total\":\"7\"},{\"id\":\"15\",\"descripcion\":\"Camote y calabaza\",\"cantidad\":\"1\",\"stock\":\"21067\",\"stock2\":\"21068\",\"precio\":\"16.8\",\"total\":\"16.8\"}]', 0, 29.4, 29.4, '', 'Efectivo', '2021-03-30 19:12:45'),
(16, 10016, 23, 68, '[{\"id\":\"15\",\"descripcion\":\"Camote y calabaza\",\"cantidad\":\"1\",\"stock\":\"21067\",\"stock2\":\"21068\",\"precio\":\"16.8\",\"total\":\"16.8\"},{\"id\":\"16\",\"descripcion\":\"Cacahuate garrapinado\",\"cantidad\":\"1\",\"stock\":\"43087\",\"stock2\":\"43088\",\"precio\":\"7\",\"total\":\"7\"},{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"1\",\"stock\":\"4229\",\"stock2\":\"4230\",\"precio\":\"2.8\",\"total\":\"2.8\"},{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"1\",\"stock\":\"342408\",\"stock2\":\"342409\",\"precio\":\"29.4\",\"total\":\"29.4\"},{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"1\",\"stock\":\"23185\",\"stock2\":\"23186\",\"precio\":\"2.8\",\"total\":\"2.8\"}]', 0, 58.8, 58.8, '', 'Efectivo', '2021-03-28 04:24:30'),
(17, 10017, 23, 68, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"1\",\"stock\":\"239989\",\"stock2\":\"239990\",\"precio\":\"5.6\",\"total\":\"5.6\"},{\"id\":\"15\",\"descripcion\":\"Camote y calabaza\",\"cantidad\":\"1\",\"stock\":\"21067\",\"stock2\":\"21068\",\"precio\":\"16.8\",\"total\":\"16.8\"},{\"id\":\"13\",\"descripcion\":\"Kit mixto\",\"cantidad\":\"1\",\"stock\":\"42076\",\"stock2\":\"42077\",\"precio\":\"16.8\",\"total\":\"16.8\"},{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"1\",\"stock\":\"23185\",\"stock2\":\"23186\",\"precio\":\"2.8\",\"total\":\"2.8\"}]', 0, 42, 42, '0', 'Efectivo', '2021-03-30 16:49:32'),
(18, 10018, 23, 68, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"1\",\"stock\":\"9\",\"stock2\":\"239980\",\"precio\":\"5.6\",\"total\":\"5.6\"},{\"id\":\"16\",\"descripcion\":\"Cacahuate garrapinado\",\"cantidad\":\"1\",\"stock\":\"9\",\"stock2\":\"43078\",\"precio\":\"7\",\"total\":\"7\"},{\"id\":\"14\",\"descripcion\":\"Pan pueblo\",\"cantidad\":\"1\",\"stock\":\"9\",\"stock2\":\"12002\",\"precio\":\"47.6\",\"total\":\"47.6\"}]', 0, 0, 0, '', 'Efectivo', '2021-03-31 22:22:21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `codigo` text COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `imagen` text COLLATE utf8_spanish_ci NOT NULL,
  `stock_inicial` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `precio_compra` float NOT NULL,
  `precio_venta` float NOT NULL,
  `ventas` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `id_categoria`, `codigo`, `descripcion`, `imagen`, `stock_inicial`, `stock`, `precio_compra`, `precio_venta`, `ventas`, `fecha`) VALUES
(2, 7, '0001', 'Aloe vera', 'vistas/img/productos/default/anonymous.png', 1000, 63, 3, 4.2, 0, '2021-03-03 02:47:43'),
(3, 7, '2342', 'Cacahuate garrapinado', 'vistas/img/productos/default/anonymous.png', 3000, 46, 2, 2.8, 0, '2021-03-16 15:15:46'),
(4, 7, '32321', 'buen provecho', 'vistas/img/productos/default/anonymous.png', 4213221, 130, 2, 2.8, 6, '2021-03-26 16:07:00'),
(5, 7, '43242', 'maiz', 'vistas/img/productos/default/anonymous.png', 32425, 30, 12, 16.8, 4, '2021-03-18 20:02:10'),
(6, 7, '564342', 'papa', 'vistas/img/productos/default/anonymous.png', 21321, 5531, 21, 29.4, 0, '2021-03-16 15:39:02'),
(7, 7, '62342', 'yuca', 'vistas/img/productos/default/anonymous.png', 4324321, 67, 1, 1.4, 0, '2021-03-16 15:15:46'),
(8, 8, '323121', 'Calientes', 'vistas/img/productos/default/anonymous.png', 12, 127, 21, 29.4, 0, '2021-03-16 15:15:46'),
(9, 7, '57654', 'cebolla', 'vistas/img/productos/default/anonymous.png', 32432, 31418, 12, 16.8, 58, '2021-03-20 17:35:29'),
(10, 7, '53432', 'yogurt', 'vistas/img/productos/default/anonymous.png', 342434, 342409, 21, 29.4, 39, '2021-03-20 17:35:29'),
(11, 8, '243fs', 'aguila', 'vistas/img/productos/default/anonymous.png', 23543, 23186, 2, 2.8, 294, '2021-03-26 21:13:55'),
(12, 8, '4234tr', 'dinosaurio', 'vistas/img/productos/default/anonymous.png', 4243, 4230, 2, 2.8, 29, '2021-03-18 20:02:10'),
(13, 7, '09434570218', 'Kit mixto', 'vistas/img/productos/default/anonymous.png', 42343, 42067, 12, 16.8, 159, '2021-03-31 22:21:43'),
(14, 7, '09434129096', 'Pan pueblo', 'vistas/img/productos/default/anonymous.png', 12312, 12002, 34, 47.6, 52, '2021-03-31 22:22:20'),
(15, 7, '09434570201', 'Camote y calabaza', 'vistas/img/productos/default/anonymous.png', 21314, 21068, 12, 16.8, 155, '2021-03-26 21:13:55'),
(16, 7, '09434151196', 'Cacahuate garrapinado', 'vistas/img/productos/default/anonymous.png', 43242, 43078, 5, 7, 72, '2021-03-31 22:22:20'),
(17, 7, '09434801787', 'Cacahuate paketon', 'vistas/img/productos/default/anonymous.png', 241241, 239980, 4, 5.6, 177, '2021-03-31 22:22:20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` text COLLATE utf8_spanish_ci NOT NULL,
  `usuario` text COLLATE utf8_spanish_ci NOT NULL,
  `password` text COLLATE utf8_spanish_ci NOT NULL,
  `perfil` text COLLATE utf8_spanish_ci NOT NULL,
  `foto` text COLLATE utf8_spanish_ci NOT NULL,
  `estado` int(11) NOT NULL,
  `stock_inicial` int(11) NOT NULL,
  `productos` text COLLATE utf8_spanish_ci,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL,
  `ultimo_login` datetime NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `usuario`, `password`, `perfil`, `foto`, `estado`, `stock_inicial`, `productos`, `latitud`, `longitud`, `ultimo_login`, `fecha`) VALUES
(62, 'daniela', 'danielita', '$2a$07$asxx54ahjppf45sd87a5au7/ejRHmeDFS/TGMGLm2gldCtSC1Bbva', 'Vendedor', 'vistas/img/usuarios/danielita/905.jpg', 1, 0, '[{\n					\n							\"id\":\"9\",\n							\"descripcion\":\"cebolla\",\n							\"cantidad\":\"1\",\n							\"stock\":\"9\",\n							\"stock2\":\"32403\",\n							\"precio\":\"16.8\",\n							\"total\":\"16.8\"\n						},{\n					\n							\"id\":\"11\",\n							\"descripcion\":\"aguila\",\n							\"cantidad\":\"1\",\n							\"stock\":\"9\",\n							\"stock2\":\"23374\",\n							\"precio\":\"2.8\",\n							\"total\":\"2.8\"\n						},{\n					\n						\"id\":\"6\",\n						\"descripcion\":\"papa\",\n						\"cantidad\":\"10\",\n						\"stock\":\"10\",\n						\"stock2\":\"5531\",\n						\"precio\":\"29.4\",\n						\"total\":\"294\"\n					}]', 2.93, -75.2797, '2021-03-18 11:39:27', '2021-03-18 16:40:15'),
(63, 'felipe', 'felipe19', '$2a$07$asxx54ahjppf45sd87a5auooC8ONLUe/XjwREBDavU846Gvv810uG', 'Administrador', '', 1, 0, '', 1.6154624, -75.6056064, '2021-09-18 13:40:36', '2021-09-18 18:40:38'),
(68, 'prueba', 'prueba', '$2a$07$asxx54ahjppf45sd87a5auBxWKi32TyN7LTmhz0ONBYdcwSQJ0lWO', 'Vendedor', '', 1, 0, '[{\n				\n					\"id\":\"17\",\n					\"descripcion\":\"Cacahuate paketon\",\n					\"cantidad\":\"1\",\n					\"stock\":\"9\",\n					\"stock2\":\"239980\",\n					\"precio\":\"5.6\",\n					\"total\":\"5.6\"\n				},{\n				\n					\"id\":\"16\",\n					\"descripcion\":\"Cacahuate garrapinado\",\n					\"cantidad\":\"1\",\n					\"stock\":\"9\",\n					\"stock2\":\"43078\",\n					\"precio\":\"7\",\n					\"total\":\"7\"\n				},{\n				\n					\"id\":\"14\",\n					\"descripcion\":\"Pan pueblo\",\n					\"cantidad\":\"1\",\n					\"stock\":\"9\",\n					\"stock2\":\"12002\",\n					\"precio\":\"47.6\",\n					\"total\":\"47.6\"\n				},{\n					\n						\"id\":\"13\",\n						\"descripcion\":\"Kit mixto\",\n						\"cantidad\":\"10\",\n						\"stock\":\"10\",\n						\"stock2\":\"42067\",\n						\"precio\":\"16.8\",\n						\"total\":\"168\"\n					}]', 2.93, -75.2797, '2021-04-02 14:41:52', '2021-04-02 19:41:52'),
(69, 'prueba2', 'prueba2', '$2a$07$asxx54ahjppf45sd87a5auHZPYySdWSMpJQy0/17lrojl4DUlQYIi', 'Especial', '', 1, 0, '', 2.93, -75.2797, '2021-03-30 14:12:17', '2021-03-30 19:12:17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_productos`
--

CREATE TABLE `usuarios_productos` (
  `id` int(11) NOT NULL,
  `usuario` text COLLATE utf8_spanish_ci NOT NULL,
  `stock_inicial` int(11) NOT NULL,
  `productos` text COLLATE utf8_spanish_ci NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios_productos`
--

INSERT INTO `usuarios_productos` (`id`, `usuario`, `stock_inicial`, `productos`, `fecha`) VALUES
(1, 'prueba', 179, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"140\",\"stock\":\"140\",\"stock2\":\"23397\",\"precio\":\"2.8\",\"total\":\"392\"},{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"25\",\"stock\":\"25\",\"stock2\":\"342409\",\"precio\":\"29.4\",\"total\":\"735\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"14\",\"stock\":\"14\",\"stock2\":\"32418\",\"precio\":\"16.8\",\"total\":\"235.2\"}]', '2021-03-16 15:22:22'),
(2, 'prueba', 179, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"140\",\"stock\":\"140\",\"stock2\":\"23397\",\"precio\":\"2.8\",\"total\":\"392\"},{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"25\",\"stock\":\"25\",\"stock2\":\"342409\",\"precio\":\"29.4\",\"total\":\"735\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"14\",\"stock\":\"14\",\"stock2\":\"32418\",\"precio\":\"16.8\",\"total\":\"235.2\"},{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"10\",\"stock\":\"10\",\"stock2\":\"4230\",\"precio\":\"2.8\",\"total\":\"28\"}]', '2021-03-16 15:22:51'),
(3, 'danielita', 41, '[{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"23\",\"stock\":\"23\",\"stock2\":\"4207\",\"precio\":\"2.8\",\"total\":\"64.4\"},{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"13\",\"stock\":\"13\",\"stock2\":\"23384\",\"precio\":\"2.8\",\"total\":\"36.4\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"5\",\"stock\":\"5\",\"stock2\":\"32413\",\"precio\":\"16.8\",\"total\":\"84\"}]', '2021-03-16 15:29:57'),
(4, 'danielita', 30, '[{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"10\",\"stock\":\"10\",\"stock2\":\"32403\",\"precio\":\"16.8\",\"total\":\"168\"},{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"10\",\"stock\":\"10\",\"stock2\":\"23374\",\"precio\":\"2.8\",\"total\":\"28\"},{\"id\":\"6\",\"descripcion\":\"papa\",\"cantidad\":\"10\",\"stock\":\"10\",\"stock2\":\"5531\",\"precio\":\"29.4\",\"total\":\"294\"}]', '2021-03-16 15:39:02'),
(5, 'prueba', 45, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"136\",\"stock\":\"136\",\"stock2\":\"23397\",\"precio\":\"2.8\",\"total\":\"11.2\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"8\",\"stock\":\"8\",\"stock2\":\"32418\",\"precio\":\"16.8\",\"total\":\"100.8\"},{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"25\",\"stock\":\"25\",\"stock2\":\"342409\",\"precio\":\"29.4\",\"total\":\"735\"},{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"10\",\"stock\":\"10\",\"stock2\":\"4230\",\"precio\":\"2.8\",\"total\":\"28\"},{\"id\":\"5\",\"descripcion\":\"maiz\",\"cantidad\":\"9\",\"stock\":\"9\",\"stock2\":\"30\",\"precio\":\"16.8\",\"total\":\"151.2\"}]', '2021-03-18 15:55:01'),
(6, 'prueba', 15, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"117\",\"stock\":\"117\",\"stock2\":\"23397\",\"precio\":\"2.8\",\"total\":\"8.4\"},{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"9\",\"stock\":\"9\",\"stock2\":\"342409\",\"precio\":\"29.4\",\"total\":\"147\"},{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"5\",\"stock\":\"5\",\"stock2\":\"4230\",\"precio\":\"2.8\",\"total\":\"2.8\"},{\"id\":\"5\",\"descripcion\":\"maiz\",\"cantidad\":\"5\",\"stock\":\"5\",\"stock2\":\"30\",\"precio\":\"16.8\",\"total\":\"67.2\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"1000\",\"stock\":\"1000\",\"stock2\":\"31418\",\"precio\":\"16.8\",\"total\":\"16800\"}]', '2021-03-18 20:02:10'),
(7, 'prueba', 1515, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"1125\",\"stock\":\"1125\",\"stock2\":\"240116\",\"precio\":\"5.6\",\"total\":\"6300\"},{\"id\":\"16\",\"descripcion\":\"Cacahuate garrapinado\",\"cantidad\":\"154\",\"stock\":\"154\",\"stock2\":\"43088\",\"precio\":\"7\",\"total\":\"1078\"},{\"id\":\"15\",\"descripcion\":\"Camote y calabaza\",\"cantidad\":\"112\",\"stock\":\"112\",\"stock2\":\"21202\",\"precio\":\"16.8\",\"total\":\"1881.6\"},{\"id\":\"13\",\"descripcion\":\"Kit mixto\",\"cantidad\":\"124\",\"stock\":\"124\",\"stock2\":\"42219\",\"precio\":\"16.8\",\"total\":\"2083.2\"}]', '2021-03-20 17:40:52'),
(8, 'prueba', 153, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"1114\",\"stock\":\"1114\",\"stock2\":\"240116\",\"precio\":\"5.6\",\"total\":\"61.6\"},{\"id\":\"16\",\"descripcion\":\"Cacahuate garrapinado\",\"cantidad\":\"146\",\"stock\":\"146\",\"stock2\":\"43088\",\"precio\":\"7\",\"total\":\"56\"},{\"id\":\"15\",\"descripcion\":\"Camote y calabaza\",\"cantidad\":\"102\",\"stock\":\"102\",\"stock2\":\"21202\",\"precio\":\"16.8\",\"total\":\"168\"},{\"id\":\"13\",\"descripcion\":\"Kit mixto\",\"cantidad\":\"124\",\"stock\":\"124\",\"stock2\":\"42219\",\"precio\":\"16.8\",\"total\":\"2083.2\"},{\"id\":\"14\",\"descripcion\":\"Pan pueblo\",\"cantidad\":\"300\",\"stock\":\"300\",\"stock2\":\"12012\",\"precio\":\"47.6\",\"total\":\"14280\"}]', '2021-03-26 16:01:57'),
(9, 'prueba', 40, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"10\",\"stock\":\"10\",\"stock2\":\"239980\",\"precio\":\"5.6\",\"total\":\"56\"},{\"id\":\"16\",\"descripcion\":\"Cacahuate garrapinado\",\"cantidad\":\"10\",\"stock\":\"10\",\"stock2\":\"43078\",\"precio\":\"7\",\"total\":\"70\"},{\"id\":\"14\",\"descripcion\":\"Pan pueblo\",\"cantidad\":\"10\",\"stock\":\"10\",\"stock2\":\"12002\",\"precio\":\"47.6\",\"total\":\"476\"},{\"id\":\"13\",\"descripcion\":\"Kit mixto\",\"cantidad\":\"10\",\"stock\":\"10\",\"stock2\":\"42067\",\"precio\":\"16.8\",\"total\":\"168\"}]', '2021-03-31 22:21:43');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id` int(11) NOT NULL,
  `codigo` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_vendedor` int(11) NOT NULL,
  `productos` text COLLATE utf8_spanish_ci NOT NULL,
  `impuesto` float NOT NULL,
  `neto` float NOT NULL,
  `neto1` float NOT NULL,
  `total` float NOT NULL,
  `devoluciones` text COLLATE utf8_spanish_ci NOT NULL,
  `metodo_pago` text COLLATE utf8_spanish_ci NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id`, `codigo`, `id_cliente`, `id_vendedor`, `productos`, `impuesto`, `neto`, `neto1`, `total`, `devoluciones`, `metodo_pago`, `fecha`) VALUES
(1, 10001, 23, 69, '[{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"3\",\"stock\":\"4240\",\"stock2\":\"4243\",\"precio\":\"2.8\",\"total\":\"8.4\"},{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"6\",\"stock\":\"23537\",\"stock2\":\"23543\",\"precio\":\"2.8\",\"total\":\"16.8\"}]', 0, 19.6, 19.6, 19.6, '', 'Efectivo', '2021-03-16 15:18:48'),
(2, 10002, 23, 68, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"4\",\"stock\":\"136\",\"stock2\":\"23397\",\"precio\":\"2.8\",\"total\":\"11.2\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"6\",\"stock\":\"8\",\"stock2\":\"32418\",\"precio\":\"16.8\",\"total\":\"100.8\"}]', 0, 112, 112, 112, '', 'Efectivo', '2021-03-27 21:46:51'),
(3, 10003, 20, 62, '[{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"5\",\"stock\":\"18\",\"stock2\":\"4207\",\"precio\":\"2.8\",\"total\":\"14\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"5\",\"stock\":\"15\",\"stock2\":\"32413\",\"precio\":\"16.8\",\"total\":\"84\"}]', 0, 98, 47.6, 98, '[{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"5\",\"stock\":\"5\",\"stock2\":\"18\",\"precio\":\"2.8\",\"total\":\"14\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"5\",\"stock\":\"5\",\"stock2\":\"15\",\"precio\":\"16.8\",\"total\":\"84\"}]', 'Efectivo', '2021-03-16 15:36:56'),
(4, 10004, 20, 62, '[{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"3\",\"stock\":\"0\",\"stock2\":\"32413\",\"precio\":\"16.8\",\"total\":\"50.4\"}]', 0, 50.4, 50.4, 50.4, '', 'Efectivo', '2021-03-16 15:33:47'),
(5, 10005, 20, 62, '[{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"1\",\"stock\":\"9\",\"stock2\":\"32403\",\"precio\":\"16.8\",\"total\":\"16.8\"},{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"1\",\"stock\":\"9\",\"stock2\":\"23374\",\"precio\":\"2.8\",\"total\":\"2.8\"}]', 0, 19.6, 92.4, 19.6, '[{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"1\",\"stock\":\"1\",\"stock2\":\"9\",\"precio\":\"16.8\",\"total\":\"16.8\"},{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"1\",\"stock\":\"1\",\"stock2\":\"9\",\"precio\":\"2.8\",\"total\":\"2.8\"}]', 'Efectivo', '2021-03-18 16:40:15'),
(6, 10006, 23, 68, '[{\"id\":\"5\",\"descripcion\":\"maiz\",\"cantidad\":\"4\",\"stock\":\"5\",\"stock2\":\"30\",\"precio\":\"16.8\",\"total\":\"67.2\"},{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"5\",\"stock\":\"131\",\"stock2\":\"23397\",\"precio\":\"2.8\",\"total\":\"14\"},{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"8\",\"stock\":\"17\",\"stock2\":\"342409\",\"precio\":\"29.4\",\"total\":\"235.2\"}]', 0, 112, 112, 112, '', 'Efectivo', '2021-03-18 15:59:11'),
(7, 10007, 23, 68, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"10\",\"stock\":\"121\",\"stock2\":\"23397\",\"precio\":\"2.8\",\"total\":\"28\"},{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"3\",\"stock\":\"7\",\"stock2\":\"4230\",\"precio\":\"2.8\",\"total\":\"8.4\"}]', 0, 19.6, 19.6, 19.6, '', 'Efectivo', '2021-03-18 16:13:36'),
(8, 10008, 23, 68, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"1\",\"stock\":\"120\",\"stock2\":\"23397\",\"precio\":\"2.8\",\"total\":\"2.8\"},{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"1\",\"stock\":\"6\",\"stock2\":\"4230\",\"precio\":\"2.8\",\"total\":\"2.8\"},{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"3\",\"stock\":\"14\",\"stock2\":\"342409\",\"precio\":\"29.4\",\"total\":\"88.2\"}]', 0, 5.6, 5.6, 5.6, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"1\",\"stock\":\"1\",\"stock2\":\"120\",\"precio\":\"2.8\",\"total\":\"2.8\"},{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"1\",\"stock\":\"1\",\"stock2\":\"6\",\"precio\":\"2.8\",\"total\":\"2.8\"},{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"3\",\"stock\":\"3\",\"stock2\":\"14\",\"precio\":\"29.4\",\"total\":\"88.2\"}]', 'Efectivo', '2021-03-18 19:23:55'),
(9, 10009, 23, 68, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"3\",\"stock\":\"117\",\"stock2\":\"23397\",\"precio\":\"2.8\",\"total\":\"8.4\"},{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"5\",\"stock\":\"9\",\"stock2\":\"342409\",\"precio\":\"29.4\",\"total\":\"147\"},{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"1\",\"stock\":\"5\",\"stock2\":\"4230\",\"precio\":\"2.8\",\"total\":\"2.8\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"2\",\"stock\":\"32416\",\"precio\":\"16.8\",\"total\":\"33.6\"}]', 0, 191.8, 99.4, 191.8, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"3\",\"stock\":\"3\",\"stock2\":\"117\",\"precio\":\"2.8\",\"total\":\"8.4\"},{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"5\",\"stock\":\"5\",\"stock2\":\"9\",\"precio\":\"29.4\",\"total\":\"147\"},{\"id\":\"12\",\"descripcion\":\"dinosaurio\",\"cantidad\":\"1\",\"stock\":\"1\",\"stock2\":\"5\",\"precio\":\"2.8\",\"total\":\"2.8\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"2\",\"stock\":\"2\",\"stock2\":\"32416\",\"precio\":\"16.8\",\"total\":\"33.6\"}]', 'Efectivo', '2021-03-18 19:55:21'),
(10, 10010, 23, 68, '[{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"10\",\"stock\":\"990\",\"stock2\":\"31418\",\"precio\":\"16.8\",\"total\":\"168\"},{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"16\",\"stock\":\"101\",\"stock2\":\"23397\",\"precio\":\"2.8\",\"total\":\"44.8\"}]', 0, 212.8, 19.6, 212.8, '[{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"10\",\"stock\":\"10\",\"stock2\":\"990\",\"precio\":\"16.8\",\"total\":\"168\"},{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"16\",\"stock\":\"16\",\"stock2\":\"101\",\"precio\":\"2.8\",\"total\":\"44.8\"}]', 'Efectivo', '2021-03-20 17:16:22'),
(11, 10011, 23, 68, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"5\",\"stock\":\"96\",\"stock2\":\"23397\",\"precio\":\"2.8\",\"total\":\"14\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"10\",\"stock\":\"980\",\"stock2\":\"31418\",\"precio\":\"16.8\",\"total\":\"168\"},{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"9\",\"stock\":\"0\",\"stock2\":\"342409\",\"precio\":\"29.4\",\"total\":\"264.59999999999997\"}]', 0, 446.6, 414.4, 446.6, '[{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"5\",\"stock\":\"5\",\"stock2\":\"96\",\"precio\":\"2.8\",\"total\":\"14\"},{\"id\":\"9\",\"descripcion\":\"cebolla\",\"cantidad\":\"10\",\"stock\":\"10\",\"stock2\":\"980\",\"precio\":\"16.8\",\"total\":\"168\"},{\"id\":\"10\",\"descripcion\":\"yogurt\",\"cantidad\":\"9\",\"stock\":\"9\",\"stock2\":\"0\",\"precio\":\"29.4\",\"total\":\"264.59999999999997\"}]', 'Efectivo', '2021-03-20 17:35:29'),
(12, 10012, 22, 68, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"11\",\"stock\":\"1114\",\"stock2\":\"240116\",\"precio\":\"5.6\",\"total\":\"61.599999999999994\"},{\"id\":\"16\",\"descripcion\":\"Cacahuate garrapinado\",\"cantidad\":\"8\",\"stock\":\"146\",\"stock2\":\"43088\",\"precio\":\"7\",\"total\":\"56\"},{\"id\":\"15\",\"descripcion\":\"Camote y calabaza\",\"cantidad\":\"10\",\"stock\":\"102\",\"stock2\":\"21202\",\"precio\":\"16.8\",\"total\":\"168\"}]', 0, 5.6, 5.6, 5.6, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"11\",\"stock\":\"11\",\"stock2\":\"1114\",\"precio\":\"5.6\",\"total\":\"61.599999999999994\"},{\"id\":\"16\",\"descripcion\":\"Cacahuate garrapinado\",\"cantidad\":\"8\",\"stock\":\"8\",\"stock2\":\"146\",\"precio\":\"7\",\"total\":\"56\"},{\"id\":\"15\",\"descripcion\":\"Camote y calabaza\",\"cantidad\":\"10\",\"stock\":\"10\",\"stock2\":\"102\",\"precio\":\"16.8\",\"total\":\"168\"}]', 'Efectivo', '2021-03-21 01:06:09'),
(13, 10013, 23, 68, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"5\",\"stock\":\"1109\",\"stock2\":\"240116\",\"precio\":\"5.6\",\"total\":\"28\"},{\"id\":\"13\",\"descripcion\":\"Kit mixto\",\"cantidad\":\"10\",\"stock\":\"114\",\"stock2\":\"42219\",\"precio\":\"16.8\",\"total\":\"168\"},{\"id\":\"14\",\"descripcion\":\"Pan pueblo\",\"cantidad\":\"6\",\"stock\":\"294\",\"stock2\":\"12012\",\"precio\":\"47.6\",\"total\":\"285.6\"}]', 0, 1, 1, 1, '', 'Efectivo', '2021-03-27 21:16:55'),
(14, 10014, 23, 69, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"116\",\"stock\":\"240000\",\"precio\":\"5.6\",\"total\":\"649.6\"},{\"id\":\"15\",\"descripcion\":\"Camote y calabaza\",\"cantidad\":\"2\",\"stock\":\"21200\",\"precio\":\"16.8\",\"total\":\"33.6\"},{\"id\":\"4\",\"descripcion\":\"buen provecho\",\"cantidad\":\"6\",\"stock\":\"130\",\"precio\":\"2.8\",\"total\":\"16.8\"}]', 0, 700, 4060, 700, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"116\",\"stock\":\"116\",\"stock2\":\"240000\",\"precio\":\"5.6\",\"total\":\"649.6\"},{\"id\":\"15\",\"descripcion\":\"Camote y calabaza\",\"cantidad\":\"2\",\"stock\":\"2\",\"stock2\":\"21200\",\"precio\":\"16.8\",\"total\":\"33.6\"},{\"id\":\"4\",\"descripcion\":\"buen provecho\",\"cantidad\":\"6\",\"stock\":\"6\",\"stock2\":\"130\",\"precio\":\"2.8\",\"total\":\"16.8\"}]', 'Efectivo', '2021-03-26 16:07:00'),
(15, 10015, 23, 69, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"10\",\"stock\":\"239990\",\"stock2\":\"240000\",\"precio\":\"5.6\",\"total\":\"56\"},{\"id\":\"15\",\"descripcion\":\"Camote y calabaza\",\"cantidad\":\"132\",\"stock\":\"21068\",\"stock2\":\"21200\",\"precio\":\"16.8\",\"total\":\"2217.6\"},{\"id\":\"13\",\"descripcion\":\"Kit mixto\",\"cantidad\":\"142\",\"stock\":\"42077\",\"stock2\":\"42219\",\"precio\":\"16.8\",\"total\":\"2385.6\"},{\"id\":\"11\",\"descripcion\":\"aguila\",\"cantidad\":\"211\",\"stock\":\"23186\",\"stock2\":\"23397\",\"precio\":\"2.8\",\"total\":\"590.8\"}]', 0, 24.4, 24.4, 24.4, '', 'Efectivo', '2021-03-30 19:12:45'),
(16, 10016, 23, 68, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"10\",\"stock\":\"1099\",\"stock2\":\"240116\",\"precio\":\"5.6\",\"total\":\"56\"},{\"id\":\"14\",\"descripcion\":\"Pan pueblo\",\"cantidad\":\"15\",\"stock\":\"279\",\"stock2\":\"12012\",\"precio\":\"47.6\",\"total\":\"714\"},{\"id\":\"16\",\"descripcion\":\"Cacahuate garrapinado\",\"cantidad\":\"11\",\"stock\":\"135\",\"stock2\":\"43088\",\"precio\":\"7\",\"total\":\"77\"},{\"id\":\"13\",\"descripcion\":\"Kit mixto\",\"cantidad\":\"7\",\"stock\":\"107\",\"stock2\":\"42219\",\"precio\":\"16.8\",\"total\":\"117.6\"}]', 0, 905.8, 0, 905.8, '', 'Efectivo', '2021-03-28 04:24:30'),
(17, 10017, 23, 68, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"5\",\"stock\":\"1094\",\"stock2\":\"240116\",\"precio\":\"5.6\",\"total\":\"28\"},{\"id\":\"14\",\"descripcion\":\"Pan pueblo\",\"cantidad\":\"15\",\"stock\":\"264\",\"stock2\":\"12012\",\"precio\":\"47.6\",\"total\":\"714\"},{\"id\":\"16\",\"descripcion\":\"Cacahuate garrapinado\",\"cantidad\":\"20\",\"stock\":\"115\",\"stock2\":\"43088\",\"precio\":\"7\",\"total\":\"140\"}]', 0, 798, 0, 798, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"5\",\"stock\":\"5\",\"stock2\":\"1094\",\"precio\":\"5.6\",\"total\":\"28\"},{\"id\":\"14\",\"descripcion\":\"Pan pueblo\",\"cantidad\":\"15\",\"stock\":\"15\",\"stock2\":\"264\",\"precio\":\"47.6\",\"total\":\"714\"},{\"id\":\"16\",\"descripcion\":\"Cacahuate garrapinado\",\"cantidad\":\"20\",\"stock\":\"20\",\"stock2\":\"115\",\"precio\":\"7\",\"total\":\"140\"}]', 'Efectivo', '2021-03-30 16:49:32'),
(18, 10018, 23, 68, '[{\"id\":\"17\",\"descripcion\":\"Cacahuate paketon\",\"cantidad\":\"1\",\"stock\":\"9\",\"stock2\":\"239980\",\"precio\":\"5.6\",\"total\":\"5.6\"},{\"id\":\"16\",\"descripcion\":\"Cacahuate garrapinado\",\"cantidad\":\"1\",\"stock\":\"9\",\"stock2\":\"43078\",\"precio\":\"7\",\"total\":\"7\"},{\"id\":\"14\",\"descripcion\":\"Pan pueblo\",\"cantidad\":\"1\",\"stock\":\"9\",\"stock2\":\"12002\",\"precio\":\"47.6\",\"total\":\"47.6\"}]', 0, 60.2, 60.2, 60.2, '', 'Efectivo', '2021-03-31 22:22:21');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `devoluciones`
--
ALTER TABLE `devoluciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios_productos`
--
ALTER TABLE `usuarios_productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT de la tabla `devoluciones`
--
ALTER TABLE `devoluciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;
--
-- AUTO_INCREMENT de la tabla `usuarios_productos`
--
ALTER TABLE `usuarios_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
