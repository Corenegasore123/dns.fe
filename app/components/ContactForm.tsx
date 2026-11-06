'use client';

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';

type Status = { kind: 'idle' | 'sending' | 'sent' } | { kind: 'error'; message: string };

const fieldClass =
  'w-full rounded-xl border border-gray-200 bg-[#FAFAFA] px-4 py-3 sm:py-3.5 text-sm text-[#1a1a1a] placeholder:text-gray-500 focus:outline-none focus:border-[#47A15E] focus:bg-white transition-colors';

// Posts straight from the browser to the API (POST /contact-messages), so the API's
// per-client rate limit applies to each visitor rather than to the web server
const ContactForm = () => {
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus({ kind: 'sending' });
    try {
      const res = await fetch(`${API_URL}/contact-messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.name, email: data.email, message: data.message }),
      });
      if (res.ok) {
        form.reset();
        setStatus({ kind: 'sent' });
      } else if (res.status === 429) {
        setStatus({ kind: 'error', message: 'Too many messages sent. Please wait a minute and try again.' });
      } else {
        const body = await res.json().catch(() => null);
        const details = Array.isArray(body?.message) ? body.message.join(', ') : null;
        setStatus({ kind: 'error', message: details ? `Please check your details: ${details}.` : 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ kind: 'error', message: 'Could not send your message. Check your connection, or call us on +250783345370.' });
    }
  };

  if (status.kind === 'sent') {
    return (
      <div className="h-full min-h-[18rem] flex flex-col items-center justify-center text-center rounded-xl border border-gray-200 bg-[#FAFAFA] px-6 py-10">
        <CheckCircle2 className="w-10 h-10 text-[#47A15E] mb-3" />
        <p className="text-lg font-semibold text-[#1a1a1a] mb-1">Thank you for your message!</p>
        <p className="text-sm text-gray-500 mb-5">We&apos;ll get back to you as soon as possible.</p>
        <button
          type="button"
          onClick={() => setStatus({ kind: 'idle' })}
          className="text-sm font-semibold text-[#47A15E] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5" noValidate={false}>
      <input name="name" required minLength={2} maxLength={100} autoComplete="name" placeholder="Name" aria-label="Name" className={fieldClass} />
      <input name="email" type="email" required maxLength={200} autoComplete="email" placeholder="Email address" aria-label="Email address" className={fieldClass} />
      <textarea name="message" required minLength={5} maxLength={5000} rows={5} placeholder="Message" aria-label="Message" className={`${fieldClass} resize-y min-h-32`} />
      {status.kind === 'error' && (
        <p role="alert" className="text-sm text-red-600">{status.message}</p>
      )}
      <button
        type="submit"
        disabled={status.kind === 'sending'}
        className="w-full rounded-xl bg-[#47A15E] hover:bg-[#3d8b51] disabled:opacity-70 text-white font-medium text-base py-3.5 sm:py-4 transition-colors"
      >
        {status.kind === 'sending' ? 'Sending…' : 'Send now'}
      </button>
    </form>
  );
};

export default ContactForm;
