"use client";
import React from "react";
import { 
  ArrowRight, 
  BarChart3, 
  Calculator, 
  DollarSign, 
  PieChart, 
  Plus, 
  Target, 
  TrendingUp 
} from "lucide-react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            💸 Full-Stack Expense Management
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Take Control of Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Finances
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Track daily transactions, analyze spending patterns, set budgets, and gain insights with our comprehensive
            expense management dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/dashboard">
                Start Tracking Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              <Link href="/demo">
                View Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Manage Expenses</h2>
            <p className="text-xl text-gray-600">
              Powerful features designed to give you complete control over your financial data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Plus className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Transaction Management</CardTitle>
                <CardDescription>
                  Add, edit, and delete transactions with amount, description, date, and category selection
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <PieChart className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Category Analysis</CardTitle>
                <CardDescription>
                  Visualize spending patterns with interactive pie charts showing category-wise expenses
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Monthly Trends</CardTitle>
                <CardDescription>
                  Track expense trends over time with beautiful bar charts and monthly summaries
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Budget Management</CardTitle>
                <CardDescription>
                  Set monthly category budgets and compare with actual expenses to stay on track
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Calculator className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Smart Summaries</CardTitle>
                <CardDescription>
                  Get instant insights with total expenses, top spending categories, and recent transactions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Budget vs Actual</CardTitle>
                <CardDescription>
                  Visual charts highlighting overspending or savings compared to your set budgets
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Built with Modern Technology</h2>
          <p className="text-xl text-gray-600 mb-12">
            Powered by the latest web technologies for optimal performance and user experience
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="font-semibold">Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="font-semibold">React</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">UI</span>
              </div>
              <span className="font-semibold">shadcn/ui</span>
            </div>
            {/* <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-semibold">MongoDB</span>
            </div> */}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Managing Your Expenses?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who have taken control of their finances with Expends Tracker
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
            <Link href="/dashboard">
              Access Your Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
