import Link from "next/link";

export default function ImprintPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto w-full max-w-2xl px-6 md:px-8 py-24 md:py-32">
        <Link
          href="/"
          className="text-xs leading-tight text-gray-400 hover:opacity-60 transition-opacity mb-12 inline-block"
        >
          ← Back
        </Link>

        <h1 className="font-bold leading-tight mb-12">Imprint</h1>

        <div className="space-y-12">
          <section>
            <h2 className="font-bold leading-tight mb-1">Information pursuant to § 5 TMG</h2>
            <p className="leading-tight">
              Marius Jopen<br />
              Am Spitalberg 26<br />
              77654 Offenburg<br />
              Germany
            </p>
          </section>

          <section>
            <h2 className="font-bold leading-tight mb-1">Contact</h2>
            <p className="leading-tight">
              Email: mail@mariusjopen.com<br />
              Website: mariusjopen.com
            </p>
          </section>

          <section>
            <h2 className="font-bold leading-tight mb-1">VAT ID</h2>
            <p className="leading-tight">
              Sales tax identification number according to § 27 a of the Sales Tax Law:<br />
              DE309496904
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
