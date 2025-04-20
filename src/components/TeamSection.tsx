import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/micro-interactions.css';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  favoriteItem?: string;
}

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ teamMembers }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openMemberDetail = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeMemberDetail = () => {
    setSelectedMember(null);
  };

  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-center animate-fade-in">
        Meet Our Team
      </h2>
      <p className="text-center text-lg mb-12 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms] [animation-fill-mode:forwards]">
        The passionate people behind every cup and plate at The Rug Café
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover-lift cursor-pointer"
            onClick={() => openMemberDetail(member)}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-white/80">{member.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Member detail modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            onClick={closeMemberDetail}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 h-64 md:h-auto relative">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6 md:p-8">
                  <h3 className="font-bold text-2xl text-[#514640] mb-1">{selectedMember.name}</h3>
                  <p className="text-[#E3833B] font-medium mb-4">{selectedMember.role}</p>
                  <div className="prose prose-sm text-[#514640]/80 mb-4">
                    <p>{selectedMember.bio}</p>
                  </div>
                  {selectedMember.favoriteItem && (
                    <div className="bg-[#F4EFE9] p-4 rounded-lg mb-4">
                      <p className="font-medium">Favorite Menu Item:</p>
                      <p className="text-[#514640]/80">{selectedMember.favoriteItem}</p>
                    </div>
                  )}
                  <button
                    className="w-full py-3 bg-[#E3833B] text-white rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
                    onClick={closeMemberDetail}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeamSection;
