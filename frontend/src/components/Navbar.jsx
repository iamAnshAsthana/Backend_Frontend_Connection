import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  // Helper to highlight the active link with a cyan glow
  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return `relative px-4 py-2 transition-all duration-300 text-sm font-bold uppercase tracking-widest ${
      isActive
        ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
        : "text-slate-400 hover:text-cyan-300"
    }`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand/Logo Area */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-[0_0_15px_rgba(8,145,178,0.4)]"></div>
          <span className="text-xl font-black text-white tracking-tighter">
            CORE<span className="text-cyan-500">OS</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link to="/" className={getLinkStyle("/")}>
            Home
          </Link>
          <Link to="/categories" className={getLinkStyle("/categories")}>
            Categories
          </Link>
          <Link to="/products" className={getLinkStyle("/products")}>
            Products
          </Link>

          {/* Action Button Style for "Create" */}
          <Link
            to="/products/create"
            className="ml-4 px-5 py-2 bg-cyan-900/30 border border-cyan-500/50 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(8,145,178,0.2)]"
          >
            + Create
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
