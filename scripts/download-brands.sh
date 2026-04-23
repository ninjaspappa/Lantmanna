#!/bin/bash
set -u
mkdir -p public/brands
cd public/brands

BASE="https://lantmanna.nu/wp-content/uploads/2023/11"

fetch() {
  local out="$1"
  local url="$2"
  # -f: fail on HTTP errors; -s: silent; -S: show errors; -L: follow redirects
  if curl -fsSL -o "$out" "$url"; then
    echo "ok   $out"
  else
    echo "FAIL $out  ($url)"
  fi
}

fetch honda.png           "$BASE/Honda-150x150.png"
fetch carhartt.png        "$BASE/Carhartt-new-150x150.png"
fetch blundstone.png      "$BASE/Blundstone-square-150x150.jpg"
fetch gardena.png         "$BASE/Gardena-150x150.png"
fetch krafft.png          "$BASE/Krafft-150x150.png"
fetch bozita.png          "$BASE/Bozita-150x150.png"
fetch ryobi.png           "$BASE/Ryobi-150x150.png"
fetch teknos.png          "$BASE/Teknos-150x150.png"
fetch jalas.png           "$BASE/Jalas-150x150.png"
fetch aga.png             "$BASE/AGA-150x150.png"
fetch air-liquide.png     "$BASE/Air-Liquide-150x150.jpg"
fetch fladen.png          "$BASE/Fladen-150x150.png"
fetch dogman.png          "$BASE/Dogman-150x150.png"
fetch doggy.png           "$BASE/Doggy-150x150.png"
fetch tegera.png          "$BASE/Tegera-1-150x150.png"
fetch oregon.png          "$BASE/Oregon-square-150x150.png"
fetch svenska-foder.png   "$BASE/Svenska-foder-150x150.png"
fetch arion.png           "$BASE/Arion-150x150.jpg"
fetch brogaarden.png      "$BASE/Brogaarden-150x150.png"
fetch hippo.png           "$BASE/Hippo.png"
fetch dodson-horrell.png  "$BASE/Dodson-och-Hrrell-150x150.png"
fetch gelia.png           "$BASE/Gelia-150x150.jpg"
fetch carapax.png         "$BASE/Carapax-150x150.jpg"
fetch fodax.png           "$BASE/Fodax-150x150.png"
fetch grimsholm.png       "$BASE/Grimsholm-150x150.png"
fetch monster-kattmat.png "$BASE/Monster-kattmat-150x150.png"
fetch mjau.png            "$BASE/Mjau-150x150.png"
fetch everclean.png       "$BASE/Everclean-150x150.jpg"

echo "Done."
