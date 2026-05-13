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
import Goalflows from "../pages/Goalflows";
import Videomeasuring from "../pages/product/Videomeasuring";
import ProductCncVideo from "../components/ViewProducts/ProductCncVideo";
import ProductCncAutoVideo from "../components/ViewProducts/ProductCncAutoVideo";
import ProductManualVideo from "../components/ViewProducts/ProductManualVideo";
import Pprofileprojecter from "../components/Products/Pprofileprojecter";
import ProductProfileVertical from "../components/ViewProducts/ProductProfileVertical";
import ProductProfileHorizontal from "../components/ViewProducts/ProductProfileHorizontal";
import PccdCamera from "../components/Products/PccdCamera";
import Pcoordinate from "../components/Products/Pcoordinate";
import Pprotablecmm from "../components/Products/Pprotablecmm";
import Pcontourmeasuring from "../components/Products/Pcontourmeasuring";
import Psurfacetexture from "../components/Products/Psurfacetexture";
import Proundness from "../components/Products/Proundness";
import Pcustting from "../components/Products/Pcustting";
import Phardness from "../components/Products/Phardness";
import Ptensilemachine from "../components/Products/Ptensilemachine";
import Povenmachine from "../components/Products/Povenmachine";
import Psaltspray from "../components/Products/Psaltspray";
import Ptemperature from "../components/Products/Ptemperature";
import ProductCcdCamera from "../components/ViewProducts/ProductCcdCamera";
import ProductCoordinate from "../components/ViewProducts/ProductCoordinate";
import ProductContourMeasuring from "../components/ViewProducts/ProductContourMeasuring";
import ProductSurfaceTexture from "../components/ViewProducts/ProductSurfaceTexture";
import ProductRoundness from "../components/ViewProducts/ProductRoundness";
import ProductManualCutting from "../components/ViewProducts/ProductManualCutting";
import ProductMetallographic from "../components/ViewProducts/ProductMetallographic";
import ProductAutoMetallographic from "../components/ViewProducts/ProductAutoMetallographic";
import ProductManualMetallographic from "../components/ViewProducts/ProductManualMetallographic";
import ProductHardness from "../components/ViewProducts/ProductHardness";
import ProductTouchhardness from "../components/ViewProducts/ProductTouchhardness";
import ProductMicrovickers from "../components/ViewProducts/ProductMicroVickers";
import ProductDigitalhardness from "../components/ViewProducts/ProductDigitalhardness";
import ProductDualColumn from "../components/ViewProducts/ProductDualColumn";
import ProductSingleColumn from "../components/ViewProducts/ProductSingleColumn";
import ProductSaltspray from "../components/ViewProducts/ProductSaltspray";
import ProductOvenmachine from "../components/ViewProducts/ProductOvenmachine";
import ProductTemperature from "../components/ViewProducts/ProductTemperature";
import ProductArm from "../components/ViewProducts/ProductArm";
//Start SmallTool
import Pmitutoyo from "../components/SmallTools/Pmitutoyo";
import PdigitalMicro103 from "../components/ProductSmalltool/PdigitalMicro103";
import Pinsizes from "../components/SmallTools/Pinsizes";
import Pdepthguages1147 from "../components/ProductSmalltool/Pdepthguages1147";
import Pteclocks from "../components/SmallTools/Pteclocks";
import Pdurometer from "../components/ProductSmalltool/Pdurometer";
import Ppeacocks from "../components/SmallTools/Ppeacocks";
import Pdialcaliperla2 from "../components/ProductSmalltool/Pdialcaliperla2";
import Pshinnwas from "../components/SmallTools/Pshinnwas";
import PRuller11215 from "../components/ProductSmalltool/PRuller11215";
import Pmitsuwas from "../components/SmallTools/Pmitsuwas";
import Pfeelergauge172mb from "../components/ProductSmalltool/Pfeelergauge172mb";
import Pfujitools from "../components/SmallTools/Pfujitools";
import Pradiusgauge178ma from "../components/ProductSmalltool/Pradiusgauge178ma";
import Phunters from "../components/SmallTools/Phunters";
import Pplatichammer from "../components/ProductSmalltool/Pplatichammer";
import Ptsks from "../components/SmallTools/Ptsks";
import Pfeellergauge100my from "../components/ProductSmalltool/Pfeellergauge100my";
import Pissokus from "../components/SmallTools/Pissokus";
import Ppluggaugem4 from "../components/ProductSmalltool/Ppluggaugem4";
import Peisens from "../components/SmallTools/Peisens";
import Ppingaugeet03 from "../components/ProductSmalltool/Ppingaugeet03";
import Psk from "../components/SmallTools/Psk";
import Pfeelergaugesfg005 from "../components/ProductSmalltool/Pfeelergaugesfg005";
import Pelcometers from "../components/SmallTools/Pelcometers";
import Pthicknesselcometer456 from "../components/ProductSmalltool/Pthicknesselcometer456";
import Pdefelshko from "../components/SmallTools/Pdefelshko";
import Pvertex from "../components/SmallTools/Pvertex";
import P3JawSelf from "../components/ProductSmalltool/P3JawSelf";
import Pgin from "../components/SmallTools/Pgin";
import Ptoolmakervise from "../components/ProductSmalltool/Ptoolmakervise";
import Pnoga from "../components/SmallTools/Pnoga";
import Pfineholderma61003 from "../components/ProductSmalltool/Pfineholderma61003";
import Pkanetec from "../components/SmallTools/Pkanetec";
import Pblockkya8b from "../components/ProductSmalltool/Pblockkya8b";
import Pfluke from "../components/SmallTools/Pfluke";
import Plasermeter414d from "../components/ProductSmalltool/Plasermeter414d";
import Pyamamoto from "../components/SmallTools/Pyamamoto";
import Phardnesshrc from "../components/ProductSmalltool/Phardnesshrc";
import Pkanon from "../components/SmallTools/Pkanon";
import Pimada from "../components/SmallTools/Pimada";
import Paikoh from "../components/SmallTools/Paikoh";
import Ptorgue30spk from "../components/ProductSmalltool/Ptorgue30spk";
import Ptorquetesterdtxs from "../components/ProductSmalltool/Ptorquetesterdtxs";
import Ppushpullgaugerze1 from "../components/ProductSmalltool/Ppushpullgaugerze1";
import Ptohnichi from "../components/SmallTools/Ptohnichi";
import Phanna from "../components/SmallTools/Phanna";
import Plutron from "../components/SmallTools/Plutron";
import Pwrenchql5n from "../components/ProductSmalltool/Pwrenchql5n";
import Pphmeterhi6221 from "../components/ProductSmalltool/Pphmeterhi6221";
import Pmeterht3007sd from "../components/ProductSmalltool/Pmeterht3007sd";
import Pextech from "../components/SmallTools/Pextech";
import Pdigicon from "../components/SmallTools/Pdigicon";
import Pcem from "../components/SmallTools/Pcem";
import Psmartsensor from "../components/SmallTools/Psmartsensor";
import Pchuer from "../components/SmallTools/Pchuer";
import Pmultimeter from "../components/ProductSmalltool/Pmultimeter";
import Pthermoth02 from "../components/ProductSmalltool/Pthermoth02";
import Pthicknessdt156 from "../components/ProductSmalltool/Pthicknessdt156";
import Plasermeterar861 from "../components/ProductSmalltool/Plasermeterar861";
import Pbrixgf10 from "../components/ProductSmalltool/Pbrixgf10";
import IndustrialBalance from "../components/IndustrialBalance/IndustrialBalance";
import HospitalBalance from "../components/HostpitalBalance/HospitalBalance";
import Pbmseries from "../components/ProductIndustrialBalance/Pbmseries";
import Papseries from "../components/ProductIndustrialBalance/Papseries";
import Pehbseries from "../components/ProductIndustrialBalance/Pehbseries";
import Plpbseries from "../components/ProductIndustrialBalance/Plpbseries";
import Pbwseries from "../components/ProductIndustrialBalance/Pbwseries";
import Ptwi700c from "../components/ProductIndustrialBalance/Ptwi700c";
import Pt7eseries from "../components/ProductIndustrialBalance/Pt7eseries";
import Pti01series from "../components/ProductIndustrialBalance/Pti01series";
import Ptnseries from "../components/ProductIndustrialBalance/Ptnseries";
import Pthp03series from "../components/ProductIndustrialBalance/Pthp03series";
import AnimalBalance from "../components/AnimalBalance/AnimalBalance";


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
      { path: "Goalflows", element: <Goalflows /> },
      { path: "Videomeasuring", element: <Videomeasuring/> },
      { path: "ProductCncVideo", element: <ProductCncVideo/> },
      { path: "ProductCncAutoVideo", element: <ProductCncAutoVideo/> },
      { path: "ProductManualVideo", element: <ProductManualVideo/> },
      { path: "Pprofileprojecter", element: <Pprofileprojecter /> },
      { path: "ProductProfileVertical", element: <ProductProfileVertical /> },
      { path: "ProductProfileHorizontal", element: <ProductProfileHorizontal /> },
      { path: "PccdCamera", element: <PccdCamera /> },
      { path: "Pcoordinate", element: <Pcoordinate /> },
      { path: "Pprotablecmm", element: <Pprotablecmm /> },
      { path: "Pcontourmeasuring", element: <Pcontourmeasuring /> },
      { path: "Psurfacetexture", element: <Psurfacetexture /> },
      { path: "Proundness", element: <Proundness /> },
      { path: "Pcustting", element: <Pcustting /> },
      { path: "Phardness", element: <Phardness /> },
      { path: "Ptensilemachine", element: <Ptensilemachine /> },
      { path: "Povenmachine", element: <Povenmachine /> },
      { path: "Psaltspray", element: <Psaltspray /> },
      { path: "Ptemperature", element: <Ptemperature /> },
      { path: "ProductCcdCamera", element: <ProductCcdCamera /> },
      { path: "ProductCoordinate", element: <ProductCoordinate /> },
      { path: "ProductContourMeasuring", element: <ProductContourMeasuring /> },
      { path: "ProductSurfaceTexture", element: <ProductSurfaceTexture /> },
      { path: "ProductRoundness", element: <ProductRoundness /> },
      { path: "ProductManualCutting", element: <ProductManualCutting /> },
      { path: "ProductMetallographic", element: <ProductMetallographic /> },
      { path: "ProductAutoMetallographic", element: <ProductAutoMetallographic /> },
      { path: "ProductManualMetallographic", element: <ProductManualMetallographic /> },
      { path: "ProductHardness", element: <ProductHardness /> },
      { path: "ProductTouchhardness", element: <ProductTouchhardness /> },
      { path: "ProductMicrovickers", element: <ProductMicrovickers /> },
      { path: "ProductDigitalhardness", element: <ProductDigitalhardness /> },
      { path: "ProductDualColumn", element: <ProductDualColumn /> },
      { path: "ProductSingleColumn", element: <ProductSingleColumn /> },
      { path: "ProductSaltspray", element: <ProductSaltspray /> },
      { path: "ProductOvenmachine", element: <ProductOvenmachine /> },
      { path: "ProductTemperature", element: <ProductTemperature /> },
      { path: "ProductArm", element: <ProductArm /> },

      //Start SmallTool
      { path: "Pmitutoyo", element: <Pmitutoyo /> },
      { path: "PdigitalMicro103", element: <PdigitalMicro103 /> },
      { path: "Pinsizes", element: <Pinsizes /> },
      { path: "Pdepthguages1147", element: <Pdepthguages1147 /> },
      { path: "Pteclocks", element: <Pteclocks /> },
      { path: "Pdurometer", element: <Pdurometer /> },
      { path: "Ppeacocks", element: <Ppeacocks /> },
      { path: "Pdialcaliperla2", element: <Pdialcaliperla2 /> },
      { path: "Pshinnwas", element: <Pshinnwas /> },
      { path: "PRuller11215", element: <PRuller11215 /> },
      { path: "Pmitsuwas", element: <Pmitsuwas /> },
      { path: "Pfeelergauge172mb", element: <Pfeelergauge172mb /> },
      { path: "Pfujitools", element: <Pfujitools /> },
      { path: "Pradiusgauge178ma", element: <Pradiusgauge178ma /> },
      { path: "Phunters", element: <Phunters /> },
      { path: "Pplatichammer", element: <Pplatichammer /> },
      { path: "Ptsks", element: <Ptsks /> },
      { path: "Pfeellergauge100my", element: <Pfeellergauge100my /> },
      { path: "Pissokus", element: <Pissokus /> },
      { path: "Ppluggaugem4", element: <Ppluggaugem4 /> },
      { path: "Peisens", element: <Peisens /> },
      { path: "Ppingaugeet03", element: <Ppingaugeet03 /> },
      { path: "Psk", element: <Psk /> },
      { path: "Pfeelergaugesfg005", element: <Pfeelergaugesfg005 /> },
      { path: "Pelcometers", element: <Pelcometers /> },
      { path: "Pthicknesselcometer456", element: <Pthicknesselcometer456 /> },
      { path: "Pdefelshko", element: <Pdefelshko /> },
      { path: "Pvertex", element: <Pvertex /> },
      { path: "P3JawSelf", element: <P3JawSelf /> },
      { path: "Pgin", element: <Pgin /> },
      { path: "Ptoolmakervise", element: <Ptoolmakervise /> },
      { path: "Pnoga", element: <Pnoga /> },
      { path: "Pfineholderma61003", element: <Pfineholderma61003 /> },
      { path: "Pkanetec", element: <Pkanetec /> },
      { path: "Pblockkya8b", element: <Pblockkya8b /> },
      { path: "Pfluke", element: <Pfluke /> },
      { path: "Plasermeter414d", element: <Plasermeter414d /> },
      { path: "Pyamamoto", element: <Pyamamoto /> },
      { path: "Phardnesshrc", element: <Phardnesshrc /> },
      { path: "Pkanon", element: <Pkanon /> },
      { path: "Ptorgue30spk", element: <Ptorgue30spk /> },
      { path: "Pimada", element: <Pimada /> },
      { path: "Ptorquetesterdtxs", element: <Ptorquetesterdtxs /> },
      { path: "Paikoh", element: <Paikoh /> },
      { path: "Ppushpullgaugerze1", element: <Ppushpullgaugerze1 /> },
      { path: "Ptohnichi", element: <Ptohnichi /> },
      { path: "Pwrenchql5n", element: <Pwrenchql5n /> },
      { path: "Phanna", element: <Phanna /> },
      { path: "Pphmeterhi6221", element: <Pphmeterhi6221 /> },
      { path: "Plutron", element: <Plutron /> },
      { path: "Pmeterht3007sd", element: <Pmeterht3007sd /> },
      { path: "Pextech", element: <Pextech /> },
      { path: "Pmultimeter", element: <Pmultimeter /> },
      { path: "Pdigicon", element: <Pdigicon /> },
      { path: "Pthermoth02", element: <Pthermoth02 /> },
      { path: "Pcem", element: <Pcem /> },
      { path: "Pthicknessdt156", element: <Pthicknessdt156 /> },
      { path: "Psmartsensor", element: <Psmartsensor /> },
      { path: "Plasermeterar861", element: <Plasermeterar861 /> },
      { path: "Pchuer", element: <Pchuer /> },
      { path: "Pbrixgf10", element: <Pbrixgf10 /> },
      //End SmallTool
      // Start industrialBalance
      { path: "IndustrialBalance", element: <IndustrialBalance /> },
      { path: "Pbmseries", element: <Pbmseries /> },
      { path: "Papseries", element: <Papseries /> },
      { path: "Pehbseries", element: <Pehbseries /> },
      { path: "Plpbseries", element: <Plpbseries /> },
      { path: "Pbwseries", element: <Pbwseries /> },
      { path: "Ptwi700c", element: <Ptwi700c /> },
      { path: "Pt7eseries", element: <Pt7eseries /> },
      { path: "Pti01series", element: <Pti01series /> },
      { path: "Ptnseries", element: <Ptnseries /> },
      { path: "Pthp03series", element: <Pthp03series /> },
      { path: "HospitalBalance", element: <HospitalBalance /> },
      { path: "AnimalBalance", element: <AnimalBalance /> },
      // End industrialBalance
      

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




