import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import '../styles/micro-interactions.css';

// Form validation schema
const bookingSchema = z.object({
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  partySize: z.string().min(1, "Please select party size"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  specialRequests: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const EnhancedBookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingFormValues | null>(null);

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isValid },
    reset,
    watch 
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    mode: "onChange"
  });

  const watchedDate = watch("date");
  const watchedTime = watch("time");
  const watchedPartySize = watch("partySize");

  // Simulate booking confirmation
  const onSubmit = (data: BookingFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setBookingDetails(data);
      setBookingConfirmed(true);
      setIsSubmitting(false);
      reset();
    }, 1500);
  };

  const resetForm = () => {
    setBookingConfirmed(false);
    setBookingDetails(null);
  };

  // Generate available time slots based on selected date
  const getTimeSlots = () => {
    const today = new Date().toISOString().split('T')[0];
    const isToday = watchedDate === today;
    const currentHour = new Date().getHours();
    
    return Array.from({ length: 21 }, (_, i) => {
      const hour = Math.floor((i + 16) / 2); // Starting from 8:00 (16 half-hours)
      const minute = (i + 16) % 2 === 0 ? '00' : '30';
      const time = `${hour}:${minute}`;
      
      // Disable past times for today and closed hours
      const disabled = 
        (isToday && hour < currentHour) || 
        (hour < 8 || hour >= 18) || 
        (hour >= 16 && minute === '30');
      
      return { time, disabled };
    });
  };

  if (bookingConfirmed && bookingDetails) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg animate-zoom-in">
        <div className="text-center mb-6">
          <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-[#514640] mb-2">Booking Confirmed!</h3>
          <p className="text-[#514640]/80">We're looking forward to seeing you soon.</p>
        </div>
        
        <div className="bg-[#F4EFE9] p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-4 text-[#514640]">Booking Details</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-[#514640]/70">Date</p>
              <p className="font-medium">{new Date(bookingDetails.date).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            <div>
              <p className="text-sm text-[#514640]/70">Time</p>
              <p className="font-medium">{bookingDetails.time}</p>
            </div>
            <div>
              <p className="text-sm text-[#514640]/70">Party Size</p>
              <p className="font-medium">{bookingDetails.partySize}</p>
            </div>
            <div>
              <p className="text-sm text-[#514640]/70">Name</p>
              <p className="font-medium">{bookingDetails.name}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-[#514640]/70">Contact</p>
              <p className="font-medium">{bookingDetails.email} | {bookingDetails.phone}</p>
            </div>
            {bookingDetails.specialRequests && (
              <div className="col-span-2">
                <p className="text-sm text-[#514640]/70">Special Requests</p>
                <p className="font-medium">{bookingDetails.specialRequests}</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="text-center">
          <p className="mb-4 text-sm text-[#514640]/80">A confirmation email has been sent to {bookingDetails.email}</p>
          <button 
            onClick={resetForm}
            className="bg-[#E3833B] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors font-semibold btn-hover-effect"
          >
            Make Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Reservation Details</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Date <span className="text-red-500">*</span></label>
              <input 
                type="date" 
                min={new Date().toISOString().split('T')[0]}
                className={`w-full p-3 border rounded-md focus-effect ${errors.date ? 'border-red-500 focus:ring-red-500' : 'border-[#514640]/20 focus:ring-[#E3833B]'}`}
                {...register("date")}
              />
              {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
            </div>
            
            <div>
              <label className="block mb-1">Time <span className="text-red-500">*</span></label>
              <select 
                className={`w-full p-3 border rounded-md focus-effect ${errors.time ? 'border-red-500 focus:ring-red-500' : 'border-[#514640]/20 focus:ring-[#E3833B]'}`}
                {...register("time")}
                disabled={!watchedDate}
              >
                <option value="">Select a time</option>
                {watchedDate && getTimeSlots().map(({ time, disabled }, index) => (
                  <option key={index} value={time} disabled={disabled}>
                    {time}
                  </option>
                ))}
              </select>
              {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
              {!watchedDate && <p className="text-[#514640]/70 text-sm mt-1">Please select a date first</p>}
            </div>
            
            <div>
              <label className="block mb-1">Party Size <span className="text-red-500">*</span></label>
              <select 
                className={`w-full p-3 border rounded-md focus-effect ${errors.partySize ? 'border-red-500 focus:ring-red-500' : 'border-[#514640]/20 focus:ring-[#E3833B]'}`}
                {...register("partySize")}
              >
                <option value="">Select party size</option>
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1} {i === 0 ? 'person' : 'people'}
                  </option>
                ))}
                <option value="large">More than 10 people</option>
              </select>
              {errors.partySize && <p className="text-red-500 text-sm mt-1">{errors.partySize.message}</p>}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                placeholder="Your full name"
                className={`w-full p-3 border rounded-md focus-effect ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-[#514640]/20 focus:ring-[#E3833B]'}`}
                {...register("name")}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            
            <div>
              <label className="block mb-1">Email <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                placeholder="your.email@example.com"
                className={`w-full p-3 border rounded-md focus-effect ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-[#514640]/20 focus:ring-[#E3833B]'}`}
                {...register("email")}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            
            <div>
              <label className="block mb-1">Phone <span className="text-red-500">*</span></label>
              <input 
                type="tel" 
                placeholder="+44 XXX XXX XXXX"
                className={`w-full p-3 border rounded-md focus-effect ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-[#514640]/20 focus:ring-[#E3833B]'}`}
                {...register("phone")}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <label className="block mb-1">Special Requests or Dietary Requirements</label>
        <textarea 
          className="w-full p-3 border border-[#514640]/20 rounded-md focus-effect focus:outline-none focus:ring-2 focus:ring-[#E3833B]"
          rows={3}
          placeholder="Let us know of any special requests..."
          {...register("specialRequests")}
        ></textarea>
      </div>
      
      <div className="mt-8 text-center">
        <button 
          type="submit"
          disabled={isSubmitting || !isValid}
          className={`relative overflow-hidden bg-[#E3833B] text-white px-8 py-3 rounded-full font-semibold btn-hover-effect ripple-effect
            ${isSubmitting || !isValid ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90 transition-colors'}`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            'Confirm Booking'
          )}
        </button>
      </div>
      
      {/* Booking summary preview */}
      {watchedDate && watchedTime && watchedPartySize && (
        <div className="mt-8 p-4 bg-[#F4EFE9]/50 rounded-lg border border-[#514640]/10 animate-fade-in">
          <h4 className="font-semibold mb-2 text-[#514640]">Booking Summary</h4>
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div>
              <p className="text-[#514640]/70">Date</p>
              <p className="font-medium">{new Date(watchedDate).toLocaleDateString('en-GB', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
            </div>
            <div>
              <p className="text-[#514640]/70">Time</p>
              <p className="font-medium">{watchedTime || "Not selected"}</p>
            </div>
            <div>
              <p className="text-[#514640]/70">Party Size</p>
              <p className="font-medium">{watchedPartySize || "Not selected"}</p>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default EnhancedBookingForm;
