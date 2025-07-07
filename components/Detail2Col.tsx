"use client"

import { useState } from "react"
import Image from "next/image"
import { Wallet, Search, ChevronRight, Repeat2, MessageSquare, Heart, Eye, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import BentoCard from "@/components/BentoCard"
import Logo from "@/components/Logo"

export default function Detail2Col() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  return (
    <div className="bg-background">
      {/* Navbar */}
      <nav className="h-16 border-b bg-background shadow-sm">
        <div className="container mx-auto flex h-full items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <Button variant="ghost" className="text-primary font-medium px-3 pt-2.5 pb-2.5 rounded-md hover:bg-accent hover:scale-105 transition-all duration-200">
                World
              </Button>
              <Button variant="ghost" className="text-muted-foreground font-medium px-3 pt-2.5 pb-2.5 rounded-md hover:bg-accent hover:scale-105 transition-all duration-200">
                Tech
              </Button>
              <Button variant="ghost" className="text-muted-foreground font-medium px-3 pt-2.5 pb-2.5 rounded-md hover:bg-accent hover:scale-105 transition-all duration-200">
                Sports
              </Button>
              <Button variant="ghost" className="text-muted-foreground font-medium px-3 pt-2.5 pb-2.5 rounded-md hover:bg-accent hover:scale-105 transition-all duration-200">
                Culture
              </Button>
              <Button variant="ghost" className="text-muted-foreground font-medium px-3 pt-2.5 pb-2.5 rounded-md hover:bg-accent hover:scale-105 transition-all duration-200">
                Settings
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hover:bg-accent hover:scale-110 transition-all duration-200">
              <Search className="h-4 w-4" />
            </Button>

            <Avatar className="h-10 w-10">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            </Avatar>

            <Button className="h-9 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-200">
              <Wallet className="h-4 w-4 mr-2" />
              Connect Wallet
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="hover:bg-accent hover:scale-110 transition-all duration-200">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 pt-8">
                  <Button variant="ghost" className="justify-start text-primary font-medium hover:bg-accent hover:scale-105 transition-all duration-200">
                    World
                  </Button>
                  <Button variant="ghost" className="justify-start text-muted-foreground font-medium hover:bg-accent hover:scale-105 transition-all duration-200">
                    Tech
                  </Button>
                  <Button variant="ghost" className="justify-start text-muted-foreground font-medium hover:bg-accent hover:scale-105 transition-all duration-200">
                    Sports
                  </Button>
                  <Button variant="ghost" className="justify-start text-muted-foreground font-medium hover:bg-accent hover:scale-105 transition-all duration-200">
                    Culture
                  </Button>
                  <Button variant="ghost" className="justify-start text-muted-foreground font-medium hover:bg-accent hover:scale-105 transition-all duration-200">
                    Settings
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <header className="border-b py-6 px-6">
        <div className="container mx-auto flex flex-col gap-6">
          <Breadcrumb>
            <BreadcrumbList className="flex items-center gap-2.5">
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-sm text-muted-foreground">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-sm text-muted-foreground">
                  World
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-sm text-foreground">
                  PresidentvsElon
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold">PresidentvsElon</h1>
              <div className="flex items-center gap-1">
                <Badge className="hover:scale-105 transition-transform duration-200 cursor-pointer">$PVE</Badge>
                <div className="flex items-center gap-0.5 hover:opacity-80 transition-opacity duration-200 cursor-pointer">
                  <Image 
                    src="/Xlogo.png"
                    alt="X"
                    width={12}
                    height={12}
                    className="h-3 w-3"
                  />
                  <span className="text-xs font-semibold">@PresidentvsElon</span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Elon Musk has sharply criticized Trump&apos;s &quot;One Big Beautiful Bill&quot; for ballooning the national debt,
              calling it a &quot;disgusting abomination.&quot; Trump retaliated on Truth Social, threatening to review federal
              subsidies awarded to Tesla and SpaceX via the Department of Government Efficiency (DOGE) and even joked he
              might &quot;deport&quot; Musk. Musk responded by proposing he&apos;d end all subsidies and floated launching a new
              political party to challenge Trump. The escalating rhetoric has rattled markets, dragging Tesla stock down
              and deepening a once-strong alliance into a full-blown public clash.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-6">
        <div className="container mx-auto">
          <div className="flex flex-col gap-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {/* Price Card */}
              <BentoCard />

              {/* Social Feed Card */}
              <Card className="p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 relative">
                <h3 className="text-base font-semibold text-card-foreground mb-4">Smart Feed</h3>

                <div className="relative">
                  <div className="max-h-[725px] overflow-y-auto space-y-4 pr-2 pb-16 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                  <Card className="rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                  <CardHeader className="px-6 py-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="https://github.com/shadcn.png" alt="Donald J. Trump" />
                        </Avatar>
                        <div className="flex flex-col gap-0.5">
                          <h4 className="text-base font-semibold text-card-foreground">Donald J. Trump</h4>
                          <div className="flex items-center">
                            <span className="text-xs font-semibold">@realDonaldTrump</span>
                          </div>
                        </div>
                      </div>
                      <span className="text-muted-foreground">Jul 02, 9:41PM</span>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6">
                    <p className="text-card-foreground">
                      Elon Musk knew, long before he so strongly Endorsed me for President, that I was strongly against
                      the EV Mandate. It is ridiculous, and was always a major part of my campaign. Electric cars are
                      fine, but not everyone should be forced to own one. Elon may get more subsidy than any human being
                      in history, by far, and without subsidies, Elon would probably have to close up shop and head back
                      home to South Africa. No more Rocket launches, Satellites, or Electric Car Production, and our
                      Country would save a FORTUNE. Perhaps we should have DOGE take a good, hard, look at this? BIG
                      MONEY TO BE SAVED!!!
                    </p>
                  </CardContent>

                  <CardFooter className="px-6 py-6 border-t flex gap-2">
                    <div className="flex items-center gap-2 hover:bg-accent hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-md">
                      <Repeat2 className="h-5 w-5" />
                      <span className="text-muted-foreground">679</span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-accent hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-md">
                      <MessageSquare className="h-5 w-5" />
                      <span className="text-muted-foreground">189</span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-accent hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-md">
                      <Heart className="h-5 w-5" />
                      <span className="text-muted-foreground">2598</span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-accent hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-md">
                      <Eye className="h-5 w-5" />
                      <span className="text-muted-foreground">395k</span>
                    </div>
                  </CardFooter>
                </Card>

                <Card className="mt-6 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                  <CardHeader className="px-6 py-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="https://github.com/shadcn.png" alt="Clandestine" />
                        </Avatar>
                        <div className="flex flex-col gap-0.5">
                          <h4 className="text-base font-semibold text-card-foreground">Clandestine</h4>
                          <div className="flex items-center">
                            <span className="text-xs font-semibold">@WarCladestine</span>
                          </div>
                        </div>
                      </div>
                      <span className="text-muted-foreground">Jul 02, 9:41PM</span>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6">
                    <p className="text-card-foreground">
                      In retrospect, I think the Trump/Elon public feud was 100% fabricated. If Trump already had the
                      deals in place with Saudi, Qatar, and UAE, back in May, and Trump knew he would have to pull off
                      this maneuver, that would explain why Elon and Trump had their &quot;fight&quot; 2 weeks later, and BEFORE
                      Trump destroyed Iran&apos;s nuclear facilities.
                    </p>
                    <span className="text-slate-500 text-xs font-semibold mt-2 block">View More</span>
                  </CardContent>

                  <CardFooter className="px-6 py-6 border-t flex gap-2">
                    <div className="flex items-center gap-2 hover:bg-accent hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-md">
                      <Repeat2 className="h-5 w-5" />
                      <span className="text-muted-foreground">679</span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-accent hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-md">
                      <MessageSquare className="h-5 w-5" />
                      <span className="text-muted-foreground">189</span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-accent hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-md">
                      <Heart className="h-5 w-5" />
                      <span className="text-muted-foreground">2598</span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-accent hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-md">
                      <Eye className="h-5 w-5" />
                      <span className="text-muted-foreground">395k</span>
                    </div>
                  </CardFooter>
                  </Card>

                  {/* Third Tweet - Duplicate of Trump */}
                  <Card className="rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                    <CardHeader className="px-6 py-6">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="https://github.com/shadcn.png" alt="Donald J. Trump" />
                          </Avatar>
                          <div className="flex flex-col gap-0.5">
                            <h4 className="text-base font-semibold text-card-foreground">Donald J. Trump</h4>
                            <div className="flex items-center">
                              <span className="text-xs font-semibold">@realDonaldTrump</span>
                            </div>
                          </div>
                        </div>
                        <span className="text-muted-foreground">Jul 02, 10:15PM</span>
                      </div>
                    </CardHeader>

                    <CardContent className="px-6">
                      <p className="text-card-foreground">
                        Elon Musk knew, long before he so strongly Endorsed me for President, that I was strongly against
                        the EV Mandate. It is ridiculous, and was always a major part of my campaign. Electric cars are
                        fine, but not everyone should be forced to own one. Elon may get more subsidy than any human being
                        in history, by far, and without subsidies, Elon would probably have to close up shop and head back
                        home to South Africa. No more Rocket launches, Satellites, or Electric Car Production, and our
                        Country would save a FORTUNE. Perhaps we should have DOGE take a good, hard, look at this? BIG
                        MONEY TO BE SAVED!!!
                      </p>
                    </CardContent>

                    <CardFooter className="px-6 py-6 border-t flex gap-2">
                      <div className="flex items-center gap-2 hover:bg-accent hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-md">
                        <Repeat2 className="h-5 w-5" />
                        <span className="text-muted-foreground">842</span>
                      </div>
                      <div className="flex items-center gap-2 hover:bg-accent hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-md">
                        <MessageSquare className="h-5 w-5" />
                        <span className="text-muted-foreground">256</span>
                      </div>
                      <div className="flex items-center gap-2 hover:bg-accent hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-md">
                        <Heart className="h-5 w-5" />
                        <span className="text-muted-foreground">3124</span>
                      </div>
                      <div className="flex items-center gap-2 hover:bg-accent hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-md">
                        <Eye className="h-5 w-5" />
                        <span className="text-muted-foreground">512k</span>
                      </div>
                    </CardFooter>
                  </Card>

                  {/* Fourth Tweet - Duplicate of Clandestine */}
                  <Card className="rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                    <CardHeader className="px-6 py-6">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="https://github.com/shadcn.png" alt="Clandestine" />
                          </Avatar>
                          <div className="flex flex-col gap-0.5">
                            <h4 className="text-base font-semibold text-card-foreground">Clandestine</h4>
                            <div className="flex items-center">
                              <span className="text-xs font-semibold">@WarCladestine</span>
                            </div>
                          </div>
                        </div>
                        <span className="text-muted-foreground">Jul 02, 10:32PM</span>
                      </div>
                    </CardHeader>

                    <CardContent className="px-6">
                      <p className="text-card-foreground">
                        In retrospect, I think the Trump/Elon public feud was 100% fabricated. If Trump already had the
                        deals in place with Saudi, Qatar, and UAE, back in May, and Trump knew he would have to pull off
                        this maneuver, that would explain why Elon and Trump had their &quot;fight&quot; 2 weeks later, and BEFORE
                        Trump destroyed Iran&apos;s nuclear facilities.
                      </p>
                      <span className="text-slate-500 text-xs font-semibold mt-2 block">View More</span>
                    </CardContent>

                    <CardFooter className="px-6 py-6 border-t flex gap-2">
                      <div className="flex items-center gap-2 hover:bg-accent hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-md">
                        <Repeat2 className="h-5 w-5" />
                        <span className="text-muted-foreground">923</span>
                      </div>
                      <div className="flex items-center gap-2 hover:bg-accent hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-md">
                        <MessageSquare className="h-5 w-5" />
                        <span className="text-muted-foreground">312</span>
                      </div>
                      <div className="flex items-center gap-2 hover:bg-accent hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-md">
                        <Heart className="h-5 w-5" />
                        <span className="text-muted-foreground">4287</span>
                      </div>
                      <div className="flex items-center gap-2 hover:bg-accent hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-md">
                        <Eye className="h-5 w-5" />
                        <span className="text-muted-foreground">673k</span>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
                {/* Gradient overlay for smooth fade effect */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card to-transparent pointer-events-none" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
