
      // Product data
      const products = {
        toothbrush1: {
          name: "Traditional Karuvela Tooth Brush",
          price: "₹20",
          icon: "🪥",
          description:
            "Our Traditional Karuvela Tooth Brush is hand-picked from the finest Karuvela trees. This natural dental care solution has been used for centuries in traditional Indian medicine. The antibacterial properties of Karuvela wood help maintain oral hygiene naturally without any chemicals.",
          features: [
            "100% Natural & Organic - No chemicals or preservatives",
            "Length: 6-8 inches - Perfect size for comfortable use",
            "Antibacterial Properties - Natural protection against germs",
            "Strengthens Gums - Promotes healthy gum tissue",
            "Freshens Breath - Natural aromatic properties",
            "Eco-Friendly - Biodegradable and sustainable",
          ],
          specs: {
            "Product Type": "Natural Tooth Brush",
            Material: "100% Karuvela Wood",
            Length: "6-8 inches",
            Weight: "15-20 grams",
            "Shelf Life": "3 months",
            Usage: "Daily dental care",
          },
        },
        toothbrush2: {
          name: "Premium Karuvela Tooth Brush",
          price: "₹35",
          icon: "🪥",
          description:
            "Our Premium Karuvela Tooth Brush is carefully selected from young, fresh branches ensuring superior fiber quality. These brushes provide excellent cleaning action while being gentle on your gums. The natural oils in fresh Karuvela wood provide additional dental benefits.",
          features: [
            "Selected Premium Quality - Hand-picked fresh branches",
            "Fresh & Soft Fiber - Better cleaning experience",
            "Long-lasting Freshness - Stays fresh for weeks",
            "Natural Whitening - Helps remove stains naturally",
            "Rich in Minerals - Contains natural fluoride",
            "Pleasant Taste - Mild, refreshing flavor",
          ],
          specs: {
            "Product Type": "Premium Natural Tooth Brush",
            Material: "Fresh Karuvela Wood",
            Length: "7-9 inches",
            Weight: "20-25 grams",
            "Shelf Life": "4 months",
            "Quality Grade": "Premium",
          },
        },
        toothbrush3: {
          name: "Family Pack (30 Pieces)",
          price: "₹500",
          icon: "🪥",
          description:
            "Our Family Pack provides a full month supply of fresh Karuvela tooth brushes for your entire family. Each brush is individually packed to maintain hygiene and freshness. This economical pack ensures you never run out of natural dental care.",
          features: [
            "30 Fresh Tooth Brushes - One month family supply",
            "Hygienic Packaging - Individually wrapped",
            "Cost-Effective - Save ₹100 on bulk purchase",
            "Free Home Delivery - Delivered to your doorstep",
            "Mixed Sizes Available - For adults and children",
            "Quality Assured - All brushes inspected",
          ],
          specs: {
            "Product Type": "Bulk Family Pack",
            Quantity: "30 pieces",
            Packaging: "Individual hygienic wrapping",
            "Total Weight": "600 grams",
            "Shelf Life": "3 months",
            Delivery: "Free home delivery",
          },
        },
        firewood1: {
          name: "Cut & Dried Firewood - Small",
          price: "₹350",
          icon: "🪵",
          description:
            "Our small pack of cut and dried Karuvela firewood is perfect for home cooking. Each piece is carefully selected, cut to uniform size, and properly seasoned for optimal burning. Karuvela wood is known for its high heat output and minimal smoke production.",
          features: [
            "25 kg Pack - Perfect for home use",
            "Well-seasoned & Dry - Ready to burn immediately",
            "Low Smoke Emission - Clean burning experience",
            "High Heat Output - Efficient fuel consumption",
            "Uniform Size Pieces - Easy to handle and store",
            "Natural Aroma - Pleasant wood fragrance",
          ],
          specs: {
            "Product Type": "Firewood",
            Weight: "25 kg",
            "Moisture Content": "Below 20%",
            "Piece Size": "12-18 inches",
            "Heat Value": "High BTU",
            Packaging: "Bundled",
          },
        },
        firewood2: {
          name: "Cut & Dried Firewood - Large",
          price: "₹650",
          icon: "🪵",
          description:
            "Our large pack is ideal for restaurants, hotels, and commercial kitchens that require consistent fuel supply. This premium grade firewood ensures long burning duration and stable heat for professional cooking requirements.",
          features: [
            "50 kg Pack - Bulk quantity for commercial use",
            "Premium Quality Wood - Selected mature trees",
            "Consistent Size Pieces - Professional grade",
            "Long Burning Duration - Extended cooking time",
            "Stable Heat Output - Consistent temperature",
            "Cost-Effective - Best value for bulk users",
          ],
          specs: {
            "Product Type": "Commercial Firewood",
            Weight: "50 kg",
            "Moisture Content": "Below 18%",
            "Piece Size": "15-20 inches",
            "Burning Time": "4-5 hours per load",
            Usage: "Commercial kitchens",
          },
        },
        firewood3: {
          name: "Bulk Firewood (1 Ton)",
          price: "₹12,000",
          icon: "🪵",
          description:
            "Our wholesale 1-ton pack is perfect for industries, large bakeries, and bulk consumers. Direct from factory pricing with free transportation included. This is the most economical option for large-scale firewood requirements.",
          features: [
            "1000 kg (1 Ton) - Wholesale quantity",
            "Factory Direct Pricing - Best wholesale rates",
            "Free Transportation - Delivered to your location",
            "Quality Assured - Inspected before delivery",
            "Bulk Storage Support - Stacking assistance available",
            "Regular Supply Contracts - Stable pricing",
          ],
          specs: {
            "Product Type": "Wholesale Firewood",
            Weight: "1000 kg (1 Ton)",
            "Moisture Content": "Below 20%",
            Delivery: "Free transportation",
            "Payment Terms": "Flexible options",
            Contract: "Available for regular supply",
          },
        },
        charcoal1: {
          name: "BBQ Charcoal - 5kg",
          price: "₹400",
          icon: "⚫",
          description:
            "Our BBQ grade Karuvela charcoal is perfect for home grilling and outdoor cooking. Made from 100% Karuvela wood through controlled carbonization process, it provides consistent heat and authentic smoky flavor to your BBQ.",
          features: [
            "5 kg Premium Charcoal - Perfect for weekend BBQ",
            "Long Burning Time - Up to 3 hours",
            "Low Ash Content - Easy cleanup",
            "BBQ & Grill Ready - Lights up quickly",
            "Authentic Flavor - Natural wood aroma",
            "Restaurant Quality - Professional grade",
          ],
          specs: {
            "Product Type": "BBQ Charcoal",
            Weight: "5 kg",
            "Carbon Content": "Above 85%",
            "Burning Time": "2-3 hours",
            "Ash Content": "Below 5%",
            Packaging: "Sealed bag",
          },
        },
        charcoal2: {
          name: "Restaurant Grade - 25kg",
          price: "₹1,800",
          icon: "⚫",
          description:
            "Our restaurant grade charcoal is specially processed for commercial food businesses. It provides uniform heat distribution and consistent performance required for professional kitchens and restaurants.",
          features: [
            "25 kg Premium Quality - Commercial grade",
            "Uniform Size Pieces - Consistent burning",
            "High Heat Efficiency - Cost-effective fuel",
            "Minimal Spark - Safe for indoor use",
            "Extended Burn Time - Long-lasting performance",
            "Professional Standard - Restaurant approved",
          ],
          specs: {
            "Product Type": "Restaurant Charcoal",
            Weight: "25 kg",
            "Carbon Content": "Above 88%",
            "Burning Time": "4-5 hours",
            "Heat Output": "Very High BTU",
            Certification: "Food grade",
          },
        },
        charcoal3: {
          name: "Industrial Grade - 100kg",
          price: "₹6,500",
          icon: "⚫",
          description:
            "Our industrial grade charcoal is designed for heavy-duty applications requiring maximum heat output and extended burning time. Perfect for industries, large-scale food processing, and heating applications.",
          features: [
            "100 kg Bulk Pack - Industrial quantity",
            "Maximum Heat Output - Highest BTU rating",
            "Extended Burn Time - 6-8 hours per load",
            "Wholesale Pricing - Most economical option",
            "High Carbon Content - Premium quality",
            "Consistent Performance - Industrial standard",
          ],
          specs: {
            "Product Type": "Industrial Charcoal",
            Weight: "100 kg",
            "Carbon Content": "Above 90%",
            "Burning Time": "6-8 hours",
            "Heat Output": "Maximum BTU",
            Application: "Industrial use",
          },
        },
      };
    //ithu anthe cattagery ya aduthathuku neviget pannum  
      function showCategory(categoryId) {const categories = document.querySelectorAll(".category-content");
        categories.forEach((cat) => cat.classList.remove("active"));
        
        const tabs = document.querySelectorAll(".tab-btn");
        console.log("tabs", tabs);
        tabs.forEach((tab) => {console.log("tab class", tab.classList);
          tab.classList.remove("active");
        });

        document.getElementById(categoryId).classList.add("active");
        event.target.classList.add("active");
      }

      function showProductDetails(productId) {
        const product = products[productId];
        const detailsPage = document.getElementById("details-page");
  // Itha tha prodect la irukkura viwe btn oda
        let featuresHTML = "";
        product.features.forEach((feature) => {
          featuresHTML += `<li>${feature}</li>`;
        });

        let specsHTML = "";
        for (let [key, value] of Object.entries(product.specs)) {
          specsHTML += `<tr><td>${key}</td><td>${value}</td></tr>`;
        }

        detailsPage.innerHTML = `
                <button class="back-btn" onclick="goBackToCatalogue()">← Back to Catalogue</button>
                
                <div class="product-details">
                    <div class="product-details-header">
                        <div class="product-details-image">${product.icon}</div>
                        <div class="product-details-info">
                            <h1>${product.name}</h1>
                            <div class="product-details-price">${product.price}</div>
                            <p class="product-details-desc">${product.description}</p>
                            <ul class="product-features-detailed">
                                ${featuresHTML}
                            </ul>
                        </div>
                    </div>

                    <div class="specifications">
                        <h3>Product Specifications</h3>
                        <table class="spec-table">
                            ${specsHTML}
                        </table>
                    </div>

                    <div class="enquiry-section">
                        <h3>Interested in this product?</h3>
                        <button class="enquiry-btn" onclick="enquireProduct('${product.name}')">Send Enquiry</button>
                    </div>
                </div>
            `;

        document.getElementById("catalogue-page").classList.remove("active");
        detailsPage.classList.add("active");
        window.scrollTo(0, 0);
      }

      function goBackToCatalogue() {
        document.getElementById("details-page").classList.remove("active");
        document.getElementById("catalogue-page").classList.add("active");
        window.scrollTo(0, 0);
      }

      function enquireProduct(productName) {
        alert(
          "Thank you for your interest in " +
            productName +
            "!\n\nOur team will contact you shortly.\n\nFor immediate assistance, please call:\n+91 XXXXX XXXXX\n\nOr email us at:\ninfo@karuvelaproducts.com"
        );
      }
