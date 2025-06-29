"use client"
import { useState, useEffect } from "react"
import { Star, ShoppingCart, Heart, Search, Grid, List, X, MessageCircle, Phone, Mail } from "lucide-react"
import PropTypes from "prop-types"

// Generate product data from KAMU-PRODUCTS images only
const kamuProductImages = [
  "Agahozo Water.jpeg",
  "Airfreshner.jpeg",
  "Aluminium Foil.jpeg",
  "Bronche.jpeg",
  "Chicken-Beef-Fish Masala.jpeg",
  "Colgate  for kids.jpeg",
  "Essuie-tout Cleanroll.jpeg",
  "Essuie-tout Everyday.jpeg",
  "Gant.jpeg",
  "Hand wash.jpeg",
  "Insecticide.jpeg",
  "Inyange Juice.jpeg",
  "Inyange_Cover.jpeg",
  "Maggi.jpeg",
  "Mayonaise citron.jpeg",
  "Salsa-Nezo-Simba mbili-Creme freche.jpeg",
  "Sandark.jpeg",
  "Showel gel.jpeg",
  "Shower Gel.jpeg",
  "Slipers OG.jpeg",
  "Slippers.jpeg",
  "Small towel.jpeg",
  "Sunlight.jpeg",
  "Supa adult diapers.jpeg",
  "Supa serviette.jpeg",
  "Toilet paper.jpeg",
  "Tooth brush for Kids.jpeg",
  "Vaseline body lotion.jpeg",
]

function toTitleCase(str) {
  return str.replace(/[-_]+/g, ' ') // replace dashes/underscores with space
    .replace(/\.jpeg$/i, '') // remove extension
    .replace(/\s+/g, ' ') // collapse spaces
    .trim()
    .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}

const generateProductData = () => {
  return kamuProductImages.map((filename, idx) => ({
    id: idx + 1,
    name: toTitleCase(filename),
    image: `/KAMU-PRODUCTS/${filename}`,
    category: "KAMU Product",
    badge: "Bestseller",
    rating: 4.5,
    reviews: 100,
    inStock: true,
    price: 10.0,
    originalPrice: 12.0,
    description: `High quality ${toTitleCase(filename)} from KAMU.`,
    features: [
      `Premium quality`,
      `Trusted brand`,
      `Available now`,
      `Best value`,
    ],
  }))
}

const ProductList = ({ setSelectedProduct, limit }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState("all")
  const [sortBy, setSortBy] = useState("default")

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts(generateProductData())
      setLoading(false)
    }, 1000)
  }, [])

  const handleProductClick = (product) => {
    if (setSelectedProduct) setSelectedProduct(product)
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
  const currentProducts = filteredProducts

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
      </div>
    )
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="space-y-8">
        {/* Clean Header Section */}
        <div className="bg-blue-100 rounded-2xl shadow-sm border border-gray-200 p-6">
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
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100 cursor-pointer"
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
      </div>
    </div>
  )
}

ProductList.propTypes = {
  setSelectedProduct: PropTypes.func,
  limit: PropTypes.number,
}

export default ProductList
