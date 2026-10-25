# Mercure Maitland Monte Pio website design brief

A brief for a custom-built hotel website and Monte restaurant micro site that follows The Calile Hotel closely, ready for Claude Code with Frontcraft or looks-expensive, or for ChatGPT. Anything in [square brackets] is a fact still to confirm.

## Project overview

| | |
| --- | --- |
| Property | Mercure Maitland Monte Pio |
| Type | Boutique heritage hotel in the restored Monte Pio building |
| Location | Maitland, NSW, Hunter Valley. Street address [confirm] |
| Brand | Accor, Mercure franchise. Accor web code A0C4 |
| Accor hotel page | https://all.accor.com/hotel/A0C4/index.en.shtml |
| Booking engine | https://all.accor.com/booking/en/accor/hotel/A0C4 (dates and rates page) |
| Current website | https://montepio.com.au/ (links to the Accor page). The new site would likely replace it, so the domain is presumably already held [confirm] |
| Rooms | 59 rooms after the renovation |
| Room numbering | Ground floor 101 to 120, first floor 201 to 239 |
| Room types | Room type for each room number [confirm] |
| In-room art | Six original artworks by Cory Hartono, also used on the keycard |
| Restaurant | Monte, with its own micro site at /monte. Cuisine [confirm] |
| Status | Renovation under way. Opening or relaunch date [confirm] |
| Design direction | Follow The Calile Hotel: calm, editorial, illustrated, gold on white |

- Confirm which room numbers belong to each room type before writing room pages. Room numbers should not appear on the public site.
- The Accor listing (checked 25 Oct 2026) still says 47 rooms and shows the restaurant closed until 30 Nov 2026. Ask Accor to update the listing after the renovation so it matches the new site.
- Heritage facts are not filled in anywhere in this brief. Use placeholders such as [heritage story: confirm with owners], [year built: confirm] and [original use of the building: confirm] until the owners supply sourced history.

## Prerequisites before build

**Confirm Accor Mercure brand and digital guidelines first.** As a franchise, the site will likely need to follow Accor's rules on logo use, naming, the booking engine link, any separate domain, and possibly photography and colours. Get the current Mercure brand and digital guidelines from the Accor franchise contact and approval for a standalone site before design starts. This brief does not assume any specific rule, and Accor's rules win over The Calile reference wherever they conflict.

- Accor approval for a standalone website and domain, and how it relates to the property's Accor page
- Official logo files and lockup rules for Mercure Maitland Monte Pio
- Booking engine link is known (https://all.accor.com/booking/en/accor/hotel/A0C4). Still to confirm with Accor digital: whether deep links can pre-fill dates and guests, and the exact parameter names
- Update the Accor listing after the renovation: it still says 47 rooms and shows the restaurant closed until 30 Nov 2026
- Whether Monte may carry its own branding separate from Mercure
- Permission from Cory Hartono to reproduce the artworks online

## The Calile as the reference

**Inspiration only.** Use The Calile for structure, pacing, proportions and feel. Do not copy its text, photos, illustrations, logos, icons or code. Every word, image and drawing on our site must be our own or properly licensed.

What I found in The Calile's live HTML and CSS on 25 Oct 2026 (https://thecalilehotel.com/). Items marked "my reading" are interpretation, not taken from the code.

| Element | What The Calile does |
| --- | --- |
| Home order | Header, a text-led opening (a gold serif greeting that cycles through languages), four editorial 'day in the life' chapters, an off-white Rooms and Suites panel, footer |
| Chapters | Gold serif heading with a 1 px hairline beside it, a narrow copy block (about 245 to 312 px wide), two offset or overlapping photos and an illustration |
| Nav | Menu button opening a full-screen off-white overlay with grouped links; a gold Bookings button fixed top right; a Curate your stay (packages) link; a Book Direct panel with a members sign-up |
| Hero | No big hero photo on the home page; the opening is type-led and photos arrive with the first chapter (my reading: this is what makes it feel calm) |
| Type | Headings in Beausite Light (serif), body and labels in Brown 300 and 400 (sans). Headings are modest: 22, 26, 32 px for h1 and 22, 26, 30 px for h2. Body 13 to 15 px, weight 300, line height 1.4 to 1.5. Labels and room names uppercase gold sans 15 to 18 px with wide tracking |
| Colour | White base, off-white #F4F4F2 panels, ink #222223, gold #B88B5F (hover #C7996C) for headings, labels, links and buttons, peach #EFD1BC as a rare fill, greys #DDDDDD, #C4C4C4 and #61616C |
| Buttons | Square, gold fill, white uppercase 11 to 13 px text, 1.2 px letter spacing, about 8 by 32 px padding, 0.2 s transition; inverse white and gold version |
| Images | Portraits about 3:4, landscapes about 3:2, room cards 600 by 495 (about 6:5), room page hero 1400 by 827 (about 17:10), mixed sizes offset against each other |
| Illustrations | Colourful hand-drawn figures, plants and still lifes as looping animated GIFs beside photos and on each room page (details below) |
| Motion | A CSS fade-up on scroll (opacity 0 and 150 px down to rest, 1.2 s ease-out, 0.2 s delay, toggled when in view), the cycling greeting, Slick and Swiper carousels, lazysizes lazy loading, a date picker. No GSAP or Lenis found |
| Rooms | Overview grid of nine room types (image, uppercase gold name, one line). Room page: name, feature list, Book Room button, mixed image sequence with a room illustration, Book Room again, More rooms grid |
| Dining | A Drink, Dine and Shop page listing each venue (including Hellenika and sAme sAme) as an image, uppercase gold name, hours line, and Menu and Book Now buttons that link to each restaurant's own website |
| Footer | Members sign-up, app store badges, Instagram feed, awards badge, collection logo |

Secondary notes (optional):

- Capella Sydney: how a heritage sandstone building reads as quiet luxury
- Saffire Freycinet: a regional Australian tone, if more landscape is wanted
- Osteria Francescana: Bodoni headlines, if Monte leans more Italian

## Sitemap

| Path | Page |
| --- | --- |
| / | Home |
| /rooms | Rooms and suites |
| /rooms/[slug] | One page per room type |
| /art | The Collection: Cory Hartono artworks |
| /story | Story and heritage |
| /dining | Dining card for Monte (and any bar), Calile style |
| /monte | Monte micro site home |
| /monte/menu | Menus |
| /monte/gallery | Monte gallery |
| /monte/reserve | Reserve a table |
| /experiences | Maitland and Hunter Valley |
| /events | Events and groups (if offered) |
| /gallery | Hotel gallery |
| /contact | Contact and location |
| /book | Book now, links to Accor |

Global elements, following The Calile: a slim header with a menu button that opens a full-screen off-white menu, the logo, and a gold Bookings button fixed top right that goes to the Accor booking engine.

## Page by page specs

### Home

1. Header: menu button, logo, gold Bookings button
2. Opening: one short line in the gold serif, set with lots of space [our own line, not The Calile's greeting]
3. Editorial chapters, a day at Monte Pio [copy to write]: morning in the building, wandering Maitland, afternoon in the room with an artwork detail, evening at Monte, night
4. Each chapter: gold serif heading and hairline, narrow copy, two offset photos, one illustration
5. Rooms and suites panel on off-white with one image and a link
6. Footer: logo, contact, newsletter [confirm], socials, Accor and ALL references as allowed

### Rooms and room type pages

- Overview: grid of room types, photo about 6:5, uppercase gold name, one line
- Room page: name, feature list, Book Room, mixed image sequence with one room illustration, In this room artwork block, Book Room again, More rooms
- Content needed: room type names, which room numbers belong to each, sizes, beds, features, accessible room details, and which artwork pair hangs in each type [all to confirm]

### Story and heritage

- Editorial chapters in the same Calile style, pairing archive photos with present-day photos and heritage-detail illustrations
- The renovation: what was kept and what is new [confirm with owners]
- Content needed: sourced history, archive images with permissions and credits

### Monte

- Dining card, as The Calile lists its restaurants: image, uppercase name, hours, Menu and Book Now buttons
- Micro site /monte: same Calile system with a light Italian adjustment (accent and optional Bodoni headings), its own sub-navigation and a link back to the hotel
- Menu, gallery and reserve pages; dish and produce illustrations
- Content needed: cuisine, chef, hours, menus, prices, dietary info, booking platform [all to confirm]

### Experiences, events, gallery, contact, book

- Experiences: Maitland and the Hunter Valley with a hand-drawn map. Partners and distances [confirm]
- Events and groups: only if offered [confirm], with an enquiry form
- Gallery: Rooms, Monte, Heritage, Art, Region
- Contact: address, map, phone, email, parking, getting here [confirm]
- Book now: short explanation and the Accor booking link

## Design system

### Hotel palette (close to The Calile)

| Token | Hex | Use |
| --- | ---: | --- |
| white | #FFFFFF | Main background |
| off-white | #F4F4F2 | Panels, menu overlay, alternate sections |
| ink | #222223 | Body text |
| gold | #B88B5F | Headings, labels, links, buttons |
| gold-hover | #C7996C | Hover state |
| peach | #EFD1BC | Rare soft fill |
| hairline | #DDDDDD | Rules and borders |
| muted | #61616C | Secondary text |

These match The Calile's CSS values. Check gold text against WCAG AA at small sizes, and check whether Mercure has colour rules, before locking them in.

### Artwork accents

| Token | Hex | Source |
| --- | ---: | --- |
| art-pink | #DF9D7F | Dusk sky, Maitland Mountains and River |
| art-river | #92B0B4 | River |
| art-olive | #4C4E35 | Gum foliage |
| art-ochre | #A87F52 | Riverbank |
| art-sand | #D6BDA3 | Light ground |

Sampled from the Living A print file on 25 Oct 2026, so treat them as approximate. Use them only for illustration fills, the art page and small details, never in place of gold for buttons.

### Monte sub-theme

| Token | Hex | Use |
| --- | ---: | --- |
| monte-accent | #A65A3F | Terracotta in place of gold (proposal) |
| monte-olive | #4C4E35 | Secondary accent, shared with the artwork |
| monte-night | #2B2420 | Optional evening sections (proposal) |

Monte keeps the white and off-white base and Calile layout. Only the accent, an optional evening section and the heading face change.

### Type

| Role | Free default | Calile original |
| --- | --- | --- |
| Headings | Newsreader 300 (or Cormorant Garamond 300) | Beausite Light (Fatype) |
| Body and labels | Jost 300 and 400 (or DM Sans 300) | Brown 300 and 400 (Lineto) |
| Monte headings | Bodoni Moda 400 at the same modest sizes | None, our choice |

- The free fonts are on Google Fonts under the SIL Open Font License and are fine for commercial use. Self-host via Fontsource
- The free defaults are my nearest matches by eye, not exact equivalents
- Paid upgrade: Beausite (Fatype) and Brown (Lineto) need web licences, usually priced by pageviews. Check each foundry's terms. Using the same fonts as The Calile would also make us look closer to it than we may want
- Sizes follow The Calile: headings 22, 26, 30 px across breakpoints, line height 1.3; labels uppercase 15 to 18 px with wide tracking; body 16 px light (a little larger than The Calile for readability)

### Spacing, grid and images

- Container about 80 percent wide on large screens; narrow copy blocks about 300 px wide beside large images
- Section spacing like The Calile: 64 px on mobile, 96 to 112 px on desktop
- Image ratios: portrait 3:4, landscape 3:2, room card 6:5, room hero 17:10
- Offset and overlap photos of different sizes; leave plenty of empty white space
- Square buttons, 1 px hairlines, no rounded cards, gradients or shadows

## Illustration style

**What The Calile does:** colourful hand-drawn illustrations (people, plants, still lifes, brickwork) in flat colour with fine coloured line work. They are looping animated GIFs of about 44 to 46 frames at 80 to 90 ms each, so roughly a 4 second loop, with a gentle hand-drawn wobble rather than a draw-on effect. They sit loosely beside or over the photos in each home chapter, and each room page has its own.

**What we do:** commission original drawings of Monte Pio's own building, rooms, food and region in a similar spirit. They must not copy The Calile's drawings, characters or compositions.

| Sketch | Where it goes |
| --- | --- |
| Facade, front on | Home opening, footer, Story |
| Entrance and door detail | Home chapter one, Contact |
| Heritage details [as they exist after renovation] | Story chapters, section dividers |
| One vignette per room type | Room pages and room cards on hover |
| Bar or atrium | Home evening chapter, Dining |
| Monte dishes, produce and table still life | Monte chapters, menu headers, Monte footer |
| Hunter Valley and Maitland map | Experiences, Contact |
| Small spot icons (key, cup, glass, leaf) | Section dividers and lists |

- Format: SVG line art with optional flat colour fills from the artwork accents. Animated versions as SVG stroke draw-on (once, on scroll) or a small Lottie or WebP loop, never heavy GIFs
- Restraint: one illustration per screen at most; static when reduced motion is on
- Who could draw them: a local Hunter or Newcastle illustrator, or Cory Hartono, which would tie the drawings to the in-room art [confirm interest and fee]
- AI tools only for rough concept boards to brief the illustrator. Final artwork must be original human work with a written licence for web, print and social use
- File placeholders: src/assets/illustrations/home-*.svg, story-*.svg, room-*.svg, monte-*.svg, map.svg

## Art: the Cory Hartono collection

Six framed prints in three pairs, one larger work for living rooms and one 600 by 600 mm work for bedrooms. Titles below come from the Furn-Niche artwork concept (Rev 0, 2 Sep 2026) and the pre-production report (16 Oct 2026). Treat them as working titles until the artist confirms.

| Work | Title | Basis |
| --- | --- | --- |
| Living A | Maitland Mountains and River | Confirmed by the keycard file |
| Living B | Maitland Bridge | Pair two, matched by image |
| Living C | 1837 Maitland Building | Pair three, matched by image |
| Bedroom A | Hunter Valley Balloon (spelt Ballon in the concept) | Pair one, confirm |
| Bedroom B | Maitland Church | Pair two, confirm |
| Bedroom C | Grasslands and Hills | Pair three, confirm |

- Sizes differ between documents: the concept says 1000 by 1000 mm for living works, the production drawings (FMM502) say 900 by 1100 mm [confirm]
- /art page: each work with image, title, Cory Hartono, medium [confirm], where it hangs and which room types have it [confirm], plus an About the artist block [bio: confirm]
- Room pages: an In this room block with the room's artwork, title, credit and a link to /art
- Keycard tie-in: the v3_final_alt keycard uses a detail of Maitland Mountains and River with the credit 'Artwork: Maitland Mountains & River by Cory Hartono, Mercure Maitland guestroom collection'. Show it on /art and reuse the same credit wording on the site
- Palette: the artwork accent tokens above come from this collection
- Files: only Living A exists on file at full size (/workspace/team/keycard/work/artwork_livingA.jpg). Request high-resolution files of all six from Furn-Niche or the artist. Placeholders: src/assets/art/living-a.jpg to bedroom-c.jpg
- Credit Cory Hartono by name with every work, everywhere it appears

## Motion spec

| Effect | Where | Settings |
| --- | --- | --- |
| Fade-up on scroll | Headings, copy, photos | Follows The Calile: 1.2 s ease-out, 0.2 s delay, once. Travel 40 to 80 px (The Calile uses 150 px) |
| Opening line | Home | A slow fade, or a gentle cycle of a few words [our own] |
| Illustrations | Chapters, rooms, Monte | Stroke draw-on once, or a soft loop |
| Carousels | Room galleries, Monte dishes | Swipe and keyboard accessible, no autoplay |
| Hover | Buttons, links, images | 0.2 s colour change; images may scale 1.02 |
| Smooth scroll (optional) | Whole site | Lenis, light setting. Not used by The Calile |
| Pinned story (optional) | /story only | One calm pinned section, if wanted. Not used by The Calile |

- Calm first, like The Calile: no parallax-heavy hero, counters, text scrambles or bouncing
- Content is readable if JavaScript fails
- prefers-reduced-motion shows everything at rest with no smooth scroll, loops or pinning

## Tech and quality targets

| | |
| --- | --- |
| Framework | Astro with Tailwind CSS and TypeScript |
| Content | Astro content collections for rooms, artworks, illustrations, menu and gallery. A headless CMS later if staff need to edit |
| Animation | IntersectionObserver fade-ups (as The Calile does), optional GSAP for draw-on SVGs, optional Lenis |
| Hosting | Vercel or Netlify, pointing montepio.com.au at the new site [confirm domain access] |
| Images | astro:assets, AVIF and WebP, responsive srcset, lazy loading below the fold |
| SEO | Unique titles and descriptions, Open Graph, sitemap, canonical URLs, JSON-LD Hotel, HotelRoom and Restaurant using confirmed facts only |
| Accessibility | WCAG 2.2 AA: contrast (watch gold on white), keyboard access, focus states, alt text, skip link, reduced motion |
| Performance | Lighthouse 90 or above, LCP under 2.5 s, CLS under 0.1, INP under 200 ms |

## Integrations

| Integration | Approach | To confirm |
| --- | --- | --- |
| Bookings button and Book Room | Link to https://all.accor.com/booking/en/accor/hotel/A0C4 from one config file | Date and guest deep link parameters, with Accor digital |
| Accor hotel page | Secondary link to https://all.accor.com/hotel/A0C4/index.en.shtml | Whether the guidelines require it |
| Monte reservations | Book Now button and widget, as The Calile links each restaurant's booking | Which platform Monte uses |
| Enquiry forms | Netlify Forms or a serverless endpoint to email | Destination email |
| Newsletter | Sign-up in the footer, like The Calile's | Whether wanted, and which tool |

## Photo and video shot list

- Exteriors: facade in warm morning and late afternoon light, street context, entrance, dusk with lights on
- Heritage details: original features, textures, windows, stairs, ceilings [as they exist after renovation]
- Each room type: wide, bed, window light, seating, bathroom, and the Cory Hartono artwork in place
- Portrait and landscape crops of each scene, so chapters can offset a tall and a wide photo
- Public spaces: lobby, reception, atrium and bar
- Monte: dishes, produce, chef at work, the dining room set and in service, drinks
- Maitland and Hunter Valley: town, river, bridge, vineyards, producers
- People in natural moments, with model releases
- Archive: historic photos of the Monte Pio building with permissions and credits

Brief the photographer with The Calile's light and colour as the reference: warm, sunlit, softly styled, lots of negative space in the frame. Check whether Accor has photography standards for Mercure.

## Copy tone

- Warm, understated and a little playful, like The Calile, but in our own words
- Short narrow paragraphs; headings of a few words
- Specific over generic: real materials, real places, real dishes, the real artworks
- No invented facts, awards, reviews or history
- Australian English, 12-hour times, no em dashes

## Build prompts for Claude Code

Paste this whole brief into the repo as BRIEF.md, then run these prompts one phase at a time. Review and commit after each phase.

1. Setup
2. Design system
3. Home
4. Rooms
5. Art
6. Story
7. Monte
8. Other pages
9. Audit

### 1 Setup

Use the frontcraft skill (or looks-expensive). We are building the website for Mercure Maitland Monte Pio, a boutique heritage hotel with 59 rooms in the restored Monte Pio building in Maitland, NSW, in the Hunter Valley. It is an Accor Mercure franchise. The site also includes a micro site at /monte for the hotel restaurant, Monte.

The single design reference is The Calile Hotel (https://thecalilehotel.com/). Follow The Calile for layout, pacing, type, colour, buttons, illustrations and motion as described in BRIEF.md. Use it as inspiration only: never copy its text, photos, illustrations, logos or code.

Read BRIEF.md first (paste this whole brief into it). Set up Astro with Tailwind CSS and TypeScript. Use content collections for rooms, artworks, illustrations, menu items and gallery images. Add astro:assets for responsive images. Create placeholder folders: src/assets/photos, src/assets/art (living-a.jpg, living-b.jpg, living-c.jpg, bedroom-a.jpg, bedroom-b.jpg, bedroom-c.jpg) and src/assets/illustrations (SVG placeholders named in BRIEF.md), filled with neutral grey placeholders at the right ratios. Create src/config/booking.ts with BOOKING_URL = https://all.accor.com/booking/en/accor/hotel/A0C4 and HOTEL_PAGE_URL = https://all.accor.com/hotel/A0C4/index.en.shtml. Keep every [square bracket placeholder] visible in the copy.

## Open decisions for Hubert

- Accor approval for a standalone site and the Mercure brand and digital guidelines
- Domain: confirm montepio.com.au is held and will move to the new site
- Accor booking engine link found (A0C4); date and guest deep link parameters still to confirm with Accor digital
- Accor listing updated to 59 rooms and the restaurant reopening
- Confirm artist bio, titles and permission to reproduce online with the artist (Cory Hartono)
- High-resolution files of all six artworks, and which pair hangs in which room type
- Illustrator chosen (local illustrator or Cory Hartono), with a written licence
- Monte cuisine, chef, hours and reservation platform
- Room type names, which room numbers belong to each type, and details for the 59 rooms
- Heritage story and archive photos, with permissions
- Photographer and shoot date, timed to after the renovation
- Who builds and who maintains the site, and the hosting account owner
- Budget for the shoot, illustrations, any paid fonts and any CMS

Status as of Sun 25 Oct 2026: all items open.
