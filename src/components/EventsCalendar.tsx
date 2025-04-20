import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday } from 'date-fns';
import '../styles/micro-interactions.css';

interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  image?: string;
  ticketLink?: string;
}

interface EventsCalendarProps {
  events: Event[];
}

const EventsCalendar: React.FC<EventsCalendarProps> = ({ events }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  // Get days in current month
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Get events for the current day
  const getEventsForDay = (day: Date) => {
    return events.filter(event => isSameDay(new Date(event.date), day));
  };

  // Open event detail modal
  const openEventDetail = (event: Event) => {
    setSelectedEvent(event);
    document.body.style.overflow = 'hidden';
  };

  // Close event detail modal
  const closeEventDetail = () => {
    setSelectedEvent(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Upcoming Events</h2>
        <p className="text-lg text-[#514640]/80 max-w-2xl mx-auto">
          Join us for special nights, workshops, and community gatherings
        </p>
      </div>

      {/* Calendar navigation */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={prevMonth}
          className="p-2 rounded-full hover:bg-[#F4EFE9] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="text-xl font-semibold">
          {format(currentMonth, 'MMMM yyyy')}
        </h3>
        <button
          onClick={nextMonth}
          className="p-2 rounded-full hover:bg-[#F4EFE9] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2 mb-8">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-medium py-2">
            {day}
          </div>
        ))}
        
        {Array(monthStart.getDay()).fill(null).map((_, index) => (
          <div key={`empty-start-${index}`} className="h-24 bg-[#F4EFE9]/30 rounded-lg"></div>
        ))}
        
        {daysInMonth.map(day => {
          const dayEvents = getEventsForDay(day);
          const hasEvents = dayEvents.length > 0;
          
          return (
            <div
              key={day.toString()}
              className={`h-24 p-2 rounded-lg border transition-all ${
                isToday(day)
                  ? 'bg-[#E3833B]/10 border-[#E3833B]'
                  : hasEvents
                  ? 'bg-white border-[#514640]/20 hover:border-[#E3833B] cursor-pointer'
                  : 'bg-[#F4EFE9]/30 border-transparent'
              }`}
              onClick={() => {
                if (hasEvents && dayEvents.length === 1) {
                  openEventDetail(dayEvents[0]);
                }
              }}
            >
              <div className="flex flex-col h-full">
                <div className={`text-right mb-1 ${isToday(day) ? 'font-bold text-[#E3833B]' : ''}`}>
                  {format(day, 'd')}
                </div>
                {hasEvents && (
                  <div className="flex-grow overflow-hidden">
                    {dayEvents.length === 1 ? (
                      <div className="text-xs bg-[#E3833B]/10 text-[#E3833B] p-1 rounded truncate">
                        {dayEvents[0].title}
                      </div>
                    ) : (
                      <div className="text-xs bg-[#E3833B]/10 text-[#E3833B] p-1 rounded truncate">
                        {dayEvents.length} events
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
        
        {Array(6 - monthEnd.getDay()).fill(null).map((_, index) => (
          <div key={`empty-end-${index}`} className="h-24 bg-[#F4EFE9]/30 rounded-lg"></div>
        ))}
      </div>

      {/* Upcoming events list */}
      <div className="mt-12">
        <h3 className="text-2xl font-playfair font-semibold mb-6">Featured Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events
            .filter(event => new Date(event.date) >= new Date())
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            .slice(0, 3)
            .map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover-lift cursor-pointer"
                onClick={() => openEventDetail(event)}
              >
                {event.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="bg-[#F4EFE9] rounded-lg px-3 py-1 text-sm font-medium text-[#514640]">
                      {format(new Date(event.date), 'MMM d, yyyy')}
                    </div>
                    <div className="ml-2 text-sm text-[#514640]/70">
                      {event.time}
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-[#514640]">{event.title}</h4>
                  <p className="text-[#514640]/80 text-sm line-clamp-2">{event.description}</p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Event detail modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            onClick={closeEventDetail}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedEvent.image && (
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold">{selectedEvent.title}</h3>
                    </div>
                  </div>
                </div>
              )}
              <div className="p-6">
                {!selectedEvent.image && (
                  <h3 className="text-2xl font-bold text-[#514640] mb-4">{selectedEvent.title}</h3>
                )}
                <div className="flex items-center mb-4">
                  <div className="bg-[#F4EFE9] rounded-lg px-3 py-1 text-sm font-medium text-[#514640] flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {format(new Date(selectedEvent.date), 'EEEE, MMMM d, yyyy')}
                  </div>
                  <div className="ml-2 text-sm text-[#514640]/70 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {selectedEvent.time}
                  </div>
                </div>
                <div className="prose prose-sm text-[#514640]/80 mb-6">
                  <p>{selectedEvent.description}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedEvent.ticketLink && (
                    <a
                      href={selectedEvent.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#E3833B] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold text-center"
                    >
                      Book Tickets
                    </a>
                  )}
                  <button
                    className="px-6 py-3 border border-[#514640]/20 rounded-lg hover:bg-[#F4EFE9] transition-colors font-semibold"
                    onClick={closeEventDetail}
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

export default EventsCalendar;
