"use client"

import { CartesianGrid, XAxis, YAxis, Tooltip, Area, ResponsiveContainer, ComposedChart, Line } from "recharts"
import { generateChartData, formatTooltipTimestamp, formatPrice, formatTweetCount, TOPIC_CONFIGS } from "@/lib/chartUtils"

interface ChartSectionProps {
  topicKey?: keyof typeof TOPIC_CONFIGS;
}

export default function ChartSection({ topicKey = 'epstein' }: ChartSectionProps) {
  // Generate chart data using the utility function
  const topicConfig = TOPIC_CONFIGS[topicKey];
  const chartData = generateChartData(topicConfig);
  
  // Transform data for Recharts
  const rechartData = chartData.map(point => ({
    name: point.displayTime,
    price: point.price,
    tweetCount: point.tweetCount,
    fullTimestamp: point.fullTimestamp,
    rawPrice: point.price
  }));
  return (
    <div className="h-[200px] sm:h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={rechartData} margin={{ top: 10, right: 40, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorTweetCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border opacity-80" />
          <XAxis 
            dataKey="name" 
            className="text-xs text-muted-foreground"
            tick={{ fontSize: 10 }}
            interval={0}
          />
          <YAxis 
            yAxisId="tweetCount"
            className="text-xs text-muted-foreground"
            tick={{ fontSize: 10 }}
            width={40}
            domain={['dataMin', 'dataMax']}
          />
          <YAxis 
            yAxisId="price"
            orientation="right"
            className="text-xs text-muted-foreground"
            tick={{ fontSize: 10 }}
            width={40}
            domain={['dataMin', 'dataMax']}
          />
          <Tooltip 
            offset={50}
            position={{ y: -60 }}
            allowEscapeViewBox={{ x: true, y: true }}
            wrapperStyle={{ zIndex: 1000 }}
            contentStyle={{ 
              backgroundColor: "hsl(var(--background))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "6px",
              padding: "8px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
            formatter={(value: number, name: string) => {
              if (name === 'tweetCount') {
                return [formatTweetCount(value), 'Tweet Count'];
              } else if (name === 'price') {
                return [formatPrice(value), 'Price'];
              }
              return [value, name];
            }}
            labelFormatter={(label: string, payload) => {
              if (payload && payload.length > 0) {
                const data = payload[0].payload;
                return formatTooltipTimestamp(data.fullTimestamp);
              }
              return label;
            }}
          />
          <Area 
            yAxisId="tweetCount"
            type="monotone" 
            dataKey="tweetCount" 
            stroke="#3b82f6" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorTweetCount)"
            dot={{ fill: '#3b82f6', strokeWidth: 0, r: 3 }}
            activeDot={{ r: 5, stroke: '#3b82f6', strokeWidth: 2, fill: '#ffffff' }}
          />
          <Line 
            yAxisId="price"
            type="monotone" 
            dataKey="price" 
            stroke="#ef4444" 
            strokeWidth={2}
            dot={{ fill: '#ef4444', strokeWidth: 0, r: 3 }}
            activeDot={{ r: 5, stroke: '#ef4444', strokeWidth: 2, fill: '#ffffff' }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}