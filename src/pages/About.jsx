"use client"
import {
  Target,
  Heart,
  Award,
  Phone,
  MessageCircle,
  Mail,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Shield,
  Globe,
  Star,
} from "lucide-react"

export default function About() {
  const values = [
    "Quality and Excellence",
    "Customer Satisfaction",
    "Innovation and Progress",
    "Integrity and Trust",
    "Community Impact",
  ]

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "500+", label: "Products" },
    { number: "99%", label: "Satisfaction" },
    { number: "5★", label: "Rating" },
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
              <span className="text-sm font-medium">About Our SHOP</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Kamu Smart
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-emerald-50 mb-8 leading-relaxed max-w-3xl mx-auto">
              Dedicated to providing high-quality products that enhance your daily life with excellence and innovation.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-16 container mx-auto px-6 mb-20">
        <div className="bg-white rounded-3xl shadow-2xl shadow-emerald-500/10 p-8 backdrop-blur-sm border border-emerald-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Story */}
          <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Story</h2>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Kamu Smart is dedicated to providing high-quality products that enhance your daily life. We carefully
                  select each item in our collection to ensure the best value and quality for our customers.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our commitment to excellence and customer satisfaction drives everything we do.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-emerald-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Quality Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Mission & Vision</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    To provide innovative and reliable products that make a positive impact on our customers' lives
                    while maintaining the highest standards of quality and service.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Vision</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    To become the leading provider of premium products, known for our exceptional quality and customer
                    service.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-blue-600">
                <Globe className="w-5 h-5" />
                <span className="font-medium">Global Excellence</span>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Values</h2>
              </div>

              <div className="space-y-3">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 group/item hover:bg-emerald-50 p-2 rounded-lg transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                    <span className="text-gray-600 group-hover/item:text-emerald-700 transition-colors duration-200">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-purple-600">
                <Shield className="w-5 h-5" />
                <span className="font-medium">Core Principles</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="group bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100 overflow-hidden text-white">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors duration-200">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-emerald-100">+250 783 003 049</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors duration-200">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">WhatsApp</p>
                    <p className="text-emerald-100">+250 788 775 415</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors duration-200">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-emerald-100">info@kamusmart.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-emerald-100">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-medium">Always Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-br from-white to-emerald-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Join Our Journey</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Ready to Experience Excellence?</h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Discover our premium collection of products designed to enhance your lifestyle and bring innovation to
              your everyday.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                Explore Products
                <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group inline-flex items-center justify-center gap-2 border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-50 transition-all duration-300">
                Contact Us
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
