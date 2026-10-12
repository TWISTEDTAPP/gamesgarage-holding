# Games Garage – TODO / open decisions

## Done (Phase 1, part 1)
- Next.js + TypeScript + Tailwind site in brand colours and fonts, phone first
- Home, Shop (filters), Card page, Basket with postage calculator and policy tick
- Delivery, Returns & auction policy, Terms, Privacy, Contact pages, trader name/address in footer
- GG Live and Sell to us placeholder pages

## Next
- [ ] Create Supabase project (London region) and add keys to Vercel env vars
- [ ] Move categories/cards/settings into Supabase with Row Level Security
- [ ] Email sign-in and owner panel (list a card, inventory, orders)
- [ ] Stripe checkout (test mode first), webhook marks orders paid
- [ ] Transactional email (Resend/Postmark) without breaking Namecheap forwarding
- [ ] Remove the "examples" banner and sample cards when real stock is listed

## Decisions for the owner
- Royal Mail real rates; dispatch time (currently 3 working days)
- Policy pages need a solicitor or Trading Standards check
- Cookie banner needed once analytics or other non-essential cookies are added
