'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, Loader2, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input, Select, Label } from '@/components/ui/form-inputs';

interface DemoFormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  productInterest: string;
  preferredDate: string;
  preferredTime: string;
}

interface DemoModalProps {
  trigger?: React.ReactNode;
  defaultOpen?: boolean;
}

const PRODUCT_OPTIONS = [
  { value: '', label: 'Select a product for demo' },
  { value: 'online-payments', label: 'Online Payments & Gateway' },
  { value: 'upi', label: 'UPI Solutions' },
  { value: 'banking-suite', label: 'Banking Suite' },
  { value: 'analytics', label: 'Analytics Dashboard' },
  { value: 'api-platform', label: 'API Platform' },
  { value: 'reconciliation', label: 'Reconciliation System' },
  { value: 'full-platform', label: 'Complete Platform Demo' },
];

const TIME_SLOTS = [
  { value: '', label: 'Select preferred time' },
  { value: '09:00', label: '9:00 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '12:00', label: '12:00 PM' },
  { value: '14:00', label: '2:00 PM' },
  { value: '15:00', label: '3:00 PM' },
  { value: '16:00', label: '4:00 PM' },
  { value: '17:00', label: '5:00 PM' },
];

export default function DemoModal({ trigger, defaultOpen = false }: DemoModalProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [calendarUrl, setCalendarUrl] = useState<string>('');
  
  const [formData, setFormData] = useState<DemoFormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    productInterest: '',
    preferredDate: '',
    preferredTime: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Generate Google Calendar invite URL
  const generateGoogleCalendarUrl = (data: DemoFormData) => {
    const startDateTime = `${data.preferredDate}T${data.preferredTime}:00`;
    const endDateTime = `${data.preferredDate}T${parseInt(data.preferredTime.split(':')[0]) + 1}:00:00`;
    
    const title = encodeURIComponent(`SabbPe Product Demo - ${data.productInterest}`);
    const details = encodeURIComponent(
      `Product Demo Session\n\nParticipant: ${data.name}\nOrganization: ${data.organization}\nProduct: ${data.productInterest}\n\nJoin via video call link (will be sent separately)`
    );
    const location = encodeURIComponent('Video Call');
    
    const dates = `${startDateTime.replace(/[-:]/g, '')}/${endDateTime.replace(/[-:]/g, '')}`;
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  // Generate Outlook Calendar invite URL
  const generateOutlookCalendarUrl = (data: DemoFormData) => {
    const startDateTime = `${data.preferredDate}T${data.preferredTime}:00`;
    const endDateTime = `${data.preferredDate}T${parseInt(data.preferredTime.split(':')[0]) + 1}:00:00`;
    
    const subject = encodeURIComponent(`SabbPe Product Demo - ${data.productInterest}`);
    const body = encodeURIComponent(
      `Product Demo Session\n\nParticipant: ${data.name}\nOrganization: ${data.organization}\nProduct: ${data.productInterest}\n\nJoin via video call link (will be sent separately)`
    );
    const location = encodeURIComponent('Video Call');
    
    return `https://outlook.office.com/calendar/0/deeplink/compose?subject=${subject}&body=${body}&startdt=${startDateTime}&enddt=${endDateTime}&location=${location}&path=/calendar/action/compose&rru=addevent`;
  };

  // Generate ICS file for download
  const generateICSFile = (data: DemoFormData) => {
    const startDateTime = `${data.preferredDate}T${data.preferredTime}:00`.replace(/[-:]/g, '');
    const endDateTime = `${data.preferredDate}T${parseInt(data.preferredTime.split(':')[0]) + 1}:00:00`.replace(/[-:]/g, '');
    
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//SabbPe//Demo Scheduler//EN',
      'BEGIN:VEVENT',
      `DTSTART:${startDateTime}`,
      `DTEND:${endDateTime}`,
      `SUMMARY:SabbPe Product Demo - ${data.productInterest}`,
      `DESCRIPTION:Product Demo Session\\n\\nParticipant: ${data.name}\\nOrganization: ${data.organization}\\nProduct: ${data.productInterest}`,
      'LOCATION:Video Call',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    return url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with your actual API endpoint
    try {
      const response = await fetch('/api/schedule-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
          body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              organization: formData.organization,
              //product_interest: formData.productForDemo,
              preferred_date: formData.preferredDate,
              preferred_time: formData.preferredTime,
          }),
      });

      if (response.ok) {
        // Generate calendar invite
        const googleUrl = generateGoogleCalendarUrl(formData);
        setCalendarUrl(googleUrl);
        setShowSuccess(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Unable to schedule demo. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadICS = () => {
    const icsUrl = generateICSFile(formData);
    const link = document.createElement('a');
    link.href = icsUrl;
    link.download = 'sabbpe-demo.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetForm = () => {
    setShowSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      productInterest: '',
      preferredDate: '',
      preferredTime: '',
    });
  };

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Get maximum date (3 months from now)
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white/8 backdrop-blur-xl border border-white/20 text-white font-bold flex items-center justify-center gap-2 hover:border-white/40 transition-all duration-300"
          >
            <Calendar className="w-5 h-5" />
            <span>Schedule Demo</span>
          </motion.button>
        )}
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl">
        {!showSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-sabbpe-blue via-sabbpe-cyan to-sabbpe-teal bg-clip-text text-transparent">
                Schedule a Live Demo
              </DialogTitle>
              <DialogDescription className="text-base">
                Book a personalized demo session with our product experts.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-5 mt-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="demo-name">Full Name *</Label>
                  <Input
                    id="demo-name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="demo-email">Email Address *</Label>
                  <Input
                    id="demo-email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Phone & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="demo-phone">Phone Number *</Label>
                  <Input
                    id="demo-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="demo-organization">Organization *</Label>
                  <Input
                    id="demo-organization"
                    name="organization"
                    placeholder="Company Name"
                    value={formData.organization}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Product Interest */}
              <div className="space-y-2">
                <Label htmlFor="demo-product">Product for Demo *</Label>
                <div className="relative">
                  <Select
                    id="demo-product"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleInputChange}
                    required
                  >
                    {PRODUCT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/60">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="demo-date">Preferred Date *</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                    <Input
                      id="demo-date"
                      name="preferredDate"
                      type="date"
                      min={getMinDate()}
                      max={getMaxDate()}
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="pl-11"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="demo-time">Preferred Time *</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none z-10" />
                    <Select
                      id="demo-time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="pl-11"
                      required
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot.value} value={slot.value}>
                          {slot.label}
                        </option>
                      ))}
                    </Select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/60">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-sabbpe-blue/10 border border-sabbpe-blue/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-sabbpe-cyan mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-white/80">
                    <p className="font-semibold text-white mb-1">Virtual Meeting</p>
                    <p>The demo will be conducted via video call. A meeting link will be sent to your email after confirmation.</p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full mt-6 px-8 py-4 rounded-xl bg-gradient-to-r from-sabbpe-blue to-sabbpe-cyan text-white font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Scheduling...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    <span>Schedule Demo</span>
                  </>
                )}
              </motion.button>
            </form>
          </>
        ) : (
          // Success State with Calendar Options
          <div className="py-8">
            <div className="text-center space-y-6">
              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center"
              >
                <Calendar className="w-10 h-10 text-green-400" />
              </motion.div>

              {/* Success Message */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Demo Scheduled!</h3>
                <p className="text-white/60">
                  Your demo request has been received. Add this to your calendar:
                </p>
              </div>

              {/* Calendar Options */}
              <div className="space-y-3 max-w-md mx-auto">
                {/* Google Calendar */}
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium">Add to Google Calendar</span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors" />
                </a>

                {/* Outlook Calendar */}
                <a
                  href={generateOutlookCalendarUrl(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium">Add to Outlook</span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors" />
                </a>

                {/* Download ICS */}
                <button
                  onClick={handleDownloadICS}
                  className="flex items-center justify-between w-full px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-500 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium">Download .ICS File</span>
                  </div>
                  <svg className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => {
                  resetForm();
                  setOpen(false);
                }}
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
