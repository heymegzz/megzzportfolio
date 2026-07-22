#!/bin/bash
npx -y capture-website-cli "https://earmark-ai.vercel.app/" --output=public/earmark-screenshot.png &
npx -y capture-website-cli "https://github.com/heymegzz/causal-uplift" --output=public/causal-uplift-screenshot.png &
npx -y capture-website-cli "https://churniq-bxfx3ucjbzptzd6ayupadj.streamlit.app/" --output=public/churniq-screenshot.png &
npx -y capture-website-cli "https://autopsy-ai-eight.vercel.app/" --output=public/autopsy-screenshot.png &
npx -y capture-website-cli "https://dynamic-pricing-engine-66.streamlit.app/" --output=public/dynamic-pricing-screenshot.png &
npx -y capture-website-cli "https://relief-ops-two.vercel.app/" --output=public/reliefops-screenshot.png &
npx -y capture-website-cli "https://peer-nova.vercel.app/" --output=public/peernova-screenshot.png &
npx -y capture-website-cli "https://github.com/Crunchymon/DVA_CapStone_Amazon_Electronics_Sales" --output=public/amazon-screenshot.png &
npx -y capture-website-cli "https://public.tableau.com/app/profile/khyati.batra6677/viz/Dashboards_17774866991220/LocationMarketOverview?publish=yes" --output=public/nyc-airbnb-screenshot.png &
npx -y capture-website-cli "https://github.com/Jgauri24/fitfusion" --output=public/fitfusion-screenshot.png &
npx -y capture-website-cli "https://nexcoin-heymegzzs-projects.vercel.app/" --output=public/nexcoin-screenshot.png &

wait
echo "All screenshots captured"
