'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input, Textarea, Select, Label } from '@/components/ui/form-inputs';

// Product categories for dropdown
const PRODUCT_CATEGORIES = [
  { value: '', label: 'Select a product/service' },
  { value: 'online-payments', label: 'Online Payments & Gateway' },
  { value: 'upi', label: 'UPI Solutions' },
  { value: 'qr-payments', label: 'QR Payments' },
  { value: 'banking-suite', label: 'Banking Suite' },
  { value: 'business-accounts', label: 'Business Accounts' },
  { value: 'payouts', label: 'Payouts & Settlements' },
  { value: 'collections', label: 'Collections & Recurring' },
  { value: 'bbps', label: 'BBPS' },
  { value: 'analytics', label: 'Analytics & Reporting' },
  { value: 'api-integration', label: 'API Integration' },
  { value: 'reconciliation', label: 'Reconciliation' },
  { value: 'fraud-prevention', label: 'Security & Fraud Prevention' },
  { value: 'other', label: 'Other' },
];

// Technology/Service categories
const TECHNOLOGY_CATEGORIES = [
  { value: '', label: 'Select a technology/service' },
  { value: 'development', label: 'Custom Development' },
  { value: 'design-strategy', label: 'Design & Strategy' },
  { value: 'recruitment', label: 'Tech Recruitment' },
  { value: 'consultation', label: 'Technical Consultation' },
  { value: 'integration', label: 'System Integration' },
  { value: 'migration', label: 'Platform Migration' },
  { value: 'support', label: 'Technical Support' },
  { value: 'other', label: 'Other' },
];

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  productInterest: string;
  technologyInterest: string;
  message: string;
}

interface ContactModalProps {
  trigger?: React.ReactNode;
  defaultOpen?: boolean;
}

export default function ContactModal({ trigger, defaultOpen = false }: ContactModalProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    productInterest: '',
    technologyInterest: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with your actual API endpoint
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
          body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              organization: formData.organization,
              product_interest: formData.productInterest,
              technology_interest: formData.technologyInterest,
              message: formData.message,
          }),
      });

      if (response.ok) {
        // Success - show success message or close modal
        alert('Thank you! We will get back to you shortly.');
        setOpen(false);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          productInterest: '',
          technologyInterest: '',
          message: '',
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Unable to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Get in Touch</span>
            <Send className="w-4 h-4" />
          </motion.button>
        )}
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-sabbpe-blue via-sabbpe-cyan to-sabbpe-teal bg-clip-text text-transparent">
            Let's Talk Business
          </DialogTitle>
          <DialogDescription className="text-base">
            Fill in your details and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Phone & Organization Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organization">Organization *</Label>
              <Input
                id="organization"
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
            <Label htmlFor="productInterest">Product Interest</Label>
            <div className="relative">
              <Select
                id="productInterest"
                name="productInterest"
                value={formData.productInterest}
                onChange={handleInputChange}
              >
                {PRODUCT_CATEGORIES.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
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

          {/* Technology Interest */}
          <div className="space-y-2">
            <Label htmlFor="technologyInterest">Technology/Service Interest</Label>
            <div className="relative">
              <Select
                id="technologyInterest"
                name="technologyInterest"
                value={formData.technologyInterest}
                onChange={handleInputChange}
              >
                {TECHNOLOGY_CATEGORIES.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
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

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
            />
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
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </motion.button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
