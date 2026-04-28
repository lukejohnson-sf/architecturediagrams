// ============================================================
// NODE DATA - descriptions for modal popups
// ============================================================
const NODE_DATA = {
  shopper: {
    badge: 'Entry Point',
    title: 'Shopper',
    body: 'The end-user browsing the storefront — desktop or mobile browser. All requests originate here and flow through the eCDN edge layer before reaching any compute.',
    links: []
  },
  ecdn: {
    badge: 'CDN',
    title: 'eCDN (Cloudflare)',
    body: 'Salesforce eCDN is powered by Cloudflare. It provides global edge caching, TLS termination, DDoS protection, and routes traffic to the nearest Managed Runtime region. Static assets are served directly from cache at the edge.',
    links: [{ label: 'eCDN Docs', href: 'https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/managed-runtime-infrastructure.html' }]
  },
  waf: {
    badge: 'Security',
    title: 'WAF (Web Application Firewall)',
    body: 'AWS WAF sits in front of CloudFront to block malicious traffic — SQL injection, XSS, rate limiting, and IP allowlisting. Rules are managed by Salesforce and can be extended per tenant.',
    links: []
  },
  'lambda-edge': {
    badge: 'Edge Compute',
    title: 'Lambda@Edge',
    body: 'CloudFront-integrated Lambda functions that execute at AWS edge locations. Used for request routing, A/B test cookie injection, geo-based redirects, and cache key normalization — all before the request reaches the SSR Lambda.',
    links: []
  },
  'api-gateway': {
    badge: 'Routing',
    title: 'API Gateway',
    body: 'AWS API Gateway acts as the entry point for dynamic SSR requests. It routes incoming requests to the appropriate Lambda function version, handles authentication headers, and enforces rate limits.',
    links: []
  },
  s3: {
    badge: 'Storage',
    title: 'S3 Static Assets',
    body: 'Compiled JavaScript bundles, CSS, images, and other static assets are uploaded to S3 during deployment. CloudFront caches and serves these assets globally with long TTLs, keeping Lambda invocations reserved for dynamic SSR.',
    links: []
  },
  'sfn-template': {
    badge: 'Core App',
    title: 'Storefront Next Template',
    body: 'The main application code: a React 19 app that runs server-side inside AWS Lambda on every dynamic request. It renders full HTML responses using React Server Components, then hydrates on the client. The template is built on the PWA Kit foundation.',
    links: []
  },
  react19: {
    badge: 'Framework',
    title: 'React 19',
    body: 'Storefront Next uses React 19 with Server Components (RSC) and Streaming SSR. RSC allows data fetching directly in components on the server without client-side waterfalls. Concurrent rendering means the shell HTML streams to the browser immediately.',
    links: []
  },
  router7: {
    badge: 'Routing',
    title: 'React Router 7',
    body: 'React Router 7 (formerly Remix) powers file-based routing with loaders and actions. Route loaders run on the server (Lambda) to fetch data before rendering, and actions handle form submissions — enabling full progressively-enhanced pages.',
    links: []
  },
  shadcn: {
    badge: 'UI Components',
    title: 'ShadCN/UI',
    body: 'A collection of accessible, unstyled components built on Radix UI primitives, styled with TailwindCSS. Components are copied into the project (not installed as a package) so teams can fully customize them without fighting library abstractions.',
    links: []
  },
  tailwind: {
    badge: 'Styling',
    title: 'TailwindCSS',
    body: 'Utility-first CSS framework. The JIT compiler generates only the CSS classes actually used, keeping bundle sizes minimal. Tailwind\'s design token system ensures consistent spacing, color, and typography across the storefront.',
    links: []
  },
  'pagedesigner-fe': {
    badge: 'CMS',
    title: 'Page Designer (Frontend)',
    body: 'Storefront Next ships Page Designer rendering components that consume JSON layout data from B2C Commerce and render it as React components. Merchandisers can visually arrange pages in Business Manager without code changes.',
    links: []
  },
  sdk: {
    badge: 'API Client',
    title: 'Commerce SDK',
    body: 'The Salesforce Commerce SDK (commerce-sdk-isomorphic) provides typed API clients for all SCAPI endpoints. It runs both server-side (in Lambda for SSR) and client-side (for mutations like cart updates). Handles token management automatically.',
    links: []
  },
  'kv-store': {
    badge: 'Edge Storage',
    title: 'KV Store',
    body: 'A globally distributed key-value store at the MRT edge layer. Stores shopper segment and personalization data synced from Data Cloud. The SSR Lambda reads from KV at render time to personalize pages without a round-trip to SCAPI.',
    links: []
  },
  'scapi-zone': {
    badge: 'API Zone',
    title: 'SCAPI Zone (Cloudflare)',
    body: 'The Shopper Commerce API (SCAPI) is fronted by a dedicated Cloudflare zone for additional edge caching, rate limiting, and tenant routing. All API traffic from the Lambda SSR and browser goes through this zone.',
    links: []
  },
  jwa: {
    badge: 'Runtime',
    title: 'JWA (Java Web Application)',
    body: 'The B2C Commerce server runtime — a Java application that processes business logic, runs cartridge pipelines, and serves SCAPI. It\'s the bridge between the modern React frontend and the B2C Commerce platform.',
    links: []
  },
  'custom-apis': {
    badge: 'Extension',
    title: 'Custom APIs',
    body: 'B2C Commerce allows extending SCAPI with custom REST endpoints defined via api.json route files in cartridges. These custom APIs follow the same SCAPI authentication model and are accessible to the Storefront Next SDK.',
    links: []
  },
  hooks: {
    badge: 'Extension',
    title: 'Hooks',
    body: 'B2C Commerce hooks (HookMgr) let cartridges intercept and extend platform behavior without modifying core code. Common hooks include dw.ocapi.shop.* for SCAPI extensions and basket/order processing hooks.',
    links: []
  },
  'scapi-cartridge': {
    badge: 'API',
    title: 'SCAPI (Cartridge)',
    body: 'The Shopper Commerce API layer within B2C — handles product search, catalog browsing, basket management, checkout, and order placement. These are the primary APIs consumed by Storefront Next via the Commerce SDK.',
    links: []
  },
  'pd-cartridge': {
    badge: 'CMS',
    title: 'Page Designer (B2C)',
    body: 'The server-side Page Designer component in B2C Commerce. Serializes page layout and component data as JSON responses via the Pages API, which the Storefront Next frontend then renders into React components.',
    links: []
  },
  p13n: {
    badge: 'Personalization',
    title: 'Promotions, Campaigns & P13N',
    body: 'B2C Commerce\'s native promotion engine (customer groups, coupon codes, shipping promotions) combined with Einstein personalization (CQuotient). Segment data from Data Cloud flows in to target campaign experiences.',
    links: []
  },
  'content-assets': {
    badge: 'Content',
    title: 'Content Assets',
    body: 'HTML content blocks and rich media managed in Business Manager. Referenced in Page Designer layouts and served via SCAPI. Supports localization and A/B content targeting.',
    links: []
  },
  metadata: {
    badge: 'Config',
    title: 'Metadata',
    body: 'Custom object type definitions, system object extensions, and site preferences stored in the B2C database. Defines the data shape for products, customers, orders, and custom business objects.',
    links: []
  },
  settings: {
    badge: 'Config',
    title: 'Settings',
    body: 'Site preferences and custom preferences managed in Business Manager. Control feature flags, third-party integration credentials, and storefront behaviors without code deployments.',
    links: []
  },
  'dc-segments': {
    badge: 'Segmentation',
    title: 'Datacloud Segments',
    body: 'Customer segments computed by Salesforce Data Cloud and synchronized into B2C Commerce. Used to target promotions and personalize experiences. The sync flows: Data Cloud → KV Store (edge) and → B2C database.',
    links: []
  },
  'einstein-segments': {
    badge: 'AI',
    title: 'Einstein Segments',
    body: 'AI-computed behavioral segments from Einstein CQuotient. Based on browsing history, purchase patterns, and affinity scores. Used to drive product recommendations and personalized category sorting.',
    links: []
  },
  'data-cloud': {
    badge: 'Core Service',
    title: 'Salesforce Data Cloud',
    body: 'The unified customer data platform. Ingests first-party commerce data (orders, browsing, loyalty) and enriches it with CRM data. Computes audience segments that flow back into B2C Commerce for targeting.',
    links: []
  },
  einstein: {
    badge: 'AI',
    title: 'Einstein (CQuotient)',
    body: 'Einstein Commerce AI — formerly CQuotient. Provides real-time product recommendations, personalized search ranking, and predictive merchandising. Reads shopper behavior signals from B2C and serves recommendation slots via SCAPI.',
    links: []
  },
  // Diagram 2 flow cards
  'user-request': {
    badge: 'Request',
    title: 'User Request',
    body: 'An HTTPS GET request from the shopper\'s browser. For first-visit or cache-miss scenarios, this flows all the way to the SSR Lambda. Cached responses are served directly from CloudFront.',
    links: []
  },
  'ecdn-2': {
    badge: 'CDN',
    title: 'eCDN / Cloudflare',
    body: 'Cloudflare edge network terminates TLS, applies firewall rules, and checks the cache. Cache HIT → response served in <50ms globally. Cache MISS → request forwarded to MRT/CloudFront.',
    links: []
  },
  'waf-2': {
    badge: 'Security',
    title: 'WAF',
    body: 'Web Application Firewall blocks malicious requests before they reach compute. Rules include OWASP core rule set, bot detection, and rate limiting per IP/path.',
    links: []
  },
  'lambda-edge-2': {
    badge: 'Edge Compute',
    title: 'Lambda@Edge',
    body: 'Lightweight JS functions at CloudFront edge. Handle request normalization (trailing slashes, locale prefixes), cookie-based routing for A/B tests, and auth token forwarding.',
    links: []
  },
  'sfn-2': {
    badge: 'SSR',
    title: 'Storefront Next Template',
    body: 'The full React 19 application runs inside Lambda on every cache miss. React Router 7 loaders fire in parallel to fetch commerce data, then the component tree renders to HTML. First byte streams within ~200ms.',
    links: []
  },
  'kv-2': {
    badge: 'Edge Storage',
    title: 'KV Store',
    body: 'The Lambda function reads personalization data (shopper segments, A/B buckets) from the KV Store at render time. This avoids a round-trip to the B2C backend for personalization.',
    links: []
  },
  's3-2': {
    badge: 'Static Assets',
    title: 'S3 Static Assets',
    body: 'JS bundles, CSS, and images are stored in S3 and distributed via CloudFront with aggressive caching (1 year + content-hash filenames). Never served by Lambda.',
    links: []
  },
  // Tags
  'react-tag': {
    badge: 'React 19',
    title: 'React 19 — Server Components',
    body: 'React Server Components (RSC) allow data fetching directly in server-rendered components with zero client JS overhead. Streaming SSR sends HTML to the browser progressively.',
    links: []
  },
  'router-tag': {
    badge: 'Routing',
    title: 'React Router 7',
    body: 'File-based routing with loaders (data fetching) and actions (mutations). Enables nested layouts, optimistic UI, and form actions that work without JavaScript.',
    links: []
  },
  'shadcn-tag': {
    badge: 'UI',
    title: 'ShadCN/UI',
    body: 'Accessible components built on Radix UI. Copied into your project so you own the code — no locked-in version, full customization.',
    links: []
  },
  'tailwind-tag': {
    badge: 'CSS',
    title: 'TailwindCSS',
    body: 'Utility classes eliminate CSS naming and dead-code problems. JIT compilation means only used utilities are included in the final bundle.',
    links: []
  },
  'pd-tag': {
    badge: 'CMS',
    title: 'Page Designer',
    body: 'Renders B2C Page Designer JSON layouts as React component trees. Merchandisers control page content in Business Manager; developers define the React component palette.',
    links: []
  },
  'sdk-tag': {
    badge: 'SDK',
    title: 'Commerce SDK',
    body: 'commerce-sdk-isomorphic — typed SCAPI clients that work in both Lambda (SSR) and browser (client mutations). Auto-refreshes SLAS tokens.',
    links: []
  },
  // Data flow nodes
  'df-browser': {
    badge: 'Browser',
    title: 'Browser / PWA',
    body: 'Progressive Web App shell. After the SSR response hydrates, React takes over for client-side navigation. Uses React Router 7 client-side routing for subsequent page visits.',
    links: []
  },
  'df-cdn': {
    badge: 'Edge',
    title: 'eCDN Edge',
    body: 'Cloudflare PoPs globally cache HTML responses (cache-control headers set by Lambda), static assets (1 year), and SCAPI responses (short TTLs for product/price data).',
    links: []
  },
  'df-ssr': {
    badge: 'SSR',
    title: 'SSR Render',
    body: 'Lambda renders the full page HTML. React Router loaders fire in parallel — product data, category, recommendations — then React renders to string and streams the response.',
    links: []
  },
  'df-sdk': {
    badge: 'SDK',
    title: 'Commerce SDK',
    body: 'The SDK\'s SCAPI clients fire from within React Router loaders. Multiple API calls (search, categories, recommendations) fire in parallel via Promise.all.',
    links: []
  },
  'df-kvread': {
    badge: 'KV',
    title: 'KV Store Read',
    body: 'Before rendering, Lambda reads the shopper\'s segment assignments from the edge KV Store. This data is injected into the render context for personalized component decisions.',
    links: []
  },
  'df-scapi': {
    badge: 'API',
    title: 'SCAPI APIs',
    body: 'Shopper Commerce APIs: product search, catalog, basket, checkout, orders, recommendations. REST + JSON, authenticated with SLAS JWT tokens.',
    links: []
  },
  'df-custom': {
    badge: 'Custom',
    title: 'Custom APIs',
    body: 'Merchant-built REST endpoints in B2C cartridges. Same authentication model as SCAPI. Useful for loyalty, gift cards, third-party integrations not covered by standard SCAPI.',
    links: []
  },
  'df-hooks': {
    badge: 'Hooks',
    title: 'B2C Hooks',
    body: 'HookMgr intercepts platform operations — add-to-cart, checkout steps, order placement. Hooks run cartridge code to apply custom business logic without modifying core.',
    links: []
  },
  'df-catalog': {
    badge: 'Products',
    title: 'Catalog / Products',
    body: 'B2C Commerce product catalog: master/variation products, prices (price books), inventory (inventory lists), and availability. Indexed and searchable via the SCAPI product-search endpoint.',
    links: []
  },
  'df-promotions': {
    badge: 'P13N',
    title: 'Promotions & P13N',
    body: 'Promotion engine evaluates applicable discounts for the shopper\'s basket and customer group. Personalization rules target specific segments with custom product slotting and category sorting.',
    links: []
  },
  'df-content': {
    badge: 'CMS',
    title: 'Content Assets',
    body: 'HTML content fragments and media managed in Business Manager. Rendered in Page Designer slots. Supports locale-specific content and scheduled publishing.',
    links: []
  },
  'df-datacloud': {
    badge: 'Data',
    title: 'Salesforce Data Cloud',
    body: 'Unified customer data platform. Processes commerce events (order placed, product viewed) and CRM data. Produces real-time audience segments that flow back to B2C for targeting.',
    links: []
  },
  'df-einstein2': {
    badge: 'AI',
    title: 'Einstein AI',
    body: 'CQuotient-powered recommendation engine. Serves personalized product grids, "you may also like" carousels, and trending products. Ingests B2C clickstream data continuously.',
    links: []
  },
  'df-segments': {
    badge: 'Segments',
    title: 'Audience Segments',
    body: 'Data Cloud and Einstein produce segment assignments per shopper. These sync into: B2C database (for promotion targeting) and KV Store (for edge personalization at SSR time).',
    links: []
  },
  // Auth nodes
  'auth-browser': {
    badge: 'Client',
    title: 'Browser',
    body: 'The shopper\'s browser initiates all auth flows. PKCE (Proof Key for Code Exchange) is used to prevent code interception in public clients. Tokens are stored in memory or httpOnly cookies.',
    links: []
  },
  'auth-slas': {
    badge: 'Auth Service',
    title: 'SLAS (Shopper Login & API Access Service)',
    body: 'Salesforce\'s OAuth 2.0 authorization server for B2C Commerce. Issues JWT access tokens and refresh tokens. Supports guest flows (PKCE), registered shopper login, and social login via external IdPs.',
    links: []
  },
  'auth-1': {
    badge: 'Step 1',
    title: 'Guest Token Request',
    body: 'On first page load, if no token exists, the Commerce SDK automatically requests a guest access token via PKCE. The code_verifier is generated client-side and never sent over the wire — only the code_challenge hash.',
    links: []
  },
  'auth-2': {
    badge: 'Step 2',
    title: 'Access Token Issued',
    body: 'SLAS returns a short-lived JWT access token (30 min) and a longer-lived refresh token (90 days). The SDK stores these and attaches the access token as a Bearer token on every SCAPI request.',
    links: []
  },
  'auth-3': {
    badge: 'Step 3',
    title: 'API Calls via SDK',
    body: 'All SCAPI calls from the Commerce SDK include the Bearer token in the Authorization header. SCAPI validates the JWT signature against SLAS keys and extracts the shopper identity.',
    links: []
  },
  'auth-4': {
    badge: 'Step 4',
    title: 'Registered Shopper Login',
    body: 'Full PKCE authorization code flow: browser redirects to SLAS login page → shopper authenticates → authorization code returned → code exchanged for tokens. Merges guest basket into shopper basket.',
    links: []
  },
  'auth-5': {
    badge: 'Step 5',
    title: 'Token Refresh',
    body: 'Before the access token expires, the SDK silently calls the SLAS token endpoint with the refresh token to get a new access token. The shopper stays logged in across sessions without re-authentication.',
    links: []
  },

  // Composable diagram
  'comp-partner': {
    badge: 'Partner',
    title: 'Partner — Build & Publish',
    body: 'Partners build extensions as completely separate packages — no forking the core storefront. They can extend or replace specific UI targets, replace entire routes with custom implementations, inject custom data providers, and optionally use AI-assisted merging to integrate their code deep into a merchant\'s storefront.',
    links: []
  },
  'comp-merchant': {
    badge: 'Merchant',
    title: 'Merchant — Install & Deploy',
    body: 'Merchants discover and install apps directly from Business Manager or AppExchange. Installation is seamless — no manual code merges needed. Apps deploy via GitHub CI/CD to Managed Runtime automatically, making updates and rollbacks straightforward.',
    links: []
  },
  'comp-shoppers': {
    badge: 'End User',
    title: 'Shoppers',
    body: 'The end customers who benefit from the composable architecture without knowing it exists. Partner apps deliver custom experiences — loyalty widgets, custom recommendation carousels, alternative checkout flows — all running inside the Storefront Next SSR layer.',
    links: []
  },
  'comp-mrt': {
    badge: 'Runtime',
    title: 'Managed Runtime (MRT)',
    body: 'Managed Runtime hosts the deployed storefront. When a merchant installs an app, the app\'s cartridge code merges into the merchant\'s Customer Repo, then a GitHub Actions workflow triggers a new MRT deployment automatically. Zero downtime deploys via blue/green Lambda versioning.',
    links: []
  },
  'comp-customer-repo': {
    badge: 'GitHub',
    title: 'Customer Repo',
    body: 'The merchant\'s own GitHub repository forked from the Storefront Next template. This is what gets deployed to MRT. Partner apps are installed here — either as Git submodules, npm packages, or via AI-assisted code injection. The CI/CD pipeline in this repo drives all MRT deployments.',
    links: []
  },
  'comp-bm': {
    badge: 'Platform',
    title: 'Business Manager',
    body: 'Salesforce B2C Commerce\'s admin UI. Merchants discover installable apps here, manage app configurations, and trigger deployments — all without leaving Business Manager. The install flow calls the SCAPI Admin APIs to push app code to the Customer Repo.',
    links: []
  },
  'comp-appex': {
    badge: 'Marketplace',
    title: 'App Exchange',
    body: 'Salesforce AppExchange is the marketplace where partners list their B2C Commerce apps. Merchants browse, review, and select apps to install. AppExchange handles licensing, reviews, and version management for the partner ecosystem.',
    links: []
  },
  'comp-commerce-apps': {
    badge: 'Registry',
    title: 'Commerce Apps',
    body: 'The central registry of published Commerce Apps — a GitHub-based repository that acts as the canonical source for app packages. When a partner publishes an app, it appears here. When a merchant installs, the platform pulls the app bundle from this registry into the Customer Repo.',
    links: []
  },
  'comp-devs': {
    badge: 'Builder',
    title: 'Developers / Partners',
    body: 'ISV partners and system integrators who build Commerce Apps. They develop against the Storefront Next extension APIs, test against a sandbox, and publish to the Commerce Apps registry via the partner portal. Apps can be free, paid, or private (partner-only).',
    links: []
  },
  'comp-partner-apps': {
    badge: 'App Package',
    title: 'Partner Apps',
    body: 'A Partner App is a self-contained extension package: cartridge code (B2C backend logic), React components (frontend UI extensions), metadata XML (site preferences, custom attributes), and an app manifest. Published to the Commerce Apps registry and versioned semantically.',
    links: []
  }
};

// ============================================================
// MODAL
// ============================================================
const overlay = document.getElementById('modal-overlay');
const modal = document.getElementById('modal');
const modalBadge = document.getElementById('modal-badge');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalLinks = document.getElementById('modal-links');
const modalClose = document.getElementById('modal-close');

function openModal(id) {
  const data = NODE_DATA[id];
  if (!data) return;
  modalBadge.textContent = data.badge;
  modalTitle.textContent = data.title;
  modalBody.textContent = data.body;
  modalLinks.innerHTML = '';
  if (data.links && data.links.length) {
    data.links.forEach(l => {
      const a = document.createElement('a');
      a.href = l.href;
      a.textContent = l.label;
      a.className = 'modal-link';
      a.target = '_blank';
      a.rel = 'noopener';
      modalLinks.appendChild(a);
    });
  }
  overlay.classList.add('open');
}

function closeModal() {
  overlay.classList.remove('open');
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Wire up all data-id clickable elements
document.querySelectorAll('[data-id]').forEach(el => {
  el.addEventListener('click', e => {
    e.stopPropagation();
    openModal(el.getAttribute('data-id'));
  });
});

// ============================================================
// NAV TABS — smooth scroll to section
// ============================================================
document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = document.getElementById(tab.getAttribute('data-target'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Update active tab on scroll
const sections = ['diagram-highlevel', 'diagram-mrt', 'diagram-dataflow', 'diagram-auth', 'diagram-composable'];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      document.querySelectorAll('.nav-tab').forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-target') === id);
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(id => {
  const el = document.getElementById(id);
  if (el) observer.observe(el);
});

// ============================================================
// BACKGROUND PARTICLE CANVAS
// ============================================================
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let W, H;

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

function randomBetween(a, b) { return a + Math.random() * (b - a); }

function initParticles() {
  particles = [];
  const count = Math.min(80, Math.floor(W * H / 18000));
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: randomBetween(-0.15, 0.15),
      vy: randomBetween(-0.15, 0.15),
      r: randomBetween(1, 2.5),
      alpha: randomBetween(0.1, 0.5),
      color: Math.random() > 0.5 ? '0,112,210' : '124,58,237'
    });
  }
}
initParticles();

function drawParticles() {
  ctx.clearRect(0, 0, W, H);

  // Draw connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0,112,210,${0.06 * (1 - dist / 150)})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  // Draw particles
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
    ctx.fill();

    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0) p.x = W;
    if (p.x > W) p.x = 0;
    if (p.y < 0) p.y = H;
    if (p.y > H) p.y = 0;
  });

  requestAnimationFrame(drawParticles);
}
drawParticles();

// ============================================================
// INTERSECTION OBSERVER — reveal sections
// ============================================================
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.diagram-section').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(32px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  revealObs.observe(el);
});

// ============================================================
// CURSOR GLOW
// ============================================================
const glow = document.createElement('div');
glow.style.cssText = `
  position: fixed;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,112,210,0.06) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
  transform: translate(-50%, -50%);
  transition: left 0.1s, top 0.1s;
`;
document.body.appendChild(glow);

document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
});
