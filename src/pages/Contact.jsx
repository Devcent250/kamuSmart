"use client"
import React, { useState } from 'react';
import {
    Phone,
    MessageCircle,
    Mail,
    Clock,
    MapPin,
    Send,
    Sparkles,
    CheckCircle,
    HeadphonesIcon,
    Globe,
    Star,
    ArrowRight,
} from "lucide-react"
import Logo from '../assets/LOGO.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        // Reset form
        setFormData({ name: "", email: "", message: "" })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const contactMethods = [
        {
            icon: Phone,
            title: "Phone",
            description: "Call us directly",
            value: "+250 783 003 049",
            link: "tel:+250783003049",
            color: "from-blue-400 to-blue-600",
        },
        {
            icon: MessageCircle,
            title: "WhatsApp",
            description: "Message us instantly",
            value: "+250 788 775 415",
            link: "https://wa.me/250788775415",
            color: "from-green-400 to-green-600",
        },
        {
            icon: Mail,
            title: "Email",
            description: "Send us an email",
            value: "info@kamusmart.com",
            link: "mailto:info@kamusmart.com",
            color: "from-purple-400 to-purple-600",
        },
        {
            icon: MapPin,
            title: "Location",
            description: "Visit our office",
            value: "Kigali, Rwanda",
            link: "#",
            color: "from-orange-400 to-orange-600",
        },
    ]

    const businessHours = [
        { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
        { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
        { day: "Sunday", hours: "Closed" },
    ]

    const supportOptions = [
        {
            icon: HeadphonesIcon,
            title: "24/7 Support",
            description: "Round-the-clock assistance",
        },
        {
            icon: CheckCircle,
            title: "Quick Response",
            description: "We respond within 2 hours",
        },
        {
            icon: Globe,
            title: "Multiple Channels",
            description: "Reach us your preferred way",
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 pt-20">
                {/* Background Pattern */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                ></div>

                <div className="relative container mx-auto px-6 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-white/90">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-medium">Get In Touch</span>
                        </div>

                        <div className="flex items-center justify-center mb-6">
                            <img src={Logo || "/placeholder.svg"} alt="Kamu Smart Logo" className="h-36 w-42" />
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Contact{" "}
                            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                                Kamu Smart
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-emerald-50 mb-8 leading-relaxed max-w-3xl mx-auto">
                            We're here to help! Reach out to us through any of our channels and we'll get back to you promptly.
                        </p>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>

            {/* Contact Methods */}
            <div className="relative -mt-16 container mx-auto px-6 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactMethods.map((method, index) => (
                        <a
                            key={index}
                            href={method.link}
                            target={method.link.startsWith("http") ? "_blank" : "_self"}
                            rel={method.link.startsWith("http") ? "noopener noreferrer" : ""}
                            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100 p-6 text-center"
                        >
                            <div
                                className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                            >
                                <method.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">{method.title}</h3>
                            <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                            <p className="text-emerald-600 font-semibold">{method.value}</p>
                        </a>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Business Hours */}
                        <div className="bg-white rounded-3xl shadow-lg p-8 border border-emerald-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">Business Hours</h3>
                            </div>

                            <div className="space-y-4">
                                {businessHours.map((schedule, index) => (
                                    <div key={index} className="flex justify-between items-center p-3 bg-emerald-50 rounded-xl">
                                        <span className="font-medium text-gray-700">{schedule.day}</span>
                                        <span className="text-emerald-600 font-semibold">{schedule.hours}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Support Options */}
                        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl shadow-lg p-8 text-white">
                            <h3 className="text-xl font-bold mb-6">Why Choose Our Support?</h3>
                            <div className="space-y-4">
                                {supportOptions.map((option, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <option.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">{option.title}</h4>
                                            <p className="text-emerald-100 text-sm">{option.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl shadow-lg p-8 border border-emerald-100">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                                        <Send className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
                                </div>
                                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 resize-none"
                                        placeholder="Tell us how we can help you..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>

                            <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                                <div className="flex items-center gap-2 text-emerald-700">
                                    <CheckCircle className="w-5 h-5" />
                                    <span className="text-sm font-medium">We typically respond within 2 hours during business hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-br from-white to-emerald-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-4">
                                <Star className="w-4 h-4" />
                                <span className="text-sm font-medium">Quick Help</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                            <p className="text-xl text-gray-600">Find quick answers to common questions</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
                                <h3 className="font-bold text-gray-800 mb-3">What are your shipping options?</h3>
                                <p className="text-gray-600 text-sm">
                                    We offer standard and express shipping options. Standard delivery takes 3-5 business days, while
                                    express delivery takes 1-2 business days.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
                                <h3 className="font-bold text-gray-800 mb-3">Do you offer returns?</h3>
                                <p className="text-gray-600 text-sm">
                                    Yes, we offer a 30-day return policy for all products. Items must be in original condition with
                                    packaging.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
                                <h3 className="font-bold text-gray-800 mb-3">How can I track my order?</h3>
                                <p className="text-gray-600 text-sm">
                                    Once your order ships, you'll receive a tracking number via email. You can use this to track your
                                    package in real-time.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
                                <h3 className="font-bold text-gray-800 mb-3">What payment methods do you accept?</h3>
                                <p className="text-gray-600 text-sm">
                                    We accept all major credit cards, PayPal, and mobile money payments for your convenience.
                                </p>
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <button className="group inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors duration-200">
                                View All FAQs
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
