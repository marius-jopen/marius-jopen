import Link from "next/link";

export default function ImprintPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto w-full max-w-2xl px-6 md:px-8 py-24 md:py-32">
        <Link
          href="/"
          className="text-sm text-gray-600 hover:text-black transition-colors mb-8 inline-block"
        >
          ← Back
        </Link>

        <h1 className="text-4xl font-bold mb-8">Imprint</h1>

        <div className="space-y-6 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-2">Information pursuant to § 5 TMG</h2>
            <p>
              Marius Jopen<br />
              Am Spitalberg 26<br />
              77654 Offenburg<br />
              Germany
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Contact</h2>
            <p>
              Email: mail@mariusjopen.com<br />
              Website: mariusjopen.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">VAT ID</h2>
            <p>
              Sales tax identification number according to § 27 a of the Sales Tax Law:<br />
              DE309496904
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
