
import { useState } from "react";
import {
    FiMail,
    FiMessageCircle,
    FiClock,
    FiSend,
    FiMapPin,
    FiCheckCircle,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setSubmitted(false);
    };


    const [sending, setSending] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSending(true);
        setSubmitted(false);
        setError("");

        try {
            await emailjs.send(
                "service_6d7catj", //service ID
                "template_l3i98xk", //template ID
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                {
                    publicKey: "IRMKmZNNiU22PIbY7",
                }
            );

            setSubmitted(true);

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (err) {
            console.error("Email sending failed:", err);
            setError("Unable to send your message. Please try again.");
        } finally {
            setSending(false);
        }
    };


    const contactItems = [
        {
            icon: FiMail,
            title: "Email Us",
            description: "Questions or feedback? Drop us a message.",
            detail: "Contact our support team",
        },
        {
            icon: FiMessageCircle,
            title: "Share Feedback",
            description: "Your ideas help us make Personify better.",
            detail: "We value your suggestions",
        },
        {
            icon: FiClock,
            title: "We're Here to Help",
            description: "Tell us about a problem you're facing.",
            detail: "We're happy to help",
        },
    ];

    return (
        <main className="min-h-screen overflow-hidden bg-gradient-to-b
      from-violet-50 via-white to-white px-4 py-12
      sm:px-6 sm:py-16 lg:px-12 lg:py-20" id="contact">

            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
                    <span className="inline-flex items-center gap-2
            rounded-full border border-violet-200 bg-white
            px-4 py-2 text-xs font-semibold tracking-[0.18em]
            text-violet-700 shadow-sm">
                        <span className="h-2 w-2 rounded-full bg-violet-500" />
                        CONTACT PERSONIFY
                    </span>

                    <h1 className="mt-6 text-3xl font-bold tracking-tight
            text-gray-900 sm:text-4xl lg:text-5xl">
                        Let's start a
                        <span className="block text-violet-600">
                            conversation.
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base
            leading-7 text-gray-500 sm:text-lg">
                        Have a question, an idea, or feedback?
                        We'd love to hear from you. Let's make your
                        contact management experience even better.
                    </p>
                </div>

                {/* Main layout */}
                <div className="grid items-stretch gap-6
          lg:grid-cols-5 lg:gap-8">

                    {/* Contact information */}
                    <div className="relative overflow-hidden rounded-3xl
            bg-gradient-to-br from-violet-700 via-violet-600
            to-indigo-600 p-7 text-white shadow-xl
            shadow-violet-200/60 sm:p-9 lg:col-span-2">

                        <div className="pointer-events-none absolute
              -right-20 -top-20 h-56 w-56 rounded-full
              border-[35px] border-white/10" />

                        <div className="pointer-events-none absolute
              -bottom-24 -left-16 h-64 w-64 rounded-full
              bg-white/5 blur-2xl" />

                        <div className="relative">
                            <p className="text-sm font-medium tracking-widest
                text-violet-200">
                                GET IN TOUCH
                            </p>

                            <h2 className="mt-4 text-2xl font-bold
                sm:text-3xl">
                                We'd love to hear from you.
                            </h2>

                            <p className="mt-4 leading-7 text-violet-100">
                                Whether you have a question, need help,
                                or want to share an idea, feel free to
                                reach out.
                            </p>

                            <div className="mt-9 space-y-7">
                                {contactItems.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div key={item.title}
                                            className="flex items-start gap-4">

                                            <div className="flex h-12 w-12 shrink-0
                        items-center justify-center rounded-xl
                        border border-white/20 bg-white/10">
                                                <Icon size={22} />
                                            </div>

                                            <div>
                                                <h3 className="font-semibold">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-1 text-sm leading-6
                          text-violet-100">
                                                    {item.description}
                                                </p>
                                                <p className="mt-1 text-xs
                          text-violet-200">
                                                    {item.detail}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-10 border-t border-white/20 pt-6">
                                <div className="flex items-center gap-2
                  text-sm text-violet-100">
                                    <FiMapPin size={17} />
                                    <span>Connecting people, one contact at a time.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className="rounded-3xl border border-gray-100
            bg-white p-6 shadow-xl shadow-gray-200/50
            sm:p-9 lg:col-span-3">

                        <h2 className="text-2xl font-bold text-gray-900">
                            Send us a message
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Fill out the form below and tell us how we can help.
                        </p>

                        {submitted && (
                            <div role="status" className="mt-6 flex items-start
                gap-3 rounded-xl border border-green-200
                bg-green-50 p-4 text-green-800">
                                <FiCheckCircle className="mt-0.5 shrink-0" size={20} />
                                <div>
                                    <p className="font-semibold">Form submitted!</p>
                                    <p className="mt-1 text-sm">
                                        Thank you for reaching out. We'll get back to you as soon as possible.
                                    </p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="mt-7 space-y-5">

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name"
                                        className="mb-2 block text-sm font-medium
                    text-gray-700">
                                        Full Name <span className="text-violet-600">*</span>
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        maxLength={100}
                                        className="w-full rounded-xl border
                      border-gray-200 bg-gray-50/50 px-4 py-3
                      text-sm outline-none transition
                      placeholder:text-gray-400
                      focus:border-violet-500 focus:bg-white
                      focus:ring-4 focus:ring-violet-100"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email"
                                        className="mb-2 block text-sm font-medium
                    text-gray-700">
                                        Email Address <span className="text-violet-600">*</span>
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        maxLength={254}
                                        className="w-full rounded-xl border
                      border-gray-200 bg-gray-50/50 px-4 py-3
                      text-sm outline-none transition
                      placeholder:text-gray-400
                      focus:border-violet-500 focus:bg-white
                      focus:ring-4 focus:ring-violet-100"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject"
                                    className="mb-2 block text-sm font-medium
                  text-gray-700">
                                    Subject <span className="text-violet-600">*</span>
                                </label>

                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    placeholder="What would you like to discuss?"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    maxLength={150}
                                    className="w-full rounded-xl border
                    border-gray-200 bg-gray-50/50 px-4 py-3
                    text-sm outline-none transition
                    placeholder:text-gray-400
                    focus:border-violet-500 focus:bg-white
                    focus:ring-4 focus:ring-violet-100"
                                />
                            </div>

                            <div>
                                <label htmlFor="message"
                                    className="mb-2 block text-sm font-medium
                  text-gray-700">
                                    Your Message <span className="text-violet-600">*</span>
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Write your message here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    maxLength={3000}
                                    className="w-full resize-y rounded-xl border
                    border-gray-200 bg-gray-50/50 px-4 py-3
                    text-sm outline-none transition
                    placeholder:text-gray-400
                    focus:border-violet-500 focus:bg-white
                    focus:ring-4 focus:ring-violet-100"
                                />
                                <p className="mt-1 text-right text-xs text-gray-400">
                                    {formData.message.length}/3000
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={sending}
                                className="group flex w-full items-center justify-center
    gap-3 rounded-xl bg-violet-600 px-6 py-3.5
    font-semibold text-white transition hover:bg-violet-700
    disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                            >
                                {sending ? "Sending..." : "Send Message"}
                                {!sending && <FiSend size={17} />}
                            </button>


                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
