"use client";

import { BarChart3, Settings, Bell, User, LogOut } from "lucide-react";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-40">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-foreground">Nuclon</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-secondary rounded-lg transition">
              <Bell className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="p-2 hover:bg-secondary rounded-lg transition">
              <Settings className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="p-2 hover:bg-secondary rounded-lg transition">
              <User className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border bg-white min-h-screen p-6">
          <nav className="space-y-2">
            {[
              { icon: "📊", label: "Dashboard" },
              { icon: "📈", label: "Analytics" },
              { icon: "👥", label: "Users" },
              { icon: "⚙️", label: "Settings" },
            ].map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-secondary transition text-left text-foreground"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-border">
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-secondary transition text-left text-muted-foreground">
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="space-y-8">
            {/* Welcome Section */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Welcome back, User
              </h2>
              <p className="text-muted-foreground">
                Here&apos;s what&apos;s happening with your business today.
              </p>
            </section>

            {/* Stats Grid */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: "Total Revenue", value: "$45,231.89", change: "+20.1%" },
                { label: "Total Users", value: "2,543", change: "+15.3%" },
                { label: "Active Sessions", value: "573", change: "+3.2%" },
                { label: "Conversion Rate", value: "3.24%", change: "+2.1%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-border rounded-lg p-6"
                >
                  <p className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-green-600 mt-2">{stat.change}</p>
                </div>
              ))}
            </section>

            {/* Charts Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Revenue Overview
                </h3>
                <div className="h-64 bg-secondary rounded flex items-center justify-center text-muted-foreground">
                  Chart Placeholder
                </div>
              </div>

              <div className="bg-white border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  User Growth
                </h3>
                <div className="h-64 bg-secondary rounded flex items-center justify-center text-muted-foreground">
                  Chart Placeholder
                </div>
              </div>
            </section>

            {/* Table Section */}
            <section className="bg-white border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Recent Activity
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-border">
                    <tr>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                        User
                      </th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                        Action
                      </th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { user: "John Doe", action: "Login", status: "Success", date: "2 hours ago" },
                      { user: "Jane Smith", action: "Purchase", status: "Completed", date: "4 hours ago" },
                      { user: "Bob Wilson", action: "Update Profile", status: "Success", date: "1 day ago" },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-border hover:bg-secondary transition">
                        <td className="py-3 px-4 text-foreground">{row.user}</td>
                        <td className="py-3 px-4 text-foreground">{row.action}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                            {row.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">{row.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
