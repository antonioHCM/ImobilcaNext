"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="font-bold text-xl">Stone Specialists</Link>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/pedras-naturais" className="text-gray-700 hover:text-gray-900">Pedras Naturais</Link>
            <Link href="/pedras-sinteticas" className="text-gray-700 hover:text-gray-900">Pedras Sintéticas</Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-gray-900">Portfolio</Link>
            <Link href="/orcamentos" className="text-gray-700 hover:text-gray-900">Orçamentos</Link>
            <Link href="/contactos" className="text-gray-700 hover:text-gray-900">Contactos</Link>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/pedras-naturais" 
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Pedras Naturais
              </Link>
              <Link 
                href="/pedras-sinteticas" 
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Pedras Sintéticas
              </Link>
              <Link 
                href="/portfolio" 
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                href="/orcamentos" 
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Orçamentos
              </Link>
              <Link 
                href="/contactos" 
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Contactos
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}