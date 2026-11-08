import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Streams } from "@/components/Streams";
import { Merge } from "@/components/Merge";
import { Close, Footer } from "@/components/Close";
import { CropTicks } from "@/components/Marks";

/*
DIRECTION CONTRACT (2026-11-08)
THESIS: The studio's two lines, code and ink, printed on one sheet. Refuses
  the agency scaffold of hero, three service cards, testimonials, CTA.
OWN-WORLD: bone stock ruled into cells with 2px ink; one black keyline that
  holds Nick's handwriting and heavy-outline isometric objects; flat coral,
  cobalt, yellow and mint passes owning whole cells; depth only as a 4px
  misregistered pass. Unbounded display, Figtree body.
STORY: a founder sees that one studio writes the software and draws the
  brand, follows the two streams down the seam until they merge, and sends
  the brief.
FIRST VIEWPORT: headline cell across the seam with "Lines of code. / Lines
  of ink. / Lines by Nick." (third line on a coral block), lede, coral
  "Start a project" and keyline "Contact", handwritten glyphs at right; below,
  a cobalt code cell and a coral ink cell with printed objects start the
  streams.
FORM: The Screen-Print Pull, slot 6 of the grounded list (replacing an
  invalid arcade carrier), staged as "parallel streams merge"; seed 3fdd8e48.
*/

export default function Home() {
  return (
    <div className="sheet-wrap pull">
      <CropTicks />
      <div className="sheet">
        <Nav />
        <main className="span-2 sheet__main">
          <Hero />
          <Streams />
          <Merge />
          <Close />
        </main>
        <Footer />
      </div>
    </div>
  );
}
