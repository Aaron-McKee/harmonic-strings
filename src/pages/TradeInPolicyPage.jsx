import "../styles/customer-policy.css";


function TradeInPolicyPage() {
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
            Trade-In Policy
          </h1>


          <p className="customer-policy-updated">
            Last updated: September 20, 2026
          </p>


          <p className="customer-policy-intro">
            Harmonic Strings offers an instrument trade-in and
            trade-up program for qualifying instruments originally
            purchased from Harmonic Strings. Our goal is to make it
            easier for musicians to move into an instrument that
            better supports their developing musical needs.
          </p>


          <p className="customer-policy-notice">
            Trade-in values are determined after inspection and
            are not guaranteed until the instrument has been
            evaluated by Harmonic Strings.
          </p>

        </header>


        {/* =====================================
            ELIGIBILITY
        ====================================== */}

        <section className="customer-policy-section">

          <h2>
            Trade-In Eligibility
          </h2>


          <p>
            If you purchased a string instrument from Harmonic
            Strings, you may be eligible to trade that instrument
            toward the purchase of another qualifying instrument
            of greater value.
          </p>


          <ul>

            <li>
              The instrument being traded must have been
              purchased from Harmonic Strings.
            </li>

            <li>
              The replacement instrument must be of greater
              value than the instrument being traded.
            </li>

            <li>
              Trade-in credit may only be applied toward an
              instrument in the same instrument category.
              For example, a violin trade-in may be applied
              toward another violin.
            </li>

            <li>
              Fractional-size instruments may be traded toward
              a different size within the same instrument
              category.
            </li>

          </ul>

        </section>


        {/* =====================================
            CREDIT
        ====================================== */}

        <section className="customer-policy-section">

          <h2>
            Trade-In Credit
          </h2>


          <p>
            Qualifying instruments may receive trade-in credit
            of up to <strong>80% of the original purchase price</strong>.
            The exact credit offered will depend on the current
            condition of the instrument.
          </p>


          <p>
            Trade-in credit is applied directly toward the
            purchase price of the qualifying replacement
            instrument. Any remaining balance is due at the time
            of purchase.
          </p>


          <p>
            Trade-in credit has no cash value and cannot be
            redeemed for cash.
          </p>

        </section>


        {/* =====================================
            CONDITION
        ====================================== */}

        <section className="customer-policy-section">

          <h2>
            Instrument Condition and Evaluation
          </h2>


          <p>
            Every instrument must be evaluated by Harmonic Strings
            before a final trade-in value can be established.
          </p>


          <p>
            Factors that may affect trade-in value include:
          </p>


          <ul>

            <li>
              Structural condition of the instrument
            </li>

            <li>
              Existing damage or previous repairs
            </li>

            <li>
              Excessive cosmetic wear
            </li>

            <li>
              Condition of fittings, hardware, and other
              instrument components
            </li>

            <li>
              Missing, damaged, or replaced components
            </li>

            <li>
              The overall condition and serviceability of
              the instrument
            </li>

          </ul>


          <p>
            Harmonic Strings reserves the right to reduce the
            trade-in value or decline a trade-in when the condition
            of an instrument makes it unsuitable for resale,
            repair, or future use.
          </p>

        </section>


        {/* =====================================
            FRACTIONAL INSTRUMENTS
        ====================================== */}

        <section className="customer-policy-section">

          <h2>
            Fractional-Size Instruments
          </h2>


          <p>
            Fractional-size instruments purchased from Harmonic
            Strings are eligible for trade-in when a player needs
            to move into a different size.
          </p>


          <p>
            This allows developing musicians to move into an
            appropriately sized instrument while receiving
            qualifying credit toward the next instrument.
          </p>

        </section>


        {/* =====================================
            CATEGORY
        ====================================== */}

        <section className="customer-policy-section">

          <h2>
            Same-Category Requirement
          </h2>


          <p>
            Trade-in credit may only be used toward another
            instrument within the same instrument category.
          </p>


          <div className="customer-policy-table-wrap">

            <table className="customer-policy-table">

              <thead>

                <tr>

                  <th>
                    Instrument Traded
                  </th>

                  <th>
                    Eligible Upgrade
                  </th>

                </tr>

              </thead>


              <tbody>

                <tr>

                  <td>
                    Violin
                  </td>

                  <td>
                    Another violin of greater value
                  </td>

                </tr>


                <tr>

                  <td>
                    Viola
                  </td>

                  <td>
                    Another viola of greater value
                  </td>

                </tr>


                <tr>

                  <td>
                    Cello
                  </td>

                  <td>
                    Another cello of greater value
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </section>


        {/* =====================================
            BOWS
        ====================================== */}

        <section className="customer-policy-section">

          <h2>
            Bow Trade-Ins
          </h2>


          <p>
            Bows purchased through Harmonic Strings are
            <strong> not eligible for trade-in</strong> under
            this program.
          </p>

        </section>


        {/* =====================================
            START A TRADE-IN
        ====================================== */}

        <section className="customer-policy-section">

          <h2>
            Starting a Trade-In
          </h2>


          <p>
            Please contact Harmonic Strings before bringing in
            or shipping an instrument for trade-in evaluation.
          </p>


          <p>
            We may ask for information about the instrument,
            photographs of its current condition, and information
            that allows us to confirm the original Harmonic Strings
            purchase before arranging an evaluation.
          </p>


          <p>
            If an instrument must be shipped for evaluation,
            shipping arrangements and any associated costs will
            be confirmed before the instrument is sent.
          </p>

        </section>


        {/* =====================================
            CONTACT
        ====================================== */}

        <section className="customer-policy-section customer-policy-contact">

          <p className="customer-policy-eyebrow">
            Trade-In Questions
          </p>


          <h2>
            Contact Harmonic Strings
          </h2>


          <p>
            Contact us if you would like to discuss whether
            your instrument qualifies for trade-in or would
            like to begin a trade-in evaluation.
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


export default TradeInPolicyPage;