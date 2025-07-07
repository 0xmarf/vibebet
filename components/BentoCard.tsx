"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { CartesianGrid, XAxis, YAxis, Tooltip, Area, AreaChart, ResponsiveContainer } from "recharts"

export default function BentoCard() {
  const [selectedToggle, setSelectedToggle] = useState("buy")
  
  // Sample data for the chart
  const data = [
    { name: 'Jan', value: 1500 },
    { name: 'Feb', value: 1800 },
    { name: 'Mar', value: 1600 },
    { name: 'Apr', value: 2100 },
    { name: 'May', value: 1900 },
    { name: 'Jun', value: 2400 },
  ]

  return (
    <Card className="p-6 space-y-6 rounded-xl border hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      {/* Metrics Section */}
      <div className="flex gap-6">
        {/* Price */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center w-full">
            <p className="text-sm font-medium text-muted-foreground">Price</p>
            <p className="text-sm font-medium text-green-600">+15.11%</p>
          </div>
          <p className="text-2xl font-semibold text-foreground">$0.0029</p>
        </div>
        
        <Separator orientation="vertical" className="h-[52px]" />
        
        {/* Market Cap */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center w-full">
            <p className="text-sm font-medium text-muted-foreground">mCap</p>
            <p className="text-sm font-medium text-green-600">+25.66%</p>
          </div>
          <p className="text-2xl font-semibold text-foreground">$29M</p>
        </div>
        
        <Separator orientation="vertical" className="h-[52px]" />
        
        {/* Holders */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center w-full">
            <p className="text-sm font-medium text-muted-foreground">Holder</p>
            <p className="text-sm font-medium text-green-600">+11.23%</p>
          </div>
          <p className="text-2xl font-semibold text-foreground">9,841</p>
        </div>
      </div>
      
      {/* Chart Section */}
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border opacity-80" />
            <XAxis dataKey="name" className="text-xs text-muted-foreground" />
            <YAxis className="text-xs text-muted-foreground" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--background))",
                border: "1px solid hsl(var(--border))"
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#ef4444" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorValue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      {/* Swap Widget */}
      <div className="space-y-6 pt-4 px-2 pb-4">
        {/* Buy/Sell Toggle */}
        <ToggleGroup type="single" value={selectedToggle} onValueChange={(value) => value && setSelectedToggle(value)} className="w-full">
          <ToggleGroupItem value="buy" className="flex-1 data-[state=on]:bg-accent data-[state=on]:text-foreground">Buy</ToggleGroupItem>
          <ToggleGroupItem value="sell" className="flex-1">Sell</ToggleGroupItem>
        </ToggleGroup>
        
        {/* Input Fields */}
        <div className="space-y-2">
          {/* First Token Input */}
          <div className="p-4 rounded-md bg-background border">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold text-foreground">21,698</p>
              <Badge className="bg-primary text-primary-foreground flex items-center gap-1 px-2 py-0.5">
                <Image 
                  src="/USDC.png"
                  alt="USDC"
                  width={12}
                  height={12}
                  className="h-3 w-3"
                />
                <span className="text-xs font-semibold">PVE</span>
              </Badge>
            </div>
            <div className="flex justify-between items-center mt-1.5">
              <p className="text-xs text-muted-foreground">$21,684</p>
              <p className="text-xs text-muted-foreground">200,986</p>
            </div>
          </div>
          
          {/* Percentage Badges */}
          <div className="flex justify-between px-4">
            <Badge variant="secondary" className="text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-200 cursor-pointer">10%</Badge>
            <Badge variant="secondary" className="text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-200 cursor-pointer">25%</Badge>
            <Badge variant="secondary" className="text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-200 cursor-pointer">50%</Badge>
            <Badge variant="secondary" className="text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-200 cursor-pointer">100%</Badge>
          </div>
          
          {/* Second Token Input */}
          <div className="p-4 rounded-md bg-background border">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold text-foreground">21,698</p>
              <Badge className="bg-primary text-primary-foreground flex items-center gap-1 px-2 py-0.5">
                <Image 
                  src="/USDC.png"
                  alt="USDC"
                  width={12}
                  height={12}
                  className="h-3 w-3"
                />
                <span className="text-xs font-semibold">USDC</span>
              </Badge>
            </div>
            <div className="flex justify-between items-center mt-1.5">
              <p className="text-xs text-muted-foreground">$21,684</p>
              <p className="text-xs text-muted-foreground">200,986</p>
            </div>
          </div>
        </div>
        
        <Separator />
        
        {/* Place Order Button */}
        <Button className="w-full hover:shadow-lg hover:scale-105 transition-all duration-200">Place Order</Button>
      </div>
    </Card>
  )
}