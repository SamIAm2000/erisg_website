import React, { useEffect, useId, useRef, useState } from 'react';

const FORMSUBMIT_EMAIL = 'yunxin.gao@gmail.com';

function ContactModal({ isOpen, onClose }) {
  const titleId = useId();
  const emailRef = useRef(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    setStatus('idle');
    setErrorText('');
    const t = setTimeout(() => emailRef.current?.focus(), 0);
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorText('');
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (!trimmedEmail || !trimmedMessage) {
      setErrorText('Please enter your email and a message.');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: trimmedEmail,
          message: trimmedMessage,
          _subject: 'Contact from eris portfolio site',
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong.');
      }
      setStatus('success');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('idle');
      setErrorText(err.message || 'Could not send. Try again later.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/35 p-4"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[42rem] rounded-lg bg-white shadow-lg"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(ev) => ev.stopPropagation()}
      >
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
            <span className="w-8" aria-hidden="true" />
            <h2 id={titleId} className="eris-contact-modal-title text-center">
              Contact
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div className="border-b border-neutral-200 px-5 py-3">
            <label className="eris-contact-modal-label flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="shrink-0 font-medium text-neutral-900">From:</span>
              <input
                ref={emailRef}
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                placeholder="(enter your email address)..."
                className="eris-contact-modal-input min-w-0 flex-1 border-0 bg-transparent p-0 text-neutral-600 placeholder:text-neutral-400 focus:outline-none focus:ring-0"
                disabled={status === 'sending' || status === 'success'}
              />
            </label>
          </div>

          <div className="px-5 py-3">
            <label className="sr-only" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={8}
              value={message}
              onChange={(ev) => setMessage(ev.target.value)}
              placeholder="Write your message..."
              className="eris-contact-modal-input w-full resize-y border-0 bg-transparent p-0 text-neutral-600 placeholder:text-neutral-400 focus:outline-none focus:ring-0"
              disabled={status === 'sending' || status === 'success'}
            />
          </div>

          {errorText ? (
            <p className="px-5 pb-2 text-[1.4rem] text-red-700" role="alert">
              {errorText}
            </p>
          ) : null}
          {status === 'success' ? (
            <p className="px-5 pb-2 text-[1.4rem] text-neutral-700">Message sent. Thank you!</p>
          ) : null}

          <div className="flex flex-wrap items-center justify-end gap-3 border-t border-neutral-200 px-5 py-4">
            <button
              type="button"
              onClick={onClose}
              className="eris-contact-modal-btn eris-contact-modal-btn-muted rounded-full px-6 py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="eris-contact-modal-btn eris-contact-modal-btn-primary rounded-full px-6 py-2 disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending…' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
