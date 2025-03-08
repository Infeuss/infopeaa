import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "InfoPie",
  description: "InfoPie",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
          <script async={true} defer={true} src='https://www.google.com/recaptcha/api.js'></script>
          <script type="module" src="https://securepubads.shareus.io/scripts/tag/js/gpt.js" ></script>
      </head>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem initialData={{
          totalPages : 2,
          googleCaptchaKey : "",
          isUpperTimerCompleted : false,
          pagesUrls : [
            "/posts/deploying-next-apps",
            "/posts/dynamic-routing-static-regeneration",
          ],
          timings : [
            {upperTimer: 15,downTimer : 10},
            {upperTimer: 10,downTimer : 5},
          ]
        }}>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-sans font-bold text-2xl text-slate-900 dark:text-slate-50">INFoPie</span>
                </div>
                
                <div className="flex items-center gap-5">
                  <nav className="ml-auto text-sm font-medium space-x-6">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                  </nav>
                  <ModeToggle />
                </div>
              </div>
            </header>
            <main className="pt-10">{children}</main>
            <footer className="mt-8 pt-4 border-t border-slate-300 dark:border-slate-800">
              <div className="flex justify-center items-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  © {new Date().getFullYear()} INFoPie. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}