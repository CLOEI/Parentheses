import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ChevronDown, Home, Menu } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import "./globals.css";
import Script from "next/script";
import { useState } from "react";
import SecondDialog from "@/components/SecondDialog";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Struktur Data - PARENTHESES",
  description: "Copyright @ 2024 - cendy.co",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          type="module"
          src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"
        />
      </head>
      <body className={inter.className}>
        <div vaul-drawer-wrapper="" className="min-h-screen bg-background">
          <div className="flex flex-col md:flex-row p-2 h-screen">
            <div className="flex justify-between w-full items-center h-20 md:flex-col md:flex-shrink-0 md:w-max md:h-full md:items-center">
              <Link
                href="/"
                className="font-bold text-2xl md:[writing-mode:vertical-lr] md:[text-orientation:upright]"
              >
                PARENTHESES
              </Link>
              <Link href="/" className="hidden md:block">
                <Button size="icon">
                  <Home />
                </Button>
              </Link>
              <Drawer>
                <DrawerTrigger asChild className="md:hidden">
                  <Button size="icon">
                    <Menu />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="h-2/3">
                  <DrawerHeader>
                    <DrawerTitle>Go to</DrawerTitle>
                    <DrawerDescription>
                      Which homework do you want to see?
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="h-full flex items-center justify-center">
                    <div className="flex flex-wrap justify-center gap-2">
                      <Link href="/first">
                        <Button>First Homework</Button>
                      </Link>
                      <SecondDialog />
                      <Link href="/third">
                        <Button>Third Homework</Button>
                      </Link>
                      <Link href="/">
                        <Button size="icon">
                          <Home />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
            <div className="flex-1 flex md:flex-1 md:flex-col">
              <div className="hidden md:flex space-x-1">
                <Link href="/first">
                  <Button variant="outline">First homework</Button>
                </Link>
                <SecondDialog />
                <Link href="/third">
                  <Button variant="outline">Third homework</Button>
                </Link>
              </div>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
