// app/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  // Dummy data with Nigerian context
  const stats = {
    totalRevenue: "₦2,345,670",
    dailyReceipts: 24,
    activeProducts: 156,
    lowStock: 8
  };

  const recentReceipts = [
    { id: "RCP001", customer: "Chioma Okafor", amount: "₦45,000", time: "10:30 AM" },
    { id: "RCP002", customer: "Olayinka Adeleke", amount: "₦32,500", time: "11:15 AM" },
    { id: "RCP003", customer: "Aisha Mohammed", amount: "₦78,900", time: "12:45 PM" },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-8 w-full">
        <h1 className="text-2xl font-bold mb-6">Dasibodu</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stats.totalRevenue}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Today's Receipts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stats.dailyReceipts}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Active Products</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stats.activeProducts}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Low Stock Alert</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-red-500">{stats.lowStock}</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Receipts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {recentReceipts.map((receipt) => (
                <div key={receipt.id} className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">{receipt.customer}</p>
                    <p className="text-sm text-gray-500">{receipt.id} • {receipt.time}</p>
                  </div>
                  <p className="font-medium">{receipt.amount}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}