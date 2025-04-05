"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChangeEvent, useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

interface User {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
}

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([
    { id: "1", name: "Product 1", price: 99.99, stock: 10 },
    { id: "2", name: "Product 2", price: 149.99, stock: 15 },
  ]);

  const [users, setUsers] = useState<User[]>([
    { id: "1", name: "John Doe", email: "john@example.com", status: "active" },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      status: "active",
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.stock) return;

    const product: Product = {
      id: Date.now().toString(),
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      stock: parseInt(newProduct.stock),
    };

    setProducts([...products, product]);
    setNewProduct({ name: "", price: "", stock: "" });
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof typeof newProduct
  ) => {
    setNewProduct({ ...newProduct, [field]: e.target.value });
  };

  return (
    <div className="container mx-auto p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>

      <Tabs defaultValue="products" className="space-y-4">
        <TabsList className="bg-white shadow-sm">
          <TabsTrigger
            value="products"
            className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600"
          >
            Products
          </TabsTrigger>
          <TabsTrigger
            value="users"
            className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600"
          >
            Users
          </TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-4">
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="bg-white">
              <CardTitle className="text-xl text-gray-800">
                Add New Product
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">
                    Product Name
                  </Label>
                  <Input
                    id="name"
                    value={newProduct.name}
                    onChange={(e) => handleInputChange(e, "name")}
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price" className="text-gray-700">
                    Price
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    value={newProduct.price}
                    onChange={(e) => handleInputChange(e, "price")}
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stock" className="text-gray-700">
                    Stock
                  </Label>
                  <Input
                    id="stock"
                    type="number"
                    value={newProduct.stock}
                    onChange={(e) => handleInputChange(e, "stock")}
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <Button
                onClick={handleAddProduct}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Add Product
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="bg-white">
              <CardTitle className="text-xl text-gray-800">
                Product List
              </CardTitle>
            </CardHeader>
            <CardContent className="bg-white">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-gray-50">
                    <TableHead className="text-gray-700">Name</TableHead>
                    <TableHead className="text-gray-700">Price</TableHead>
                    <TableHead className="text-gray-700">Stock</TableHead>
                    <TableHead className="text-gray-700">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id} className="hover:bg-gray-50">
                      <TableCell className="text-gray-800">
                        {product.name}
                      </TableCell>
                      <TableCell className="text-gray-800">
                        ${product.price}
                      </TableCell>
                      <TableCell className="text-gray-800">
                        {product.stock}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mr-2 border-gray-200 hover:bg-gray-100"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          className="bg-red-600 hover:bg-red-700"
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users">
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="bg-white">
              <CardTitle className="text-xl text-gray-800">
                Active Users
              </CardTitle>
            </CardHeader>
            <CardContent className="bg-white">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-gray-50">
                    <TableHead className="text-gray-700">Name</TableHead>
                    <TableHead className="text-gray-700">Email</TableHead>
                    <TableHead className="text-gray-700">Status</TableHead>
                    <TableHead className="text-gray-700">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id} className="hover:bg-gray-50">
                      <TableCell className="text-gray-800">
                        {user.name}
                      </TableCell>
                      <TableCell className="text-gray-800">
                        {user.email}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            user.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {user.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-200 hover:bg-gray-100"
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
