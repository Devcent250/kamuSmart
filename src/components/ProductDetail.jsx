"use client"

import { useState } from "react"
import { X, Star, ShoppingCart, Heart, Minus, Plus, Shield, Truck, RefreshCw, Check, Clock } from "lucide-react"
import PropTypes from 'prop-types'

export default function ProductDetail({ product, onClose }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedTab, setSelectedTab] = useState("overview")
  const [isWishlist, setIsWishlist] = useState(false)

  if (!product) return null

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, quantity + value)
    setQuantity(newQuantity)
  }

  const handleAddToCart = () => {
    // Implement cart functionality
    console.log("Added to cart:", { product, quantity })
  }

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist)
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "shipping", label: "Shipping" },
  ]

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 z-50 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden animate-in slide-in-from-bottom-4 duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Enhanced Header */}
        <div className="relative p-6">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div> */}

          <button
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            className="absolute top-4 right-4 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-200 group shadow-sm"
          >
            <X className="w-6 h-6 text-gray-600 group-hover:rotate-90 transition-transform duration-200" />
          </button>

          <div className="relative flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center shadow-sm">
              <span className="text-2xl font-bold text-gray-800">KS</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Product Details</h2>
              <p className="text-gray-500">Premium Quality • Smart Living</p>
            </div>
          </div>

          {/* Decorative elements */}
          {/* <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div> */}
        </div>

        {/* Enhanced Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(95vh-120px)]">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Enhanced Product Image Section */}
            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden group shadow-lg border border-gray-100">
                <img
                  src={product.image || "https://placehold.co/600x400/e2e8f0/64748b?text=Product+Image"}
                  alt={product.name}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  {product.inStock ? (
                    <span className="flex items-center space-x-2 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      <Check className="w-4 h-4" />
                      <span>In Stock</span>
                    </span>
                  ) : (
                    <span className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      <Clock className="w-4 h-4" />
                      <span>Out of Stock</span>
                    </span>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Enhanced Features Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-200 bg-gray-50 shadow-md">
                  <Shield className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-gray-800">Quality</p>
                  <p className="text-xs text-gray-600 mt-1">Guaranteed</p>
                </div>
                <div className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-200 bg-gray-50 shadow-md">
                  <Truck className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-gray-800">Free Ship</p>
                  <p className="text-xs text-gray-600 mt-1">Over $50</p>
                </div>
                <div className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-200 bg-gray-50 shadow-md">
                  <RefreshCw className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-gray-800">Returns</p>
                  <p className="text-xs text-gray-600 mt-1">30 Days</p>
                </div>
              </div>
            </div>

            {/* Enhanced Product Info Section */}
            <div className="space-y-8">
              {/* Product Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 shadow-sm">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-amber-400 fill-current" : "text-gray-300"
                            }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-gray-700">{product.rating}</span>
                    <span className="text-gray-500">(124 reviews)</span>
                  </div>
                </div>

                <h1 className="text-4xl font-bold text-gray-800 mb-3 leading-tight">{product.name}</h1>
                <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
              </div>

              {/* Enhanced Tabs Section */}
              <div>
                <div className="flex space-x-2 mb-6 bg-gray-100 rounded-2xl p-2 shadow-sm">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id)}
                      className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${selectedTab === tab.id
                        ? "bg-white text-emerald-600 shadow-md transform scale-105"
                        : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  {selectedTab === "overview" && (
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">Product Overview</h4>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {product.description} This premium product combines cutting-edge technology with elegant design
                        to deliver exceptional performance and user experience.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                          <h5 className="font-semibold text-gray-800 mb-2">Smart Technology</h5>
                          <p className="text-sm text-gray-700">Advanced connectivity and intelligent features</p>
                        </div>
                        <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                          <h5 className="font-semibold text-gray-800 mb-2">Premium Design</h5>
                          <p className="text-sm text-gray-700">Elegant aesthetics with durable construction</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedTab === "features" && (
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">Key Features</h4>
                      <div className="space-y-3">
                        {product.features?.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50 shadow-sm"
                          >
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedTab === "shipping" && (
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">Shipping Information</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Enjoy fast and reliable shipping on all orders. We offer various shipping options to meet your
                        needs, with estimated delivery times provided at checkout.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Standard Shipping: 3-5 business days</li>
                        <li>Express Shipping: 1-2 business days</li>
                        <li>International Shipping: 7-14 business days</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
}
