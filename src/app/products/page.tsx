// app/products/page.tsx
import React from 'react';
import Link from 'next/link';
import { Plus, Search, Edit2, Trash2 } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProductsPage() {
  // Dummy product data with Nigerian context
  const products = [
    {
      id: "P001",
      name: "Indomie Super Pack",
      category: "Noodles",
      price: "₦250",
      stock: 145,
      alert: 20
    },
    {
      id: "P002",
      name: "Peak Milk (Tin)",
      category: "Dairy",
      price: "₦450",
      stock: 89,
      alert: 15
    },
    {
      id: "P003",
      name: "Golden Penny Semovita 2kg",
      category: "Grains",
      price: "₦1,200",
      stock: 50,
      alert: 10
    },
    {
      id: "P004",
      name: "Power Oil 1L",
      category: "Cooking Oil",
      price: "₦1,850",
      stock: 32,
      alert: 8
    },
    {
      id: "P005",
      name: "Dangote Sugar 1kg",
      category: "Sugar",
      price: "₦950",
      stock: 75,
      alert: 20
    }
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-8 w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Products</h1>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="w-4 h-4 mr-2" />
            Add New Product
          </Button>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  className="pl-8"
                />
              </div>
              <select className="px-4 py-2 border rounded-md bg-white">
                <option value="">All Categories</option>
                <option value="noodles">Noodles</option>
                <option value="dairy">Dairy</option>
                <option value="grains">Grains</option>
                <option value="oil">Cooking Oil</option>
              </select>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <span 
                        className={`px-2 py-1 rounded-full text-sm ${
                          product.stock <= product.alert 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {product.stock <= product.alert ? 'Low Stock' : 'In Stock'}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
