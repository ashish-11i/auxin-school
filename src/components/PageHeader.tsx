import React from 'react'

interface PageHeaderProps {
  badge: string
  title: React.ReactNode
  subtitle: string
}

export default function PageHeader({ badge, title, subtitle }: PageHeaderProps) {
  return (
    <section className="subpage-hero">
      <div className="container">
        <span className="badge">{badge}</span>
        <h1 className="section-title">{title}</h1>
        <p className="section-subtitle">{subtitle}</p>
      </div>
    </section>
  )
}
