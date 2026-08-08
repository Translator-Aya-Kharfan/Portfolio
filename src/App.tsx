import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Impact from './sections/Impact';
import Partnerships from './sections/Partnerships';
import Workspace from './sections/Workspace';
import Credentials from './sections/Credentials';
import Course from './sections/Course';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

const queryClient = new QueryClient();

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-accent selection:text-white relative">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Impact />
        <Partnerships />
        <Workspace />
        <Credentials />
        <Course />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-serif text-primary mb-4">404</h1>
        <p className="text-foreground text-lg mb-8">This page could not be found.</p>
        <a href="/" className="bg-primary text-primary-foreground px-6 py-3 rounded">
          Return Home
        </a>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
