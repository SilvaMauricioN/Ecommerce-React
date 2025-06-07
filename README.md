# 🛒 ECOMMERCE App

Esta es una aplicación de e-commerce desarrollada en **React**, diseñada para mostrar productos tecnológicos en una interfaz moderna. Está desplegada en **Vercel** y permite a los usuarios registrarse, iniciar sesión, explorar productos y ver detalles individuales.

---

## 🚀 Tecnologías utilizadas

- ⚛️ React
- ⚡ Vite
- 📦 Firebase (para autenticación y base de datos)
- 📄 CSS Vanilla
- 🌐 React Router DOM
- ☁️ Vercel (despliegue)

---

## 🧩 Estructura de la App

El componente principal `App` renderiza los siguientes elementos:

- `Sidebar`: barra lateral de navegación.
- `NavBar`: barra superior con acciones generales.
- `ProductFilter`: filtros de categoría o búsqueda de productos.
- `Routes`: define las rutas principales de navegación.

### 🧭 Rutas configuradas

| Ruta            | Componente             | Descripción                          |
|-----------------|------------------------|--------------------------------------|
| `/`             | `LoginPage`            | Página principal (login)             |
| `/registro`     | `RegisterPage`         | Página de registro                   |
| `/login`        | `LoginPage`            | Página de inicio de sesión           |
| `/home`         | `ProductListPage`      | Lista de productos                   |
| `/detalle`      | `ProductInfoPage`      | Vista de detalle general             |
| `/detalle/:id`  | `ProductInfoPage`      | Vista de detalle por producto (ID)   |

---



