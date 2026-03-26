import { useState } from 'react';
import { Menu, X, Command } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Company', href: '#' },
  ];

  return (
    <nav id="main-navbar" className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div id="brand-logo" className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
              <Command size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-gray-900">Acme Corp</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button id="btn-login" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
              Log in
            </button>
            <button id="btn-signup" className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              id="btn-mobile-menu"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-gray-200"
          >
            <div className="space-y-1 px-4 pb-3 pt-2 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-2 border-t border-gray-200 pt-4">
                <button id="btn-mobile-login" className="w-full rounded-md px-3 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-50">
                  Log in
                </button>
                <button id="btn-mobile-signup" className="w-full rounded-full bg-black px-3 py-2 text-center text-base font-medium text-white hover:bg-gray-800">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
