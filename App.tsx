import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { ChatWidget } from './components/ChatWidget';
import { TEAM_MEMBERS } from './constants';

// ---- SUB-COMPONENTS FOR PAGES ----

const Hero: React.FC = () => (
  <div className="relative h-screen w-full overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-[kenburns_20s_infinite_alternate]"
      style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?grayscale&blur=2)' }}
    ></div>
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
      <span className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-musket-gold font-bold">Michelin Starred</span>
      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
        The Musket Room
      </h1>
      <p className="max-w-xl text-lg md:text-xl font-light tracking-wide text-white/90">
        A celebrated neighborhood restaurant featuring vivid, globally inspired flavors.
      </p>
      <div className="mt-12 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </div>
);

const MenusPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dinner' | 'dessert' | 'cakes'>('dinner');

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <h2 className="font-serif text-4xl md:text-5xl text-center mb-12 text-musket-dark">Our Menus</h2>
      
      <div className="flex justify-center space-x-8 mb-16 border-b border-stone-200 pb-4">
        {['dinner', 'dessert', 'cakes'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`uppercase tracking-widest text-sm pb-4 transition-all relative ${
              activeTab === tab ? 'text-musket-gold' : 'text-stone-400 hover:text-musket-dark'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-musket-gold"></span>
            )}
          </button>
        ))}
      </div>

      <div className="animate-fade-in-up">
        {activeTab === 'dinner' && (
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="font-serif text-2xl mb-4 italic">Valentine's Tasting Menu</h3>
              <p className="text-musket-gold mb-6">$165 per person | Feb 14 & 15</p>
              <div className="space-y-4 font-light">
                <p>Hamachi with citrus and chili</p>
                <p>Roasted Quail with pomegranate glaze</p>
                <p>Scallop with cauliflower and truffle</p>
                <p>Wagyu Beef with parsnip puree</p>
                <p className="text-sm text-stone-500 mt-4">*Sample menu items subject to change</p>
              </div>
            </div>
            <div className="text-center pt-8 border-t border-stone-100">
              <h3 className="font-serif text-2xl mb-4 italic">A La Carte</h3>
              <p className="font-light text-stone-600">Our signature dishes drawing from global influences.</p>
            </div>
          </div>
        )}

        {activeTab === 'dessert' && (
          <div className="text-center space-y-8">
            <div>
               <h3 className="font-serif text-2xl mb-2">Vegan Pavlova</h3>
               <p className="font-light text-stone-600">Pink peppercorn crèmeux, quince puree, passionfruit</p>
            </div>
            <div>
               <h3 className="font-serif text-2xl mb-2">The "Parsnip"</h3>
               <p className="font-light text-stone-600">Parsnip mousse, white chocolate shell, rum cake, gooseberry</p>
            </div>
            <div>
               <h3 className="font-serif text-2xl mb-2">Ice Cream Sando</h3>
               <p className="font-light text-stone-600">Rotating seasonal flavors</p>
            </div>
          </div>
        )}

        {activeTab === 'cakes' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 shadow-sm border border-stone-100">
               <h3 className="font-serif text-2xl mb-4">Celebration Cakes</h3>
               <p className="font-light text-stone-600 mb-4">
                 Pre-order 72 hours in advance for your reservation.
               </p>
               <ul className="space-y-2 text-sm text-stone-500 mb-6">
                 <li>4-inch (2 ppl) — $40</li>
                 <li>6-inch (4-6 ppl) — $90</li>
                 <li>8-inch (10 ppl) — $150</li>
               </ul>
               <button className="text-musket-gold uppercase text-xs tracking-widest border-b border-musket-gold pb-1">Inquire via Email</button>
            </div>
            <div className="bg-stone-100 h-64 md:h-auto bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/600/600?grayscale)' }}></div>
          </div>
        )}
      </div>
    </div>
  );
};

const StoryPage: React.FC = () => (
  <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="font-serif text-4xl md:text-5xl mb-6">Our Story</h2>
      <p className="max-w-2xl mx-auto font-light text-lg leading-relaxed text-stone-600">
        Since 2013, The Musket Room has been a cornerstone of the neighborhood. 
        Under the leadership of Executive Chef Mary Attea, we have evolved to embrace 
        vivid flavors that deftly cross borders, earning and maintaining our Michelin star 
        through a commitment to excellence and warmth.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
      {TEAM_MEMBERS.map((member, index) => (
        <div key={member.name} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-col-reverse' : ''}`}>
           <div className="aspect-[3/4] overflow-hidden mb-6 bg-stone-200">
             <img src={member.image} alt={member.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
           </div>
           <div className="text-center md:text-left">
             <h3 className="font-serif text-3xl mb-1">{member.name}</h3>
             <p className="text-musket-gold uppercase text-xs tracking-widest mb-4">{member.role}</p>
             <p className="font-light text-stone-600 leading-relaxed">{member.bio}</p>
           </div>
        </div>
      ))}
    </div>
    
    <div className="bg-musket-dark text-musket-cream p-12 text-center">
       <h3 className="font-serif text-2xl mb-4">Our Partners</h3>
       <p className="font-light text-stone-400 mb-8">We are proud to support our community.</p>
       <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-wide opacity-70">
         <span>Girls Club</span> • <span>Hot Bread Kitchen</span> • <span>MoMA Black Arts Council</span> • <span>CCAP</span>
       </div>
    </div>
  </div>
);

const PrivateDiningPage: React.FC = () => (
  <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
     <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Private Dining</h2>
          <p className="font-light text-stone-600 mb-8 leading-relaxed">
            From intimate gatherings in our Garden Room to full restaurant buyouts, 
            we offer a range of options for your special event. Our team provides 
            personalized attention to ensure a memorable experience.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="border-l-2 border-musket-gold pl-6">
              <h4 className="font-serif text-xl mb-1">Garden Dining Room</h4>
              <p className="text-sm text-stone-500">Seated: 25 | Cocktails: 30</p>
            </div>
            <div className="border-l-2 border-musket-gold pl-6">
              <h4 className="font-serif text-xl mb-1">Full Buyout</h4>
              <p className="text-sm text-stone-500">Seated: 60 | Cocktails: 75</p>
            </div>
          </div>
          
          <a href="mailto:events@elizabethstreethospitality.com" className="inline-block bg-musket-dark text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-musket-gold transition-colors">
            Inquire Now
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
           <img src="https://picsum.photos/400/600?grayscale" className="w-full h-full object-cover" alt="Private Dining" />
           <img src="https://picsum.photos/400/601?grayscale" className="w-full h-full object-cover mt-8" alt="Garden" />
        </div>
     </div>
  </div>
);

const HomePage: React.FC = () => (
  <>
    <Hero />
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-6">A Neighborhood Gem</h2>
        <p className="font-light text-lg text-stone-600 leading-relaxed mb-12">
          Situated on Elizabeth Street, we blend the refinement of Michelin-starred dining 
          with the warmth of a local favorite. Whether you're joining us for a special occasion 
          or a Tuesday night dinner, you are family here.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-6 border border-stone-100 hover:border-musket-gold transition-colors group">
              <div className="h-12 w-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-musket-gold group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-2">Dinner</h3>
              <p className="text-sm text-stone-500">Tue - Sat, 5pm - 11pm</p>
           </div>
           <div className="p-6 border border-stone-100 hover:border-musket-gold transition-colors group">
              <div className="h-12 w-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-musket-gold group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-2">Delivery</h3>
              <p className="text-sm text-stone-500">Fine dining at home via Caviar</p>
           </div>
           <div className="p-6 border border-stone-100 hover:border-musket-gold transition-colors group">
              <div className="h-12 w-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-musket-gold group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-2">Garden</h3>
              <p className="text-sm text-stone-500">Al fresco dining available</p>
           </div>
        </div>
      </div>
    </section>
  </>
);

// ---- MAIN APP ----

export default function App() {
  const [currentPage, setCurrentPage] = useState('/');

  const renderPage = () => {
    switch(currentPage) {
      case '/': return <HomePage />;
      case '/menus': return <MenusPage />;
      case '/story': return <StoryPage />;
      case '/private-dining': return <PrivateDiningPage />;
      default: return <HomePage />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
      <ChatWidget />
    </Layout>
  );
}
