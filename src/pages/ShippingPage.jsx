import "../styles/customer-policy.css";


function ShippingPage() {
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
            Shipping
          </h1>


          <p className="customer-policy-updated">
            Last updated: September 20, 2026
          </p>


          <p className="customer-policy-intro">
            Harmonic Strings carefully prepares instruments,
            bows, cases, strings, and accessories for shipment.
            Shipping charges are based on the order value and
            the type of product being shipped.
          </p>


          <p className="customer-policy-notice">
            Cellos and cello cases are excluded from our standard
            free-shipping offer because of their size and specialized
            shipping requirements.
          </p>

        </header>


        {/* =====================================
            SHIPPING RATES
        ====================================== */}

        <section className="customer-policy-section">

          <h2>
            Shipping Rates
          </h2>


          <div className="customer-policy-table-wrap">

            <table className="customer-policy-table">

              <thead>

                <tr>

                  <th>
                    Order Type
                  </th>

                  <th>
                    Shipping Charge
                  </th>

                </tr>

              </thead>


              <tbody>

                <tr>

                  <td>
                    Orders of $75 or more
                  </td>

                  <td>
                    Free shipping, excluding cellos and
                    cello cases
                  </td>

                </tr>


                <tr>

                  <td>
                    Orders under $75
                  </td>

                  <td>
                    $7.50 flat-rate shipping
                  </td>

                </tr>


                <tr>

                  <td>
                    Cellos
                  </td>

                  <td>
                    $85 shipping
                  </td>

                </tr>


                <tr>

                  <td>
                    Cello cases
                  </td>

                  <td>
                    $85 shipping
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </section>


        {/* =====================================
            SHIPPING CARRIERS
        ====================================== */}

        <section className="customer-policy-section">

          <h2>
            Shipping Carriers
          </h2>


          <p>
            Harmonic Strings selects the shipping carrier based
            on the size and type of the order.
          </p>


          <ul>

            <li>
              <strong>USPS</strong>{" "}
              is generally used for smaller shipments such as
              strings and accessories.
            </li>


            <li>
              <strong>FedEx Ground</strong>{" "}
              or <strong>UPS</strong>{" "}
              is generally used for larger shipments, including
              instruments and cases.
            </li>

          </ul>


          <p>
            The carrier used for a particular order may vary
            when necessary to ensure appropriate handling and
            delivery.
          </p>

        </section>


        {/* =====================================
            PROCESSING AND DELIVERY
        ====================================== */}

        <section className="customer-policy-section">

          <h2>
            Order Processing and Delivery
          </h2>


          <p>
            Orders are prepared for shipment as promptly as
            possible. Delivery times vary depending on the
            destination, carrier, weather, and other conditions
            affecting transportation.
          </p>


          <p>
            Carrier delivery estimates are estimates only and
            are not guaranteed by Harmonic Strings.
          </p>


          <p>
            When tracking information is available, it will be
            provided after the shipment has been prepared and
            accepted by the carrier.
          </p>

        </section>


        {/* =====================================
            SHIPPING ADDRESS
        ====================================== */}

        <section className="customer-policy-section">

          <h2>
            Shipping Address
          </h2>


          <p>
            Please provide a complete and accurate shipping
            address when placing your order.
          </p>


          <p>
            If you discover an error in your shipping information,
            please contact Harmonic Strings as soon as possible.
            Once a shipment has been transferred to the carrier,
            we may not be able to change the delivery address.
          </p>

        </section>


        {/* =====================================
            SHIPPING DAMAGE
        ====================================== */}

        <section className="customer-policy-section">

          <h2>
            Shipping Damage
          </h2>


          <p>
            If an order arrives with visible shipping damage,
            please retain the product, shipping carton, packing
            materials, and any damaged packaging.
          </p>


          <p>
            Contact Harmonic Strings promptly and provide
            photographs of the package and damaged item so that
            we can review the shipment and help determine the
            appropriate next step.
          </p>

        </section>


        {/* =====================================
            CONTACT
        ====================================== */}

        <section className="customer-policy-section customer-policy-contact">

          <p className="customer-policy-eyebrow">
            Shipping Questions
          </p>


          <h2>
            We&apos;re Here to Help
          </h2>


          <p>
            If you have questions about shipping charges,
            delivery, packaging, or a shipment you have
            received, please contact Harmonic Strings.
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


export default ShippingPage;