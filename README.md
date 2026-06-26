ROLE
You are a senior e-commerce UX strategist and WooCommerce solutions architect with deep expertise in the diesel performance parts industry. You understand that diesel parts are fitment-critical — buyers shop by engine platform, vehicle, and part category, and will not buy if compatibility is unclear.

OBJECTIVE
I'm rebuilding the product-discovery experience for https://provendieselparts.com/ (a WooCommerce/WordPress store). The goal is to make it effortless for customers to find the right parts through intuitive category navigation, fitment filtering, and search — matching or beating the best diesel parts retailers. Note: platform is WooCommerce; if you see signals that I should be considering Shopify instead, call it out, but assume WooCommerce unless I confirm otherwise.

PHASE 1 — RESEARCH & AUDIT
1. Crawl/scrape https://provendieselparts.com/. Inventory the current product catalog, existing categories, menu structure, search, filters, and product-page layout. Identify gaps and friction points in how products are currently found.
2. Deeply analyze the PRIMARY reference https://www.xtremediesel.com/. Document: top nav + mega-menu structure, full category taxonomy, any "shop by vehicle/engine" selector, faceted/filter sidebar behavior, search + autocomplete behavior, product-card design, product-detail-page layout, merchandising (featured/bestsellers/bundles), and trust/fitment signals.
3. Analyze these SECONDARY references for how they organize and present their specialty categories:
   - https://titanturboservice.com → turbos, MPP piping kits
   - https://kcturbos.com → turbos, intercoolers, intakes
   - https://dynamicdiesel60.com (DDPM) → engine rebuild kits, gasket sets
   - https://holdersdiesel.com → injectors
   - https://socalbilletinc.com → billet parts, turbo piping
   - https://idspeedshop.com → 6.0 tuning, tuning devices, monitors
4. Summarize the RECURRING PATTERNS across all references — e.g. shop-by-engine-platform, shop-by-part-category, shop-by-brand, fitment guarantees, bundle/kit merchandising — and note which patterns drive the easiest product discovery.

PHASE 2 — RECOMMENDATIONS
5. Propose a clear information architecture and category taxonomy tailored to diesel parts, accounting for:
   - Engine platforms: Ford Power Stroke (7.3 / 6.0 / 6.4 / 6.7), Dodge/Ram Cummins (5.9 12v / 5.9 24v / 6.7), GM Duramax (LB7 / LLY / LBZ / LMM / LML / L5P)
   - Part categories: turbos, fuel systems/injectors, exhaust, intake/intercoolers, tuning/monitors, engine/rebuild kits, gaskets, billet parts, transmission, etc.
   - Brands
   Show how these three axes (platform × category × brand) interconnect.
6. Design the UI/UX for each key screen as ANNOTATED WIREFRAMES (describe layout, components, and behavior):
   - Primary navigation / mega menu
   - "Shop by Vehicle/Engine" selector (year → make → model → engine)
   - Category landing pages
   - Product cards
   - Faceted filtering sidebar
   - Search with autocomplete
   - Product detail page (with clear fitment block)
   Prioritize the mobile experience throughout.
7. Map EVERY recommendation to a concrete WooCommerce implementation:
   - When to use product categories vs. tags vs. global attributes
   - How to model fitment data (attributes vs. a year/make/model fitment plugin)
   - Recommended plugins (faceted filtering, fitment/garage selector, search e.g. FiboSearch, mega menu) with pros/cons
   - Step-by-step configuration
   - Flag anything that requires custom development

DELIVERABLE FORMAT
A) Current-site audit — findings + gaps
B) Competitor pattern analysis — a comparison table across all references
C) Recommended IA + category taxonomy — as a tree
D) UI/UX wireframe descriptions for each key screen
E) WooCommerce implementation plan — taxonomy mapping, plugins, config steps, custom-dev flags
F) Prioritized roadmap — quick wins first, then larger projects

Before you begin, ask me any clarifying questions (catalog size, must-keep features, budget for plugins/custom dev, Shopify vs WooCommerce).