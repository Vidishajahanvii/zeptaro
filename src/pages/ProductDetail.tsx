import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import { getProductById, products } from "@/data/products";
import { useState } from "react";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = getProductById(productId || "");
  const [selectedVariant, setSelectedVariant] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
            <Link to="/#products">
              <Button variant="hero">
                <ArrowLeft className="w-5 h-5" />
                Back to Products
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = product.icon;
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{product.name} - Zeptaro</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/#products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        {/* Product Hero */}
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="bg-card rounded-3xl p-8 border border-border">
              <div className="aspect-square relative overflow-hidden rounded-2xl bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-8"
                />
              </div>
              <div className="flex flex-wrap gap-2 mt-6 justify-center">
                {product.features.map((feature) => (
                  <Badge key={feature} variant="secondary" className="text-sm">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline">{product.category}</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              {/* Pricing Options */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-card-foreground mb-4">Choose Your Configuration</h3>
                <div className="space-y-3">
                  {product.priceOptions.map((option, index) => (
                    <button
                      key={option.variant}
                      onClick={() => setSelectedVariant(index)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                        selectedVariant === index
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                            selectedVariant === index
                              ? "border-primary bg-primary"
                              : "border-muted-foreground"
                          }`}
                        >
                          {selectedVariant === index && (
                            <Check className="w-3 h-3 text-primary-foreground" />
                          )}
                        </div>
                        <span className="font-medium text-card-foreground">{option.variant}</span>
                      </div>
                      <span className="text-primary font-bold text-lg">{option.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quote Form */}
              <QuoteRequestForm
                productName={product.name}
                selectedVariant={product.priceOptions[selectedVariant]?.variant}
              />
            </div>
          </div>
        </div>

        {/* Specifications */}
        <section className="container mx-auto px-4 mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Technical Specifications
          </h2>
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="grid md:grid-cols-2">
              {product.specifications.map((spec, index) => (
                <div
                  key={spec.label}
                  className={`flex justify-between items-center p-5 border-b border-border md:border-r ${
                    index % 2 === 1 ? "md:border-r-0" : ""
                  } ${index >= product.specifications.length - 2 ? "md:border-b-0" : ""} ${
                    index === product.specifications.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-medium text-card-foreground text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="container mx-auto px-4 mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Related Products
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => {
              const RelatedIcon = relatedProduct.icon;
              return (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-48 bg-muted overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <RelatedIcon className="w-5 h-5 text-primary" />
                      <h3 className="font-bold text-card-foreground">{relatedProduct.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <span className="text-primary font-bold">{relatedProduct.price}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
