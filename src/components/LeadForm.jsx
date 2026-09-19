import { useId, useRef, useState } from 'react';
import FadeContent from './reactbits/FadeContent.jsx';
import { site } from '../site.config.js';
import { trackForm } from '../lib/track.js';

/*
 * Lead capture form for a resource page. Two variants share the same
 * fields, validation, tracking and endpoint:
 *
 *   steps    step 1 name, email, phone; step 2 country and role
 *   single   everything on one screen, the control for the A/B test
 *
 * The variant comes from ?form=steps or ?form=single in the URL, otherwise
 * site.leadForm.variant. Lead Magnet and Resource Link are passed in per
 * page and echoed as data attributes on the form element, so nothing here
 * is specific to any one resource. On success the parent shows the
 * confirmation and the resource.
 */

export const COUNTRIES = [
  'United Kingdom',
  'United States',
  'Canada',
  'Australia',
  'New Zealand',
  'Other',
];
export const ROLES = ['Accountant', 'Business Owner', 'Other'];

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\+?[\d\s().-]{6,}$/;

export function pickVariant() {
  if (typeof window === 'undefined') return site.leadForm.variant;
  const q = new URLSearchParams(window.location.search).get('form');
  return q === 'single' || q === 'steps' ? q : site.leadForm.variant;
}

const validateStep1 = v => {
  const e = {};
  if (!v.name.trim()) e.name = 'Please add your name.';
  if (!EMAIL.test(v.email.trim())) e.email = 'Please check the email address.';
  if (v.phone.trim() && !PHONE.test(v.phone.trim())) e.phone = 'Please check the number.';
  return e;
};
const validateStep2 = v => {
  const e = {};
  if (!v.country) e.country = 'Please choose a country.';
  if (!v.role) e.role = 'Please choose one.';
  return e;
};

const labelCls = 'block font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-ink';
const fieldCls =
  'mt-2 block w-full border-0 border-b border-line bg-transparent px-0 py-3 font-serif text-[17px] leading-snug text-ink placeholder:text-muted/60 transition-colors focus:border-ink focus:outline-none focus-visible:shadow-[0_2px_0_0_var(--color-ink)] aria-[invalid=true]:border-accent';
const primaryBtn =
  'inline-flex min-h-12 items-center justify-center bg-ink px-9 py-4 font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#f1ecde] transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:cursor-wait disabled:opacity-60';
const textBtn =
  'inline-flex min-h-11 items-center font-sans text-xs font-bold uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent';

function Field({ id, label, optional, error, children }) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>
        {label}
        {optional && <span className="ml-2 font-medium normal-case tracking-normal text-muted">optional</span>}
      </label>
      {children}
      <p
        id={`${id}-error`}
        role="alert"
        className={`mt-2 min-h-5 font-sans text-xs font-semibold text-accent ${error ? '' : 'sr-only'}`}
      >
        {error}
      </p>
    </div>
  );
}

function Select({ id, value, onChange, onFocus, options, placeholder, error, inputRef }) {
  return (
    <div className="relative">
      <select
        id={id}
        ref={inputRef}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        required
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${fieldCls} appearance-none pr-8 ${value ? '' : 'text-muted/70'}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map(o => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="pointer-events-none absolute right-0 top-1/2 mt-1 size-4 -translate-y-1/2 text-ink"
      >
        <path d="M3 6l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function Progress({ step }) {
  const labels = ['Your details', 'Your firm'];
  return (
    <ol aria-label="Progress" className="mb-8 grid grid-cols-2 gap-x-4">
      {labels.map((l, i) => {
        const n = i + 1;
        const on = n <= step;
        return (
          <li
            key={l}
            aria-current={n === step ? 'step' : undefined}
            className={`border-t-2 pt-3 font-sans text-[11px] font-bold uppercase tracking-[0.18em] transition-colors ${
              on ? 'border-ink text-ink' : 'border-line text-muted'
            }`}
          >
            <span className="font-display text-base font-medium italic normal-case tracking-normal">
              0{n}
            </span>
            <span className="ml-2">{l}</span>
          </li>
        );
      })}
    </ol>
  );
}

export default function LeadForm({ leadMagnet, resourceLink, variant, onSuccess }) {
  const uid = useId();
  const id = k => `${uid}-${k}`;
  const twoStep = variant === 'steps';

  const [step, setStep] = useState(1);
  const [values, setValues] = useState({ name: '', email: '', phone: '', country: '', role: '', website: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const started = useRef(false);
  const step1Done = useRef(false);
  const countryRef = useRef(null);
  const formRef = useRef(null);
  const reduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const meta = { variant, magnet: leadMagnet };
  const set = k => e => {
    setValues(v => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors(er => ({ ...er, [k]: undefined }));
  };

  const onStart = () => {
    if (started.current) return;
    started.current = true;
    trackForm('start', meta);
  };

  const markStep1 = () => {
    if (step1Done.current) return;
    step1Done.current = true;
    trackForm('step1', meta);
  };

  /* Single variant: step 1 counts as complete when a qualifying field gets focus with name and email valid. */
  const onQualifyingFocus = () => {
    if (!twoStep && Object.keys(validateStep1(values)).length === 0) markStep1();
  };

  const focusFirstError = e => {
    const first = Object.keys(e)[0];
    formRef.current?.querySelector(`#${CSS.escape(id(first))}`)?.focus();
  };

  const next = () => {
    const e = validateStep1(values);
    setErrors(e);
    if (Object.keys(e).length) return focusFirstError(e);
    markStep1();
    setStep(2);
  };

  /* Step 2 fades in from visibility hidden, so focus lands once the fade completes. */
  const onStepShown = () => {
    if (step === 2) countryRef.current?.focus();
  };

  const submit = async ev => {
    ev.preventDefault();
    if (twoStep && step === 1) return next();

    const e = { ...validateStep1(values), ...validateStep2(values) };
    setErrors(e);
    if (Object.keys(e).length) return focusFirstError(e);

    setStatus('sending');
    const payload = {
      full_name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      country: values.country,
      qualifying_answer: values.role,
      lead_magnet: leadMagnet,
      resource_link: resourceLink,
      form_variant: variant,
      page_url: window.location.href,
      website: values.website,
    };
    try {
      const r = await fetch(site.leadForm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!r.ok) throw new Error(String(r.status));
      trackForm('submit', meta);
      onSuccess?.(payload);
    } catch {
      trackForm('error', meta);
      setStatus('error');
    }
  };

  const details = (
    <div className="space-y-6">
      <Field id={id('name')} label="Name" error={errors.name}>
        <input
          id={id('name')}
          type="text"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={set('name')}
          placeholder="Your name"
          required
          aria-invalid={errors.name ? 'true' : undefined}
          aria-describedby={errors.name ? `${id('name')}-error` : undefined}
          className={fieldCls}
        />
      </Field>
      <Field id={id('email')} label="Email" error={errors.email}>
        <input
          id={id('email')}
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          value={values.email}
          onChange={set('email')}
          placeholder="you@yourfirm.com"
          required
          aria-invalid={errors.email ? 'true' : undefined}
          aria-describedby={errors.email ? `${id('email')}-error` : undefined}
          className={fieldCls}
        />
      </Field>
      <Field id={id('phone')} label="Phone" optional error={errors.phone}>
        <input
          id={id('phone')}
          type="tel"
          name="phone"
          autoComplete="tel"
          inputMode="tel"
          value={values.phone}
          onChange={set('phone')}
          placeholder="+44"
          aria-invalid={errors.phone ? 'true' : undefined}
          aria-describedby={errors.phone ? `${id('phone')}-error` : undefined}
          className={fieldCls}
        />
      </Field>
    </div>
  );

  const firm = (
    <div className="space-y-6">
      <Field id={id('country')} label="Where's your business based?" error={errors.country}>
        <Select
          id={id('country')}
          inputRef={countryRef}
          value={values.country}
          onChange={set('country')}
          onFocus={onQualifyingFocus}
          options={COUNTRIES}
          placeholder="Choose a country"
          error={errors.country}
        />
      </Field>
      <Field id={id('role')} label="Are you an accountant, or a business owner?" error={errors.role}>
        <Select
          id={id('role')}
          value={values.role}
          onChange={set('role')}
          onFocus={onQualifyingFocus}
          options={ROLES}
          placeholder="Choose one"
          error={errors.role}
        />
      </Field>
    </div>
  );

  const sending = status === 'sending';
  const submitBtn = (
    <button type="submit" disabled={sending} className={primaryBtn}>
      {sending ? 'Sending' : 'Send me the guide'}
    </button>
  );

  return (
    <form
      ref={formRef}
      onSubmit={submit}
      onFocusCapture={onStart}
      noValidate
      data-lead-magnet={leadMagnet}
      data-resource-link={resourceLink}
      data-form-variant={variant}
      aria-labelledby={id('title')}
    >
      <p id={id('title')} className="sr-only">
        Get {leadMagnet}
      </p>

      {/* Honeypot: hidden from people, filled by bots, dropped by the endpoint. */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={id('website')}>Website</label>
        <input
          id={id('website')}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={set('website')}
        />
      </div>

      {twoStep ? (
        <>
          <Progress step={step} />
          {/* FadeContent (ReactBits) fades each step in on mount; the key forces a fresh mount per step. */}
          <FadeContent key={step} duration={reduced ? 1 : 420} initialOpacity={0} onComplete={onStepShown}>
            <fieldset className="border-0 p-0">
              <legend className="sr-only">{step === 1 ? 'Your details' : 'Your firm'}</legend>
              {step === 1 ? details : firm}
            </fieldset>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              {step === 1 ? (
                <button type="submit" className={primaryBtn}>
                  Continue
                </button>
              ) : (
                <>
                  {submitBtn}
                  <button type="button" onClick={() => setStep(1)} className={textBtn}>
                    Back
                  </button>
                </>
              )}
            </div>
          </FadeContent>
        </>
      ) : (
        <>
          <fieldset className="border-0 p-0">
            <legend className="sr-only">Your details</legend>
            {details}
          </fieldset>
          <fieldset className="mt-6 border-0 p-0">
            <legend className="sr-only">Your firm</legend>
            {firm}
          </fieldset>
          <div className="mt-8">{submitBtn}</div>
        </>
      )}

      <p role="status" aria-live="polite" className="mt-4 min-h-5 font-sans text-xs font-semibold text-accent">
        {status === 'error' && 'Something went wrong sending that. Please try again in a moment.'}
      </p>
      <p className="mt-2 font-sans text-xs text-muted">
        We send the guide, and you can unsubscribe at any time.
      </p>
    </form>
  );
}
