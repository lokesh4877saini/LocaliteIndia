'use client';

import Link from "next/link";
import { Search, Heart, ShoppingCart, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useWishStore } from "@/store/WishStore";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeaderLinks = () => {
  const cartItemsCount = useCartStore((state) => state.items.length);
  const wishlistItemsCount = useWishStore((state) => state.items.length);
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  const handleToggleSearchBar = () => setShowSearchbar(true);
  const handleCloseSearchBar = () => setShowSearchbar(false);

  return (
    <>
      {
        isScrolled ? (
          <>
            <>
              {isScrolled && (<div
                className="h-[70px] p-4 w-full"
              ></div>)}
            </>
            <motion.header
              initial={false}
              className="fixed top-0 left-0 w-full z-[100]"
              animate={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(8px) saturate(180%)',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <motion.div
                className="container m-auto w-[84.5%] flex items-center justify-between h-[90px] gap-4"
              >
                {/* Logo */}
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: showSearchbar ? 0 : 1 }}

                  transition={{ duration: 0.3 }}
                  className={showSearchbar ? 'pointer-events-none' : ''}
                >
                  <Link href="/">
                    <span className="text-2xl font-bold cursor-pointer">
                      Localite India
                    </span>
                  </Link>
                </motion.div>

                {/* Icons */}
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: showSearchbar ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  className={showSearchbar ? 'pointer-events-none' : ''}
                >
                  <ul className="flex space-x-6 justify-end text-lg cursor-pointer py-2">
                    <li title="Search" className="hover:opacity-70">
                      <Search size={24} onClick={handleToggleSearchBar} className="cursor-pointer" />
                    </li>

                    <li title="Wishlist" className="relative hover:opacity-70">
                      <Link href="/wish">
                        <div className="relative flex items-center">
                          <Heart size={24} />
                          {mounted && wishlistItemsCount > 0 && (
                            <span className="absolute -top-2 -right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-pink-600 rounded-full">
                              {wishlistItemsCount}
                            </span>
                          )}
                        </div>
                      </Link>
                    </li>

                    <li title="Cart" className="relative hover:opacity-70">
                      <Link href="/cart">
                        <div className="relative flex items-center">
                          <ShoppingCart size={24} />
                          {mounted && cartItemsCount > 0 && (
                            <span className="absolute -top-2 -right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-green-400 rounded-full">
                              {cartItemsCount}
                            </span>
                          )}
                        </div>
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.header>
          </>) : (
          <>
            <header className="py-4 flex w-full justify-between">
              <Link href="/" className="text-2xl font-bold cursor-pointer">
                Localite India
              </Link>
              <ul className="flex space-x-6 justify-end text-lg cursor-pointer py-2">
                <li title="Search" className="hover:opacity-70">
                  <Search size={24} onClick={handleToggleSearchBar} className="cursor-pointer" />
                </li>

                <li title="Wishlist" className="relative hover:opacity-70">
                  <Link href="/wish">
                    <div className="relative flex items-center">
                      <Heart size={24} />
                      {mounted && wishlistItemsCount > 0 && (
                        <span className="absolute -top-2 -right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-pink-600 rounded-full">
                          {wishlistItemsCount}
                        </span>
                      )}
                    </div>
                  </Link>
                </li>

                <li title="Cart" className="relative hover:opacity-70">
                  <Link href="/cart">
                    <div className="relative flex items-center">
                      <ShoppingCart size={24} />
                      {mounted && cartItemsCount > 0 && (
                        <span className="absolute -top-2 -right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-green-400 rounded-full">
                          {cartItemsCount}
                        </span>
                      )}
                    </div>
                  </Link>
                </li>
              </ul>
            </header>
          </>
        )
      }

      {/* Search Bar  */}
      <AnimatePresence>
        {showSearchbar && (
          <motion.div
            key="search-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full fixed inset-0 z-40 bg-black/50 flex items-start justify-center pt-[12px]"
            onClick={handleCloseSearchBar}
          >
            <motion.div
              key="search-box"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className=" bg-white rounded-md border border-gray-300 w-[87%]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex w-full items-center  bg-white rounded px-3 py-3">
                <Search size={20} className="text-gray-500 mr-2" />
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-full outline-none text-sm p-2 py-3 rounded-md shadow-inner bg-[#f5f5f5]"
                  autoFocus
                />
                <X
                  size={20}
                  className="text-gray-500 hover:text-gray-700 cursor-pointer ml-2"
                  onClick={handleCloseSearchBar}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderLinks;