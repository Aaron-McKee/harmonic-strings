import "../styles/customer-policy.css";


function WarrantyPage() {
  return (
    <main className="customer-policy-page">

      <div className="customer-policy-shell">


        {/* =====================================
            HEADER
        ====================================== */}

        <header className="customer-policy-header">

          <p className="customer-policy-eyebrow">
            Harmonic Strings
          </p>


          <h1>
            Warranty
          </h1>


          <p className="customer-policy-updated">
            Last updated: September 20, 2026
          </p>


          <p className="customer-policy-intro">
            Harmonic Strings is proud to provide high-quality
            musical instruments, bows, cases, and accessories
            at fair and competitive prices, supported by
            attentive and personal service. We stand behind
            the products we sell and want every customer to
            feel confident in their purchase.
          </p>


          <p className="customer-policy-intro">
            Qualifying string instruments, bows, and cases
            purchased from Harmonic Strings include a one-year
            limited warranty. If a covered issue arises, our
            priority is to work with you and provide the
            appropriate service, repair, or replacement so that
            the process is as straightforward and helpful as
            possible.
          </p>


          <p className="customer-policy-notice">
            Our goal is to provide our customers with quality
            products, dependable service, and peace of mind
            before and after every purchase.
          </p>

        </header>


        {/* =====================================
            WARRANTY COVERAGE
        ====================================== */}

        <section className="customer-policy-section">

          <h2>
            Warranty Coverage
          </h2>


          <p>
            The Harmonic Strings one-year limited warranty
            begins on the original date of purchase and covers
            structural issues, defective components, and defects
            in workmanship that occur under normal use.
          </p>


          <p>
            If Harmonic Strings determines that a covered defect
            exists, we will repair or replace the defective item
            at no cost to you. The appropriate solution will be
            determined based on the nature of the issue and the
            condition of the product.
          </p>


          <p>
            For bows, structural components and workmanship are
            covered during the warranty period.
            <strong> Bow hair is not covered by the warranty.</strong>{" "}
            Bow hair is a normal wear item and requires periodic
            replacement depending on use, playing conditions,
            and maintenance.
          </p>


          <p>
            Proof of purchase may be required before warranty
            service can be approved.
          </p>

        </section>


        {/* =====================================
            EXCLUSIONS
        ====================================== */}

        <section className="customer-policy-section">

          <h2>
            What the Warranty Does Not Cover
          </h2>


          <p>
            The warranty is intended to cover defects in
            materials, components, and workmanship. It does not
            cover normal wear or damage resulting from conditions
            unrelated to a product defect.
          </p>


          <ul>

            <li>
              Cosmetic scratches, scuffs, marks, or other
              normal cosmetic wear
            </li>

            <li>
              Excessive or unusual wear and tear
            </li>

            <li>
              Accidental damage
            </li>

            <li>
              Misuse or neglect
            </li>

            <li>
              Improper storage or handling
            </li>

            <li>
              Unauthorized repairs, alterations, or modifications
            </li>

            <li>
              Bow hair
            </li>

            <li>
              Heat or sun-related damage
            </li>

          </ul>

        </section>


        {/* =====================================
            HEAT AND SUN DAMAGE
        ====================================== */}

        <section className="customer-policy-section">

          <h2>
            Heat and Sun Damage
          </h2>


          <p>
            String instruments and bows are especially sensitive
            to excessive heat and direct sunlight. To help protect
            your instrument or bow, it should never be left in a
            hot vehicle, direct sunlight, or another environment
            where temperatures may become excessive.
          </p>


          <p>
            Because heat-related damage is environmental rather
            than a manufacturing or workmanship defect,
            <strong>
              {" "}Harmonic Strings does not warranty heat damage
              in any form.
            </strong>
          </p>

        </section>


        {/* =====================================
            WARRANTY CLAIM
        ====================================== */}

        <section className="customer-policy-section">

          <h2>
            Making a Warranty Claim
          </h2>


          <p>
            If you experience a problem with a product that you
            believe may be covered by this warranty, please
            contact Harmonic Strings. We will work with you to
            understand the issue and determine the appropriate
            next step.
          </p>


          <p>
            To help us evaluate the issue, we may request:
          </p>


          <ul>

            <li>
              Proof of purchase
            </li>

            <li>
              A description of the problem
            </li>

            <li>
              Photographs showing the affected area or component
            </li>

            <li>
              Additional information needed to evaluate the issue
            </li>

          </ul>


          <p>
            Harmonic Strings will provide instructions for
            inspection, repair, replacement, or return shipment
            when appropriate. Please contact us before attempting
            a repair or shipping a warranty item so that we can
            guide you through the process.
          </p>

        </section>


        {/* =====================================
            CONTACT
        ====================================== */}

        <section className="customer-policy-section customer-policy-contact">

          <p className="customer-policy-eyebrow">
            Warranty Questions
          </p>


          <h2>
            We&apos;re Here to Help
          </h2>


          <p>
            If you have a question about your warranty, your
            purchase, or an issue with a product, please contact
            Harmonic Strings. We want to make sure you receive
            the support and service you need.
          </p>


          <div className="customer-policy-contact-details">

            <a href="mailto:lisa@harmonicstrings.net">
              lisa@harmonicstrings.net
            </a>


            <a href="tel:+12564378447">
              256.437.8447
            </a>


            <span>
              Huntsville, Alabama
            </span>

          </div>

        </section>

      </div>

    </main>
  );
}


export default WarrantyPage;