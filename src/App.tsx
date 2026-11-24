import type { JSX } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/organisms/Footer";
import { SiteHeader } from "./components/organisms/SiteHeader";
import CountriesPage from "./pages/CountriesPage";
import CountryDetailPage from "./pages/CountryDetailPage";

export default function App(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col bg-bg text-ink">
      <SiteHeader />

      <main id="inicio" className="mx-auto w-full max-w-6xl flex-1 p-4 sm:p-8">
        <Routes>
          <Route path="/" element={<CountriesPage />} />
          <Route path="/pais/:code" element={<CountryDetailPage />} />
          <Route path="*" element={<p className="text-body-lg">Página no encontrada.</p>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}