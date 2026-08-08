import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Stats = () => {
  const usersRef = useRef(null);
  const uptimeRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const usersValue = { value: 0 };
    const uptimeValue = { value: 0 };

    gsap.to(usersValue, {
      value: 12000,
      duration: 4.2,
      ease: 'power2.out',
      onUpdate: () => {
        if (usersRef.current) {
          usersRef.current.textContent = `${Math.round(usersValue.value).toLocaleString()}+`;
        }
      },
    });

    gsap.to(uptimeValue, {
      value: 99.9,
      duration: 4.2,
      ease: 'power2.out',
      onUpdate: () => {
        if (uptimeRef.current) {
          uptimeRef.current.textContent = `${uptimeValue.value.toFixed(1)}%`;
        }
      },
    });

    gsap.from(cardsRef.current, {
      y: 30,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }, []);

  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center rounded-[2rem] border border-gray-200 bg-white p-6 shadow-[0_10px_40px_rgba(17,24,39,0.06)] sm:p-8 lg:p-10">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#483AEA]">
            Trusted by growing teams
          </p>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            Everything you need to stay organized
          </h2>
        </div>

        <div className="grid w-full gap-4 md:grid-cols-3">
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="rounded-2xl bg-gray-50 p-6 text-center shadow-sm"
          >
            <p className="text-sm font-medium text-gray-500">Active Users</p>
            <p ref={usersRef} className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              0+
            </p>
          </div>

          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="rounded-2xl bg-gray-50 p-6 text-center shadow-sm"
          >
            <p className="text-sm font-medium text-gray-500">Uptime</p>
            <p ref={uptimeRef} className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              0%
            </p>
          </div>

          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="rounded-2xl bg-gray-50 p-6 text-center shadow-sm"
          >
            <p className="text-sm font-medium text-gray-500">Plan</p>
            <p className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">Free</p>
            <p className="mt-2 text-sm text-gray-500">Forever</p>
          </div>
        </div>
      </div>
    </section>
  );
};