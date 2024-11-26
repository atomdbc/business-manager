// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, Package, Receipt, Settings } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dasibodu', icon: <LayoutDashboard className="w-4 h-4" />, path: '/' },
    { name: 'Awọn ọja', icon: <Package className="w-4 h-4" />, path: '/products' },
    { name: 'Ìwé ìgbowó', icon: <Receipt className="w-4 h-4" />, path: '/receipts' },
    { name: 'Ètò', icon: <Settings className="w-4 h-4" />, path: '/settings' },
  ];

  return (
    <div className="w-64 bg-white h-screen p-4 fixed left-0 top-0 border-r">
      <div className="text-xl font-bold mb-8 p-2">Ọja Manager</div>
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md mb-2"
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
