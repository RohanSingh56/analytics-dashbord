export type RevenuePoint = {
  date: Date
  revenue: number
}

export type KpiMetric = {
  label: string
  value: string
  change: string
  trend: 'up' | 'down'
  abbreviation: string
}

export type SalesChannel = {
  name: string
  percentage: number
  orders: number
  color: string
}

const dailyRevenuePattern = Array.from({ length: 90 }, (_, index) => {
  const weekdayEffect = index % 7 === 5 || index % 7 === 6 ? 390 : 0
  const seasonalEffect = Math.sin(index * 0.36) * 730 + Math.cos(index * 0.17) * 420
  const dailyVariation = Math.sin(index * 1.91) * 280
  return Math.round(3500 + index * 18 + weekdayEffect + seasonalEffect + dailyVariation)
})

export const mockRevenue: RevenuePoint[] = dailyRevenuePattern.map((revenue, index) => {
  const date = new Date()
  date.setHours(0, 0, 0, 0)
  date.setDate(date.getDate() - (dailyRevenuePattern.length - index - 1))
  return { date, revenue }
})

export const mockKpis: KpiMetric[] = [
  {
    label: 'Total Revenue',
    value: '$148,290',
    change: '+12.8%',
    trend: 'up',
    abbreviation: 'REV',
  },
  {
    label: 'Total Orders',
    value: '2,847',
    change: '+8.2%',
    trend: 'up',
    abbreviation: 'ORD',
  },
  {
    label: 'Average Order Value',
    value: '$52.09',
    change: '+4.3%',
    trend: 'up',
    abbreviation: 'AOV',
  },
  {
    label: 'Conversion Rate',
    value: '3.24%',
    change: '-0.6%',
    trend: 'down',
    abbreviation: 'CVR',
  },
]

export const mockSalesChannels: SalesChannel[] = [
  { name: 'Online store', percentage: 58, orders: 1648, color: 'teal' },
  { name: 'Marketplace', percentage: 27, orders: 768, color: 'blue' },
  { name: 'Social commerce', percentage: 15, orders: 431, color: 'purple' },
]
