import logo from '../assets/vidlogo.png';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-teal-600 to-teal-700 shadow-lg">
      <div className="container mx-auto px-4 py-4 max-w-4xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Expense Tracker Logo" className="h-10 w-10 object-contain" />
            <h1 className="text-2xl font-bold text-white">Expense Tracker</h1>
          </div>
          <div className="text-white text-sm opacity-90">
            Manage your expenses efficiently
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
