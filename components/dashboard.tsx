"use client";

import { BarChart3, Settings, Bell, User, LogOut } from "lucide-react";
import styles from "./dashboard.module.css";

export function Dashboard() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <BarChart3 size={24} color="#fff" />
            </div>
            <h1 className={styles.logoText}>Nuclon</h1>
          </div>
          
          <div className={styles.headerActions}>
            <button className={styles.iconButton}>
              <Bell size={20} />
            </button>
            <button className={styles.iconButton}>
              <Settings size={20} />
            </button>
            <button className={styles.iconButton}>
              <User size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className={styles.layout}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <nav className={styles.nav}>
            {[
              { icon: "📊", label: "Dashboard" },
              { icon: "📈", label: "Analytics" },
              { icon: "👥", label: "Users" },
              { icon: "⚙️", label: "Settings" },
            ].map((item) => (
              <button
                key={item.label}
                className={styles.navItem}
              >
                <span className={styles.icon}>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className={styles.sidebarFooter}>
            <button className={styles.navItem}>
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className={styles.main}>
          <div className={styles.content}>
            {/* Welcome Section */}
            <section className={styles.section}>
              <h2 className={styles.title}>Welcome back, User</h2>
              <p className={styles.subtitle}>Here&apos;s what&apos;s happening with your business today.</p>
            </section>

            {/* Stats Grid */}
            <section className={styles.statsGrid}>
              {[
                { label: "Total Revenue", value: "$45,231.89", change: "+20.1%" },
                { label: "Total Users", value: "2,543", change: "+15.3%" },
                { label: "Active Sessions", value: "573", change: "+3.2%" },
                { label: "Conversion Rate", value: "3.24%", change: "+2.1%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={styles.statCard}
                >
                  <p className={styles.statLabel}>{stat.label}</p>
                  <p className={styles.statValue}>{stat.value}</p>
                  <p className={styles.statChange}>{stat.change}</p>
                </div>
              ))}
            </section>

            {/* Charts Section */}
            <section className={styles.chartGrid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Revenue Overview</h3>
                <div className={styles.chartPlaceholder}>Chart Placeholder</div>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>User Growth</h3>
                <div className={styles.chartPlaceholder}>Chart Placeholder</div>
              </div>
            </section>

            {/* Table Section */}
            <section className={styles.card}>
              <h3 className={styles.cardTitle}>Recent Activity</h3>
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Action</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { user: "John Doe", action: "Login", status: "Success", date: "2 hours ago" },
                      { user: "Jane Smith", action: "Purchase", status: "Completed", date: "4 hours ago" },
                      { user: "Bob Wilson", action: "Update Profile", status: "Success", date: "1 day ago" },
                    ].map((row, idx) => (
                      <tr key={idx}>
                        <td>{row.user}</td>
                        <td>{row.action}</td>
                        <td>
                          <span className={styles.badge}>{row.status}</span>
                        </td>
                        <td>{row.date}</td>
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
