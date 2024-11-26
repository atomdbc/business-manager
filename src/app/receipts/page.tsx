// app/receipts/page.tsx
import React from 'react';
import { Calculator, Printer, Plus, X } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function ReceiptPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="ml-64 p-8 w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Generate Receipt</h1>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Calculate
            </Button>
            <Button className="flex items-center gap-2">
              <Printer className="w-4 h-4" />
              Print Receipt
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Receipt Creation Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>New Receipt</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Customer Name</label>
                      <Input placeholder="Enter customer name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone Number</label>
                      <Input placeholder="Enter phone number" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Add Items</label>
                    <div className="flex gap-2 mb-4">
                      <select className="flex-1 px-3 py-2 border rounded-md">
                        <option value="">Select Product</option>
                        <option value="1">Indomie Super Pack - ₦250</option>
                        <option value="2">Peak Milk (Tin) - ₦450</option>
                        <option value="3">Golden Penny Semovita 2kg - ₦1,200</option>
                      </select>
                      <Input type="number" placeholder="Qty" className="w-24" />
                      <Button>
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>

                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Item</TableHead>
                          <TableHead>Quantity</TableHead>
                          <TableHead>Unit Price</TableHead>
                          <TableHead>Total</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Indomie Super Pack</TableCell>
                          <TableCell>2</TableCell>
                          <TableCell>₦250</TableCell>
                          <TableCell>₦500</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" className="text-red-600">
                              <X className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Peak Milk (Tin)</TableCell>
                          <TableCell>3</TableCell>
                          <TableCell>₦450</TableCell>
                          <TableCell>₦1,350</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" className="text-red-600">
                              <X className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Receipt Preview */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Receipt Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border p-4 rounded-lg">
                  <div className="text-center mb-4">
                    <h2 className="font-bold text-xl">Your Business Name</h2>
                    <p className="text-sm text-gray-600">123 Shop Address, Lagos, Nigeria</p>
                    <p className="text-sm text-gray-600">Tel: 080-1234-5678</p>
                  </div>

                  <div className="border-t border-b py-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Receipt No: RCP004</span>
                      <span>Date: {new Date().toLocaleDateString()}</span>
                    </div>
                    <div className="text-sm">Customer: Chioma Okafor</div>
                  </div>

                  <table className="w-full text-sm mb-4">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-1">Item</th>
                        <th className="text-right py-1">Qty</th>
                        <th className="text-right py-1">Price</th>
                        <th className="text-right py-1">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-1">Indomie Super Pack</td>
                        <td className="text-right">2</td>
                        <td className="text-right">₦250</td>
                        <td className="text-right">₦500</td>
                      </tr>
                      <tr>
                        <td className="py-1">Peak Milk (Tin)</td>
                        <td className="text-right">3</td>
                        <td className="text-right">₦450</td>
                        <td className="text-right">₦1,350</td>
                      </tr>
                    </tbody>
                    <tfoot className="border-t">
                      <tr>
                        <td colSpan={3} className="text-right py-1 font-bold">Total:</td>
                        <td className="text-right font-bold">₦1,850</td>
                      </tr>
                    </tfoot>
                  </table>

                  <div className="text-center text-sm mt-8">
                    <p>Thank you for your patronage!</p>
                    <p className="text-gray-600">Please come again</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
