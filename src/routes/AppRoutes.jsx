//rafce
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import Header from "../components/Header";
import Productforsale from "../components/Productforsale";
import Community from "../components/Community";
import Pixelgrade from "../components/Pixelgrade";
import AllArticlesPage from "../pages/AllArticlesPage";
import Contactus from "../components/Contactus";
import CatalogProduct from "../catalog/CatalogProduct";
import Workandservices from "../pages/Workandservices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "header", element: <Header /> },
      { path: "Productforsale", element: <Productforsale /> },
      { path: "Community", element: <Community /> },
      { path: "Pixelgrade", element: <Pixelgrade /> },
      { path: "articles", element: <AllArticlesPage /> },
      { path: "contact", element: <Contactus /> },
      { path: "Catalog", element: <CatalogProduct /> },
      { path: "Workandservices", element: <Workandservices /> },
    //   { path: "details", element: <ProductDetails /> },
    //   { path: "productuser/:id", element: <ProductUser /> },
    //   { path: "hardness", element: <PHardness /> },
    //   { path: "AllProduct", element: <AllProduct /> },
    //   { path: "Article1", element: <News1 /> },
    //   { path: "Catalog", element: <CatalogProduct /> },
    //   { path: "ForgotPassword", element: <ForgotPassword /> },
    //   { path: "Workandservice", element: <Workandservice /> },
      
      ,
    ],
  },
//   {
//     path: "/admin",
//     element: <ProtectRouteAdmin element={<LayoutAdmin />} />,
//     children: [
//       { index: true, element: <Dashboard /> },
//       { path: "category", element: <Category /> },
//       { path: "product", element: <Product /> },
//       { path: "product/:id", element: <EditProduct /> },
//       { path: "manage", element: <Manage /> },
//       { path: "orders", element: <ManageOrders /> },
//       { path: "brand", element: <Brand /> },
//       { path: "brand/:id", element: <EditBrand /> },
//       { path: "article", element: <Article /> },
//       // { path: "dashboard", element: <StateContainer /> },
//       { path: "dashboard", element: <DashboardAdmin /> },
//     ],
//   },
//   {
//     path: "/user",
//     // element: <LayoutUser />,
//     element: <ProtectRouteUser element={<LayoutUser />} />,
//     children: [
//       { index: true, element: <HomeUser /> },
//       { path: "history", element: <History /> },
//       { path: "payment", element: <Payment /> },
//     ],
//   },
]);
const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoutes;




