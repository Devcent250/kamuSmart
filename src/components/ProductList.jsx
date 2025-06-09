"use client"
import { useState, useEffect } from "react"
import { Star, ShoppingCart, Heart, Search, Grid, List, X, MessageCircle, Phone, Mail } from "lucide-react"
import PropTypes from "prop-types"

// Generate sample product data
const generateProductData = () => {
  const products = []
  const categories = ["Self-Care", "Juice", "Mayonnaise", "Groceries", "Home Essentials"]
  const badges = ["Bestseller", "New Arrival", "Premium", "Smart Choice", "Eco-Friendly"]

  // List of available images
  const images = [
    "/images/IMG-20250514-WA0101.jpg",
    "/images/IMG-20250514-WA0102.jpg",
    "/images/IMG-20250514-WA0103.jpg",
    "/images/IMG-20250514-WA0104.jpg",
    "/images/IMG-20250514-WA0105.jpg",
    "/images/IMG-20250514-WA0106.jpg",
    "/images/IMG-20250514-WA0107.jpg",
    "/images/IMG-20250514-WA0108.jpg",
    "/images/IMG-20250514-WA0109.jpg",
    "/images/IMG-20250514-WA0110.jpg",
    "/images/IMG-20250514-WA0111.jpg",
    "/images/IMG-20250514-WA0112.jpg",
    "/images/IMG-20250514-WA0113.jpg",
    "/images/IMG-20250514-WA0114.jpg",
    "/images/IMG-20250514-WA0115.jpg",
    "/images/IMG-20250514-WA0116.jpg",
    "/images/IMG-20250514-WA0117.jpg",
    "/images/IMG-20250514-WA0118.jpg",
    "/images/IMG-20250514-WA0119.jpg",
    "/images/IMG-20250514-WA0120.jpg",
    "/images/IMG-20250514-WA0121.jpg",
    "/images/IMG-20250514-WA0122.jpg",
    "/images/IMG-20250514-WA0123.jpg",
    "/images/IMG-20250514-WA0124.jpg",
    "/images/IMG-20250514-WA0125.jpg",
    "/images/IMG-20250514-WA0126.jpg",
    "/images/IMG-20250514-WA0127.jpg",
    "/images/IMG-20250514-WA0128.jpg",
    "/images/IMG-20250514-WA0129.jpg",
    "/images/IMG-20250514-WA0130.jpg",
    "/images/IMG-20250514-WA0131.jpg",
    "/images/IMG-20250514-WA0132.jpg",
    "/images/IMG-20250514-WA0133.jpg",
    "/images/IMG-20250514-WA0134.jpg",
    "/images/IMG-20250514-WA0135.jpg",
    "/images/IMG-20250514-WA0136.jpg",
    "/images/IMG-20250514-WA0137.jpg",
    "/images/IMG-20250514-WA0138.jpg",
    "/images/IMG-20250514-WA0139.jpg",
    "/images/IMG-20250514-WA0140.jpg",
    "/images/IMG-20250514-WA0141.jpg",
    "/images/IMG-20250514-WA0142.jpg",
    "/images/IMG-20250514-WA0143.jpg",
    "/images/IMG-20250514-WA0144.jpg",
    "/images/IMG-20250514-WA0145.jpg",
    "/images/IMG-20250514-WA0146.jpg",
    "/images/IMG-20250514-WA0147.jpg",
    "/images/IMG-20250514-WA0148.jpg",
    "/images/IMG-20250514-WA0149.jpg",
    "/images/IMG-20250514-WA0150.jpg",
    "/images/IMG-20250514-WA0151.jpg",
    "/images/IMG-20250514-WA0152.jpg",
    "/images/IMG-20250514-WA0153.jpg",
    "/images/IMG-20250514-WA0154.jpg",
    "/images/IMG-20250514-WA0155.jpg",
    "/images/IMG-20250514-WA0156.jpg",
    "/images/IMG-20250514-WA0157.jpg",
    "/images/IMG-20250514-WA0158.jpg",
    "/images/IMG-20250514-WA0159.jpg",
    "/images/IMG-20250514-WA0160.jpg",
    "/images/IMG-20250514-WA0161.jpg",
    "/images/IMG-20250514-WA0162.jpg",
    "/images/IMG-20250514-WA0163.jpg",
    "/images/IMG-20250514-WA0164.jpg",
    "/images/IMG-20250514-WA0165.jpg",
    "/images/IMG-20250514-WA0166.jpg",
    "/images/IMG-20250514-WA0167.jpg",
    "/images/IMG-20250514-WA0168.jpg",
    "/images/IMG-20250514-WA0169.jpg",
    "/images/IMG-20250514-WA0170.jpg",
    "/images/IMG-20250514-WA0171.jpg",
    "/images/IMG-20250514-WA0172.jpg",
    "/images/IMG-20250514-WA0173.jpg",
    "/images/IMG-20250514-WA0174.jpg",
    "/images/IMG-20250514-WA0175.jpg",
    "/images/IMG-20250514-WA0176.jpg",
    "/images/IMG-20250514-WA0177.jpg",
    "/images/IMG-20250514-WA0178.jpg",
    "/images/IMG-20250514-WA0180.jpg",
    "/images/WhatsApp Image 2025-05-14 at 13.45.21_b7409942.jpg",
    "/images/WhatsApp Image 2025-05-14 at 13.45.28_0c9db95f.jpg",
    "/images/WhatsApp Image 2025-05-14 at 13.45.29_af481524.jpg",
    "/images/WhatsApp Image 2025-05-14 at 13.45.30_494efcef.jpg",
    "/images/WhatsApp Image 2025-05-14 at 13.45.31_94873816.jpg",
    "/images/WhatsApp Image 2025-05-14 at 13.45.32_25d2614a.jpg",
    "/images/WhatsApp Image 2025-05-14 at 13.45.32_d33b94d6.jpg",
    "/images/WhatsApp Image 2025-05-14 at 13.45.33_b423d085.jpg",
    "/images/WhatsApp Image 2025-05-14 at 13.45.34_be04895d.jpg",
    "/images/WhatsApp Image 2025-05-14 at 13.45.35_ae400b46.jpg",
    "/images/WhatsApp Image 2025-05-14 at 13.45.36_0584164d.jpg",
    "/images/WhatsApp Image 2025-05-14 at 13.45.36_5acfc58a.jpg",
    "/images/WhatsApp Image 2025-05-14 at 13.45.37_40634bb8.jpg",
    "/images/WhatsApp Image 2025-05-14 at 13.45.38_b14cc42a.jpg",
    "/images/WhatsApp Image 2025-05-14 at 13.45.39_729a9b6f.jpg",
    "/images/WhatsApp Image 2025-05-14 at 13.45.39_7fd80240.jpg",
    "/images/WhatsApp Image 2025-05-14 at 13.45.40_35935354.jpg",
    "/images/WhatsApp Image 2025-05-14 at 13.45.40_9bc896e5.jpg",
    "/images/WhatsApp Image 2025-05-14 at 13.45.41_c9cfb257.jpg",
    "/images/WhatsApp Image 2025-05-14 at 13.45.42_58454a06.jpg",
    "/images/WhatsApp Image 2025-06-05 at 10.18.18_e5afd0d4.jpg",
  ]

  // Create product objects
  for (let i = 0; i < images.length; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)]
    const badge = badges[Math.floor(Math.random() * badges.length)]
    const rating = (Math.random() * 2 + 3).toFixed(1)
    const reviews = Math.floor(Math.random() * 200)
    const inStock = Math.random() > 0.1
    const price = (Math.random() * 100 + 50).toFixed(2)
    const originalPrice = (Number(price) + Math.random() * 50).toFixed(2)
    const description = `This is a high-quality ${category.toLowerCase()} product designed to enhance your lifestyle. It features premium materials and smart technology for exceptional performance.`
    const features = [
      `Durable ${category} construction`,
      `Enhanced ${category} performance`,
      `Easy to use with smart features`,
      `Eco-friendly materials`,
    ]

    products.push({
      id: i + 1,
      name: `Smart ${category} Pro ${i + 1}`,
      image: images[i],
      category: category,
      badge: badge,
      rating: rating,
      reviews: reviews,
      inStock: inStock,
      price: Number.parseFloat(price),
      originalPrice: Number.parseFloat(originalPrice),
      description: description,
      features: features,
    })
  }

  return products
}

// Product Detail Modal Component
const ProductDetailModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null

  const handleWhatsAppContact = () => {
    const message = `Hi! I'm interested in ${product.name}. Could you please provide more information about this product?`
    const whatsappUrl = `https://wa.me/250783003049?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleCallContact = () => {
    window.open("tel:+250783003049", "_self")
  }

  const handleEmailContact = () => {
    const subject = `Inquiry about ${product.name}`
    const body = `Hi,\n\nI'm interested in ${product.name}. Could you please provide more information?\n\nThank you!`
    window.open(
      `mailto:info@kamusmart.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_self",
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Product Details</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge */}
              <div className="flex justify-center">
                <span className="bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
                  {product.badge}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                <p className="text-gray-600 mb-4">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-gray-700">{product.rating}</span>
                  <span className="text-gray-500">({product.reviews} reviews)</span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Contact Us for This Product:</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* WhatsApp */}
                    <button
                      onClick={handleWhatsAppContact}
                      className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </button>

                    {/* Call */}
                    <button
                      onClick={handleCallContact}
                      className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      Call
                    </button>

                    {/* Email */}
                    <button
                      onClick={handleEmailContact}
                      className="flex items-center justify-center gap-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      Email
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={handleWhatsAppContact}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 text-lg"
                  >
                    <ShoppingCart className="w-6 h-6" />
                    Order via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProductList = ({ setSelectedProduct, limit }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState("all")
  const [sortBy, setSortBy] = useState("default")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProduct, setSelectedProductLocal] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const productsPerPage = 12

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts(generateProductData())
      setLoading(false)
    }, 1000)
  }, [])

  const handleProductClick = (product) => {
    setSelectedProductLocal(product)
    setIsModalOpen(true)
    if (setSelectedProduct) setSelectedProduct(product)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProductLocal(null)
  }

  const getFilteredProducts = () => {
    let filtered = [...products]

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.badge.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Apply category filter
    if (filter !== "all") {
      filtered = filtered.filter((product) => product.category === filter)
    }

    // Apply sorting
    if (sortBy === "rating") {
      filtered.sort((a, b) => Number.parseFloat(b.rating) - Number.parseFloat(a.rating))
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === "price") {
      filtered.sort((a, b) => Number.parseFloat(a.price) - Number.parseFloat(b.price))
    }

    return filtered
  }

  let filteredProducts = getFilteredProducts()
  if (limit) filteredProducts = filteredProducts.slice(0, limit)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = limit ? filteredProducts : filteredProducts.slice(startIndex, endIndex)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    // Scroll to top of product list
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const getBadgeColor = (badge) => {
    const colors = {
      Bestseller: "bg-gradient-to-r from-amber-400 to-orange-500 text-white",
      "New Arrival": "bg-gradient-to-r from-blue-400 to-indigo-500 text-white",
      Premium: "bg-gradient-to-r from-purple-400 to-pink-500 text-white",
      "Smart Choice": "bg-gradient-to-r from-cyan-400 to-teal-500 text-white",
      "Eco-Friendly": "bg-gradient-to-r from-green-400 to-emerald-500 text-white",
    }
    return colors[badge] || "bg-gray-500 text-white"
  }

  const ProductCardSkeleton = () => (
    <div className="group relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col animate-pulse">
      {/* Image Placeholder */}
      <div className="aspect-square overflow-hidden bg-gray-200">
        <div className="w-full h-full"></div>
      </div>

      {/* Info Placeholder */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="flex items-center gap-1 mb-2">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/6 ml-1"></div>
        </div>
        <div className="h-6 bg-gray-200 rounded w-full mb-3"></div>
        <div className="flex items-center gap-2 mb-4">
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="h-10 bg-gray-200 rounded-xl w-full"></div>
      </div>
    </div>
  )

  if (loading) {
    const numberOfSkeletons = limit || 8
    return (
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {Array.from({ length: numberOfSkeletons }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </div>
    )
  }

  // Home page: only show grid, no filters/search/pagination
  if (limit) {
    return (
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100 cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              </div>

              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 group/heart">
                <Heart className="w-5 h-5 text-gray-600 group-hover/heart:text-red-500 transition-colors" />
              </button>

              {/* Product Image */}
              <div className="h-64 w-full overflow-hidden bg-gray-50">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="block w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                </div>

                <h3 className="font-semibold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xl font-bold text-gray-800">Rwf{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">Rwf{product.originalPrice.toLocaleString()}</span>
                  )}
                </div>

                <button
                  className="block w-full bg-emerald-500 text-white text-center py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleProductClick(product)
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Product Detail Modal */}
        <ProductDetailModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />
      </div>
    )
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="space-y-8">
        {/* Clean Header Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            {/* Filters and View Options */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Category Filter */}
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200"
              >
                <option value="all">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Home">Home</option>
                <option value="Fashion">Fashion</option>
                <option value="Sports">Sports</option>
                <option value="Beauty">Beauty</option>
              </select>

              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200"
              >
                <option value="default">Sort By</option>
                <option value="rating">Rating</option>
                <option value="name">Name</option>
              </select>

              {/* View Toggle */}
              <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === "grid" ? "bg-white shadow-sm text-emerald-600" : "text-gray-600 hover:text-emerald-600"
                    }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === "list" ? "bg-white shadow-sm text-emerald-600" : "text-gray-600 hover:text-emerald-600"
                    }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        {(searchTerm || filter !== "all") && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-blue-700">
              Showing {filteredProducts.length} results
              {searchTerm && ` for "${searchTerm}"`}
              {filter !== "all" && ` in ${filter}`}
            </p>
          </div>
        )}

        {/* Product Grid/List */}
        <div
          className={`grid gap-6 ${viewMode === "grid"
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4"
            : "grid-cols-1"
            }`}
        >
          {currentProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product)}
              className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100 cursor-pointer ${viewMode === "list" ? "flex" : ""
                }`}
            >
              {/* Badge */}
              <div className={`absolute top-4 left-4 z-10`}>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getBadgeColor(product.badge)}`}>
                  {product.badge}
                </span>
              </div>

              {/* Wishlist Button */}
              <button
                className={`absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 group/heart ${viewMode === "list" ? "hidden" : ""}`}
              >
                <Heart className="w-5 h-5 text-gray-600 group-hover/heart:text-red-500 transition-colors" />
              </button>

              {/* Product Image */}
              <div
                className={`h-64 w-full overflow-hidden bg-gray-50 ${viewMode === "list" ? "w-1/3 h-48" : "h-64"}`}
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="block w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                </div>

                <h3 className="font-semibold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xl font-bold text-gray-800">Rwf{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      Rwf{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleProductClick(product)
                  }}
                  className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
                >
                  <ShoppingCart className="w-5 h-5" />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg border ${currentPage === 1
                ? "border-gray-200 text-gray-400 cursor-not-allowed"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
            >
              Previous
            </button>

            {/* Page Numbers */}
            <div className="flex items-center space-x-2">
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1
                // Show first page, last page, current page, and pages around current page
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`w-10 h-10 rounded-lg border ${currentPage === pageNumber
                        ? "bg-emerald-500 text-white border-emerald-500"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                      {pageNumber}
                    </button>
                  )
                } else if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                  return (
                    <span key={pageNumber} className="text-gray-500">
                      ...
                    </span>
                  )
                }
                return null
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg border ${currentPage === totalPages
                ? "border-gray-200 text-gray-400 cursor-not-allowed"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

ProductList.propTypes = {
  setSelectedProduct: PropTypes.func,
  limit: PropTypes.number,
}

export default ProductList
