import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY } from '@/lib/constants';

interface CTAButtonProps {
  variant?: 'call' | 'primary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children?: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}

export default function CTAButton({
  variant = 'call',
  size = 'md',
  href,
  children,
  className = '',
  showArrow = false,
}: CTAButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    call: 'bg-amber-500 hover:bg-amber-600 text-white phone-pulse',
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    accent: 'bg-amber-500 hover:bg-amber-600 text-white',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-blue-700',
  };

  const base = `inline-flex items-center gap-2 font-bold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (variant === 'call') {
    return (
      <a href={BUSINESS_PHONE_HREF} className={base}>
        <Phone className={size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'} />
        {children ?? `Call ${BUSINESS_PHONE_DISPLAY}`}
      </a>
    );
  }

  const destination = href ?? '/contact';

  return (
    <Link href={destination} className={base}>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}
