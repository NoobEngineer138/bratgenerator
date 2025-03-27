'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
]

export function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    let isMounted = true;
    const checkLoginStatus = async () => {
      if (!isMounted) return;
      setIsLoading(true);
      try {
        const response = await fetch('/api/check-auth');
        const data = await response.json();
        if (isMounted) setIsLoggedIn(data.isLoggedIn);
      } catch (error) {
        console.error('Failed to check auth status:', error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    checkLoginStatus();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
      setIsLoggedIn(false);
      router.push('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
      <header className="sticky top-0 z-40 w-full border-b bg-[#8ACF00]" style={{ borderBottom: '1px solid rgba(9, 9, 9, 0.1)' }}>
        <div className="container flex h-12 items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">Brat Generator</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
                <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                        "flex items-center text-sm font-medium text-foreground",
                        pathname === item.path && "underline"
                    )}
                >
                  {item.label}
                </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
                onClick={toggleMobileMenu}
                className="focus:outline-none"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Overlay */}
          {isMobileMenuOpen && (
              <div
                  className="fixed inset-0 bg-black/50 z-50 md:hidden"
                  onClick={toggleMobileMenu}
              >
                <div
                    className="absolute top-12 right-0 w-64 bg-white shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                >
                  <nav className="flex flex-col p-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            onClick={toggleMobileMenu}
                            className={cn(
                                "block py-2 px-4 text-sm font-medium hover:bg-gray-100",
                                pathname === item.path && "bg-gray-200"
                            )}
                        >
                          {item.label}
                        </Link>
                    ))}
                  </nav>
                </div>
              </div>
          )}
        </div>
      </header>
  )
}
