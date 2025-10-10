import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Search,
  Bell,
  User,
  Hospital,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null); // Would come from auth context
  const [notificationCount, setNotificationCount] = useState(3);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Hospitals", path: "/hospitals" },
    { text: "Services", path: "/services" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  const handleSearch = (e) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      setSearchOpen(false);
      setSearchQuery("");
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-gradient-to-r from-blue-600 to-cyan-500"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3 min-w-fit">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <a href="/" className="flex items-center gap-2 sm:gap-3 group">
                <div
                  className={`p-2 rounded-xl transition-all ${
                    scrolled
                      ? "bg-gradient-to-br from-blue-600 to-cyan-500"
                      : "bg-white/20 group-hover:bg-white/30"
                  }`}
                >
                  <Hospital
                    className={scrolled ? "text-white" : "text-white"}
                    size={24}
                  />
                </div>
                <div>
                  <span
                    className={`hidden sm:block text-lg lg:text-xl font-bold transition-colors ${
                      scrolled ? "text-gray-900" : "text-white"
                    }`}
                  >
                    Get My Hospital
                  </span>
                  <span
                    className={`sm:hidden text-lg font-bold transition-colors ${
                      scrolled ? "text-gray-900" : "text-white"
                    }`}
                  >
                    TMH
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center px-8">
              {menuItems.map((item) => (
                <a
                  key={item.text}
                  href={item.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all relative group ${
                    scrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.text}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform ${
                      scrolled ? "bg-blue-600" : "bg-white"
                    }`}
                  />
                </a>
              ))}
            </nav>

            {/* Desktop Search */}
            <div className="hidden md:flex items-center flex-1 max-w-md lg:max-w-sm mx-4">
              <div className="w-full">
                <div
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all ${
                    scrolled
                      ? "bg-gray-100 focus-within:bg-white focus-within:shadow-md"
                      : "bg-white/20 backdrop-blur-sm focus-within:bg-white/30"
                  }`}
                >
                  <Search
                    className={scrolled ? "text-gray-400" : "text-white"}
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search hospitals, services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                    className={`flex-1 bg-transparent outline-none text-sm placeholder:text-sm ${
                      scrolled
                        ? "text-gray-900 placeholder:text-gray-500"
                        : "text-white placeholder:text-white/70"
                    }`}
                  />
                  {searchQuery && (
                    <button
                      onClick={handleSearch}
                      className={`p-1 rounded-full transition-colors ${
                        scrolled ? "hover:bg-gray-200" : "hover:bg-white/20"
                      }`}
                    >
                      <Search
                        size={16}
                        className={scrolled ? "text-blue-600" : "text-white"}
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Mobile Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              {user ? (
                <>
                  {/* Notifications */}
                  <button
                    className={`hidden sm:block relative p-2 rounded-lg transition-colors ${
                      scrolled
                        ? "text-gray-700 hover:bg-gray-100"
                        : "text-white hover:bg-white/10"
                    }`}
                    aria-label="Notifications"
                  >
                    <Bell size={20} />
                    {notificationCount > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                        {notificationCount}
                      </span>
                    )}
                  </button>

                  {/* User Profile */}
                  <button
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                      scrolled
                        ? "text-gray-700 hover:bg-gray-100"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                      JD
                    </div>
                    <span className="hidden lg:block font-medium text-sm">
                      John Doe
                    </span>
                    <ChevronDown className="hidden lg:block" size={16} />
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to={"/auth"}
                    className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
                      scrolled
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:scale-105"
                        : "bg-white text-blue-600 hover:bg-white/90 hover:shadow-lg"
                    }`}
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Search Bar */}
          {searchOpen && (
            <div className="md:hidden pb-4 animate-slideDown">
              <div
                className={`flex items-center gap-2 px-4 py-3 rounded-xl ${
                  scrolled ? "bg-gray-100" : "bg-white/20 backdrop-blur-sm"
                }`}
              >
                <Search
                  className={scrolled ? "text-gray-400" : "text-white"}
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search hospitals, services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  className={`flex-1 bg-transparent outline-none ${
                    scrolled
                      ? "text-gray-900 placeholder:text-gray-500"
                      : "text-white placeholder:text-white/70"
                  }`}
                  autoFocus
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className={scrolled ? "text-gray-400" : "text-white"}
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fadeIn"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-80 sm:w-96 bg-white z-50 transform transition-transform duration-300 ease-out lg:hidden shadow-2xl ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-cyan-50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl shadow-lg">
                <Hospital className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Get My Hospital
                </h2>
                <p className="text-xs text-gray-500">Healthcare Made Easy</p>
              </div>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 hover:bg-white rounded-lg transition-colors"
            >
              <X size={24} className="text-gray-700" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.text}
                  href={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium group"
                >
                  <span className="w-1 h-6 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item.text}
                </a>
              ))}
            </div>

            {/* Mobile Search in Drawer */}
            <div className="mt-6 px-2">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-xl focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                <Search className="text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search hospitals, services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  className="flex-1 bg-transparent outline-none text-gray-900 placeholder:text-gray-500"
                />
              </div>
            </div>
          </nav>

          {/* Drawer Footer */}
          {!user && (
            <div className="p-6 border-t border-gray-200 space-y-3 bg-gray-50">
              <a
                href="/login"
                className="block w-full px-4 py-3 text-center rounded-xl font-medium text-gray-700 bg-white border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Login
              </a>
              <a
                href="/register"
                className="block w-full px-4 py-3 text-center rounded-xl font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-xl hover:scale-105 transition-all"
              >
                Register Now
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Spacer to prevent content jump */}
      <div className="h-16 sm:h-20" />

      <style jsx="true">{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;
