<!DOCTYPE html>

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>FlowPOS — Modern Cloud POS &amp; Mini-ERP for Retail &amp; Merchants</title>
<!-- Google Fonts: Inter & Plus Jakarta Sans -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Plus+Jakarta+Sans:wght@600;700;800&amp;family=JetBrains+Mono:wght@500;600&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols Outlined -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS with Forms and Container Queries -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Configuration based on Design System & Shared Components -->
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "on-surface-variant": "#464555",
            "on-primary-container": "#dad7ff",
            "on-tertiary-container": "#d4dbf5",
            "surface-container": "#eceef0",
            "on-secondary-fixed-variant": "#004395",
            "on-secondary-fixed": "#001a42",
            "surface-variant": "#e0e3e5",
            "surface-container-low": "#f2f4f6",
            "surface-bright": "#f7f9fb",
            "error": "#ba1a1a",
            "secondary-container": "#2170e4",
            "secondary-fixed": "#d8e2ff",
            "on-background": "#191c1e",
            "primary": "#3525cd",
            "surface-container-high": "#e6e8ea",
            "inverse-surface": "#2d3133",
            "on-error-container": "#93000a",
            "primary-fixed-dim": "#c3c0ff",
            "on-secondary": "#ffffff",
            "surface": "#f7f9fb",
            "on-surface": "#191c1e",
            "outline-variant": "#c7c4d8",
            "inverse-primary": "#c3c0ff",
            "surface-container-lowest": "#ffffff",
            "on-tertiary-fixed-variant": "#3f465c",
            "tertiary-container": "#586076",
            "on-error": "#ffffff",
            "on-tertiary-fixed": "#131b2e",
            "surface-tint": "#4d44e3",
            "primary-fixed": "#e2dfff",
            "secondary-fixed-dim": "#adc6ff",
            "tertiary-fixed": "#dae2fd",
            "primary-container": "#4f46e5",
            "on-primary": "#ffffff",
            "inverse-on-surface": "#eff1f3",
            "on-primary-fixed": "#0f0069",
            "secondary": "#0058be",
            "on-tertiary": "#ffffff",
            "tertiary": "#41485e",
            "error-container": "#ffdad6",
            "surface-dim": "#d8dadc",
            "on-secondary-container": "#fefcff",
            "on-primary-fixed-variant": "#3323cc",
            "surface-container-highest": "#e0e3e5",
            "outline": "#777587",
            "background": "#f7f9fb",
            "tertiary-fixed-dim": "#bec6e0"
          },
          borderRadius: {
            "DEFAULT": "0.125rem",
            "lg": "0.25rem",
            "xl": "0.5rem",
            "full": "0.75rem"
          },
          spacing: {
            "space-xs": "0.25rem",
            "space-sm": "0.5rem",
            "gutter": "1.5rem",
            "space-lg": "1.5rem",
            "gutter-desktop": "1.5rem",
            "margin-desktop": "2.5rem",
            "space-md": "1rem",
            "margin-mobile": "1rem",
            "space-xl": "2.5rem",
            "margin": "2rem",
            "gutter-mobile": "1rem"
          },
          fontFamily: {
            "label-sm": ["Inter", "sans-serif"],
            "code-sm": ["JetBrains Mono", "monospace"],
            "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
            "body-lg": ["Inter", "sans-serif"],
            "title-md": ["Inter", "sans-serif"],
            "headline-sm": ["Plus Jakarta Sans", "sans-serif"],
            "display-hero": ["Plus Jakarta Sans", "sans-serif"],
            "display-hero-mobile": ["Plus Jakarta Sans", "sans-serif"],
            "label-md": ["Inter", "sans-serif"],
            "body-md": ["Inter", "sans-serif"],
            "headline-md": ["Plus Jakarta Sans", "sans-serif"],
            "headline-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
            "body-sm": ["Inter", "sans-serif"]
          },
          fontSize: {
            "label-sm": ["11px", { lineHeight: "14px", letterSpacing: "0.04em", fontWeight: "600" }],
            "code-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "500" }],
            "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "600" }],
            "body-lg": ["16px", { lineHeight: "24px", letterSpacing: "-0.005em", fontWeight: "400" }],
            "title-md": ["16px", { lineHeight: "24px", letterSpacing: "-0.01em", fontWeight: "600" }],
            "headline-sm": ["20px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "600" }],
            "display-hero": ["48px", { lineHeight: "56px", letterSpacing: "-0.025em", fontWeight: "700" }],
            "display-hero-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" }],
            "label-md": ["13px", { lineHeight: "18px", letterSpacing: "0.01em", fontWeight: "500" }],
            "body-md": ["14px", { lineHeight: "20px", letterSpacing: "0em", fontWeight: "400" }],
            "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.015em", fontWeight: "600" }],
            "headline-lg-mobile": ["24px", { lineHeight: "32px", letterSpacing: "-0.015em", fontWeight: "600" }],
            "body-sm": ["12px", { lineHeight: "16px", letterSpacing: "0em", fontWeight: "400" }]
          }
        }
      }
    }
  </script>
<style>
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      display: inline-block;
      vertical-align: middle;
      line-height: 1;
    }
    .custom-scroll::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    .custom-scroll::-webkit-scrollbar-thumb {
      background: #CBD5E1;
      border-radius: 4px;
    }
  </style>
</head>
<body class="bg-background text-on-surface antialiased font-body-md selection:bg-primary-fixed selection:text-primary">
<!-- ==========================================
       SECTION 1: TOP NAVIGATION BAR (SHARED JSON EXECUTION)
       ========================================== -->
<header class="sticky top-0 z-50 bg-surface-container-lowest border-b border-surface-container-high shadow-sm">
<div class="flex justify-between items-center w-full px-space-lg md:px-margin-desktop max-w-[1440px] mx-auto h-16">
<!-- Brand Logo & Tech Anchor Badge -->
<div class="flex items-center gap-3">
<a class="flex items-center gap-2 group" href="#">
<div class="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-sm group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-[20px]" data-icon="point_of_sale">point_of_sale</span>
</div>
<span class="text-headline-sm font-headline-sm text-primary font-bold tracking-tight">FlowPOS</span>
</a>
<span class="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container text-tertiary font-label-sm text-label-sm border border-outline-variant/40">
<span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          ERP + POS Suite
        </span>
</div>
<!-- Navigation Links (Active mapping for landing page / features) -->
<nav class="hidden md:flex items-center gap-8">
<a class="text-primary font-semibold border-b-2 border-primary pb-1 font-label-md text-label-md transition-colors duration-150" href="#features">Features</a>
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors duration-150 font-label-md text-label-md" href="#pos-terminal">POS Terminal</a>
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors duration-150 font-label-md text-label-md" href="#inventory">Inventory</a>
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors duration-150 font-label-md text-label-md" href="#pricing">Pricing</a>
<a class="text-on-surface-variant font-medium hover:text-primary transition-colors duration-150 font-label-md text-label-md" href="#integrations">Integrations</a>
</nav>
<!-- Trailing Action Buttons -->
<div class="flex items-center gap-4">
<a class="text-on-surface-variant hover:text-primary font-title-md text-label-md transition-colors duration-150" href="#">
          Log In
        </a>
<a class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-on-primary font-title-md text-label-md shadow-sm hover:bg-primary-container active:scale-95 transition-all duration-200" href="#demo">
<span>Try Free Demo</span>
<span class="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</header>
<main>
<!-- ==========================================
         SECTION 2: HERO SECTION WITH RICH POS MOCKUP
         ========================================== -->
<section class="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-surface-container-lowest via-surface-bright to-surface">
<div class="max-w-[1440px] mx-auto px-space-lg md:px-margin-desktop">
<!-- Hero Header Cluster -->
<div class="max-w-4xl mx-auto text-center flex flex-col items-center">
<!-- Social Proof Badge Pill -->
<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/60 shadow-sm mb-6 hover:border-primary/40 transition-colors">
<div class="flex items-center text-amber-500 text-[14px]">
<span class="material-symbols-outlined text-[16px] text-amber-500" data-icon="star" data-weight="fill">star</span>
</div>
<span class="font-label-sm text-label-sm text-on-surface">
              Rated 4.9/5 by 4,200+ local retail stores &amp; merchants
            </span>
</div>
<!-- Bold Main Headline -->
<h1 class="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface tracking-tight max-w-3xl mb-6">
            Manage Inventory, Sales, and POS in <span class="text-primary underline decoration-primary/20 decoration-wavy underline-offset-8">One Smart Dashboard</span>
</h1>
<!-- Crisp Subheadline -->
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
            Ditch messy spreadsheets and slow registers. FlowPOS connects your daily checkouts, stock sync, and financial analytics into one blazing-fast, intuitive workspace.
          </p>
<!-- Dual CTAs -->
<div class="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-6">
<a class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-title-md text-title-md shadow-md hover:bg-primary-container active:scale-95 transition-all duration-200" href="#demo">
<span>Try Free Demo</span>
<span class="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</a>
<button class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface-container-lowest border border-outline-variant/60 text-on-surface hover:bg-surface-container-low font-title-md text-title-md transition-all duration-200" type="button">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="play_circle">play_circle</span>
<span>Watch 2-Min Interactive Tour</span>
</button>
</div>
<!-- Trust Badges -->
<div class="flex flex-wrap items-center justify-center gap-4 text-on-surface-variant font-label-md text-label-md">
<span class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-emerald-600 text-[18px]" data-icon="check_circle">check_circle</span>
              No credit card required
            </span>
<span class="text-outline-variant">•</span>
<span class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-emerald-600 text-[18px]" data-icon="bolt">bolt</span>
              Instant 3-minute setup
            </span>
<span class="text-outline-variant">•</span>
<span class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-emerald-600 text-[18px]" data-icon="wifi_off">wifi_off</span>
              Works offline &amp; online
            </span>
</div>
</div>
<!-- HERO MOCKUP: Real ERP System Dashboard -->
<div class="mt-12 md:mt-16 relative">
<div class="absolute -inset-1.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-xl opacity-60"></div>
<div class="relative bg-surface-container-lowest border border-surface-container-high rounded-xl shadow-2xl overflow-hidden">
<img src="assets/dashboard.png" alt="ERP System dashboard — revenue metrics, low-stock alerts, and recent sales" class="w-full h-auto block" loading="eager" width="1912" height="962">
</div>
</div>
</section>
<!-- ==========================================
         SECTION 3: SOCIAL PROOF & MERCHANT STATS BAR
         ========================================== -->
<section class="py-12 bg-surface-container-lowest border-y border-surface-container-high">
<div class="max-w-[1440px] mx-auto px-space-lg md:px-margin-desktop">
<!-- Big Number Metric Strips -->
<div class="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-10 border-b border-surface-container">
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Total Scale</span>
<div class="font-headline-lg text-headline-lg text-on-surface font-bold font-display-hero">$48M+</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
<span class="text-emerald-700 font-semibold flex items-center"><span class="material-symbols-outlined text-[14px]" data-icon="trending_up">trending_up</span> +34% MoM</span> monthly gross sales
            </p>
</div>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Availability</span>
<div class="font-headline-lg text-headline-lg text-on-surface font-bold font-display-hero">99.98%</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
<span class="text-emerald-700 font-semibold flex items-center"><span class="material-symbols-outlined text-[14px]" data-icon="check_circle">check_circle</span> SLA</span> register uptime rate
            </p>
</div>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Speed Benchmark</span>
<div class="font-headline-lg text-headline-lg text-on-surface font-bold font-display-hero">3.2s</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
<span class="text-primary font-semibold">Lightning Tap</span> avg. checkout duration
            </p>
</div>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Inventory Efficiency</span>
<div class="font-headline-lg text-headline-lg text-on-surface font-bold font-display-hero">-35%</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
<span class="text-emerald-700 font-semibold">Reduced Waste</span> &amp; zero phantom stockouts
            </p>
</div>
</div>
<!-- Trusted Retail Store Badges -->
<div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
            Engineered for high-frequency commerce across retail sectors:
          </p>
<div class="flex flex-wrap items-center gap-3">
<span class="px-3.5 py-1.5 rounded-full bg-surface-container-low border border-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[18px]" data-icon="apparel">apparel</span>
              Fashion &amp; Apparel Boutiques
            </span>
<span class="px-3.5 py-1.5 rounded-full bg-surface-container-low border border-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-2">
<span class="material-symbols-outlined text-emerald-600 text-[18px]" data-icon="local_cafe">local_cafe</span>
              Specialty Cafés &amp; Bakeries
            </span>
<span class="px-3.5 py-1.5 rounded-full bg-surface-container-low border border-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[18px]" data-icon="shopping_basket">shopping_basket</span>
              Neighborhood Grocers &amp; Bodegas
            </span>
<span class="px-3.5 py-1.5 rounded-full bg-surface-container-low border border-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-2">
<span class="material-symbols-outlined text-tertiary text-[18px]" data-icon="devices">devices</span>
              Hardware &amp; Electronics
            </span>
</div>
</div>
</div>
</section>
<!-- ==========================================
         SECTION 4: CORE FEATURE PILLARS (3 KEY PILLARS)
         ========================================== -->
<section class="py-20 md:py-28 bg-surface" id="features">
<div class="max-w-[1440px] mx-auto px-space-lg md:px-margin-desktop">
<!-- Pillar Section Header -->
<div class="max-w-3xl mb-16">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed/40 text-primary font-label-sm text-label-sm font-bold mb-3">
<span class="material-symbols-outlined text-[16px]" data-icon="layers">layers</span>
            INTEGRATED SYSTEM ARCHITECTURE
          </div>
<h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-4">
            Everything your store needs to ring up customers, prevent stock leaks, and track pure profit.
          </h2>
<p class="font-body-lg text-body-lg text-on-surface-variant">
            Traditional POS systems isolate checkouts from the back office. FlowPOS binds cashier lanes directly to supplier POs, real-time margins, and automated stock rebalancing.
          </p>
</div>
<!-- Pillar 1: Interactive POS Category Grid -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-24 bg-surface-container-lowest p-6 md:p-10 rounded-2xl border border-surface-container-high shadow-sm">
<div class="lg:col-span-5">
<div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
<span class="material-symbols-outlined text-[28px]" data-icon="touch_app">touch_app</span>
</div>
<span class="text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">PILLAR 01</span>
<h3 class="font-headline-md text-headline-md text-on-surface tracking-tight mt-1 mb-4">
              Interactive POS Category Grid &amp; Touch Speed
            </h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              Eliminate queue bottlenecks during peak retail hours. Staff can punch items in milliseconds using responsive visual tiles or instant barcode wedge scanners.
            </p>
<ul class="space-y-3 font-body-md text-body-md text-on-surface">
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-emerald-600 text-[20px] mt-0.5" data-icon="check_circle">check_circle</span>
<span><strong>Customizable Quick-Action Tiles:</strong> Organize top-sellers into color-coded blocks, tax groups, or kitchen/bar stations.</span>
</li>
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-emerald-600 text-[20px] mt-0.5" data-icon="check_circle">check_circle</span>
<span><strong>Split Payments &amp; Multi-Tender:</strong> Split checks effortlessly across cash, multiple cards, store credit, and customer QR codes.</span>
</li>
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-emerald-600 text-[20px] mt-0.5" data-icon="check_circle">check_circle</span>
<span><strong>Digital WhatsApp &amp; Thermal Receipts:</strong> Auto-dispatch clean PDF invoices via SMS or WhatsApp, or print directly to ESC/POS hardware.</span>
</li>
</ul>
</div>
<!-- Pillar 1 UI Preview: Real ERP Sales Screen -->
<div class="lg:col-span-7 bg-surface-container-low p-5 rounded-xl border border-outline-variant/40">
<div class="bg-surface-container-lowest rounded-lg border border-surface-container-high overflow-hidden shadow-sm">
<img src="assets/sales.png" alt="ERP System sales register — product grid and instant checkout" class="w-full h-auto block" loading="lazy" width="1912" height="962">
</div>
</div>
</div>
<!-- Pillar 2: Smart Inventory & Real-Time Low-Stock Alerts -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-24 bg-surface-container-lowest p-6 md:p-10 rounded-2xl border border-surface-container-high shadow-sm">
<!-- Pillar 2 UI Preview: Real ERP Inventory Screen -->
<div class="lg:col-span-7 order-2 lg:order-1 bg-surface-container-low p-5 rounded-xl border border-outline-variant/40">
<div class="bg-surface-container-lowest rounded-lg border border-surface-container-high overflow-hidden shadow-sm">
<img src="assets/inventory.png" alt="ERP System inventory screen — stock levels, SKU matrix, and low-stock alerts" class="w-full h-auto block" loading="lazy" width="1912" height="962">
</div>
</div>
<div class="lg:col-span-5 order-1 lg:order-2">
<div class="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center mb-5">
<span class="material-symbols-outlined text-[28px]" data-icon="warehouse">warehouse</span>
</div>
<span class="text-amber-700 font-label-sm text-label-sm uppercase tracking-wider font-bold">PILLAR 02</span>
<h3 class="font-headline-md text-headline-md text-on-surface tracking-tight mt-1 mb-4">
              Smart Inventory Sync &amp; Real-Time Low-Stock Alerts
            </h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              Say goodbye to awkward stockout moments when a customer is at the register. FlowPOS deducts items instantly across in-store and online channels with millimeter precision.
            </p>
<ul class="space-y-3 font-body-md text-body-md text-on-surface">
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-emerald-600 text-[20px] mt-0.5" data-icon="check_circle">check_circle</span>
<span><strong>Variant &amp; SKU Matrix:</strong> Seamlessly track sizes, colorways, serials, and batch expiration dates without duplicate entries.</span>
</li>
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-emerald-600 text-[20px] mt-0.5" data-icon="check_circle">check_circle</span>
<span><strong>Automated PO Creation:</strong> One-click supplier Purchase Orders generated when items cross your custom reorder points.</span>
</li>
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-emerald-600 text-[20px] mt-0.5" data-icon="check_circle">check_circle</span>
<span><strong>Instant Slack &amp; SMS Triggers:</strong> Receive real-time push alerts before your bestsellers vanish from the shelves.</span>
</li>
</ul>
</div>
</div>
<!-- Pillar 3: Automated Sales Reports & Financial Insights -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-lowest p-6 md:p-10 rounded-2xl border border-surface-container-high shadow-sm">
<div class="lg:col-span-5">
<div class="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center mb-5">
<span class="material-symbols-outlined text-[28px]" data-icon="finance">finance</span>
</div>
<span class="text-emerald-700 font-label-sm text-label-sm uppercase tracking-wider font-bold">PILLAR 03</span>
<h3 class="font-headline-md text-headline-md text-on-surface tracking-tight mt-1 mb-4">
              Automated Sales Reports &amp; Financial Insights
            </h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              Stop staying late tallying paper receipts and manual register drawers. Generate audit-ready End-of-Day Z-reports and export accounting spreadsheets in one click.
            </p>
<ul class="space-y-3 font-body-md text-body-md text-on-surface">
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-emerald-600 text-[20px] mt-0.5" data-icon="check_circle">check_circle</span>
<span><strong>End-of-Day Z-Reports:</strong> Automated cashier drawer reconciliations highlighting discrepancies down to the cent.</span>
</li>
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-emerald-600 text-[20px] mt-0.5" data-icon="check_circle">check_circle</span>
<span><strong>Gross Margin Analytics:</strong> Real-time visibility into cost-of-goods-sold (COGS) vs net profits per item category.</span>
</li>
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-emerald-600 text-[20px] mt-0.5" data-icon="check_circle">check_circle</span>
<span><strong>Bestseller Leaderboards:</strong> Uncover high-margin hero products and dead stock weighing down your cash flow.</span>
</li>
</ul>
</div>
<!-- Pillar 3 UI Preview: Real ERP Reports Screen -->
<div class="lg:col-span-7 bg-surface-container-low p-5 rounded-xl border border-outline-variant/40">
<div class="bg-surface-container-lowest rounded-lg border border-surface-container-high overflow-hidden shadow-sm">
<img src="assets/report.png" alt="ERP System reports screen — sales analytics, revenue snapshots, and bestseller leaderboard" class="w-full h-auto block" loading="lazy" width="1912" height="962">
</div>
</div>
</div>
</div>
</section>
<!-- ==========================================
         SECTION 5: HOW IT WORKS (3-STEP VISUAL PROCESS)
         ========================================== -->
<section class="py-20 md:py-28 bg-surface-container-lowest border-t border-surface-container-high">
<div class="max-w-[1440px] mx-auto px-space-lg md:px-margin-desktop">
<div class="text-center max-w-2xl mx-auto mb-16">
<span class="text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">ZERO TECHNICAL SETUP REQUIRED</span>
<h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-2 mb-4">
            Live and ringing transactions in three effortless steps.
          </h2>
<p class="font-body-lg text-body-lg text-on-surface-variant">
            Built for busy shop owners. No IT degree, no external server setups, and no lengthy hardware onboarding.
          </p>
</div>
<!-- 3 Step Cards with Timeline Connector -->
<div class="relative grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Connecting line for desktop -->
<div class="hidden md:block absolute top-1/2 left-16 right-16 h-0.5 bg-surface-container-high -translate-y-12 z-0"></div>
<!-- Step 1 -->
<div class="relative z-10 bg-surface-bright p-6 rounded-2xl border border-surface-container-high hover:border-primary/50 transition-all hover:shadow-md group">
<div class="flex items-center justify-between mb-6">
<div class="w-12 h-12 rounded-xl bg-primary text-on-primary font-bold font-display-hero text-headline-sm flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                01
              </div>
<span class="material-symbols-outlined text-on-surface-variant text-[24px]" data-icon="file_upload">file_upload</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">
              Input Products &amp; Categories
            </h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
              Import your existing catalog via CSV spreadsheet or scan physical barcodes right on your phone camera. Setup batches and taxes in under 5 minutes.
            </p>
<div class="p-2.5 bg-surface-container-lowest rounded-lg border border-surface-container text-body-sm font-code-sm text-primary flex items-center gap-2">
<span class="material-symbols-outlined text-[16px]" data-icon="check_circle">check_circle</span>
              Auto-formats CSV &amp; Excel files
            </div>
</div>
<!-- Step 2 -->
<div class="relative z-10 bg-surface-bright p-6 rounded-2xl border border-surface-container-high hover:border-primary/50 transition-all hover:shadow-md group">
<div class="flex items-center justify-between mb-6">
<div class="w-12 h-12 rounded-xl bg-secondary text-on-primary font-bold font-display-hero text-headline-sm flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                02
              </div>
<span class="material-symbols-outlined text-on-surface-variant text-[24px]" data-icon="point_of_sale">point_of_sale</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">
              Process Sales via Blazing-Fast POS
            </h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
              Ring up customers in seconds. Works on iPad, Android tablets, Mac, or Windows. Fully functional offline with automated cloud reconciliation when reconnected.
            </p>
<div class="p-2.5 bg-surface-container-lowest rounded-lg border border-surface-container text-body-sm font-code-sm text-secondary flex items-center gap-2">
<span class="material-symbols-outlined text-[16px]" data-icon="sync">sync</span>
              Zero register stalls or lag
            </div>
</div>
<!-- Step 3 -->
<div class="relative z-10 bg-surface-bright p-6 rounded-2xl border border-surface-container-high hover:border-primary/50 transition-all hover:shadow-md group">
<div class="flex items-center justify-between mb-6">
<div class="w-12 h-12 rounded-xl bg-tertiary-container text-on-primary font-bold font-display-hero text-headline-sm flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                03
              </div>
<span class="material-symbols-outlined text-on-surface-variant text-[24px]" data-icon="query_stats">query_stats</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">
              Monitor Reports &amp; Scale Profits
            </h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
              Access real-time margin dashboards from anywhere. See which products make money, restock before stockouts occur, and send exportable accountant packages.
            </p>
<div class="p-2.5 bg-surface-container-lowest rounded-lg border border-surface-container text-body-sm font-code-sm text-emerald-700 flex items-center gap-2">
<span class="material-symbols-outlined text-[16px]" data-icon="trending_up">trending_up</span>
              Auto-generates IRS/VAT tax reports
            </div>
</div>
</div>
</div>
</section>
<!-- ==========================================
         SECTION 6: FINAL HIGH-CONVERTING CTA BANNER
         ========================================== -->
<section class="py-20 bg-surface" id="demo">
<div class="max-w-[1440px] mx-auto px-space-lg md:px-margin-desktop">
<div class="relative rounded-3xl bg-inverse-surface text-surface-container-lowest p-8 md:p-14 overflow-hidden border border-outline-variant/30 shadow-xl">
<!-- Background Subtle Atmospheric Glow -->
<div class="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none"></div>
<div class="absolute -left-20 -top-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
<div class="relative z-10 max-w-3xl mx-auto text-center">
<span class="px-3 py-1 rounded-full bg-primary/20 text-on-primary-container font-label-sm text-label-sm font-bold border border-primary/30 mb-4 inline-block">
              UPGRADE YOUR STORE CHECKOUT TODAY
            </span>
<h2 class="font-headline-lg text-headline-lg md:text-[40px] md:leading-[48px] text-surface-container-lowest font-bold tracking-tight mb-4">
              Ready to modernize your store operations today?
            </h2>
<p class="font-body-lg text-body-lg text-surface-variant max-w-xl mx-auto mb-8 leading-relaxed">
              Join over 4,200 growing businesses speeding up checkout and eliminating inventory headaches. Try FlowPOS risk-free for 14 days.
            </p>
<!-- Conversion Email Input & Button Cluster -->
<form class="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto mb-6" onsubmit="event.preventDefault();">
<div class="relative w-full">
<span class="material-symbols-outlined absolute left-3.5 top-3 text-tertiary-fixed-dim text-[20px]" data-icon="mail">mail</span>
<input class="w-full pl-11 pr-4 py-3 bg-inverse-surface/90 border border-outline text-surface-container-lowest placeholder:text-surface-dim rounded-xl focus:border-primary-fixed focus:ring-2 focus:ring-primary-fixed/30 text-body-md" placeholder="Enter your business email" required="" type="email"/>
</div>
<button class="w-full sm:w-auto whitespace-nowrap px-6 py-3 rounded-xl bg-primary-container text-on-primary font-title-md text-title-md hover:bg-primary shadow-lg hover:shadow-primary/30 active:scale-95 transition-all" type="submit">
                Start 14-Day Free Trial
              </button>
</form>
<div class="flex items-center justify-center gap-2 mb-8">
<span class="text-body-sm text-surface-variant">Prefer a walkthrough?</span>
<a class="text-on-primary-container hover:underline font-title-md text-body-sm flex items-center gap-1 font-semibold" href="#">
                Book 1-on-1 Guided Demo
                <span class="material-symbols-outlined text-[16px]" data-icon="chevron_right">chevron_right</span>
</a>
</div>
<!-- Reassurance Trust Badges -->
<div class="pt-6 border-t border-outline/30 flex flex-wrap items-center justify-center gap-6 text-surface-variant font-label-md text-label-md">
<span class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-emerald-400 text-[18px]" data-icon="check_circle">check_circle</span>
                Free migration support from any POS
              </span>
<span class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-emerald-400 text-[18px]" data-icon="lock_open">lock_open</span>
                Cancel anytime, no contracts
              </span>
<span class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-emerald-400 text-[18px]" data-icon="support_agent">support_agent</span>
                24/7 Live merchant chat &amp; phone support
              </span>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- ==========================================
       SECTION 7: FOOTER (SHARED JSON BLUEPRINT)
       ========================================== -->
<footer class="w-full px-space-lg md:px-margin-desktop py-space-xl max-w-[1440px] mx-auto border-t border-surface-container-high bg-surface-container-lowest">
<div class="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12">
<!-- Brand & Mission Column -->
<div class="col-span-2">
<a class="flex items-center gap-2 mb-3" href="#">
<div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-on-primary">
<span class="material-symbols-outlined text-[18px]" data-icon="point_of_sale">point_of_sale</span>
</div>
<span class="text-headline-sm font-headline-sm text-primary font-bold">FlowPOS</span>
</a>
<p class="font-body-sm text-body-sm text-on-surface-variant max-w-sm mb-4 leading-relaxed">
          The next-generation retail intelligence platform uniting point-of-sale efficiency, multi-location stock replenishment, and automated tax accounting.
        </p>
<div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-label-sm text-[11px]">
<span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          All Systems Operational (99.98% SLA)
        </div>
</div>
<!-- Links Column 1: Product -->
<div>
<h4 class="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider mb-3">Product</h4>
<ul class="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
<li><a class="hover:text-primary transition-colors duration-150" href="#">Point of Sale</a></li>
<li><a class="hover:text-primary transition-colors duration-150" href="#">Inventory Sync</a></li>
<li><a class="hover:text-primary transition-colors duration-150" href="#">Hardware &amp; Scanners</a></li>
<li><a class="hover:text-primary transition-colors duration-150" href="#">Pricing &amp; Plans</a></li>
<li><a class="hover:text-primary transition-colors duration-150" href="#">Integrations</a></li>
</ul>
</div>
<!-- Links Column 2: Resources & Docs -->
<div>
<h4 class="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider mb-3">Resources</h4>
<ul class="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
<li><a class="hover:text-primary transition-colors duration-150" href="#">Documentation</a></li>
<li><a class="hover:text-primary transition-colors duration-150" href="#">Developer API</a></li>
<li><a class="hover:text-primary transition-colors duration-150" href="#">Retail Guides &amp; COGS</a></li>
<li><a class="hover:text-primary transition-colors duration-150" href="#">Customer Stories</a></li>
<li><a class="hover:text-primary transition-colors duration-150" href="#">Store Migration Kit</a></li>
</ul>
</div>
<!-- Links Column 3: Trust & Compliance -->
<div>
<h4 class="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider mb-3">Compliance</h4>
<ul class="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
<li><a class="hover:text-primary transition-colors duration-150" href="#">Security &amp; Compliance</a></li>
<li><a class="hover:text-primary transition-colors duration-150" href="#">PCI-DSS Level 1</a></li>
<li><a class="hover:text-primary transition-colors duration-150" href="#">Privacy Policy</a></li>
<li><a class="hover:text-primary transition-colors duration-150" href="#">Terms of Service</a></li>
<li><a class="hover:text-primary transition-colors duration-150" href="#">System Status</a></li>
</ul>
</div>
</div>
<!-- Bottom Copyright & Region info -->
<div class="pt-8 border-t border-surface-container flex flex-col sm:flex-row items-center justify-between text-body-sm text-on-surface-variant">
<p class="font-body-sm text-body-sm">
        © 2025 FlowPOS Technologies Inc. All rights reserved.
      </p>
<div class="flex items-center gap-4 mt-3 sm:mt-0 font-body-sm">
<span class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]" data-icon="language">language</span>
          English (United States)
        </span>
<span class="text-outline-variant">•</span>
<span>USD ($)</span>
</div>
</div>
</footer>
</body></html>