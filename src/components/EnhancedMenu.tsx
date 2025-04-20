import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/micro-interactions.css';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  dietary: string[];
  image?: string;
  featured?: boolean;
}

interface MenuSection {
  name: string;
  description: string;
  items: MenuItem[];
}

interface EnhancedMenuProps {
  menuSections: MenuSection[];
}

type DietaryFilter = 'all' | 'V' | 'VG' | 'GF' | 'DF';

const EnhancedMenu: React.FC<EnhancedMenuProps> = ({ menuSections }) => {
  const [activeFilter, setActiveFilter] = useState<DietaryFilter>('all');
  const [filteredSections, setFilteredSections] = useState<MenuSection[]>(menuSections);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Filter menu items based on dietary preference
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredSections(menuSections);
      return;
    }

    const filtered = menuSections.map(section => ({
      ...section,
      items: section.items.filter(item => item.dietary.includes(activeFilter))
    })).filter(section => section.items.length > 0);

    setFilteredSections(filtered);
  }, [activeFilter, menuSections]);

  // Toggle section expansion
  const toggleSection = (sectionName: string) => {
    if (expandedSection === sectionName) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionName);
    }
  };

  // Open item detail modal
  const openItemDetail = (item: MenuItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  // Close item detail modal
  const closeItemDetail = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  // Dietary filter labels
  const dietaryLabels: Record<DietaryFilter, string> = {
    'all': 'All Items',
    'V': 'Vegetarian',
    'VG': 'Vegan',
    'GF': 'Gluten Free',
    'DF': 'Dairy Free'
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Dietary filters */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {Object.entries(dietaryLabels).map(([key, label]) => (
          <button
            key={key}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === key
                ? 'bg-[#E3833B] text-white shadow-md'
                : 'bg-[#F4EFE9] text-[#514640] hover:bg-[#F4EFE9]/70'
            }`}
            onClick={() => setActiveFilter(key as DietaryFilter)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Menu sections */}
      <AnimatePresence>
        {filteredSections.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="text-center py-8"
          >
            <p className="text-[#514640]/80 text-lg">No items match your dietary preference.</p>
            <button
              className="mt-4 px-6 py-2 bg-[#E3833B] text-white rounded-full hover:bg-opacity-90 transition-colors"
              onClick={() => setActiveFilter('all')}
            >
              View All Items
            </button>
          </motion.div>
        ) : (
          filteredSections.map((section) => (
            <motion.div
              key={section.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mb-12"
            >
              <button
                className="w-full flex justify-between items-center text-left mb-4 focus:outline-none group"
                onClick={() => toggleSection(section.name)}
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-playfair font-bold group-hover:text-[#E3833B] transition-colors">
                    {section.name}
                  </h2>
                  <p className="text-lg text-[#514640]/80">{section.description}</p>
                </div>
                <div className={`transform transition-transform duration-300 ${expandedSection === section.name ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {(expandedSection === section.name || expandedSection === null) && (
                  <motion.div
                    initial={expandedSection !== null ? { height: 0, opacity: 0 } : false}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-6">
                      {section.items.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover-lift cursor-pointer"
                          onClick={() => openItemDetail(item)}
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="font-semibold text-xl group-hover:text-[#E3833B] transition-colors duration-300">
                                {item.name}
                                {item.featured && (
                                  <span className="ml-2 inline-block px-2 py-1 text-xs rounded-full bg-[#E3833B]/20 text-[#E3833B]">
                                    Featured
                                  </span>
                                )}
                              </h3>
                              <p className="text-[#514640]/80 mb-2">{item.description}</p>
                              <div className="flex gap-2">
                                {item.dietary.map((tag) => (
                                  <span
                                    key={tag}
                                    className="inline-block px-2 py-1 text-xs rounded-full bg-[#F4EFE9] text-[#514640]"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <span className="font-medium text-[#E3833B]">{item.price}</span>
                          </div>
                          {item.image && (
                            <div className="mt-4 overflow-hidden rounded-lg">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        )}
      </AnimatePresence>

      {/* Item detail modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            onClick={closeItemDetail}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-2xl text-[#514640]">{selectedItem.name}</h3>
                  <span className="font-semibold text-[#E3833B] text-xl">{selectedItem.price}</span>
                </div>
                <p className="text-[#514640]/80 mb-4">{selectedItem.description}</p>
                <div className="flex gap-2 mb-4">
                  {selectedItem.dietary.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 text-xs rounded-full bg-[#F4EFE9] text-[#514640]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="w-full py-3 bg-[#E3833B] text-white rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
                  onClick={closeItemDetail}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedMenu;
