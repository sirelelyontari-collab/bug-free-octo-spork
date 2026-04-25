/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Inventory } from './pages/Inventory';
import { Contact } from './pages/Contact';
import { VehicleDetails } from './pages/VehicleDetails';

export default function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/:id" element={<VehicleDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
