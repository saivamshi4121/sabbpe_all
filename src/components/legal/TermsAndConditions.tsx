'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Shield, 
  FileText, 
  AlertCircle, 
  CheckCircle2, 
  ArrowLeft,
  Scale,
  Clock,
  Ban,
  RefreshCw,
  Lock
} from 'lucide-react';

export default function TermsAndConditions() {
  const router = useRouter();

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/');
  };
  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      icon: FileText,
      content: `These Terms & Conditions ("Terms") govern the purchase, issuance, use, redemption, cancellation, refund, and expiry of SabbPe Gift Vouchers ("Vouchers"). The Vouchers are issued by: One78 SabbPe Technology Solutions India Private Limited ("SabbPe", "Company", "We", "Us", "Our") Registered in India under the Companies Act, 2013. By purchasing or using a SabbPe Gift Voucher, you ("User", "Customer", "Holder", "Recipient") agree to these Terms.`
    },
    {
      id: 'nature',
      title: '2. Nature of the Voucher',
      icon: Shield,
      points: [
        'SabbPe Gift Vouchers are prepaid instruments, redeemable only for products/services listed on the SabbPe platform or approved partner platforms.',
        'Vouchers do not carry any interest.',
        'Vouchers are not legal tender, not transferable for cash, and not reloadable unless explicitly stated.',
        'Vouchers cannot be redeemed for cash except where mandated under RBI or applicable law.'
      ]
    },
    {
      id: 'eligibility',
      title: '3. Eligibility',
      icon: CheckCircle2,
      content: 'You must:',
      points: [
        'Be at least 18 years old',
        'Have a valid Indian mobile number or email',
        'Be legally capable of entering into a contract under the Indian Contract Act, 1872',
        'Corporate customers may purchase vouchers under a separate agreement via Group Booking or Corporate Booking'
      ]
    },
    {
      id: 'issuance',
      title: '4. Issuance of Vouchers',
      icon: FileText,
      content: 'A voucher may be issued:',
      points: [
        'Digitally via SMS, email, or in-app delivery',
        'Physically, if applicable (cards, print vouchers)',
        'With a unique Voucher Code and/or PIN'
      ],
      subContent: 'SabbPe is not responsible for:',
      subPoints: [
        'Incorrect email or mobile number entered by purchaser',
        'Delivery delays caused by technical issues or user error'
      ]
    },
    {
      id: 'validity',
      title: '5. Validity Period',
      icon: Clock,
      points: [
        'All vouchers have a minimum 1-year validity from the date of issuance (as per RBI PPI norms)',
        'Expiry date will be explicitly mentioned',
        'SabbPe is not obligated to revalidate expired vouchers unless required by law'
      ]
    },
    {
      id: 'redemption',
      title: '6. Redemption Conditions',
      icon: RefreshCw,
      content: 'Vouchers can be redeemed only against eligible goods/services listed on the SabbPe platform. Redemption may require entering:',
      points: [
        'Voucher Code',
        'PIN/OTP',
        'Registered mobile number'
      ],
      additional: [
        {
          subtitle: 'Partial Redemption',
          text: 'If allowed, any unused balance remains available until the expiry date.'
        },
        {
          subtitle: 'Combined Use',
          text: 'Vouchers may or may not be combined with promotions, discounts, or other vouchers—subject to product-specific rules.'
        }
      ]
    },
    {
      id: 'non-transferability',
      title: '7. Non-Transferability',
      icon: Ban,
      content: 'Vouchers cannot be:',
      points: [
        'Resold',
        'Transferred (unless explicitly allowed)',
        'Bartered',
        'Converted to cash or credit'
      ],
      note: 'Unauthorised resale or trading will void the voucher.'
    },
    {
      id: 'lost-vouchers',
      title: '8. Lost, Stolen, or Misused Vouchers',
      icon: AlertCircle,
      points: [
        'SabbPe is not liable for vouchers lost, stolen, or used without your permission',
        'Once a voucher is delivered, safeguarding it is the customer\'s responsibility',
        'Replacement may be offered only if: Voucher is unused, Proof of purchase is provided, Company verification is successful'
      ]
    },
    {
      id: 'fraud',
      title: '9. Fraud, Abuse & Suspicious Activity',
      icon: Lock,
      content: 'SabbPe may block or cancel vouchers if:',
      points: [
        'Obtained fraudulently',
        'Used to commit fraud or illegal transactions',
        'Redeemed in suspicious patterns',
        'Violating terms'
      ],
      note: 'We may report suspicious activity to authorities or partner banks.'
    },
    {
      id: 'pricing',
      title: '10. Pricing, Taxes & Charges',
      icon: FileText,
      points: [
        'Voucher value includes applicable taxes unless otherwise specified',
        'Redemption of certain services/products may attract additional taxes or charges'
      ]
    },
    {
      id: 'cancellation-user',
      title: '11. Cancellation by User',
      icon: Ban,
      points: [
        'Once issued/activated, vouchers generally cannot be cancelled',
        'Pre-issuance cancellation may be allowed (see Refund Policy)'
      ]
    },
    {
      id: 'cancellation-company',
      title: '12. Cancellation by SabbPe',
      icon: AlertCircle,
      content: 'SabbPe may cancel a voucher due to:',
      points: [
        'Fraudulent purchase',
        'System error',
        'Regulatory requirement',
        'Misuse or violation of these terms'
      ],
      note: 'Refund may be provided at SabbPe\'s discretion.'
    },
    {
      id: 'liability',
      title: '13. Limitation of Liability',
      icon: Shield,
      content: 'SabbPe is not liable for:',
      points: [
        'Loss arising from voucher misuse',
        'Inability to redeem due to technical or network issues',
        'Merchant non-performance (where partner merchants participate)',
        'Loss of data or service interruption'
      ],
      note: 'Our maximum liability is limited to the unredeemed face value of the voucher.'
    },
    {
      id: 'governing-law',
      title: '14. Governing Law & Jurisdiction',
      icon: Scale,
      content: 'These Terms are governed by Indian law. Legal disputes shall be subject to courts having jurisdiction where SabbPe\'s registered office is located.'
    },
    {
      id: 'updates',
      title: '15. Updates to Terms',
      icon: RefreshCw,
      content: 'SabbPe may update these Terms at any time. Users will be notified via website updates or electronic communication.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#02040a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Gradient Blobs */}
      <div className="absolute top-0 -left-40 w-[800px] h-[800px] bg-sabbpe-blue/10 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-sabbpe-cyan/10 rounded-full blur-[100px] animate-blob [animation-delay:2s]" />

      {/* Content */}
      <div className="relative z-10 pt-24">
        {/* Header */}
        <div className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <button
              onClick={handleBackClick}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Home</span>
            </button>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              Terms & Conditions
            </h1>
            <p className="text-white/60 mt-2">
              Last Updated: January 2026
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-8">
            {sections.map((section, idx) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                id={section.id}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-sabbpe-cyan/30 transition-all duration-300"
              >
                {/* Section Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-sabbpe-blue to-sabbpe-cyan flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 text-white/70 leading-relaxed ml-16">
                  {section.content && (
                    <p>{section.content}</p>
                  )}

                  {section.points && (
                    <ul className="space-y-2">
                      {section.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-sabbpe-cyan flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.subContent && (
                    <div className="mt-4">
                      <p className="font-semibold text-white/80 mb-2">{section.subContent}</p>
                      <ul className="space-y-2">
                        {section.subPoints?.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.additional && (
                    <div className="space-y-3 mt-4">
                      {section.additional.map((item, i) => (
                        <div key={i} className="pl-4 border-l-2 border-sabbpe-cyan/30">
                          <p className="font-semibold text-white/90 mb-1">{item.subtitle}:</p>
                          <p>{item.text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.note && (
                    <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                      <p className="text-yellow-200/90 text-sm">
                        <strong>Note:</strong> {section.note}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 bg-gradient-to-br from-sabbpe-blue/20 to-sabbpe-cyan/20 backdrop-blur-xl border border-sabbpe-cyan/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Questions?</h3>
            <p className="text-white/70 mb-6">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="space-y-3 text-white/80">
              <p><strong>Company:</strong> One78 SabbPe Technology Solutions India Private Limited</p>
              <p><strong>Email:</strong> support@sabbpe.com</p>
              <p><strong>Website:</strong> <a href="https://sabbpe.com" className="text-sabbpe-cyan hover:underline">https://sabbpe.com</a></p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
