import { useJSONContent } from './hooks/useJSONContent'
import { Navigation } from './components/Navigation'
import { Hero } from './components/sections/Hero'
import { ImageGallery } from './components/sections/ImageGallery'
import { PerformanceReels } from './components/sections/PerformanceReels'
import { About } from './components/sections/About'
import { ClientReviews } from './components/sections/ClientReviews'
import { Stats } from './components/sections/Stats'
import { DJFeaturesSection as BentoFeatures } from './components/sections/Features'
import { DJFeaturesSection } from './components/sections/DJFeatures'
import { Contact } from './components/sections/Contact'
import { FloatingSocialIcons } from './components/FloatingSocialIcons'
import { Heart } from 'lucide-react'

function App() {
  const { content, loading, error } = useJSONContent()
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" style={{ overflowX: 'hidden', width: '100%' }}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[99999] bg-background text-foreground px-4 py-2 rounded-md shadow"
      >
        Skip to content
      </a>

      <Navigation />

      <main id="main-content">
        {loading && (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading...</p>
            </div>
          </div>
        )}

        {!!error && !loading && (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <p className="text-destructive mb-4">Error loading content: {error}</p>
              <button
                onClick={() => window.location.reload()}
                className="text-primary hover:underline"
              >
                Try again
              </button>
            </div>
          </div>
        )}

        {!loading && !error && !content && (
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-muted-foreground">No content available</p>
          </div>
        )}

        {!loading && !error && content && (
          <>
            <Hero data={content.hero} />
            <ImageGallery />
            <PerformanceReels />
            <About />
            <ClientReviews />
            <Stats data={content.stats} />
            <BentoFeatures />
            <DJFeaturesSection />
            <Contact data={content.contact} />
          </>
        )}
      </main>

      <FloatingSocialIcons />

      <footer className="bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950 py-8 border-t border-slate-700/50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>Crafted with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>by</span>
              <a
                href="https://linktr.ee/yashwanthbharadwaj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fdbb2d] hover:text-[#ffd700] transition-colors duration-300 font-medium"
              >
                Yashwanth Bharadwaj
              </a>
            </div>
            <div className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Emcee Daya. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App 